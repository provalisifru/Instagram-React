import inboxStyle from "../Inbox/Inbox.module.scss";
import Chats from "../Chats/Chats";
import Profile from "../Profile/Profile";
import NewChat from "../icons/newmsg/newmsgIcon";
import ArrowDown from "../icons/arrowDown/arrowDownIcon";
import Call from "../icons/call/callIcon";
import VideoCall from "../icons/videocall/videocallIcon";
import Info from "../icons/info/infoIcon";
import Notification from "../icons/notifications/notificationsIcon";
import Media from "../icons/addmedia/addmediaIcon";

const Inbox = () => {
  return (
    <div className={inboxStyle.inboxContainer}>
      <div className={inboxStyle.inbox}>
        <div className={inboxStyle.leftSide}>
          <div className={inboxStyle.inboxOptions}>
            <div className={inboxStyle.username}>
              nemanja_s001{" "}
              <div className={inboxStyle.arrowDown}>
                <ArrowDown />
              </div>
            </div>
            <div
              style={{
                cursor: "pointer",
              }}
            >
              <NewChat />
            </div>
          </div>
          <div className={inboxStyle.chats}>
            <Chats />
          </div>
        </div>
        <div className={inboxStyle.rightSide}>
          <div className={inboxStyle.infoBar}>
            <div className={inboxStyle.profile}>
              <Profile iconSize="small" />
            </div>
            <div className={inboxStyle.callOptions}>
              <div className={inboxStyle.call}>
                <Call />
              </div>
              <div className={inboxStyle.call}>
                <VideoCall />
              </div>
              <div className={inboxStyle.call}>
                <Info />
              </div>
            </div>
          </div>
          <div className={inboxStyle.messages}>
            <div>--Mesages--</div>

            <form className={inboxStyle.addMessage}>
              <input
                className={inboxStyle.writeMessage}
                type="text"
                placeholder="Message..."
              />

              <div>
                <button className={inboxStyle.icon}>
                  <Media />
                </button>
                <button className={inboxStyle.icon}>
                  <Notification />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
