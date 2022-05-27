import Head from "next/head";
import SingIn from "../components/signIn/SingIn";

export default function signIn() {
  return (
    <>
      <Head>
        <title>Sign In</title>
      </Head>
      <>
        <SingIn />
      </>
    </>
  );
}
