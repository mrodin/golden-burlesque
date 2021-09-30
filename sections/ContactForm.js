import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

import {
  Image,
  TextInput,
  TextArea,
  VerticalSpace,
  SubmitButton,
} from "components";

const ContactForm = () => {
  const t = useTranslations("contact");

  return (
    <>
      <VerticalSpace size={VerticalSpace.SIZE.XL} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10">
        <div className="flex justify-center md:px-8">
          <div className="w-3/4">
            <form action="https://usebasin.com/f/155a6dd8ab30" method="POST">
              <TextInput name="name" label={t("name")} required />
              <VerticalSpace size={VerticalSpace.SIZE.SM} />
              <TextInput name="email" label={t("email")} required />
              <VerticalSpace size={VerticalSpace.SIZE.SM} />
              <TextInput name="company" label={t("company")} />
              <VerticalSpace size={VerticalSpace.SIZE.SM} />
              <TextArea name="message" label={t("message")} required />
              <VerticalSpace size={VerticalSpace.SIZE.LG} />
              <div className="flex justify-between items-center">
                <Link href="/">
                  <a>
                    <p className="font-serif tracking-wider text-center text-white uppercase">
                      {t("back")}
                    </p>
                  </a>
                </Link>
                <SubmitButton>{t("send")}</SubmitButton>
              </div>
            </form>
          </div>
        </div>
        <Image src="img/contact.jpg" alt="Golden Burlesque with champagne" />
      </div>
    </>
  );
};

export default ContactForm;
