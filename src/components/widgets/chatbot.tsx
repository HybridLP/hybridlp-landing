import { useState, useRef, useEffect } from "react";
import { X, Send, Bot } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

export default function LegalChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your Legal AI Assistant powered by DeepSeek AI. I can help you understand HybridLP's legal services platform and answer general legal questions. How may I assist you today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (inputMessage.trim() === "") return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    // const currentInput = inputMessage;
    setInputMessage("");

    // Add typing indicator
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Robot Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 bg-gradient-to-br from-[#C8A702] via-[#A97D00] to-[#824E00] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 ${
          isOpen ? "hidden" : "flex"
        } items-center justify-center group`}
        aria-label="Open Legal AI Chatbot"
      >
        <Bot className="w-7 h-7 group-hover:animate-wiggle" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
      </button>

      {/* Chatbot Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeUp">
          <div className="bg-gradient-to-b from-gray-900 to-black w-full max-w-2xl h-[600px] rounded-2xl shadow-2xl flex flex-col border border-[#C8A702]/30 animate-fadeUp">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-800 bg-gradient-to-r from-[#C8A702]/20 to-[#824E00]/20">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-[#C8A702] via-[#A97D00] to-[#824E00] p-2 rounded-full">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold lato-semibold text-lg">
                    Legal AI Assistant
                  </h3>
                  <p className="text-gray-400 text-xs lato-regular">
                    Powered by DeepSeek AI • Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full"
                aria-label="Close chatbot"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  } animate-fadeUp`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.sender === "user"
                        ? "bg-gradient-to-br from-[#C8A702] via-[#A97D00] to-[#824E00] text-white"
                        : message.text === "Typing..."
                        ? "bg-gray-800 text-gray-100 border border-gray-700 animate-pulse"
                        : "bg-gray-800 text-gray-100 border border-gray-700"
                    }`}
                  >
                    <p className="text-sm lato-regular leading-relaxed">
                      {message.text}
                    </p>
                    {message.text !== "Typing..." && (
                      <p
                        className={`text-xs mt-1 ${
                          message.sender === "user"
                            ? "text-white/70"
                            : "text-gray-500"
                        }`}
                      >
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-gray-800 bg-gray-900/50">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about legal services..."
                  className="flex-1 bg-gray-800 text-white px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#C8A702] lato-regular text-sm border border-gray-700"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={inputMessage.trim() === ""}
                  className="bg-gradient-to-br from-[#C8A702] via-[#A97D00] to-[#824E00] text-white p-3 rounded-full hover:opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
                  aria-label="Send message"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              <p className="text-gray-500 text-xs mt-2 text-center lato-regular">
                For specific legal advice, please connect with our verified
                lawyers
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
