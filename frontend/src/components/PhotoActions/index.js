import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as photoActions } from "redux/modules/photos";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleHeartClick: () => {
      if (ownProps.isLiked) {
        console.log('handleHeartClick 클릭( 좋아요 -> 안좋아요(unLikePhoto) )')
        dispatch(photoActions.unlikePhoto(ownProps.photoId));
        console.log('photoActions.unLikePhoto 실행완료 ')
      } else {
        console.log('handleHeartClick: ( 안좋아요 -> 좋아요(likePhoto))')
        dispatch(photoActions.likePhoto(ownProps.photoId));
        console.log('photoActions.likePhoto 실행완료 ')
      }
    }
  };
};

export default connect(null, mapDispatchToProps)(Container);
