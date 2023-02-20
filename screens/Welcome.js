import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { colors } from "../colors";

const Container = styled.View`
  background-color:black;
  align-items:center;
  justify-content:center;
  flex:1;
  padding: 0px 40px;
`;

const Logo = styled.Image`
  max-width:50%;
  height: 100px;
`;

const CreateAccount = styled.TouchableOpacity`
  background-color:${colors.blue};
  padding: 10px 10px;
  border-radius: 7px;
  margin-top: 20px;
  opacity: ${props => props.disabled? "0.5": "1"}
`;

const CreateAccountText = styled.Text`
  color:white;
  font-weight:600;
  font-size:16px;
  text-align:center;f
`;

const LoginLink = styled.Text`
  color: ${colors.blue};
  font-weight:600;
  margin-top:20px;
`;

export default function Welcome({navigation}){
  const goToCreateAccount = () => navigation.navigate("CreateAccount");
  const goToLogin = () => navigation.navigate("Login");

  return <Container>
    <Logo resizeMode="center" source={require("../assets/logo.png")}></Logo>
    <CreateAccount disabled={false} onPress={goToCreateAccount}>
      <CreateAccountText>
        Create Account
      </CreateAccountText>
    </CreateAccount>
    <TouchableOpacity onPress={goToLogin}>
      <LoginLink>Log In</LoginLink>
    </TouchableOpacity>
  </Container>;

}
     