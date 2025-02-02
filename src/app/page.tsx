import Homepage from "@/components/Homepage/home";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import {AuroraBackgroundDemo} from "@/components/demo";

export default function Home() {
  return (
    <div>
      <Navbar />
      <AuroraBackgroundDemo />
    <Homepage/>
    <Footer />
    </div>
  );
}
