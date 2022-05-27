import React from "react";
import { useForm } from "react-hook-form";
import styles from "./register.module.css";
import { useRouter } from "next/router";

export default function Register() {
  const route = useRouter();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data.password === data.confirmPassword) {
      console.info("submitted");
      route.push("/sign-in");
    } else console.error("password does not match");
  };
  return (
    <div className={styles.register}>
      <div className={styles.container}>
        <div className={styles.group}>
          <div className={styles.company_detail}>
            <div>
              <h1 className={styles.company_logo}>Neuron Travel</h1>
              <p className={styles.subtitle}>explore the beauty of nature</p>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            action="POST"
            className={styles.form}>
            <h1 className={styles.title}>Register</h1>
            <div className={styles.form_input}>
              <label htmlFor="fullName" className={styles.label}>
                First Name
              </label>
              <input
                autoComplete="off"
                {...register("fullName", { required: true, maxLength: 30 })}
                type="text"
                id="fullName"
                className={styles.input}
                placeholder="Full Name"
              />
              {errors.fullName ? (
                <p className={styles.error}>this is required</p>
              ) : (
                ""
              )}
            </div>
            <div className={styles.form_input}>
              <label className={styles.label} htmlFor="userName">
                user Name
              </label>
              <input
                autoComplete="off"
                {...register("userName", { required: true, maxLength: 20 })}
                className={styles.input}
                type="text"
                id="userName"
                placeholder="User Name"
              />
              {errors.userName ? (
                <p className={styles.error}>this is required</p>
              ) : (
                ""
              )}
            </div>
            <div className={styles.form_input}>
              <label className={styles.label} htmlFor="email">
                Email
              </label>
              <input
                autoComplete="off"
                {...register("email", { required: true })}
                className={styles.input}
                type="email"
                id="email"
                placeholder="Email"
              />
              {errors.email ? (
                <p className={styles.error}>this is required</p>
              ) : (
                ""
              )}
            </div>
            <div className={styles.form_input}>
              <label className={styles.label} htmlFor="password">
                Password
              </label>
              <input
                {...register("password", { required: true })}
                className={styles.input}
                type="password"
                id="password"
                placeholder="Password"
              />
              {errors.password ? (
                <p className={styles.error}>this is required</p>
              ) : (
                ""
              )}
            </div>
            <div className={styles.form_input}>
              <label className={styles.label} htmlFor="confirmPassword">
                confirm password
              </label>
              <input
                {...register("confirmPassword", { required: true })}
                className={styles.input}
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
              />
              {errors.confirmPassword ? (
                <p className={styles.error}>this is required</p>
              ) : (
                ""
              )}
            </div>

            <input className={styles.button} type="submit" value="Register" />
          </form>
        </div>
      </div>
    </div>
  );
}
