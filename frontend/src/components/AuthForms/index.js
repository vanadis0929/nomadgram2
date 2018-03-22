import React from "react";
import Ionicon from "react-ionicons";
import styles from "./styles.scss";

export const LoginForm = props => (
  <div className={styles.formComponent}>
    <form className={styles.form}>
      <input type="text" placeholder="Username" className={styles.textInput} />
      <input
        type="password"
        placeholder="Password"
        className={styles.textInput}
      />
      <button type="submit" className={styles.button}>
        Log In
      </button>
    </form>
    <span className={styles.divider}>or</span>
    <button type="button" className={styles.facebookLink}>
      <Ionicon icon="logo-facebook" fontSize="20px" color="#385185" /> Log in
      with Facebook
    </button>
    <button type="button" className={styles.forgotLink}>
      Forgot password?
    </button>
  </div>
);

export const SignupForm = props => (
  <div className={styles.formComponent}>
    <h3 className={styles.signupHeader}>
      Sign up to see photos and videos from your friends.
    </h3>
    <button type="button" className={styles.button}>
      <Ionicon icon="logo-facebook" fontSize="20px" color="#fff" /> Log in with
      Facebook
    </button>
    <span className={styles.divider}>or</span>
    <form className={styles.form}>
      <input type="email" placeholder="Email" className={styles.textInput} />
      <input type="text" placeholder="Full Name" className={styles.textInput} />
      <input
        type="username"
        placeholder="Username"
        className={styles.textInput}
      />
      <input
        type="password"
        placeholder="Password"
        className={styles.textInput}
      />
      <button type="submit" className={styles.button}>
        Sign up
      </button>
    </form>
    <p className={styles.terms}>
      By signing up, you agree to our <span>Terms &amp; Privacy Policy</span>.
    </p>
  </div>
);
