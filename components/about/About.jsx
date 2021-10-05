import AboutHeader from "./AboutHeader";
import WhatIDo from "./ido/WhatIDo";

const About = () => {
    return (
        <div className="flex flex-col bg-white dark:bg-black">
            <AboutHeader />

            {/* what I do */}
            <WhatIDo />
        </div>

    );
}

export default About;