import React from "react";
import { Draft } from "../../../../components/page-components/order/draft";
import { Confirmed } from "../../../../components/page-components/order/confirmed";
import Tabs from "../../../../components/molecules/Tab/Tabs";
import { Heading } from "../../../../components/molecules/Heading";
import { gql, useQuery } from "@apollo/client";

export default function OrderManagement() {
  const GET_ORDERS = gql`
    query {
      ordersBySearch(organizationId: 1, start: 0, rows: 10) {
        content {
          id
          name
          total
          billing_address
          buyer_name
          created_date
          delivery_address
          discount
          email_address
          last_modified_by
          last_updated
          note
          payment_terms
          pricing_condition
          purchase_order
          retailer
          approved
          cancelled
          confirmed
          size
          retailer
        }
        total_pages
        total_elements
        number_of_elements
        size
      }
    }
  `;
  const { data, error, loading } = useQuery(GET_ORDERS);
  console.log({ error });

  const tabs = [
    {
      id: 1,
      label: "Draft",
      content: <Draft orders={data?.ordersBySearch} />,
    },
    { id: 2, label: "Confirmed", content: <Confirmed /> },
    { id: 3, label: "Approved" },
    { id: 4, label: "Cancelled" },
  ];

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <div className="container">
      <Heading fontWeight="light" size={"sm"} className="">
        Order Management
      </Heading>
      <Tabs tabs={tabs} />
    </div>
  );
}
