import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device=width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/instagram.png" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Instagram",
  keywords: "instagram, social media, chat, post your posts, stories",
  description:
    "Create an account or log in to Instagram - A simple, fun & creative way to capture, edit & share photos, videos & messages with friends & family.",
};

export default Meta;
