import "../styles/globals.css";
import { Provider, createClient } from "urql";
import Nav from "../components/nav";
import { UserProvider } from "@auth0/nextjs-auth0";
import { StateContext } from "../lib/context";
import { Toaster } from "react-hot-toast";

const client = createClient({ url: "http://localhost:1337/graphql" });

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <StateContext>
        <Provider value={client}>
          <Toaster />
          <Nav />
          <Component {...pageProps} />
        </Provider>
      </StateContext>
    </UserProvider>
  );
}

export default MyApp;
