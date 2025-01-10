"use client"
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const AiChatbot: React.FC = () => {
  const [messages, setMessages] = useState<{ role: "user" | "ai"; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!input.trim()) {
      toast.error("Message cannot be empty!");
      return;
    }
 
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
 
      setMessages((prev) => [...prev, { role: "ai", content:  data.candidates[0].content.parts[0].text }]);
      toast.success("Message sent!");
    } catch (error) {
      console.log(error);
      toast.error("Failed to get a response.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gray-100">
      <Toaster position="top-center" reverseOrder={false} />
   
      <div className="w-full max-w-2xl p-4 bg-white shadow-md rounded-lg mt-5 flex-grow">
        <h1 className="text-xl font-bold text-center text-gray-700 mb-4">Gemini Helper</h1>
        <div className="max-h-[80vh] overflow-y-scroll border-t border-b border-gray-200 p-4">
       
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              } mb-4`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg shadow ${
                  message.role === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
         
          {isLoading && (
            <div className="flex justify-start mb-4">
              <div className="w-24 h-6 bg-gray-300 animate-pulse rounded-lg"></div>
            </div>
          )}
        </div>
      </div>
   
      <div className="w-full max-w-2xl p-4">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            className="flex-grow px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-200"
            onClick={handleSendMessage}
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AiChatbot;
