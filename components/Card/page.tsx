"use client";
import Image from "next/image";
import React, { useState } from "react";
import Toolbar from "@/components/Toolbar/page";
import Pagination from "@/components/Pagination/page";

interface CardProps {
  image: string;
  name: string;
  role: string;
  active: boolean;
  viewMode: 'grid' | 'list';
}

const users = [
  {
    name: "Ethan Lee",
    role: "IT Specialist",
    image: "/Profile/EthanLee.svg",
    active: true,
  },
  {
    name: "Emily Baker",
    role: "Marketing Manager",
    image: "/Profile/EmilyBaker.svg",
    active: false,
  },
  {
    name: "Micheal Shaun",
    role: "Sales Director",
    image: "/Profile/MichealShaun.svg",
    active: false,
  },
  {
    name: "Liam Carter",
    role: "Product Designer",
    image: "/Profile/LiamCarter.svg",
    active: true,
  },
  {
    name: "Grace Kim",
    role: "Customer Lead",
    image: "/Profile/GraceKim.svg",
    active: true,
  },
  {
    name: "Noah Williams",
    role: "Finance Head",
    image: "/Profile/NoahWilliams.svg",
    active: true,
  },
  {
    name: "Isabella Rossi",
    role: "Operations Manager",
    image: "/Profile/IsabellaRossi.svg",
    active: false,
  },
  {
    name: "Ava Thompson",
    role: "HR Executive",
    image: "/Profile/AvaThompson.svg",
    active: true,
  },
];

const CardItem: React.FC<CardProps> = ({ image, name, role, active, viewMode }) => {
  if (viewMode === 'list') {
    return (
      <div className="flex items-center justify-between cursor-pointer bg-white rounded-[16px] p-[16px] border border-[#3D3936]/10 w-full hover:bg-gray-100 hover:scale-[1.02] transition-all">
        <div className="flex items-center gap-4">
          <div className="w-[48px] h-[48px] rounded-full overflow-hidden">
            <Image src={image} alt={name} width={48} height={48} className="object-cover w-full h-full" />
          </div>
          <div>
            <h3 className="text-[16px] font-medium text-[#3D3936] leading-[100%]">{name}</h3>
            <p className="text-[14px] text-[#947550] font-normal leading-[100%]">{role}</p>
          </div>
        </div>
        <div className={`w-3 h-3 rounded-full ${active ? "bg-[#9bae88]" : "bg-[#d9d8d6]"}`}></div>
      </div>
    );
  }

  return (
    // In Figma the Card has equal width and height (248px) but i am using w-full to make it fully responsive for all big screens
    <div className="flex flex-col items-center cursor-pointer justify-center bg-white rounded-[20px] p-[24px] h-[248px] border border-[#3D3936]/10 hover:bg-gray-100 hover:scale-[1.02] transition-all">
      <div className="relative mb-4">
        <div className="w-[130px] h-[130px] rounded-full overflow-hidden border-none">
          <Image
            src={image}
            alt={name}
            width={130}
            height={130}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        {/* Online status indicator */}
        <div
          className={`absolute bottom-2 right-1 w-6 h-6 rounded-full border-4 border-white ${active ? "bg-[#9bae88]" : "bg-[#d9d8d6]"
            }`}
        ></div>
      </div>

      <h3 className="text-[16px] font-medium text-[#3D3936] leading-[100%]">{name}</h3>
      <p className="text-[14px] text-[#947550] mt-1 font-normal leading-[100%]">{role}</p>
    </div>
  );
};

const Cards = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white p-[16px] md:p-[24px] rounded-[20px]">
      <Toolbar
        onSearch={setSearchQuery}
        onViewChange={setViewMode}
        currentView={viewMode}
      />

      <div className={viewMode === 'grid'
        ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[24px]"
        : "flex flex-col gap-[12px]"
      }>
        {filteredUsers.map((user, index) => (
          <CardItem
            key={index}
            image={user.image}
            name={user.name}
            role={user.role}
            active={user.active}
            viewMode={viewMode}
          />
        ))}
      </div>
      
      {/* Pagination Section */}
      <Pagination />

    </div>
  );
};


export default Cards;