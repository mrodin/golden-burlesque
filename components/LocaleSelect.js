import React from "react";
import { useRouter } from "next/router";

const LocaleSelect = () => {
  const router = useRouter();
  const { locale } = router;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <select
      onChange={changeLanguage}
      defaultValue={locale}
      className="font-serif text-white text-sm bg-transparent tracking-wide w-min"
    >
      <option className="text-black" value="en">
        EN
      </option>
      <option className="text-black" value="de">
        DE
      </option>
      <option className="text-black" value="cs">
        CS
      </option>
    </select>
  );
};

export default LocaleSelect;
