"use client";

import { ArrowDown } from "lucide-react";
import Image from "next/image";

const Portfolio = () => {

  interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
  }
  
  function ServiceCard({ icon, title, description }: ServiceCardProps) {
    return (
      <div className="bg-card p-8 rounded-lg shadow-lg dark:shadow-secondary/10 hover:shadow-xl transition-shadow">
        <div className="text-primary mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    );
  }
  
  interface ProjectCardProps {
    image: string;
    title: string;
    description: string;
    tags: string[];
  }
  
  function ProjectCard({ image, title, description, tags }: ProjectCardProps) {
    return (
      <div className="bg-card rounded-lg overflow-hidden shadow-lg dark:shadow-secondary/10 hover:shadow-xl transition-shadow">
        <div className="relative h-64">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  interface StatCardProps {
    number: string;
    label: string;
  }
  
  function StatCard({ number, label }: StatCardProps) {
    return (
      <div>
        <div className="text-4xl font-bold mb-2">{number}</div>
        <div className="text-foreground/80">{label}</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative  h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
            alt="Technology Background"
            fill
            className="object-cover brightness-[0.5] dark:brightness-[0.1]"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400">
            SourceIgnite
          </h1>
          <p className="text-xl mb-8 text-white dark:text-black">
            Igniting Digital Innovation Through Expert Software Solutions
          </p>
          <ArrowDown className="animate-bounce mx-auto mt-12 w-8 h-8 text-white" />
        </div>
      </section>

      {/* Services Section */}
      {/* <section className="py-20 bg-gradient-to-b from-background via-background to-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Code2 className="w-10 h-10" />}
              title="Custom Software Development"
              description="Tailored solutions built with cutting-edge technology to meet your unique business needs."
            />
            <ServiceCard
              icon={<Globe2 className="w-10 h-10" />}
              title="Web Applications"
              description="Responsive and scalable web applications that deliver exceptional user experiences."
            />
            <ServiceCard
              icon={<Cpu className="w-10 h-10" />}
              title="Cloud Solutions"
              description="Secure and efficient cloud infrastructure to power your digital transformation."
            />
          </div>
        </div>
      </section> */}

      {/* Featured Projects */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
              title="Enterprise Dashboard"
              description="A comprehensive analytics dashboard for enterprise resource management."
              tags={["React", "TypeScript", "Node.js"]}
            />
            <ProjectCard
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
              title="IoT Platform"
              description="Real-time monitoring system for industrial IoT devices."
              tags={["Python", "AWS", "MongoDB"]}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StatCard number="100+" label="Clients Worldwide" />
            <StatCard number="250+" label="Projects Completed" />
            <StatCard number="15+" label="Years Experience" />
            <StatCard number="50+" label="Team Members" />
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      {/* <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16">Get In Touch</h2>
          <div className="bg-card rounded-lg p-8 shadow-lg dark:shadow-secondary/10">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 rounded-md bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 rounded-md bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>
              <textarea
                placeholder="Message"
                rows={6}
                className="w-full p-3 rounded-md bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
              <button className="w-full bg-primary text-primary-foreground py-3 rounded-md hover:opacity-90 transition-opacity">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section> */}
    </main>
  );
}

export default Portfolio;
