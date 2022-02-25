import { gql } from "@apollo/client";

const GET_CODY_MAIN = gql`
  query CodyMain($season: String, $offset: Int, $limit: Int) {
    codymain(seoson: $season, offset: $offset, limit: $limit) {
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
      music {
        id
        artist
        album
        name
        mood
        img_url
      }
      perfumes {
        perfume_id
        img_url
        name
        brand
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

const GET_SIMILAR_LIST = gql`
  query Usersimilarlist($theme: String) {
    usersimilarlist(theme: $theme) {
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

const GET_PRODUCT = gql`
  query Product($id: ID!) {
    product(id: $id) {
      product_id
      img_url
      price
      name
      brand
      cody
      shop_url
      recommand_products {
        product_id
      }
    }
  }
`;

const GET_PRODUCT_ITEMS = gql`
  query Productarray($id: [String]) {
    productarray(id: $id) {
      product_id
      img_url
      name
      brand
      price
    }
  }
`;

const GET_PERFUMES = gql`
  query Perfume($id: ID!) {
    perfume(id: $id) {
      perfume_id
      img_url
      price
      name
      brand
      scent
      mood
      shop_url
      recommand_cody {
        id
      }
    }
  }
`;

const GET_MUSIC = gql`
  query Music($id: ID!) {
    music(id: $id) {
      id
      artist
      album
      name
      mood
      img_url
      music_url
      recommand_cody {
        id
      }
    }
  }
`;

const GET_MUSIC_ARRAY = gql`
  query Musicarray {
    musicarray {
      id
      name
      mood
      recommand_cody {
        id
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
  GET_PRODUCT,
  GET_PRODUCT_ITEMS,
  GET_PERFUMES,
  GET_SIMILAR_LIST,
  GET_MUSIC,
  GET_MUSIC_ARRAY,
};
