import React from "react";

import { VerticalSpace, Divider, Heading, Text, Button } from "components";

const TextSectionOne = () => (
  <div className="px-80">
    <VerticalSpace size={VerticalSpace.SIZE.XL} />
    <Divider />
    <VerticalSpace size={VerticalSpace.SIZE.LG} />
    <Heading color={Heading.COLOR.GOLD} size={Heading.SIZE.LG}>
      Old Hollywood glamour with a modern twist
    </Heading>
    <VerticalSpace size={VerticalSpace.SIZE.LG} />
    <Text color={Text.COLOR.GOLD} size={Text.SIZE.MD}>
      International burlesque stars Arden Delacour and Angelina Angelic have
      joined forces to forge an experience beyond compare that will leave your
      audience gasping for air.
    </Text>
    <VerticalSpace size={VerticalSpace.SIZE.SM} />
    <Text color={Text.COLOR.GOLD} size={Text.SIZE.MD}>
      Angelina’s enchanting voice of honey and Arden’s moves as beautiful as
      liquid gold blend into one of the finest melanges in European Burlesque -
      ultra classic, uber glamorous, yet surprisingly refreshing. To top it all
      off only the best burlesque and variety performers Europe has to offer
      will join this dynamic duo to create the night of a lifetime.
    </Text>
    <VerticalSpace size={VerticalSpace.SIZE.SM} />
    <Text color={Text.COLOR.GOLD} size={Text.SIZE.MD}>
      You want to delight your audience?
    </Text>
    <VerticalSpace size={VerticalSpace.SIZE.LG} />
    <div className="flex justify-center">
      <Button href={undefined}>Get in touch</Button>
    </div>
    <VerticalSpace size={VerticalSpace.SIZE.LG} />
    <Divider />
    <VerticalSpace size={VerticalSpace.SIZE.XL} />
  </div>
);

TextSectionOne.propTypes = {};

export default TextSectionOne;
