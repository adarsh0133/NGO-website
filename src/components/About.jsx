import React, { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const About = () => {
  const [activeTab, setActiveTab] = useState("aboutus");
  return (
    <>
      <NavBar />
      <div className="w-full h-fit">
        <div className="w-full h-[35vh] lg:h-[50vh] flex flex-col justify-center items-center text-white border-b-2 bg-zinc-600">
          <h1 className="text-4xl font-bold underline mt-5 tracking-widest text-[#FFBA01]">
            About Us
          </h1>
        </div>
        <div className="aboutus-wrapper w-full h-fit bg-zinc-50 p-5 lg:p-10 lg:flex lg:flex-row lg:justify-between">
          <div className="aboutus w-full h-fit lg:w-1/2 ">
            <h1 className="capitalize text-3xl font-bold mt-5 text-[#3F4359]">
              Learn About Us
            </h1>
            <h1 className="text-4xl font-bold text-[#FFBA01] mt-2 mb-3">
              WARRIORS WITHOUT CAUSE
            </h1>
            <div className="img-container w-full h-[60vh] lg:w-1/2 lg:ml-20 bg-red-300">
              <img src="" alt="" />
            </div>
          </div>
          <div className="missionInfo w-full h-fit text-black pt-5 lg:w-1/2">
            <div className="tabs text-2xl font-bold flex gap-5 items-center justify-center">
              <button onClick={() => setActiveTab("aboutus")}>About Us</button>
              <button onClick={() => setActiveTab("mission")}>
                Our Mission
              </button>
              <button onClick={() => setActiveTab("vision")}>Our Vision</button>
            </div>
            <div className="tab-content font-semibold">
              {activeTab === "aboutus" && (
                <div>
                  <h2 className="text-2xl font-bold mt-5">About Us</h2>
                  <p>
                    Warriors Without Cause is a PAN India youth-led registered
                    NGO under Indian Trusts Act, 1882 aiming to spread
                    sensitisation towards charity and helping others. The
                    organization’s motto being "we don't need a cause to make a
                    change."
                  </p>
                  <p>
                    Our core philosophy centers around empowering individuals to
                    become self-sufficient in the long term, and we achieve this
                    by working directly in underserved slum communities. Our
                    multifaceted approach includes a wide range of initiatives,
                    such as organizing medical camps, conducting educational
                    workshops, distributing essential items like sanitary pads,
                    food, clothing, books, and stationery. We also provide
                    access to electricity, establish sanitary facilities, offer
                    employment opportunities, and extend support to improve the
                    overall quality of life for those in need.
                  </p>
                  <p>
                    With a dedicated team of over 300 warriors spread across
                    various cities in India, including Noida, Jammu, Chandigarh,
                    Delhi, Dehradun, Hyderabad, Jaipur, and Mumbai, we are
                    committed to creating positive change and leaving a lasting
                    impact on the lives of the underprivileged.
                  </p>
                </div>
              )}
              {activeTab === "mission" && (
                <div>
                  <h2 className="text-2xl font-bold mt-5">Our Mission</h2>
                  <p>
                    Bridging educational gaps, facilitating sustainable
                    employment, and providing accessible healthcare services,
                    ensuring holistic development and empowering individuals to
                    break the cycle of poverty, leading to stronger, healthier,
                    and self-sufficient communities.
                  </p>
                </div>
              )}
              {activeTab === "vision" && (
                <div>
                  <h2 className="text-2xl font-bold mt-5">Our Vision</h2>
                  <p>
                    Empowering underprivileged communities through education,
                    employment, and healthcare, creating a future where every
                    individual has the opportunity to thrive and live a healthy,
                    fulfilling life.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="our-team w-full h-fit p-5">
          <h1 className="text-4xl font-bold text-center text-[#FFBA01] uppercase mt-5">
            Meet our BOARD OF TRUST
          </h1>
          <div className="team-members w-full h-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="truste-info w-full h-fit flex flex-col items-start justify-center mt-5">
              <div className="img-container w-full h-[40vh] bg-red-300">
                <img className="w-full h-full object-cover" src="" alt="" />
              </div>
              <h1 className="truste-name text-zinc-800 font-medium text-2xl mt-2 text-center">
                Anusha Attree
              </h1>
              <h2 className="truste-designation text-[#FFBA01] font-medium text-xl text-center">
                Founder
              </h2>
              <h2 className="truste-designation text-[#FFBA01] font-medium text-xl text-center">
                Trustee
              </h2>
            </div>
            <div className="truste-info w-full h-fit flex flex-col items-start justify-center mt-5">
              <div className="img-container w-full h-[40vh] bg-red-300">
                <img className="w-full h-full object-cover" src="" alt="" />
              </div>
              <h1 className="truste-name text-zinc-800 font-medium text-2xl mt-2 text-center">
                Anusha Attree
              </h1>
              <h2 className="truste-designation text-[#FFBA01] font-medium text-xl text-center">
                Founder
              </h2>
              <h2 className="truste-designation text-[#FFBA01] font-medium text-xl text-center">
                Trustee
              </h2>
            </div>
            <div className="truste-info w-full h-fit flex flex-col items-start justify-center mt-5">
              <div className="img-container w-full h-[40vh] bg-red-300">
                <img className="w-full h-full object-cover" src="" alt="" />
              </div>
              <h1 className="truste-name text-zinc-800 font-medium text-2xl mt-2 text-center">
                Anusha Attree
              </h1>
              <h2 className="truste-designation text-[#FFBA01] font-medium text-xl text-center">
                Founder
              </h2>
              <h2 className="truste-designation text-[#FFBA01] font-medium text-xl text-center">
                Trustee
              </h2>
            </div>
            <div className="truste-info w-full h-fit flex flex-col items-start justify-center mt-5">
              <div className="img-container w-full h-[40vh] bg-red-300">
                <img className="w-full h-full object-cover" src="" alt="" />
              </div>
              <h1 className="truste-name text-zinc-800 font-medium text-2xl mt-2 text-center">
                Anusha Attree
              </h1>
              <h2 className="truste-designation text-[#FFBA01] font-medium text-xl text-center">
                Founder
              </h2>
              <h2 className="truste-designation text-[#FFBA01] font-medium text-xl text-center">
                Trustee
              </h2>
            </div>
          </div>
        </div>

        <div className="our-motive bg-[#3F4359] w-full h-fit p-5 lg:flex lg:flex-row">
          <div className="motive-cards text-center bg-[#F6EBE4] mt-5 pt-5 pb-10 ">
            <h1 className="text-2xl sm:text-3xl font-semibold text-black">
              EMPATHY
            </h1>
            <p className="text-black font-normal text-lg sm:text-xl mt-5 px-2 sm:px-5">
              WWC recognizes the importance of empathy in building a more
              compassionate and connected society. We may offer training
              programs, and resources designed to help individuals cultivate
              empathy.
            </p>
          </div>
          <div className="motive-cards text-center bg-[#F6EBE4] mt-5 pt-5 pb-10 mx-2 ">
            <h1 className="text-2xl sm:text-3xl font-semibold text-black">
              SEWA
            </h1>
            <p className="text-black font-normal text-lg sm:text-xl mt-5 px-2 sm:px-5">
              WWC encourages individuals to engage in acts of sewa as a means of
              personal growth and community betterment. They may organize
              volunteer opportunities, community service projects, and outreach
              programs
            </p>
          </div>
          <div className="motive-cards text-center bg-[#F6EBE4] mt-5 pt-5 pb-10 mx-2">
            <h1 className="text-2xl sm:text-3xl font-semibold text-black">
              SKILL <br className="hidden sm:block" /> DEVELOPMENT
            </h1>
            <p className="text-black font-normal text-lg sm:text-xl mt-5 px-2 sm:px-5">
              WWC offers skill development programs and training opportunities
              to empower individuals with practical skills that can enhance
              their personal & Professional Growth
            </p>
          </div>
          <div className="motive-cards text-center bg-[#F6EBE4] mt-5 pt-5 pb-10 mx-2">
            <h1 className="text-2xl sm:text-3xl font-semibold text-black">
              INCLUSIVE <br className="hidden sm:block" /> ENVIRONMENT
            </h1>
            <p className="text-black font-normal text-lg sm:text-xl mt-5 px-2 sm:px-5">
              WWC is committed to creating an inclusive workplace where people
              from diverse backgrounds are welcome and valued. Everyone has
              equal opportunities for employment and growth within the
              organization.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
