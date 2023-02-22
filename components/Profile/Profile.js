import profileStyle from "../Profile/Profile.module.scss";
import ProfileIcon from "../ProfileIcon/ProfileIcon";
import { faker } from "@faker-js/faker";

const Profile = (props) => {
  const {
    username,
    caption,
    urlText,
    iconSize,
    captionSize,
    storyBorder,
    hideAccountName,
    image,
  } = props;

  let accountName = username ? username : faker.name.fullName();

  return (
    <div className={profileStyle.profile}>
      <ProfileIcon
        iconSize={iconSize}
        storyBorder={storyBorder}
        image={image}
      />
      {(accountName || caption) && !hideAccountName && (
        <div className={profileStyle.textContainer}>
          <span className={profileStyle.accountName}>{accountName}</span>
          <span className={profileStyle[captionSize]}>{caption}</span>
        </div>
      )}
      <a className={profileStyle.followInSuggestions} href="/">
        {urlText}
      </a>
    </div>
  );
};

export default Profile;
