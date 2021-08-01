import React, {useState} from 'react';
import Button from '../components/Button';
const Register = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [tel, setTel] = useState("")
  const button = {
    borderRadius: "0 5px 5px 0",
    width: "40px",
    height: '20px'
  }
  return(
    <div>

      <div>
        <h2>Register</h2>
        <h5>Email</h5>
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
      </div>
      <div>
        <h5>Password</h5>
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
      </div>
      <div>
        <h5>First Name</h5>
        <input
          value = {firstName}
          onChange={(e) => {
              setFirstName(e.target.value)
          }}
        />
      </div>
      <div>
        <h5>Last Name</h5>
        <input
          value = {lastName}
          onChange={(e) => {
            setLastName(e.target.value)
          }}
        />
      </div>
      <div>
        <h5>Phone Number</h5>
        <input
          value = {tel}
          onChange={(e) => {
            setTel(e.target.value)
          }}
        />
      </div>

      <Button
        style={{...button, ...props.buttonStyle}}
        onClick={props.onClick}
      >{props.title ? props.title : 'Register'}</Button>

    </div>
  )
}
export default Register;
