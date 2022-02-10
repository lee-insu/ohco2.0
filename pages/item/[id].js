import { Col, Row } from "antd";
import "antd/dist/antd.css";
import { useRouter } from "next/router";
import Comment from "../../components/Comment.js";
import style from "../../styles/Detail.module.css";
import axios from "axios";
import { useQuery } from "@apollo/client";
import { GET_CODY_ID, GET_USER_CODY_LIST } from "../../graphQL/schema";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { fireStore } from "../../service/firebase";
import {
  collection,
  getDocs,
  query,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import Link from "next/link";

const Detail = ({ item }) => {
  const [codyItem, getCodyItem] = useState([]);
  const [userItem, getUserItem] = useState([]);
  const [bookmarkId, getBookmarkId] = useState([]);
  const userinfo = useSelector((state) => state);
  const [activeBookmark, setActiveBookmark] = useState(false);
  const [kk, kkk] = useState();
  const router = useRouter();

  const { loading, error, data: data_id } = useQuery(GET_CODY_ID, {
    variables: { id: String(item) },
  });
  const { data: userData } = useQuery(GET_USER_CODY_LIST, {
    variables: {
      user_id: codyItem ? codyItem.user_id : codyItem.user_id,
    },
  });

  useEffect(async () => {
    if (data_id) {
      getCodyItem(data_id.codyitem);
    }
    if (userinfo.displayName.isLogin) {
      const q = await query(
        collection(fireStore, "bookmark", userinfo.email.email, "like")
      );
      const data = await getDocs(q);
      const newData = data.docs.map((doc) => doc.id);
      getBookmarkId(newData);
    }
  }, [data_id, activeBookmark]);

  useEffect(() => {
    if (bookmarkId.includes(item)) {
      setActiveBookmark(true);
    }
  }, [bookmarkId]);

  useEffect(() => {
    if (userData) {
      if (userData.usercodylist != null) {
        let [...array] = userData.usercodylist;
        getUserItem(array.sort(() => Math.random() - 0.5));
      }
    }
  }, [userData]);

  const handleBookmark = async () => {
    switch (activeBookmark) {
      case true:
        await deleteDoc(
          doc(fireStore, "bookmark", userinfo.email.email, "like", item)
        );
        setActiveBookmark(false);

        break;
      case false:
        if (userinfo.displayName.isLogin) {
          await setDoc(
            doc(fireStore, "bookmark", userinfo.email.email, "like", item),
            {
              active: true,
            }
          );
          setActiveBookmark(true);
        } else {
          router.push("/login");
        }
      default:
    }
  };

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
                <div className={style.bookmark_container}>
                  <div onClick={handleBookmark} className={style.bookmark}>
                    <img
                      className={style.bookmark_icon}
                      src={
                        !activeBookmark
                          ? "/icon/icons8-bookmark.svg"
                          : "/icon/icons8-bookmark-filled.svg"
                      }
                    />
                    <div>관심 코디 북마크</div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={24} xl={24} className={style.list_container}>
              <div className={style.sub_head}>이 회원님의 다른 코디</div>
              <div className={style.cody_ul_container}>
                <ul className={style.cody_ul}>
                  {userItem
                    ? userItem.map((item) => (
                        <li id={item.id}>
                          <Link href={`/item/${item.id}`}>
                            <img
                              className={style.usercody_img}
                              src={item.img_url}
                            />
                          </Link>
                          <div className={style.info_category}>
                            <div>{item.category.style}</div>
                            <div>{item.category.theme}</div>
                          </div>
                        </li>
                      ))
                    : null}
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
