import React from "react";

import { MarginLayout, Heading, Button, VerticalSpace } from "components";

const CoverImage = () => (
  <div className="flex flex-1 items-center justify-center h-full bg-intro bg-cover bg-center bg-no-repeat bg-fixed">
    <div className="flex flex-col items-center px-8">
      <div className="max-w-5xl">
        <Heading size={Heading.SIZE.XL}>Golden Burlesque</Heading>
        <VerticalSpace size={VerticalSpace.SIZE.LG} />
        <div className="flex justify-center">
          <Button href="https://www.youtube.com/watch?v=-_85seQ6PkM" newTab>
            Take a peek
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default CoverImage;
