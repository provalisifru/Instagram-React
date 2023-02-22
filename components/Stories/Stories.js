import storyStyle from "../Stories/Stories.module.scss";
import Story from "../Story/Story";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Stories = ({ stories }) => {
  const ref = useRef(null);
  const [isLeftActive, setLeftActive] = useState(false);
  const [isRightActive, setRightActive] = useState(true);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
    const scrollerMaxWidth =
      ref.current.scrollWidth - 50 - ref.current.clientWidth;
    if (ref.current.scrollLeft >= 100) {
      setLeftActive(true);
    } else {
      setLeftActive(false);
    }
    if (ref.current.scrollLeft >= scrollerMaxWidth) {
      setRightActive(false);
      setLeftActive(true);
    } else {
      setRightActive(true);
    }
  };

  return (
    <div className={storyStyle.stories}>
      <button
        className={
          isLeftActive ? `${storyStyle.leftScroll}` : ` ${storyStyle.hidden}`
        }
        onClick={() => scroll(-160)}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      <div className={storyStyle.scroll} ref={ref}>
        <Story story={stories} storyNum={0} />
        <Story story={stories} storyNum={1} />
        <Story story={stories} storyNum={2} />
        <Story story={stories} storyNum={3} />
        <Story story={stories} storyNum={4} />
        <Story story={stories} storyNum={5} />
        <Story story={stories} storyNum={6} />
        <Story story={stories} storyNum={7} />
        <Story story={stories} storyNum={8} />
      </div>
      <button
        className={
          isRightActive ? `${storyStyle.rightScroll}` : `${storyStyle.hidden}`
        }
        onClick={() => scroll(160)}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );
};

export default Stories;
