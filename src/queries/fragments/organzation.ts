import { gql } from '@apollo/client';

export const ORGANIZATION_FRAGMENT = gql`
  fragment OrganizationGraphqlDTO on OrganizationGraphqlDTO {
    id
    name
    address
    description
    city
    country_of_origin
    instagram_link
    organization_type
    terms_and_conditions
    website_link
    year_of_inception
    logo_guid
    banner_guid
    banner_url
    logo_url
    linesheet_name
    linesheet_guid
    linesheet_url
    lookbook_name
    lookbook_url
    lookbook_guid
    product_csv_url
    product_csv_guid
  }
`;
