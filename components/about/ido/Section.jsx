const home = ({title, img, desc }) => {
    return (
        <div className="flex flex-col lg:w-full w-1/4 p-4 justify-center items-center bg-gray-g50 m-2 shadow-sm rounded-md hover:shadow-lg ease-in-out duration-500">
            {
                img
            }
            <h3 className="text-2xl font-bold dark:text-white text-gray-g700 mt-3 text-center  items-center">{title}</h3>

            <p className="items-center dark:text-gray-g200  text-gray-g600 text-base mt-4 text-left mr-1 ml-1" >
                {
                    desc
                }
            </p>
        </div>
    );
}
{/* <Image width={64} layout="fixed" height={64} src={'/images/' + img} /> */ }


export default home;