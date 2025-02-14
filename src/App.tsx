import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import FeaturesSection from "./components/FeaturesSection"
import UncoverLatestSection from "./components/UncoverLatestSection"
import DiscoverFutureSection from "./components/DiscoverFutureSection"
import ExperienceSection from "./components/ExperienceSection"
import CommunitySection from "./components/CommunitySection"
import Footer from "./components/Footer"
import ReactFullpage from "@fullpage/react-fullpage"

function App() {
  return (
    <ReactFullpage
      licenseKey={'YOUR_KEY_HERE'}
      scrollingSpeed={1000}
      responsiveWidth={800} // Makes fullpage scroll responsive below this width
      render={({ state, fullpageApi }) => (
        <div className="bg-gradient-to-b from-[#000022] to-[#000044] text-white relative">
          <div className="relative z-10"> {/* Navbar inside content wrapper */}
            <Navbar />
            <ReactFullpage.Wrapper>
              {/* Update all sections to have proper z-index */}
              <div className="section relative z-10">
                <HeroSection />
              </div>
              <div className="section relative z-10">
                <FeaturesSection />
              </div>
              <div className="section relative z-10">
                <UncoverLatestSection />
              </div>
              <div className="section relative z-10">
                <DiscoverFutureSection />
              </div>
              <div className="section relative z-10">
                <ExperienceSection />
              </div>
              <div class="section relative z-10">
                <CommunitySection />
              </div>
              <div className="section relative z-10">
                <Footer />
              </div>
            </ReactFullpage.Wrapper>
          </div>
        </div>
      )}
    />
  )
}

export default App

