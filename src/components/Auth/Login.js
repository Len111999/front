import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from "../Footer/Footer";

function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(true);
    async function submit(e) {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3000/", {
                email, password
            })
            .then(res => {
                if (res.data === "exist") {
                    history("/home", { state: { id: email } })
                } else if (res.data === "notexist") {
                    alert("User have not sign up")
                }
            })
            .catch(e => {
                alert("wrong details")
                console.log(e);
            })
        } catch (e) {
            console.log(e);
        }
    }

    const handleRememberMeChange = (e) => {
        setRememberMe(e.target.checked);
    }

    return (
        <div className="login">
            <section className="vh-100">
            <div className="container py-5 h-100">
              <div className="row d-flex align-items-center justify-content-center h-100" style={{borderRadius: '25px', backgroundColor: '#f8f5e9'}}>
                <div className="col-md-8 col-lg-7 col-xl-6">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt=""/>
                </div>
                <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                  <form action="POST">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>
                    <div className="form-outline mb-4">
                      <input type="email" id="form1Example13" className="form-control form-control-lg" onChange={(e) => { setEmail(e.target.value) }} />
                      <label className="form-label" htmlFor="form1Example13">Email address</label>
                    </div>
                    <div className="form-outline mb-4">
                      <input type="password" id="form1Example23" className="form-control form-control-lg" onChange={(e) => { setPassword(e.target.value) }} />
                      <label className="form-label" htmlFor="form1Example23">Password</label>
                    </div>
                    <div className="d-flex justify-content-around align-items-center mb-4">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="form1Example3"checked={rememberMe} onChange={handleRememberMeChange} />
                        <label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
                      </div>
                      <a href="#!">Forgot password?</a>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg btn-block" onClick={submit}>Sign in</button>
                    <div className="text-center">
                      <p>Not a member? <Link to="/signup">Register</Link></p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <Footer/>
        </div>
    )
}

export default Login;
