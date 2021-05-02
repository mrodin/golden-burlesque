import React from "react";

import { Text, VerticalSpace } from "components";

const Header = () => (
  <>
    <VerticalSpace size={VerticalSpace.SIZE.SM} />
    <div className="flex justify-center px-8">
      <div className="w-5xl grid grid-cols-3 items-center">
        <div className="justify-self-start">
          <Text size={Text.SIZE.SM} uppercase>
            Book a show
          </Text>
        </div>
        <Text uppercase>Golden Burlesque</Text>
      </div>
    </div>
    <VerticalSpace size={VerticalSpace.SIZE.SM} />
  </>
);

export default Header;
