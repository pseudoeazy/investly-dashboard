import Head from "next/head";
import Layout from "containers/layout";
import Header from "containers/layout/header";
import Summary from "containers/summary";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Dashboard | Investly</title>
      </Head>
      <Header />
      <Summary />
    </Layout>
  );
}
