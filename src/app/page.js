import Banner from "@/components/Banner";
import HeroBanner from "@/components/Banner";
import HealthExpertBanner from "@/components/HealthExpertBanner";
import PopularDoctors from "@/components/PopulerDoctor";
import Image from "next/image";

export default function Home() {
  return (
  <div>

<Banner />
<PopularDoctors />
<HealthExpertBanner />
    
  </div>


  );
}
