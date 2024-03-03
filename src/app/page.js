
import HeroSection from "./components/HeroSection"
import Menu from "./components/Menu"

import Works from "./components/Works"
import Transport from "./components/Transport"
import Question from "./components/Question"
import Safe from "./components/Safe"
import Intro from "./components/Intro"
import Footer from "./components/Footer"
import AboutSection from "./components/AboutSection"

export default function Home() {
  return (
    <main className="flex  flex-col bg-white ">
    <Menu/>
    <div className=" mt-24 mx-auto  py-4  ">
    <HeroSection/>
    </div>
   <AboutSection/>
   <Works/>
   <Transport/>
   <Safe/>
   <Question/>
   <Intro/>
   <Footer/>
   
 
   
   
    </main>
  )
}
