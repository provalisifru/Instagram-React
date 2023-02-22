import sugStyle from "../Suggestions/Suggestions.module.scss";
import Profile from "../Profile/Profile";

const Suggestions = () => {
  return (
    <div className={sugStyle.suggestions}>
      <div className={sugStyle.titleContainer}>
        <div className={sugStyle.title}>Suggestions For You</div>
        <a href="/">See All</a>
      </div>

      <Profile
        caption="Followed by mapvault + 3 more"
        urlText="Follow"
        iconSize="small"
        captionSize="small"
        storyBorder={false}
      />
      <Profile
        caption="Followed by andrewtate + 5 more"
        urlText="Follow"
        iconSize="small"
        captionSize="small"
        storyBorder={false}
      />
      <Profile
        caption="Followed by sniperino + 5 more"
        urlText="Follow"
        iconSize="small"
        captionSize="small"
        storyBorder={false}
      />
      <Profile
        caption="Followed by mapvault + 3 more"
        urlText="Follow"
        iconSize="small"
        captionSize="small"
        storyBorder={false}
      />
      <Profile
        caption="Followed by kadilq + 8 more"
        urlText="Follow"
        iconSize="small"
        captionSize="small"
        storyBorder={false}
      />
    </div>
  );
};

export default Suggestions;
