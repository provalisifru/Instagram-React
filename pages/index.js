import { server } from "../config";
import Navigation from "../components/Navigation/Navigation";
import Cards from "../components/Cards/Cards";
import Sidebar from "../components/Sidebar/Sidebar";
import Meta from "../components/Meta/Meta";

const App = ({ posts, stories }) => {
  return (
    <div>
      <Meta />
      <Navigation />
      <main>
        <div className="container">
          <Cards posts={posts} stories={stories} />
          <Sidebar />
        </div>
      </main>
    </div>
  );
};

export default App;

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/posts`);
  const posts = await res.json();

  const resStories = await fetch(`${server}/api/stories`);
  const stories = await resStories.json();

  return {
    props: {
      posts,
      stories,
    },
  };
};
