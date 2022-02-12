import React from "react";
import style from "../../styles/Product.module.css";
import { Col, Row } from "antd";
import "antd/dist/antd.css";

const Product = ({ item }) => {
  //제품 이름, 가격, 브랜드, 구매 사이트 가기
  return (
    <div className={style.container}>
      <div className={style.banner}></div>
      <div className={style.inner}>
        <Row type="flex" className={style.info_container}>
          <Col xs={6} sm={6} md={12} lg={12} xl={12}>
            <div className={style.img_container}>
              <div className={style.img}></div>
            </div>
          </Col>
          <Col xs={6} sm={6} md={12} lg={12} xl={12}>
            <div className={style.detail_container}>
              <div className={style.title}>제품 이름</div>
              <ul className={style.ul}>
                <li>
                  <div className={style.question}>제품</div>
                  <div className={style.answer}>대딥</div>
                </li>
                <li>
                  <div className={style.question}>브랜드</div>
                  <div className={style.answer}>대딥</div>
                </li>
                <li>
                  <div className={style.question}>가격</div>
                  <div className={style.answer}>대딥</div>
                </li>
              </ul>
              <div className={style.shop_link}>구매하러 가기</div>
            </div>
          </Col>
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
