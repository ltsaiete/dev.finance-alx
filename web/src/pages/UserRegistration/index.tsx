import { LoginSignupContainer, LogoContainer, MainContainer, SecondaryContainer } from "./styles";
import Button from "../../components/Button";
import logo from "../../static/images/logo.svg";
import Input from "../../components/Input";

export function UserRegistration() {
    return (
        <form action="" method="post">
            <MainContainer>
                <LogoContainer>
                    <img src={logo} alt="logo" />
                </LogoContainer>
                <LoginSignupContainer>
                    <div style={{ width: "50%", display: "flex", justifyContent: "center", margin: "0px 20px" }}>
                        <p >Login</p>
                    </div>
                    <div style={{ width: "50%", display: "flex", justifyContent: "center", margin: "0px 20px", borderBottom: "5px solid #49AA26" }}>
                        <p style={{ color: "#49AA26" }}>Signup</p>
                    </div>
                </LoginSignupContainer>
                <SecondaryContainer>
                    <Input label="Enter your name" name="name" type="text" />
                </SecondaryContainer>
                <SecondaryContainer>
                    <Input label="Enter your Email" name="email" type="email" />
                </SecondaryContainer>

                <SecondaryContainer>
                    <Input label="Enter your password" name="password" type="password" />
                </SecondaryContainer>
                <SecondaryContainer>
                    <Input label="Confirm your password" name="confirm-password" type="password" />
                </SecondaryContainer>
                <SecondaryContainer>
                    <Button text="Signup" type="submit"></Button>
                </SecondaryContainer>
            </MainContainer>

        </form>
    );
}