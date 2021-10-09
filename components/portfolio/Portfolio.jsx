import ContentPortfolio from "./ContentPortfolio";
import TopPortfolio from "./TopPortfolio";

const Portfolio = () => {
    return (
        <section className="flex h-screen flex-col items-center dark:bg-gray-gblack">

            <TopPortfolio />

            <ContentPortfolio />
        </section>

    );
}

export default Portfolio;