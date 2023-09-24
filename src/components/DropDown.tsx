// import { useState } from "react";
// import { GoChevronUp, GoChevronDown } from 'react-icons/go';


interface DropdownItem {
    label: string;
    value: string;
} 

const dropdownData: DropdownItem[] = [
    { label: 'Applied', value: '1745' },
    { label: 'Shortlisted', value: '453' },
    { label: 'Technical Interview', value: '123' },
    { label: 'Opportunity Browsing', value: '243' },
    { label: 'Video Interview I', value: '25' },
    { label: 'Video Interview II', value: '25' },
    { label: 'Video Interview III', value: '25' }
];

const DropDown = () => {
    return (
        <div className="w-[321px] bg-[red] absolute mt-11 rounded-lg">
            {dropdownData.map((item, index) => (
                <div
                    className="w-[321px] h-[72px] px-4 py-2 bg-white shadow justify-between items-center inline-flex"
                    key={index}
                >
                    <div className="justify-start items-center gap-2 flex">
                        <div className="text-neutral-950 text-base font-normal font-['Poppins'] leading-snug">
                            {item.label}
                        </div>
                    </div>
                    <div className="px-2.5 py-0.5 bg-stone-50 rounded-2xl justify-center items-center gap-2.5 flex">
                        <div className="text-neutral-700 text-sm font-medium font-['Poppins']">
                            {item.value}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default DropDown