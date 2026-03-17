import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuthStore } from '@/store/authStore';

const Login = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    const currentUser = useAuthStore.getState().currentUser;
    if (currentUser) {
      navigate('/profile');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-50 px-6 pt-10 pb-12">
      <h1 className="text-[28px] font-bold mb-2 text-[#1d2226] leading-tight tracking-tight">Signin to your<br />PopX account</h1>
      <p className="text-[#8e8e8e] mb-8 text-[16px] leading-relaxed max-w-[280px]">
        Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div className="space-y-1 relative">
          <Label className="absolute -top-2 left-3 bg-gray-50 px-1 text-[13px] text-[#6c25ff] z-10 font-semibold tracking-wide" htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter email address"
            className="h-12 border-[#cbcbcb] rounded-[6px] pt-2 text-[15px] bg-gray-50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="space-y-1 relative mt-[2px]">
          <Label className="absolute -top-2 left-3 bg-gray-50 px-1 text-[13px] text-[#6c25ff] z-10 font-semibold tracking-wide" htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter password"
            className="h-12 border-[#cbcbcb] rounded-[6px] focus-visible:ring-1 focus-visible:ring-[#6c25ff] pt-2 text-[15px] bg-gray-50"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <Button
          type="submit"
          className={`w-full h-12 mt-2 rounded-[6px] font-semibold text-[16px] ${email && password ? 'bg-[#6c25ff] hover:bg-[#5b1fdb] text-white' : 'bg-[#cbcbcb] text-white cursor-not-allowed hover:bg-[#cbcbcb]'
            }`}
          disabled={!email || !password}
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
