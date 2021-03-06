import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

import {
  MarginLayout,
  VerticalSpace,
  Divider,
  Heading,
  Text,
  Logo,
  Button,
} from "components";

const Clients = () => {
  const t = useTranslations("clients");

  return (
    <>
      <MarginLayout>
        <VerticalSpace size={VerticalSpace.SIZE.XL} />
        <Divider />
        <VerticalSpace size={VerticalSpace.SIZE.LG} />
        <Heading color={Heading.COLOR.GOLD} size={Heading.SIZE.LG}>
          {t("title")}
        </Heading>
        <VerticalSpace size={VerticalSpace.SIZE.LG} />
        <Text color={Text.COLOR.GOLD} size={Text.SIZE.MD}>
          {t("p1")}
        </Text>
        <VerticalSpace size={VerticalSpace.SIZE.SM} />
      </MarginLayout>
      <div className="grid grid-cols-logo justify-center items-center gap-4">
        <Logo src="img/logos/netflix.png" alt="Netflix logo" />
        <Logo src="img/logos/babylon-berlin.png" alt="Babylon Berlin logo" />
        <Logo
          src="img/logos/semperoper-dresden.png"
          alt="Semperoper Dresden logo"
        />
        <Logo src="img/logos/ferrari.png" alt="Ferrari logo" />
        <Logo
          src="img/logos/buddha-bar-hotel-prague.png"
          alt="Buddha Bar Hotel Prague logo"
        />
        <Logo src="img/logos/prague-fw.png" alt="Prague Fashion Weekend logo" />
        <Logo
          src="img/logos/soho-house-istanbul.png"
          alt="Soho House Istanbul logo"
        />
      </div>
      <MarginLayout>
        <VerticalSpace size={VerticalSpace.SIZE.LG} />
        <Text color={Text.COLOR.GOLD} size={Text.SIZE.MD}>
          {t("p2")}
        </Text>
        <VerticalSpace size={VerticalSpace.SIZE.LG} />
        <div className="grid grid-cols-logo justify-center items-center gap-4">
          <Logo
            src="img/logos/mercy-brown-bar.jpg"
            alt="Mercy Brown bar logo"
          />
        </div>
        <VerticalSpace size={VerticalSpace.SIZE.LG} />
        <div className="flex justify-center">
          <Link href="/contact" passHref>
            <Button href="https://www.youtube.com/watch?v=-_85seQ6PkM" newTab>
              {t("button")}
            </Button>
          </Link>
        </div>
        <VerticalSpace size={VerticalSpace.SIZE.LG} />
        <Divider />
        <VerticalSpace size={VerticalSpace.SIZE.XL} />
      </MarginLayout>
    </>
  );
};

export default Clients;
