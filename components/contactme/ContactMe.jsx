import SkillContents from "../skills/SkillContent";
import ContactMeContent from "./ContactMeContent";
import TopContactMe from "./TopContactMe";

const ContactMe = () => {
    return (
        <section className="flex h-screen flex-col items-center dark:bg-gray-gblack">

            <TopContactMe />

            <ContactMeContent />

        </section>
    );
}

export default ContactMe;