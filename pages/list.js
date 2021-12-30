import { Col, Row, List, Card } from "antd";
import React from "react";
import style from "../styles/List.module.css";
import "antd/dist/antd.css";
import Link from "next/link";

const list = () => {
  const data = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
  ];
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
                <div className={style.filter_list}>
                  <div className={style.filter_text}>
                    <div>테마</div>
                    <div>모든 테마</div>
                  </div>
                  <div className={style.plus}>+</div>
                </div>
                <ul className={style.ul}>
                  <li className={style.li}>테마입니다</li>
                  <li className={style.li}>테마입니다</li>
                </ul>
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
              <Row className={style.c} gutter={[8, 24]}>
                {data.map((item, i) => (
                  <Link key={i} href={`/item/${item.id}`}>
                    <Col xs={12} sm={12} md={8} lg={8} xl={6}>
                      <div id={item.id} className={style.b}>
                        <div className={style.a}></div>
                      </div>
                    </Col>
                  </Link>
                ))}
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default list;
