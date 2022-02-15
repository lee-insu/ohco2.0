import React, { useEffect, useState } from "react";
import style from "../../styles/Product.module.css";
import { Col, Row } from "antd";
import "antd/dist/antd.css";
import { GET_PRODUCT } from "../../graphQL/schema";
import { useQuery } from "@apollo/client";

const Product = ({ item }) => {
  const { loading, data } = useQuery(GET_PRODUCT, {
    variables: { id: item },
  });

  const [product, getProduct] = useState([]);

  useEffect(() => {
    if (data) {
      getProduct(data.product);
    }
  }, []);

  return (
    <div className={style.container}>
      <div className={style.banner}></div>
      <div className={style.inner}>
        <Row type="flex" className={style.info_container}>
          {product ? (
            <>
              <Col xs={6} sm={6} md={12} lg={12} xl={12}>
                <div className={style.img_container}>
                  <img className={style.img} src={product.img_url} />
                </div>
              </Col>
              <Col xs={6} sm={6} md={12} lg={12} xl={12}>
                <div className={style.detail_container}>
                  <div className={style.title}>{product.name}</div>
                  <ul className={style.ul}>
                    <li>
                      <div className={style.question}>제품</div>
                      <div className={style.answer}>{product.name}</div>
                    </li>
                    <li>
                      <div className={style.question}>브랜드</div>
                      <div className={style.answer}>{product.brand}</div>
                    </li>
                    <li>
                      <div className={style.question}>가격</div>
                      <div className={style.answer}>
                        {product.price
                          ? product.price.toLocaleString("en-US")
                          : 0}
                        원
                      </div>
                    </li>
                  </ul>
                  <div className={style.shop_link}>
                    <a href={product.shop_url}>구매하러 가기</a>
                  </div>
                </div>
              </Col>
            </>
          ) : (
            loading
          )}
        </Row>
      </div>
    </div>
  );
};

export default Product;

export async function getServerSideProps(context) {
  const id = context.params.id;

  return {
    props: {
      item: id,
    },
  };
}
