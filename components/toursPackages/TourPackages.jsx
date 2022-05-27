import Head from "next/head";

import styles from "./tourPackage.module.css";
import React, { useState } from "react";
import RenderMap from "../map";
export default function TourPackages() {
  const [datas, setDatas] = useState([
    {
      id: 1,
      location: "hiroshima, japan",
      title: "japanese street food full dish",
      image: "https://source.unsplash.com/350x350",
      places: 10,
      times: 2,
      activities: 7,
      pricePerPerson: 500,
    },
    {
      id: 2,
      location: "illam, Nepal",
      title: "japanese street food full dish",
      image: "https://source.unsplash.com/350x350",
      places: 10,
      times: 2,
      activities: 7,
      pricePerPerson: 500,
    },
    {
      id: 3,
      location: "hiroshima, japan",
      title: "japanese street food full dish",
      image: "https://source.unsplash.com/350x350",
      places: 10,
      times: 2,
      activities: 7,
      pricePerPerson: 500,
    },
  ]);
  const [activeSpecial, setActiveSpecial] = useState(true);
  const [activePopular, setActivePopular] = useState(false);
  const [activeRecommended, setActiveRecommended] = useState(false);
  const [activeBest, setActiveBest] = useState(false);
  const handleOffers = (e) => {
    switch (e.target.textContent) {
      case "Special deals":
        setDatas([]);
        setActivePopular(false);
        setActiveRecommended(false);
        setActiveSpecial(true);
        setActiveBest(false);
        setDatas([
          {
            id: 1,
            location: "hiroshima, japan",
            title: "japanese street food full dish",
            image: "https://source.unsplash.com/350x350",
            places: 10,
            times: 2,
            activities: 7,
            pricePerPerson: 500,
          },
          {
            id: 2,
            location: "illam, Nepal",
            title: "japanese street food full dish",
            image: "https://source.unsplash.com/350x350",
            places: 10,
            times: 2,
            activities: 7,
            pricePerPerson: 500,
          },
          {
            id: 3,
            location: "hiroshima, japan",
            title: "japanese street food full dish",
            image: "https://source.unsplash.com/350x350",
            places: 10,
            times: 2,
            activities: 7,
            pricePerPerson: 500,
          },
        ]);
        break;
      case "popular":
        setDatas([]);
        setActivePopular(true);
        setActiveRecommended(false);
        setActiveSpecial(false);
        setActiveBest(false);
        setDatas([
          {
            id: 4,
            location: "guangzhou, china",
            title: "Guangzhou conghua bishuiwan",
            image: "https://source.unsplash.com/330x330",
            places: 11,
            times: 1,
            activities: 14,
            pricePerPerson: 300,
          },
          {
            id: 6,
            location: "dharan, Nepal",
            title: "Guangzhou conghua bishuiwan",
            image: "https://source.unsplash.com/330x330",
            places: 11,
            times: 1,
            activities: 14,
            pricePerPerson: 300,
          },
          {
            id: 7,
            location: "guangzhou, china",
            title: "Guangzhou conghua bishuiwan",
            image: "https://source.unsplash.com/330x330",
            places: 11,
            times: 1,
            activities: 14,
            pricePerPerson: 300,
          },
        ]);
        break;

      case "recommendation":
        setDatas([]);
        setActiveRecommended(true);
        setActivePopular(false);
        setActiveSpecial(false);
        setActiveBest(false);
        setDatas([
          {
            location: "hiroshima, japan",
            title: "Tokyo hunt traditonal cruise dinner ",
            image: "https://source.unsplash.com/320x320",
            places: 12,
            times: 1,
            activities: 10,
            pricePerPerson: 176,
          },
          {
            location: "mustang, Nepal",
            title: "Tokyo hunt traditonal cruise dinner ",
            image: "https://source.unsplash.com/320x320",
            places: 12,
            times: 1,
            activities: 10,
            pricePerPerson: 176,
          },
          {
            location: "hiroshima, japan",
            title: "Tokyo hunt traditonal cruise dinner ",
            image: "https://source.unsplash.com/320x320",
            places: 12,
            times: 1,
            activities: 10,
            pricePerPerson: 176,
          },
        ]);
        break;

      case "best price":
        setDatas([]);
        setActiveBest(true);
        setActivePopular(false);
        setActiveRecommended(false);
        setActiveSpecial(false);
        setDatas([
          {
            location: "Pokhara, Nepal",
            title: "Lake side view",
            image: "https://source.unsplash.com/350x350",
            places: 10,
            times: 2,
            activities: 7,
            pricePerPerson: 500,
          },
          {
            location: "Pokhara, Nepal",
            title: "Lake side view",
            image: "https://source.unsplash.com/350x350",
            places: 10,
            times: 2,
            activities: 7,
            pricePerPerson: 500,
          },
          {
            location: "Pokhara, Nepal",
            title: "Lake side view",
            image: "https://source.unsplash.com/350x350",
            places: 10,
            times: 2,
            activities: 7,
            pricePerPerson: 500,
          },
        ]);

        break;
    }
  };

  return (
    <>
      <Head>
        <title>travel tours package</title>
      </Head>
      <section className={styles.tour_package}>
        <div className={styles.container}>
          <div className={styles.package_head}>
            <div className={styles.package_title}>
              <h1 className={styles.title}>
                Neuron travel tours
                <span className={styles.bg_draw}>package</span>
              </h1>
              <p className={styles.subtitle}>
                Get the full package experience included with all of your needs
                on the trips
              </p>
            </div>
            <button className={styles.package_button}>view all package</button>
          </div>
          <div className={styles.package_body}>
            <ul className={styles.offers}>
              <li
                id="special"
                onClick={handleOffers}
                className={activeSpecial ? styles.active : styles.offer}>
                Special deals
              </li>
              <li
                onClick={handleOffers}
                className={activePopular ? styles.active : styles.offer}>
                popular
              </li>
              <li
                onClick={handleOffers}
                className={activeRecommended ? styles.active : styles.offer}>
                recommendation
              </li>
              <li
                onClick={handleOffers}
                className={activeBest ? styles.active : styles.offer}>
                best price
              </li>
            </ul>
            <div className={styles.tour_places}>
              {datas.map((data) => (
                <div key={data.id} className={styles.place}>
                  <p className={styles.location}>
                    <i
                      className={`fa-solid fa-location-dot ${styles.icon}`}></i>
                    <span className={styles.location_name}>
                      {data.location}
                    </span>
                  </p>
                  <h2 className={styles.package_title}>{data.title}</h2>
                  <div className={styles.image_map}>
                    <img
                      className={styles.image}
                      src={data.image}
                      alt="image"
                    />
                    <div className={styles.map}>
                      <RenderMap place={data.location} />
                    </div>
                  </div>
                  <ul className={styles.group}>
                    <li className={styles.group_item}>
                      <i
                        className={`fa-solid fa-shoe-prints ${styles.group_icon}`}></i>
                      {data.activities}
                      activities
                    </li>
                    <li className={styles.group_item}>
                      <i
                        className={`fa-solid fa-compass ${styles.group_icon}`}></i>{" "}
                      {data.places}
                      places
                    </li>
                    <li className={styles.group_item}>
                      <i
                        className={`fa-solid fa-calendar-week ${styles.group_icon}`}></i>{" "}
                      {data.times}
                      weeks
                    </li>
                  </ul>
                  <div className={styles.price_btn}>
                    <h4 className={styles.price}>
                      from ${data.pricePerPerson}/
                      <span
                        style={{
                          fontSize: ".8rem",
                          opacity: ".6",
                        }}>
                        person
                      </span>
                    </h4>
                    <button className={styles.availability_button}>
                      view availability
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
