import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import style from "../../styles/Perfume.module.css";
import { Col, Row } from "antd";
import "antd/dist/antd.css";
import { GET_CODY_BOOKMARK, GET_PERFUMES } from "../../graphQL/schema";
import {
  collection,
  getDocs,
  query,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { fireStore } from "../../service/firebase";
import Link from "next/link";

const Perfume = ({ item }) => {
  const { loading, data } = useQuery(GET_PERFUMES, { variables: { id: item } });
  const userinfo = useSelector((state) => state);
  const router = useRouter();
  const [triger, setTriger] = useState(false);
  const [activeBookmark, setActiveBookmark] = useState(false);
  const [perfume, getPerfume] = useState(null);
  const [codies, getCodies] = useState([]);

  useEffect(async () => {
    if (data) {
      getPerfume(data.perfume);
    }
    if (userinfo.displayName.isLogin) {
      const q = await query(
        collection(fireStore, "perfumes", userinfo.email.email, "like")
      );
      const data = await getDocs(q);
      const newData = data.docs.map((doc) => doc.id);
      newData && newData.includes(item)
        ? setActiveBookmark(true)
        : setActiveBookmark(false);
    } else {
      setActiveBookmark(false);
    }
  }, [triger, item, loading]);

  useEffect(() => {
    if (perfume !== null) {
      perfume.recommand_codies.map((x) => getCodies((prev) => [...prev, x.id]));
    }
    return () => {
      getCodies([]);
    };
  }, [perfume, item]);

  const { data: cody } = useQuery(GET_CODY_BOOKMARK, {
    variables: {
      id: codies,
    },
  });

  const handleBookmark = async () => {
    switch (activeBookmark) {
      case true:
        await deleteDoc(
          doc(fireStore, "perfumes", userinfo.email.email, "like", item)
        );
        setTriger(!triger);
        break;
      case false:
        if (userinfo.displayName.isLogin) {
          await setDoc(
            doc(fireStore, "perfumes", userinfo.email.email, "like", item),
            {
              active: true,
              product_id: perfume.perfume_id,
              img_url: perfume.img_url,
              name: perfume.name,
              brand: perfume.brand,
              price: perfume.price,
              scent: perfume.scent,
              mood: perfume.mood,
            }
          );
          setTriger(!triger);
        } else {
          router.push("/login");
        }

      default:
    }
  };

  return (
    <div className={style.container}>
      <div className={style.banner}></div>
      <div className={style.inner}>
        <Row type="flex" className={style.info_container}>
          {perfume !== null ? (
            <>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <div className={style.img_container}>
                  <img className={style.img} src={perfume.img_url} />
                </div>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <div className={style.detail_container}>
                  <div className={style.title}>{perfume.name}</div>
                  <ul className={style.ul}>
                    <li>
                      <div className={style.question}>제품</div>
                      <div className={style.answer}>{perfume.name}</div>
                    </li>
                    <li>
                      <div className={style.question}>브랜드</div>
                      <div className={style.answer}>{perfume.brand}</div>
                    </li>
                    <li>
                      <div className={style.question}>향</div>
                      <div className={style.answer}>{perfume.scent}</div>
                    </li>
                    <li>
                      <div className={style.question}>무드</div>
                      <div className={style.answer}>{perfume.mood}</div>
                    </li>
                    <li>
                      <div className={style.question}>가격</div>
                      <div className={style.answer}>
                        {perfume.price
                          ? perfume.price.toLocaleString("en-US")
                          : 0}
                        원
                      </div>
                    </li>
                  </ul>
                  <div className={style.save_container}>
                    <div className={style.shop_link}>
                      <a href={perfume.shop_url}>최저가 구매</a>
                    </div>
                    <div onClick={handleBookmark} className={style.bookmark}>
                      <img
                        className={style.bookmark_icon}
                        src={
                          !activeBookmark
                            ? "/icon/icons8-bookmark.svg"
                            : "/icon/icons8-bookmark-filled.svg"
                        }
                      />
                    </div>
                  </div>
                </div>
              </Col>
            </>
          ) : null}
        </Row>
        <Row>
          {cody &&
          Array.isArray(cody.codyarray) &&
          cody.codyarray.length !== 0 ? (
            <Col lg={24} xl={24} className={style.list_container}>
              <div className={style.sub_head}>이 향수와 어울리는 코디</div>
              <div className={style.cody_ul_container}>
                <ul className={style.cody_ul}>
                  {cody.codyarray.map((item) => (
                    <li key={item.id}>
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
                  ))}
                </ul>
              </div>
            </Col>
          ) : null}
        </Row>
      </div>
    </div>
  );
};

export default Perfume;

export async function getServerSideProps(context) {
  const id = context.params.id;

  return {
    props: {
      item: id,
    },
  };
}
