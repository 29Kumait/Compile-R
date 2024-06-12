import StickyScroll from "../Components/Sticky/StickyScroll.jsx";
import { content } from "../Components/Content/content.jsx";
import { Link } from "react-router-dom";
import stylex from "@stylexjs/stylex";
import styles from "../styles.stylex.jsx";

const HomePage = () => {
  return (
    <>
      <StickyScroll content={content} />
      <Link to="/">
        <button type="submit" {...stylex.props(styles.button)}>
          Back
        </button>
      </Link>
    </>
  );
};

export default HomePage;
