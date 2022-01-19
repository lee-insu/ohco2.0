import { Col, Row, List, Card } from "antd";
import React, { useEffect, useState } from "react";
import style from "../styles/List.module.css";
import "antd/dist/antd.css";
import Link from "next/link";
import { GET_CODY_LIST } from "../graphQL/schema";
import { useQuery } from "@apollo/client";

const list = () => {
  const filterList = [
    { id: "테마" },
    { id: "스타일" },
    { id: "계절" },
    { id: "성별" },
  ];

  const [cody, getCody] = useState([]);
  const [acitveFilter, setActiveFilter] = useState(false);
  const { data } = useQuery(GET_CODY_LIST);

  useEffect(() => {
    if (data) {
      getCody(data.codylist);
    }
  }, [data]);

  const handleFilter = (e) => {
    console.log(e.target);
  };

  return (
    <div className={style.container}>
      <div className={style.banner}>
        <div className={style.title}>날씨에 맞는 코디</div>
      </div>
      <div className={style.list_container}>
        <nav className={style.nav}> nav</nav>
        <div className={style.inner}>
          <Row>
            <Col className={style.filter} xs={0} sm={0} md={4} lg={4} xl={4}>
              <Col className={style.filter_title}>필터</Col>
              <div className={style.filter_container}>
                {filterList.map((filter, i) => (
                  <div
                    key={i}
                    name={filter.id}
                    onClick={(name) => handleFilter(name)}
                    className={style.filter_list}
                  >
                    <div name={filter.id} className={style.filter_text}>
                      <div name={filter.id}>{filter.id}</div>
                      <div name={filter.id}>모든 {filter.id}</div>
                    </div>
                    <div name={filter.id} className={style.plus}>
                      +
                    </div>
                  </div>
                ))}
              </div>
            </Col>

            <Col
              className={style.cody_list}
              xs={24}
              sm={24}
              md={20}
              lg={20}
              xl={20}
            >
              <Row className={style.row} gutter={[8, 4]}>
                {cody
                  ? cody.map((item, i) => (
                      <Link key={i} href={`/item/${item.id}`}>
                        <Col xs={12} sm={12} md={8} lg={8} xl={6}>
                          <div className={style.cody_li}>
                            <div className={style.cody_img}>
                              <img className={style.img} src={item.img_url} />
                              <div className={style.des}>
                                {item.category.style}
                              </div>
                              <div className={style.item_container}></div>
                            </div>
                          </div>
                        </Col>
                      </Link>
                    ))
                  : null}
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default list;
