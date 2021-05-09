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
