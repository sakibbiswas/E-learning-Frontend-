import AboutUsSection from "../components/AboutUsSection";
import CourseList from "../components/CourseList";
import ElearningStatsAndBlog from "../components/ElearningStatsAndBlog";
import FeaturesSection from "../components/FeaturesSection";
import HeroBanner from "../components/HeroBanner";
import { useRef } from "react";
import InstructorsSection from "../components/InstructorsSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

const Home = () => {
  const courseListRef = useRef<HTMLDivElement>(null);

  // Scroll function to pass to HeroBanner
  const scrollToCourses = () => {
    if (courseListRef.current) {
      courseListRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full ">
      <HeroBanner onViewCoursesClick={scrollToCourses} />
      <FeaturesSection/>
      <div ref={courseListRef}>
        <CourseList />
        <AboutUsSection/>
        <InstructorsSection/>
        <FAQSection/>
        <ElearningStatsAndBlog/>
        <Contact/>
        <Footer/>
      </div>
      
    </div>
  );
};

export default Home;
