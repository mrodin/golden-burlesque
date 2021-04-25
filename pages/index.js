import Head from "next/head";

import { Header, CoverImage, TextSectionOne } from "sections";

const Home = () => (
  <div>
    <Head>
      <title>Golden Burlesque</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Train+One&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap"
        rel="stylesheet"
      />
    </Head>

    <main className="bg-wine box-border">
      <div className="flex flex-col h-screen">
        <Header />
        <CoverImage />
      </div>
      <TextSectionOne />
    </main>
  </div>
);

export default Home;
