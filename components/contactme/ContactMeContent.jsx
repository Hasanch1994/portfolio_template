const ContactMeContent = () => {
    return (
        <div className="w-9/12 flex-col flex justify-center items-center">

            <h4 className="text-black dark:text-white text-2xl mt-5 font-bold">Get In Touch</h4>

            <div className="grid grid-cols-2 gap-1 w-full mt-8 items-center justify-center">

                <input type="text" placeholder="Name Family" className="inputstyle" />
                <input type="email" placeholder="Email Address" className="inputstyle" />

            </div>
            <select name="choosefor" className="w-full mt-4 inputstyle">
                <option selected disabled>Choose your Goal</option>
                <option>Online Tutorial</option>
                <option>Project</option>
                <option>Etc</option>
            </select>

            <textarea rows="10" placeholder="Your message here" className="w-full mt-4 inputstyle" />

            <button className="greenbutton w-full mt-3 items-center justify-center mb-6">
                <span className="md:text-sm text-base">Send</span>
            </button>

        </div>
    );
}

export default ContactMeContent;