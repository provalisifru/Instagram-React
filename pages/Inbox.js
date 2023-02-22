import Navigation from "../components/Navigation/Navigation";
import Inbox from "../components/Inbox/Inbox";
import Meta from "../components/Meta/Meta";

const inbox = () => {
  return (
    <div>
      <Meta title="Instagram ⦁ Chats" />
      <Navigation />
      <main>
        <div className="container">
          <Inbox />
        </div>
      </main>
    </div>
  );
};

export default inbox;
