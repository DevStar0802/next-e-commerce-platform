import { ChangeEvent, useEffect, useState } from 'react';
import clsx from 'clsx';
import { OrderGraphqlDto, OrderStatus } from '@/generated/types';
import PlusIcon from '@/assets/svgs/plus.svg';
import { fonts } from '@/config/fonts';
import { ORDER_BY_SEARCH } from '@/queries/orders/search';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import Loading from '../Loading';
import HorizontaOrderLists from './HorizontalOrderLists';
import { CreateOrder } from './CreateOrder';
import { ORDER_LIST } from '@/utils/constants';
import { OrderResourceApi } from 'client/command';
import { apiConfig } from '@/utils/apiConfig';
import Toast from '@/components/page-components/Toast';
import { SearchInput } from '@/components/molecules/SearchInput';
import useDebounce from '@/utils/debounce';

interface AddOrderProp {
  productIds: number[];
  handleCloseModal: () => void;
  resetProductIds: () => void;
  selectedOrder: OrderGraphqlDto | null;
  setSelectedOrder: (order: OrderGraphqlDto | null) => void;
}

const AddOrders = ({
  productIds,
  handleCloseModal,
  resetProductIds,
  setSelectedOrder,
}: AddOrderProp) => {
  const router = useRouter();
  const id = router?.query?.id || '';
  const organizationId: number | null = id ? Number(id) : null;

  const [activeId, setActiveId] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [searchKeyword, setSearchKeyword] = useState('');
  const debouncedValue = useDebounce(searchKeyword, 800);

  const { data, loading, refetch } = useQuery(ORDER_BY_SEARCH, {
    variables: {
      key: ORDER_LIST,
      organizationId,
      start: 0,
      rows: 10,
      search: debouncedValue,
      orderStatus: OrderStatus.Draft,
    },
    notifyOnNetworkStatusChange: true,
    skip: organizationId === null,
  });
  const content = data?.ordersBySearch?.content || [];

  useEffect(() => {
    refetch();
  }, []);

  const handleErrorMesssage = (message: string) => {
    setErrorMessage(message);
    resetProductIds();
    setTimeout(() => {
      setErrorMessage('');
    }, 3000);
  };

  const handleSuccessMesssage = (message: string) => {
    setSuccessMessage(message);
    resetProductIds();
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  const handleAddProductsToOrder = async (
    id: number,
    orderDetails?: OrderGraphqlDto
  ) => {
    try {
      const config: any = await apiConfig();
      const api = new OrderResourceApi(config);
      const response = await api.apiOrderAddProductsToDraftOrderPut(
        id,
        productIds
      );
      setSelectedOrder?.(orderDetails || null);
      setTimeout(() => {
        setSelectedOrder?.(null);
      }, 3000);
      handleSuccessMesssage(
        productIds?.length > 0
          ? `Added ${productIds?.length} products to order successfully!`
          : 'Added product to order successfully'
      );
      handleCloseModal();
      return response;
    } catch (error: any) {
      handleErrorMesssage(
        error?.response?.message || 'Failed to add products to order'
      );
      handleCloseModal();
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex items-center border-b border-neutral-400 gap-x-4 pb-6">
        <div className="flex h-[80px] w-[80px] cursor-pointer items-center justify-center bg-neutral-100 border border-neutral-400 rounded">
          <div className="inline-flex">
            <PlusIcon
              onClick={() => setShowModal(true)}
              height={43}
              width={43}
              className="text-shades-black"
            />
          </div>
        </div>
        <h3
          className={clsx(fonts.text.xl, 'text-shades-black tracking-[0.06em]')}
        >
          New order
        </h3>
      </div>

      <SearchInput
        value={searchKeyword || ''}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearchKeyword(e.target.value)
        }
        onClear={() => setSearchKeyword('')}
        onEnter={() => {}}
        placeholder="Search"
        className="!relative !max-w-full !w-full z-[0]"
      />

      {loading ? (
        <Loading message="Loading collections" />
      ) : (
        content?.map((order: OrderGraphqlDto) => (
          <HorizontaOrderLists
            key={order?.id}
            onSelect={(id) => {
              setActiveId(id);
              handleAddProductsToOrder(id, order);
            }}
            isActive={order.id === activeId}
            name={order.name}
            id={order.id}
            billing_address={order.billing_address}
            total_price={order.total_price}
            pricing_condition={order.pricing_condition}
            buyer_data={order.buyer_data}
          />
        ))
      )}
      <CreateOrder
        showModal={showModal}
        handleAddProductsToOrder={handleAddProductsToOrder}
        productIds={productIds}
        handleCloseModal={handleCloseModal}
        resetProductIds={resetProductIds}
        setSelectedOrder={setSelectedOrder}
        closeModal={() => {
          refetch();
          setShowModal(false);
        }}
      />
      <Toast errorMessage={errorMessage} successMessage={successMessage} />
    </div>
  );
};

export default AddOrders;
