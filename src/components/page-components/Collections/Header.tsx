import { FC } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@/components/molecules/Button';
import { DropdownMenu } from '@/components/molecules/DropdownMenu';
import { Icon } from '@/components/molecules/Icon';
import ArrowIconLeft from '@/assets/svgs/arrow-left.svg';
import { apiConfig } from '@/utils/apiConfig';
import { CollectionReportResourceApi } from 'client/command';
import { downloadFile } from '@/utils/downloadFile';

interface HeaderProps {
  handleCreateOrder: () => void;
  onEdit: () => void;
  handleErrorMessage?: (message: string) => void;
}

const Header: FC<HeaderProps> = ({
  handleCreateOrder,
  onEdit,
  handleErrorMessage,
}) => {
  const router = useRouter();
  const collectionId = Number(router?.query?.collectionId);

  const handleDownloadCollection = async (downloadAs: 'pdf' | 'xlsx') => {
    try {
      const config = await apiConfig();
      const api = new CollectionReportResourceApi(config);
      let file: BlobPart;
      if (downloadAs === 'pdf') {
        const response =
          await api.apiCollectionDownloadCollectionReportAsPdfGet(
            collectionId,
            { responseType: 'blob' }
          );
        file = response.data as any;
      } else {
        const response =
          await api.apiCollectionDownloadCollectionReportAsExcelGet(
            collectionId,
            { responseType: 'blob' }
          );
        file = response?.data as any;
      }
      downloadFile(file, downloadAs);
    } catch (error) {
      console.log(error);
      handleErrorMessage?.('Failed to download colletion');
    }
  };

  const items = [
    {
      label: 'PDF',
      value: 'pdf',
      action: () => handleDownloadCollection('pdf'),
    },
    {
      label: 'Excel',
      value: 'excel',
      action: () => handleDownloadCollection('xlsx'),
    },
  ];

  return (
    <div className="flex w-full max-w-[1440px] mx-auto items-center justify-between pt-[50px] px-[64px]">
      <div>
        <div onClick={() => router?.back()}>
          <ArrowIconLeft height={40} width={40} className="cursor-pointer" />
        </div>
      </div>
      <div className="flex items-center gap-x-4">
        <div>
          <Button variant="outlined" onClick={onEdit}>
            Edit
          </Button>
        </div>
        <div>
          <DropdownMenu
            options={items}
            variant="button"
            label="Download"
            buttonProps={{
              variant: 'outlined',
            }}
          />
        </div>
        <div>
          <Button
            onClick={handleCreateOrder}
            className="!w-[172px] !px-[28px] text-[14px] leading-6"
          >
            <Icon name="icon-add" /> Create order
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
