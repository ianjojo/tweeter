import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Sidebar from "../components/Sidebar";
import { getProviders, getSession, useSession } from "next-auth/react";
import Feed from "../components/Feed";
import Login from "../components/Login";
import Modal from "../components/Modal";
import Widgets from "../components/Widgets";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import trendingResults from "../trending.json";
import followResults from "../follow.json";

const Home = ({ providers }) => {
  console.log(trendingResults);
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useRecoilState(modalState);

  if (!session) return <Login providers={providers} />;
  return (
    <div className=''>
      <Head>
        <title>Tweeter</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='bg-black min-h-screen flex max-w-[1500px] mx-auto'>
        <Sidebar />
        <Feed />
        <Widgets
          trendingResults={trendingResults}
          followResults={followResults}
        />
        {/* Feed */}
        {/* Widgets */}

        {/* Modal */}
        {isOpen && <Modal />}
      </main>
    </div>
  );
};

export default Home;

export async function getServerSideProps(context) {
  /*  const https = require("https");
  const agent = new https.Agent({
    rejectUnauthorized: false,
  });
  const trendingResults = await fetch("https://jsonkeeper.com/b/NKEV", {
    agent: agent,
  }).then((res) => res.json());
  const followResults = await fetch("https://jsonkeeper.com/b/WWMJ", {
    agent: agent,
  }).then((res) => res.json()); */
  const providers = await getProviders();
  const session = await getSession(context);

  return {
    props: {
      /*  trendingResults,
      followResults, */
      providers,
      session,
    },
  };
}
