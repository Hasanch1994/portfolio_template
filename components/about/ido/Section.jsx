const home = ({ title, img, desc }) => {
    return (
        <div className="flex flex-col lg:w-full w-1/4 p-4 justify-center">
            {
                img
            }
            <h3 className="text-2xl font-bold dark:text-white text-gray-g700 mt-3 items-center">{title}</h3>

            <p className="items-center dark:text-gray-g200 text-gray-g600 text-base mt-4 text-left mr-1 ml-1" >
                {
                    desc
                }
            </p>
        </div>
    );
}

export default home;