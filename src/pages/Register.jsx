import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useAuthStore } from '@/store/authStore';

const Register = () => {
  const navigate = useNavigate();
  const register = useAuthStore((state) => state.register);

  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: 'yes'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(formData);
    navigate('/login');
  };

  // Common label class for the floating label
  const labelClass = "absolute -top-2 left-3 bg-gray-50 px-1 text-[13px] text-[#6c25ff] z-10 font-semibold tracking-wide";
  const inputClass = "h-12 border-[#cbcbcb] rounded-[6px] focus-visible:ring-1 focus-visible:ring-[#6c25ff] pt-2 text-[15px]";

  return (
    <div className="flex flex-col h-full bg-gray-50 px-6 pt-10 pb-6 overflow-y-auto">
      <h1 className="text-[28px] font-bold mb-8 text-[#1d2226] leading-tight tracking-tight">Create your<br />PopX account</h1>

      <form onSubmit={handleSubmit} className="flex flex-col flex-1">
        <div className="flex flex-col gap-6">
          <div className="relative">
            <Label className={labelClass} htmlFor="fullName">Full Name<span className="text-red-500 ml-0.5">*</span></Label>
            <Input id="fullName" placeholder="Marry Doe" className={inputClass} value={formData.fullName} onChange={handleChange} required />
          </div>

          <div className="relative">
            <Label className={labelClass} htmlFor="phoneNumber">Phone number<span className="text-red-500 ml-0.5">*</span></Label>
            <Input id="phoneNumber" placeholder="Marry Doe" className={inputClass} value={formData.phoneNumber} onChange={handleChange} required />
          </div>

          <div className="relative">
            <Label className={labelClass} htmlFor="email">Email address<span className="text-red-500 ml-0.5">*</span></Label>
            <Input id="email" type="email" placeholder="Marry Doe" className={inputClass} value={formData.email} onChange={handleChange} required />
          </div>

          <div className="relative">
            <Label className={labelClass} htmlFor="password">Password<span className="text-red-500 ml-0.5">*</span></Label>
            <Input id="password" type="password" placeholder="Marry Doe" className={inputClass} value={formData.password} onChange={handleChange} required />
          </div>

          <div className="relative">
            <Label className={labelClass} htmlFor="companyName">Company name</Label>
            <Input id="companyName" placeholder="Marry Doe" className={inputClass} value={formData.companyName} onChange={handleChange} />
          </div>

          <div className="mt-2 text-[15px]">
            <p className="mb-3 font-medium text-[#1d2226]">Are you an Agency?<span className="text-red-500 ml-0.5">*</span></p>
            <RadioGroup defaultValue="yes" className="flex gap-6 mt-2" onValueChange={(val) => setFormData({ ...formData, isAgency: val })}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="r1" className="text-[#6c25ff] border-[#6c25ff] w-5 h-5" />
                <Label htmlFor="r1" className="font-normal text-[15px] cursor-pointer">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="r2" className="text-[#6c25ff] border-[#cbcbcb] w-5 h-5 text-[#cbcbcb]" />
                <Label htmlFor="r2" className="font-normal text-[15px] cursor-pointer text-[#1d2226]">No</Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        <div className="mt-auto pt-6 pb-2">
          <Button type="submit" className="w-full h-12 bg-[#6c25ff] hover:bg-[#5b1fdb] text-white rounded-[6px] font-semibold text-[16px]">
            Create Account
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Register;
