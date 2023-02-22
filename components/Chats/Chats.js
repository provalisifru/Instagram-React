import Chat from "../Chat/Chat.js";
import inboxStyle from "../Chats/Chats.module.scss";

const Chats = () => {
  return (
    <div>
      <div className={inboxStyle.chats}>
        <Chat message="Sent you a message" time="2h" />
        <Chat message="Liked your message" time="2h" />
        <Chat message="Where we going tonight? 😁" time="5h" />
        <Chat
          message="How was your day brother? 😊 I wanted you to know that I bought a new car!"
          time="7h"
        />
        <Chat message="Liked your message" time="15h" />
        <Chat message="Sent you a message" time="16h" />
        <Chat message="Sent you a message" time="2d" />
        <Chat message="You sent a message" time="4d" />
        <Chat message="Sent you a message" time="2h" />
        <Chat message="Liked your message" time="2h" />
        <Chat message="Where we going tonight? 😁" time="5h" />
        <Chat
          message="How was your day brother? 😊 I wanted you to know that I bought a new car!"
          time="7h"
        />
        <Chat message="Liked your message" time="15h" />
        <Chat message="Sent you a message" time="16h" />
        <Chat message="Sent you a message" time="2d" />
        <Chat message="You sent a message" time="4d" />
      </div>
    </div>
  );
};

export default Chats;
