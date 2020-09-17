import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "../styles/login.css";
import "../gobal-styles/bootstrap.css";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [isAuth, setIsAuth] = useState(null);

  if (isAuth === true) {
    return <Redirect to="/bloglist" />;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    var config = {
      method: "post",
      url: "https://cors-anywhere.herokuapp.com/https://kh-blog-app.herokuapp.com/login",
      mode: 'no-cors',
      headers: {
        "Content-Type": "application/json",
      },
      data: { email, password },
    };

    // axios(config)
    //   .then(function (response) {
    //     console.log(JSON.stringify(response.data));
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    fetch(config.url,{
      method:"post",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email,password})
    })
    if (email === "alma@mail.com" && password === "password") {
      setIsAuth(true);
    } else {
      setErrMsg("Wrong email and Password");
    }
  };

  return (
    <div className="login">
      <main>
        <section className="container form">
          <div style={{ textAlign: "center" }}></div>

          <p className="text-center text-white">Login</p>
          <div className="row">
            <div className="col">
              <form
                method="POST"
                className="mx-auto mt-5 form-card"
                name="signin"
                onSubmit={handleSubmit}
              >
                <h2
                  className="
                      font-weight-bold
                      text-center"
                >
                  Blog Login
                </h2>
                <div
                  style={{
                    color: "red",
                    fontSize: "20px",
                    textAlign: "center",
                    fontFamily: "Montserrat",
                  }}
                >
                  {errMsg}
                </div>
                <div className="form-group">
                  <label htmlFor="email"></label>
                  <input
                    className="
                        form-control
                        custom-control-f"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password"></label>
                  <input
                    className="
                        form-control
                        custom-control-f"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <label htmlFor="logged">
                  <input type="checkbox" id="logged" /> Stay Logged In
                </label>
                <div className="form-group">
                  <button
                    type="submit"
                    className="
                        btn 
                        btn-r
                        w-100"
                  >
                    LOG IN
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Login;
