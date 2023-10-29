import Hero from "../components/Hero";
import Destinations from "../components/Destinations";
import Search from "../components/Search";
import Selects from "../components/Selects";
// import Carousel from "../components/Carousel";
import Slides from "./Slides";

const Home = () => {

    return (
        <>
        <Hero/>
        <Destinations/>
        <Search/>
        <Selects/>
        {/* <Carousel/>         */}
        <Slides/>
        </>

    )
}

export default Home