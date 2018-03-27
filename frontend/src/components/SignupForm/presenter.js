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
    <form onSubmit={props.handleSubmit} className={formStyles.form}>
      <input
        type="email"
        placeholder="Email"
        className={formStyles.textInput}
        value={props.emailValue}
        onChange={props.handleInputChange}
        name="email"
      />
      <input
        type="text"
        placeholder={context.t("Fullname")}
        className={formStyles.textInput}
        value={props.fullnameValue}
        onChange={props.handleInputChange}
        name="fullname"
      />
      <input
        type="text"
        placeholder={context.t("Username")}
        className={formStyles.textInput}
        value={props.usernameValue}
        onChange={props.handleInputChange}
        name="username"
      />
      <input
        type="password"
        placeholder={context.t("Password")}
        className={formStyles.textInput}
        value={props.passwordValue}
        onChange={props.handleInputChange}
        name="password"
      />
      <button
        type="submit"
        className={formStyles.button}
        onChange={props.handleInputChange}
      >
        {context.t("Sign in")}
      </button>
    </form>
    <p className={formStyles.terms}>
      By signing up, you agree to our <span>Terms &amp; Privacy Policy</span>.
    </p>
  </div>
);

SignupForm.propTypes = {
  emailValue: PropTypes.string.isRequired,
  fullnameValue: PropTypes.string.isRequired,
  usernameValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

SignupForm.contextTypes = {
  t: PropTypes.func.isRequired
};

export default SignupForm;
