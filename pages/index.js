import Head from "next/head";
import ReactPlayer from "react-player";

import {
  Header,
  CoverImage,
  TextSectionOne,
  Gallery,
  TextSectionTwo,
  Clients,
} from "sections";

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
      <Gallery />
      <TextSectionTwo />
      <ReactPlayer
        url="gb_trailer.mp4"
        playing
        loop
        volume={0}
        width="100%"
        height="100%"
      />
      <Clients />
    </main>
  </div>
);

export default Home;
