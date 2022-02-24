import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Col, Row } from "antd";
import { GET_CODY_MAIN } from "../graphQL/schema";
import { useQuery } from "@apollo/client";
import style from "../styles/CodyList.module.css";
import Link from "next/link";

const tempCody = (temp) => {
  let season = "";
  switch (true) {
    case temp < -3:
      season = "early_winter";
      break;
    case temp < 4:
      season = "early_winter";
      break;
    case temp < 8:
      season = "early_winter";
      break;
    case temp < 11:
      season = "early_winter";
      break;
    case temp < 16:
      season = "early_winter";
      break;
    case temp < 19:
      season = "early_winter";
      break;
    case temp < 22:
      season = "early_winter";
      break;
    case temp < 27:
      season = "early_winter";
      break;
    case temp < 35:
      season = "early_winter";
      break;
    default:
      return season;
  }

  return season;
};

const CodyList = ({ temp }) => {
  const [cody, getCody] = useState([]);
  const [loadmore, setLoadmore] = useState(4);
  const [season, handleSeoson] = useState("");

  const { loading, error, data } = useQuery(GET_CODY_MAIN, {
    variables: {
      offset: 0,
      limit: loadmore,
      season,
    },
  });

  useEffect(() => {
    const tempSeason = tempCody(temp);
    handleSeoson(tempSeason);
    if (data) {
      getCody(data.codymain);
    }
  }, [data, temp]);

  const handleFetchData = () => {
    setLoadmore((e) => e + 4);
  };

  return (
    <div>
      <Row className={style.cody_container} type="flex">
        {cody ? (
          cody.map((item) => (
            <Link key={item.id} href={`/item/${item.id}`}>
              <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <div className={style.cody}>
                  <img className={style.img} src={item.img_url} />
                  <div className={style.cody_info_container}>
                    <div>{item.category.style}</div>
                    <div>{item.category.theme}</div>
                  </div>
                </div>
              </Col>
            </Link>
          ))
        ) : (
          <div>불러오는 중..</div>
        )}
      </Row>
      <div className={style.tag}>
        <div onClick={() => handleFetchData(loadmore)} className={style.more}>
          더보기
        </div>
      </div>
    </div>
  );
};

export default CodyList;
