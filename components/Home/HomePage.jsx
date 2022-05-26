import styles from "./HomePage.module.css";
import Image from "next/image";
import Head from "next/head";

export default function HomePage() {
  const showDate = (e) => {
    e.target.type = "date";
  };
  const blurDate = (e) => {
    e.target.type = "text";
  };
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <main className={styles.home_page}>
        <div className={styles.container}>
          <div className={styles.showcase}>
            <div className={styles.home_body}>
              <h1 className={styles.home_title}>Discover new destination</h1>
              <p className={styles.home_subtitle}>
                A Team devoted and experienced tourism professionals will
                provide you with the best advice and tips.
              </p>
              <form className={styles.explore}>
                <div className={styles.group}>
                  {" "}
                  <label className={styles.label} htmlFor="location">
                    Location{" "}
                    <span>
                      <i
                        className={`fa-solid fa-angle-down ${styles.icon}`}></i>
                    </span>
                  </label>
                  <input
                    className={styles.input}
                    type="text"
                    id="location"
                    placeholder="enter your destinations"
                  />
                </div>
                <div className={styles.group}>
                  {" "}
                  <label className={styles.label} htmlFor="date">
                    Date
                    <span>
                      <i
                        className={`fa-solid fa-angle-down ${styles.icon}`}></i>
                    </span>
                  </label>
                  <input
                    className={styles.input}
                    type="text"
                    id="date"
                    onFocus={showDate}
                    onBlur={blurDate}
                    placeholder="When it will start?"
                  />
                </div>
                <div className={styles.group}>
                  {" "}
                  <label className={styles.label} htmlFor="people">
                    People
                    <span>
                      <i
                        className={`fa-solid fa-angle-down ${styles.icon}`}></i>
                    </span>
                  </label>
                  <input
                    className={styles.input}
                    type="number"
                    id="people"
                    placeholder="how many people?"
                  />
                </div>

                <input
                  type="submit"
                  value="Explore Now"
                  id={styles.explore_submit}
                />
              </form>
              <div className={styles.popular}>
                <h2 className={styles.search_title}>popular search:</h2>
                <p className={styles.popular_searches}>
                  Bali, Pokhara, dharan, mustang,{" "}
                  <span className={styles.different}>Rara</span>, palpa
                </p>
              </div>
            </div>
            <div className={styles.home_images}>
              <div className={styles.images_two}>
                <img className={styles.image} src="./hills.jpg" alt="" />
                <img className={styles.image} src="./village.jpg" alt="" />
              </div>
              <div className={styles.image_one}>
                <img className={styles.image} src="/bridge.jpg" alt="" />
              </div>
            </div>
          </div>

          <div className={styles.companys}>
            <p className={styles.company}>
              <i className={`fa-brands fa-airbnb ${styles.company_logo}`}></i>
              <span className={styles.company_name}>Airbnb</span>
            </p>
            <p className={styles.company}>
              <i
                className={`fa-solid fa-plane-departure ${styles.company_logo}`}></i>
              <span>Travel.com</span>
            </p>
            <p className={styles.company}>
              <i
                className={`fa-solid fa-book-open  ${styles.company_logo}`}></i>
              <span>booked.com</span>
            </p>
            <p className={styles.company}>
              <i
                className={`fa-brands fa-screenpal  ${styles.company_logo}`}></i>
              <span>ScreenPal</span>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
