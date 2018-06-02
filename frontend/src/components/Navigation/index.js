import { connect } from "react-redux";
import Container from "./container";
import { push } from "react-router-redux";
import { actionCreators as userActions } from "redux/modules/user";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    goToSearch: searchTerm => {
      dispatch(push(`/search/${searchTerm}`));
    },

    getPhotoLikesNotification: () => {
     // console.log('getPhotoLikes: userActions.getPhotoLikes dispatch 실행');

      console.log(ownProps.userId);

      dispatch(userActions.getPhotoLikesNotification(1)); // 내아이디를 어떻게 찾지 ??

     //console.log('getPhotoLikes: userActions.getPhotoLikes dispatch 실행완료');
    }

  };
};

export default connect(null, mapDispatchToProps)(Container);
