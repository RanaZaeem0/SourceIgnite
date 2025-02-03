import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Our Services"
            paragraph="Learn how we helped our several clients grow in online business. It will give you an idea of our capabilities."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature, index) => (
              <div
                key={feature.id}
                className={`w-full ${index === featuresData.length - 1 ? "col-span-1 mx-auto" : ""}`}
              >
                <div className="flex w-full items-center justify-center">
                  <SingleFeature feature={feature} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
