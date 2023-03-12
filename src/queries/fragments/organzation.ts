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
  }
`;