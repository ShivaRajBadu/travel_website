import Image from "next/image";
import styles from "./review.module.css";

export default function Review() {
  const handleLeft = (e) => {};
  return (
    <div className={styles.reviews}>
      <div className={styles.container}>
        <div className={styles.review_head}>
          <h1 className={styles.title}>
            What They Says About Our <span className={styles.bg}>Services</span>
          </h1>
          <div className={styles.btn_group}>
            <button onClick={handleLeft} className={styles.button}>
              <i className="fa-solid fa-angle-left"></i>
            </button>
            <button className={styles.button}>
              <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>
        <div className={styles.review_items}>
          <div className={styles.review_item}>
            <p className={styles.comment}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              expedita vel corrupti possimus facere error, veritatis cumque quae
              sed accusantium. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptates, ea? l
            </p>
            <div className={styles.user_details}>
              <div className={styles.image}>
                <Image
                  src={"https://randomuser.me/api/portraits/women/90.jpg"}
                  width={40}
                  height={40}
                  layout="responsive"
                />
              </div>

              <div>
                <h3 className={styles.user_name}>joseph simmons</h3>
                <p className={styles.user_subtitle}>Lead creative designer</p>
              </div>
            </div>
          </div>
          <div className={styles.review_item}>
            <p className={styles.comment}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              expedita vel corrupti possimus facere error, veritatis cumque quae
              sed accusantium. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nihil, deleniti!
            </p>
            <div className={styles.user_details}>
              <div className={styles.image}>
                <Image
                  src={"https://randomuser.me/api/portraits/women/10.jpg"}
                  width={40}
                  height={40}
                  layout="responsive"
                />
              </div>

              <div>
                <h3 className={styles.user_name}>brookiyn simmons</h3>
                <p className={styles.user_subtitle}>Lead creative designer</p>
              </div>
            </div>
          </div>
          <div className={styles.review_item}>
            <p className={styles.comment}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              expedita vel corrupti possimus facere error, veritatis cumque quae
              sed accusantium. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Eaque quod,
            </p>
            <div className={styles.user_details}>
              <div className={styles.image}>
                <Image
                  src={"https://randomuser.me/api/portraits/men/21.jpg"}
                  width={40}
                  height={40}
                  layout="responsive"
                />
              </div>

              <div>
                <h3 className={styles.user_name}>saurav niraula</h3>
                <p className={styles.user_subtitle}>Lead creative designer</p>
              </div>
            </div>
          </div>
          <div className={styles.review_item}>
            <p className={styles.comment}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              expedita vel corrupti possimus facere error, veritatis cumque quae
              sed accusantium. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Eaque quod,
            </p>
            <div className={styles.user_details}>
              <div className={styles.image}>
                <Image
                  src={"https://randomuser.me/api/portraits/men/10.jpg"}
                  width={40}
                  height={40}
                  layout="responsive"
                />
              </div>

              <div>
                <h3 className={styles.user_name}>anish basnet</h3>
                <p className={styles.user_subtitle}>Lead creative writer</p>
              </div>
            </div>
          </div>
          <div className={styles.review_item}>
            <p className={styles.comment}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              expedita vel corrupti possimus facere error, veritatis cumque quae
              sed accusantium. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Eaque quod,
            </p>
            <div className={styles.user_details}>
              <div className={styles.image}>
                <Image
                  src={"https://randomuser.me/api/portraits/men/20.jpg"}
                  width={40}
                  height={40}
                  layout="responsive"
                />
              </div>

              <div>
                <h3 className={styles.user_name}>Suraj jha</h3>
                <p className={styles.user_subtitle}>Senior Developer</p>
              </div>
            </div>
          </div>
          <div className={styles.review_item}>
            <p className={styles.comment}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              expedita vel corrupti possimus facere error, veritatis cumque quae
              sed accusantium. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Eaque quod,
            </p>
            <div className={styles.user_details}>
              <div className={styles.image}>
                <Image
                  src={"https://randomuser.me/api/portraits/women/22.jpg"}
                  width={40}
                  height={40}
                  layout="responsive"
                />
              </div>

              <div>
                <h3 className={styles.user_name}>bina jha</h3>
                <p className={styles.user_subtitle}>Senior Developer</p>
              </div>
            </div>
          </div>
          <div className={styles.review_item}>
            <p className={styles.comment}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              expedita vel corrupti possimus facere error, veritatis cumque quae
              sed accusantium. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Eaque quod,
            </p>
            <div className={styles.user_details}>
              <div className={styles.image}>
                <Image
                  src={"https://randomuser.me/api/portraits/women/24.jpg"}
                  width={40}
                  height={40}
                  layout="responsive"
                />
              </div>

              <div>
                <h3 className={styles.user_name}>amrita basnet</h3>
                <p className={styles.user_subtitle}>Senior Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
