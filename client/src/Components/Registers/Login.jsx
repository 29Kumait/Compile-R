import { useActionState } from "react";
import { useNavigate } from "react-router-dom";
import { FetchSignIn } from "./FetchSign.js";
import Submit from "../Submit/Submit.jsx";
import { useAuth } from "../AuthProvider";
export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  async function LoginRequest(prevState, formData) {
    const username = formData.get("username");
    const password = formData.get("password");
    try {
      const { token } = await FetchSignIn({ username, password });
      if (!token) {
        return "Login failed";
      }
      login(token);
      navigate("/page-login-again");
      return "Logged in successfully";
    } catch (error) {
      return error.toString();
    }
  }

  const [formState, actionForm] = useActionState(LoginRequest, null);

  return (
    <>
      <form action={actionForm}>
        <Submit />
      </form>

      {formState && <p>{formState}</p>}

    </>
  );
}
