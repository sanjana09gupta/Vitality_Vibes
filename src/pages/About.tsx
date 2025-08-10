import { useNavigate } from "react-router-dom";
import { ASSETS } from "../assets";
const About = () => {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    navigate("/booking"); // Change "/booking" to your actual booking page route
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 pt-30">
      <div className="relative rounded-lg overflow-hidden mb-8">
        <img
          src={ASSETS.BOOKIMAGE}
          alt="About Vitality Vibes"
          className="w-full h-48 object-cover"
        />
        <h1 className="absolute bottom-4 left-8 text-white text-2xl font-bold drop-shadow-lg">
          About Vitality Vibes
        </h1>
      </div>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
        <p>
          At Vitality Vibes, our vision is to be the leading wellness
          destination, offering transformative experiences that enhance the
          well-being of our clients. We strive to create a sanctuary where
          individuals can escape the stresses of daily life and embark on a
          journey of rejuvenation and self-discovery.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
        <p>
          Our mission is to provide exceptional spa services that promote
          physical, mental, and emotional balance. We are committed to using
          high-quality products, employing skilled therapists, and delivering
          personalized care to meet the unique needs of each client. We aim to
          foster a culture of wellness and inspire individuals to prioritize
          self-care in their lives.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Our Story</h2>
        <p>
          Vitality Vibes was founded in 2015 by Sarah Chen, a passionate
          advocate for holistic wellness. Inspired by her own journey of
          overcoming stress and burnout, Sarah envisioned a spa that offered
          more than just relaxation. She wanted to create a space where people
          could reconnect with themselves, restore their energy, and cultivate a
          sense of inner peace. Starting with a small team of dedicated
          professionals, Vitality Vibes quickly gained recognition for its
          exceptional service and commitment to client well-being. Today, we
          continue to uphold Sarah's vision, expanding our services and reaching
          more individuals seeking a path to vitality and balance.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-6">Meet Our Team</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-10">
          <div className="text-center">
            <img
              src={ASSETS.USER1}
              alt="Emily Carter"
              className="mx-auto rounded-full w-32 h-32 object-cover mb-2"
            />
            <p className="font-semibold">Emily Carter</p>
            <p className="text-sm text-gray-500">Lead Therapist</p>
          </div>

          <div className="text-center">
            <img
              src={ASSETS.USER2}
              alt="David Lee"
              className="mx-auto rounded-full w-32 h-32 object-cover mb-2"
            />
            <p className="font-semibold">David Lee</p>
            <p className="text-sm text-gray-500">Massage Specialist</p>
          </div>

          <div className="text-center">
            <img
              src={ASSETS.USER3}
              alt="Olivia Brown"
              className="mx-auto rounded-full w-32 h-32 object-cover mb-2"
            />
            <p className="font-semibold">Olivia Brown</p>
            <p className="text-sm text-gray-500">Aesthetician</p>
          </div>
        </div>
      </section>

      <div className="text-center">
        <button
          className="bg-transparent border border-[#7D6855] text-[#7D6855] hover:bg-[#7D6855] hover:text-[#F4F4F2] px-5 py-2 rounded-full transition"
          onClick={handleBookingClick}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default About;
