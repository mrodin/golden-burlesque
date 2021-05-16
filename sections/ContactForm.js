import React from "react";
import Link from "next/link";

import {
  Image,
  TextInput,
  TextArea,
  VerticalSpace,
  Button,
  Text,
} from "components";

const ContactForm = () => (
  <>
    <VerticalSpace size={VerticalSpace.SIZE.XL} />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10">
      <div className="flex justify-center px-8">
        <div className="w-3/4">
          <TextInput name="name" label="Name *" />
          <VerticalSpace size={VerticalSpace.SIZE.SM} />
          <TextInput name="email" label="Email Address *" />
          <VerticalSpace size={VerticalSpace.SIZE.SM} />
          <TextInput name="company" label="Company/Event type" />
          <VerticalSpace size={VerticalSpace.SIZE.SM} />
          <TextArea name="message" label="Message *" />
          <VerticalSpace size={VerticalSpace.SIZE.LG} />
          <div className="flex justify-between items-center">
            <Link href="/">
              <a>
                <p className="font-serif tracking-wider text-center text-white uppercase">
                  Back
                </p>
              </a>
            </Link>
            <Button>Send</Button>
          </div>
        </div>
      </div>
      <Image src="img/contact.jpg" alt="Golden Burlesque with champagne" />
    </div>
  </>
);

ContactForm.propTypes = {};

export default ContactForm;
