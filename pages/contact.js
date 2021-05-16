import { PageHead } from "components";
import { Header, ContactForm } from "sections";

const Contact = () => (
  <div>
    <PageHead title="Contact - Golden Burlesque" />

    <main className="bg-wine box-border">
      <div className="flex flex-col min-h-screen">
        <Header />
        <ContactForm />
      </div>
    </main>
  </div>
);

export default Contact;
