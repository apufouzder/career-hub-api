import FeaturedJobsSection from "../FeaturedJobsSection/FeaturedJobsSection";
import HeroSection from "../HeroSection/HeroSection";
import JobCategoryList from "../JobCategoryList/JobCategoryList";



const Home = () => {
    return (
        <div>
            <HeroSection />
            <JobCategoryList />
            <FeaturedJobsSection />
        </div>
    );
};

export default Home;