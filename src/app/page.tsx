import HomeScreen from "../features/home/screens/home.screens";
import PromoBanner from "../features/home/components/PromoBanner";
import OurCategories from "../features/home/components/OurCategories";
import DealsBanner from "../features/home/components/DealsBanner";
import FeaturedProducts from "../features/home/components/FeaturedProducts";
import NewsLatter from "../features/home/components/NewsLatter";


export default function Home() {
  return <>
    <div>
      <div>
        <HomeScreen />
      </div>
      <div>
        <PromoBanner/>
      </div>
      <div>
        <OurCategories/>
      </div>
      <div>
        <DealsBanner/>
      </div>
      <div>
        <FeaturedProducts/>
      </div>
      <div>
        <NewsLatter/>
      </div>
    </div>
  </>
}
