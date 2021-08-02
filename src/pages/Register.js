import React, {useState} from 'react';
import Button from '../components/Button';
import axiosInstance from '../utils/axiosInstance';
import { useHistory } from "react-router-dom";
const Register = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [fullName, setFullName] = useState("")
  const [avatar, setAvatar] = useState("")
  const history = useHistory();
  const button = {
    marginLeft: '200px',
    textAlign: 'center',
    borderRadius: "5px",
    fontSize: '18px',
    width: "60px",
    height: '25px'
  }
  const emailHandler = (e) => {
    setEmail(e.target.email)
  }
  const passwordHandler = (e) => {
    setPassword(e.target.password)
  }
  const fullNameHandler = (e) => {
    setFullName(e.target.fullName)
  }
  const uploadImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const avatarHandler = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };
  const registerHandler =() => {
    axiosInstance.post('/auth/signUp', {
        email, password, fullName, avatar
    }).then((res) => {
       if (res.data.code === 201) {
         history.push("/");
       }
    })
  }
  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    justifyContent: 'space-between',
    width: '510px',
    height: '500px',
    margin: 'auto',
    marginTop: '150px'

  }
  const itemStyle = {
    display: 'flex',
    flexDirection: 'row',

  }
  const userImgHandler = {
    width: '30px',
    height: '30px',
    border: '1px dashed black'
  }
  const leftStyle = {
    display: 'flex',
    marginBottom: '15px',
    marginRight: '10px',
    width: '100px',
    height: '25px',
    textAlign: 'right',
    fontSize: '18px',
    fontWeight: '700',
  }
  const rightStyle = {
    display: 'flex',
    marginBottom: '15px',
    width: '300px',
    height: '25px',
    textAlign: 'left',
    fontSize: '18px',
  }

  return(
    <div style={formStyle}>

      <h2 style={{marginBottom: '25px', textAlign: 'center'}}>Register</h2>
      <div style={itemStyle}>
        <span style={leftStyle}>Email</span>
        <input
          value={email}
          onChange={emailHandler}
          placeholder= 'Please input your email'
          style={rightStyle}
        />
      </div>
      <div style={itemStyle}>
        <span style={leftStyle}>Password</span>
        <input
          value={password}
          onChange={passwordHandler}
          placeholder= 'Please input your password'
          style={rightStyle}
        />
      </div>
      <div style={itemStyle}>
        <span style={leftStyle}>Full Name</span>
        <input
          value = {fullName}
          onChange={fullNameHandler}
          placeholder= 'Please input your full name'
          style={rightStyle}
        />
      </div>

      <div style={itemStyle}>
        <span style={leftStyle}>Avatar</span>
        <input
          type='file'
          accept='image/*'
          onChange={avatarHandler}
          ref={imageUploader}
          style={{display: 'none'}}

        />
        <div style={userImgHandler}
             onClick={() => imageUploader.current.click()}
        >
          <img ref={uploadImage}
               style={userImgHandler}
          />
        </div>
        Click to upload Image
      </div>

      <Button
        style={{...button, ...props.buttonStyle}}
        onClick={registerHandler}
      >{props.title ? props.title : 'Register'}</Button>

    </div>
  )
}
export default Register;
