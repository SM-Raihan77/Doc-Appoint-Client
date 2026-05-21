"use client";
import { useRouter, usePathname } from "next/navigation";

const SortDropdown = ({ currentSort }) => {
    const router = useRouter();
    const pathname = usePathname();

    const handleSortChange = (e) => {
        const selectedValue = e.target.value;

        // to change url in browser
        router.push(`${pathname}?sortBy=${selectedValue}`);
    };

    return (
        <div className="w-full sm:w-64">
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5 pl-1">
                Sort Doctors By
            </label>
            <select
                value={currentSort}
                onChange={handleSortChange}
                className="w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#05696E] text-sm font-medium cursor-pointer transition-all"
            >
                <option value="default">Default (All)</option>
                <option value="fee_asc">Fee: Low to High</option>
                <option value="fee_desc">Fee: High to Low</option>
            </select>
        </div>
    );
};

export default SortDropdown;