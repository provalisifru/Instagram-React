import cardsStyle from "../Cards/Cards.module.scss";
import Stories from "../Stories/Stories";
import Card from "../Card/Card";

const Cards = ({ posts, stories }) => {
  const commentsOne = [
    {
      user: "perasinperovic",
      text: "Woah dude, this is awesome! 🔥",
      id: 1,
    },
    {
      user: "horkol123",
      text: "Love it!",
      id: 2,
    },
    {
      user: "jamesbond",
      text: "Niceeeee!",
      id: 3,
    },
  ];

  const commentsTwo = [
    {
      user: "jamesbond",
      text: "Amazing content, keep it up!",
      id: 4,
    },
  ];

  const commentsThree = [
    {
      user: "perovicpera06",
      text: "Love this!",
      id: 5,
    },
  ];

  return (
    <div className={cardsStyle.cards}>
      <Stories stories={stories} />

      <Card
        accountName={posts[0].contentCreator}
        storyBorder={true}
        image={posts[0].contentPath}
        comments={commentsOne}
        likedByUsers="dadatlacak"
        likedByCount={89}
        hours={6}
      />
      <Card
        accountName={posts[1].contentCreator}
        storyBorder={true}
        image={posts[1].contentPath}
        comments={commentsTwo}
        likedByUsers="thereladamsavage"
        likedByCount={45}
        hours={13}
      />
      <Card
        accountName={posts[2].contentCreator}
        storyBorder={true}
        image={posts[2].contentPath}
        comments={commentsThree}
        likedByUsers="mapvault"
        likedByCount={30}
        hours={4}
      />
      <Card
        accountName={posts[3].contentCreator}
        storyBorder={true}
        image={posts[3].contentPath}
        comments={commentsOne}
        likedByUsers="dadatlacak"
        likedByCount={89}
        hours={6}
      />
      <Card
        accountName={posts[4].contentCreator}
        storyBorder={true}
        image={posts[4].contentPath}
        comments={commentsTwo}
        likedByUsers="thereladamsavage"
        likedByCount={45}
        hours={13}
      />
      <Card
        accountName={posts[5].contentCreator}
        storyBorder={true}
        image={posts[5].contentPath}
        comments={commentsThree}
        likedByUsers="mapvault"
        likedByCount={30}
        hours={4}
      />
    </div>
  );
};

export default Cards;
