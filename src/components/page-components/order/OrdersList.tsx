import React, { FC } from 'react';
import Modal from '@/components/molecules/Modal';
import AddOrders from '@/components/page-components/order/AddOrders';

interface OrderListProps {
  isModalVisible: boolean;
  setModalIsVisible: (visible: boolean) => void;
  resetProductIds: () => void;
  productIds: number[];
}

export const OrderList: FC<OrderListProps> = ({
  isModalVisible,
  setModalIsVisible,
  resetProductIds,
  productIds,
}) => {
  return (
    <Modal
      isOpen={isModalVisible}
      onClose={() => {
        setModalIsVisible(false);
      }}
      title={'Choose order'}
      className="!max-h-[600px] !max-w-[736px] overflow-x-hidden overflow-y-auto"
    >
      <AddOrders
        handleCloseModal={() => setModalIsVisible(!isModalVisible)}
        productIds={productIds}
        resetProductIds={resetProductIds}
      />
    </Modal>
  );
};
