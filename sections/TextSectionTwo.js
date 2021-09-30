import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

import {
  MarginLayout,
  VerticalSpace,
  Divider,
  Heading,
  Text,
  Button,
} from "components";

const TextSectionOne = () => {
  const t = useTranslations("sectionTwo");

  return (
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
      <Text color={Text.COLOR.GOLD} size={Text.SIZE.SM}>
        {t("note")}
      </Text>
      <VerticalSpace size={VerticalSpace.SIZE.SM} />
      <Text color={Text.COLOR.GOLD} size={Text.SIZE.MD}>
        {t("p2")}
      </Text>
      <VerticalSpace size={VerticalSpace.SIZE.LG} />
      <div className="flex justify-center">
        <Link href="/contact" passHref>
          <Button>{t("button")}</Button>
        </Link>
      </div>
      <VerticalSpace size={VerticalSpace.SIZE.LG} />
      <Divider />
      <VerticalSpace size={VerticalSpace.SIZE.XL} />
    </MarginLayout>
  );
};

export default TextSectionOne;
