import Head from "next/head";
import Layout from "containers/layout";
import Header from "containers/layout/header";
import Summary from "containers/summary";
import Listing from "containers/listing";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Dashboard | Investly</title>
      </Head>
      <Header />
      <Summary />
      <Listing />
    </Layout>
  );
}
