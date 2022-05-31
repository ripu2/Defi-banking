import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useWalletConnect } from "../hooks/Authentication";
import {
  ConnectButton,
  ConnectContainer,
  ConnectTypo,
  HeaderTypo,
  ImageContainer,
  LeftChild,
  ParentCotainer,
  RighBottomContainer,
  RightChild,
  RightHeaderContainer,
} from "./styles";

const Login = () => {
  const [open, setOpen] = React.useState(false);
  const { connectWallet } = useWalletConnect()
  const router = useRouter()

  const Connect = async () => {
    try {
      const status = await connectWallet()
      if(status) router.push('/home')
    } catch (error: any) {
      alert(error.message)
    }
  }

  return (
    <ParentCotainer>
      <LeftChild>
        <ImageContainer
          src="https://static.vecteezy.com/system/resources/previews/004/341/291/original/credit-card-cashback-offer-flat-illustration-banking-app-referral-bonuses-and-reward-programs-cartoon-concept-ebanking-ewallet-account-special-offer-discounts-and-customer-loyalty-metaphor-vector.jpg"
          alt="img"
        />
      </LeftChild>
      <RightChild>
        <RightHeaderContainer>
          <HeaderTypo>Welcome to DeFi banking solutions</HeaderTypo>
        </RightHeaderContainer>
        <RighBottomContainer>
          <ConnectContainer>
            <ConnectButton onClick={Connect}>
              <ConnectTypo>Login</ConnectTypo>
            </ConnectButton>
          </ConnectContainer>
        </RighBottomContainer>
      </RightChild>
    </ParentCotainer>
  );
}

export default Login;
