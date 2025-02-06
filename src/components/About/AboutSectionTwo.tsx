import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Our Company
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed mb-1">
                We are passionate about transforming ideas into digital solutions that fuel success. As a leading IT company, we specialize in delivering innovative and reliable services that empower businesses to thrive in the digital world.
                </p>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed mb-1">Our dedicated team of experienced professionals brings a wealth of expertise across various domains, including web development, app development, IT consultation, SEO optimization, UI/UX design, logo design, and CRM solutions. We take the time to understand our clients unique needs, ensuring that every solution we create is perfectly aligned with their goals and vision.</p>
                {/* <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">By blending creativity, technical know-how, and a client-centric approach, we provide personalized strategies that drive measurable results and long-term success. Whether you’re looking to build a robust digital presence, optimize your business processes, or enhance user experiences, SourceIgnite is your trusted partner every step of the way.</p> */}
              </div>
              {/* <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Our Mission
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Our mission is to help businesses harness the power of technology to solve problems, drive growth, and create lasting value. By combining creativity, technical expertise, and a deep understanding of industry trends, we deliver solutions that exceed expectations and make a real impact.
                </p>
              </div> */}
              {/* <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                What Sets Us Apart
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                At SourceIgnite, we leverage Next.js to build high-performance, SEO-friendly, and scalable web applications. With server-side rendering (SSR), static site generation (SSG), and API routes, Next.js ensures lightning-fast experiences. Trust us for cutting-edge, efficient, and seamless web solutions!
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
