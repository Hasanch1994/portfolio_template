import { useEffect } from "react";
import TabContentItem from "./TabContentItem";

const TapContent = ({ id }) => {

    useEffect(() => {

    }, [])


    const imageUrl = [
        "https://sketchfav.com/imgs/free-sketch-mobile-app-design/0x0_chat-app-concept-bhavnakashyap.png",
        "https://techcrunch.com/wp-content/uploads/2020/04/Shop-better-Allbirds.jpg",
        "https://techcrunch.com/wp-content/uploads/2020/04/Shop-better-Allbirds.jpg"
    ];
    const titles = ["Chat application", "Shopping app", "Node app"];
    const desc = [
        "Short description of the client and project requirements. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet",
        "Short description of the client and project requirements. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet.",
        "Short description of the client and project requirements. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet",

    ];
    const forCompany = ["Hello world", "google", "Irapin"];
    return (
        <div id={id} className="grid grid-cols-2 md:grid-cols-1 p-4 w-full">
            {
                titles.map((value, index) => (
                    < TabContentItem key={value} title={value} desc={desc[index]} forCompany={forCompany[index]} imgUrl={imageUrl[index]} />
                ))
            }
        </div>
    );
}

export default TapContent;