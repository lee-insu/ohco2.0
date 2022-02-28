import React, { useEffect, useState } from "react";
import style from "../styles/SubList.module.css";
import { Col, Row } from "antd";
import "antd/dist/antd.css";
import { useQuery } from "@apollo/client";
import { GET_CODY_BOOKMARK } from "../graphQL/schema";
import Link from "next/link";

const SubList = ({ data, theme }) => {
  const [codyData, getCodyData] = useState([]);
  const [recommandCody, getRecommandCody] = useState([]);

  console.log(theme);

  useEffect(() => {
    if (data !== false) {
      getCodyData(data);
    }
  }, [data]);

  let cody = codyData[Math.floor(Math.random() * codyData.length)];

  useEffect(() => {
    if (cody) {
      cody.recommand_cody.map((x) => {
        getRecommandCody((prev) => [...prev, x.id]);
      });
    }
    return () => {
      getRecommandCody([]);
    };
  }, [cody]);

  const { loading, data: codyArray } = useQuery(GET_CODY_BOOKMARK, {
    variables: { id: recommandCody },
  });
  return (
    <div className={style.sub_list}>
      {cody ? (
        <div className={style.inner}>
          <div className={style.title}>
            {theme == "music" ? (
              <>
                <div className={style.style_title}>music mood</div>
                <div className={style.sub_style_title}>
                  {cody.name}, {cody.mood}
                </div>
              </>
            ) : (
              <>
                <div className={style.style_title}>perfume mood</div>
                <div className={style.sub_style_title}>
                  {cody.name}, {cody.scent}
                </div>
              </>
            )}
          </div>
          {!loading ? (
            <Row className={style.info_container} type="flex">
              <Col lg={24} xl={24} className={style.list_container}>
                <div className={style.cody_ul_container}>
                  <ul className={style.cody_ul}>
                    {codyArray.codyarray.map((item) => (
                      <li key={item.id}>
                        <Link href={`item/${item.id}`}>
                          <img
                            className={style.usercody_img}
                            src={item.img_url}
                          />
                        </Link>
                        <div className={style.cody_info_container}>
                          <div>{item.category.style}</div>
                          <div>{item.category.theme}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            </Row>
          ) : (
            <div>불러오는 중...</div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default SubList;
