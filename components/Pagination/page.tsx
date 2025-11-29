import Image from "next/image";

const Pagination = () => {
    return (
        <div className="flex flex-wrap justify-start items-center mt-6 text-[#3D3936] text-[14px] gap-4 sm:gap-0">
            {/* Rows per page */}
            <div className="flex items-center">
                <span className="font-medium text-[14px]">Rows per page:</span>
                <div title="Rows per page" className="flex items-center md:ml-[16px] md:mr-[32px] justify-between px-3 py-1.5 bg-white border border-[#3D3936]/10 rounded-[12px] min-w-[70px] cursor-pointer hover:scale-105 transition-transform">
                    <span className="font-medium">100</span>
                    <Image src="/ArrowRight.svg" alt="Next" width={16} height={16} className="rotate-90" />

                </div>
            </div>

            {/* Page Info */}
            <div className="font-normal mr-4 sm:mr-0">1-100 of 500</div>

            {/* Navigation */}
            <div className="flex items-center">
                <button title="Previous Page" className="p-1 hover:bg-gray-100 ml-2 rounded-full transition-all cursor-pointer hover:scale-110">
                    <Image
                        src="/ArrowLeft.svg"
                        alt="Previous"
                        width={16}
                        height={16}
                    />
                </button>
                <button title="Next Page" className="p-1 hover:bg-gray-100 rounded-full transition-all cursor-pointer hover:scale-110">
                    <Image src="/ArrowRight.svg" alt="Next" width={16} height={16} />
                </button>
            </div>
        </div>
    );
};

export default Pagination;
