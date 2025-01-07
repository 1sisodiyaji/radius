"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import toast from "react-hot-toast"; 
import { useRouter } from "next/navigation";
const PasswordRecovery: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    otp: ["", "", "", "", "", ""],
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<"sendOtp" | "verifyOtp" | "resetPassword">(
    "sendOtp"
  ); 
  const otpRefs = useRef<HTMLInputElement[]>([]);

 const handleInputOtpChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    if (value.length > 1) return;

    const newOtp = [...formData.otp];
    newOtp[index] = value;

    setFormData((prev) => ({ ...prev, otp: newOtp }));

    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace") {
      const newOtp = [...formData.otp];
      newOtp[index] = "";

      setFormData((prev) => ({ ...prev, otp: newOtp }));

      if (index > 0 && !formData.otp[index]) {
        otpRefs.current[index - 1]?.focus();
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = (step: string) => {
    if (step === "sendOtp" && !formData.email) {
      toast.error("Please fill Email.");
      return false;
    }
    if (step === "verifyOtp" && formData.otp.includes("")) {
      toast.error("Please fill out all OTP fields.");
      return false;
    }
    if (step === "resetPassword" && !formData.password) {
      toast.error("Please fill out the password fields.");
      return false;
    }
    return true;
  };

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm("sendOtp")) return;

    setLoading(true);

    try {
      const response = await fetch("/api/auth/otp/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: formData.email }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("OTP sent successfully!");
        setStep("verifyOtp");
      } else {
        toast.error(data.message || "Failed to send OTP.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm("verifyOtp")) return;

    setLoading(true);

    try {
      const response = await fetch("/api/auth/otp/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          otp: formData.otp.join(""),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("OTP verification successful!");
        setStep("resetPassword");
      } else {
        toast.error(data.message || "OTP verification failed.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm("resetPassword")) return;
    
    if(formData.password !== formData.confirmPassword){
      toast.error("Passwords do not match.");
      return;
    }
    setLoading(true);

    try {
      const response = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Password reset successful!");
        router.push("/ad/auth/login")
      } else {
        toast.error(data.message || "Password reset failed.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-xl shadow-md shadow-orange-50 md:p-4 p-2 border border-yellow-200 dark:border-yellow-100 px-8">
      <div className="flex flex-col items-center mb-4 justify-center">
        <Image
          src="https://res.cloudinary.com/dbqq41bpc/image/upload/v1736224916/favicon1_ozoyr4.webp"
          width={600}
          height={600}
          alt="logo"
          className="w-16 h-16 mb-2"
        />
        <h1 className="text-2xl">
          {step === "sendOtp"
            ? "Recover Password"
            : step === "verifyOtp"
            ? "Verify OTP"
            : "Reset Password"}
        </h1>
      </div>

      {step === "sendOtp" && (
        <form onSubmit={handleSendOtp} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => handleInputChange(e)}
              placeholder="Enter your Email"
              className="w-80 p-3 border border-gray-700 outline-none bg-transparent rounded-md"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full border ${loading ? "bg-orange-300 cursor-not-allowed" : "border-orange-300 bg-orange-400"} text-black dark:text-gray-100 font-medium py-3 rounded-md mb-4`}
          >
            {loading ? "Sending Otp ..." : "Send Otp"}
          </button>
        </form>
      )}

      {step === "verifyOtp" && (
        <form onSubmit={handleVerifyOtp} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => handleInputChange(e)}
              placeholder="Enter your Email"
              className="w-80 p-3 border border-gray-700 outline-none bg-transparent rounded-md"
              disabled
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">OTP</label>
            <div className="flex justify-center items-center md:space-x-2 space-x-1">
              {formData.otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={digit} 
                ref={(el) => {
                  if (el) otpRefs.current[index] = el;
                }}
                // ref={(el) => (otpRefs.current[index] = el!)}
                onChange={(e) => handleInputOtpChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-12 h-12 text-center border border-gray-700 outline-none bg-transparent rounded-md"
              />
            ))}
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full border ${loading ? "bg-yellow-300 cursor-not-allowed" : "border-orange-300 bg-orange-400"} text-black dark:text-gray-100 font-medium py-3 rounded-md mb-4`}
          >
            {loading ? "Verifying OTP..." : "Verify OTP"}
          </button>
        </form>
      )}

      {step === "resetPassword" && (
        <form onSubmit={handleResetPassword} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={(e) => handleInputChange(e)}
              placeholder="Enter your Password"
              className="w-80 p-3 border border-gray-700 outline-none bg-transparent rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={(e) => handleInputChange(e)}
              placeholder="Confirm your Password"
              className="w-80 p-3 border border-gray-700 outline-none bg-transparent rounded-md"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full border ${loading ? "bg-yellow-300 cursor-not-allowed" : "border-orange-300 bg-orange-400"} text-black dark:text-gray-100 font-medium py-3 rounded-md mb-4`}
          >
            {loading ? "Updating Password ..." : "Reset Password"}
          </button>
        </form>
      )}
    </div>
  );
};

export default PasswordRecovery;
