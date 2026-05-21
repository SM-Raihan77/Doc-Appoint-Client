
"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FiSearch } from "react-icons/fi"; 

const SearchBar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const handleSearch = (e) => {
        const value = e.target.value;
        const params = new URLSearchParams(searchParams);

        if (value) {
            params.set("search", value);
        } else {
            params.delete("search");
        }

        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <div className="flex flex-col gap-1 w-full sm:w-72">
           
            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider pl-1">
                Search Doctor By
            </label>

            
            <div className="relative flex items-center">
               
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <FiSearch className="text-slate-400 text-base" />
                </div>

                
                <input
                    type="text"
                    placeholder="Search doctor by name..."
                    onChange={handleSearch}
                    defaultValue={searchParams.get("search") || ""}
                    className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 placeholder-slate-400/80 focus:outline-none focus:border-[#00A896] focus:ring-4 focus:ring-[#00A896]/5 transition-all shadow-3xs"
                />
            </div>
        </div>
    );
};

export default SearchBar;