"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from 'next/navigation';
import Cookies from "js-cookie";


const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '', 
    password: ''
  });
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const validateForm = () => {
    const { email, password } = formData;
    if (!email  || !password) {
      toast.error('Please fill out all fields.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    const {email,password} = formData; 
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email,password}),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Login successful!');
        setFormData({email: '', password: ''});
        localStorage.setItem('userId', data.userId);
        Cookies.set('token', data.token);
        router.push("/ad/dashboard")
      } else {
        toast.error(data.message || 'Registration failed.');
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  return ( 
    <>
    <div className="rounded-xl shadow-md shadow-orange-50 md:p-4 p-2  border border-orange-200  dark:border-orange-100 px-8">
      <div className="flex flex-col items-center mb-4 justify-center">
        <Image
          src="https://res.cloudinary.com/dbqq41bpc/image/upload/v1736224916/favicon1_ozoyr4.webp"
          width={600}
          height={600}
          alt="logo"
          className="w-16 h-16 mb-2"
        />
        <h1 className='text-2xl'>Login</h1>
      </div>
      <form onSubmit={handleSubmit} className='space-y-4'>
 
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your Email"
            className="w-96 p-3 border border-gray-700 outline-none bg-transparent rounded-md"
          />
        </div> 
 
       <div className="relative">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your Password"
              className="w-96 p-3 border border-gray-700 outline-none bg-transparent rounded-md"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-10 text-gray-500 hover:text-gray-700 dark:text-gray-300"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        

        <div className="text-sm mb-4 text-right">
           
          <Link href="/ad/auth/recover-password" className=" hover:underline">
              Forgot Password
            </Link>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full border ${
            loading ? 'bg-orange-300 cursor-not-allowed' : 'border-orange-300 bg-orange-400'
          } text-black dark:text-gray-100 font-medium py-3 rounded-md mb-4`}
        >
          {loading ? 'Welcome to Nutron...' : 'Login'}
        </button>

        <div className="text-start text-sm">
         Don't Have A account !! Please <Link href={'/ad/auth/register'} className='hover:underline'>Create new  Account</Link> 
        </div>
 
      </form>
    </div>
    
    
    </>
      
  );
};

export default LoginForm;
