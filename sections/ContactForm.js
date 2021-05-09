import React from "react";

import {
  MarginLayout,
  Image,
  TextInput,
  TextArea,
  VerticalSpace,
} from "components";

const ContactForm = () => (
  <div className="flex flex-1 justify-center h-full">
    <MarginLayout>
      <VerticalSpace size={VerticalSpace.SIZE.XL} />
      <div className="grid grid-cols-2 gap-x-8 items-center">
        <img src="img/contact.jpg" alt="Golden Burlesque at the bar" />
        <div>
          <TextInput name="name" label="Name *" />
          <VerticalSpace size={VerticalSpace.SIZE.SM} />
          <TextInput name="email" label="Email Address *" />
          <VerticalSpace size={VerticalSpace.SIZE.SM} />
          <TextInput name="company" label="Company/Event type" />
          <VerticalSpace size={VerticalSpace.SIZE.SM} />
          <TextArea name="message" label="Message *" />
          <VerticalSpace size={VerticalSpace.SIZE.SM} />
        </div>
      </div>
    </MarginLayout>
  </div>
);

ContactForm.propTypes = {};

export default ContactForm;
