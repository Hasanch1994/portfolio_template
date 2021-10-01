const Section = ({ header, title, date, desc }) => {
    return (
        <div className="mb-3">
            <div className="flex flex-col p-1 ">
                {/* row 1 */}
                <div className="grid grid-cols-2 w-full ">
                    <h3 className="text-black text-lg justify-center">{title}</h3>
                    <h6 className="text-gray-g500 text-sm place-self-end self-center">{date}</h6>
                </div>

                {/* row 2 */}
                <div className="flex flex-wrap mt-3">
                    <p className="flex flex-wrap items-start text-gray-g600 text-sm">{desc}</p>
                </div>
            </div>
        </div>

    );
}

export default Section;