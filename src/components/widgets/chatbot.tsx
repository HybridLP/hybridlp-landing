import { useState, useRef, useEffect } from "react";
import { X, Send, Bot } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import axios from "axios";
import logo from "../../assets_/logo/favIcon.png";

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
      text: "Hello! I'm your **HybridLP AI Assistant**. I can help you understand our legal services platform, explain our practice areas, or answer general legal questions.\n\nHow can I help you today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async () => {
    if (inputMessage.trim() === "" || isLoading) return;

    const userText = inputMessage;
    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text: userText,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      // Prepare history for API
      const history = messages
        .filter((m) => m.text !== "Typing...")
        .map((m) => ({
          role: m.sender === "user" ? "user" : "assistant",
          content: m.text,
        }));

      const response = await axios.post(
        "https://api.hybridlp.com/api/chatbot/message",
        {
          message: userText,
          conversationHistory: history,
        },
        { timeout: 60000 }
      );

      const aiMessage: Message = {
        id: Date.now() + Math.random(),
        text: response.data.message,
        sender: "ai",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error: any) {
      console.error("Chatbot Error:", error);

      let errorText =
        "I'm having trouble connecting to the legal knowledge base right now. Please try again or [Contact Support](https://www.hybridlp.com/contact).";

      if (error.response?.status === 429) {
        errorText =
          "You've sent quite a few messages! Please wait a few minutes before we continue our conversation.";
      }

      const errorMessage: Message = {
        id: Date.now() + 2,
        text: errorText,
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
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
                  <img
                    src={logo}
                    className="w-6 h-6 text-white object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-white font-semibold lato-semibold text-lg">
                    HybridLP Assistant
                  </h3>
                  <p className="text-[#C8A702] text-xs lato-regular">
                    • Active
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
                    className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                      message.sender === "user"
                        ? "bg-gradient-to-br from-[#C8A702] via-[#A97D00] to-[#824E00] text-white"
                        : "bg-gray-800/80 text-gray-100 border border-gray-700/50 backdrop-blur-sm"
                    }`}
                  >
                    <div className="text-sm lato-regular leading-relaxed chatbot-markdown">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          p: ({ children }) => (
                            <p className="mb-3 last:mb-0 leading-relaxed">
                              {children}
                            </p>
                          ),
                          ul: ({ children }) => (
                            <ul className="list-disc ml-5 mb-3 space-y-1">
                              {children}
                            </ul>
                          ),
                          ol: ({ children }) => (
                            <ol className="list-decimal ml-5 mb-3 space-y-1">
                              {children}
                            </ol>
                          ),
                          li: ({ children }) => (
                            <li className="pl-1 italic text-gray-200">
                              {children}
                            </li>
                          ),
                          a: ({ href, children }) => (
                            <a
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#C8A702] font-bold underline decoration-[#C8A702]/30 hover:decoration-[#C8A702] transition-all"
                            >
                              {children}
                            </a>
                          ),
                          strong: ({ children }) => (
                            <span className="font-bold text-[#E5C100] drop-shadow-sm">
                              {children}
                            </span>
                          ),
                        }}
                      >
                        {message.text}
                      </ReactMarkdown>
                    </div>
                    <p
                      className={`text-[10px] mt-2 ${
                        message.sender === "user"
                          ? "text-white/60 text-right"
                          : "text-gray-500"
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start animate-fadeUp">
                  <div className="bg-gray-800/50 text-gray-400 rounded-2xl px-4 py-3 border border-gray-700/30">
                    <div className="flex gap-3 items-center">
                      <div className="flex gap-1.5">
                        <div
                          className="w-1.5 h-1.5 bg-[#C8A702] rounded-full animate-bounce"
                          style={{ animationDelay: "0ms" }}
                        />
                        <div
                          className="w-1.5 h-1.5 bg-[#C8A702] rounded-full animate-bounce"
                          style={{ animationDelay: "150ms" }}
                        />
                        <div
                          className="w-1.5 h-1.5 bg-[#C8A702] rounded-full animate-bounce"
                          style={{ animationDelay: "300ms" }}
                        />
                      </div>
                      <span className="text-xs text-[#C8A702]/80 italic lato-regular">
                        AI is working on findings...
                      </span>
                    </div>
                  </div>
                </div>
              )}
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
                  disabled={isLoading}
                  placeholder="Ask me about our services or legal help..."
                  className="flex-1 bg-gray-800/80 text-white px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#C8A702] lato-regular text-sm border border-gray-700/50 placeholder:text-gray-500 disabled:opacity-50"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={inputMessage.trim() === "" || isLoading}
                  className="bg-gradient-to-br from-[#C8A702] via-[#A97D00] to-[#824E00] text-white p-3.5 rounded-full hover:shadow-[0_0_15px_rgba(200,167,2,0.4)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
                  aria-label="Send message"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              <p className="text-gray-500 text-[10px] mt-3 text-center lato-regular uppercase tracking-wider">
                Submission of brief starts with
                <a
                  href="/briefspace/signup"
                  className="text-[#C8A702] hover:underline ml-1"
                >
                  Signing Up
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
