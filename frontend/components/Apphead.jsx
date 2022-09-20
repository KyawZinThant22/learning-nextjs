import Head from "next/head";

const Apphead = ({
  title,
  author = "KyawZinThant",
  description = "A Learning project with next js and node js",
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="author" content={author} />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
    </div>
  );
};

export default Apphead;
