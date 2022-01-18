import { gql } from "@apollo/client";

const GET_CODY_MAIN = gql`
  query CodyMain($offset: Int, $limit: Int) {
    codymain(offset: $offset, limit: $limit) {
      id
      concept_id
      img_url
    }
  }
`;

const GET_CODY_LIST = gql`
  query Codylist {
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

const GET_CODY_ID = gql`
  query CODY_ID($id: ID!) {
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
      information {
        name
        general
        instagram
        shop
      }
      products {
        product
      }
    }
  }
`;

export { GET_CODY_MAIN, GET_CODY_LIST, GET_CODY_ID };
