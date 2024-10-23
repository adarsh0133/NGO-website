import { RiArrowDownSLine } from "@remixicon/react";
import React, { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Home = () => {
  const [activeTab, setActiveTab] = useState("aboutus");
  return (
    <>
      <NavBar />
      <div className="homepage w-full h-fit text-white pt-20">
        <div className="homepage-content w-full h-full bg-zinc-900 p-10 flex flex-col items-center justify-center backdrop-blur-lg bg-[url(https://plus.unsplash.com/premium_photo-1682092585257-58d1c813d9b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-[center_top_40%]">
          <div className="homepage-content-text lg:pl-40">
            <h1 className="text-4xl font-bold lg:text-8xl uppercase lg:w-1/2">
              {" "}
              <span className="text-2xl mb-4 inline-block lg:text-4xl lg:font-semibold">
                Welcome to
              </span>{" "}
              <br /> Needy Binders Cause NGO
            </h1>
            <p className="text-lg mt-10 font-semibold lg:w-1/3 text-zinc-100">
              We are a non-profit organization that empowers young people to
              make a difference in their communities.
            </p>
          </div>
          <div className="homepage-arrow flex items-center justify-center mt-10">
            <RiArrowDownSLine size={50} />
          </div>
        </div>
        <div className="aboutus-wrapper w-full h-fit bg-zinc-50 p-5 lg:p-10 lg:flex lg:flex-row lg:justify-between">
          <div className="aboutus w-full h-fit lg:w-1/2 ">
            <h1 className="capitalize text-3xl font-bold mt-5 text-[#3F4359]">
              Learn About Us
            </h1>
            <h1 className="text-4xl font-bold text-[#FFBA01] mt-2 mb-3">
              Needy Binders NGO
            </h1>
            <div className="img-container w-full h-[60vh] lg:w-1/2 lg:ml-20 bg-red-300">
              <img
                className="size-full object-cover"
                src="/images/homepic.jpeg"
                alt=""
              />
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

        <div className="whatwedo w-full h-fit bg-[#D24C79] p- pt-10">
          <h1 className="text-3xl font-bold text-[#FFBA01] text-center">
            What We Do?
          </h1>
          <h1 className="text-3xl font-bold text-[#3F4359] text-center mt-8 lg:w-2/3 lg:mx-auto lg:text-4xl">
            We {"don't"} need a cause to help those in need while spreading
            awareness
          </h1>

          <div className="cards-wrapper lg:grid lg:grid-cols-2 lg:gap-5">
            <div className="cards flex items-center justify-center gap-5 mt-10">
              <div className="card w-full h-fit p-5 flex items-center justify-center gap-3">
                <div className="card-img w-[100vh] h-[30vh] bg-red-50">
                  <img
                    className="w-full h-full object-cover"
                    src="https://i.pinimg.com/736x/c3/fe/c6/c3fec6f2222710c9f6656c608fded95e.jpg"
                    alt=""
                  />
                </div>
                <div className="card-text mt-5">
                  <h1 className="text-2xl font-bold text-[#FFBA01]">
                    ZERO POVERTY & SKILL DEVELOPMENT
                  </h1>
                  <p className="text-lg font-semibold text-white leading-tight mt-5">
                    We tend to teach poor men and women skills such as knitting,
                    pottery, and weaving so that they can make their own
                    products and sell them in the market, allowing them to
                    become self-sufficient.
                  </p>
                </div>
              </div>
            </div>
            <div className="cards flex items-center justify-center gap-5 mt-10">
              <div className="card w-full h-fit p-5 flex items-center justify-center gap-3">
                <div className="w-[100vh] h-[30vh] card-img bg-red-50">
                  <img
                    className="w-full h-full object-cover"
                    src="/images/hungerimg.jpeg"
                    alt=""
                  />
                </div>
                <div className="card-text mt-5">
                  <h1 className="text-2xl font-bold text-[#FFBA01]">
                    Empowering Communities, Eradicating Hunger
                  </h1>
                  <p className="text-lg font-semibold text-white leading-tight mt-5">
                    Hunger is not just about empty stomachs—it’s about the
                    potential that’s lost. We believe in a world where everyone
                    has access to food, and together, we can make this vision a
                    reality by serving meals and supporting sustainable
                    solutions to end hunger.
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="cards flex items-center justify-center gap-5 mt-10">
              <div className="card w-full h-fit p-5 flex items-center justify-center gap-3">
                <div className="card-img w-[100vh] h-[30vh] bg-red-50">
                  <img className="w-full h-full object-cover" src="https://i.pinimg.com/474x/b8/23/0d/b8230d678ecef713e62d6d4a07fb0082.jpg" alt="" />
                </div>
                <div className="card-text mt-5">
                  <h1 className="text-2xl font-bold text-[#FFBA01]">
                    ZERO POVERTY & SKILL DEVELOPMENT
                  </h1>
                  <p className="text-lg font-semibold text-white leading-tight mt-5">
                    We tend to teach poor men and women skills such as knitting,
                    pottery, and weaving so that they can make their own
                    products and sell them in the market, allowing them to
                    become self-sufficient.
                  </p>
                </div>
              </div>
            </div>
            <div className="cards flex items-center justify-center gap-5 mt-10">
              <div className="card w-full h-fit p-5 flex items-center justify-center gap-3">
                <div className="card-img w-[100vh] h-[30vh] bg-red-50">
                  <img className="w-full h-full object-cover" src="https://startupsmagazine.co.uk/sites/default/files/2023-05/pr.png" alt="" />
                </div>
                <div className="card-text mt-5">
                  <h1 className="text-2xl font-bold text-[#FFBA01]">
                    ZERO POVERTY & SKILL DEVELOPMENT
                  </h1>
                  <p className="text-lg font-semibold text-white leading-tight mt-5">
                    We tend to teach poor men and women skills such as knitting,
                    pottery, and weaving so that they can make their own
                    products and sell them in the market, allowing them to
                    become self-sufficient.
                  </p>
                </div>
              </div>
            </div> */}
          </div>

          <div className="video-container w-full h-fit p-10">
            <video
              src=""
              className="w-full h-[30vh] lg:w-2/3 lg:h-[60vh] lg:mx-auto object-cover bg-red-400"
            ></video>
          </div>
        </div>

        <div className="donate w-full h-fit bg-[#3F4359] p-10 flex flex-col items-center justify-center gap-5 text-center">
          <img
            src="https://static.wixstatic.com/media/933dd2_444dcdef8e1a4112af473ecbd93081ed~mv2.png/v1/fill/w_98,h_98,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/dil.png"
            alt=""
          />
          <h1 className="text-3xl font-bold text-[#FFBA01]">
            {"Let's donate for a cause"}
          </h1>
          <h1 className="text-4xl font-bold text-[#FFBA01] mt-4">
            {"''Your Donation their hope'' "}
          </h1>
          <div className="size-[50vh] max-[600px]:size-[30vh] bg-white">
            <img
              className="size-full object-cover"
              src="/images/qrcode.jpeg"
              alt=""
            />
          </div>
          <button className="bg-[#FFBA01] text-black px-5 py-2 rounded-md font-bold text-lg mt-5">
            Donate Now
          </button>
        </div>

        <div className="join-us w-full h-fit p-5 pb-10 bg-[#CC3366] flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-[#FFBA01] capitalize text-center">
            Become a warrior with us today!
          </h1>
          <div className="points-div pt-10 pb-10">
            <h1 className="font-semibold text-xl">
              Eligibility: Individuals above 16 years of age
            </h1>
            <h1 className="font-semibold text-xl">Minimum Tenure: 3 Months</h1>
            <h1 className="font-semibold text-xl">
              Benefits of Joining Our Organization:
            </h1>
            <ul className="text-white list-disc list-inside ml-4 font-semibold mt-2">
              <li className="mt-2">
                Making an Impact: Gain valuable experience in fieldwork and
                directly contribute to improving the lives of those in need.
              </li>
              <li className="mt-2">
                Skill Development: Enhance your abilities in teamwork, ideation,
                project management, communication, leadership, and
                problem-solving.
              </li>
              <li className="mt-2">
                Societal Contribution: Engage in SEWA (Selfless Service) and
                make a meaningful difference by uplifting marginalized
                communities.
              </li>
              <li className="mt-2">
                Resume Building: The practical skills and experiences you gain
                will significantly boost your CV, setting you apart in future
                academic or career pursuits.
              </li>
              <li className="mt-2">
                Better Networking: Connect with a diverse network of passionate
                volunteers, professionals, NGOs, and companies with shared goals
                of social impact.
              </li>
              <li className="mt-2">
                Certificate of Completion: Receive an official certificate
                recognizing your contributions at the end of the program.
              </li>
              <li className="mt-2">
                Exposure to Real-World Challenges: Work on the ground in slum
                communities, experiencing firsthand the real issues people face
                and learning how to address them effectively.
              </li>
              <li className="mt-2">
                Leadership Opportunities: Gain the chance to lead and manage
                projects, improving your leadership and organizational skills.
              </li>
              <li className="mt-2">
                Personal Fulfillment: Experience the joy and satisfaction of
                helping others, knowing that your actions are creating real,
                lasting change in society.
              </li>
              <li className="mt-2">
                Training and Mentorship: Receive training and mentorship from
                experienced team leaders, enhancing your professional and
                personal growth.
              </li>
            </ul>
          </div>
          <button className="bg-[#FFBA01] text-black px-20 py-4 rounded-md font-bold text-xl">
            Join Us
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
