import Head from "next/head";
import Experience from "./experience";
import styles from "./experience.module.css";

export default function Experiences() {
  const datas = [
    {
      id: 1,
      icon: "fa-solid fa-champagne-glasses",
      name: "forest tour",
      property: "20 properties",
    },
    {
      id: 2,
      icon: "fa-solid fa-person-hiking",
      name: "hiking trips",
      property: "40 properties",
    },
    {
      id: 3,
      icon: "fa-solid fa-city",
      name: "city tour",
      property: "80 properties",
    },
    {
      id: 4,
      icon: "fa-solid fa-mountain-sun",
      name: "mountain tour",
      property: "20 properties",
    },
    {
      id: 5,
      icon: "fa-solid fa-umbrella-beach",
      name: "beach activities",
      property: "20 properties",
    },
    {
      id: 6,
      icon: "fa-solid fa-fish-fins",
      name: "local food",
      property: "20 properties",
    },
  ];
  return (
    <>
      <Head>
        <title>Experience</title>
      </Head>
      <section>
        <div className={styles.experience_section}>
          <div className={styles.container}>
            <div className={styles.headling}>
              <h1 className={styles.title}>
                {" "}
                Explore Wonderfull
                <span className={styles.bg}>experience</span>{" "}
              </h1>
              <p className={styles.subtitle}>
                Feel the excited activites on the way you're going to trip, we
                have a lot activites that you can explore with our professional
                guide
              </p>
            </div>
            <div className={styles.experience_items}>
              {datas.map((data) => (
                <Experience
                  key={data.id}
                  icon={data.icon}
                  name={data.name}
                  property={data.property}
                />
              ))}
              {/* 
              <div className={styles.experience}>
                <div className={styles.icon}>
                  <i className="fa-solid fa-person-hiking"></i>
                </div>
                <div className={styles.experience_item}>
                  <h4 className={styles.exp_title}>Hiking Trips</h4>
                  <p className={styles.properties}>20 properties</p>
                </div>
              </div>

              <div className={styles.experience}>
                <div className={styles.icon}>
                  <i className="fa-solid fa-city"></i>
                </div>
                <div className={styles.experience_item}>
                  <h4 className={styles.exp_title}>city tour</h4>
                  <p className={styles.properties}>100 properties</p>
                </div>
              </div>
              <div className={styles.experience}>
                <div className={styles.icon}>
                  <i className="fa-solid fa-mountain-sun"></i>
                </div>
                <div className={styles.experience_item}>
                  <h4 className={styles.exp_title}>mountain tour</h4>
                  <p className={styles.properties}>20 properties</p>
                </div>
              </div>
              <div className={styles.experience}>
                <div className={styles.icon}>
                  <i className="fa-solid fa-umbrella-beach"></i>
                </div>
                <div className={styles.experience_item}>
                  <h4 className={styles.exp_title}>Beach activites</h4>
                  <p className={styles.properties}>80 properties</p>
                </div>
              </div>
              <div className={styles.experience}>
                <div className={styles.icon}>
                  <i class="fa-solid fa-fish-fins"></i>
                </div>
                <div className={styles.experience_item}>
                  <h4 className={styles.exp_title}>Local food</h4>
                  <p className={styles.properties}>150 properties</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
