import { Col, Row, List, Card } from "antd";
import React, { useEffect, useState } from "react";
import style from "../styles/List.module.css";
import "antd/dist/antd.css";
import Link from "next/link";
import { GET_CODY_LIST } from "../graphQL/schema";
import { useQuery } from "@apollo/client";

const list = () => {
  const filterList = [
    {
      id: "테마",
      filter: [
        { id: "테마", value: "칼바람이 부는 날씨" },
        { id: "테마", value: "따뜻하고 포근한 날씨" },
      ],
    },
    {
      id: "스타일",
      filter: [
        { id: "스타일", value: "캐주얼" },
        { id: "스타일", value: "포멀" },
        { id: "스타일", value: "스트릿" },
      ],
    },
    {
      id: "계절",
      filter: [
        { id: "계절", value: "봄" },
        { id: "계절", value: "여름" },
        { id: "계절", value: "가을" },
        { id: "계절", value: "겨울" },
      ],
    },
    {
      id: "날씨",
      filter: [
        { id: "날씨", value: "맑음" },
        { id: "날씨", value: "흐림" },
        { id: "날씨", value: "비" },
      ],
    },
    {
      id: "성별",
      filter: [
        { id: "성별", value: "남" },
        { id: "성별", value: "여" },
      ],
    },
  ];

  const [cody, getCody] = useState([]);
  const [acitveFilter, setActiveFilter] = useState(false);
  const [activeId, setActiveId] = useState("");

  const [filTheme, setFilTheme] = useState("");
  const [filStyle, setFilStyle] = useState("");
  const [filWeather, setFilWeather] = useState("");
  const [filSex, setFilSex] = useState("");
  const [filSeason, setFilSeason] = useState("");
  const { data } = useQuery(GET_CODY_LIST);

  useEffect(() => {
    if (data) {
      getCody(data.codylist);
    }
  }, [data]);

  const handleFilter = (filterId) => {
    switch (filterId) {
      case "테마":
        setActiveFilter(true);
        setActiveId(filterId);
        break;
      case "스타일":
        setActiveFilter(true);
        setActiveId(filterId);
        break;
      case "계절":
        setActiveFilter(true);
        setActiveId(filterId);
        break;
      case "성별":
        setActiveFilter(true);
        setActiveId(filterId);
        break;
      case "날씨":
        setActiveFilter(true);
        setActiveId(filterId);
        break;
      default:
    }
  };

  const onChange = async (filter) => {
    switch (true) {
      case filter.id == "스타일":
        await setFilStyle(filter);
        break;
      case filter.id == "테마":
        await setFilTheme(filter);
        break;
      case filter.id == "계절":
        await setFilSeason(filter);
        break;
      case filter.id == "날씨":
        await setFilWeather(filter);
        break;
      case filter.id == "성별":
        await setFilSex(filter);
        break;
      default:
    }
  };

  const selectFilter = (filter) => {
    switch (true) {
      case filter == filSex.id:
        return <div name={filter}>{filSex.value}</div>;
      case filter == filStyle.id:
        return <div name={filter}>{filStyle.value}</div>;
      case filter == filWeather.id:
        return <div name={filter}>{filWeather.value}</div>;
      case filter == filSeason.id:
        return <div name={filter}>{filSeason.value}</div>;
      case filter == filTheme.id:
        return <div name={filter}>{filTheme.value}</div>;
      default:
    }
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
                  <Col className={style.filter_list_container} key={i} xl={24}>
                    <div
                      name={filter.id}
                      onClick={
                        acitveFilter && filter.id === activeId
                          ? () => setActiveFilter(false)
                          : () => handleFilter(filter.id)
                      }
                      className={style.filter_list}
                    >
                      <div name={filter.id} className={style.filter_text}>
                        <div name={filter.id}>{filter.id}</div>
                        {filStyle.id == filter.id ||
                        filSex.id == filter.id ||
                        filTheme.id == filter.id ||
                        filWeather.id == filter.id ||
                        filSeason.id == filter.id ? (
                          selectFilter(filter.id)
                        ) : (
                          <div name={filter.id}>모든 {filter.id}</div>
                        )}
                      </div>
                      <div name={filter.id} className={style.plus}>
                        {acitveFilter && filter.id === activeId ? "-" : "+"}
                      </div>
                    </div>
                    {filter.id == activeId && acitveFilter ? (
                      <div className={style.filter_title_menu}>
                        <div className={style.filter_menu_container}>
                          {filter.filter.map((fil, i) => (
                            <div key={i} className={style.filter_menu_list}>
                              <input
                                type="checkbox"
                                value={fil.value}
                                onChange={() => onChange(fil)}
                              />
                              <div>{fil.value}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </Col>
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
