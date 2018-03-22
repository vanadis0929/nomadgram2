import React from "react";
import styles from "./styles.scss";
import { LoginForm, SignupForm } from "components/AuthForms";

const Auth = (props, context) => (
  <main className={styles.auth}>
    <div className={styles.column}>
      <img src={require("images/phone.png")} alt="Checkout our app. Is cool" />
    </div>
    <div className={styles.column}>
      <div className={`${styles.whiteBox} ${styles.formBox}`}>
        <h2>
          <img src={require("images/logo.png")} alt="logo" />
        </h2>
        {props.action === "login" && <LoginForm />}
        {props.action === "signup" && <SignupForm />}
      </div>
      <div className={styles.whiteBox}>
        {props.action === "login" && (
          <p className={styles.text}>
            no account?{" "}
            <button
              type="button"
              className={styles.changeLink}
              onClick={props.changeAction}
            >
              Sign up
            </button>
          </p>
        )}
        {props.action === "signup" && (
          <p className={styles.text}>
            already have account??{" "}
            <button
              type="button"
              className={styles.changeLink}
              onClick={props.changeAction}
            >
              Log in
            </button>
          </p>
        )}
      </div>
      <div className={styles.appBox}>
        <span>download APP</span>
        <div className={styles.appstores}>
          <img
            src={require("images/ios.png")}
            alt="Download it on the Apple Appstore"
          />
          <img
            src={require("images/android.png")}
            alt="Download it on the Apple Appstore"
          />
        </div>
      </div>
    </div>
  </main>
);
export default Auth;
