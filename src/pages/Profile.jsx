import React from 'react';
import { useAuthStore } from '@/store/authStore';
import { Button } from '@/components/ui/button';
import { Camera } from 'lucide-react';

const Profile = () => {
  const currentUser = useAuthStore((state) => state.currentUser);


  if (!currentUser) return null;

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="bg-white px-6 pt-6 pb-4">
        <h1 className="text-[18px] text-[#1d2226] font-medium">Account Settings</h1>
      </div>

      {/* Profile Card Layout */}
      <div className="flex-1 bg-gray-50 px-6 py-6 mt-2 border-t border-[#f4f4f4]">
        <div className="flex items-start gap-5 mb-6">
          <div className="relative">
            <div className="w-[76px] h-[76px] rounded-full overflow-hidden bg-gray-200">
              {/* Dummy avatar as placeholder */}
              <img
                src="https://i.pravatar.cc/150?img=47"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Camera icon badge */}
            <div className="absolute right-0 bottom-1 bg-[#6c25ff] rounded-full p-1.5 border-2 border-white cursor-pointer hover:bg-[#5b1fdb]">
              <Camera size={12} className="text-white" />
            </div>
          </div>

          <div className="pt-2">
            <h2 className="text-[16px] font-bold text-[#1d2226]">{currentUser.fullName}</h2>
            <p className="text-[14px] text-[#2d2d2d] mt-1">{currentUser.email}</p>
          </div>
        </div>

        <p className="text-[15px] text-[#1d2226] leading-[1.6] opacity-80 mb-6">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>

        {/* Separator exact styling */}
        <div className="border-b border-dashed border-[#cbcbcb] -mx-6 w-[calc(100%+3rem)] mb-auto h-0" />
        <div className="flex-1"></div>
        <div className="mt-8 mb-4">
        </div>
      </div>
      <div className="border-b border-dashed border-[#cbcbcb] -mx-6 -mt-10 w-[calc(100%+3rem)] mb-auto h-0" />
      <div className="mt-8"></div>
    </div>
  );
};

export default Profile;
