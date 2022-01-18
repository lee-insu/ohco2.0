import { gql } from "@apollo/client";

export const GET_CODYLIST = gql`
  query {
    codylist {
      id
      img_url
    }
  }
`;

export const GET_CODY = gql`
  query {
    codylist {
      id
      concept_id
      img_url
      category {
        weather
        temperature
        sex
        style
        theme
      }
    }
  }
`;

export const GET_ID_CODY = gql`
  query GetId($id: ID!) {
    codyitem(id: $id) {
      id
      concept_id
      img_url
      category {
        weather
        temperature
        sex
        style
        theme
      }
    }
  }
`;
