import React from "react";
import PropTypes from "prop-types";
import Ionicon from "react-ionicons";
import styles from "./styles.scss";

const PhotoActions = (props, context) => (
  <div className={styles.actions}>
    <div className={styles.icons}>
      <button
        type="button"
        className={styles.icon}
        onClick={props.handleHeartClick}
      >
        {props.isLiked ? (
          <Ionicon icon="ios-heart" fontSize="26px" color="red" />
        ) : (
          <Ionicon icon="ios-heart-outline" fontSize="26px" color="black" />
        )}
      </button>
      <button type="button" className={styles.icon}>
        <label htmlFor="txt_comment">
          <Ionicon icon="ios-text-outline" fontSize="26px" color="black" />
        </label>
      </button>
    </div>
    <button type="button" className={styles.likes} onClick={props.openLikes}>
      {props.number}{" "}
      {props.number <= 1 ? context.t("like") : context.t("likes")}
    </button>
  </div>
);

PhotoActions.propTypes = {
  number: PropTypes.number.isRequired,
  isLiked: PropTypes.bool.isRequired,
  photoId: PropTypes.number.isRequired,
  handleHeartClick: PropTypes.func.isRequired,
  openLikes: PropTypes.func.isRequired
};

PhotoActions.contextTypes = {
  t: PropTypes.func.isRequired
};

export default PhotoActions;
