import Layout from "../components/Layout";
import Image from "next/image";
import Footer from "../components/Footer";

export default function Home() {


  return (
    <>
      <Layout page='Accueil Crypto'>
        <h2 className="text-center text-xl text-white"> Une crypto-monnaie est un type de monnaie cryptographique créée à partir de code informatique.
          <br />
          Elles fonctionnent de manière autonome en dehors des systèmes bancaires et gouvernementaux traditionnels.</h2>


        <div className="flex flex-row justify-evenly m-5 p-6 lg:flex-row sm:flex-col">

          <Image src="/images/main.jpg" alt="crypto" width={570} height={500} />

        </div>
        <p className="text-center text-l text-white">
          Ici vous pouvez retrouver le top 10 des cryptomonnaies en temps réel, leurs cours et plus encore. Dans les infos ont retrouve une liste des 10 principaux exchanges qui sont présents sur le marché avec un lien vers leur site web. la possibilité de faire une recherche par nom de crypto (250 principal) est également disponible.

        </p>

        <Footer />
      </Layout>



    </>
  );


}




