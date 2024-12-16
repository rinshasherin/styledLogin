import React, { useState } from 'react'
import styled from 'styled-components';


const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
background-color: #f7f9fc;
font-family: Arial, sans-serif;
`;

const LoginBox = styled.div`
background: #ffffff;
padding: 30px;
border-radius: 8px;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
width: 100%;
max-width: 400px;
`;

const Title = styled.h1`
font-size: 24px;
margin-bottom: 20px;
color: #333;
text-align: center;
`;
const Input = styled.input`
width: 100%;
padding: 10px;
margin-bottom: 15px;
border: 1px solid #ccc;
border-radius: 5px;
font-size: 16px;
`;

const Button = styled.button`
width: 100%;
padding: 10px;
background-color: #007bff;
color: white;
border: none;
border-radius: 5px;
font-size: 16px;
cursor: pointer;
transition: background-color 0.3s;

&:hover {
  background-color: #0056b3;
}
`;

const ErrorMessage = styled.p`
color: red;
font-size: 14px;
margin-bottom: 15px;
text-align: left;
`;


function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError("Please fill in all fields.");
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError("Please enter a valid email address.");
        } else {
            setError("");
            alert("Login successful!");
        }
    };

    return (
        <>
            <Container>
                <LoginBox>
                    <Title>Login</Title>
                    <form onSubmit={handleSubmit}>
                        {error && <ErrorMessage>{error}</ErrorMessage>}
                        <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <Button type="submit">Login</Button>
                    </form>
                </LoginBox>
            </Container>
        </>
    )
}

export default Login