import { ContactsPage } from "features/Contacts";
import { ToastContainer } from "react-toastify";
import { ContactForm } from "./ContactForm/ContactForm";
import { Layout } from "./Layout/Layout";
import { Section } from "./Section/Section";

function App () {
  return (
    <Layout>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <ContactsPage />
      </Section>
      <ToastContainer autoClose={3000} />
    </Layout>
  );
};

export default App;