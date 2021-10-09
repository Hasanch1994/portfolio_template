import { useEffect } from "react";
import TapContent from "./TapContent";

const ContentPortfolio = () => {

    useEffect(() => {
        manageTabs();
    }, [])

    const manageTabs = () => {
        let tabsContainer = document.querySelector("#tabs");

        let tabTogglers = tabsContainer.querySelectorAll("a");

        tabTogglers.forEach(function (toggler) {
            toggler.addEventListener("click", function (e) {
                e.preventDefault();

                let tabName = this.getAttribute("href");

                let tabContents = document.querySelector("#tab-contents");

                for (let i = 0; i < tabContents.children.length; i++) {

                    tabTogglers[i].parentElement.classList.replace("border-green-main", "border-gray-g100");

                    tabContents.children[i].classList.remove("hidden");
                    if ("#" + tabContents.children[i].id === tabName) {
                        continue;
                    }
                    tabContents.children[i].classList.add("hidden");

                }
                e.target.parentElement.classList.add("border-green-main", "border-b-4", "-mb-px", "opacity-100");

                e.target.parentElement.classList.forEach((value) => {
                    if (value === 'border-gray-g100') {
                        e.target.parentElement.classList.add("border-green-main", "border-b-4", "-mb-px", "opacity-100");
                    } else if (value === 'border-green-main') {
                        e.target.parentElement.classList.replace("border-gray-g100", "border-green-main");
                    }
                })



            });
        });

        document.getElementById("default-tab").click();
    }

    return (
        <div className="w-5/6 md:w-full p3 mx-auto mt-4 justify-center rounded">
            <ul id="tabs" className="inline-flex w-full px-1 pt-2 justify-center ">
                <li className="px-4 py-2 -mb-px font-semibold text-gray-g800 border-b-4 border-green-main rounded-t opacity-100"><a id="default-tab" href="#first">All</a></li>
                <li className="px-4 py-2 font-semibold text-gray-g800 rounded-t opacity-50"><a href="#second">Android</a></li>
                <li className="px-4 py-2 font-semibold text-gray-g800 rounded-t opacity-50"><a href="#third">Website</a></li>
                <li className="px-4 py-2 font-semibold text-gray-g800 rounded-t opacity-50"><a href="#fourth">Api</a></li>
            </ul>

            <div id="tab-contents">
                <TapContent id="first" />
                <TapContent id="secound" />
                <TapContent id="thrid" />
                <TapContent id="fourth" />
            </div>
        </div>
    );
}

export default ContentPortfolio;