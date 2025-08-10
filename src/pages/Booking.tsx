import { useSearchParams } from "react-router-dom";
import { services } from "../Data/servicesData";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { ASSETS } from "../assets";

const Booking = () => {
  const [params] = useSearchParams();

  const selectedCategoryFromURL = params.get("category");
  const selectedServiceFromURL = params.get("service");

  const [selectedService, setSelectedService] = useState(
    selectedServiceFromURL || ""
  );
  const [selectedCategory, setSelectedCategory] = useState(
    selectedCategoryFromURL || ""
  );
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setSelectedService("");
  };

  const handleInputChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Generate time slots for all hours
  const generateTimeSlots = () => {
    const slots: string[] = [];
    for (let h = 0; h < 24; h++) {
      const hour12 = h % 12 || 12;
      const ampm = h < 12 ? "AM" : "PM";
      slots.push(`${hour12}:00 ${ampm}`);
      slots.push(`${hour12}:30 ${ampm}`);
    }
    return slots;
  };

  const isPastTime = (slot: string) => {
    const now = new Date();
    const selected = new Date(date);
    if (
      selected.toDateString() === now.toDateString() // same day
    ) {
      const [timePart, ampm] = slot.split(" ");
      let [hour, minute] = timePart.split(":").map(Number);
      if (ampm === "PM" && hour !== 12) hour += 12;
      if (ampm === "AM" && hour === 12) hour = 0;

      const slotDate = new Date(selected);
      slotDate.setHours(hour, minute, 0, 0);

      return slotDate.getTime() < now.getTime();
    }
    return false;
  };

  const handleConfirmBooking = () => {
    if (!selectedCategory && !selectedService) {
      alert("Please select a service category.");
      return;
    }
    if (!time) {
      alert("Please select a time.");
      return;
    }
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in all your details.");
      return;
    }

    // Compose your WhatsApp message
    const message = `Hello, I would like to book an appointment for ${
      selectedService || selectedCategory
    } on ${date.toDateString()} at ${time}.\nMy details:\nName: ${
      formData.name
    }\nEmail: ${formData.email}\nPhone: ${formData.phone}`;
    
    const encodedMessage = encodeURIComponent(message);

    const whatsappNumber = "8320908203";

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");

    alert(
      "Booking confirmed successfully! A WhatsApp message has been prepared."
    );
  };

  return (
    <div className="max-w-5xl mx-auto p-6 pt-30">
      {/* Banner */}
      <div className="w-full rounded-lg overflow-hidden mb-6">
        <img
          src={ASSETS.BOOKIMAGE}
          alt="Booking banner"
          className="w-full h-60 object-cover"
        />
      </div>

      <h1 className="text-3xl font-bold mb-6 text-[#7D6855]">Book an Appointment</h1>

      {/* Select Service */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3 text-[#7D6855]">Select a Service</h2>
        <div className="flex flex-wrap gap-3 text-[#7D6855]">
          {services.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => handleCategoryClick(cat.category)}
              className={`px-4 py-2 rounded-full border border-[#7D6855] text-[#7D6855] ${
                selectedCategory === cat.category
                  ? "bg-[#7D6855] text-white"
                  : "bg-white text-[#7D6855]"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>
      </div>

      {/* Choose Date & Time */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3 text-[#7D6855]">Choose Date and Time</h2>
        <div className="flex flex-col sm:flex-row gap-6">
          <Calendar value={date} onChange={(value) => setDate(value as Date)} />

          <div className="flex-1">
            <label className="block mb-1 text-sm font-medium text-[#7D6855] focus:outline-none">
              Select Time
            </label>
            <select
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="border border-[#7D6855] p-3 w-full rounded"
            >
              <option value="" className="text-[#7D6855]">Select</option>
              {generateTimeSlots().map((slot, idx) => (
                <option
                  key={idx}
                  value={slot}
                  disabled={isPastTime(slot)}
                  style={isPastTime(slot) ? { color: "#ccc" } : {}}
                >
                  {slot}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Your Info */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3 text-[#7D6855]">Your Information</h2>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleInputChange}
          className="border border-[#7D6855] p-3 w-full rounded mb-3"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className="border border-[#7D6855] p-3 w-full rounded mb-3"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleInputChange}
          className="border border-[#7D6855] p-3 w-full rounded"
        />
      </div>

      {/* Booking Summary */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-t border-[#7D6855] pt-4">
        <div className="text-sm">
          <h3 className="font-semibold mb-2 text-[#7D6855]">Booking Summary</h3>
          <p className="text-[#7D6855]">
            <strong>Service:</strong>{" "}
            {selectedService || selectedCategory || "Not Selected"}
          </p>
          <p className="text-[#7D6855]">
            <strong>Date:</strong> {date.toDateString()}
          </p>
          <p className="text-[#7D6855]">
            <strong>Time:</strong> {time || "Not selected"}
          </p>
        </div>
        <button
          onClick={handleConfirmBooking}
          className="hover:bg-[#7D6855] text-[#7D6855] hover:text-white border-[#7D6855] border px-5 py-2 rounded-full mt-4 sm:mt-0 bg-transparent"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default Booking;
