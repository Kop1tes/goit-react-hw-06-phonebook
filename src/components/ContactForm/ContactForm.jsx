import { Forma } from "./ContactForm.styled";

export const ContactForm = () => {
    const handleSubmit = e => {
        e.preventDefault();
    };

    return (
        <Forma onSubmit={handleSubmit}>
           
        </Forma>
    );
};