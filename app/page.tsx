import Navbar from "@/components/Navbar/page";
import Sidebar from "@/components/Sidebar/page";
import Cards from "@/components/Card/page";
import MobileSidebar from "@/components/MobileSidebar/page";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#f2f2f2] p-[16px] gap-[16px] font-outfit">
      {/* Mobile Sidebar */}
      <MobileSidebar />

      {/* Left Side (Desktop Only) */}
      <div className="hidden xl:block md:w-[280px] flex-shrink-0">
        <Sidebar />
      </div>
      {/* Right Side */}
      <div className="flex flex-col h-full gap-[16px] rounded-[20px] w-full">
        <Navbar />
        <Cards />
      </div>
    </div>
  );
}
