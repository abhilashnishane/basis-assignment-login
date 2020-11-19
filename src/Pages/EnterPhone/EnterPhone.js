import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const BASE_URL = 'https://hiring.getbasis.co/candidate';

export default function EnterPhone() {
  const history = useHistory();
  const [phone, setPhone] = useState('');

  function phoneChange(e) {
    const { name, value } = e.target;
    setPhone(value);
  }

  function phoneSubmit(e) {
    e.preventDefault();

    if (phone) {

      fetch(BASE_URL + '/users/phone', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          phoneNumber: phone
        })
      })
        .then((response) => response.json())
        .then((json) => {

          console.log(json);
          if(json.success) {
            console.log(json.results.token);
            localStorage.setItem("basis_token", json.results.token);
            localStorage.setItem("basis_phone", phone);
            history.push('/enterotp');
          }

        })
        .catch((error) => console.error(error))

    }
  }

  return (
    <Container>
      <div>Enter phone number</div>
      <Form onSubmit={phoneSubmit}>
        <FormGroup>
          <Label for="">Phone</Label>
          <Input type="number" name="phone" value={phone} onChange={phoneChange} required />
        </FormGroup>
        <Button color="primary">Next</Button>
      </Form>
    </Container>
  )
}
