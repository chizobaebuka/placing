import down from "../assets/Caret_Down_MD.png";
import tag from "../assets/tag.png";
import user from "../assets/User_Close.png";
import good from "../assets/User_Check.png";
import voice from "../assets/User_Voice.png";
import mail from "../assets/Mail.png"
import { useState } from "react";
import DropDown from "./DropDown";


const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="h-14 justify-start items-start gap-8 inline-flex py-6 mb-12">
            <div className="w-[385px] flex-col justify-start items-start gap-2 inline-flex">
                <div className="text-blue-700 text-xl font-semibold font-['Poppins']">
                    London Internship Program
                </div>
                <div className="text-neutral-950 text-xs font-light font-['Poppins']">
                    London
                </div>
            </div>
            <div className="grow shrink basis-0 self-stretch justify-between items-start flex">
                <div className="w-[321px] h-10 px-4 py-2 bg-white rounded-t-2xl shadow justify-between items-center flex">
                    <div className="justify-start items-center gap-2 flex">
                        <div className="text-[#1D4ED8] text-base font-medium font-['Poppins'] leading-snug">
                            Opportunity Browsing
                        </div>
                    </div>
                    <div className="w-6 h-6 relative" />
                    <img src={down} alt="" width="auto" onClick={handleDropdownToggle} className="cursor-pointer" />
                </div>
                {isDropdownOpen && (
                    <DropDown />
                )}
                <div className="rounded-2xl justify-center items-center gap-2 flex">
                    <div className="p-2 bg-white rounded-lg shadow border border-gray-200 justify-center items-center gap-2.5 flex">
                        <div className="w-6 h-6 relative">
                            <div className="w-[15.83px] h-[15.82px] left-[4.08px] top-[4.72px] absolute">
                                <img src={tag} alt="" className="w-24" />
                            </div>
                        </div>
                    </div>
                    <div className="p-2 bg-white rounded-lg shadow border border-gray-200 justify-center items-center gap-2.5 flex">
                        <img src={user} alt="" />
                    </div>
                    <div className="p-2 bg-white rounded-lg shadow border border-gray-200 justify-center items-center gap-2.5 flex">
                        <img src={good} alt="" />
                    </div>
                    <div className="w-10 h-10 p-2 bg-white rounded-lg shadow border border-gray-200 justify-center items-center gap-2.5 flex">
                        <img src={voice} alt="" />
                    </div>
                    <div className="w-10 h-10 p-2 bg-white rounded-lg shadow border border-gray-200 justify-center items-center gap-2.5 flex">
                        <img src={mail} alt="" />
                    </div>
                    <div className="w-[230px] self-stretch rounded-lg justify-start items-center flex">
                        <div className="w-[195px] self-stretch px-4 py-2 bg-blue-700 rounded-tl-lg rounded-bl-lg justify-start items-center gap-2.5 flex">
                            <div className="text-white text-[13px] font-normal font-['Poppins'] leading-snug">
                                Move To Video Interview I
                            </div>
                        </div>
                        <div className="w-px h-10 relative bg-white" />
                        <div className="w-[34px] self-stretch px-2.5 py-3 bg-blue-700 rounded-tr-lg rounded-br-lg justify-start items-center gap-2.5 flex">
                            <div className="w-4 h-4 relative" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Navbar;
