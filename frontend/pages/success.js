import { useRouter } from "next/router";
import styled from "styled-components";
const stripe = require("stripe")(
  `${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`
);

export async function getServerSideProps(params) {
  const order = await stripe.checkout.sessions.retrieve(
    params.query.session_id,
    {
      expand: ["line_items"],
    }
  );
  return { props: { order } };
}

export default function Success({ order }) {
  const route = useRouter();

  return (
    <StyledOrderContainer>
      <StyledOrder>
        <h2>Thank you {order.customer_details.name} 🙏</h2>
        <h3>Your order has been placed!</h3>
        <p>
          We sent an email to <strong>{order.customer_details.email}</strong>
          with your order confirmation and receipt. If the email hasn't arrived
          within two minutes, please check your spam folder to see if the email
          was router there
        </p>
      </StyledOrder>
      <button onClick={() => route.push("/")}>Continue shopping</button>
    </StyledOrderContainer>
  );
}

const StyledOrderContainer = styled.div`
  margin: 5rem 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    margin-top: 3rem;
    width: 65%;
    background-color: black;
    color: white;
    border: none;
    padding: 2rem 0rem;
    font-weight: 700;
    border-radius: 10px;
    cursor: pointer;
  }
`;

const StyledOrder = styled.div`
  display: flex;
  gap: 3rem;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;
