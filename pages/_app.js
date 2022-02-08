import Layout from "../components/Layout";
import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import { client } from "../service/apollo";
import { wrapper } from "../store";
import { useEffect } from "react";
import { authService } from "../service/firebase";
import { useDispatch } from "react-redux";
import * as userAction from "../store/modules/user";
import * as emailAction from "../store/modules/email";

function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        dispatch(userAction.getUser(user.displayName));
        dispatch(emailAction.getEmail(user.email));
      }
    });
  }, []);

  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default wrapper.withRedux(MyApp);
