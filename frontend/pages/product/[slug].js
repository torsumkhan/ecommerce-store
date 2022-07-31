import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";
import { useRouter } from "next/router";
import styled from "styled-components";

import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

export default function ProductDetails() {
  const { query } = useRouter();

  const [result] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { Slug: query.slug },
  });

  const { data, fetching, error } = result;

  if (fetching) {
    return <p>...Loading</p>;
  }
  if (error) {
    return <p>Fetch Error</p>;
  }
  const { Title, Description, Price, Slug, Image } =
    data.products.data[0].attributes;
  console.log(Image);

  return (
    <StyledDetails>
      <img src={Image.data.attributes.formats.medium.url} />
      <StyledInfo>
        <h3>{Title}</h3>
        <p>{Description}</p>
        <p>{Price}</p>
        <StyledQuantity>
          <span>Quantity</span>
          <button>
            <AiFillPlusCircle />
          </button>
          <p>0</p>
          <button>
            <AiFillMinusCircle />
          </button>
        </StyledQuantity>
        <StyledAddButton>Add to Cart</StyledAddButton>
      </StyledInfo>
    </StyledDetails>
  );
}

const StyledDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 6rem 15%;
  img {
    width: 40%;
  }
`;

const StyledInfo = styled.div`
  width: 40%;
  button {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
`;

const StyledQuantity = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0rem;
  button {
    background-color: transparent;
    border: none;
    display: flex;
    font-size: 1.6rem;
  }
  p {
    width: 1rem;
    text-align: center;
    margin: 0 0.8rem;
  }
`;

const StyledAddButton = styled.button`
  width: 100%;
  font-weight: 500;
`;
