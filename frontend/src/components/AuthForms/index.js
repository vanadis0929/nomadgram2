import React from "react";
import Ionicon from "react-ionicons";
import PropTypes from "prop-types";
import styles from "./styles.scss";

export const LoginForm = (props, context) => (
  <div className={styles.formComponent}>
    <form className={styles.form}>
      <input
        type="text"
        placeholder={context.t("Username")}
        className={styles.textInput}
      />
      <input
        type="password"
        placeholder={context.t("Password")}
        className={styles.textInput}
      />
      <button type="submit" className={styles.button}>
        {context.t("Log In")}
      </button>
    </form>
    <span className={styles.divider}>or</span>
    <button type="button" className={styles.facebookLink}>
      <Ionicon icon="logo-facebook" fontSize="20px" color="#385185" />
      {context.t("Log in with Facebook")}
    </button>
    <button type="button" className={styles.forgotLink}>
      {context.t("Forgot password?")}
    </button>
  </div>
);

LoginForm.contextTypes = {
  t: PropTypes.func.isRequired
};

export const SignupForm = (props, context) => (
  <div className={styles.formComponent}>
    <h3 className={styles.signupHeader}>
      {context.t("Sign up to see photos and videos from your friends.")}
    </h3>
    <button type="button" className={styles.button}>
      <Ionicon icon="logo-facebook" fontSize="20px" color="#fff" /> Log in with
      Facebook
    </button>
    <span className={styles.divider}>or</span>
    <form className={styles.form}>
      <input type="email" placeholder="Email" className={styles.textInput} />
      <input
        type="text"
        placeholder={context.t("Fullname")}
        className={styles.textInput}
      />
      <input
        type="text"
        placeholder={context.t("Username")}
        className={styles.textInput}
      />
      <input
        type="password"
        placeholder={context.t("Password")}
        className={styles.textInput}
      />
      <button type="submit" className={styles.button}>
        {context.t("Sign in")}
      </button>
    </form>
    <p className={styles.terms}>
      By signing up, you agree to our <span>Terms &amp; Privacy Policy</span>.
    </p>
  </div>
);

SignupForm.contextTypes = {
  t: PropTypes.func.isRequired
};
