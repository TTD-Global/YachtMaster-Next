import {
  PartnerSection,
  ServiceSection,
  BannerPageSection,
  HeroSection,
  PopularSection,
  AweInspiringSection,
} from "@/components/common";

export default function Home() {
  return (
    <section className="w-full mt-8">
      <div className="main__container mx-auto">
        <HeroSection className="" />
        <PopularSection className="mt-20" />
        <AweInspiringSection className="mt-20" />
      </div>
      <BannerPageSection className="w-full mt-12" />
      <div className="main__container  mx-auto">
        <ServiceSection className="mt-12" />
        <PartnerSection className="my-12" />
      </div>
      <div className="clear-both">&nbsp;</div>
    </section>
  );
}
