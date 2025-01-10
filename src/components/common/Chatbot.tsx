"use client";
import React, { useState, useEffect, useRef } from "react";
import {X } from "lucide-react";
import { toast } from "react-hot-toast";
import Image from "next/image";

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: string; content: string }[]>([
        { role: "ai", content: "Hi! How can I assist you today?" },
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const chatEndRef = useRef<HTMLDivElement>(null);

    const handleSendMessage = async () => {
        if (!input.trim()) return;

        setMessages((prev) => [...prev, { role: "user", content: input }]);
        setInput("");
        setIsLoading(true);

        try {
            const response = await fetch("/api/ai", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ text: input }),
            });

            if (!response.ok) {
                throw new Error("Failed to fetch response.");
            }

            const data = await response.json();

            setMessages((prev) => [...prev, { role: "ai", content: data.candidates[0].content.parts[0].text }]);

        } catch {
            toast.error("Failed to get a response.");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => { 
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="fixed right-4 bottom-10 z-50">
            
            <div
                className={`group flex items-center justify-center p-2 rounded-full shadow-md transform transition-all duration-300 bg-gray-200 dark:bg-gray-700 cursor-pointer w-12 h-12`}
                onClick={() => setIsOpen((prev) => !prev)}
            >
                {isOpen ? (
                    <X className="w-8 h-8 text-red-500" />
                ) : (
                    <Image src={'https://radius-ois.ai/wp-content/uploads/2024/12/Group-6-2.svg'} width={500} height={500} alt="chatbot" className="w-6 h-6 "/>
                     
                )}
            </div>
 
            {isOpen && (
                <div
                    className="overflow-hidden absolute bottom-16 right-0 w-72 min-h-96 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg   flex flex-col"
                >
                    {/* Chat Header */}
                    <div className=" bg-gray-100 dark:bg-gray-700 p-4 text-sm font-semibold text-gray-800 dark:text-white">
                        AI Chatbot
                    </div>
 
                    <div
                        className="flex-1 p-4 space-y-4 overflow-y-scroll scrollbar-none"
                        style={{ maxHeight: "300px" }}
                    >
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`flex ${message.role === "ai" ? "justify-start" : "justify-end"}`}
                            >
                                <div
                                    className={`p-3 rounded-lg shadow-md text-xs ${message.role === "ai"
                                        ? "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
                                        : "bg-blue-500 text-white"
                                        }`}
                                >
                                    {message.content}
                                </div>
                            </div>
                        ))}
 
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="p-3 text-xs text-gray-800 dark:text-white animate-pulse">
                                    Typing...
                                </div>
                            </div>
                        )}
 
                        <div ref={chatEndRef} />
                    </div>
 
                    <div className="p-4 border-t border-gray-200 dark:border-gray-700 text-xs">
                        <div className="flex items-center space-x-2">
                            <input
                                type="text"
                                className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
                                placeholder="Type your message..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                            />
                            <button
                                className="p-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                                onClick={handleSendMessage}
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
