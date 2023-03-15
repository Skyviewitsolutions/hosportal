// This is the login card component ;
import React from "react";
import "./loginCard.css";
import { Link } from "react-router-dom";
import Loader from "../../elements/loader/Loader";
import { useNavigate } from "react-router-dom";

const LoginCardComponent = (props) => {
  const { data, setData, submit, errors, loading } = props;
  
  const navigate = useNavigate();

  return (
    <>
      <div className="cards">
        <div className="card_cont">
          <div className="circle1"></div>
          <div className="circle2"></div>
        </div>
        <form className="card_cont2" onSubmit={submit}>
          <h3 className="login-title">HOS ADMIN</h3>

          <input
            type="text"
            className="loginInput"
            placeholder="Enter e-mail"
            value={data.email}
            onChange={(e) =>
              setData((item) => ({ ...item, email: e.target.value }))
            }
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <input
            type="password"
            className="loginInput"
            placeholder="Enter password"
            value={data.password}
            onChange={(e) =>
              setData((item) => ({ ...item, password: e.target.value }))
            }
          />
          {errors.password && <p className="error">{errors.password}</p>}

          {/* <div className="remem">
            <input type="checkbox" id="remember" />

            <label htmlFor="remember">Remember Me</label>
          </div> */}
          <button className="loginBtn" type="submit">
            {!loading && <span style={{ margin: "0px" }}>Login</span>}
            {loading && <Loader />}
          </button>
          <button className="loginBtn" onClick={() => navigate("/supplier/login")}>
           <span style={{ margin: "0px" }} >Supplier Login</span>
          </button>
        </form>
      </div>
    </>
  );
};

// exporting the component ;
export default LoginCardComponent;
