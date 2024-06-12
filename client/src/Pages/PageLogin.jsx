import Log from "../Components/New/Log.jsx";
import branch from "../assets/branch.svg";
import { Link } from "react-router-dom";
import stylex from "@stylexjs/stylex";
import styles from "../styles.stylex.jsx";

const stylesPageLogin = stylex.create({
  p: {
    color: "#4b51b7",
    fontSize: 20,
  },
});

const PageLogin = () => {
  return (
    <div>
      <p {...stylex.props(stylesPageLogin.p)}> ⎆ Login : </p>
      <Log />
      <img src={branch} alt="branch" />
      <Link to="/register">
        <button type="submit" {...stylex.props(styles.button)}>
          Back to Register
        </button>
      </Link>
    </div>
  );
};
export default PageLogin;
