import ContentResume from "./contentresume/ResumeContent";
import TopResume from "./Topresume";

const Resume = () => {
    return (
        <main className="flex flex-col justify-center items-center dark:bg-gray-gblack">
            <TopResume />

            <ContentResume />
        </main>
    );
}

export default Resume;