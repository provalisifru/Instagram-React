import storStyle from "../Story/Story.module.scss";
import ProfileIcon from "../ProfileIcon/ProfileIcon";
import { useState, useRef } from "react";
import StoryPopup from "../StoryPopup/StoryPopup";
import { CSSTransition } from "react-transition-group";

const Story = ({ story, storyNum }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [number, setNumber] = useState(storyNum);
  const [inProp, setInProp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isStoryChanged, setIsStoryChanged] = useState(false);

  const timeoutRef = useRef(null);

  const counter = number;

  const nextStory = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => nextStory(), 7000);
    if (counter === story.length - 1) {
      onClose();
    } else {
      counter++;
      setNumber(counter);
    }
    setIsStoryChanged(true);
    setTimeout(() => setIsStoryChanged(false), 300);
    setIsLoading(false);
    setTimeout(() => setIsLoading(true), 10);
  };

  const previousStory = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => nextStory(), 7000);

    if (counter === 0) {
      onClose();
    } else {
      counter--;
      setNumber(counter);
    }
    setIsLoading(false);
    setTimeout(() => setIsLoading(true), 10);
  };

  const handleClick = () => {
    setInProp(true);
    setIsOpen(true);
    setIsLoading(true);
    setNumber(storyNum);

    timeoutRef.current = setTimeout(() => nextStory(), 7000);
  };

  const onClose = () => {
    setInProp(false);
    setTimeout(() => setIsOpen(false), 1000);
    setIsLoading(false);
    setIsStoryChanged(false);
    clearTimeout(timeoutRef.current);
  };

  let accountName = story[storyNum].contentCreator;

  if (accountName.length > 10) {
    accountName = accountName.substring(0, 10) + "...";
  }
  return (
    <>
      <div className={storStyle.story} onClick={handleClick}>
        <ProfileIcon iconSize="medium" storyBorder={true} />
        <span className={storStyle.accountName}>{accountName}</span>
      </div>
      <CSSTransition in={inProp} timeout={1000} classNames="my-node">
        <StoryPopup
          story={story[number]}
          nextStory={nextStory}
          previousStory={previousStory}
          isOpen={isOpen}
          close={onClose}
          isLoading={isLoading}
          isStoryChanged={isStoryChanged}
        />
      </CSSTransition>
    </>
  );
};

export default Story;
