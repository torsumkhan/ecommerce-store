import styled from "styled-components";

export default function Hero({ image }) {
  return (
    <div>
      <StyledHero>
        <h2>Welcome to Studio Kursi Canada</h2>
        <div>
          <h2>Summer SALE</h2>
          <p>
            What better way to celebrate summer than with a sale? Now is your
            chance to stock up on everyday essentials and maybe knock a few
            things off <br></br>your wish list. <br />
            <br />
            Visit your local IKEA store for more exclusive in-store offers.
          </p>
          <button>Shop SALE</button>
        </div>
      </StyledHero>
      <StyledImage>
        <h2>Shop now</h2>
      </StyledImage>
    </div>
  );
}

const StyledImage = styled.div`
  margin: 3.4rem auto;
  min-height: 80vh;
  background: url("../images/hero-medium.jpg") center/cover no-repeat;
`;

const StyledHero = styled.div`
  width: 80%;
  margin: 4rem auto;
  div {
    min-height: 30vh;
    background-color: #ffd101;
    padding: 2rem 4rem;
    margin-top: 3rem;
    p {
      margin-top: 1.4rem;
    }
    button {
      margin-top: 2.4rem;
      border: none;
      padding: 0.8rem 1.6rem;
      background-color: black;
      color: white;
      border-radius: 3rem;
    }
  }

  h2 {
    font-size: 1.8rem;
  }
`;
