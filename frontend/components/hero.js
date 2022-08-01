import styled from "styled-components";

export default function Hero({ image }) {
  return (
    <div>
      <StyledHeroContainer>
        <StyledHero>
          <h2>Welcome to Studio Kursi Canada</h2>
          <div>
            <h2>Summer SALE</h2>
            <p>
              What better way to celebrate summer than with a sale? Now is your
              chance to stock up on everyday essentials and maybe knock a few
              things off <br></br>your wish list. <br />
              <br />
              Visit your local KURSI store for more exclusive in-store offers.
            </p>
            <button>Shop SALE</button>
          </div>
        </StyledHero>
      </StyledHeroContainer>
      <StyledGridContainer>
        <StyledImage></StyledImage>
        <div>
          <h2>KURSI family offers</h2>
          <p>
            Get access to discounted member prices, offers and deals on selected
            products. Joining is quick, easy and free.
          </p>
          <button>Join now</button>
        </div>
      </StyledGridContainer>
    </div>
  );
}

const StyledHeroContainer = styled.div`
  display: flex;
  margin-top: 4rem;
  flex-direction: column;
  align-items: center;
`;

const StyledGridContainer = styled.div`
  display: grid;
  background-color: #cbc2bd;
  width: 80%;
  grid-template-columns: 2fr 1fr;
  margin: 3rem auto;
  /* align-items: center;
  justify-content: center; */
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    padding: 1rem 3rem;
    button {
      width: 75%;
      background-color: black;
      color: white;
      font-weight: 500;
      font-size: 1rem;
      padding: 0.6rem 2rem;
      border: none;
      border-radius: 30px;
    }
  }
`;

const StyledImage = styled.div`
  /* margin: 3.4rem auto; */
  background-color: red;
  text-align: right;
  min-height: 80vh;
  background: url("../images/hero-medium.jpg") center/cover no-repeat;
`;

const StyledHero = styled.div`
  width: 80%;
  /* margin: 4rem auto; */
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
