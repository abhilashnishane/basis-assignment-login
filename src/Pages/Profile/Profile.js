import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const BASE_URL = 'https://hiring.getbasis.co/candidate';

export default function Profile() {
  const history = useHistory();
  const [user, setUser] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');


  useEffect(() => {

    let phoneNum = localStorage.getItem("basis_phone");
    let u = localStorage.getItem("basis_user_profile");
    u = JSON.parse(u);
    setUser(u);
    setPhone(phoneNum);
    setFirstName(u.firstName);
    setLastName(u.lastName);

  }, []);


  function logoutSubmit() {

    var bearer = 'Bearer ' + user._id + ',' + user.token;

    fetch(BASE_URL + '/users/logout/' + user._id, {
      method: "DELETE",
      headers: {
        'Authorization': bearer,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((json) => {

        console.log(json);
        if(json.success) {
          localStorage.removeItem("basis_token");
          localStorage.removeItem("basis_phone");
          localStorage.removeItem("basis_user_profile");
          history.push('/enterphone');
        }

      })
      .catch((error) => console.error(error))

  }


  return (
    <Container>
      <div>Profile Page </div>
      <br />
      <div>welcome {firstName} {lastName}!</div>
      <br />
      <div>Your number is {phone}</div>
      <br />
      <Button color="primary" onClick={logoutSubmit}>Logout</Button>
    </Container>
  )
}
