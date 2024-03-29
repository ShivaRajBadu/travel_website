import Head from "next/head";
import Experiences from "../components/experiences/Experiences";

import HomePage from "../components/Home/HomePage";

import MostPopular from "../components/mostPopular/MostPopular";
import NewLetter from "../components/newLetter/NewLetter";
import Review from "../components/reviews/Review";
import TourPackage from "../components/toursPackages/TourPackages";
export default function Home() {
  return (
    <>
      <Head>
        <title>home page</title>
      </Head>

      <>
        <HomePage />
        <Experiences />
        <TourPackage />
        <MostPopular />
        <Review />
        <NewLetter />
      </>
    </>
  );
}
