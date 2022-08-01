import styled from "styled-components";
import Link from "next/link";

export default function Product({ product }) {
  const { Title, Image, Price, Slug } = product.attributes;
  return (
    <ProductStyled>
      <Link href={`/product/${Slug}`}>
        <img src={Image.data.attributes.formats.small.url} />
      </Link>
      <h3>{Title}</h3>
      <p>Chair</p>
      <p style={{ fontSize: "1.2rem", fontWeight: "700" }}>${Price}</p>
    </ProductStyled>
  );
}

const ProductStyled = styled.div`
  background-color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  height: 85%;
  h3 {
    margin-top: 1.2rem;
    font-size: 1rem;
    text-transform: capitalize;
  }

  img {
    width: 100%;
    height: 100%;
    cursor: pointer;
    object-fit: cover;
    object-position: center;
  }
`;
