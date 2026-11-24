import { useState } from "react";
import { newsletterService } from "../../../services/newsletterService";

export default () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleSubscribe = async () => {
    if (!email.trim()) {
      setMessage({ type: "error", text: "Please enter your email" });
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const response = await newsletterService.subscribe(email);
      setMessage({
        type: "success",
        text: response.message || "Successfully subscribed!",
      });
      setEmail("");
    } catch (error: any) {
      const errorMsg =
        error.response?.data?.error || "Failed to subscribe. Please try again.";
      setMessage({ type: "error", text: errorMsg });
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubscribe();
    }
  };

  return (
    <div className="w-full md:w-1/2 lg:w-[30%] flex flex-col space-y-3 sm:space-y-4 mt-6 sm:mt-8 lg:mt-[10%]">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-[10%]">
        Blog Posts
      </h1>
      <p className="text-sm sm:text-base text-white/90">
        New updates, latest in legal tool features, legal insights, and
        professional guides.
      </p>
      <div className="flex flex-col gap-4 md:gap- sm:flex-row items-stretch sm:items-center rounded-lg overflow-hidden border border-[#545454]">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={loading}
          className="p-3 sm:p-4 flex-1 text-sm sm:text-base"
          placeholder="Enter your email"
        />
        <button
          onClick={handleSubscribe}
          disabled={loading}
          className="bg-white rounded-none sm:rounded-lg sm:mx-1 sm:my-1 px-4 sm:px-6 py-3 sm:py-3 text-black lato-thin text-sm sm:text-base hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Subscribing..." : "Subscribe"}
        </button>
      </div>
      {message && (
        <p
          className={`text-sm ${
            message.type === "success" ? "text-green-400" : "text-red-400"
          }`}
        >
          {message.text}
        </p>
      )}
    </div>
  );
};
