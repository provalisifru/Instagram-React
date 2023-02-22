import storiesStyle from "./StoryPopup.module.scss";
import logo from "../icons/images/whiteLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import ProfileIcon from "../ProfileIcon/ProfileIcon";
import { CSSTransition } from "react-transition-group";

const StoryPopup = (props) => {
  const isOpen = props.isOpen;
  let storySource = props.story.contentPath;

  return (
    <div
      className={
        isOpen
          ? `${storiesStyle.storyPopup}`
          : `${storiesStyle.hidden} ${storiesStyle.storyPopup}`
      }
    >
      <a href="/">
        <img className={storiesStyle.logo} src={logo.src} alt="logo"></img>
      </a>
      <div
        style={{ color: "white" }}
        className={storiesStyle.exitIcon}
        onClick={props.close}
      >
        <FontAwesomeIcon className={storiesStyle.icon} icon={faX} />
      </div>
      <button
        className={storiesStyle.previousStory}
        onClick={props.previousStory}
      >
        <FontAwesomeIcon className={storiesStyle.icon} icon={faAngleLeft} />
      </button>
      <div className={storiesStyle.story}>
        <ProfileIcon iconSize="small" storyBorder={false} />
        <span className={storiesStyle.accountName}>
          {props.story.contentCreator}
          <span className={storiesStyle.timestamp}> 6h</span>
        </span>
      </div>

      <div
        className={
          isOpen
            ? `${storiesStyle.storyContent}`
            : `${storiesStyle.hidden} ${storiesStyle.storyContent}`
        }
      >
        <div className={storiesStyle.bar}>
          <CSSTransition
            in={props.isLoading}
            timeout={7000}
            classNames="progress"
          >
            <div className={storiesStyle.progressBar}></div>
          </CSSTransition>
        </div>
        <CSSTransition
          in={props.isStoryChanged}
          timeout={300}
          classNames="storyChange"
        >
          <img
            className={storiesStyle.storyImage}
            src={storySource}
            alt="story image"
          />
        </CSSTransition>
      </div>

      <button className={storiesStyle.nextStory} onClick={props.nextStory}>
        <FontAwesomeIcon className={storiesStyle.icon} icon={faAngleRight} />
      </button>
    </div>
  );
};

export default StoryPopup;
