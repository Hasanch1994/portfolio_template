import Head from 'next/head'
import LeftSide from '../common/leftside/LeftSide';
import RightSide from '../common/rightside/RightSide';
const MainLayout = (props) => {
    return (
        <main className="w-full bg-white h-screen">
            <Head>
                <title>
                    حسن چراغی
                </title>
            </Head>

            <aside className="w-1/5 m-0 p-0 h-screen float-left bg-green-main fixed overflow-y-scroll">
                <LeftSide />
            </aside>

            <div className="w-4/5 h-screen float-right bg-blue-50">
                {
                    props.children
                }
            </div>

        </main >
    )


}

export default MainLayout;