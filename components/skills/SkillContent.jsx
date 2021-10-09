import SkillContentItem from "./SkillContentItem";

const SkillContents = () => {
    const titles = [
        "Android Java (MVVM,DAGGER,MVP,RXJAVA)",
        "React / Nextjs",
        "Javascript (ECM5,ECM6)",
        "Typescript",
        "NodeJs",
        "HTML5",
        "CSS3",
        "Tailwindcss",
        "Bootstrap",
        "SQL DB (SQL server,Mysql,Sqlite,Room)",
        "NOSQL DB (Cassandra,Mongo)"
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
        "30%",
        "30%"
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
                <h4 className="text-green-main dark:text-white text-xl font-bold border-l-8 border-green-main p-2">Programs</h4>
                <SkillContentItem title={'Photoshop'} percent={'30%'} />


            </div>

        </article>
    );
}

export default SkillContents;