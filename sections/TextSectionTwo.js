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
      Let us create an unforgettable experience!
    </Heading>
    <VerticalSpace size={VerticalSpace.SIZE.LG} />
    <Text color={Text.COLOR.GOLD} size={Text.SIZE.MD}>
      Golden Burlesque’s repertoire goes far beyond high-end burlesque.
    </Text>
    <VerticalSpace size={VerticalSpace.SIZE.SM} />
    <Text color={Text.COLOR.GOLD} size={Text.SIZE.MD}>
      From single performances to multi-hour shows, from family friendly to
      themed shows. How about a Great Gatsby themed event for 2020? Vintage
      dancers, Fire eaters, live musicians, contortion artists, sword swallowers
      and of course the very best burlesque performers - Golden Burlesque’s
      Europe-wide roster of artists delivers!
    </Text>
    <VerticalSpace size={VerticalSpace.SIZE.SM} />
    <Text color={Text.COLOR.GOLD} size={Text.SIZE.MD}>
      You always wanted to witness the glory of your own custom burlesque show?
    </Text>
    <VerticalSpace size={VerticalSpace.SIZE.LG} />
    <div className="flex justify-center">
      <Link href="/contact" passHref>
        <Button href={undefined}>Place a booking request</Button>
      </Link>
    </div>
    <VerticalSpace size={VerticalSpace.SIZE.LG} />
    <Divider />
    <VerticalSpace size={VerticalSpace.SIZE.XL} />
  </MarginLayout>
);

export default TextSectionOne;
