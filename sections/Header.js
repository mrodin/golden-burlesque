import React from "react";

import { MarginLayout, VerticalSpace, Text } from "components";

const Header = () => (
  <>
    <VerticalSpace size={VerticalSpace.SIZE.SM} />
    <MarginLayout>
      <div className="grid grid-cols-3 items-center">
        <div className="justify-self-start">
          <Text size={Text.SIZE.SM} uppercase>
            Book a show
          </Text>
        </div>
        <Text uppercase>Golden Burlesque</Text>
      </div>
    </MarginLayout>
    <VerticalSpace size={VerticalSpace.SIZE.SM} />
  </>
);

export default Header;
