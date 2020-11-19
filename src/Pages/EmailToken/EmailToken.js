import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const BASE_URL = 'https://hiring.getbasis.co/candidate';

export default function EmailToken() {
  const history = useHistory();
  const [etoken, setEtoken] = useState('');

  function etokenChange(e) {
    const { name, value } = e.target;
    value.toString();
    setEtoken(value);
  }

  function etokenSubmit(e) {
    e.preventDefault();

    if (etoken && etoken === '112233') {

      fetch(BASE_URL + '/users/email/verify', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: localStorage.getItem("basis_email"),
          token: localStorage.getItem("basis_token"),
	        verificationToken: etoken   
        })
      })
        .then((response) => response.json())
        .then((json) => {


          console.log(json);
          if(json.success) {
            // localStorage.setItem("basis_user_profile", JSON.stringify(json.results.user));

            // let u = json.results.user;
            // console.log(u.firstName, u.lastName)
            // console.log('Phone ' + u.phoneNumber)
            // console.log('Rewards ' + u.rewards)

            history.push('/signupdetails');
          }

        })
        .catch((error) => console.error(error))

    } else {
      alert('Email token must be 112233');
    }
  }

  return (
    <Container>
      <div>Enter email token</div>
      <Form onSubmit={etokenSubmit}>
        <FormGroup>
          <Label for="">Email Token</Label>
          <Input type="number" name="etoken" value={etoken} onChange={etokenChange} required />
        </FormGroup>
        <Button color="primary">Next</Button>
      </Form>
    </Container>
  )
}
