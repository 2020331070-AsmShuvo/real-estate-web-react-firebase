import React from "react";
import Review from "../../Review/Review";
import { FaPersonCircleQuestion } from "react-icons/fa6";


const Faq = () => {
  return (
    <div className="lg:h-[1200px] px-2">
      <div className="my-10 space-y-2 lg:w-1/3 mx-auto">
        <div><FaPersonCircleQuestion className="mx-auto text-7xl my-4 lg:animate__animated lg:animate__jello"/></div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            How can I schedule a viewing for a property?
          </div>
          <div className="collapse-content">
            <p>
              Scheduling a viewing is easy! Simply browse our listings, find the
              property you're interested in, and click on the "Schedule Viewing"
              button. You can also contact our team directly to arrange a
              viewing at a time that suits you.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            What types of properties do you specialize in?
          </div>
          <div className="collapse-content">
            <p>
              We specialize in a wide range of properties, including residential
              homes, apartments, condos, commercial spaces, and vacant land.
              Whether you're looking to buy, rent, or invest, we have options to
              suit your needs.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Are there any additional costs or fees associated with purchasing a
            property?
          </div>
          <div className="collapse-content">
            <p>
              In addition to the purchase price of the property, there may be
              additional costs such as property taxes, homeowners association
              fees (if applicable), and closing costs. Our team will provide you
              with a detailed breakdown of all associated fees before you make a
              purchase.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Can I list my property with your company for sale or rent?
          </div>
          <div className="collapse-content">
            <p>
              {" "}
              Absolutely! We welcome property owners who are looking to sell or
              rent their properties. Simply reach out to our team, and we'll
              guide you through the process of listing your property with us.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            How do I apply for a mortgage or financing for a property?
          </div>
          <div className="collapse-content">
            <p>
              Applying for a mortgage or financing can seem daunting, but our
              team is here to help. We work closely with trusted lenders and
              financial institutions to assist you in securing the financing you
              need. Contact us for personalized guidance and support throughout
              the process.
            </p>
          </div>
        </div>
      </div>
      {/* clients sat form */}
      <div  className="text-center mt-20 text-2xl font-semibold jul">What our clients say</div>
        <hr className="mt-4 mb-20"/>
      <div className="flex mb-4 mx-auto flex-col lg:flex-row gap-4 w-2/3 md:mx-auto"  data-aos="flip-up">
        <Review
          title="Love the sleek design and top-notch quality! Your products have elevated our workspace, making it both stylish and functional. Highly recommended!"
          clientName="Kie Haverts"
          designation="Sr. Consultant, Recruit"
        />
        <Review
          title=" They were quick to respond with detailed information and available options. The property exceeded my expectations in terms of luxury and seclusion"
          clientName="Anirudh Dutt"
          designation="Marketing Manager, ITune"
        />
        <Review
          title="Love the sleek design and top-notch quality! Your products have elevated our workspace, making it both stylish and functional. Highly recommended!"
          clientName="Kyle Walker"
          designation="Acc. Manager, Nestley"
        />
      </div>
    </div>
  );
};

export default Faq;
