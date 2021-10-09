import Image from "next/image";
import styles from '../../styles/Home.module.css'

const TabContentItem = ({ imgUrl, title, desc, forCompany }) => {



    return (
        <div id="item" className="flex flex-col w-auto md:w-full md:h-auto md:flex-col h-auto overflow-hidden bg-gray-g50 m-2 rounded-md shadow-sm transform hover:-translate-y-1 hover:scale-20 duration-700">
            <Image src={imgUrl} layout='responsive' width="100%" height="100%" alt="image" className="w-full object-cover h-auto rounded-tl-md rounded-bl-md" />



            <div className="flex flex-col w-full m-2">
                <h2 className="text-gray-gblack text-base">{title}</h2>
                <p className="mt-2 text-gray-g400 text-sm">{desc}</p>
                <p className="mt-2 text-gray-g300">{forCompany}</p>
            </div>
        </div >
    );
}

export default TabContentItem;