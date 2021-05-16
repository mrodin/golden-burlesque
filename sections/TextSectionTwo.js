import React from "react";
import Link from "next/link";

import {
  MarginLayout,
  VerticalSpace,
  Divider,
  Heading,
  Text,
  Button,
} from "components";

const TextSectionOne = () => (
  <MarginLayout>
    <VerticalSpace size={VerticalSpace.SIZE.XL} />
    <Divider />
    <VerticalSpace size={VerticalSpace.SIZE.LG} />
    <Heading color={Heading.COLOR.GOLD} size={Heading.SIZE.LG}>
      A glamorous highlight for your event
    </Heading>
    <VerticalSpace size={VerticalSpace.SIZE.LG} />
    <Text color={Text.COLOR.GOLD} size={Text.SIZE.MD}>
      Book a single burlesque dancer, a full burlesque show with hosting or a
      custom-made themed event. We can’t wait to create an unforgettable evening
      for you and your guests!
    </Text>
    <Text color={Text.COLOR.GOLD} size={Text.SIZE.SM}>
      *Family-friendly options are available
    </Text>
    <VerticalSpace size={VerticalSpace.SIZE.SM} />
    <Text color={Text.COLOR.GOLD} size={Text.SIZE.MD}>
      Do you want to know more?
    </Text>
    <VerticalSpace size={VerticalSpace.SIZE.LG} />
    <div className="flex justify-center">
      <Link href="/contact" passHref>
        <Button>Get in touch</Button>
      </Link>
    </div>
    <VerticalSpace size={VerticalSpace.SIZE.LG} />
    <Divider />
    <VerticalSpace size={VerticalSpace.SIZE.XL} />
  </MarginLayout>
);

export default TextSectionOne;
