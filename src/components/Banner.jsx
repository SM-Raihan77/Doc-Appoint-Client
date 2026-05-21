



// "use client";

// import { Button } from "@heroui/react";
// import Link from "next/link";
// // import { MdEmail } from "react-icons/md";
// import { motion } from "motion/react";

// const Banner = () => {
//   return (
    
//     <div className="min-h-[50vh] md:h-[60vh] w-full relative flex items-center rounded-lg shadow-2xl overflow-hidden mt-6 md:mt-10">

//       {/* Background */}
//       <motion.div
//         initial={{ scale: 1.1 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 1.5 }}
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: "url('/assets/banner.png')",
//         }}
//       />

//       {/* Overlay */}
//       <div className="relative w-full h-full bg-black/60 flex items-center py-12 md:py-0">
//         <div className="max-w-7xl mx-auto px-6 text-center md:text-left text-white w-full">

//           {/* Title */}
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 max-w-2xl mx-auto md:mx-0 leading-tight"
//           >
//             Upgrade Your Skills Today
//           </motion.h1>

//           {/* Description */}
//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-base sm:text-lg md:text-xl mb-8 max-w-xl mx-auto md:mx-0 text-gray-200"
//           >
//             Enhance your knowledge and advance your career with our expert-led courses.
//           </motion.p>

//           {/* Buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
//           >
//             <Link href="/signup" className="w-full sm:w-auto">
//               <Button className="w-full sm:w-auto bg-linear-to-r from-[#AD6350] to-[#00D6B7] text-white border-none font-semibold px-8">
//                 Enrol Now
//               </Button>
//             </Link>

//             <Link href="/pricing" className="w-full sm:w-auto">
//               <Button className="w-full sm:w-auto bg-purple-500 text-white hover:bg-purple-600 flex items-center justify-center gap-2 font-semibold px-8">
//                 Subscribe
//                 {/* <MdEmail className="text-lg" /> */}
//               </Button>
//             </Link>
//           </motion.div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;



"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import { motion } from "motion/react";
import Image from "next/image"; // Next.js এর Image কম্পোনেন্ট ইম্পোর্ট করলাম

const Banner = () => {
  return (
    // এখানে ব্যাকগ্রাউন্ড কালার বা হালকা গ্রে শেড দিতে পারেন (যেমন: bg-gray-900 বা আপনার থিম অনুযায়ী)
    <div className="w-full bg-[#1E2939]/10 rounded-2xl shadow-xl overflow-hidden mt-6 md: p-6 md:p-12">
      
      {/* Grid Layout: মোবাইলে ১টি কলাম, ডেক্সটপে ২টি কলাম */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Side: Text Content */}
        <div className="text-center md:text-left order-2 md:order-1">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800 leading-tight"
          >
            Upgrade Your Skills Today
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl mb-8 text-gray-600 max-w-xl mx-auto md:mx-0"
          >
            Enhance your knowledge and advance your career with our expert-led courses.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
          >
            <Link href="/signup" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-linear-to-r from-[#AD6350] to-[#00D6B7] text-white border-none font-semibold px-8 py-6 rounded-xl">
                Enrol Now
              </Button>
            </Link>

            <Link href="/pricing" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-purple-600 text-white hover:bg-purple-700 flex items-center justify-center gap-2 font-semibold px-8 py-6 rounded-xl">
                Subscribe
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Right Side: Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full flex justify-center md:justify-end order-1 md:order-2"
        >
          <div className="relative w-full max-w-[500px] h-[300px] md:h-[400px]">
            <Image
              src="/assets/banner.png"
              alt="Banner Image"
              fill
              className="object-cover rounded-xl shadow-md"
              priority
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Banner;


