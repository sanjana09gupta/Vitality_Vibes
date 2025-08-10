import { ASSETS } from "../assets";
import * as motion from "motion/react-client";
import type { Variants } from "motion/react";
import { Link } from "react-router-dom";

const services = [
  {
    image: ASSETS.MASSAGE,
    title: "Massage Therapy",
    description:
      "Experience the healing touch of our expert therapists with a variety of massage techniques.",
  },
  {
    image: ASSETS.FACIAL,
    title: "Facial Treatments",
    description:
      "Revitalize your skin with our customized facial treatments using premium products.",
  },
  {
    image: ASSETS.BODYSCRUB,
    title: "Body Scrubs",
    description:
      "Exfoliate and nourish your skin with our invigorating body scrubs, leaving you feeling refreshed.",
  },
];

const reviews = [
  {
    name: "Sophia R.",
    text: "Absolutely loved my massage therapy session! I felt so relaxed and refreshed afterwards. Highly recommended.",
    image: ASSETS.USER1, // replace with your image asset
  },
  {
    name: "David P.",
    text: "The facial treatment was heavenly! My skin feels so smooth and glowing. Will definitely come back.",
    image: ASSETS.USER2,
  },
  {
    name: "Emma W.",
    text: "Wonderful experience! The staff were friendly, and the atmosphere was so peaceful. A true escape.",
    image: ASSETS.USER3,
  },
];

function ServiceCard({ image, title, description }: any) {
  return (
    <Link to="/services" className="block h-full">
      <motion.div
        className="overflow-hidden rounded-2xl bg-white shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 0.6 }}
      >
        <motion.img
          src={image}
          alt={title}
          className="w-full h-60 object-cover"
          variants={imageVariants}
        />
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold mb-2 text-[#7D6855]">{title}</h3>
          <p className="text-[#7D6855] flex-grow">{description}</p>
        </div>
      </motion.div>
    </Link>
  );
}


const imageVariants: Variants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.8,
    },
  },
};

const Home = () => {
  return (
    <>
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${ASSETS.BACKGROUND})` }}
      >
    
        <div className="absolute inset-0 backdrop-blur-md bg-black/40"></div>

     
        <div className="relative z-10 flex items-center justify-center h-full text-white px-6">
          <div className="max-w-3xl text-center space-y-6">
            <h1 className="text-5xl font-bold leading-tight">
              Welcome to Vitality Vibes
            </h1>
            <h2 className="text-lg md:text-xl leading-relaxed">
              Indulge in a world of tranquility and rejuvenation. Our spa offers
              a sanctuary where you can escape the stresses of daily life and
              immerse yourself in a range of luxurious treatments designed to
              restore your mind, body, and spirit.
            </h2>
            <Link to="/services">
              <button
                className="border border-[#F4F4F2] text-[#F4F4F2] bg-transparent px-6 py-3 rounded-2xl 
                        transition-all duration-300 ease-in-out 
                        hover:bg-[#F4F4F2] hover:text-[#7D6855] hover:scale-105"
              >
                Explore Services
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-10 text-[#7D6855]">Featured Services</h2>

     
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {services.map((service, i) => (
            <ServiceCard key={i} i={i} {...service} />
          ))}
        </div>

      
        <div className="flex justify-center mt-10">
          <Link to="/services">
            <button className="bg-transparent border border-[#7D6855] text-[#7D6855] hover:bg-[#7D6855] hover:text-[#F4F4F2] px-5 py-2 rounded-full transition">
              View All Services
            </button>
          </Link>
        </div>
      </div>
      
      <div className="bg-[#F9F7F3] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-[#7D6855]">
            What Our Customers Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center flex flex-col items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-[#7D6855] mb-4"
                />
                <p className="text-gray-600 italic mb-4">"{review.text}"</p>
                <h4 className="text-lg font-semibold text-[#7D6855]">
                  {review.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
