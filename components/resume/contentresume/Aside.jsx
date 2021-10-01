const Aside = ({ header, title, items }) => {
    return (
        <div className="mb-3 pl-1">
            <h4 className="text-green-main text-xl font-bold border-l-4 border-green-main p-1 pl-2">{header}</h4>
            <div className="flex flex-col mt-2">
                {
                    title !== null ? <h3 className="text-black text-lg justify-center">{title}</h3> : null
                }
                <div className="flex flex-col mt-2">
                    {
                        items.map((item) => (
                            <p key={item} className="text-sm text-gray-g600 mt-2">
                                {item}
                            </p>
                        ))
                    }
                </div>

            </div>
        </div>

    );
}

export default Aside;