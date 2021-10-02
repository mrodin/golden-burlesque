import React from "react";
import { useTranslations } from "next-intl";

import { Heading, Button, VerticalSpace } from "components";

const CoverImage = () => {
  const t = useTranslations("cover");

  return (
    <div className="flex flex-1 items-center justify-center h-full bg-introMobile lg:bg-intro bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col items-center px-8">
        <div className="max-w-5xl">
          <p className="font-trainOne text-center uppercase leading-tight text-white text-3xl md:text-6xl">
            {t("goldenBurlesque")}
          </p>
          <VerticalSpace size={VerticalSpace.SIZE.LG} />
          <div className="flex justify-center">
            <Button href="https://www.youtube.com/watch?v=-_85seQ6PkM" newTab>
              {t("button")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverImage;
