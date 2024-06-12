import { useFormStatus  } from "react-dom";

import stylex from "@stylexjs/stylex";
import styles from "../../styles.stylex.jsx";


export default function Submit() {
  const { pending, data } = useFormStatus();
  return (
    <>
      <input
        type="text"
        name="username"
        required
        autoComplete="current-username"
        placeholder="Username"
        disabled={pending}
        {...stylex.props(stylesLogin.form, stylesLogin.input)}
      />
      <input
        type="password"
        name="password"
        required
        autoComplete="current-password"
        disabled={pending}
        placeholder="password"
      />
      <button  type="submit" {...stylex.props(styles.button)} disabled={pending}>
        {pending ? "Submitting..." : "in"}
      </button>
      <p>{data ? `Logging ${data?.get("username")}...` : ""}</p>
    </>
  );
}

const stylesLogin = stylex.create({
  form: {
    maxWidth: 290,
    marginStart: "auto",
    marginEnd: "auto",
  },
  input: {
    backgroundColor: "transparent",
    borderStyle: "none",
    boxSizing: "border-box",
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 1.25,
    padding: 29,
    width: "50%",
    textAlign: "center",
  },
});



