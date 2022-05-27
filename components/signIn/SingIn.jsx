import React from "react";
import { useForm } from "react-hook-form";
import styles from "./signin.module.css";
import { useRouter } from "next/router";

const SingIn = () => {
  const route = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    route.push("/");
    console.log(data);
  };
  return (
    <div className={styles.sign_in}>
      <div className={styles.container}>
        <form
          action=""
          className={styles.form}
          onSubmit={handleSubmit(onSubmit)}>
          <h1 className={styles.title}>Welcome to Neuron Travel</h1>
          <div>
            <div className={styles.form_input}>
              <label htmlFor="userName" className={styles.label}>
                User Name
              </label>
              <input
                {...register("userName", { required: true, maxLength: 20 })}
                autoComplete="off"
                type="text"
                id="userName"
                className={styles.input}
                placeholder="User Name"
              />
              {errors.userName ? (
                <p className={styles.error}>this is required</p>
              ) : (
                ""
              )}
            </div>
            <div className={styles.form_input}>
              <label htmlFor="us" className={styles.label}>
                Password
              </label>
              <input
                {...register("password", { required: true })}
                type="password"
                id="password"
                className={styles.input}
                placeholder="Password"
              />
              {errors.password ? (
                <p className={styles.error}>this is required</p>
              ) : (
                ""
              )}
            </div>
            <input className={styles.button} type="submit" value="Sign In" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingIn;
