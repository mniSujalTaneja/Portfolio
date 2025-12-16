import kuroImg from "../../assets/kuro.png";
import ecommerceImg from "../../assets/ecommerce.png"; // add image when you have it

export const projectsData = [
  {
    id: 1,
    title: "KURO – AI Chat Assistant",
    description:
      "A modern AI-powered chatbot supporting voice and text input with features like weather updates, jokes, wiki summaries, and math calculations. Built with a clean, responsive UI.",
    image: kuroImg,
    technologies: ["React", "Vite", "Tailwind CSS", "Speech Recognition"],
    video: "https://youtu.be/jES3qBS1738?si=6dHi_DChRYUV7pW8",
    github: "https://github.com/mniSujalTaneja/KURO",
    demo: "https://kuro-ai-three.vercel.app/",
  },
  {
    id: 2,
    title: "Fashion E-Commerce Store",
    description:
      "A full-featured fashion e-commerce web app with product listing, search, cart management, checkout flow, and responsive design. Built to demonstrate real-world frontend architecture.",
    image: ecommerceImg,
    technologies: [
      "React",
      "Vite",
      "Redux Toolkit",
      "React Router",
      "Tailwind CSS",
      "REST API",
    ],
    video: "",
    github: "https://github.com/mniSujalTaneja/Fashion",
    demo: "https://fashion-sujal.vercel.app/",
  },
];

export default projectsData;