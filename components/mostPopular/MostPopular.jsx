import Image from "next/image";
import React from "react";
import styles from "./mostPopular.module.css";
export default function MostPopular() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.group_images}>
          <div className={styles.first_image}>
            <Image
              src="/house.jpg"
              width={150}
              height={200}
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div className={styles.second_images}>
            <div className={styles.image}>
              <Image
                src="/boat.jpg"
                width={200}
                height={150}
                layout="responsive"
                objectFit="cover"
              />
            </div>
            <div className={styles.image}>
              <Image
                src="/mountain.jpg"
                width={200}
                height={150}
                layout="responsive"
                objectFit="cover"
              />
            </div>
          </div>
        </div>

        <div className={styles.group_title}>
          <h1 className={styles.title}>
            visit most popular <span className={styles.bg}>destination</span>
          </h1>
          <p className={styles.subtitle}>
            Doesn &apos; t have an ideas where to go? maybe you can check our
            popular destination list you can visit you sure want to go then
            after you check it up
          </p>
          <button className={styles.check_button}>check listing</button>
        </div>
      </div>
    </div>
  );
}
