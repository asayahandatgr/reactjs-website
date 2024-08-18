import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Tutors from "../components/Tutors";
import '../styles/Home.css';
import { homeSection } from "../data/HomeSection";
import { courseSection } from "../data/CourseSection";
import { tutorsSection, tutorList } from "../data/TutorsSection";
import { patnersSection, patnersList } from "../data/PatnersSection";
import Patners from "../components/Patners";
import Contact from "../components/Contact";
import { contactSection } from "../data/ContactSection";

import parse from 'html-react-parser'
function Home() {
  return (
    <>
    <Navbar/>
    <div className="wrapper">
      {/* home */}
      <section id="home">
            <img src={homeSection.image}/>
            <div className="kolom">
                {parse(homeSection.content)}
            </div>
        </section>
        {/* end home */}

        {/* course */}
        <section id="courses">
            <div className="kolom">
                {parse(courseSection.content)}
            </div>
            <img src={courseSection.image}/>
        </section>

        {/* tutors */}
        <section id="tutors">
            <div className="tengah">
                <div className="kolom">
                    {parse(tutorsSection.content)}
                </div>
                <Tutors tutorList={tutorList} />
            </div>
        </section>

        {/* patner */}
        <section id="partners">
            <div className="tengah">
                <div className="kolom">
                    {parse(patnersSection.content)}
                </div>
                <Patners patnersList={patnersList}/>
            </div>
        </section>
    </div>
    <Contact contactSection={contactSection}/>
    <Footer/>
    </>
  )
}

export default Home
