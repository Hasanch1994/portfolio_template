import SkillContents from "./SkillContent";
import TopSkills from "./TopSkills";

const Skilss = () => {
    return (
        <section className="flex h-screen flex-col items-center dark:bg-gray-gblack">

            <TopSkills />

            <SkillContents />

        </section>
    );
}

export default Skilss;