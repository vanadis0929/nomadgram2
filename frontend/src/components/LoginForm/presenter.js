import React from "react";
import Ionicon from "react-ionicons";
import PropTypes from "prop-types";
import formStyles from "shared/formStyles.scss";

export const LoginForm = (props, context) => (
  <div className={formStyles.formComponent}>
    <form className={formStyles.form}>
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
        {context.t("Log In")}
      </button>
    </form>
    <span className={formStyles.divider}>or</span>
    <button type="button" className={formStyles.facebookLink}>
      <Ionicon icon="logo-facebook" fontSize="20px" color="#385185" />
      {context.t("Log in with Facebook")}
    </button>
    <button type="button" className={formStyles.forgotLink}>
      {context.t("Forgot password?")}
    </button>
  </div>
);

LoginForm.contextTypes = {
  t: PropTypes.func.isRequired
};

export default LoginForm;
