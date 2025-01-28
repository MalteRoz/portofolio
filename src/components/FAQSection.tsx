import React from "react";
import SectionHeader from "./SectionHeader";
import FAQAccordion from "./FAQAccordion";
import "./scss/_faqSection.scss";

const FAQ = () => {
  return (
    <>
      <SectionHeader title="Have questions?" biggerSubheader="Get answers." />
      <section className="FAQ-section">
        <FAQAccordion
          question="How did i find tech?"
          answer="Like a lot of young kids, I enjoyed playing video games with my friends. It all started on a PS3, but soon it turned into a PC. With the PC, I became interested in tweaking parts and improving performance. This passion led to an internship at Betspawn during my time in middle school. Betspawn was one of the first websites focused on e-sports betting, and I got in contact with a lot of tech and, of course, coding. That was the first time I saw code, and I found it really interesting, but unfortunately, I didn’t pursue further knowledge after the internship."
          answer2="Soon enough, I grew away from playing video games and entered high school. It wasn't until the last year of high school that I became interested in app development and decided to take some minor JavaScript courses on Codecademy. I stuck with it for a few months, but then I stopped for some reason. The second year after high school, I rediscovered coding. Me and some friends started brainstorming ideas for cool startups, but I wanted more. I started to take learning more seriously, and now I’m pursuing a Full Stack Web Developer diploma at Medieinstitutet, and there is more to come."
        />
        <FAQAccordion
          question="What's it like working with me? "
          answer="A stock app built with the MERN stack, allowing users to browse stocks, news, crypto and more. Features include user authentication, stock search with suggestions, and the ability to save favorite stocks."
        />
        <FAQAccordion
          question="How's my working progress"
          answer="A stock app built with the MERN stack, allowing users to browse stocks, news, crypto and more. Features include user authentication, stock search with suggestions, and the ability to save favorite stocks."
        />
        <FAQAccordion
          question="Right now and the future"
          answer="As I mentioned earlier, I am currently a student and will be finishing my studies by May 2026. Right now, my focus is on learning as much as possible, finding my style, and refining my skills. I am currently working on expanding my knowledge in backend development to ensure safe data storage for users."
          answer2="I am also looking for an internship this summer and next autumn. I hope to learn a lot during these periods, especially about how the industry works and, of course, the technologies used at companies. If you have any tips for my upcoming internships, feel free to reach out via the link at the bottom of the page!"
          answer3="After graduating from Medieinstitutet, I dream of landing a full-stack app developer job, but I would like to see if the web development path suits me first."
        />
        <FAQAccordion
          question="What else goes on in my life? "
          answer="A stock app built with the MERN stack, allowing users to browse stocks, news, crypto and more. Features include user authentication, stock search with suggestions, and the ability to save favorite stocks."
        />
      </section>
    </>
  );
};

export default FAQ;
