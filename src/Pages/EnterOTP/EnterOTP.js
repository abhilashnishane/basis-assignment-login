import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const BASE_URL = 'https://hiring.getbasis.co/candidate';

export default function EnterOTP() {
  const history = useHistory();
  const [otp, setOtp] = useState('');

  function otpChange(e) {
    const { name, value } = e.target;
    value.toString();
    setOtp(value);
  }

  function otpSubmit(e) {
    e.preventDefault();

    if (otp && otp === '1111') {

      fetch(BASE_URL + '/users/phone/verify', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          phoneNumber: localStorage.getItem("basis_phone"), 
          verificationCode: otp,
          token: localStorage.getItem("basis_token")
        })
      })
        .then((response) => response.json())
        .then((json) => {


          console.log(json);
          if(json.success) {
            if(json.results.isLogin === false) {
              localStorage.setItem("basis_user_profile", JSON.stringify(json.results.user));
              history.push('/enteremail');
            } else if(json.results.isLogin) {
              localStorage.setItem("basis_user_profile", JSON.stringify(json.results.user));
              history.push('/profile');
            }
          }

        })
        .catch((error) => console.error(error))

    } else {
      alert('OTP must be 1111');
    }
  }

  return (
    <Container>
      <div>Enter OTP</div>
      <Form onSubmit={otpSubmit}>
        <FormGroup>
          <Label for="">OTP</Label>
          <Input type="number" name="otp" value={otp} onChange={otpChange} required />
        </FormGroup>
        <Button color="primary">Next</Button>
      </Form>
    </Container>
  )
}
