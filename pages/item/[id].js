import { Col, Row } from "antd";
import "antd/dist/antd.css";
import { useRouter } from "next/router";
import Comment from "../../components/Comment.js";
import style from "../../styles/Detail.module.css";
import axios from "axios";
import { useQuery } from "@apollo/client";
import { GET_CODY_ID } from "../../graphQL/schema";
import { useState, useEffect } from "react";
const Detail = ({ item }) => {
  const [codyItem, getCodyItem] = useState([]);

  const { loading, error, data } = useQuery(GET_CODY_ID, {
    variables: { id: String(item) },
  });

  useEffect(() => {
    if (data) {
      getCodyItem(data.codyitem);
    }
  }, [data]);

  return (
    <div className={style.container}>
      <div className={style.banner}></div>
      {!loading && codyItem.category && codyItem.information ? (
        <div className={style.inner}>
          <Row type="flex" className={style.info_container}>
            <Col xs={6} sm={6} md={12} lg={12} xl={12}>
              <div className={style.img_container}>
                <div className={style.img}>
                  <img src={codyItem.img_url} />
                </div>
              </div>
            </Col>
            <Col xs={6} sm={6} md={12} lg={12} xl={12}>
              <div className={style.detail_container}>
                <div className={style.title}>{codyItem.category.theme}</div>
                <ul className={style.ul}>
                  <li>
                    <div className={style.question}>적정 날씨</div>
                    <div className={style.answer}>
                      {codyItem.category.weather}
                    </div>
                  </li>
                  <li>
                    <div className={style.question}>적정 계절</div>
                    <div className={style.answer}>
                      {codyItem.category.season}
                    </div>
                  </li>
                  <li>
                    <div className={style.question}>적정 성별</div>
                    <div className={style.answer}>{codyItem.category.sex}</div>
                  </li>
                  <li>
                    <div className={style.question}>스타일</div>
                    <div className={style.answer}>
                      {codyItem.category.style}
                    </div>
                  </li>
                </ul>
                <div style={{ marginTop: "34px" }} className={style.title}>
                  Infomation
                </div>
                <ul className={style.ul}>
                  <li>
                    <div className={style.question}>이름</div>
                    <div className={style.answer}>
                      {codyItem.information.name}
                    </div>
                  </li>
                  <li>
                    <div className={style.question}>세대</div>
                    <div className={style.answer}>
                      {codyItem.information.general}
                    </div>
                  </li>
                  <li>
                    <div className={style.question}>인스타그램</div>
                    <div className={style.answer}>
                      {codyItem.information.instagram}
                    </div>
                  </li>
                  <li>
                    <div className={style.question}>쇼핑몰</div>
                    <div className={style.answer}>
                      <a href={codyItem.information.shop}>바로가기</a>
                    </div>
                  </li>
                </ul>
                <button className={style.bookmark}></button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={24} xl={24} className={style.list_container}>
              <div className={style.sub_head}>이 회원님의 다른 코디</div>
              <div className={style.cody_ul_container}>
                <ul className={style.cody_ul}>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </Col>
            <Col lg={24} xl={24} className={style.list_container}>
              <div className={style.sub_head}>이 코디와 연관된 옷</div>
              <div className={style.cody_ul_container}>
                <ul className={style.product_ul}>
                  <li>
                    <div className={style.product}></div>
                  </li>
                  <li>
                    <div className={style.product}></div>
                  </li>
                  <li>
                    <div className={style.product}></div>
                  </li>
                  <li>
                    <div className={style.product}></div>
                  </li>
                  <li>
                    <div className={style.product}></div>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <div className={style.comment_container}>
            <Comment />
          </div>
        </div>
      ) : (
        <div>정보를 불러오고 있습니다..</div>
      )}
    </div>
  );
};

export default Detail;

export async function getServerSideProps(context) {
  const id = context.params.id;

  return {
    props: {
      item: id,
    },
  };
}
