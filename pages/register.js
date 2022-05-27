import Head from "next/head";
import Register from "../components/register/register";

export default function register() {
  return (
    <>
      <Head>
        <title>Registration</title>
      </Head>
      <>
        <Register />
      </>
    </>
  );
}
