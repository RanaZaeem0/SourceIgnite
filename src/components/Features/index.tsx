import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-4 md:py-6 lg:py-20">
        <div className="container">
          <SectionTitle
            title="Our Services"
            paragraph="Let us show you how we can help your business thrive."
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
