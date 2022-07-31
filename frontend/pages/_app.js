import "../styles/globals.css";
import { Provider, createClient } from "urql";
import Nav from "../components/nav";
import logo from "../public/images/KURSI_LOGO.png";

const client = createClient({ url: "http://localhost:1337/graphql" });

function MyApp({ Component, pageProps }) {
  console.log(logo);
  return (
    <Provider value={client}>
      <Nav />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
