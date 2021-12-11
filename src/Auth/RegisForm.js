import React, { useState } from "react";
import styled from "styled-components";
import validator from "validator";
import axios from "axios";
import swal from "sweetalert";
import ExperienceForm from "../Component/ExperienceForm";
const Div = styled.div`
  margin-left: 35%;
  margin-top: 50px;
  padding-left: 10px;
  width: 350px;
  height: 400px;
  background: #33b6ff;
  text-align: center;
  border: 15px solid #33b6ff;
  border-radius: 20px;
  font-family: sans-serif;
`;
const Header = styled.h1`
  font-size: 2.5rem;
  margin-top: 10px;
`;
const Section = styled.div`
  width: 300px;
  height: 45px;
  margin-left: 19px;
  margin-top: 10px;
`;
const Input = styled.input`
  width: 300px;
  height: 35px;
  margin-top: 7px;
  border: 2px solid #33b6ff;
  border-radius: 15px;
  font-weight: bold;
  font-size: 1.2rem;
  color: black;
`;
const Button = styled.button`
  font-size: 1.3em;
  margin: 1em;
  padding: 0.28em 1.3em;
  border: 1px solid #33b6ff;
  border-radius: 13px;
  font-weight: bold;
  &:hover {
    color: white;
    background: ${(props) => (props.primary ? "red" : "green")};
  }
`;
const Span = styled.span`
  display: grid;
  font-size: 1.1rem;
  color: #fa0000;
  margin-top: 4px;
`;
const RegisForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [number, setPassword] = useState("");
    const [formError, setFormError] = useState({});
    const [experType, setExperType] = useState('')
    const errors = {};
    const handleNameChange = (e) => {
        setUsername(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleExperTypeChange = (e) => {
        setExperType(e.target.value)
    }
    const handleCancelButton = () => {
        setUsername("");
        setEmail("");
        setPassword("");
    };
    const runValidation = () => {
        //username validation
        if (validator.isEmpty(username)) {
            errors.username = "username can't be empty";
        } else if (!username.match(/^[A-Za-z]+$/)) {
            errors.username = "username should have only character value";
        }
        // email validation
        if (validator.isEmpty(email)) {
            errors.email = "email can't be empty";
        } else if (!validator.isEmail(email)) {
            errors.email = "invalid email format";
        }
        // number validation
        if (validator.isEmpty(number)) {
            errors.number = "number can't be empty";
        } else if (!validator.isLength(number, 10)) {
            errors.number = "number must have atleast 10 characters";
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        runValidation();
        if (Object.keys(errors).length === 0) {
            setFormError({});
            let formdata = {
                username: username,
                email: email,
                number: number,
                experience: experType

            }
            console.log(formdata)
            //axios
            //  .post("http://dct-user-auth.herokuapp.com/users/register", {
            //    username: username,
            //    email: email,
            //    number: number,
            //  })
            //  .then((response) => {
            //    const result = response.data;
            //    if (result) {
            //      setUsername("");
            //      setEmail("");
            //      setPassword("");
            //      swal("Good job!", "Successfully Registered", "success", {
            //        buttons: false,
            //        timer: 2950,
            //      });
            //      setTimeout(() => {
            //        props.history.push(
            //          "/login",
            //          "Your account has been successfully created"
            //        );
            //      }, 3000);
            //    }
            //  })
            //  .catch((err) => {
            //    alert(err.message);
            //  });
        } else {
            setFormError(errors);
        }
    };
    return (
        <Div>
            <Header>Register With Us</Header>
            <form onSubmit={handleSubmit}>
                <Section>
                    <Input
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={handleNameChange}
                    />
                    {formError.username && <Span>{formError.username}</Span>}
                </Section>
                <br />
                <Section>
                    <Input
                        type="text"
                        placeholder="Enter email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    {formError.email && <Span>{formError.email}</Span>}
                </Section>
                <br />
                <Section>
                    <Input
                        type="number"
                        placeholder="Enter number"
                        value={number}
                        onChange={handlePasswordChange}
                    />
                    {formError.number && <Span>{formError.number}</Span>}
                </Section>
                <br />
                <Section>
                    <label>Experience</label>
                    <Input
                        type="radio"
                        name="experType"
                        value="experienced"
                        checked={experType == 'experienced'}
                        onChange={handleExperTypeChange}
                    />
                </Section>
                <Section>
                    <label>fresher</label>
                    <Input
                        type="radio"
                        name="experType"
                        value="fresher"
                        checked={experType == 'fresher'}
                        onChange={handleExperTypeChange}
                    />
                </Section>
                <br />

                <Button type="submit">Register</Button>
                <Button primary type="button" onClick={handleCancelButton}>
                    Cancel
                </Button>
            </form>
        </Div>
    );
};
export default RegisForm;