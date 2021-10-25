import Layout from "../components/Layout";
import Image from "next/image";
import Footer from "../components/Footer";

export default function Home() {


  return (
    <>
      <Layout page='Accueil Crypto'>
        <div className="grid grid-cols-5 gap-4">
          <h2 className=" text-center text-xl  text-white col-start-2 col-span-3"> Une crypto-monnaie est un type de monnaie cryptographique créée à partir de code informatique.
            <br />
            Elles fonctionnent de manière autonome en dehors des systèmes bancaires et gouvernementaux traditionnels.</h2>


          <div className="col-start-1 col-end-3 ">

            <Image src="/images/main.jpg" alt="crypto" width={600} height={450} />

          </div>
          <div className="col-end-7 col-span-3 ">

            <p className="text-center text-l text-white">Prochainement un convertiseur EUR/USD & USD/BTC</p>

          </div>

          <p className="text-center text-l text-white col-start-1 col-end-7">
            Ici vous pouvez retrouver le top 10 des cryptomonnaies en temps réel, leurs cours et plus encore. Dans les infos ont retrouve une liste des 10 principaux exchanges qui sont présents sur le marché avec un lien vers leur site web. la possibilité de faire une recherche par nom de crypto (250 principal) est également disponible.

          </p>
        </div>
        <Footer />
      </Layout>



    </>
  );


}




