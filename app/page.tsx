import Header from "./components/header";
import Navbar from "./components/navbar";
import ImageSlider from "./components/imageSlider";
import Contents from "./components/contents";
import News from "./components/news";
import Announce from "./components/announce";
import Serve from "./components/serve" ;
import OnlineLearning from "./components/onlineLearning";
import Tools from "./components/tools";
import SmartUp from "./components/smartUp";
import Footer from "./components/footer";
export default function Home() {
  return (
    <div className="box-border overflow-hidden">
      {/* <Header /> */}
      <Navbar />
      <ImageSlider />
      <Contents />
      <div className="md:relative">
        <News />
        <div className="md:absolute lg:bottom-[-7%] lg:translate-x-[50%] lg:right-[50%] md:bottom-[-100px] md:translate-x-[50%] md:right-[50%]">
            <Announce />
        </div>
      </div>
      <Serve />
      <OnlineLearning />
      <Tools />
      <SmartUp />
      <Footer />
    </div>
  );
}
