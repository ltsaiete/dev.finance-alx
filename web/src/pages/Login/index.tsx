import { MainContainer, SecondaryContainer, LogoContainer, LoginSignupContainer } from "./styles";
import logo from "../../static/images/logo.svg";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { Password } from "@phosphor-icons/react";
import api from "../../services/api";

export default function Login() {
    const [data, setData] = useState({
        email: "",
        password: "",
    })

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleInputChange = (e: any) => {
        const { id, value } = e.target;

        if (id === "email") {
            setEmail(value);
        }

        if (id === "password") {
            setPassword(value);
        }

    }

    const submitHandler = (e: any) => {
        e.preventDefault();
        api.post('/auth/login', { email, password }).then((response) => {
            console.log(response);
        }).catch((e) => {
            console.log(e);
        });
    }

    return (
        <form onSubmit={submitHandler}>
            <MainContainer>
                <LogoContainer>
                    <img src={logo} alt="logo" />
                </LogoContainer>
                <LoginSignupContainer>
                    <div style={{ width: "50%", display: "flex", justifyContent: "center", margin: "0px 20px", borderBottom: "5px solid #49AA26" }}>
                        <Link to={`/auth/login`}><p style={{ color: "#49AA26" }}>Login</p></Link>
                    </div>
                    <div style={{ width: "50%", display: "flex", justifyContent: "center", margin: "0px 20px" }}>
                        <Link to={`/auth/register`}><p style={{ color: "#969cb3" }}>Signup</p></Link>
                    </div>
                </LoginSignupContainer>
                <SecondaryContainer>
                    <Input type="email" label="E-mail" name="email" value={email} onChange={handleInputChange} required />
                </SecondaryContainer>
                <SecondaryContainer>
                    <Input type="password" label="password" name="password" value={password} onChange={handleInputChange} required />
                </SecondaryContainer>
                <SecondaryContainer>
                    <Button text="Login" type="submit"></Button>
                </SecondaryContainer>

            </MainContainer>
        </form>
    );
}