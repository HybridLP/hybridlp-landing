export default () => {
  return (
    <>
      <div id="testimonials" className="flex flex-col items-center gap-6 mt-6">
        <h6 className="text-black mx-auto h-10 bg-gray-100 w-[40%] flex items-center lg:w-[10%] justify-center rounded-md  text-center text-[16px] font-bold lato-regular">
          Testimonials
        </h6>
        
        <Carousel slides={testimonialData} autoPlayInterval={2000} />
        <p className="text-white italic mx-[5%] md:mx-0 text-center md:text-start font-normal my-8 " style={{}}>
          Join thousands of individuals and companies who are using Hybrid Law
          Practice to get their legal matters sorted! 
        </p>
      </div>
    </>
  );
};

import React, { useState, useEffect } from "react";

// Placeholder image for the testimonial
const PLACEHOLDER_IMG = "https://placehold.co/48x48/A78B00/FFFFFF?text=CL";

// TestimonialCard Component (your provided JSX, slightly adapted for props)
interface TestimonialCardProps {
  text: string;
  clientName: string;
  imageUrl: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  text,
  clientName,
  imageUrl,
}) => {
  return (
    <div
      className="bg-gradient-to-b from-[#1D1D1D] to-[#303030] text-white border-l-4 border-[#DED08A] rounded-md flex flex-col w-full p-4 md:p-6 flex-shrink-0"
      style={{
        boxShadow: "inset 0 2px 8px 3px #00000040, inset 0 0 10px #FFFFFF40",
      }}
    >
      <p className="text-sm md:text-[24px] font-normal font-sans">
       
        {text}
      </p>
      <div className="flex items-center gap-4 my-4">
        <img
          src={imageUrl}
          alt={clientName}
          className="size-12 rounded-full object-center object-cover"
          onError={(e) => {
            e.currentTarget.src = PLACEHOLDER_IMG; // Fallback image on error
          }}
        />
        <h3 className="text-white font-medium font-sans">{clientName}</h3>{" "}
        {/* Using font-sans */}
      </div>
    </div>
  );
};

// Carousel Component
interface CarouselProps {
  slides: TestimonialCardProps[];
  autoPlayInterval?: number; // Interval in milliseconds for auto-play
}

const Carousel: React.FC<CarouselProps> = ({
  slides,
  autoPlayInterval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Auto-play effect
  useEffect(() => {
    if (slides.length > 1) {
      // Only auto-play if there's more than one slide
      const interval = setInterval(nextSlide, autoPlayInterval);
      return () => clearInterval(interval); // Cleanup on component unmount
    }
  }, [currentIndex, slides.length, autoPlayInterval]); // Re-run if slides or interval changes

  return (
    <div className="relative w-full max-w-[90%] md:max-w-4xl mx-auto overflow-hidden rounded-lg">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <TestimonialCard {...slide} />
          </div>
        ))}
      </div>
    </div>
  );
};

const testimonialData = [
  {
    text: "Hybrid LP completely changed the way we handle legal matters. We submitted a brief, got connected to a commercial law expert within minutes, and had our contracts reviewed faster than ever — all without stepping into an office!",
    clientName: "Client A",
    imageUrl: PLACEHOLDER_IMG,
  },
  {
    text: "The efficiency and expertise provided by Hybrid LP are unmatched. Our legal team can now focus on strategy while routine reviews are handled seamlessly. A truly innovative solution!",
    clientName: "Client B",
    imageUrl: PLACEHOLDER_IMG,
  },
  {
    text: "Navigating legal complexities used to be a headache. With Hybrid LP, it's a breeze. The platform is intuitive, and the legal professionals are incredibly responsive. Highly recommended!",
    clientName: "Client C",
    imageUrl: PLACEHOLDER_IMG,
  },
  {
    text: "We needed quick, reliable legal advice for a new venture, and Hybrid LP delivered beyond our expectations. The process was transparent, and the quality of service was exceptional.",
    clientName: "Client D",
    imageUrl: PLACEHOLDER_IMG,
  },
];
