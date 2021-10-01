const SkillContents = () => {
    return (
        <article className="flex flex-col mt-8 mb-8 bg-gray-g50 w-5/6 rounded-sm shadow-2xl justify-center items-center">

            {/* skilss */}
            <div className="flex flex-col p-2 w-full">
                <h4 className="text-green-main text-xl font-bold border-l-8 border-green-main p-2">Skills</h4>

                <div className="flex flex-row overflow-hidden rounded-md bg-green-main w-full mt-4 items-center">
                    <div role="progressbar" data-percent="100%" className="bg-green-mainlight w-1/2 p-1">
                        <span className="border-0 h-1 overflow-hidden text-white">Android</span>
                    </div>
                    <span className="pl-3 pb-30 text-white">50%</span>

                </div>

                <div className="flex flex-row overflow-hidden rounded-md bg-green-main w-full mt-4 items-center">
                    <div role="progressbar" data-percent="100%" className="bg-green-mainlight w-3/4 p-1">
                        <span className="border-0 h-1 overflow-hidden text-white">Javascript</span>
                    </div>
                    <span className="pl-3 pb-30 text-white">75%</span>
                </div>

                <div className="flex flex-row overflow-hidden rounded-md bg-green-main w-full mt-4 items-center">
                    <div role="progressbar" data-percent="100%" className="bg-green-mainlight w-2/3 p-1">
                        <span className="border-0 h-1 overflow-hidden text-white">React</span>
                    </div>
                    <span className="pl-3 pb-30 text-white">60%</span>
                </div>

                <div className="flex flex-row overflow-hidden rounded-md bg-green-main w-full mt-4 items-center">
                    <div role="progressbar" data-percent="100%" className="bg-green-mainlight w-1/2 p-1">
                        <span className="border-0 h-1 overflow-hidden text-white">Android</span>
                    </div>
                    <span className="pl-3 pb-30 text-white">50%</span>
                </div>
            </div>

            {/* programs */}

        </article>
    );
}

export default SkillContents;