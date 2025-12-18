const generateId = (stringToId) => {
  return stringToId.toLowerCase().split(" ").join("-");
};

export const SERVICES = [
  {
    id: generateId("Computer Check-Up & Diagnostics"),
    title: "Computer Check-Up & Diagnostics",
    description: "Is your computer slow or acting strangely? We'll find the issue and explain it in plain English",
    icon: "build",
  },
  {
    id: generateId("Wi-Fi Setup & Coverage Optimization"),
    title: "Wi-Fi Setup & Coverage Optimization",
    description: "We help fix dead zones and ensure your internet works reliably in every room of your house.",
    icon: "wifi",
  },
  {
    id: generateId("Printer Installation"),
    title: "Printer Installation",
    description: "New printer won't connect? We will get it set up and working perfectly with your computer or phone.",
    icon: "print",
  },
  {
    id: generateId("Important File Backup"),
    title: "Important File Backup",
    description: "Don't risk losing your family photos or documents. We set up secure, automatic backups for peace of mind.",
    icon: "archive",
  },
  {
    id: generateId("Fast Remote Support"),
    title: "Fast Remote Support",
    description: "For quick fixes, we can securely connect to your computer over the internet to help immediately.",
    icon: "support_agent",
  },
  {
    id: generateId("Technology Training"),
    title: "Technology Training",
    description: "Personalized training for home and office users on computers, mobile devices, and essential office software.",
    icon: "book_ribbon",
  },
];

export const WHYUS = [
  {
    id: generateId("Personlized Attention"),
    title: "Personlized Attention",
    description: "We provide personalized computer and technical support for homes and small businesses in Kendall, Pinecrest, Miami, and surrounding areas. Every client receives one-on-one attention, clear explanations, and solutions tailored to their specific technology needs.",
    icon: "handshake",
    image: "personlized-attention.jpg",
  },
  {
    id: generateId("Trust & Reliability"),
    title: "Trust & Reliability",
    description: "As a local tech support provider based in Miami, we are known for reliable service, punctual appointments, and consistent results. Our clients trust us to handle their technology with professionalism and care.",
    icon: "verified_user",
    image: "personlized-attention.jpg",
  },
  {
    id: generateId("Honesty & Transparency"),
    title: "Honesty & Transparency",
    description: "We believe in honest and transparent technical support for our clients in Pinecrest, Kendall, and South Miami. You’ll always receive clear explanations, upfront pricing, and straightforward recommendations—no hidden costs or unnecessary services.",
    icon: "forum",
    image: "personlized-attention.jpg",
  },
  {
    id: generateId("Fair & Clear Pricing"),
    title: "Fair & Clear Pricing",
    description: "We offer fair and clear pricing for computer repair and IT support services across Kendall, Miami, and nearby communities. Our clients receive competitive rates, detailed estimates, and professional service without surprises.",
    icon: "payments",
    image: "personlized-attention.jpg",
  },
];
