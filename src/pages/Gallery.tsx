import { useState } from "react";
import { ASSETS } from "../assets";
const Gallery = () => {
  // const [uploadedImages, setUploadedImages] = useState([]);

  const services = [
    {
      title: "Relaxing Massage",
      desc: "Experience ultimate relaxation with our signature massage.",
      img: ASSETS.RELAXING,
    },
    {
      title: "Facial Treatment",
      desc: "Rejuvenate your skin with our advanced facial treatments.",
      img: ASSETS.FACIALTREAT,
    },
    {
      title: "Sauna Experience",
      desc: "Detoxify and unwind in our state-of-the-art sauna.",
      img: ASSETS.SAUNA,
    },
    {
      title: "Manicure & Pedicure",
      desc: "Pamper your hands and feet with our expert nail care.",
      img: ASSETS.MANIPADI,
    },
    {
      title: "Yoga Session",
      desc: "Find your inner peace with our guided yoga sessions.",
      img: ASSETS.YOGA,
    },
    {
      title: "Aromatherapy",
      desc: "Enhance your well-being with our therapeutic aromatherapy.",
      img: ASSETS.AROMATHERAPY,
    },
  ];

  // const spaAmbiance = [
  //   "/images/spa1.jpg",
  //   "/images/spa2.jpg",
  //   "/images/spa3.jpg",
  // ];

  // const handleImageUpload = (e) => {
  //   const files = Array.from(e.target.files);
  //   const newImages = files.map((file) => URL.createObjectURL(file));
  //   setUploadedImages((prev) => [...prev, ...newImages]);
  // };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold">Gallery</h1>
      <p className="text-gray-500 mb-6">
        Explore the serene ambiance and luxurious treatments at Serene Spa
        through our visual gallery.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <div key={index} className="text-center">
            <img
              src={service.img}
              alt={service.title}
              className="rounded-lg w-full h-48 object-cover"
            />
            <h3 className="mt-2 font-semibold">{service.title}</h3>
            <p className="text-sm text-gray-500">{service.desc}</p>
          </div>
        ))}
      </div>

      {/* Spa Ambiance */}
      {/* <h2 className="text-xl font-bold mt-10 mb-4">Spa Ambiance</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {spaAmbiance.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt="Spa ambiance"
            className="rounded-lg w-full h-48 object-cover"
          />
        ))}
      </div> */}
      {/* 
      {uploadedImages.length > 0 && (
        <>
          <h2 className="text-xl font-bold mt-10 mb-4">Guest Uploads</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {uploadedImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Upload ${idx}`}
                className="rounded-lg w-full h-48 object-cover"
              />
            ))}
          </div>
        </>
      )} */}

      {/* <div className="mt-6">
        <label className="block mb-2 font-semibold">
          Upload Your Own Spa Moments
        </label>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageUpload}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 
            file:px-4 file:rounded-full file:border-0 
            file:text-sm file:font-semibold 
            file:bg-orange-50 file:text-orange-700 
            hover:file:bg-orange-100"
        />
      </div> */}

      {/* Video */}
      <h2 className="text-xl font-bold mt-10 mb-4">Customer Experiences</h2>
      <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/cIOTHiydsJM"
          title="Massage Experience"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>

      <p className="mt-4 text-gray-500 text-center">
        Discover the tranquility and luxury that await you at Serene Spa. Our
        gallery offers a glimpse into the serene environment and exceptional
        services we provide. From soothing massages to rejuvenating facials, our
        spa is designed to help you unwind and revitalize. Book your experience
        today and embark on a journey of relaxation and well-being.
      </p>
    </div>
  );
};

export default Gallery;
