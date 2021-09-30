import Head from 'next/head'
import Image from 'next/image'
const AboutHeader = () => {
    return (
        <div className="flex flex-col w-full h-auto bg-gray-g50 p-14">
            <div className="flex w-full align-middle ">
                <div className="w-2/3 block">
                    <h3 className="text-black text-4xl font-bold">Hasan Cheraghi</h3>
                    <h6 className="text-gray-g400 mt-1">Senior Android developer</h6>

                    <p className="text-gray-g600 text-base mt-4 text-left mr-6">
                        I'm a software engineer specialised in frontend and backend development for complex scalable web apps. I write about software development on my blog. Want to know how I may help your project? Check out my project <a className="insidea">portfolio </a>and online <a className="insidea">resume </a> .
                    </p>

                    <div className="w-3/4 flex items-center mt-16">
                        <button class="greenbutton">
                            <svg className="svg-inline--fa mr-3 fa-laptop-code fa-w-20 fa-fw me-2" width="20" height="20" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="laptop-code" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"></path></svg>
                            <span>See portfolio</span>
                        </button>

                        <button class="graybutton ml-3">
                            <svg class="svg-inline--fa mr-3 fa-file-alt fa-w-12 fa-fw me-2" width="20" height="20" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"></path></svg>
                            <span>Watch resume</span>
                        </button>
                    </div>
                </div>

                <div className="w-1/3 block">
                    <Image src="/images/profile-lg.jpg" className="overflow-hidden" width="400" height="300" alt="Hasan Cheraghi image" />
                </div>
            </div>
        </div>

    );
}

export default AboutHeader;