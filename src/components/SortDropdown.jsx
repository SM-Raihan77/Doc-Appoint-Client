"use client";
import { useRouter, usePathname } from "next/navigation";
import { FiChevronDown } from "react-icons/fi"; 

const SortDropdown = ({ currentSort }) => {
    const router = useRouter();
    const pathname = usePathname();

    const handleSortChange = (e) => {
        const selectedValue = e.target.value;

        
        router.push(`${pathname}?sortBy=${selectedValue}`);
    };

    return (
        <div className="flex flex-col gap-1 w-full sm:w-64">
           
            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider pl-1">
                Sort Doctors By
            </label>
            
            
            <div className="relative flex items-center">
                <select
                    value={currentSort}
                    onChange={handleSortChange}
                    className="w-full bg-white border border-slate-200 text-slate-700 py-2.5 px-4 pr-10 rounded-xl focus:outline-none focus:border-[#00A896] focus:ring-4 focus:ring-[#00A896]/5 text-sm font-medium cursor-pointer transition-all shadow-3xs appearance-none"
                >
                    <option value="default">Default (All)</option>
                    <option value="fee_asc">Fee: Low to High</option>
                    <option value="fee_desc">Fee: High to Low</option>
                </select>

                
                <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                    <FiChevronDown className="text-base" />
                </div>
            </div>
        </div>
    );
};

export default SortDropdown;