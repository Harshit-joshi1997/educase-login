import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-gray-50 p-6 justify-end pb-12">
      <div className="mb-auto"></div>

      <div className="flex flex-col gap-[10px] w-full mt-auto">
        <h1 className="text-[28px] font-bold mb-1 text-[#1d2226] tracking-tight">Welcome to PopX</h1>
        <p className="text-[#8e8e8e] mb-5 text-[16px] leading-relaxed max-w-[280px]">
          Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
        </p>

        <Button
          className="w-full px-0 h-12 bg-[#6c25ff] hover:bg-[#5b1fdb] text-white rounded-[6px] font-semibold text-[16px]"
          onClick={() => navigate('/register')}
        >
          Create Account
        </Button>
        <Button
          variant="secondary"
          className="w-full h-12 bg-gray-300 text-[#1d2226] rounded-[6px] font-semibold text-[16px]"
          onClick={() => navigate('/login')}
        >
          Already Registered? Login
        </Button>
      </div>
    </div>
  );
};

export default Welcome;
