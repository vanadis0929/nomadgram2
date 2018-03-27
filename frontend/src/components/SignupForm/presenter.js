import React from "react";
import Ionicon from "react-ionicons";
import PropTypes from "prop-types";
import formStyles from "shared/formStyles.scss";

export const SignupForm = (props, context) => (
  <div className={formStyles.formComponent}>
    <h3 className={formStyles.signupHeader}>
      {context.t("Sign up to see photos and videos from your friends.")}
    </h3>
    <button type="button" className={formStyles.button}>
      <Ionicon icon="logo-facebook" fontSize="20px" color="#fff" /> Log in with
      Facebook
    </button>
    <span className={formStyles.divider}>or</span>
    <form className={formStyles.form}>
      <input
        type="email"
        placeholder="Email"
        className={formStyles.textInput}
      />
      <input
        type="text"
        placeholder={context.t("Fullname")}
        className={formStyles.textInput}
      />
      <input
        type="text"
        placeholder={context.t("Username")}
        className={formStyles.textInput}
      />
      <input
        type="password"
        placeholder={context.t("Password")}
        className={formStyles.textInput}
      />
      <button type="submit" className={formStyles.button}>
        {context.t("Sign in")}
      </button>
    </form>
    <p className={formStyles.terms}>
      By signing up, you agree to our <span>Terms &amp; Privacy Policy</span>.
    </p>
  </div>
);

SignupForm.contextTypes = {
  t: PropTypes.func.isRequired
};

export default SignupForm;
