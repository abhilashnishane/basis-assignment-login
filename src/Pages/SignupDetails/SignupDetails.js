import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const BASE_URL = 'https://hiring.getbasis.co/candidate';

export default function SignupDetails() {
  const history = useHistory();
  const [inputs, setInputs] = useState({
    fname: '',
    lname: ''
  });
  const { fname, lname } = inputs;

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
  }

  function detailsSubmit(e) {
    e.preventDefault();

    if (fname && lname) {

      fetch(BASE_URL + '/users', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: fname, 
          lastName: lname, 
          email: localStorage.getItem("basis_email"), 
          phoneNumber: localStorage.getItem("basis_phone"),
          referredCodeKey: "U3DEAQ",
          agreeToPrivacyPolicy: true,
          token: localStorage.getItem("basis_token"),
          source: "WEB_APP"
        })
      })
        .then((response) => response.json())
        .then((json) => {

          console.log(json);
          if(json.success) {
            localStorage.setItem("basis_user_profile", JSON.stringify(json.results.user));
            history.push('/profile');
          }

        })
        .catch((error) => console.error(error))

    }
  }

  return (
    <Container>
      <div>Enter your details</div>
      <Form onSubmit={detailsSubmit}>
        <FormGroup>
          <Label for="">First Name</Label>
          <Input type="text" name="fname" value={fname} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label for="">Last Name</Label>
          <Input type="text" name="lname" value={lname} onChange={handleChange} required />
        </FormGroup>
        <Button color="primary">Next</Button>
      </Form>
    </Container>
  )
}
