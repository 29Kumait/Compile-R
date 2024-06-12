import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as stylex from "@stylexjs/stylex";
import styles from "./styles.stylex.jsx";
import Header from "./Components/Header/Header.jsx";
import Page from "./Pages/Page.jsx";
import Register from "./Components/Registers/Register.jsx";
import PageLogin from "./Pages/PageLogin.jsx";
import HomePage from "./Pages/HomePage.jsx";
import PageLoginAgain from "./Pages/PageLoginAgain.jsx";
import { AuthProvider } from "./Components/AuthProvider";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <div {...stylex.props(styles.base)}>
        {/*<h1 {...stylex.props(styleApp.test)}>Test</h1>*/}
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Page />} />
            <Route path="/page-login" element={<PageLogin />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home-page" element={<HomePage />} />
            <Route
              path="/page-login-again"
              element={
                <PrivateRoute>
                  <PageLoginAgain />
                </PrivateRoute>
              }
            />
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;

export const styleApp = stylex.create({
  test: {
    color: "#4b51b7",
    alignItems: "center",
    borderColor: "#4a86c7",
    borderRadius: 8,
    borderStyle: "solid",
    borderWidth: 2,
    display: "flex",
    flexBasis: 0,
    flexGrow: 1,
    height: "auto",
    justifyContent: "center",
    marginEnd: "auto",
    marginStart: "auto",
    paddingEnd: 8,
    paddingStart: 8,
    maxWidth: "53vw",
    backgroundColor: "rbg(106,115,123)",
    paddingTop: 79,
    textAlign: "center",
  },
});
