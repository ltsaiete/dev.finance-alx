import { LoginForm, MainContainer, Button, SecondaryContainer, Label, Input, RegisterContainer, LogoContainer, LoginSignupContainer } from "./styles";
import logo from "../../static/images/logo.svg";

export default function Login() {
    return (
        <form action="" method="get">
            <MainContainer>
                <LogoContainer>
                    <img src={ logo } alt="logo" />
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
                    <Label htmlFor="email">Email address</Label>
                    <Input type="text" placeholder="E-mail" id="email" />
                </SecondaryContainer>
                <SecondaryContainer>
                    <Label htmlFor="password">Password </Label>
                    <Input type="password" placeholder="password" id="password" />
                </SecondaryContainer>
                <Button type="submit">Login</Button>
                <RegisterContainer>
                    <p>Don't have an account? <a href="#" style={{ color: "#49AA26" }}>Register Now</a> </p>
                </RegisterContainer>

            </MainContainer>
        </form>
    );
}