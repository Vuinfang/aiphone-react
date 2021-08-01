import React, {useState} from 'react';
import Button from "../components/Button";
import pic2 from "../assets/image/pic2.png"
const Login = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const button = {
    borderRadius: "0 5px 5px 0",
    width: "40px",
    height: '20px'
  }
  const styleHandler = {
    display: 'flex',
    flexDirection: 'column-reverse',
    // justifyContent: 'space-around',
    width: '800px',
    height: '400px',
    marginTop: '150px',
    textAlign: 'centre',
    margin: 'auto',
    border: '1px solid grey',
    backgroundImage: `url(${pic2})`,
    backgroundRepeat: 'no-repeat',
    // backgroundAttachment: 'fixed',
    backgroundSize: '100%',
  }
  const rowHandler = {

    textAlign: 'left',

  }
  return(
    <div style={styleHandler}>
      <Button
        style={{...button, ...props.buttonStyle}}
        onClick={props.onClick}
      >{props.title ? props.title : 'Login'}</Button>
      <div style={rowHandler}>
        <div>
          <div>Password</div>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
        </div>
        <div>Email</div>
        <input
          value={email}
          onChange={(e) => {
              setEmail(e.target.value)
          }}
        />
      </div>
      <h2>Login</h2>

      {/*<button */}
      {/*  style={button}*/}
      {/*  onClick={buttonHandler}*/}
      {/*>Login</button>*/}

    </div>
  );
}
export default Login;
