import React from "react";

import { MarginLayout, Heading, Button, VerticalSpace } from "components";

const CoverImage = () => (
  <div className="flex flex-1 items-center justify-center h-full bg-intro bg-cover bg-center bg-no-repeat bg-fixed">
    <MarginLayout>
      <Heading size={Heading.SIZE.XL}>
        A glamorous highlight for your event
      </Heading>
      <VerticalSpace size={VerticalSpace.SIZE.LG} />
      <div className="flex justify-center">
        <Button href="https://www.youtube.com/watch?v=-_85seQ6PkM" newTab>
          Watch our trailer
        </Button>
      </div>
    </MarginLayout>
  </div>
);

export default CoverImage;
