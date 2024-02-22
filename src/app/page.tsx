import TeaseHomeSection from "@/components/section/TeaseHomeSection";
import AboutSection from "@/components/section/home/AboutSection";
import FleetSection from "@/components/section/home/FleetSection";
import ImageLayerSection from "@/components/section/home/ImageLayerSection";
import PromisEndSection from "@/components/section/home/PromisEndSection";
import PromisSection from "@/components/section/home/PromisSection";

export default function Home() {
  return (
    < >
      <TeaseHomeSection/>
      <FleetSection/>
      <AboutSection />
      <ImageLayerSection/>
      <PromisSection />
      <PromisEndSection/>
    </>
  );
}
