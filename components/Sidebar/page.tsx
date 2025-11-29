"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface SidebarProps {
    onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
    const [showSettings, setShowSettings] = useState(false);
    const [activeItem, setActiveItem] = useState("People");
    const settingsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
                setShowSettings(false);
            }
        };

        if (showSettings) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showSettings]);

    const menuItems = [
        { name: "Home", icon: "/Sidebar/Home.svg" },
        { name: "My Info", icon: "/Sidebar/Info.svg" },
        { name: "People", icon: "/Sidebar/People.svg" },
        { name: "Timesheet", icon: "/Sidebar/Timesheet.svg" },
        { name: "Payroll", icon: "/Sidebar/Payroll.svg" },
        { name: "Clients", icon: "/Sidebar/Clients.svg" },
        { name: "Project", icon: "/Sidebar/Project.svg" },
    ];

    return (
        <div className="flex flex-col h-full rounded-r-[20px] xl:rounded-[20px] py-[24px] bg-[#3d3936] w-[280px] text-white font-sans relative">
            {/* Header */}
            <div className="flex justify-between px-[24px] mb-[24px]  items-center">
                <div className="relative w-[101px] h-[44px]">
                    <Image src="/Sidebar/Logo.svg" alt="Core Logo" layout="fill" objectFit="contain" />
                </div>
                <div className="cursor-pointer" onClick={onClose}>
                    <Image src="/Sidebar/DoubleArrow.svg" alt="Double Arrow" width={20} height={20} />
                </div>
            </div>

            {/* Menu */}
            <div className="flex flex-col px-[16px] py-[24px] flex-grow">
                {menuItems.map((item) => (
                    <div
                        key={item.name}
                        title={item.name}
                        onClick={() => setActiveItem(item.name)}
                        className={`relative flex items-center justify-between px-[16px] rounded-[16px] cursor-pointer transition-colors py-[16px] ${activeItem === item.name
                            ? "bg-white text-[#3d3936]"
                            : "text-[#aeb1b6] hover:text-white"
                            }`}
                    >
                        {activeItem === item.name && (
                            <div className="absolute left-[-16px] top-1/2 -translate-y-1/2 w-[4px] h-[30px] bg-white rounded-r-[4px]" />
                        )}
                        <div className="flex items-center gap-[12px]">
                            <div className="relative flex items-center justify-center">
                                <Image
                                    src={item.icon}
                                    alt={item.name}
                                    width={20}
                                    height={20}
                                    className={activeItem === item.name ? "brightness-0 invert-0 sepia-0 saturate-0 hue-rotate-0" : "brightness-0 invert"}
                                    style={activeItem === item.name ? { filter: "brightness(0) saturate(100%) invert(21%) sepia(11%) saturate(583%) hue-rotate(314deg) brightness(94%) contrast(89%)" } : {}}
                                />
                            </div>
                            <span className="font-normal text-[14px]">{item.name}</span>
                        </div>
                        <div>
                            <Image
                                src={activeItem === item.name ? "/ActiveArrow.svg" : "/InactiveArrow.svg"}
                                alt="Arrow"
                                width={20}
                                height={20}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="mt-auto px-[16px] relative" ref={settingsRef}>
                <div
                    className="flex items-center border border-white/10 rounded-[16px] gap-[12px] p-[16px] text-[#aeb1b6] cursor-pointer hover:text-white"
                    onClick={() => setShowSettings(!showSettings)}
                >
                    <Image src="/Sidebar/Settings.svg" alt="Settings" width={20} height={20} />
                    <span className="font-medium text-[16px]">Settings</span>
                </div>

                {/* Settings Modal */}
                {showSettings && (
                    <div className="absolute bottom-[80px] left-[16px] w-[200px] bg-white rounded-[12px] shadow-lg p-2 z-50 text-[#3D3936]">
                        <div className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">My Profile</div>
                        <div className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">Preferences</div>
                        <div className="h-[1px] bg-gray-200 my-1"></div>
                        <div className="p-2 hover:bg-gray-100 rounded-md cursor-pointer text-red-500">Logout</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Sidebar;