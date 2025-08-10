import { ASSETS } from "../assets";

export const services = [
  {
    category: "Body Massage",
    items: [
      {
        name: "Relaxing Body Massage",
        duration: "60 minutes",
        price: "$90",
        description:
          "Indulge in a soothing full-body massage designed to melt away stress and tension. Our skilled therapists use a blend of essential oils and techniques to promote relaxation and rejuvenation.",
        image: ASSETS.MASSAGEIMAGE
      }
    ]
  },
  {
    category: "Body Scrub with Honey",
    items: [
      {
        name: "Honey Body Scrub",
        duration: "45 minutes",
        price: "$75",
        description:
          "Exfoliate and nourish your skin with our luxurious honey body scrub. This treatment gently removes dead skin cells, leaving your skin soft, smooth, and radiant.",
        image: ASSETS.SCRUBIMG
      }
    ]
  },
  {
    category: "Body Mask with Honey",
    items: [
      {
        name: "Honey Body Mask",
        duration: "45 minutes",
        price: "$85",
        description:
          "Pamper your skin with our hydrating honey body mask. This treatment deeply moisturizes and revitalizes your skin, leaving it feeling supple and refreshed.",
        image: ASSETS.MASKIMG
      }
    ]
  },
  {
    category: "Traditional Facial",
    items: [
      {
        name: "Classic Facial",
        duration: "60 minutes",
        price: "$100",
        description:
          "Experience our classic facial, tailored to your skin type. This treatment includes cleansing, exfoliation, a mask, and moisturizing to leave your skin glowing and healthy.",
        image: ASSETS.FACIALIMG
      }
    ]
  }
];
