import { MainContainer, SecondaryContainer, LogoContainer, LoginSignupContainer } from "./styles";
import logo from "../../static/images/logo.svg";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function Login() {
    return (
        <form action="" method="get">
            <MainContainer>
                <LogoContainer>
                    <img src={logo} alt="logo" />
                </LogoContainer>
                <LoginSignupContainer>
                    <div style={{ width: "50%", display: "flex", justifyContent: "center", margin: "0px 20px", borderBottom: "5px solid #49AA26" }}>
                        <p style={{ color: "#49AA26" }}>Login</p>
                    </div>
                    <div style={{ width: "50%", display: "flex", justifyContent: "center", margin: "0px 20px" }}>
                        <p>Signup</p>
                    </div>
                </LoginSignupContainer>
                <SecondaryContainer>
                    <Input type="email" label="E-mail" name="email" />
                </SecondaryContainer>
                <SecondaryContainer>
                    <Input type="password" label="password" id="password" />
                </SecondaryContainer>
                <SecondaryContainer>
                    <Button text="Login" type="submit"></Button>
                </SecondaryContainer>

            </MainContainer>
        </form>
    );
}