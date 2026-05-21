// "use client";

// import { useRouter, useSearchParams } from "next/navigation";
// import { useState } from "react";

// const SearchBar = () => {

//     const router = useRouter();
//     const searchParams = useSearchParams();

//     const currentSearch = searchParams.get("search") || "";

//     const [searchText, setSearchText] = useState(currentSearch);

//     const handleSearch = () => {

//         const params = new URLSearchParams(searchParams);

//         if (searchText) {
//             params.set("search", searchText);
//         } else {
//             params.delete("search");
//         }

//         router.push(`/allAppointment?${params.toString()}`);

//         router.refresh();
//     };

//     return (
//         <div className="flex gap-2">

//             <input
//                 type="text"
//                 placeholder="Search Doctor..."
//                 value={searchText}
//                 onChange={(e) => setSearchText(e.target.value)}
//                 className="border px-4 py-2 rounded-md"
//             />

//             <button
//                 onClick={handleSearch}
//                 className="bg-blue-600 text-white px-4 py-2 rounded-md"
//             >
//                 Search
//             </button>

//         </div>
//     );
// };

// export default SearchBar;



// 'use client';
// import { Button } from '@heroui/react';

// import React, { useEffect, useState } from 'react';
// import { FaSearch } from 'react-icons/fa';


// const SearchBar = () => {
//     const [searchText, setSearchText] = useState("");
//     const [searchParams, setSearchParams] = useState([]);
//     const [query, setQuery] = useState("");

//     useEffect(() => {
//         const getData = async () => {
//             const res = await fetch(`http://localhost:5000/doctors?search=${searchText}`);
//             const data = await res.json();
//             setSearchParams(data);
//         };
//         getData();
//     }, [searchText]);

//     const filterDoctors = (doctors) => doctors.name.toLoweCase().includes(searchText.toLowerCase());

//     const handleSearch = () => {
//         setSearchText("");
//         setSearchParams([]);
//     };
//     return (
//         <div>
//             <div className="flex gap-2 mb-6 justify-end">
//                 <input
//                     type="text"
//                     placeholder="Search..."
//                     className="border p-1 w-48 rounded-md text-sm"
//                     onChange={(e) => setSearchText(e.target.value)}
//                 />

//                 <Button
//                     onClick={handleSearch}
//                     className="bg-purple-500 text-white hover:bg-purple-600"
//                 >
//                     <FaSearch />
//                 </Button>
//             </div>
//         </div>
//     );
// };

// export default SearchBar;