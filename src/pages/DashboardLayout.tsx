import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

const DashboardLayout = () => {
    return (
        // <div className="">
        //     <Sidebar />
        //     <Navbar />
        // </div>

        <div className="flex">
            <div className="">
                <Sidebar />
            </div>
            <div className="flex flex-col w-full px-8 overflow-y-auto bg-indigo-50">
                <Navbar />
                <Hero />
            </div>
        </div>
    )
}
export default DashboardLayout