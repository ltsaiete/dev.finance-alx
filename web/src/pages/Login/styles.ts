import styled from 'styled-components';

export const LoginForm = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 50%;
    margin: 0 auto;
`;

export const LoginSignupContainer = styled.div`
    display: flex;
    /* border: 1px solid red; */
    padding: 0 20px;
`;

export const Container = styled.div`
    border: 1px solid orange;
`;

export const MainContainer = styled.div`
    width: 30%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    padding: 3%;
    margin-top: 10%;
    box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.37);
`;

export const SecondaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0;
`;

export const LogoContainer =  styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;

export const RegisterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

export const Label = styled.label`
    margin-bottom: 5px;
`;

export const Input = styled.input`
    padding: .5rem;
`;


export const Button = styled.button`
    margin: 20px 0 0 0;
    padding: .5rem;
`;