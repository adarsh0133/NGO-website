import React, { useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState("aboutus");
  return (
    <>
      <div className="w-full h-fit">
        <div className="w-full h-[35vh] lg:h-[50vh] flex flex-col justify-center items-center text-white border-b-2 bg-zinc-600 bg-[url(https://plus.unsplash.com/premium_photo-1682092585257-58d1c813d9b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-[center_top_30%] ">
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
              Needy Binders
            </h1>
            <div className="img-container w-full h-[60vh] lg:w-1/2 lg:ml-20 bg-red-300">
              <img className="size-full" src="/images/childimg.jpeg" alt="" />
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
                    Needy Binders is a nationwide non-profit dedicated to
                    promoting a culture of charity and nourishing those in need.
                    Our mission, "Let’s ensure that excess food finds its way to
                    those who hunger," reflects our commitment to making a
                    meaningful impact on the lives of the underserved.
                  </p>
                  <p>
                    At Needy Binders, we believe that no one should go hungry in
                    a world filled with abundance. As a dedicated non-profit
                    organization operating across India, we focus on collecting
                    surplus food and redistributing it to those in need. Our
                    mission is simple yet powerful: to bridge the gap between
                    excess and need, ensuring that wholesome meals reach the
                    plates of the less fortunate. Founded on the principle of
                    compassion, Needy Binders is driven by a passionate team of
                    volunteers and supporters who work tirelessly to combat food
                    wastage and hunger. We partner with restaurants, catering
                    services, and individuals to gather surplus food,
                    transforming potential waste into nourishment for those who
                    need it most.
                  </p>
                  <p>
                    Through our initiatives, we aim not only to feed the hungry
                    but also to raise awareness about food insecurity and
                    inspire a culture of giving. Together, we can create a
                    community where everyone has access to the basic necessity
                    of food. Join us in our mission to make surplus food reach
                    needy stomachs, and help us turn compassion into action.
                  </p>
                </div>
              )}
              {activeTab === "mission" && (
                <div>
                  <h2 className="text-2xl font-bold mt-5">Our Mission</h2>
                  <p>
                    At Needy Binders, our mission is to connect event organizers
                    and venues with those in need by facilitating the donation
                    of leftover food. We strive to create a seamless network
                    that transforms excess food from parties and gatherings into
                    nourishing meals for hungry individuals. By fostering
                    partnerships with restaurants, caterers, and event planners,
                    we aim to reduce food waste while ensuring that every bite
                    counts. Together, we are committed to making a meaningful
                    impact in our communities and promoting a culture of
                    compassion and sharing.
                  </p>
                </div>
              )}
              {activeTab === "vision" && (
                <div>
                  <h2 className="text-2xl font-bold mt-5">Our Vision</h2>
                  <p>
                    At Needy Binders,our vision is to create a world where every
                    individual has access to nutritious food, eliminating hunger
                    and food waste. We aspire to foster a compassionate society
                    that values sharing and generosity, ensuring that surplus
                    food is transformed into a lifeline for those in need.
                    Together, we envision communities united in the fight
                    against hunger, where no one goes to bed hungry and everyone
                    can thrive.
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
          <div className="team-members w-full h-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:flex lg:justify-evenly">
            <div className="truste-info w-[40vh] h-fit flex flex-col items-start justify-center mt-5">
              <div className="img-container w-full h-[40vh]">
                <img
                  className="w-full h-full object-cover"
                  src="/images/trustee-1.jpeg"
                  alt=""
                />
              </div>
              <h1 className="truste-name text-zinc-800 font-medium text-2xl mt-2 text-center">
                Sapna
              </h1>
              <h2 className="truste-designation text-[#FFBA01] font-medium text-xl text-center">
                Founder
              </h2>
              <h2 className="truste-designation text-[#FFBA01] font-medium text-xl text-center">
                Trustee
              </h2>
            </div>
            <div className="truste-info w-[40vh] h-fit flex flex-col items-start justify-center mt-5">
              <div className="img-container w-full h-[40vh]">
                <img
                  className="w-full h-full object-contain"
                  src="/images/trustee-3.jpeg"
                  alt=""
                />
              </div>
              <h1 className="truste-name text-zinc-800 font-medium text-2xl mt-2 text-center">
                Lakshya Tanwar
              </h1>
              <h2 className="truste-designation text-[#FFBA01] font-medium text-xl text-center">
                Founder
              </h2>
              <h2 className="truste-designation text-[#FFBA01] font-medium text-xl text-center">
                Trustee
              </h2>
            </div>
            <div className="truste-info w-[40vh] h-fit flex flex-col items-start justify-center mt-5">
              <div className="img-container w-full h-[40vh]">
                <img
                  className="w-full h-full object-cover"
                  src="/images/trustee-2.jpeg"
                  alt=""
                />
              </div>
              <h1 className="truste-name text-zinc-800 font-medium text-2xl mt-2 text-center">
                Aastha thakur
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

        {/* <div className="our-motive bg-[#3F4359] w-full h-fit p-5 lg:flex lg:flex-row">
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
        </div> */}
      </div>
    </>
  );
};

export default About;
