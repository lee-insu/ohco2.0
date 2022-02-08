import Layout from "../components/Layout";
import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import { client } from "../service/apollo";
import { wrapper } from "../store";
import { useEffect } from "react";
import { authService } from "../service/firebase";
import { useDispatch, useSelector } from "react-redux";
import * as userAction from "../store/modules/user";

function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        dispatch(userAction.getUser(user.displayName));
      }
    });
  }, []);

  const state = useSelector((state) => state);
  console.log(state);

  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default wrapper.withRedux(MyApp);
