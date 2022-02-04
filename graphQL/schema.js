import { gql } from "@apollo/client";

const GET_CODY_MAIN = gql`
  query CodyMain($season: String, $offset: Int, $limit: Int) {
    codymain(seoson: $season, offset: $offset, limit: $limit) {
      id
      concept_id
      img_url
    }
  }
`;

const GET_CODY_FILTER = gql`
  query CodyFilter(
    $weather: String
    $season: String
    $sex: String
    $style: String
    $theme: String
    $count: Int
  ) {
    codyfilter(
      weather: $weather
      season: $season
      sex: $sex
      style: $style
      theme: $theme
      count: $count
    ) {
      id
      concept_id
      img_url
      category {
        weather
        season
        sex
        style
        theme
      }
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
        season
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
        season
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

export { GET_CODY_MAIN, GET_CODY_LIST, GET_CODY_ID, GET_CODY_FILTER };
