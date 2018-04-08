import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import Loading from "components/Loading";
import Ionicon from "react-ionicons";

const UserList = props => (
  <section className={styles.container}>
    <div className={styles.overlay} />
    <div className={styles.box}>
      <header className={styles.header}>
        <h4 className={styles.title}>{props.title}</h4>
        <button type="button" onClick={props.closeLikes}>
          <Ionicon icon="md-close" fontSize="20px" color="black" />
        </button>
      </header>
      <div className={styles.content}>{props.loading ? <Loading /> : null}</div>
    </div>
  </section>
);

UserList.propTypes = {
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  userList: PropTypes.array,
  closeLikes: PropTypes.func.isRequired
};

export default UserList;
