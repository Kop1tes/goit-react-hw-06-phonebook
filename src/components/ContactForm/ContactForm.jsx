import { CreateContact } from "features/CreateContact";
import { Forma } from "./ContactForm.styled";

export const ContactForm = () => {
    const handleSubmit = e => {
        e.preventDefault();
    };

    return (
        <Forma onSubmit={handleSubmit}>
           <CreateContact />
        </Forma>
    );
};