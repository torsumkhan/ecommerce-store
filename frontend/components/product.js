import styled from "styled-components";
import Link from "next/link";

export default function Product({ product }) {
  const { Title, Image, Price, Slug } = product.attributes;
  return (
    <ProductStyled>
      <Link href={`/product/${Slug}`}>
        <img src={Image.data.attributes.formats.small.url} />
      </Link>
      <h1>{Title}</h1>
      <p>{Price}</p>
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
  img {
    width: 100%;
    height: 100%;
    cursor: pointer;
    object-fit: cover;
    object-position: center;
  }
`;
