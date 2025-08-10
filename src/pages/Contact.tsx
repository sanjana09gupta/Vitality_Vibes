import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useState } from "react";
import emailjs from "emailjs-com";
const containerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "12px",
};

const locations = [
  {
    name: "Ahmedabad",
    position: { lat: 23.0225, lng: 72.5714 },
  },
  {
    name: "Gandhinagar",
    position: { lat: 23.2156, lng: 72.6369 },
  },
];
const Contact = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const phoneNumber = "8320908203";

  const handleChange = (e: any) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const whatsappMessage = `Hello, I would like to contact you.
Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappUrl, "_blank");

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "guptass0919@gmail.com",
        },
        "YOUR_USER_ID"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Failed to send message, please try again.");
          console.error(error.text);
        }
      );
  };
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 pt-30 font-sans">

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-[#7D6855]">Contact Us</h1>
        <p className="text-gray-500 mt-1">
          We’re here to help. Reach out to us with any questions or to book your
          next spa experience.
        </p>

        <div className="mt-6">
          <h3 className="text-lg font-semibold">Our Locations</h3>
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={{ lat: 23.119, lng: 72.604 }}
              zoom={10}
            >
              {locations.map((loc, index) => (
                <Marker key={index} position={loc.position} />
              ))}
            </GoogleMap>
          ) : (
            <p>Loading map...</p>
          )}
        </div>
      </div>

      <section className="mt-6 border-t pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-[#7D6855]">
        <div>
          <h4 className="font-semibold">Phone</h4>
          <p>+91 8320908203</p>
        </div>
        <div>
          <h4 className="font-semibold">Email</h4>
          <p>info@vitalityvibes.com</p>
        </div>
      </section>

      <section className="mt-6">
        <h3 className="text-lg font-semibold text-[#7D6855]">Send Us a Message</h3>
        <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 text-[#7D6855]">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 rounded-md border border-gray-300 bg-[#faf6f4] focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-[#7D6855]">Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded-md border border-gray-300 bg-[#faf6f4] focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-[#7D6855]">Your Message</label>
            <textarea
              name="message"
              placeholder="Type your message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 rounded-md border border-gray-300 bg-[#faf6f4] focus:outline-none focus:ring-2 focus:ring-orange-400 h-28"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="hover:bg-[#7D6855] text-[#7D6855] hover:text-white border-[#7D6855] border px-4 py-2 rounded-md font-medium w-fit"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
