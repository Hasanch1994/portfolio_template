import SkillContentItem from "./SkillContentItem";

const SkillContents = () => {
    const titles = [
        "Android(mvvm,dagger,rxjava)",
        "React/Nextjs",
        "Javascript(ECM5,ECM6)",
        "Typescript",
        "NodeJs",
        "HTML5",
        "CSS3",
        "Tailwindcss",
        "Bootstrap",
        "Mysql,Room",
        "Mongo",
        "git(github,gitlab)"
    ]


    const percents = [
        "75%",
        "50%",
        "75%",
        "50%",
        "50%",
        "80%",
        "80%",
        "75%",
        "50%",
        "45%",
        "30%",
        "75%"
    ]

    return (
        <article className="flex flex-col mt-8 mb-8 bg-gray-g50 dark:bg-gray-g800 w-5/6 rounded-sm shadow-2xl justify-center items-center">

            {/* skilss */}
            <div className="flex flex-col p-2 w-full">
                <h4 className="text-green-main dark:text-white text-xl font-bold border-l-8 border-green-main p-2">Skills</h4>
                {
                    titles.map((data, i) => (
                        <SkillContentItem key={data} title={data} percent={percents[i]} />
                    ))
                }
            </div>

            {/* programs */}
            <div className="flex flex-col p-2 w-full mt-5">
                <h4 className="text-green-main dark:text-white text-xl font-bold border-l-8 border-green-main p-2">Etc</h4>
                <SkillContentItem title={'Forex Trader (Price Action)'} percent={'40%'} />
                <SkillContentItem title={'Crypto Trader (Price Action)'} percent={'40%'} />
            </div>

        </article>
    );
}

export default SkillContents;