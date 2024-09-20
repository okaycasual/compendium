import Head from "next/head";
import MonsterList from '../../components/MonsterList'
export default function Monsters() {
  return (
    <>
      <Head>
        <title>Compendium - Monsters</title>
      </Head>
      <main>
        <div>
          <div><button className="btn btn-primary">Monsters</button></div>
          <MonsterList/>
        </div>
      </main>
    </>
  );
}
