import React, { useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    document.title = "Majestic Mansion | About Us";
  }, []);
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Who We Are
            </h3>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>
                Welcome to Majestic-Mansions Realty, where we redefine the real
                estate experience. As a leading provider of premium estates, we
                take pride in offering a diverse portfolio of properties at the
                best prices in the market. With a dedicated team of
                professionals, we are committed to guiding you through every
                step of your real estate journey, ensuring seamless transactions
                and unparalleled customer satisfaction.
              </p>
              <p>
                At Majestic-Mansions Realty, integrity, transparency, and
                client-centricity are at the core of everything we do. Whether
                you're searching for your dream home or seeking investment
                opportunities, our expertise and personalized approach guarantee
                results that exceed expectations.
              </p>
              <p>
                Discover your perfect property with Majestic-Mansions Realty
                today, and let us help you turn your real estate aspirations
                into reality.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              At Majestic-Mantions Realty, our mission is simple yet profound: to empower
              individuals and families to achieve their real estate goals with
              confidence and ease. <br /> We strive to accomplish this mission
              by: <br />
              Delivering Exceptional Value: We are committed to offering the
              best prices without compromising on quality or service. Our team
              diligently analyzes market trends and negotiates on behalf of our
              clients to ensure they receive maximum value for their investment.{" "}
              <br />
              Embracing Innovation: In an ever-evolving industry, we understand
              the importance of staying ahead of the curve. We leverage
              cutting-edge technology and innovative solutions to streamline the
              real estate process, making it simpler, faster, and more efficient
              for our clients. <br />
              At Majestic-Mantions Realty, our mission is not just a statement – it's a
              commitment to excellence, integrity, and service. Join us on this
              journey as we help you unlock the door to your real estate dreams.{" "}
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
