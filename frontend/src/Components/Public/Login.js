import React, {useState,useEffect } from 'react'

import {Link,useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {isLogin,Logout,UserLogin} from '../../Features/UserClice'
import useWindowDimensions from "./useWindowDimensions";
import { BsCircle } from "react-icons/bs";
import Switch from "react-switch";
const Login = (props) => {
  const { ht, wd } = useWindowDimensions();
  const [email, setemial] = useState();
  const [password, setpassword] = useState();
  // const [role, setrole] = useState();
  const [passwordVisible, setpasswordVisible] = useState(false);
  const [circleCheck, setcircleCheck] = useState(false);
  // const [darkTheme, setdarkTheme] = useState(false);
  const [checked, setchecked] = useState(true);
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  // const {userRole } = useSelector((state) => state.authUser)// this reducer will be use for the error handling soon
  useEffect(()=>{
   console.log('This is the login component');
  },[]);
  const checkUser =()=>{
     let userCredentials= {
      email:email,
      password:password
     }
     console.log(userCredentials);
     dispatch(UserLogin(userCredentials));
    // dispatch(isLogin());
    
  }
  const SubmitHnadler = () => {
    // alert("email is : " + email + "passsword : " + password);
    checkUser();
    // console.log(JSON.stringify(email) + password);
  };

  const handleChange = () => {
    if (checked) {
      setchecked(false);
    } else setchecked(true);
    // alert(checked);
  };
  return (
    <div
    className="mainLogin"
    style={{ backgroundColor: checked ? "#202023 " : "white" }}
  >
    {/* header */}
    <div
      className="flex hw  "
      style={{
        justifyContent: "space-between",
      }}
    >
      <div
        className="flex curser"
        style={{
          marginLeft: "2%",
          color: checked ? "white" : "black",
          border: "1px solid #808080",
          borderRadius: "50%",
          height: "50px",
          width: "50px",
        }}
      >
        <i style={{ marginRight: "3%" }} class="	fas fa-arrow-left"></i>
      </div>
      <div style={{ marginRight: "2%" }}>
        <Switch
          uncheckedIcon={false}
          checkedIcon={false}
          onColor={"#999999"}
          onChange={() => {
            handleChange();
            // alert(checked);
          }}
          checked={checked}
        />
      </div>
    </div>
    {/* body */}
    <div className="body1 ">
      {/* left body */}
      <div
        className=" hw  "
        style={{
          display: "flex",
          justifyContent: "end",
        }}
      >
        <div
          className="leftBodyDiv"
          style={{
            backgroundColor: checked ? "#1b1b1e" : "#f9f9f9",
            borderColor: checked ? "#1b1b1e" : "#f9f9f9",
            marginRight: wd < 970 ? "20%" : "0%",
          }}
        >
          <div className=" hw ">
            <label
              style={{
                color: checked ? "white" : "#6e49e8",
                fontWeight: "bold",
                fontSize: "180%",
                marginLeft: "7%",
                marginTop: "5%",
              }}
            >
              Monosage{" "}
            </label>
          </div>
          <div className=" hw ">
            <div
              style={{
                height: "50%",
                width: "100%",
                // background: "red",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <label
                style={{
                  color: checked ? "white" : "black",
                  fontWeight: "bold",
                  fontSize: "150%",
                  marginLeft: "7.5%",
                }}
              >
                Login
              </label>
              <div
                className="curser"
                style={{
                  border: " 1px solid",
                  borderColor: checked ? "#202023" : "white",
                  height: "80%",
                  width: "40%",
                  borderRadius: "50px",
                  background: checked ? "#202023" : "white",
                  marginRight: "7%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  fontWeight: "bold",
                  boxShadow: checked ? "1px 2px #202023" : "1px 2px #bfbfbf",
                  color: checked ? "white" : "black",
                  fontSize: wd < 1120 ? "90%" : "100%",
                }}
              >
                <label>Demo Cridential</label>
                <i
                  style={{ marginRight: "3%" }}
                  class="	fas fa-angle-down"
                ></i>
              </div>
            </div>
            <div
              style={{
                height: "50%",
                width: "90%",
                marginLeft: "4.6%",
                // background: "red",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: " 1px solid #cccccc",
              }}
            >
              <label
                style={{
                  color: checked ? "white" : "black",
                  // fontWeight: "bold",
                  fontSize: "100%",
                  marginLeft: "3%",
                }}
              >
                Hello! Log in with your email.
              </label>
            </div>
          </div>
          {/* Email address wali div start */}
          <div className=" hw ">
            <div
              style={{
                height: "30%",
                width: "95%",
                color: "#96a2b7",
                fontWeight: "bold",
                fontSize: "90%",
                marginLeft: "7.5%",
                // background: "red",
                marginTop: "2%",
                display: "flex",
                justifyItems: "center",
                alignItems: "center",
              }}
            >
              <label>Email Address:</label>{" "}
            </div>

            <div
              style={{
                border: " 2px solid #ccccc",
                height: "35%",
                width: "84%",
                marginTop: "1%",
                background: "white",
                marginLeft: "7.5%",
                borderRadius: "10px",
              }}
            >
              <input
                type="text"
                placeholder="Enter Email"
                onChange={(e) => {
                  setemial(e.target.value);
                }}
                style={{
                  height: "100%",
                  width: "100%",
                  border: "none",
                  outline: "none",
                  borderRadius: "10px",
                  background: checked ? "black" : " white",
                  color: checked ? "white" : "black",
                }}
              ></input>
            </div>
          </div>
          {/* Password wali div start */}
          <div className=" hw ">
            <div
              style={{
                height: "30%",
                width: "95%",
                color: "#96a2b7",
                fontWeight: "bold",
                fontSize: "90%",
                marginLeft: "7.5%",
                // background: "red",
                marginTop: "2%",
                display: "flex",
                justifyItems: "center",
                alignItems: "center",
              }}
            >
              <label>Password:</label>{" "}
            </div>

            <div
              style={{
                border: " 2px solid #ccccc",
                height: "35%",
                width: "84%",
                marginTop: "1%",
                background: checked ? "black" : " white",
                marginLeft: "7.5%",
                borderRadius: "10px",
              }}
            >
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                // onInput={(password) => setpassword(password)}
                style={{
                  height: "90%",
                  width: "90%",
                  border: "none",
                  outline: "none",
                  borderRadius: "10px",
                  background: checked ? "black" : " white",
                  color: checked ? "white" : "black",
                }}
              ></input>
              <i
                style={{
                  color: checked ? "white" : "black",
                  cursor: "pointer",
                }}
                class={passwordVisible ? "fa fa-eye" : "fa fa-eye-slash"}
                onClick={() => {
                  if (passwordVisible) setpasswordVisible(false);
                  else setpasswordVisible(true);
                }}
              ></i>
            </div>
          </div>
          {/* Remember wali div start */}
          <div
            className="hw "
            style={{
              color: checked ? "white" : "black",
              // fontWeight: "bold",
              fontSize: "90%",
              display: "flex",
              alignItems: "center",
            }}
          >
            {circleCheck ? (
              <i
                className="curser"
                size={100}
                onClick={() => {
                  if (circleCheck) setcircleCheck(false);
                  else setcircleCheck(true);
                }}
                style={{ marginLeft: "7%", fontSize: "150%" }}
                class={
                  circleCheck
                    ? "fa-solid fa-circle-check"
                    : "fa-solid fa-circle"
                }
              ></i>
            ) : (
              <BsCircle
                className="curser"
                style={{ marginLeft: "7%", fontSize: "150%" }}
                onClick={() => {
                  if (circleCheck) setcircleCheck(false);
                  else setcircleCheck(true);
                }}
              ></BsCircle>
            )}

            <label className="curser" style={{ marginLeft: "2%" }}>
              Remember me
            </label>
          </div>
          {/* Forgot password wali div start */}
          <div
            className="hw  "
            style={{
              color: "#fa754e",
              // fontWeight: "bold",
              width: "92%",
              marginLeft: "4%",
              fontSize: "90%",
              display: "flex",
              alignItems: "center",
              borderBottom: " 1px solid #cccccc",
            }}
          >
            <label className="curser" style={{ marginLeft: "5%" }}>
              <Link
                to={{
                  pathname: "/Forget",
                  search: "?sort=name",
                  hash: "#the-hash",
                  state: { mode: checked },
                }}
              >
                Forgot Password?
              </Link>
            </label>
            <div
              onClick={() => SubmitHnadler()}
              className="flex curser"
              style={{
                border: " 1px solid #fa754e",
                borderRadius: "50px",
                height: "40%",
                width: "32%",
                marginLeft: "29%",
                background: "#fa754e",
                color: "white",
                fontSize: "120%",
                cursor:'pointer',
                boxShadow: checked ? "1px 2px #202023" : "1px 2px #bfbfbf",
              }}
            >
              <label style={{cursor:'pointer'}}>Log In</label>
            </div>
          </div>
          {/* Social media wali div start */}
          <div className=" hw ">
            <div
              style={{
                height: "30%",
                width: "93%",
                // background: "red",
                display: "flex",
                alignItems: "center",
                marginLeft: "7%",
                color: "#808080",
                // border: " 1px solid #fa754e",
              }}
            >
              <label>or enter with</label>
            </div>
            <div
              className="curser"
              style={{
                height: "45%",
                width: "93%",
                // background: "red",
                display: "flex",
                alignItems: "start",
                // marginLeft: "7%",
                // marginTop: "2.5%",
                // borderBottom: " 1px solid #fa754e",
                color: "#808080",
              }}
            >
              <i class="fab fa-google" style={{ marginLeft: "3%" }}></i>
              <i class="fab fa-linkedin-in"></i>
              <i class="fab fa-github"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-facebook-f"></i>
              {/* <a href="#" class="fa fa-twitter"></a> */}
            </div>
            <div
              className="curser"
              style={{
                height: "30%",
                width: "92%",
                // background: "red",
                display: "flex",
                alignItems: "center",
                marginLeft: "4%",
                marginTop: "2.5%",
                borderTop: "  1px solid #cccccc",
                color: checked ? "#808080" : "#808080",
              }}
            >
              <label
                style={{
                  marginLeft: "3%",
                  fontWeight: "bold",
                }}
              >
                Don't have an account ?
                <span
                  style={{
                    color: "#6e49e8",
                    cursor: "pointer",
                  }}
                >
                  <Link
                    to={{
                      pathname: "/Register",
                      search: "?sort=name",
                      hash: "#the-hash",
                      state: { mode: checked },
                    }}
                  >
                    Register
                  </Link>
                </span>
              </label>
            </div>
          </div>
          {/* Register wali Div */}
        </div>
      </div>
      {/* right body */}
      <div className=" hw  ">
        <div
          className="rightBodyDiv"
          style={{
            backgroundColor: checked ? "#2f2749" : "#e3dbfb",
            borderColor: checked ? "#2f2749" : "#e3dbfb",
            fontSize: wd < 1120 ? "90%" : "100%",
            marginTop: wd < 970 ? "20%" : "2%",
            marginLeft: wd < 970 ? "25%" : "2%",
          }}
        >
          <div className="hw flex ">
            <div
              style={{
                height: "100%",
                width: "80%",
                marginTop: "5%",
                display: "flex",
                alignItems: "center",
                color: checked ? "white" : "black",
                fontSize: "100%",
                fontWeight: "bold",
              }}
            >
              <label>Login Automatically into Demo account</label>
            </div>
          </div>
          <div className="hw flex  ">
            <div
              className="flex"
              style={{
                height: "70%",
                width: "80%",
                marginBottom: "10%",
                fontSize: "100%",
                color: "grey",
              }}
            >
              <label>Please select account type below</label>
            </div>
          </div>
          <div className="hw flex ">
            <div
              className="flex curser"
              style={{
                border: " 1px solid white",
                height: "80%",
                width: "80%",
                borderRadius: "50px",
                background: "white",
                color: "#6e49e8",
                fontWeight: "bold",
                boxShadow: checked ? "1px 5px #2f2749 " : "1px 5px #CCC5E1",
              }}
            >
              <i style={{ marginRight: "3%" }} class="	fa fa-star"></i>
              <label>Super Admin Demo</label>
            </div>
          </div>
          <div className="hw flex ">
            <div
              className="flex curser"
              style={{
                marginRight: "30%",
                marginTop: "5%",
                border: " 1px solid white",
                borderRadius: "50px",
                height: "80%",
                width: "50%",

                background: "white",
                color: "#6e49e8",
                fontWeight: "bold",
                boxShadow: checked ? "1px 5px #2f2749 " : "1px 5px #CCC5E1",
              }}
            >
              <label>Admin Demo</label>
            </div>
          </div>
          <div className="hw flex ">
            <div
              className="flex curser"
              style={{
                marginRight: "20%",
                marginTop: "8.5%",
                border: " 1px solid white",
                height: "80%",
                width: "60%",
                borderRadius: "50px",
                background: "white",
                color: "#6e49e8",
                fontWeight: "bold",
                boxShadow: checked ? "1px 5px #2f2749 " : "1px 5px #CCC5E1",
              }}
            >
              <label>Employee Demo</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login