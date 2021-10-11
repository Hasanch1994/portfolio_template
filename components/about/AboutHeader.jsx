import Image from 'next/image'
import Link from 'next/link';
const AboutHeader = () => {
    return (
        <div className="flex flex-col w-full h-auto dark:bg-gray-g800 bg-gray-g50 p-14">
            <div className="md:block flex w-full align-middle ">
                <div className="md:w-full w-2/3 flex flex-col ml-3 md:ml-0 md:items-center">
                    <h3 className="dark:text-white text-black text-4xl font-bold md:text-center">Hasan Cheraghi</h3>
                    <h6 className="text-gray-g400 mt-1 md:text-center">Senior Android developer - Junior react developer</h6>

                    <p className="text-gray-g600 dark:text-gray-g200 text-base mt-4 text-left md:text-center md:mr-0 mr-6">
                        I'm a software enginner specialised in Android development and frontend with react/nextjs. I also have experience in node js,restfull api,sql and nosql databases.please checkout my resume and portfolio for more info
                    </p>

                    <div className="w-3/4 flex md:w-full md:flex-col md:justify-center md:items-center items-center md:mt-8 mt-8">
                        <Link href="/portfolio"><button className="greenbutton">
                            <svg className="svg-inline--fa mr-3 fa-laptop-code fa-w-20 fa-fw me-2" width="20" height="20" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="laptop-code" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"></path></svg>
                            <span className="md:text-sm text-base">See portfolio</span>
                        </button>
                        </Link>

                        <Link href="/resume"><button className="graybutton">
                            <svg className="svg-inline--fa mr-3 fa-file-alt fa-w-12 fa-fw me-2" width="20" height="20" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"></path></svg>
                            <span className="md:text-sm text-base">Watch resume</span>
                        </button>
                        </Link>
                    </div>
                </div>

                <div className="md:w-full md:mt-4 w-1/3 flex-col flex md:items-center">
                    <Image src="/images/profileimage.jpg" className="overflow-hidden object-cover" width="400" height="300" alt="Hasan Cheraghi image" />
                </div>
            </div>
        </div>

    );
}

export default AboutHeader;