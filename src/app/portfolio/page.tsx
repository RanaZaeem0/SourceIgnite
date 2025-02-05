"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const Portfolio = () => {
  interface ProjectCardProps {
    image: string;
    title: string;
    description: string;
    link: string;
  }

  const projects: ProjectCardProps[] = [
    {
      image: "/images/Milonyxx.jpg",
      title: "Milonyx",
      description: "Strength is the currency for aging, collect it now because you'll be paying it later. Join the only global weightlifting society, Milonyx.",
      link: "https://apps.apple.com/us/app/milonyx/id1526697857",
    },
    {
      image: "/images/goals.jpg",
      title: "The Goals App",
      description: "Goals is your personal accountability hub, turning dreams into achievable realities in a distracting world.",
      link: "https://apps.apple.com/us/app/the-goals-app/id6456607948",
    },
    {
      image: "/images/favor.jpg",
      title: "LOfavør",
      description: "LOfavør offers a benefits program with membership perks, digital cards, and travel insurance for LO confederation members.",
      link: "https://apps.apple.com/us/app/lofavør/id803414874",
    },
    {
      image: "/images/nextgen.jpg",
      title: "NextGenTel",
      description: "The NextGenTel app gives you a snapshot of your account, communication and invoices, as well as technical information and network messages.",
      link: "https://apps.apple.com/no/app/nextgentel-minside/id1437380850",
    },
    {
      image: "/images/catablackcar.jpg",
      title: "Cata Black Car",
      description: "Cata Black Car provides luxury chauffeured transportation with top vehicles and professional service in Miami and Fort Lauderdale.",
      link: "https://apps.apple.com/us/app/cata-black-car/id1260455464",
    },
    {
      image: "/images/swisshomeguard.jpg",
      title: "SwissHomeguard",
      description: "SwissHomeguard combines AI, human awareness, and a 24/7 alarm center for round-the-clock security.",
      link: "https://apps.apple.com/pk/app/swisshomeguard/id1536440507",
    },
    {
      image: "/images/badgr.webp",
      title: "Badgr",
      description: "Badgr simplifies and adds meaning to connections, helping users break free from traditional social media addiction.",
      link: "https://apps.apple.com/pk/app/badgr/id6466749795",
    },
    {
      image: "/images/Namoz.webp",
      title: "Namoz",
      description: "Namoz provides accurate prayer time calculations based on your location, ensuring perfect timing for your prayers.",
      link: "https://apps.apple.com/pk/app/namoz/id6462422769",
    },
    {
      image: "/images/holr.webp",
      title: "holr",
      description: "Holr is your platform to engage, ask, and connect with others in real-time, sharing experiences and knowledge.",
      link: "https://apps.apple.com/us/app/holr/id1606620254",
    },
    {
      image: "/images/lfcsupporters.webp",
      title: "LFC Supporters",
      description: "Liverpool supporterklubb og Liverpool.nos eksklusive app for medlemmer - for deg som vil holde deg oppdatert på alt rundt Liverpool Football Club.",
      link: "https://apps.apple.com/no/app/lfc-supporters-club-norway/id1361720503",
    },
    {
      image: "/images/AppIconsCustomizer.webp",
      title: "App Icons Customizer",
      description: "Icons Customizer lets you personalize your iPhone with thousands of custom icons, giving your device a unique look.",
      link: "https://apps.apple.com/app/apple-store/id1541475852",
    },
    {
      image: "/images/bestfonts.webp",
      title: "BestFonts - For Social Media",
      description: "BestFonts enhances your Instagram, Snapchat, and TikTok with custom fonts and emojis to make your posts stand out.",
      link: "https://apps.apple.com/app/apple-store/id1510561468",
    },
    {
      image: "/images/Squirrelit!.webp",
      title: "Squirrelit!",
      description: "Squirrelit stores your important documents and tickets, keeping them one tap away for easy access.",
      link: "https://apps.apple.com/app/id1631103283",
    },
    {
      image: "/images/motivation.webp",
      title: "Motivation And Positive Quotes",
      description: "This app offers over 40,000 uplifting quotes on topics like strength, mindset, relationships, and more.",
      link: "https://apps.apple.com/pk/app/motivation-and-positive-quotes/id1581375912",
    },
    {
      image: "/images/dialer.webp",
      title: "Dialer Pro",
      description: "Our T9 smart dialer app simplifies connecting with others, requiring fewer clicks to make calls.",
      link: "https://apps.apple.com/pk/app/dialer-pro/id1036151482",
    },
    {
      image: "/images/educationalapps.webp",
      title: "Best 10 Educational Apps",
      description: "Baby Piano Animal Sounds Pro is a fun piano game for kids, featuring animal sounds to entertain and educate toddlers and preschoolers.",
      link: "https://apps.apple.com/pk/app-bundle/best-10-educational-apps-the-learning-apps-fun/id1557444566",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const showPrevious = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + projects.length) % projects.length);
  };

  const showNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % projects.length);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
            alt="Technology Background"
            fill
            className="object-cover brightness-[0.6] dark:brightness-[0.4]"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400">
            SourceIgnite
          </h1>
          <p className="text-xl mb-8 text-white dark:text-gray-300">
            Igniting Digital Innovation Through Expert Software Solutions
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Portfolio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="cursor-pointer"
                onClick={() => openModal(index)}
              >
                {/* Image Wrapper */}
                <div className="relative w-full h-96">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
{selectedIndex !== null && (
  <div
    className="fixed inset-0 bg-black bg-opacity-70 z-[10000] flex items-center justify-center"
    onClick={closeModal}
  >
    <div
      className="relative bg-white rounded-lg overflow-hidden shadow-lg w-[90%] max-w-2xl h-[500px] flex flex-col"
      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
    >
      {/* Close Button */}
      <button
        className="absolute top-3 right-3 z-[10100] text-gray-600 hover:text-gray-800 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow hover:bg-gray-100"
        onClick={closeModal}
      >
        <X size={24} />
      </button>

      {/* Image */}
      <div className="relative w-full h-[63%]">
        <Image
          src={projects[selectedIndex].image}
          alt={projects[selectedIndex].title}
          fill
          className="rounded-t-lg object-cover"
        />
        <div className="absolute inset-0 flex justify-between items-center px-4">
          <button
            className="text-white bg-black bg-opacity-50 p-2 rounded-full"
            onClick={showPrevious}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="text-white bg-black bg-opacity-50 p-2 rounded-full"
            onClick={showNext}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Details Card */}
      <div className="flex-1 p-6 bg-white overflow-y-auto">
        <h3 className="text-2xl font-bold text-gray-800">
          {projects[selectedIndex].title}
        </h3>
        <p className="text-gray-600 mt-2">{projects[selectedIndex].description}</p>
        <a
          href={projects[selectedIndex].link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline mt-4 block"
        >
          Visit App
        </a>
      </div>
    </div>
  </div>
)}

    </main>
  );
};

export default Portfolio;
