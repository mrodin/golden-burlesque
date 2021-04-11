import React from "react";

import { Text, VerticalSpace } from "components";

const Header = () => (
  <>
    <VerticalSpace size={VerticalSpace.SIZE.SM} />
    <div className="inline-grid grid-cols-6 gap-4 items-center">
      <div className="col-start-1 col-end-3 text-center">
        <Text size={Text.SIZE.SM} uppercase>
          Book a show
        </Text>
      </div>
      <div className="col-start-3 col-end-5 text-center">
        <Text uppercase>Golden Burlesque</Text>
      </div>
    </div>
    <VerticalSpace size={VerticalSpace.SIZE.SM} />
  </>
);

export default Header;
