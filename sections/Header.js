import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { MarginLayout, VerticalSpace, Text, LocaleSelect } from "components";

const Header = () => {
  const t = useTranslations("header");

  return (
    <>
      <VerticalSpace size={VerticalSpace.SIZE.SM} />
      <MarginLayout>
        <div className="grid grid-cols-3 items-center">
          <div className="justify-self-start">
            <Link href="/contact">
              <a>
                <Text size={Text.SIZE.SM} uppercase>
                  {t("bookShow")}
                </Text>
              </a>
            </Link>
          </div>
          <Link href="/">
            <a>
              <Text uppercase>{t("goldenBurlesque")}</Text>
            </a>
          </Link>
          <div className="justify-self-end">
            <LocaleSelect />
          </div>
        </div>
      </MarginLayout>
      <VerticalSpace size={VerticalSpace.SIZE.SM} />
    </>
  );
};

export default Header;
