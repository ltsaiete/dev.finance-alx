import { Button, LogoContainer, MainContainer, SecondaryContainer } from "./styles";
import logo from "../../static/images/logo.svg";

export function UserRegistration() {
    return (
        <form action="" method="post">
            <MainContainer>
                <LogoContainer>
                    <img src={logo} alt="logo" />
                </LogoContainer>
                <SecondaryContainer>
                    <label htmlFor="lastname">Name </label>
                    <input type="text" placeholder="Enter your name" id="lastname" />
                </SecondaryContainer>
                <SecondaryContainer>
                    <label htmlFor="email">Email </label>
                    <input type="email" placeholder="Enter your e-mail" id="email" />
                </SecondaryContainer>

                <SecondaryContainer>
                    <label htmlFor="password">Password </label>
                    <input type="password" placeholder="password" id="password" />
                </SecondaryContainer>
                <SecondaryContainer>
                    <label htmlFor="confirm-password">Confirm Password </label>
                    <input type="password" placeholder="password" id="confirm-password" />
                </SecondaryContainer>
                <Button type="submit">Signup</Button>
            </MainContainer>

        </form>
    );
}