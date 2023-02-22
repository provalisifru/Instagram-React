import menuStyle from "../Menu/Menu.module.scss";
import Home from "../icons/home/HomeIcon";
import Inbox from "../icons/inbox/inboxIcon";
import NewPost from "../icons/newpost/newpostIcon";
import Notifications from "../icons/notifications/notificationsIcon";
import image from "../icons/images/profile.jpg";
import ProfileIcon from "../ProfileIcon/ProfileIcon";
import Link from "next/link";

const Menu = () => {
  return (
    <div className={menuStyle.menu}>
      <Link href="/">
        <div className={menuStyle.icon}>
          <Home />
        </div>
      </Link>
      <Link href="/inbox">
        <div className={menuStyle.icon}>
          <Inbox />
        </div>
      </Link>
      <div className={menuStyle.icon}>
        <NewPost />
      </div>
      <div className={menuStyle.icon}>
        <Notifications />
      </div>

      <ProfileIcon iconSize="small" image={image.src} storyBorder={true} />
    </div>
  );
};

export default Menu;
