import { useRouter } from "next/router";
import formatMoney from "../lib/money";
const stripe = require("stripe")(
  `${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`
);
import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import styled from "styled-components";

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const session = getSession(ctx.req, ctx.res);
    const stripeId = session.user[`${process.env.BASE_URL}/stripe_customer_id`];
    const paymentIntents = await stripe.paymentIntents.list({
      customer: stripeId,
    });
    return { props: { orders: paymentIntents.data } };
  },
});

export default function Profile({ user, orders }) {
  const route = useRouter();
  return (
    user && (
      <StyledOrderContainer>
        <h3>{user.name}</h3>
        <h3>{user.email}</h3>
        <div>
          {orders.map((order) => {
            return (
              <StyledOrder key={order.id}>
                <h3>Order numbers: {order.id}</h3>
                <p>Amount: {formatMoney(order.amount)}</p>
              </StyledOrder>
            );
          })}
          <button onClick={() => route.push("/api/auth/logout")}>Logout</button>
        </div>
      </StyledOrderContainer>
    )
  );
}

const StyledOrderContainer = styled.div`
  margin: 4rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  button {
    width: 25%;
    background-color: black;
    color: white;
    padding: 1rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }
`;

const StyledOrder = styled.div`
  margin: 6rem 3rem;
  padding: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
`;
