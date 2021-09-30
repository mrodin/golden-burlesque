import ReactPlayer from "react-player";

import { PageHead } from "components";
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
    <PageHead title="Golden Burlesque" />

    <main className="bg-wine box-border">
      <div className="flex flex-col h-screen">
        <Header />
        <CoverImage />
      </div>
      <TextSectionOne />
      <Gallery />
      <TextSectionTwo />
      <div className="relative pt-yt">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=-_85seQ6PkM"
          playing
          loop
          volume={0}
          width="100%"
          height="100%"
          style={{ position: "absolute", top: "0", left: "0" }}
        />
      </div>
      <Clients />
    </main>
  </div>
);

export function getStaticProps({ locale }) {
  return {
    props: {
      messages: require(`../messages/${locale}.json`),
    },
  };
}

export default Home;
