import { Col, Row, List, Card } from "antd";
import React, { useEffect, useRef, useState } from "react";
import style from "../styles/List.module.css";
import "antd/dist/antd.css";
import Link from "next/link";
import { GET_CODY_FILTER } from "../graphQL/schema";
import { useQuery } from "@apollo/client";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import { fireStore } from "../service/firebase";
import {
  setDoc,
  doc,
  collection,
  getDocs,
  query,
  deleteDoc,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

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
  const useremail = useSelector((state) => state.email.email);
  const router = useRouter();
  const [bookmark, getBookmark] = useState([]);
  const [bookmarkReset, setBookmarkReset] = useState(0);

  const [cody, getCody] = useState([]);
  const [filterData, setFilterData] = useState(filterList);
  const [acitveFilter, setActiveFilter] = useState(false);
  const [activeId, setActiveId] = useState("");

  const [filTheme, setFilTheme] = useState("");
  const [filStyle, setFilStyle] = useState("");
  const [filWeather, setFilWeather] = useState("");
  const [filSex, setFilSex] = useState("");
  const [filSeason, setFilSeason] = useState("");
  const [filterArray, getFilterArray] = useState([]);
  const fetchMoreEl = useRef(null);
  const [hasNext, setHasNext] = useState(true);
  const intersecting = useInfiniteScroll(fetchMoreEl);
  const codyLen = Object.keys(cody).length;
  const [isCount, setIsCount] = useState(codyLen + 4);

  const { data } = useQuery(GET_CODY_FILTER, {
    variables: {
      weather: filWeather,
      season: filSeason,
      sex: filSex,
      style: filStyle,
      theme: filTheme,
      count: isCount,
    },
  });

  useEffect(() => {
    if (data) {
      getCody(data.codyfilter);
    }

    const filter = [filSeason, filSex, filStyle, filTheme, filWeather];
    if (filter) {
      getFilterArray(...[filter]);
      getFilterArray((prevState) => prevState.filter((item) => item != ""));
    }
  }, [data, filSeason, filSex, filStyle, filTheme, filWeather]);

  useEffect(() => {
    if (intersecting && hasNext) {
      setIsCount((prevState) => prevState + 4);
    }

    if (intersecting && codyLen + 8 < isCount) {
      setHasNext(false);
    }

    return () => {
      if (intersecting && codyLen == isCount) {
        setHasNext(true);
      }
      if (codyLen + 10 < isCount) {
        setIsCount(codyLen + 8);
      }
    };
  }, [intersecting]);

  useEffect(async () => {
    if (useremail) {
      const q = await query(
        collection(fireStore, "bookmark", useremail, "like")
      );
      const data = await getDocs(q);
      const newData = data.docs.map((doc) => doc.id);
      getBookmark(newData);
    }
  }, [useremail, bookmarkReset]);

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

  const deleteFilter = (list) => {
    getFilterArray((prevState) => prevState.filter((item) => item != list));
    switch (list) {
      case "칼바람이 부는 날씨":
      case "따뜻하고 포근한 날씨":
        setFilTheme("");
        break;
      case "캐주얼":
      case "포멀":
      case "스트릿":
        setFilStyle("");
        break;
      case "봄":
      case "여름":
      case "가을":
      case "겨울":
        setFilSeason("");
        break;
      case "맑음":
      case "흐림":
      case "비":
        setFilWeather("");
        break;
      case "남":
      case "여":
        setFilSex("");
        break;
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

  const activeBookmark = async (id) => {
    if (useremail) {
      if (confirm("이 코디를 옷장에 저장할까요?")) {
        await setDoc(doc(fireStore, "bookmark", useremail, "like", id), {
          active: true,
        });
        setBookmarkReset((counter) => (counter += 1));
      } else {
        return;
      }
    } else {
      router.push("/login");
    }
  };

  const unactiveBookmark = async (id) => {
    await deleteDoc(doc(fireStore, "bookmark", useremail, "like", id));
    setBookmarkReset((counter) => (counter += 1));
  };

  return (
    <div className={style.container}>
      <div className={style.banner}>
        <div className={style.title}>날씨에 맞는 코디</div>
      </div>
      <div className={style.list_container}>
        <nav className={style.nav}>
          <div className={style.mobile_filter}>필터</div>
          {filterArray.map((list, i) => (
            <div
              className={style.filter_li}
              key={i}
              onClick={() => deleteFilter(list)}
            >
              {list ? list : null}
            </div>
          ))}
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
                      <Col
                        key={i}
                        className={style.li_container}
                        xs={12}
                        sm={12}
                        md={8}
                        lg={8}
                        xl={6}
                      >
                        <div className={style.cody_li}>
                          <Link href={`/item/${item.id}`}>
                            <div className={style.cody_img_container}>
                              <img className={style.img} src={item.img_url} />
                            </div>
                          </Link>
                          <div className={style.item_container}>
                            <div className={style.item_category}>
                              <div>{item.category.style}</div>
                              <div>{item.category.theme}</div>
                            </div>
                            <img
                              onClick={
                                bookmark.includes(item.id)
                                  ? () => unactiveBookmark(item.id)
                                  : () => activeBookmark(item.id)
                              }
                              className={style.bookmark}
                              src={
                                bookmark.includes(item.id)
                                  ? "/icon/icons8-bookmark-filled.svg"
                                  : "/icon/icons8-bookmark.svg"
                              }
                            />
                          </div>
                        </div>
                      </Col>
                    ))
                  : null}
              </Row>
            </Col>
          </Row>
        </div>
      </div>
      <div ref={fetchMoreEl}></div>
    </div>
  );
};

export default list;
