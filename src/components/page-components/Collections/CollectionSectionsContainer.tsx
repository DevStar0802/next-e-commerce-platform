import { FC, useEffect, useRef, useState } from 'react';
import { CollectionCard } from '@/components/molecules/CollectionCard';
import Header from '@/components/page-components/Collections/Header';
import placeholderImage from '@/assets/images/placeholders/collection-preview.png';
import Description from '@/components/page-components/Collections/Description';
import Filters from '@/components/page-components/common/Filters';
import { GridType } from '@/components/molecules/IconButtonGroup';
import Footer from '@/components/layouts/Footer';
import { useQuery } from '@apollo/client';
import { COLLECTION_QUERY } from '@/queries/collecitons';
import Loading from '@/components/page-components/Loading';
import { useRouter } from 'next/router';
import { apiConfig } from '@/utils/apiConfig';
import { AttachmentResourceApi, CollectionResourceApi } from 'client/command';
import EditCollection from '@/components/page-components/Collections/EditCollection';
import Toast from '@/components/page-components/Toast';
import { OrderList } from '@/components/page-components/order/OrdersList';
import {
  OrderGraphqlDto,
  ProductWithCollectionsGraphqlDto,
} from '@/generated/types';
import Notification from '@/components/page-components/order/Notification';
import {
  COLOUR_FAMILIES_BY_COLLECTION_ID_QUERY,
  SEASONS_BY_COLLECTION_ID,
} from '@/queries/filters';
import LinesheetUpload from '@/components/page-components/showcase/LinesheetUpload';
import useVariantSelect from '@/components/page-components/common/useVariantSelect';
import { ProductCard } from '@/components/molecules/Cards/Product';
import clsx from 'clsx';
import ToggleCollectionSection from '../common/ToggleCollectionSection';
import { SECTIONS_BY_COLLECTION_ID_QUERY } from '@/queries/sections';
import { Heading } from '@/components/molecules/Heading';
import { Paragraph } from '@/components/molecules/Paragraph';
import { Icon } from '@/components/molecules/Icon';
import InfiniteScroll from 'react-infinite-scroll-component';

interface CollectionSectionsContainerProps {
  isCollectionSection: boolean;
  setIsCollectionSection: (value: boolean) => void;
  gridType: GridType;
  setGrid: (value: GridType) => void;
  debouncedValue: string | number;
  selectedColours: string[];
  setSelectedColours: (value: string[]) => void;
  selectedSeasons: string[];
  setSelectedSeasons: (value: string[]) => void;
  searchKeyword: string;
  setSearchKeyword: (value: string) => void;
}

const CollectionSectionsContainer: FC<CollectionSectionsContainerProps> = ({
  isCollectionSection,
  setIsCollectionSection,
  gridType,
  setGrid,
  debouncedValue,
  selectedColours,
  selectedSeasons,
  setSelectedColours,
  setSelectedSeasons,
  searchKeyword,
  setSearchKeyword,
}) => {
  const router = useRouter();
  const collectionId = router?.query?.collectionId
    ? Number(router?.query?.collectionId)
    : null;

  const [isSelectable, setIsSelectable] = useState(false);
  const {
    selectedRows,
    selectedVariants,
    setSelectedRows,
    resetSelectedRows,
    setSelectedVariants,
  } = useVariantSelect();
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isEditModal, setIsEditModal] = useState(false);
  const [isAddToDraft, setIsAddToDraft] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<OrderGraphqlDto | null>(
    null
  );
  const [rows] = useState(1000);
  const collectionDetailRef = useRef<any>(null);
  const [gridPrevState, setGridPrevState] = useState<GridType>('grid');
  const [isPdf, setIsPdf] = useState(false);
  const [isUpload, setIsUpload] = useState(false);

  const handleScroll = () => {
    const doc: Document = document;
    const filters: any = doc.getElementById('filters');
    const detailHeight = collectionDetailRef?.current?.clientHeight;
    if (filters) {
      if (
        doc?.scrollingElement &&
        doc?.scrollingElement?.scrollTop >= detailHeight + 80
      ) {
        filters.style.position = 'fixed';
        filters.style.top = '114px';
        filters.style.left = '0px';
        filters.style.right = '0px';
      } else {
        filters.style.position = '';
        filters.style.top = '';
        filters.style.left = '';
        filters.style.right = '';
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const {
    data: collecitonData,
    loading,
    refetch: refetchCollection,
  } = useQuery(COLLECTION_QUERY, {
    variables: {
      collectionId,
    },
    notifyOnNetworkStatusChange: true,
    skip: collectionId === null,
  });

  const collection = collecitonData?.collectionByCollectionId;

  const {
    data: collectionSections,
    loading: collectionSectionsLoading,
    refetch,
  } = useQuery(SECTIONS_BY_COLLECTION_ID_QUERY, {
    variables: {
      collectionId: collectionId,
      search: debouncedValue.toString().toLowerCase(),
      colourFamilies: selectedColours,
      seasons: selectedSeasons,
      rows,
      start: 0,
    },
    fetchPolicy: 'network-only',
    skip: collectionId === null,
  });

  const sections = collectionSections?.sectionProductsBySearchAndCollectionId?.content || [];
  useEffect(() => {
    window.onafterprint = () => {
      setGrid(gridPrevState);
      setIsPdf(false);
    };
  }, []);

  const { data: colours } = useQuery(COLOUR_FAMILIES_BY_COLLECTION_ID_QUERY, {
    variables: { collectionId },
    notifyOnNetworkStatusChange: true,
    skip: collectionId === null,
  });

  const { data: seasons } = useQuery(SEASONS_BY_COLLECTION_ID, {
    variables: { collectionId },
    notifyOnNetworkStatusChange: true,
    skip: collectionId === null,
  });

  const filterTags = [
    {
      label: 'Colours',
      options: colours?.colourFamiliesByCollectionId?.map((item: string) => ({
        id: item,
        label: item,
      })),
      selectedItems: selectedColours,
      action: (e: { id: string | number; label: string }) => {
        if (selectedColours.includes(e.label)) {
          setSelectedColours(selectedColours?.filter((c) => c !== e.label));
        } else {
          setSelectedColours([...selectedColours, e.label]);
        }
      },
      onReset: () => {
        setSelectedColours([]);
      },
    },
    {
      label: 'Seasons',
      options: seasons?.seasonsByCollectionId?.map((item: string) => ({
        id: item,
        label: item,
      })),
      selectedItems: selectedSeasons,
      action: (e: { id: string | number; label: string }) => {
        if (selectedSeasons.includes(e.label)) {
          setSelectedSeasons(selectedSeasons?.filter((c) => c !== e.label));
        } else {
          setSelectedSeasons([...selectedSeasons, e.label]);
        }
      },
      onReset: () => {
        setSelectedSeasons([]);
      },
    },
  ];

  const handleErrorMesssage = (message: string) => {
    setErrorMessage(message);

    setTimeout(() => {
      setErrorMessage('');
    }, 3000);
  };

  const handleSuccessMesssage = (message: string) => {
    refetch();
    setSuccessMessage(message);
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  const handleUploadFile = async ({
    fileType,
    file,
    name,
    onReset,
  }: {
    fileType: 'LINESHEET' | 'LOOKBOOK' | null;
    file: File | null;
    name: string;
    onReset: () => void;
  }) => {
    try {
      if (fileType && file) {
        const config = await apiConfig();
        const api = new AttachmentResourceApi(config);
        const collectionApi = new CollectionResourceApi(config);
        await api.apiAttachmentUploadCollectionAttachmentPost(
          collection.id,
          fileType,
          file,
          file.name
        );
        const payload = {
          ...collection,
          linesheet_name:
            (fileType === 'LINESHEET' ? name : collection.linesheet_name) || '',
          lookbook_name:
            (fileType === 'LOOKBOOK' ? name : collection.lookbook_name) || '',
        };
        await collectionApi.apiCollectionUpdateCollectionDetailsPut(
          collection.id,
          payload
        );
        handleSuccessMesssage('File uploaded successfully!');
        setIsUpload(false);
        onReset();
        refetchCollection();
      } else {
        handleErrorMesssage('File is required!');
      }
    } catch (error) {
      console.error(error);
      handleErrorMesssage('Failed to upload file, please try again!');
    }
  };

  const actions = [
    {
      name: 'Add to draft order',
      action: () => setIsAddToDraft(true),
      disabled: isLoading || !selectedRows.length,
    },
  ];

  if (!collection && loading) {
    return <Loading message="Loading collections" />;
  }

  const handleSearch = (e: string) => {
    setSearchKeyword(e);
  };

  const getProductIds = () => {
    const productIds: any = [];
    sections.forEach((item: any) => {
      item.products.forEach((product: any) => {
        productIds.push({
          id: product.id,
          selectedVariant: product.id,
        });
      });
    });

    return productIds;
  };

  const renderSections = sections?.map((section: any) => (
    <>
      <div className="print:break-inside-avoid-page border rounded-2xl p-[57px] pb-0 mb-8 border-neutral-400">
        <div className="text-center mb-8">
          <Heading size="sm" className="text-shades-black">
            {section?.name}
          </Heading>
          <Paragraph>{section?.description}</Paragraph>
        </div>
        <div
          className={clsx(
            'grid mb-8 gap-8 pint:mb-4 print:gap-8 print:justify-center print:!grid-cols-6 print:sm:!grid-cols-6',
            gridType === 'smallGrid' ? 'grid-cols-6' : 'grid-cols-3'
          )}
        >
          {section?.products?.map((item: ProductWithCollectionsGraphqlDto) => (
            <ProductCard
              key={`${item?.id}`}
              size={gridType === 'smallGrid' ? 'sm' : 'lg'}
              isSelectable={isSelectable}
              isSelected={!!selectedRows?.includes(item.id)}
              selectedVariants={selectedVariants}
              onSelect={setSelectedRows}
              isCollection={true}
              isPdf={true}
              imageUrl={
                (gridType === 'grid'
                  ? item?.attachments?.[0]?.large_image_url
                  : item?.attachments?.[0]?.medium_image_url) || ''
              }
              {...item}
            />
          ))}
        </div>
      </div>
    </>
  ));

  return (
    <div className="pdf_view">
      <Header
        handlePrint={(e: GridType) => {
          setGridPrevState(gridType);
          setGrid(e);
          setIsPdf(true);
        }}
        handleCreateOrder={() => {
          setSelectedVariants(getProductIds());
          setIsAddToDraft(true);
        }}
        handleErrorMessage={handleErrorMesssage}
      />
      <div
        className="min-h-[calc(100vh-185px)] max-w-[1234px] pint:!max-w-full mx-auto"
        id="collection"
      >
        <div className="mb-[64px]" ref={collectionDetailRef}>
          <CollectionCard
            backgroundImageSrc={collection?.banner_url || placeholderImage}
            label={collection?.name}
            editBanner
            editButtonText="Edit Collection"
            onEdit={(e) => {
              e.preventDefault();
              setIsEditModal(true);
            }}
          />
          <Description
            lookbookName={collection?.lookbook_name || ''}
            lookbookUrl={collection?.lookbook_url || ''}
            linesheetName={collection?.linesheet_name || ''}
            linesheetUrl={collection?.linesheet_url || ''}
            linesheetGuid={collection?.linesheet_guid || ''}
            lookbookGuid={collection?.lookbook_guid || ''}
            description={collection?.description}
            onUpload={() => setIsUpload(true)}
          />
        </div>
        <Filters
          onGridChange={setGrid}
          gridType={gridType}
          onSelect={() => setIsSelectable(!isSelectable)}
          filterTags={filterTags}
          actions={actions}
          isSelectable={isSelectable}
          selectedItems={selectedRows}
          searchKeyword={searchKeyword}
          onSearch={handleSearch}
          onDeselect={resetSelectedRows}
        >
          <div className="flex items-center border-neutral-400 pr-4 mr-4 border-r gap-2">
            <ToggleCollectionSection
              showSection={isCollectionSection}
              onChange={setIsCollectionSection}
            />
          </div>
        </Filters>
        <div className="print:hidden">
          {!sections.length && collectionSectionsLoading ? (
            <div className="my-10 min-h-[400px]">
              <Loading message="Loading sections" />
            </div>
          ) : sections?.length ? (
            renderSections
          ) : (
            <div className="min-h-[300px] mt-20 mb-8 text-center">
              <Icon
                name="icon-info-circle"
                className="mx-auto text-shades-black"
                height={32}
                width={32}
              />
              <p className="mt-2 mb-8 text-center text-shades-black text-[24px]">
                No sections founds!!
              </p>
            </div>
          )}
        </div>
        <div className="hidden print:block">{renderSections}</div>
      </div>
      <EditCollection
        isOpen={isEditModal}
        title="Edit collection details"
        collection={collection}
        toggleModal={setIsEditModal}
        handleSuccessMessage={handleSuccessMesssage}
        handleErrorMessage={handleErrorMesssage}
        refetch={refetchCollection}
      />
      <OrderList
        setModalIsVisible={() => setIsAddToDraft(!isAddToDraft)}
        isModalVisible={isAddToDraft}
        productIds={selectedVariants}
        resetProductIds={() => resetSelectedRows()}
        selectedOrder={selectedOrder}
        setSelectedOrder={setSelectedOrder}
      />
      <Toast successMessage={successMessage} errorMessage={errorMessage} />
      <Footer />

      {selectedOrder?.id && (
        <Notification
          order={selectedOrder}
          onCancel={() => setSelectedOrder(null)}
        />
      )}
      <LinesheetUpload
        isOpen={isUpload}
        setIsOpen={setIsUpload}
        handleSubmit={handleUploadFile}
      />
    </div>
  );
};

export default CollectionSectionsContainer;
