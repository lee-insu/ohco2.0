import { gql } from "@apollo/client";

const GET_CODY_MAIN = gql`
  query CodyMain($season: String, $offset: Int, $limit: Int) {
    codymain(seoson: $season, offset: $offset, limit: $limit) {
      id
      user_id
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
      user_id
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
      user_id
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
      user_id
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
        product_id
        img_url
        name
        brand
        shop_url
        price
      }
    }
  }
`;

const GET_USER_CODY_LIST = gql`
  query Usercodylist($user_id: String) {
    usercodylist(user_id: $user_id) {
      id
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

const GET_CODY_BOOKMARK = gql`
  query Codyarray($id: [String]) {
    codyarray(id: $id) {
      id
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

export {
  GET_CODY_MAIN,
  GET_CODY_LIST,
  GET_CODY_ID,
  GET_CODY_FILTER,
  GET_CODY_BOOKMARK,
  GET_USER_CODY_LIST,
};
