import Image from "next/image";

interface ToolbarProps {
    onSearch: (query: string) => void;
    onViewChange: (view: 'grid' | 'list') => void;
    currentView: 'grid' | 'list';
}

const Toolbar: React.FC<ToolbarProps> = ({ onSearch, onViewChange, currentView }) => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center mb-[24px] gap-4 md:gap-0">
            {/* Search Bar */}
            <div className="relative w-full md:w-[363px]">
                <input
                    type="text"
                    placeholder="Search by Employee Name or Number"
                    className="w-full h-[48px] pl-[48px] pr-[16px] rounded-full border border-gray-200 text-[14px] text-[#333] focus:outline-none focus:border-[#3D3936] hover:bg-gray-100 hover:scale-[1.02] transition-all"
                    onChange={(e) => onSearch(e.target.value)}
                />
                <div className="absolute left-[20px] top-1/2 -translate-y-1/2">
                    <Image src="/Toolbar/Search.svg" alt="Search" width={16} height={16} />
                </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-[12px] justify-center sm:justify-end">
                {/* Download */}
                <button title="Download" className="flex items-center justify-center cursor-pointer w-[48px] h-[48px] bg-white rounded-[12px] border border-[#3D3936]/10 hover:bg-gray-50 hover:scale-105 transition-transform">
                    <Image src="/Toolbar/Download.svg" alt="Download" width={24} height={24} />
                </button>

                {/* Filter */}
                <button title="Filter" className="flex items-center justify-center cursor-pointer w-[48px] h-[48px] bg-white rounded-[12px] border border-[#3D3936]/10 hover:bg-gray-50 hover:scale-105 transition-transform">
                    <Image src="/Toolbar/Filter.svg" alt="Filter" width={24} height={24} />
                </button>

                {/* Add Button */}
                <button title="Add New" className="flex items-center justify-center cursor-pointer w-[48px] h-[48px] bg-[#3D3936] rounded-[12px] hover:bg-[#2a2725] hover:scale-105 transition-transform">
                    <Image src="/Toolbar/Add.svg" alt="Add" width={24} height={24} className="brightness-0 invert" />
                </button>

                {/* View Toggles */}
                <div className="flex items-center bg-white rounded-[12px] border border-[#3D3936]/10 p-1 h-[48px]">
                    <button
                        title="Grid View"
                        className={`flex items-center justify-center cursor-pointer w-[40px] h-[40px] rounded-[12px] transition-colors ${currentView === 'grid' ? 'bg-[#3D3936]' : 'hover:bg-gray-50 text-[#3D3936]'}`}
                        onClick={() => onViewChange('grid')}
                    >
                        <Image
                            src="/Toolbar/Tab.svg"
                            alt="Grid View"
                            width={24}
                            height={24}
                            className={currentView === 'grid' ? "brightness-0 invert" : "brightness-0"}
                        />
                    </button>
                    <button
                        title="List View"
                        className={`flex items-center justify-center cursor-pointer w-[40px] h-[40px] rounded-[12px] transition-colors ${currentView === 'list' ? 'bg-[#3D3936]' : 'hover:bg-gray-50'}`}
                        onClick={() => onViewChange('list')}
                    >
                        <Image
                            src="/Toolbar/List.svg"
                            alt="List View"
                            width={24}
                            height={24}
                            className={currentView === 'list' ? "brightness-0 invert" : "brightness-0"}
                        />
                    </button>
                    <button title="Tree View" className="flex items-center justify-center cursor-pointer w-[40px] h-[40px] hover:bg-gray-50 rounded-[12px] transition-colors">
                        <Image src="/Toolbar/Tree.svg" alt="Tree View" width={24} height={24} className="brightness-0" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Toolbar;
