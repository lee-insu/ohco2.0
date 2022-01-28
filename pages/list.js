import { Col, Row, List, Card } from "antd";
import React, { useEffect, useRef, useState } from "react";
import style from "../styles/List.module.css";
import "antd/dist/antd.css";
import Link from "next/link";
import { GET_CODY_FILTER } from "../graphQL/schema";
import { useQuery } from "@apollo/client";
import ListNav from "../components/ListNav";

const list = () => {
  const filterList = [
    {
      id: "테마",
      filter: [
        { id: "테마", value: "칼바람이 부는 날씨", isChecked: false },
        { id: "테마", value: "따뜻하고 포근한 날씨", isChecked: false },
      ],
    },
    {
      id: "스타일",
      filter: [
        { id: "스타일", value: "캐주얼", isChecked: false },
        { id: "스타일", value: "포멀", isChecked: false },
        { id: "스타일", value: "스트릿", isChecked: false },
      ],
    },
    {
      id: "계절",
      filter: [
        { id: "계절", value: "봄", isChecked: false },
        { id: "계절", value: "여름", isChecked: false },
        { id: "계절", value: "가을", isChecked: false },
        { id: "계절", value: "겨울", isChecked: false },
      ],
    },
    {
      id: "날씨",
      filter: [
        { id: "날씨", value: "맑음", isChecked: false },
        { id: "날씨", value: "흐림", isChecked: false },
        { id: "날씨", value: "비", isChecked: false },
      ],
    },
    {
      id: "성별",
      filter: [
        { id: "성별", value: "남", isChecked: false },
        { id: "성별", value: "여", isChecked: false },
      ],
    },
  ];

  const [cody, getCody] = useState([]);
  const [filterData, setFilterData] = useState(filterList);
  const [acitveFilter, setActiveFilter] = useState(false);
  const [activeId, setActiveId] = useState("");

  const [filTheme, setFilTheme] = useState("");
  const [filStyle, setFilStyle] = useState("");
  const [filWeather, setFilWeather] = useState("");
  const [filSex, setFilSex] = useState("");
  const [filSeason, setFilSeason] = useState("");
  const [filterActive, setFilterActive] = useState(false);

  const { data } = useQuery(GET_CODY_FILTER, {
    variables: {
      weather: filWeather,
      season: filSeason,
      sex: filSex,
      style: filStyle,
      theme: filTheme,
    },
  });

  useEffect(() => {
    if (data) {
      getCody(data.codyfilter);
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

  const clickFilter = async (filter) => {
    switch (true) {
      case filter.id == "스타일":
        await setFilStyle(filter.value);
        break;
      case filter.id == "테마":
        await setFilTheme(filter.value);
        break;
      case filter.id == "계절":
        await setFilSeason(filter.value);
        break;
      case filter.id == "날씨":
        await setFilWeather(filter.value);
        break;
      case filter.id == "성별":
        await setFilSex(filter.value);
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

  const handleChange = (e) => {
    const {
      target: { value },
    } = e;
    const modifiedData = [...filterData];
    modifiedData.map((data) => {
      data.filter.map((item) => {
        switch (true) {
          case item.id == "스타일":
            item.isChecked = item.value === value;
            break;
          case item.id == "테마":
            item.isChecked = item.value === value;
            break;
          case item.id == "계절":
            item.isChecked = item.value === value;
            break;
          case item.id == "날씨":
            item.isChecked = item.value === value;
            break;
          case item.id == "성별":
            item.isChecked = item.value === value;
            break;
          default:
        }
      });
    });
  };

  // 여기서 작업,
  // 이 페이지에서 nav를 가져와야 할 거 같음
  // 똑같이 배열에 담는 대신 filteractive가 true로 봐꼈을 떄 switch 문으로
  //해당 리스트 값만 초기화 시키기

  return (
    <div className={style.container}>
      <div className={style.banner}>
        <div className={style.title}>날씨에 맞는 코디</div>
      </div>
      <div className={style.list_container}>
        <nav className={style.nav}>
          <ListNav
            season={filSeason}
            weather={filWeather}
            sex={filSex}
            styles={filStyle}
            theme={filTheme}
            active={filterActive}
          />
        </nav>
        <div className={style.inner}>
          <Row>
            <Col className={style.filter} xs={0} sm={0} md={4} lg={4} xl={4}>
              <Col className={style.filter_title}>필터</Col>
              <div className={style.filter_container}>
                {filterData.map((filter, i) => (
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
                                name={fil.id}
                                onChange={(e) => handleChange(e)}
                                onClick={() => clickFilter(fil)}
                                checked={fil.isChecked}
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
