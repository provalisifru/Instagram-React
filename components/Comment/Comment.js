import commentStyle from "../Comment/Comment.module.scss";

const Comment = (props) => {
  const { accountName, comment } = props;
  return (
    <div className={commentStyle.commentContainer}>
      <div className={commentStyle.accountName}>{accountName}</div>
      <div className={commentStyle.comment}>{comment}</div>
    </div>
  );
};

export default Comment;
