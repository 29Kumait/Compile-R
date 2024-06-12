import { useActionState } from "react";
import { useNavigate } from "react-router-dom";
import { FetchSignIn } from "../Registers/FetchSign.js";
import StatusFormUse from "./StatusFormUse.jsx";
import { useAuth } from "../AuthProvider";

export default function Log() {
  const { log } = useAuth();
  const navigate = useNavigate();
  async function LoginRequest(prevState, formData) {
    const username = formData.get("username");
    const password = formData.get("password");
    try {
      const { token } = await FetchSignIn({ username, password });
      if (!token) {
        return { success: false, message: "Login failed" };
      }
      log(token);
      navigate("/page-login-again");
      return { success: true, message: "Logged in successfully" };
    } catch (error) {
      return { success: false, message: error.toString() };
    }
  }

  const [formState, action] = useActionState(LoginRequest, {
    success: null,
    message: "",
  });

  return (
    <>
      <form action={action}>
        <StatusFormUse formState={formState} />
      </form>
    </>
  );
}
