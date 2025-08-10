import { services } from "../Data/servicesData";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type Service = {
  name: string;
  duration: string;
  price: string;
  description: string;
};

const Services = () => {
  const [selectedService, setSelectedService] = useState<{
    service: Service;
    category: string;
  } | null>(null);

  const navigate = useNavigate();

  const navigateToBooking = (categoryName: string, serviceName: string) => {
    navigate(
      `/booking?category=${encodeURIComponent(categoryName)}&service=${encodeURIComponent(serviceName)}`
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 pt-30">
      <h1 className="text-4xl font-bold mb-4">Our Services</h1>
      <p className="text-gray-600 mb-10">
        Explore our range of rejuvenating treatments designed to enhance your
        well-being and leave you feeling refreshed.
      </p>

      {services.map((category, idx) => (
        <div key={idx} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">{category.category}</h2>
          {category.items.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              onClick={() =>
                setSelectedService({ service: service, category: category.category })
              }
              className="flex flex-col md:flex-row items-center md:items-start gap-6 p-4 rounded-lg mb-8 border border-gray-200 cursor-pointer"
            >
              <div className="flex-1">
                <p className="font-medium">{service.name}</p>
                <p className="text-sm text-gray-500">
                  {service.duration} - {service.price}
                </p>
              </div>
              <div className="flex-shrink-0">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      ))}

      {selectedService && (
        <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex justify-center items-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white p-6 rounded-lg max-w-lg h-[50%] w-full shadow-lg flex flex-col justify-center"
          >
            <h2 className="text-xl font-bold mb-2">{selectedService.service.name}</h2>
            <p className="text-sm text-gray-500 mb-2">
              {selectedService.service.duration} - {selectedService.service.price}
            </p>
            <p className="mb-4">{selectedService.service.description}</p>
            <button
              className="bg-[#7D6855] text-white px-4 py-2 rounded-full hover:bg-[#5c4737]"
              onClick={() =>
                navigateToBooking(
                  selectedService.category,
                  selectedService.service.name
                )
              }
            >
              Book Now
            </button>
            <button
              className="ml-4 text-gray-600 hover:underline"
              onClick={() => setSelectedService(null)}
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Services;
