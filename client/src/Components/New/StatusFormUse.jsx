import PropTypes from "prop-types";
import { useFormStatus } from "react-dom";
import stylex from "@stylexjs/stylex";
import styles from "../../styles.stylex.jsx";

function StatusFormUse({ formState }) {
  const { pending, data } = useFormStatus();

  const isDisabled = formState === "disabled" || pending;

  return (
    <>
      <input type="text" name="username" required disabled={isDisabled} />
      <input type="password" name="password" required disabled={isDisabled} />
      <button
        type="submit"
        {...stylex.props(styles.button)}
        disabled={isDisabled}
      >
        {pending ? "Submitting..." : "Submit"}
      </button>
      <p>{data ? `Logging ${data?.get("username")}` : ""}</p>
    </>
  );
}

StatusFormUse.propTypes = {
  formState: PropTypes.string.isRequired,
};

export default StatusFormUse;
