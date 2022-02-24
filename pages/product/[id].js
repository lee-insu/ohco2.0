import React, { useEffect, useState } from "react";
import style from "../../styles/Product.module.css";
import { Col, Row } from "antd";
import "antd/dist/antd.css";
import { GET_PRODUCT, GET_PRODUCT_ITEMS } from "../../graphQL/schema";
import { useQuery } from "@apollo/client";
import {
  collection,
  getDocs,
  query,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSelector } from "react-redux";
import { fireStore } from "../../service/firebase";

const Product = ({ item }) => {
  const { loading, data } = useQuery(GET_PRODUCT, {
    variables: { id: item },
  });

  const userinfo = useSelector((state) => state);
  const router = useRouter();
  const [product, getProduct] = useState(null);
  const [triger, setTriger] = useState(false);
  const [productItems, getProductItems] = useState([]);
  const [activeBookmark, setActiveBookmark] = useState(false);

  useEffect(async () => {
    if (data) {
      getProduct(data.product);
    }

    if (userinfo.displayName.isLogin) {
      const q = await query(
        collection(fireStore, "products", userinfo.email.email, "like")
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
    if (product !== null) {
      product.recommand_products.map((x) =>
        getProductItems((prev) => [...prev, x.product_id])
      );
    }
    return () => {
      getProductItems([]);
    };
  }, [product, item]);

  const { data: productItemsArray } = useQuery(GET_PRODUCT_ITEMS, {
    variables: { id: productItems },
  });

  const handleBookmark = async () => {
    switch (activeBookmark) {
      case true:
        await deleteDoc(
          doc(fireStore, "products", userinfo.email.email, "like", item)
        );
        setTriger(!triger);
        break;
      case false:
        if (userinfo.displayName.isLogin) {
          await setDoc(
            doc(fireStore, "products", userinfo.email.email, "like", item),
            {
              active: true,
              product_id: product.product_id,
              img_url: product.img_url,
              name: product.name,
              brand: product.brand,
              price: product.price,
              cody: product.cody,
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
          {product !== null ? (
            <>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <div className={style.img_container}>
                  <img className={style.img} src={product.img_url} />
                </div>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <div className={style.detail_container}>
                  <div className={style.title}>{product.name}</div>
                  <ul className={style.ul}>
                    <li>
                      <div className={style.question}>제품</div>
                      <div className={style.answer}>{product.name}</div>
                    </li>
                    <li>
                      <div className={style.question}>브랜드</div>
                      <div className={style.answer}>{product.brand}</div>
                    </li>
                    <li>
                      <div className={style.question}>코디</div>
                      <div className={style.answer}>{product.cody}</div>
                    </li>
                    <li>
                      <div className={style.question}>가격</div>
                      <div className={style.answer}>
                        {product.price
                          ? product.price.toLocaleString("en-US")
                          : 0}
                        원
                      </div>
                    </li>
                  </ul>
                  <div className={style.save_container}>
                    <div className={style.shop_link}>
                      <a href={product.shop_url}>최저가 구매</a>
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
          {productItemsArray &&
          Array.isArray(productItemsArray.productarray) &&
          productItemsArray.productarray.length !== 0 ? (
            <Col lg={24} xl={24} className={style.list_container}>
              <div className={style.sub_head}>이 상품과 비슷한 스타일</div>
              <div className={style.cody_ul_container}>
                <ul className={style.product_ul}>
                  {productItemsArray.productarray.map((item) => (
                    <li key={item.product_id} className={style.product_li}>
                      <Link href={`/product/${item.product_id}`}>
                        <img className={style.product_img} src={item.img_url} />
                      </Link>
                      <div className={style.product_category}>
                        <div>{item.brand}</div>
                        <div>{item.name}</div>
                        <div>
                          {item.price ? item.price.toLocaleString("en-US") : 0}
                          원
                        </div>
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

export default Product;

export async function getServerSideProps(context) {
  const id = context.params.id;

  return {
    props: {
      item: id,
    },
  };
}
