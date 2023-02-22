import cardStyle from "../Card/Card.module.scss";
import Profile from "../Profile/Profile";
import CardButton from "../icons/cardButton/cardButton";
import CardMenu from "../CardMenu/CardMenu";
import Comment from "../Comment/Comment";
import { useState } from "react";

const Card = (props) => {
  const {
    accountName,
    storyBorder,
    image,
    comments,
    likedByUsers,
    likedByCount,
    hours,
  } = props;
  const [isClicked, setIsClicked] = useState(false);

  const handleToggle = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className={cardStyle.card}>
      <header>
        <div className={cardStyle.profile}>
          <Profile
            username={accountName}
            iconSize="small"
            storyBorder={storyBorder}
          />
        </div>
        <div className={cardStyle.cardButton} onClick={handleToggle}>
          <CardButton />
        </div>
      </header>
      <img className={cardStyle.cardImage} src={image} alt="card content" />
      <CardMenu />
      <div className={cardStyle.likedBy}>
        <Profile iconSize="extrasmall" hideAccountName={true} />
        <span>
          Liked by <strong>{likedByUsers}</strong> and{" "}
          <strong>{likedByCount} others</strong>
        </span>
      </div>

      <div className={cardStyle.comments}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              accountName={comment.user}
              comment={comment.text}
            />
          );
        })}
      </div>

      <div className={cardStyle.timePosted}>{hours} HOURS AGO</div>

      <form className={cardStyle.addComment} method="post">
        <input
          type="text"
          placeholder="Add a comment..."
          className={cardStyle.commentText}
        />
        <button className={cardStyle.postText} type="submit">
          Post
        </button>
      </form>

      <div
        className={
          isClicked
            ? `${cardStyle.visible} ${cardStyle.popup}`
            : `${cardStyle.popup}`
        }
      >
        <div className={cardStyle.modalContent}>
          <div className={`${cardStyle.red} ${cardStyle.option}`}>Report</div>
          <div className={`${cardStyle.red} ${cardStyle.option}`}>Unfollow</div>
          <div className={cardStyle.option}>Add to favorites</div>
          <div className={cardStyle.option}>Go to post</div>
          <div className={cardStyle.option}>Share to...</div>
          <div className={cardStyle.option}>Copy link</div>
          <div className={cardStyle.option}>Embed</div>
          <div
            className={`${cardStyle.close} ${cardStyle.option}`}
            onClick={handleToggle}
          >
            Cancel
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
