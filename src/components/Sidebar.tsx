import grey from "../assets/Grey Circle.png"
import house from "../assets/House_01.png"
import user from "../assets/Users_Group.png"
import calender from "../assets/Calendar_Check.png"
import share from "../assets/Share_Android.png"
import file from "../assets/File_Document.png"
import book from "../assets/Notebook.png"
import heart from "../assets/Heart_01.png"
import left from "../assets/Chevron_Right_MD.png"
import settings from "../assets/Settings.png"
import as from "../assets/AS.png"

const Sidebar = () => {
    return (
        <div className="flex flex-col w-[72px] sticky top-0 h-screen ">
            <div className="flex flex-col justify-between">
                <div className="flex flex-col h-[632px]">
                    <div className="mt-4 px-3 mb-6">
                        <img src={grey} alt="" className="" />
                    </div>
                    <div className="w-12 flex-col h-[552px] px-3 ">
                        <div className="w-12 h-12 mb-3 p-3 bg-indigo-50 rounded-lg justify-center items-center flex">
                            <img src={house} className="w-6 h-6" />
                        </div>
                        <div className="w-12 h-12 mb-3 p-3 rounded-lg justify-center items-center flex">
                            <img src={user} className="w-6 h-6" />
                        </div>
                        <div className="w-12 h-12 mb-3 p-3 rounded-lg justify-center items-center flex">
                            <img src={calender} className="w-6 h-6" />
                        </div>
                        <div className="w-12 h-12 mb-3 p-3 rounded-lg justify-center items-center flex">
                            <img src={share} className="w-6 h-6" />
                        </div>
                        <div className="w-12 h-12 mb-3 p-3 rounded-lg justify-center items-center flex">
                            <img src={file} className="w-6 h-6" />
                        </div>
                        <div className="w-12 h-12 mb-3 p-3 rounded-lg justify-center items-center flex">
                            <img src={book} className="w-6 h-6" />
                        </div>
                        <div className="w-12 h-12 mb-3 p-3 rounded-lg justify-center items-center flex">
                            <img src={heart} className="w-6 h-6" />
                        </div>
                        <div className="w-12 h-12 mb-3 p-3 rounded-lg justify-center items-center flex">
                            <img src={left} className="w-6 h-6" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col h-[120px] items-center mb-2">
                    <div className="w-12 h-12 mb-3 p-3 rounded-lg justify-center items-center flex">
                        <img src={settings} className="w-6 h-6" />
                    </div>
                    <div className="w-24 h-24 p-3 rounded-lg justify-center items-center flex">
                        <img src={as} className="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sidebar