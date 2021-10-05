const Section = ({ header, title, date, desc }) => {
    return (
        <div className="mb-3 md:mt-3">
            <div className="flex flex-col p-1 ">
                {/* row 1 */}
                <div className="grid grid-cols-2 md:flex-col md:flex w-full ">
                    <h3 className="text-black dark:text-gray-g50 text-lg justify-center">{title}</h3>
                    <h6 className="text-gray-g500 dark:text-gray-g300 text-sm md:self-start place-self-end self-center">{date}</h6>
                </div>

                {/* row 2 */}
                <div className="flex flex-wrap mt-3">
                    <p className="flex flex-wrap items-start text-gray-g600 dark:text-gray-g300 text-sm">{desc}</p>
                </div>
            </div>
        </div>

    );
}

export default Section;