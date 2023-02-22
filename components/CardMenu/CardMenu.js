import cardmenuStyle from "../CardMenu/CardMenu.module.scss";
import Inbox from "../icons/inbox/inboxIcon";
import Comments from "../icons/comments/commentsIcon";
import Bookmark from "../icons/bookmark/bookmarkIcon";
import Notifications from "../icons/notifications/notificationsIcon";
import LikedBtn from "../icons/likedbtn/likedbtnIcon";
import { useState } from "react";

const CardMenu = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className={cardmenuStyle.cardMenu}>
      <div className={cardmenuStyle.interactions}>
        <button onClick={handleClick}>
          {isClicked === false && <Notifications />}

          {isClicked === true && <LikedBtn />}
        </button>
        <div className={cardmenuStyle.icon}>
          <Comments />
        </div>
        <div className={cardmenuStyle.icon}>
          <Inbox />
        </div>
      </div>
      <div className={cardmenuStyle.icon}>
        <Bookmark />
      </div>
    </div>
  );
};

export default CardMenu;
