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
      Burlesque at its finest
    </Heading>
    <VerticalSpace size={VerticalSpace.SIZE.LG} />
    <Text color={Text.COLOR.GOLD} size={Text.SIZE.MD}>
      Golden Burlesque is a burlesque show that will leave your audience gasping
      for air. Let yourself be swept away by high-end burlesque performers,
      exquisite costumes, professional dancers and a charming songstress while
      sipping champagne.
    </Text>
    <VerticalSpace size={VerticalSpace.SIZE.SM} />
    <Text color={Text.COLOR.GOLD} size={Text.SIZE.MD}>
      This highly glamorous spectacle is led by internationally renowned
      burlesque artists Arden Delacour and Angelina Angelic, featuring only the
      best burlesque and variety performers Europe has to offer. This is the
      ultimate burlesque experience!
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
