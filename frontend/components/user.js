import { FaUserCircle } from "react-icons/fa";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useUser } from "@auth0/nextjs-auth0";

export default function User() {
  const route = useRouter();
  const { user } = useUser();
  console.log(user);

  if (!user) {
    return (
      <div onClick={() => route.push("/api/auth/login")}>
        <FaUserCircle />
      </div>
    );
  }
  return (
    user && (
      <StyledProfile onClick={() => route.push("/profile")}>
        <img src={user.picture} />
      </StyledProfile>
    )
  );
}

const StyledProfile = styled.div`
  width: 2rem;
  height: 2rem;
  img {
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
  }
`;
