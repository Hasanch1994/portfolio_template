import ContentResume from "./ContentResume";
import TopResume from "./Topresume";

const Resume = () => {
    return (
        <main className="flex flex-col justify-center items-center">
            <TopResume />

            <ContentResume />
        </main>
    );
}

export default Resume;