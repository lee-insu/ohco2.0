import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import "antd/dist/antd.css";
import style from "../styles/Mypage.module.css";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { fireStore } from "../service/firebase";
import { doc, collection, getDocs, query, deleteDoc } from "firebase/firestore";
import { useQuery } from "@apollo/client";
import { GET_CODY_BOOKMARK } from "../graphQL/schema";
import * as codyAction from "../store/modules/cody";
import * as productAction from "../store/modules/product";

const mypage = () => {
  const user = useSelector((state) => state);
  const dispatch = useDispatch();

  const [pick, getPick] = useState([]);
  const [productsPick, getProductsPick] = useState([]);
  const [bookmark, getBookmark] = useState([]);
  const [triger, setTriger] = useState(false);

  const { data } = useQuery(GET_CODY_BOOKMARK, {
    variables: {
      id: pick,
    },
  });

  //timestamp 추가 후 desc
  //북마크 상세 페이지에서 북마크 해제 버튼 다시 만들기

  useEffect(async () => {
    if (user.displayName.isLogin) {
      const q = await query(
        collection(fireStore, "bookmark", user.email.email, "like")
      );
      const data = await getDocs(q);
      const newData = data.docs.map((doc) => doc.id);
      getPick(newData);
      setTriger(false);
    }

    if (user.displayName.isLogin) {
      const q = await query(
        collection(fireStore, "products", user.email.email, "like")
      );
      const data = await getDocs(q);
      const newData = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      getProductsPick(newData);
      dispatch(productAction.getProduct(newData));
    }
  }, [triger]);

  useEffect(() => {
    if (data) {
      getBookmark(data.codyarray);
      dispatch(codyAction.getCody(data.codyarray));
    }
  }, [data]);

  const unactiveProduct = async (id) => {
    if (confirm("이 상품을 북마크에서 뺄까요?")) {
      await deleteDoc(doc(fireStore, "products", user.email.email, "like", id));
      setTriger(true);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.inner}>
        <div className={style.userinfo_container}>
          <div className={style.userinfo_box}>
            <div className={style.profile_img}></div>
            <div className={style.userinfo}>
              <div>{user.displayName.displayName}</div>
              <div>{user.email.email}</div>
            </div>
          </div>
        </div>
        <div className={style.ad}>다양한 기능을 준비하고 있습니다..</div>
        <div className={style.bookmark_container}>
          <div className={style.title_container}>
            <div className={style.sub_title}>관심 있는 코디</div>
            {bookmark.length > 4 ? (
              <Link href="/mypage/cody">
                <div className={style.moreBtn}>더보기</div>
              </Link>
            ) : null}
          </div>

          <ul className={style.item_bookmark_container}>
            {bookmark.slice(0, 4).map((item) => (
              <li key={item.id} className={style.li}>
                <Link href={`/item/${item.id}`}>
                  <div className={style.bookmark_img_container}>
                    <img className={style.img} src={item.img_url} />
                  </div>
                </Link>
                <div className={style.bookmark_info_container}>
                  <div className={style.bookmark_info_category}>
                    <div>{item.category.style}</div>
                    <div>{item.category.theme}</div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {productsPick ? (
          <div className={style.product_container}>
            <div className={style.title_container}>
              <div className={style.sub_title}>관심 있는 상품</div>
              {productsPick.length > 4 ? (
                <Link href="/mypage/product">
                  <div className={style.moreBtn}>더보기</div>
                </Link>
              ) : null}
            </div>
            <ul className={style.item_bookmark_container}>
              {productsPick.slice(0, 4).map((item) => (
                <li key={item.id} className={style.li}>
                  <Link href={`/product/${item.id}`}>
                    <div className={style.product_img_container}>
                      <img className={style.product_img} src={item.img_url} />
                    </div>
                  </Link>
                  <div className={style.bookmark_info_container}>
                    <div className={style.bookmark_info_category}>
                      <div>{item.brand}</div>
                      <div>{item.name}</div>
                      <div>
                        {item.price ? item.price.toLocaleString("en-US") : 0}원
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>관심 상품이 없습니다.</div>
        )}
      </div>
    </div>
  );
};

export default mypage;
