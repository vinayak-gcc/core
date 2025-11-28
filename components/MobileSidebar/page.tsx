"use client";

import { useState } from "react";
import Image from "next/image";
import Sidebar from "@/components/Sidebar/page";

const MobileSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="xl:hidden absolute">
            {/* Hamburger Menu */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md"
            >
                <Image src="/Menu.svg" alt="Menu" width={24} height={24} />
            </button>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar Drawer */}
            <div
                className={`fixed top-0 left-0 h-full z-50 transition-transform duration-300 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <Sidebar onClose={() => setIsOpen(false)} />
            </div>
        </div>
    );
};

export default MobileSidebar;
