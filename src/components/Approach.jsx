import React, { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { RiStarFill, RiArrowRightUpFill } from "@remixicon/react";

const Approach = () => {
  const [activeTab, setActiveTab] = useState("aboutus");
  return (
    <>
      <NavBar />
      <div className="w-full h-fit">
        <div className="w-full h-[35vh] lg:h-[50vh] flex flex-col justify-center items-center text-white border-b-2 bg-zinc-600">
          <h1 className="text-4xl font-bold">Our Approach</h1>
        </div>
        <div className="aboutus-wrapper w-full h-fit bg-zinc-50 p-5 lg:p-10 lg:flex lg:flex-row lg:justify-between">
          <div className="aboutus w-full h-fit lg:w-1/2 ">
            <h1 className="capitalize text-3xl font-bold mt-5 text-[#3F4359]">
              Learn About Us
            </h1>
            <h1 className="text-4xl font-bold text-[#FFBA01] mt-2 mb-3">
              WARRIORS WITHOUT CAUSE
            </h1>
            <div className="img-container w-full h-[60vh] lg:w-1/2 lg:ml-20">
              <img
                className="w-full h-full object-cover"
                src="https://static.wixstatic.com/media/933dd2_0c49800d81d54a7798aaa7dc6102c49b~mv2.png/v1/fill/w_560,h_746,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/IMG_9394_heic.png"
                alt=""
              />
            </div>
          </div>
          <div className="missionInfo w-full h-fit text-black pt-5 lg:w-1/2">
            <div className="tabs text-2xl font-bold flex gap-5 items-center justify-center">
              <button onClick={() => setActiveTab("aboutus")}>
                Aim & Objective
              </button>
              <button onClick={() => setActiveTab("mission")}>
                Our Projects
              </button>
              <button onClick={() => setActiveTab("vision")}>
                Our Core Values
              </button>
            </div>
            <div className="tab-content font-semibold">
              {activeTab === "aboutus" && (
                <div className="mt-5">
                  <ul>
                    <li>
                      <strong>QUALITY EDUCATION AND SKILLS:</strong> We educate
                      children weekly subjects such as English Language, which
                      covers speaking and writing abilities, listening skills
                      and personality development, Soft Skills, Nutrition, Soft
                      skill development, and others. We enroll slum children in
                      public schools. We conduct Legal literacy and financial
                      literacy workshops for women and men.
                    </li>
                    <li>
                      <strong>GOOD HEALTH AND WELL-BEING:</strong> We are
                      dedicated to promoting good health and well-being of
                      underprivileged. This encompasses providing access to
                      healthcare facilities and government schemes, distributing
                      sanitary pads, advocacy of menstrual health, particularly
                      targeting underserved communities.
                    </li>
                    <li>
                      <strong>ZERO HUNGER AND ZERO POVERTY:</strong> We are
                      committed to alleviating hunger and poverty in India. Our
                      efforts include distributing supplies and prepared meals
                      to families to combat malnutrition.
                    </li>
                    <li>
                      <strong>EMPLOYMENT:</strong> Our focus is on empowering
                      women through skill training in areas like stitching,
                      crochet. This training equips them with the skills needed
                      to generate income through the creation and sale of
                      products, ultimately leading them towards
                      self-sufficiency.
                    </li>
                  </ul>
                </div>
              )}
              {activeTab === "mission" && (
                <div className="mt-5">
                  <ul>
                    <li>
                      <strong>PROJECT VIDYAKSHA:</strong> We teach the
                      underprivileged children basic English, Science and Maths
                      along with soft skills for personality and aptitude
                      development. We enroll slum children in public schools. We
                      conduct Legal literacy and financial literacy workshops
                      for women and men.
                    </li>
                    <li>
                      <strong>PROJECT SWASTHYA RAKSHA:</strong> Access to
                      restrooms, distribution of sanitary pads, and education
                      about menstrual hygiene are all part of the program. We
                      regularly conduct health camps and enroll citizens to
                      healthcare schemes.
                    </li>
                    <li>
                      <strong>PROJECT ROZGAAR:</strong> Our focus is on
                      empowering women through skill training in areas like
                      stitching, crochet. This training equips them with the
                      skills needed to generate income through the creation and
                      sale of products, ultimately leading them towards
                      self-sufficiency.
                    </li>
                  </ul>
                </div>
              )}
              {activeTab === "vision" && (
                <div className="mt-5">
                  <h2 className="text-2xl font-bold mt-5">
                    Our NGO is guided by a set of fundamental principles that
                    underpin our mission and drive our actions. These core
                    values define who we are and what we stand for:
                  </h2>
                  <ol className="list-decimal list-inside mt-5">
                    <li>
                      <strong>Equality:</strong> We firmly believe in the
                      principles of equality, advocating for equal opportunities
                      regardless of factors such as gender, race, religion, or
                      social background.
                    </li>
                    <li>
                      <strong>Empowerment:</strong> Our mission revolves around
                      empowering individuals to take control of their lives. We
                      support them in making informed choices and enable them to
                      contribute meaningfully to their communities.
                    </li>
                    <li>
                      <strong>Compassion:</strong> We approach our work with the
                      utmost empathy and compassion. Our actions are driven by a
                      genuine desire to alleviate their suffering and improve
                      their well-being.
                    </li>
                    <li>
                      <strong>Innovation:</strong> Embracing innovation and
                      creativity is at the core of our approach. We are
                      constantly on the lookout for new and more efficient ways
                      to address the challenges faced by the communities we work
                      with.
                    </li>
                    <li>
                      <strong>Transparency:</strong> We believe in operating
                      with complete transparency. Our actions, decisions, and
                      use of resources are open for scrutiny and evaluation. We
                      ensure that our stakeholders have a clear view of our
                      operations, finances, and results, building trust and
                      accountability in our work.
                    </li>
                  </ol>
                  <h2 className="text-2xl font-bold mt-5">
                    These core values guide us in our pursuit of a more
                    equitable, empowered, and compassionate world, where
                    sustainable change is driven by the principles of
                    collaboration, quality, innovation, and transparency.
                  </h2>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="our-motive bg-[#BE3565] w-full h-fit p-5 pb-16 lg:p-40">
          <h1 className="text-white text-center text-3xl font-bold lg:text-4xl">
            WARRIORS WITHOUT CAUSE (WWC) WORKS TO ACHIEVE SUSTAINABLE
            DEVELOPMENT GOALS
          </h1>
          <div className="card-container w-full h-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center mt-10 lg:px-40">
            <div className="motive-cards text-center bg-[#F6EBE4] w-full h-[40vh]">
              <img
                className="w-full h-full "
                src="https://static.wixstatic.com/media/933dd2_db20a95f6c9a480799aa05b1597db60f~mv2.png/v1/fill/w_315,h_315,al_c,lg_1,q_85,enc_auto/1%20(1).png"
                alt=""
              />
            </div>
            <div className="motive-cards text-center bg-[#F6EBE4] w-full h-[40vh]">
              <img
                className="w-full h-full"
                src="https://static.wixstatic.com/media/933dd2_31320c86990645c4a99f49a94c96a84d~mv2.png/v1/fill/w_315,h_315,al_c,lg_1,q_85,enc_auto/2%20(1).png"
                alt=""
              />
            </div>
            <div className="motive-cards text-center bg-[#F6EBE4] w-full h-[40vh]">
              <img
                className="w-full h-full"
                src="https://static.wixstatic.com/media/933dd2_1e84a940236c4edd9a29fc5250615073~mv2.png/v1/fill/w_594,h_594,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3%20(1).png"
                alt=""
              />
            </div>
            <div className="motive-cards text-center bg-[#F6EBE4] w-full h-[40vh]">
              <img
                className="w-full h-full"
                src="https://static.wixstatic.com/media/933dd2_c9c40750f485435981b55429f71a221d~mv2.png/v1/fill/w_594,h_594,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4.png"
                alt=""
              />
            </div>
            <div className="motive-cards text-center bg-[#F6EBE4] w-full h-[40vh]">
              <img
                className="w-full h-full"
                src="https://static.wixstatic.com/media/933dd2_114a658032fa441d814d945590c3c3cd~mv2.png/v1/fill/w_315,h_315,al_c,lg_1,q_85,enc_auto/5.png"
                alt=""
              />
            </div>
            <div className="motive-cards text-center bg-[#F6EBE4] w-full h-[40vh]">
              <img
                className="w-full h-full"
                src="https://static.wixstatic.com/media/933dd2_4e1bffc2cb5746f7b706d95bd1514174~mv2.png/v1/fill/w_315,h_315,al_c,lg_1,q_85,enc_auto/8.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="wwc-buzz w-full h-fit bg-[#3F4359] p-5 lg:p-10">
          <h1 className="text-5xl font-bold text-white">WWC Buzz</h1>
          <div className="flex flex-col lg:flex-row">
            <div className="buzz-img-container w-[80%] h-[45vh] m-auto mt-10 lg:w-[30%] lg:h-[65vh]">
              <img
                className="w-full h-full"
                src="https://static.wixstatic.com/media/933dd2_83fde27a507e4333a5b2f878cf728803~mv2.png/v1/fill/w_460,h_666,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/WWC%20Buzz%20-%2055.png"
                alt=""
              />
            </div>
            <p className="text-white text-2xl font-light mt-10 lg:w-1/2">
              Dear Readers, As we launch "The WWC Buzz," the founders of
              Warriorswithoutcause are overcome with gratitude and delight. We
              are finally here with our very own newsletter issue after a
              protracted journey of commitment, adversity, and passion. With the
              express intention of empowering people with love, instilling the
              SEWA practice, and helping the community, we founded this NGO. The
              WWC Buzz is more than just another newsletter; it's a way for us
              to keep our goal to give you meaningful explanations of
              innovation, teamwork, and societal sustainability. We intend to
              build a network of like-minded people who support our vision of a
              better world through this newsletter. We are eager to share with
              you our upcoming projects and initiatives, which include
              partnerships with other NGOs and sustainable development
              initiatives. We at WWC, believe that by working together, we can
              have a significant impact on society and improve the quality of
              life for everyone which is why we work on sustainable development
              goals.
            </p>
          </div>
        </div>

        <div className="whatwedo w-full h-fit bg-[#D24C79] p- pt-10">
          <h1 className="text-3xl font-bold text-[#FFBA01] text-center">
            What We Do?
          </h1>
          <h1 className="text-3xl font-bold text-[#3F4359] text-center mt-8 lg:w-2/3 lg:mx-auto lg:text-4xl">
            We don't need a cause to help those in need while spreading
            awareness
          </h1>

          <div className="cards-wrapper lg:grid lg:grid-cols-2 lg:gap-5">
            <div className="cards flex items-center justify-center gap-5 mt-10">
              <div className="card w-full h-fit p-5 flex items-center justify-center gap-3">
                <div className="card-img w-[100vh] h-[30vh] bg-red-50">
                  <img className="w-full h-full object-cover" src="" alt="" />
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
                  <img className="w-full h-full object-cover" src="" alt="" />
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
                  <img className="w-full h-full object-cover" src="" alt="" />
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
                  <img className="w-full h-full object-cover" src="" alt="" />
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Approach;
