import GymTimings from "./GymTimings";
import Hero from "./Hero";
import DietServicesBanner from "./DietServicesBanner";
import GymAccessBanner from "./GymAccessBanner";
import ProductShowcase from "./ProductShowcase";
import ConnectSection from "./ConnectSection";
import WhyChooseUs from "./WhyChooseUs";
import MembershipPlans from "./MembershipPlans";
import { productShowcaseData } from "../data/productShowcase";
import CommunityGallery from "./CommunityGallery";
import SEO from "./SEO";

function Home() {
    return (
        <>
            <SEO 
                title="Home"
                description="Bengaluru Fitness Connection (BFC) - Premier gym in Bengaluru offering world-class equipment, personal training, and a supportive community. Join us today!"
                keywords="gym, fitness, bengaluru, personal training, workout, health, bodybuilding, cardio"
            />
            <div className="snap-start">
                <Hero />
            </div>
            <WhyChooseUs />
            <DietServicesBanner />
            <GymTimings />
            <GymAccessBanner />
            <ProductShowcase products={productShowcaseData} />
            <CommunityGallery />
            <MembershipPlans disableSEO={true} />
            <ConnectSection />
        </>
    );
}

export default Home;
