import stylex from "@stylexjs/stylex";
import styles from "../styles.stylex.jsx";
import Register from "../Components/Registers/Register.jsx";
// import img from "../assets/img.svg";
import Login from "../Components/Registers/Login.jsx";
import { Link } from "react-router-dom";
import file from "../assets/file.png";
import { styleApp } from "../App.jsx";

const Page = () => {
  return (
    <>
      <div {...stylex.props(styleApp.test)}>
        <Login />
      </div>

      <div {...stylex.props(styleApp.test)}>
        <Register />
      </div>
      <Link to="/home-page" {...stylex.props(styleApp.test)}>
        <img src={file} alt="logo" {...stylex.props(styles.logo)} />
      </Link>
      {/*<img src={img} alt="img" {...stylex.props(styles.img)} />*/}
    </>
  );
};

export default Page;
