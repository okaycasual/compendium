import Head from "next/head";
import Board from "@/components/board";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Compendium</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header>
        <h1>Compendium</h1>
      </header>
      <main>
        <Board />
      </main>
      <footer>
        <div>Made by casual</div>
      </footer>
    </div>
  );
}
