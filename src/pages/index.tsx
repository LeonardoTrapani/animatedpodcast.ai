import Head from "next/head";
import { api } from "~/utils/api";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>animatedpodcast.ai</title>
        <meta
          name="description"
          content="From podcast to animated videopodcast with zero effort"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen items-center justify-center bg-green-300">
        <h1 className="text-6xl font-bold">animatedpodcast.ai</h1>
      </main>
    </>
  );
}
