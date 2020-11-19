import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const BASE_URL = 'https://hiring.getbasis.co/candidate';

export default function EnterEmail() {
  const history = useHistory();
  const [email, setEmail] = useState('');

  function emailChange(e) {
    const { name, value } = e.target;
    setEmail(value);
  }

  function emailSubmit(e) {
    e.preventDefault();

    if (email) {

      fetch(BASE_URL + '/users/email', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          token: localStorage.getItem("basis_token"),
          phoneNumber: localStorage.getItem("basis_phone")
        })
      })
        .then((response) => response.json())
        .then((json) => {

          console.log(json);
          if(json.success) {
            // token has been sent successfully

            // console.log(json.results.token);
            // localStorage.setItem("basis_token", json.results.token);
            // localStorage.setItem("basis_phone", phone);
            localStorage.setItem("basis_email", email);
            history.push('/emailtoken');
          }

        })
        .catch((error) => console.error(error))

    }
  }

  return (
    <Container>
      <div>Enter email</div>
      <Form onSubmit={emailSubmit}>
        <FormGroup>
          <Label for="">Email</Label>
          <Input type="email" name="email" value={email} onChange={emailChange} required />
        </FormGroup>
        <Button color="primary">Next</Button>
      </Form>
    </Container>
  )
}
