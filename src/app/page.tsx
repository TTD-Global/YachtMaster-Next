import TeaseHomeSection from "@/components/section/TeaseHomeSection";
import AboutSection from "@/components/section/home/AboutSection";
import FleetCarousel from "@/components/section/home/FleetCarousel";
import FleetSection from "@/components/section/home/FleetSection";
import ImageLayerSection from "@/components/section/home/ImageLayerSection";
import PromisEndSection from "@/components/section/home/PromisEndSection";
import PromisSection from "@/components/section/home/PromisSection";

export default function Home() {
  const items = [
    {
      img: '/images/cards/news_ep_1/card-01.png',
      link: '/fleet_speedboat1',
      numSpeed: '60',
      numPassangers: '12',
      subtitle: 'Speed Boat 1 Engine',
      description: 'Swift and agile, perfect for intimate journeys and coastal explorations.',
    },
    {
      img: '/images/cards/news_ep_1/card-02.png',
      link: '/fleet_speedboat2',
      numSpeed: '80',
      numPassangers: '32',
      subtitle: 'Speed Boat 2 Engine',
      description: 'Increased power for a dynamic and thrilling ride, ideal for island-hopping adventures.',
    },
    {
      img: '/images/cards/news_ep_1/card-03.png',
      link: '/fleet_speedboat3',
      numSpeed: '90',
      numPassangers: '47',
      subtitle: 'Speed Boat 3 Engine',
      description: 'Unmatched speed and agility, ensuring a fast and exhilarating experience on the water.',
    },
    {
      img: '/images/cards/news_ep_1/card-04.png',
      link: '/fleet_speed_cat',
      numSpeed: '110',
      numPassangers: '70',
      subtitle: 'Speed Catamaran 4 Engines',
      description: 'Cutting-edge design and stability, offering a high-speed and smooth sailing experience.',
    },
    {
      img: '/images/cards/news_ep_1/card-05.png',
      link: '/fleet_power_cat',
      numSpeed: '250',
      numPassangers: '70',
      subtitle: 'Power Catamaran',
      description: 'A blend of power and luxury, providing a comfortable and efficient mode of marine transportation.',
    },
  ];
  return (
    < >
      <TeaseHomeSection/>
      <FleetCarousel items={items}/>
      <AboutSection />
      <ImageLayerSection/>
      <PromisSection />
      <PromisEndSection/>
    </>
  );
}
