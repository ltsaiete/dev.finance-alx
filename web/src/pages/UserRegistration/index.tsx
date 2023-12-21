import { LoginSignupContainer, LogoContainer, MainContainer, SecondaryContainer } from "./styles";
import Button from "../../components/Button";
import logo from "../../static/images/logo.svg";
import Input from "../../components/Input";
import { Link } from "react-router-dom";
import { useState } from 'react';
import api from "../../services/api";

export function UserRegistration() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleInputChange = (e: any) => {
        const { id, value } = e.target;
        if (id === "name") {
            setName(value);
        }
        if (id === "email") {
            setEmail(value);
        }
        if (id === "password") {
            setPassword(value);
        }
        if (id === "confirm-password") {
            setConfirmPassword(value);
        }

    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        api.post('/users', { name, email, password }).then((response) => {
            console.log(response);
        }).catch((e) => { console.log(e) });
    }

    return (
        <form onSubmit={handleSubmit}>
            <MainContainer>
                <LogoContainer>
                    <img src={logo} alt="logo" />
                </LogoContainer>
                <LoginSignupContainer>
                    <div style={{ width: "50%", display: "flex", justifyContent: "center", margin: "0px 20px" }}>
                        <Link to={`/auth/login`}><p style={{ color: "#969cb3" }}>Login</p></Link>
                    </div>
                    <div style={{ width: "50%", display: "flex", justifyContent: "center", margin: "0px 20px", borderBottom: "5px solid #49AA26" }}>
                        <Link to={`/auth/register`}><p style={{ color: "#49AA26" }}>Signup</p></Link>
                    </div>
                </LoginSignupContainer>
                <SecondaryContainer>
                    <Input label="Enter your name" name="name" type="text" value={name} onChange={handleInputChange} required />
                </SecondaryContainer>
                <SecondaryContainer>
                    <Input label="Enter your Email" name="email" type="email" value={email} onChange={handleInputChange} required />
                </SecondaryContainer>

                <SecondaryContainer>
                    <Input label="Enter your password" name="password" type="password" value={password} onChange={handleInputChange} required />
                </SecondaryContainer>
                <SecondaryContainer>
                    <Input label="Confirm your password" name="confirm-password" type="password" value={confirmPassword} onChange={handleInputChange} required />
                </SecondaryContainer>
                <SecondaryContainer>
                    <Button text="Signup" type="submit"></Button>
                </SecondaryContainer>
            </MainContainer>

        </form>
    );
}