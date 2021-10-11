import Image from 'next/image'
import { useEffect } from 'react'
import useDarkMode from '../../../hook/UseDarkMode'
import Aside from './Aside'
import Section from './Section'
const ContentResume = () => {
    //sections data

    // const [colorTheme, setTheme] = useDarkMode();

    const titles = [
        "Senior Software Engineer",
        "Lead Software Developer",
        "Senior Software Developer",
        "Senior Developer",
        "Backend Developer",
    ]

    const dates = [
        "Google | 2019 - Present",
        "Apple | 2016 - 2019",
        "Dropbox | 2014 - 2016",
        "Uber | 2013 - 2014",
        "Amazon | 2014 - 2016"
    ]

    const desc = [
        "Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.",
        "Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel.",
        "Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel.",
        "Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel.",
        "Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel.",
    ]

    const asidetitle = ["Technical", "Professional"];

    const asidetechnichalitems = [
        "JavaScript/Angular/React/Vue",
        "Python/Ruby/PHP",
        "Node.js/ASP.NET",
        "PostgreSQL/MySQL",
        "Object-oriented design",
        "Design and implement database structures",
        "Lead and deliver complex software systems"
    ]

    const asideeducationitems = [
        "MSc in Computer Science",
        "University College London 2010 - 2011",
        "BSc Maths and Physics Imperial College London 2007 - 2010"
    ]

    const asidawarditems = [
        "Award Lorem Ipsum Microsoft lorem ipsum (2019)",
        "Award Donec Sodales Oracle Aenean (2017)"
    ]

    const asidlanguageitems = [
        "Perisan",
        "English"
    ]

    const asidinterestsitems = [
        "Programming",
        "Space and Astronomy",
        "Humanity"
    ]


    return (
        <article id="resumecontent" className="flex flex-col mt-8 mb-8 dark:bg-gray-g800 bg-gray-g50 w-5/6 md:w-full rounded-sm shadow-2xl justify-center items-center">

            {/* row 1 */}
            <div className="flex flex-row md:flex-col w-full p-4">

                <div className="flex flex-col w-3/4 md:w-full justify-center ml-4 md:items-center">
                    <h3 className="dark:text-white text-green-main text-5xl md:text-4xl font-bold">Hasan Cheraghi</h3>
                    <h6 className="dark:text-gray-g100 text-gray-g400 mt-1">Senior Android developer</h6>
                </div>

                <div className="flex flex-col w1/4 md:w-full justify-center md:mt-3  items-center md:border-none border-l-2 border-gray-g300">
                    <ul className="list-none flex flex-col">
                        <li className="listyle">
                            <svg className="svg-inline--fa fa-phone-square fa-w-14 fa-fw fa-lg me-2" width="20" height="20" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM94 416c-7.033 0-13.057-4.873-14.616-11.627l-14.998-65a15 15 0 0 1 8.707-17.16l69.998-29.999a15 15 0 0 1 17.518 4.289l30.997 37.885c48.944-22.963 88.297-62.858 110.781-110.78l-37.886-30.997a15.001 15.001 0 0 1-4.289-17.518l30-69.998a15 15 0 0 1 17.16-8.707l65 14.998A14.997 14.997 0 0 1 384 126c0 160.292-129.945 290-290 290z"></path></svg>
                            <a className="insidea2 ml-2 dark:text-gray-g300">09399592730</a>
                        </li>

                        <li className="listyle">
                            <svg className="svg-inline--fa fa-envelope-square fa-w-14 fa-fw fa-lg me-2" width="20" height="20" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM178.117 262.104C87.429 196.287 88.353 196.121 64 177.167V152c0-13.255 10.745-24 24-24h272c13.255 0 24 10.745 24 24v25.167c-24.371 18.969-23.434 19.124-114.117 84.938-10.5 7.655-31.392 26.12-45.883 25.894-14.503.218-35.367-18.227-45.883-25.895zM384 217.775V360c0 13.255-10.745 24-24 24H88c-13.255 0-24-10.745-24-24V217.775c13.958 10.794 33.329 25.236 95.303 70.214 14.162 10.341 37.975 32.145 64.694 32.01 26.887.134 51.037-22.041 64.72-32.025 61.958-44.965 81.325-59.406 95.283-70.199z"></path></svg>
                            <a href="mailto:hasan.cheraghi1994@gmail.com" target="_blank" rel="noopener noreferrer" className="insidea2 ml-2">hasan.cheraghi1994@gmail.com</a>
                        </li>

                        <li className="listyle">
                            <svg className="svg-inline--fa fa-globe fa-w-16 fa-fw fa-lg me-2" width="20" height="20" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="globe" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" data-fa-i2svg=""><path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path></svg>
                            <a href="http://hasancheraghi.ir" className="insidea2 ml-2">www.hasancheraghi.ir</a>
                        </li>

                        <li className="listyle">
                            <svg className="svg-inline--fa fa-map-marker-alt fa-w-12 fa-fw fa-lg me-2" width="20" height="20" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
                            <a rel="noopener noreferrer" href="https://www.google.com/maps/place/Shiraz,+Fars+Province,+Iran/@29.6658773,52.2528119,10z/data=!3m1!4b1!4m5!3m4!1s0x3fb20d0c8c85f2e3:0x6d0c5b8aef6b4cf6!8m2!3d29.5926119!4d52.5835646" target="_blank" className="insidea2 ml-2">Shiraz - Iran</a>
                        </li>
                    </ul>
                </div>

            </div>

            <hr className="block border-b-1 border-gray-g300 w-5/6 justify-center" />

            {/* row 2 */}
            <div className="flex md:flex-col md:items-center flex-row w-full md:p-1 p-4">

                <div className="w-1/5 justify-center flex h-auto items-center">
                    <Image src="/images/profileimage.jpg" alt="hasan cheraghi image" className="rounded-full mt-8 object-cover" width="120" height="120" />
                </div>
                <div className="w-4/5 flex">
                    <p className="dark:text-gray-g200 text-gray-g600 text-base mt-4 text-left">
                        Summarise your career here. You can make a PDF version of your resume using our free Sketch template here. Donec quam felis, ultricies nec, pellentesque eu. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
                    </p>
                </div>

            </div>

            <hr className="block border-b-1 border-gray-g300 w-5/6 justify-center" />

            {/* row 3 */}
            <div className="flex flex-row md:flex-col w-full p-4">
                {/* left side */}
                <section className="flex flex-col md:w-full w-3/4 pr-2">
                    <h4 className="text-green-main dark:text-white text-xl font-bold border-l-8 border-green-main p-2">Work Expriences</h4>
                    {
                        titles.map((data, index) => (
                            <Section key={data} title={data} date={dates[index]} desc={desc[index]} />
                        ))
                    }

                    <h4 className="text-green-main dark:text-white text-xl font-bold border-l-8 border-green-main p-2">Projects</h4>
                    {
                        titles.map((data, index) => (
                            <Section key={data} title={data} date={dates[index]} desc={desc[index]} />
                        ))
                    }
                </section>

                {/* right side */}
                <aside className="md:w-full w-1/4 p-1 border-l-2 border-gray-g300 dark:border-gray-g300">
                    <Aside title={asidetitle[0]} items={asidetechnichalitems} header={"Skills"} />

                    <Aside title={null} items={asideeducationitems} header={"Education"} />

                    <Aside title={null} items={asidawarditems} header={"Awards"} />

                    <Aside title={null} items={asidlanguageitems} header={"Languages"} />

                    <Aside title={null} items={asidinterestsitems} header={"Interests"} />


                </aside>
            </div>

            <hr className="block border-b-1 border-gray-g300 w-5/6 justify-center" />

            {/* row 4 */}

            <div className="w-full justify-center flex flex-row items-center mt-3 mb-3">

                <div className="flex items-center mt-4">
                    <a className="sociala" href="https://www.instagram.com/hasancheraghi_/" target="_blank" rel="noopener noreferrer">
                        {/* instagram icon */}
                        <svg height="15px" viewBox="0 0 512 512.00006" width="15px" xmlns="http://www.w3.org/2000/svg"><path d="m261.039062 512c-1.695312 0-3.390624 0-5.097656-.007812-40.132812.097656-77.214844-.921876-113.277344-3.117188-33.0625-2.011719-63.242187-13.4375-87.28125-33.039062-23.195312-18.914063-39.035156-44.488282-47.078124-76.003907-7-27.4375-7.371094-54.371093-7.726563-80.421875-.257813-18.691406-.5234375-40.839844-.578125-63.363281.0546875-22.617187.320312-44.765625.578125-63.457031.355469-26.046875.726563-52.980469 7.726563-80.421875 8.042968-31.515625 23.882812-57.089844 47.078124-76.003907 24.039063-19.601562 54.21875-31.027343 87.285157-33.039062 36.0625-2.191406 73.152343-3.2148438 113.371093-3.1171875 40.144532-.0859375 77.214844.9257815 113.277344 3.1171875 33.0625 2.011719 63.242188 13.4375 87.28125 33.039062 23.199219 18.914063 39.035156 44.488282 47.078125 76.003907 7 27.4375 7.371094 54.375 7.726563 80.421875.257812 18.691406.527344 40.839844.578125 63.363281v.09375c-.050781 22.523437-.320313 44.671875-.578125 63.363281-.355469 26.046875-.722656 52.980469-7.726563 80.421875-8.042969 31.515625-23.878906 57.089844-47.078125 76.003907-24.039062 19.601562-54.21875 31.027343-87.28125 33.039062-34.535156 2.101562-70.011718 3.125-108.277344 3.125zm-5.097656-40.007812c39.480469.09375 75.730469-.902344 110.945313-3.042969 25-1.519531 46.675781-9.632813 64.433593-24.113281 16.414063-13.386719 27.71875-31.855469 33.597657-54.894532 5.828125-22.839844 6.164062-47.363281 6.488281-71.078125.253906-18.566406.519531-40.558593.574219-62.863281-.054688-22.308594-.320313-44.296875-.574219-62.863281-.324219-23.714844-.660156-48.238281-6.488281-71.082031-5.878907-23.039063-17.183594-41.507813-33.597657-54.894532-17.757812-14.476562-39.433593-22.589844-64.433593-24.109375-35.214844-2.144531-71.464844-3.132812-110.851563-3.046875-39.472656-.09375-75.726562.902344-110.941406 3.046875-25 1.519531-46.675781 9.632813-64.433594 24.109375-16.414062 13.386719-27.71875 31.855469-33.597656 54.894532-5.828125 22.84375-6.164062 47.363281-6.488281 71.082031-.253907 18.582031-.519531 40.585937-.574219 62.910156.054688 22.226563.320312 44.234375.574219 62.816406.324219 23.714844.660156 48.238281 6.488281 71.078125 5.878906 23.039063 17.183594 41.507813 33.597656 54.894532 17.757813 14.476562 39.433594 22.589843 64.433594 24.109374 35.214844 2.144532 71.476562 3.144532 110.847656 3.046876zm-.953125-90.992188c-68.921875 0-125-56.074219-125-125s56.078125-125 125-125c68.925781 0 125 56.074219 125 125s-56.074219 125-125 125zm0-210c-46.867187 0-85 38.132812-85 85s38.132813 85 85 85c46.871094 0 85-38.132812 85-85s-38.128906-85-85-85zm139-80c-16.566406 0-30 13.429688-30 30s13.433594 30 30 30c16.570313 0 30-13.429688 30-30s-13.429687-30-30-30zm0 0" /></svg>
                    </a>

                    <a className="sociala" href="https://t.me/hasan_cheraghii/" target="_blank" rel="noopener noreferrer">
                        {/* telegram icon */}
                        <svg height="15px" viewBox="0 -39 512.00011 512" width="15px" xmlns="http://www.w3.org/2000/svg"><path d="m504.09375 11.859375c-6.253906-7.648437-15.621094-11.859375-26.378906-11.859375-5.847656 0-12.042969 1.230469-18.410156 3.664062l-433.398438 165.441407c-23 8.777343-26.097656 21.949219-25.8984375 29.019531s4.0390625 20.046875 27.4999995 27.511719c.140626.042969.28125.085937.421876.125l89.898437 25.726562 48.617187 139.023438c6.628907 18.953125 21.507813 30.726562 38.835938 30.726562 10.925781 0 21.671875-4.578125 31.078125-13.234375l55.605469-51.199218 80.652344 64.941406c.007812.007812.019531.011718.027343.019531l.765625.617187c.070313.054688.144532.113282.214844.167969 8.964844 6.953125 18.75 10.625 28.308594 10.628907h.003906c18.675781 0 33.546875-13.824219 37.878906-35.214844l71.011719-350.640625c2.851563-14.074219.460937-26.667969-6.734375-35.464844zm-356.191406 234.742187 173.441406-88.605468-107.996094 114.753906c-1.769531 1.878906-3.023437 4.179688-3.640625 6.683594l-20.824219 84.351562zm68.132812 139.332032c-.71875.660156-1.441406 1.25-2.164062 1.792968l19.320312-78.25 35.144532 28.300782zm265.390625-344.566406-71.011719 350.644531c-.683593 3.355469-2.867187 11.164062-8.480468 11.164062-2.773438 0-6.257813-1.511719-9.824219-4.257812l-91.390625-73.585938c-.011719-.011719-.027344-.023437-.042969-.03125l-54.378906-43.789062 156.175781-165.949219c5-5.3125 5.453125-13.449219 1.074219-19.285156-4.382813-5.835938-12.324219-7.671875-18.820313-4.351563l-256.867187 131.226563-91.121094-26.070313 433.265625-165.390625c3.660156-1.398437 6.214844-1.691406 7.710938-1.691406.917968 0 2.550781.109375 3.15625.855469.796875.972656 1.8125 4.289062.554687 10.511719zm0 0" /></svg>
                    </a>

                    <a className="sociala" href="mailto:hasan.cheraghi1994@gmail.com" rel="noopener noreferrer">
                        {/* email icon */}
                        <svg id="Capa_1" enableBackground="new 0 0 479.058 479.058" height="15px" viewBox="0 0 479.058 479.058" width="15px" xmlns="http://www.w3.org/2000/svg"><path d="m434.146 59.882h-389.234c-24.766 0-44.912 20.146-44.912 44.912v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159l-200.355 173.649-200.356-173.649c1.769-.736 3.704-1.159 5.738-1.159zm0 299.411h-389.234c-8.26 0-14.971-6.71-14.971-14.971v-251.648l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" /></svg>
                    </a>

                    <a className="sociala" href="https://www.linkedin.com/in/hasan-cheraghi-849013138/" rel="noopener noreferrer">
                        {/* linkedin icon */}
                        <svg width="15px" height="15px" className="svg-inline--fa fa-linkedin-in fa-w-14 fa-fw" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                    </a>

                </div>

            </div>

        </article>
    );
}

export default ContentResume;