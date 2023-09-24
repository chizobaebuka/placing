import search from "../assets/Search_Magnifying_Glass.png"
import warning from "../assets/Circle_Warning.png"
import file from "../assets/File_Document.png"
import down from "../assets/Caret_Down_MD.png"
import Hline from "../assets/Hline.png"
import taskNum from "../assets/25.png"
import num75 from "../assets/75.png"
import bigAs from "../assets/bigAs.png"
import cardData from "./cardData"

const Hero = () => {
    return (
        <div className="justify-start items-start gap-8 inline-flex">
            {/* left div col */}
            <div className="flex flex-col ">
                <div className="flex flex-row w-[385px] border justify-between rounded-lg bg-white">
                    <div className="flex flex-row gap-2">
                        <div className="flex p-2 items-center">
                            <img src={search} alt="" />
                        </div>
                        <p className="text-sm text-[#9AA6AC] py-4 justify-center gap-4">
                            Search by name, edu, exp or #tag
                        </p>
                    </div>
                    <div className="flex mt-4 pr-4 items-center justify-center gap-2 h-[20px]">
                        <img src={warning} alt="" className="" />
                    </div>
                </div>

                <div className="flex flex-row w-[385px] border justify-between rounded-lg bg-white mt-6">
                    <div className="w-[385px] h-[58px] px-4 py-[18px] justify-between items-center inline-flex">
                        <p className="text-neutral-950 text-sm font-medium leading-snug">
                            Filters
                        </p>
                        <div></div>
                        <p className="text-neutral-950 text-xs font-light leading-snug">
                            0 Selected
                        </p>
                    </div>
                </div>

                <div className="flex flex-row w-[385px] h-[58px] border justify-between rounded-lg bg-white">
                    <div className="flex flex-row gap-2">
                        <div className="flex p-2 items-center">
                            <img src={file} alt="" />
                        </div>
                        <p className="text-sm text-[#0A0A0A] py-4 justify-center gap-4">
                            Personal Information
                        </p>
                    </div>
                    <div className="flex mt-4 pr-4 items-center justify-center gap-2 h-[20px]">
                        <img src={down} alt="" className="" />
                    </div>
                </div>

                <div className="flex flex-row w-[385px] h-[58px] border justify-between rounded-lg bg-white">
                    <div className="flex flex-row gap-2">
                        <div className="flex p-2 items-center">
                            <img src={file} alt="" />
                        </div>
                        <p className="text-sm text-[#0A0A0A] py-4 justify-center gap-4">
                            Education
                        </p>
                    </div>
                    <div className="flex mt-4 pr-4 items-center justify-center gap-2 h-[20px]">
                        <img src={down} alt="" className="" />
                    </div>
                </div>

                <div className="flex flex-row w-[385px] h-[58px] border justify-between rounded-lg bg-white">
                    <div className="flex flex-row gap-2">
                        <div className="flex p-2 items-center">
                            <img src={file} alt="" />
                        </div>
                        <p className="text-sm text-[#0A0A0A] py-4 justify-center gap-4">
                            Work Experience
                        </p>
                    </div>
                    <div className="flex mt-4 pr-4 items-center justify-center gap-2 h-[20px]">
                        <img src={down} alt="" className="" />
                    </div>
                </div>

                <div className="flex flex-row w-[385px] h-[58px] border justify-between rounded-lg bg-white">
                    <div className="flex flex-row gap-2">
                        <div className="flex p-2 items-center">
                            <img src={file} alt="" />
                        </div>
                        <p className="text-sm text-[#0A0A0A] py-4 justify-center gap-4">
                            Activity Filter
                        </p>
                    </div>
                    <div className="flex mt-4 pr-4 items-center justify-center gap-2 h-[20px]">
                        <img src={down} alt="" className="" />
                    </div>
                </div>

                <div className="flex flex-row w-[385px] h-[58px] border justify-between rounded-lg bg-white">
                    <div className="flex flex-row gap-2">
                        <div className="flex p-2 items-center">
                            <img src={file} alt="" />
                        </div>
                        <p className="text-sm text-[#0A0A0A] py-4 justify-center gap-4">
                            Advanced Filter
                        </p>
                    </div>
                    <div className="flex mt-4 pr-4 items-center justify-center gap-2 h-[20px]">
                        <img src={down} alt="" className="" />
                    </div>
                </div>
            </div>

            {/* right div below*/}
            <div className="flex flex-col w-full px-4 mb-4 pt-2 bg-white rounded-2xl">
                <div className="flex justify-between">
                    <div className="flex items-center p-4 gap-8">
                        <input type="checkbox" name="" id="" />
                        <p className="text-[#1D4ED8]">247 candidates</p>
                    </div>

                    <div className="flex items-center p-4 gap-4 ">
                        <p className="text-sm font-medium leading-snug text-[#1D4ED8]">
                            Qualified
                        </p>
                        <img src={Hline} alt="" />
                        <div className="flex flex-row gap-2 w-[65px] items-center justify-center">
                            <p className="text-[#0A0A0A] text-sm font-normal leading-snug">
                                Task
                            </p>
                            <img src={taskNum} alt="" />
                            {/* <p className="text-center bg-[#F7F8FD] rounded-[40px] text-[10px] font-normal leading-snug">25</p> */}
                        </div>
                        <img src={Hline} alt="" className="mr-4" />
                        <div className="flex flex-row gap-2 w-[65px] items-center justify-center ">
                            <p className="text-[#0A0A0A] text-sm font-normal leading-snug ml-4">
                                Disqualified
                            </p>
                            {/* <p className="text-center bg-[#F7F8FD] rounded-[40px] text-[10px] font-normal leading-snug">75</p> */}
                            <img src={num75} alt="" />
                        </div>
                    </div>
                </div>
                {/* HORIZONTAL LINE BELOW */}
                {/* <div className="flex items-center justify-center px-4 w-[880px]">
                        <img src={hori} alt="" />
                    </div> */}
                <div className="border-t border-gray-200 "></div>

                <div>
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className="flex flex-row h-[143px] gap-2 border-b border-gray-200"
                        >
                            <div className="flex items-center justify-center p-4 ">
                                <input type="checkbox" name="" id="" />
                            </div>
                            <div className="py-4">
                                <div className="flex flex-row h-[111px] w-[538px] gap-6">
                                    <div className="w-14 h-14 py-[27.5px]">
                                        <img src={bigAs} alt="" />
                                    </div>
                                    <div className="flex flex-col justify-start">
                                        <p className="mb-2 text-sm font-semibold text-black">
                                            {card.name}
                                        </p>
                                        <p className="mb-2 text-[10px] font-medium text-black">
                                            {card.location}
                                        </p>
                                        <p className="text-black text-[10px] font-light">
                                            {card.education}
                                        </p>
                                        <div className="flex flex-row gap-2">
                                            {card.tags.map((tag, i) => (
                                                <p key={i} className="text-[#1D4ED8] text-[8px] ">
                                                    {tag}
                                                </p>
                                            ))}
                                        </div>
                                        <div className="flex flex-row gap-2 mt-2">
                                            {card.cities.map((city, i) => (
                                                <p
                                                    key={i}
                                                    className="text-[8px] rounded-2xl justify-center py-0.5 text-[#036F91] bg-slate-50 h-4 px-2.5 font-medium"
                                                >
                                                    {city}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Hero