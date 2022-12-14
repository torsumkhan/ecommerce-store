import Head from "next/head";
import hero from "../public/images/hero-medium.jpg";
import Product from "../components/product";
import Hero from "../components/hero";
import Logo from "../public/images/KURSI-transparent.png";
import styled from "styled-components";
import { useQuery } from "urql";
import { PRODUCT_QUERY } from "../lib/query";

export default function Home() {
  const [result] = useQuery({ query: PRODUCT_QUERY });
  const { data, fetching, error } = result;

  if (fetching) {
    return <p>...Loading</p>;
  }
  if (error) {
    return <p>Fetch Error</p>;
  }
  const products = data.products.data;

  return (
    <div>
      <Head>
        <title>Kursi Store</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <main>
        <Gallery>
          {products.map((product) => {
            return <Product product={product} key={product.attributes.Slug} />;
          })}
        </Gallery>
      </main>
    </div>
  );
}

const Gallery = styled.div`
  display: grid;
  grid-column-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  margin: 0rem 8%;
`;
