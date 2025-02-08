import { Linkedin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const Team = () => {
  const teamMembers = [
    {
      name: 'Awais',
      role: 'Founder & CEO',
      image: '/images/team/ceo.jpg',
      social: {
        linkedin: 'https://www.linkedin.com/in/muhammad-awais-naeem-1117b1167/',
      }
    },
    {
      name: 'Hassan Tahir',
      role: 'Co-Founder & CTO',
      image: '/images/team/hassan.jpg',
      social: {
        linkedin: 'https://www.linkedin.com/in/hasantahir97/',
      }
    },
    {
      name: 'Hamza Hashmi',
      role: 'Development Lead',
      image: '/images/team/hamza.jpg',
      social: {
        linkedin: 'https://www.linkedin.com/in/hamzahashmi556/'
      }
    },
    {
      name: 'Armani Saintil',
      role: 'Business Development Manager',
      image: '/images/team/armani.jpg',
      social: {
        linkedin: 'https://www.linkedin.com/in/armani-saintil-95415a325/'
      }
    },
    {
      name: 'Umar Asim',
      role: 'Project Manager',
      image: '/images/team/umarkhan.jpg',
      social: {
        linkedin: 'https://www.linkedin.com/in/umar-a-31a5b3180/'
      }
    },
    {
      name: 'Rehana Syed',
      role: 'Creative Head & UI/UX Designer',
      image: '/images/team/rehana.jpeg',
      social: {
        linkedin: 'https://www.linkedin.com/in/rehana-syed-106b74197/'
      }
    }
  ];

  return (
    <>
      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our diverse team of experts is passionate about creating innovative solutions that drive your success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className={`group ${
                  index >= teamMembers.length - 2 
                    ? 'lg:col-span-2 lg:mx-auto lg:max-w-sm' 
                    : ''
                }`}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:-translate-y-2">
                  <Image 
                    width={500}
                    height={400}
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-80 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex justify-center space-x-4">
                        <Link href={member.social.linkedin} className="text-white hover:text-gray-200 transition-colors">
                          <Linkedin size={20} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-gray-600 mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> 
    </>
  )
}

export default Team