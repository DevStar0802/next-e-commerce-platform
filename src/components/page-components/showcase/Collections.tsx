import Link from 'next/link';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { CollectionCard } from '@/components/molecules/CollectionCard';
import backgroundImageSrc from '@/assets/images/collection-card/collection-card-background-image.png';
import imageSrc from '@/assets/images/collection-card/inner-collection-card-image.png';
import { COLLECTIONS_QUERY } from '@/queries/collecitons';
import { CollectionGraphqlDto } from '@/generated/types';
import Loading from '../Loading';
import ErrorMessage from '../Error/ErrorMessage';
import { FC, useState } from 'react';
import Modal from '@/components/molecules/Modal';
import AddCollections from './AddCollections';
import CreateCollection from './CreateCollection';
import { apiConfig } from '@/utils/apiConfig';
import { CollectionResourceApi } from 'client/command';
import Toast from '../Toast';

interface CollectionsProps {
  addCollectionsModal?: boolean;
  toggleCollectionsModal?: (value: boolean) => void;
}

const Collections: FC<CollectionsProps> = ({
  addCollectionsModal,
  toggleCollectionsModal,
}) => {
  const router = useRouter();
  const id = router?.query?.id || '';
  const organizationId: number = +id;
  const [isCreateModal, setIsCreateModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const { data, loading, error, refetch } = useQuery(COLLECTIONS_QUERY, {
    variables: { organizationId },
  });

  const handleAddCollection = async (val: string) => {
    setIsLoading(true);
    try {
      const config: any = await apiConfig();
      const api = new CollectionResourceApi(config);
      await api.apiCollectionCreateNewCollectionPost(organizationId, {
        name: val,
      });
      setIsLoading(false);
      toggleCollectionsModal?.(false);
      setSuccessMessage(`Collection added sucessfully!!`);
      refetch();
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } catch (error: any) {
      setIsLoading(false);
      setErrorMessage(
        error?.message || 'Something went wrong, please try again!'
      );
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
      console.error(error);
    }
  };

  if (error) {
    return <ErrorMessage errorMessage={error?.message} />;
  }

  if (loading) {
    return <Loading message="Loading collecitons" />;
  }

  return (
    <div>
      <div>
        {data?.collectionsByOrganizationId?.map(
          (item: CollectionGraphqlDto) => (
            <div key={item.id} className="mb-[96px]">
              <Link href={`/organization/1/discover/collections/${item.id}`}>
                <CollectionCard
                  backgroundImageSrc={backgroundImageSrc}
                  label={item.name || 'SS23'}
                  author={'by Irene Lance'}
                  imageSrc={imageSrc}
                />
              </Link>
              <div className="mt-8">
                <p className="max-w-[544px] mx-auto text-shades-black text-center text-[18px] tracking-[0.06em] leading-[32px]">
                  {item.description ||
                    'For the past 40 years Ballot-Flurin has been leading the industry and provide wellness solutions.'}
                </p>
              </div>
            </div>
          )
        )}
      </div>
      <Modal
        isOpen={!!addCollectionsModal}
        onClose={() => toggleCollectionsModal?.(false)}
        title={isCreateModal ? 'Name this collection' : 'Choose collections'}
        className="!max-h-[417px] !max-w-[736px] overflow-x-hidden overflow-y-auto"
      >
        {isCreateModal ? (
          <CreateCollection
            handleSubmit={(collection) => {
              handleAddCollection(collection);
            }}
          />
        ) : (
          <AddCollections
            onSelect={() => {}}
            onAddCollection={() => setIsCreateModal(true)}
          />
        )}
      </Modal>
      <Toast successMessage={successMessage} errorMessage={errorMessage} />
    </div>
  );
};

export default Collections;
