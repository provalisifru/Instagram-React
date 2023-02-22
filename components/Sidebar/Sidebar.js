import sideStyles from "../Sidebar/Sidebar.module.scss";
import Sticky from "react-sticky-el";
import Profile from "../Profile/Profile";
import Suggestions from "../Suggestions/Suggestions";
import Footer from "../Footer/Footer";
import image from "../icons/images/profile.jpg";

const Sidebar = () => {
  return (
    <Sticky topOffset={-80}>
      <div className={sideStyles.sidebar}>
        <Profile
          username="nemanja_s001"
          caption="Nemanja Stojanov"
          urlText="Switch"
          iconSize="large"
          image={image.src}
        />
        <Suggestions />
        <Footer />
      </div>
    </Sticky>
  );
};

export default Sidebar;
