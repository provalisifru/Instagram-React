import iconStyle from "../ProfileIcon/ProfileIcon.module.scss";

const ProfileIcon = (props) => {
  const { iconSize, image, storyBorder } = props;

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min - 1)) + min;
  }

  const randomId = getRandomInt(1, 70);

  const profileImage = image
    ? image
    : `https://i.pravatar.cc/150?img=${randomId}`;

  return (
    <div className={storyBorder ? iconStyle.storyBorder : ""}>
      <img
        className={`${iconStyle.profileIcon} ${iconStyle[iconSize]}`}
        src={profileImage}
        alt="profile"
      />
    </div>
  );
};

export default ProfileIcon;
