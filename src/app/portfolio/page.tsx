"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const Portfolio = () => {
  interface ProjectCardProps {
    images: string[];
    title: string;
    description: string;
    link: string;
  }

  const projects: ProjectCardProps[] = [
    {
      images: [
        "/images/Milonyx.jpg",
        "/images/Milonyx1.jpg",
        "/images/Milonyx2.webp",
        "/images/Milonyx3.webp",
        "/images/Milonyx4.webp",
      ],
      title: "Milonyx",
      description:
        "Strength is the currency for aging, collect it now because you'll be paying it later. Join the only global weightlifting society, Milonyx.",
      link: "https://apps.apple.com/us/app/milonyx/id1526697857",
    },
    {
      images: ["/images/goal.jpg", "/images/goal1.webp", "/images/goal2.webp", "/images/goal3.webp"],
      title: "The Goals App",
      description:
        "Goals is your personal accountability hub, turning dreams into achievable realities in a distracting world.",
      link: "https://apps.apple.com/us/app/the-goals-app/id6456607948",
    },
    {
      images: ["/images/favor.jpg", "/images/favor1.webp", "/images/favor2.webp", "/images/favor3.webp",],
      title: "LOfavør",
      description:
        "LOfavør offers a benefits program with membership perks, digital cards, and travel insurance for LO confederation members.",
      link: "https://apps.apple.com/us/app/lofavør/id803414874",
    },
    {
      images: ["/images/nextgen.jpg", "/images/nextgen1.webp", "/images/nextgen2.webp", "/images/nextgen3.webp",],
      title: "NextGenTel",
      description:
        "The NextGenTel app gives you a snapshot of your account, communication and invoices, as well as technical information and network messages.",
      link: "https://apps.apple.com/no/app/nextgentel-minside/id1437380850",
    },
    {
      images: ["/images/catablackcar.jpg", "/images/catablackcar1.webp", "/images/catablackcar2.webp"],
      title: "Cata Black Car",
      description:
        "Cata Black Car provides luxury chauffeured transportation with top vehicles and professional service in Miami and Fort Lauderdale.",
      link: "https://apps.apple.com/us/app/cata-black-car/id1260455464",
    },
    {
      images: ["/images/swisshomeguard.jpg"],
      title: "SwissHomeguard",
      description:
        "SwissHomeguard combines AI, human awareness, and a 24/7 alarm center for round-the-clock security.",
      link: "https://apps.apple.com/pk/app/swisshomeguard/id1536440507",
    },
    {
      images: ["/images/badgr.webp", "/images/badgr1.webp", "/images/badgr2.webp", "/images/badgr3.webp"],
      title: "Badgr",
      description:
        "Badgr simplifies and adds meaning to connections, helping users break free from traditional social media addiction.",
      link: "https://apps.apple.com/pk/app/badgr/id6466749795",
    },
    {
      images: ["/images/Namoz.webp", "/images/Namoz1.webp", "/images/Namoz2.webp", "/images/Namoz3.webp"],
      title: "Namoz",
      description:
        "Namoz provides accurate prayer time calculations based on your location, ensuring perfect timing for your prayers.",
      link: "https://apps.apple.com/pk/app/namoz/id6462422769",
    },
    {
      images: ["/images/holr.webp", "/images/holr1.webp", "/images/holr2.webp", "/images/holr3.webp"],
      title: "holr",
      description:
        "Holr is your platform to engage, ask, and connect with others in real-time, sharing experiences and knowledge.",
      link: "https://apps.apple.com/us/app/holr/id1606620254",
    },
    {
      images: ["/images/lfcsupporters.webp", "/images/lfcsupporters1.webp", "/images/lfcsupporters2.webp", "/images/lfcsupporters3.webp"],
      title: "LFC Supporters",
      description:
        "Liverpool supporterklubb og Liverpool.nos eksklusive app for medlemmer - for deg som vil holde deg oppdatert på alt rundt Liverpool Football Club.",
      link: "https://apps.apple.com/no/app/lfc-supporters-club-norway/id1361720503",
    },
    {
      images: ["/images/AppIconsCustomizer.webp", "/images/AppIconsCustomizer1.webp", "/images/AppIconsCustomizer2.webp", "/images/AppIconsCustomizer3.webp", "/images/AppIconsCustomizer4.webp"],
      title: "App Icons Customizer",
      description:
        "Icons Customizer lets you personalize your iPhone with thousands of custom icons, giving your device a unique look.",
      link: "https://apps.apple.com/app/apple-store/id1541475852",
    },
    {
      images: ["/images/bestfonts.webp", "/images/bestfonts1.webp", "/images/bestfonts2.webp", "/images/bestfonts3.webp"],
      title: "BestFonts - For Social Media",
      description:
        "BestFonts enhances your Instagram, Snapchat, and TikTok with custom fonts and emojis to make your posts stand out.",
      link: "https://apps.apple.com/app/apple-store/id1510561468",
    },
    {
      images: ["/images/Squirrelit!.webp", "/images/Squirrelit!1.webp", "/images/Squirrelit!2.webp", "/images/Squirrelit!3.webp"],
      title: "Squirrelit!",
      description:
        "Squirrelit stores your important documents and tickets, keeping them one tap away for easy access.",
      link: "https://apps.apple.com/app/id1631103283",
    },
    {
      images: ["/images/motivation.webp", "/images/motivation1.webp", "/images/motivation2.webp", "/images/motivation3.webp", "/images/motivation4.webp"],
      title: "Motivation And Positive Quotes",
      description:
        "This app offers over 40,000 uplifting quotes on topics like strength, mindset, relationships, and more.",
      link: "https://apps.apple.com/pk/app/motivation-and-positive-quotes/id1581375912",
    },
    {
      images: ["/images/dialer.webp", "/images/dialer1.webp", "/images/dialer2.webp", "/images/dialer3.webp", "/images/dialer4.webp", "/images/dialer5.webp"],
      title: "Dialer Pro",
      description:
        "Our T9 smart dialer app simplifies connecting with others, requiring fewer clicks to make calls.",
      link: "https://apps.apple.com/pk/app/dialer-pro/id1036151482",
    },
    {
      images: ["/images/educationalapps.webp", "/images/educationalapps1.webp", "/images/educationalapps2.webp", "/images/educationalapps3.webp"],
      title: "Best 10 Educational Apps",
      description:
        "Baby Piano Animal Sounds Pro is a fun piano game for kids, featuring animal sounds to entertain and educate toddlers and preschoolers.",
      link: "https://apps.apple.com/pk/app-bundle/best-10-educational-apps-the-learning-apps-fun/id1557444566",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0); // Track the image index for the selected project

  const openModal = (index: number) => {
    setSelectedIndex(index);
    setCurrentImageIndex(0); // Reset to the first image of the selected project
  };

  const closeModal = () => {
    setSelectedIndex(null);
    setCurrentImageIndex(0);
  };

  const showPreviousImage = () => {
    if (selectedIndex === null) return;
    const images = projects[selectedIndex].images;
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length,
    );
  };

  const showNextImage = () => {
    if (selectedIndex === null) return;
    const images = projects[selectedIndex].images;
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
            alt="Technology Background"
            fill
            className="object-cover brightness-[0.6] dark:brightness-[0.4]"
            priority
          />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-6xl font-bold text-transparent dark:from-blue-400 dark:to-purple-400">
            SourceIgnite
          </h1>
          <p className="mb-8 text-xl text-white dark:text-gray-300">
            Igniting Digital Innovation Through Expert Software Solutions
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center text-4xl font-bold">Portfolio</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className="cursor-pointer rounded-lg shadow-lg"
                onClick={() => openModal(index)}
              >
                {/* Image Wrapper */}
                <div className="relative h-96 w-full">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <h3 className="mx-2 mt-4 text-xl font-semibold">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mx-2 mb-1">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-black bg-opacity-70"
          onClick={closeModal}
        >
          <div
            className="relative flex h-[500px] w-[37%] flex-col overflow-hidden rounded-lg bg-white shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            {/* Close Button */}
            <button
              className="absolute right-3 top-3 z-[10100] flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-600 shadow hover:bg-gray-100 hover:text-gray-800"
              onClick={closeModal}
            >
              <X size={24} />
            </button>

            {/* Image */}
            <div className="relative h-[63%] w-full">
              <Image
                src={projects[selectedIndex].images[currentImageIndex]}
                alt={projects[selectedIndex].title}
                fill
                className="rounded-t-lg object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-between px-4">
                <button
                  className="rounded-full bg-black bg-opacity-50 p-2 text-white"
                  onClick={showPreviousImage}
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  className="rounded-full bg-black bg-opacity-50 p-2 text-white"
                  onClick={showNextImage}
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>

            {/* Details Card */}
            <div className="flex-1 overflow-y-auto bg-white p-6">
              <h3 className="text-2xl font-bold text-gray-800">
                {projects[selectedIndex].title}
              </h3>
              <p className="mt-2 text-gray-600">
                {projects[selectedIndex].description}
              </p>
              <a
                href={projects[selectedIndex].link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block text-blue-500 underline"
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
