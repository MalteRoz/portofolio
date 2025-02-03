import React from "react";
import SectionHeader from "./SectionHeader";
import FAQAccordion from "./FAQAccordion";
import "./scss/_faqSection.scss";
import UpperWrapper from "./UpperWrapper";
import LowerWrapper from "./LowerWrapper";

const FAQ = () => {
  return (
    <>
      <UpperWrapper>
        <SectionHeader title="Have questions?" biggerSubheader="Get answers." />
      </UpperWrapper>{" "}
      <LowerWrapper>
        <section className="FAQ-section">
          <FAQAccordion
            question="How did i find tech?"
            answer="Like a lot of young kids, I enjoyed playing video games with my friends. It all started on a PS3, but soon it turned into a PC. With the PC, I became interested in tweaking parts and improving performance. This passion led to an internship at Betspawn during my time in middle school. Betspawn was one of the first websites focused on e-sports betting, and I got in contact with a lot of tech and, of course, coding. That was the first time I saw code, and I found it really interesting, but unfortunately, I didn’t pursue further knowledge after the internship."
            answer2="Soon enough, I grew away from playing video games and entered high school. It wasn't until the last year of high school that I became interested in app development and decided to take some minor JavaScript courses on Codecademy. I stuck with it for a few months, but then I stopped for some reason. The second year after high school, I rediscovered coding. Me and some friends started brainstorming ideas for cool startups, but I wanted more. I started to take learning more seriously, and now I’m pursuing a Full Stack Web Developer diploma at Medieinstitutet, and there is more to come."
          />
          <FAQAccordion
            question="What's it like working with me? "
            answer="I'm a team player and like to gather as many perspectives as possible before I dive into a task. I focus on making sure both my own and others' ideas are heard. Communication and transparency are key if a group is going to succeed, and I always strive to create an open and collaborative environment."
          />
          <FAQAccordion
            question="How's my working progress"
            answer="I'm big on planning and setting everything up before diving in to ensure a smooth process throughout the project. Changes will always come up during development, but having a well-structured plan makes it easier to get an initial picture of how the end product should behave and look. I focus on keeping my work structured and minimalistic."
            // answer2="I start by taking initial notes on the intended functionality. Then, I map out the application's flow to identify potential challenges and find the most efficient way to begin."
            answer3="My problem-solving method follows five steps:
                  1. Understanding the problem
                  2. Writing a step-by-step list in plain English
                  3. Turning that list into pseudocode
                  4. Implementing the code
                  5. Testing the final solution
                  This method isn't just for coding—it can be applied to many types of problem-solving. Try it yourself! 😊"
          />
          <FAQAccordion
            question="Right now and the future"
            answer="As I mentioned earlier, I am currently a student and will be finishing my studies by May 2026. Right now, my focus is on learning as much as possible, finding my style, and refining my skills. I am currently working on expanding my knowledge in backend development to ensure safe data storage for users."
            answer2="I am also looking for an internship this summer and next autumn. I hope to learn a lot during these periods, especially about how the industry works and, of course, the technologies used at companies. If you have any tips for my upcoming internships, feel free to reach out via the link at the bottom of the page!"
            answer3="After graduating from Medieinstitutet, I dream of landing a full-stack app developer job, but I would like to see if the web development path suits me first."
          />
          <FAQAccordion
            question="What else goes on in my life? "
            answer="I love football and try to spend as much time as possible playing. When I'm not on the field, I'm either working out in other ways or spending time with friends and family, cooking food and enjoying some beer or wine."
          />
        </section>
      </LowerWrapper>
    </>
  );
};

export default FAQ;
