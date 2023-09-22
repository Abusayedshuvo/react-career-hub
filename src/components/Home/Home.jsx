import FeaturesJobs from "../FeaturedJobs/FeaturesJobs";
import JobCategory from "../JobCategory/JobCategory";
import Banner from "./../Banner/Banner";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <JobCategory></JobCategory>
      <FeaturesJobs></FeaturesJobs>
    </div>
  );
};

export default Home;
