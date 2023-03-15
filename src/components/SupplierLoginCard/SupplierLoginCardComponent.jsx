import React from "react";
import Loader from "../../elements/loader/Loader";
import { Link } from "react-router-dom";
import btnImg from "../../assets/loginHeader/nupcoimg.svg";
import { endpoints } from "../../services/endpoints,";
import { useNavigate } from "react-router-dom";

// all the css of this part is in loginCard.css file ;

const SupplierLoginCardComponent = (props) => {
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
          <h3 className="login-title">SUPPLIER LOGIN</h3>

          <input
            type="text"
            className="loginInput"
            value={data.email}
            placeholder="Enter Vendor Id"
            onChange={(e) =>
              setData((item) => ({ ...item, email: e.target.value }))
            }
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <input
            type="password"
            className="loginInput"
            placeholder="Enter Password"
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
          <button
            className="loginBtn supBtn"
            type="submit"
            onClick={submit}
          >
            {!loading && <span style={{ margin: "0px" }}>Login</span>}
            {loading && <Loader />}
          </button>

          <button className="loginBtn supBtn" >
            <img
              src={btnImg}
              alt=""
              style={{ width: "27px", margin: "0px 7px" }}
            />
            <span style={{ margin: "0px" }}>NUPCO Care</span>
          </button>
        </form>
      </div>
    </>
  );
};

export default SupplierLoginCardComponent;
