import Header from "./components/Header";
import Contents from "./components/Contents";
import Contents2nd from "./components/Content2nd";
import feature1 from "./img/feature-1.png";
import feature2 from "./img/feature-2.png";
import feature3 from "./img/feature-3.png";
import feature4 from "./img/feature-4.png";
import Accordion from "./components/Accordion";
import Footer from "./components/Footer";

function NetflixHome() {
  return (
    <>
      <Header />
      <Contents
        title="Enjoy on your TV"
        description="Watch on Smart TVs"
        image={feature1}
      />
      <Contents2nd
        image={feature2}
        title="Download shows to watch"
        description="Save your favorites easily"
      />
      <Contents
        title="Watch everywhere"
        description="Stream unlimited movies "
        image={feature3}
      />
      <Contents2nd
        image={feature4}
        title="Create profiles for kids"
        description="Send kids on adventures"
      />
      <Accordion />
      <Footer />
    </>
  );
}

export default NetflixHome;
