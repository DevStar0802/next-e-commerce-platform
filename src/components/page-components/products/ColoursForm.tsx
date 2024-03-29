import { FC, useEffect, useState } from 'react';
import Input from '@/components/molecules/Inputs/Input';
import { ProductWithCollectionsGraphqlDto } from '@/generated/types';
import { Button } from '@/components/molecules/Button';
import { apiConfig } from '@/utils/apiConfig';
import { AttachmentResourceApi, ProductRequestDTO, ProductResourceApi } from 'client/command';
import Toast from '../Toast';
import CreatableSelect from 'react-select/creatable';
import { fonts } from '@/config/fonts';
import clsx from 'clsx';
import { createableSelectStyles } from './utils';
import { FileUpload } from '@/components/molecules/FileUpload';
import { useRouter } from 'next/router';

interface ColoursFormProps {
  product: ProductWithCollectionsGraphqlDto;
}

const ColoursForm: FC<ColoursFormProps> = ({ product }) => {
  const [productDetails, setProductDetails] = useState<ProductRequestDTO>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMesage] = useState('');

  const router = useRouter();
  const id = router?.query?.id || '';
  const organizationId: number = Number(id);

  useEffect(() => {
    setProductDetails({
      colour_name: product?.colour_name || '',
      colour_code: product?.colour_code || '',
      colour_families: product?.colour_families as string[],
    });
  }, [product]);

  const handleInputChange = (name: string, value: string | string[]) => {
    setProductDetails({
      ...productDetails,
      [name]: value,
    });
  };

  const handleSave = async () => {
    setIsSubmitted(true);
    try {
      const config = await apiConfig();
      const api = new ProductResourceApi(config);
      await api.apiProductUpdateProductPut(product?.id, productDetails);
      setIsSubmitted(false);
      setSuccessMessage('Product updated successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      setIsSubmitted(false);
      setErrorMesage('Failed to update product!');
      console.error(error);
    }
  };

  const handleUpload = async (file: File) => {
    setIsSubmitted(true);
    try {
      const config = await apiConfig();
      const api = new AttachmentResourceApi(config);
      await api.apiAttachmentUploadProductSwatchImagePost(organizationId, product.id, file, file.name);
      setIsSubmitted(false);
      setSuccessMessage('Swatch image uploaded successfully!');
    } catch (error: any) {
      setIsSubmitted(false);
      setErrorMesage(error?.message || 'Failed to upload swatch image!')
    }
  }

  return (
    <div className="max-w-[736px]">
      <div className='flex gap-x-8'>
        <div className="max-w-[352px]">
          <Input
            label="Colour name"
            value={productDetails?.colour_name || ''}
            onChange={(value: string) => handleInputChange('colour_name', value)}
            isValid={false}
            className="w-full"
          />
          <Input
            label="Colour code"
            value={productDetails?.colour_code || ''}
            onChange={(value: string) => handleInputChange('colour_code', value)}
            isValid={false}
            className="w-full"
          />
          <div className="my-3 relative">
            <label
              className={clsx(
                'absolute top-[-8px] left-4 z-[2] bg-shades-white font-light px-1',
                fonts.text.md
              )}
            >
              Colour Families
            </label>
            <CreatableSelect
              id="colour_families"
              value={productDetails?.colour_families?.map((item) => ({
                label: item,
                value: item,
              }))}
              placeholder=""
              options={productDetails.colour_families?.map((item) => ({
                label: item,
                value: item,
              }))}
              isMulti
              styles={createableSelectStyles}
              onChange={(e: any) =>
                handleInputChange(
                  'colour_families',
                  e?.map((item: { label: string; value: string }) => item.value)
                )
              }
            />
          </div>
          <div className="mt-5 inline-flex">
            <Button onClick={handleSave} disabled={isSubmitted}>
              Save
            </Button>
        </div>
        </div>
        <div className="max-w-[352px] mx-auto mt-3">
          <FileUpload
            idInput='fabricationSwatch'
            labelText="Fabrication swatch"
            imageUrl={''}
            disabled={isSubmitted}
            handleUpload={handleUpload}
          />
        </div>
      </div>
      <Toast successMessage={successMessage} errorMessage={errorMessage} />
    </div>
  );
};

export default ColoursForm;
