import chatStyle from "../Chat/Chat.module.scss";
import ProfileIcon from "../ProfileIcon/ProfileIcon";
import { faker } from "@faker-js/faker";

const Chat = (props) => {
  const { message, time } = props;
  let accountName = faker.name.fullName();
  let newMessage = message;

  if (message.length > 26) {
    newMessage = message.substring(0, 26) + "...";
  }
  return (
    <div className={chatStyle.chat}>
      <ProfileIcon iconSize="large" storyBorder={false} />
      <div className={chatStyle.message}>
        <span className={chatStyle.accountName}>{accountName}</span>
        <div className={chatStyle.lastMessage}>
          {newMessage}
          <span> · {time}</span>
        </div>
      </div>
    </div>
  );
};

export default Chat;
