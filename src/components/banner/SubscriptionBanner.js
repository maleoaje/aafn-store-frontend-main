import { useState } from "react";
import Image from "next/image";

const SubscriptionBanner = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Add subscription logic here
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <div className="relative w-full h-[400px] md:h-[450px] overflow-hidden rounded-lg">
      {/* Background Image */}
      <Image
        src="/subs.webp"
        alt="Subscription background"
        fill
        className="object-cover"
        priority={false}
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-10 w-full">
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">
              Stay home & get your daily needs from our shop
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-6">
              Start Your Daily Shopping with{" "}
              <span className="text-primary-600 font-semibold">
                All American Foods Network
              </span>
            </p>

            {/* Subscription Form */}
            <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md">
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-primary-600 transition-colors"
                />
              </div>
              <button
                type="submit"
                className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-full transition-colors duration-200 shadow-lg whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionBanner;
