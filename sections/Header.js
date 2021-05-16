import React from "react";
import Link from "next/link";

import { MarginLayout, VerticalSpace, Text } from "components";

const Header = () => (
  <>
    <VerticalSpace size={VerticalSpace.SIZE.SM} />
    <MarginLayout>
      <div className="grid grid-cols-3 items-center">
        <div className="justify-self-start">
          <Link href="/contact">
            <a>
              <Text size={Text.SIZE.SM} uppercase>
                Book a show
              </Text>
            </a>
          </Link>
        </div>
        <Link href="/">
          <a>
            <Text uppercase>Golden Burlesque</Text>
          </a>
        </Link>
      </div>
    </MarginLayout>
    <VerticalSpace size={VerticalSpace.SIZE.SM} />
  </>
);

export default Header;
