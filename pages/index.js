import Layout from "../components/Layout";
import Image from "next/image";
import Footer from "../components/Footer";
// import Convert from "./convert";
import Test from "../components/Test";



export default function Home({ }) {


  return (
    <>

      <Layout page='Accueil Crypto'>

        <div className="grid lg:grid-cols-5 gap-5 sm:grid-cols-4 sm:gap-x-8">
          <h2 className=" text-center text-xl  text-white col-start-2 col-span-3"> Une crypto-monnaie est un type de monnaie cryptographique créée à partir de code informatique.
            <br />
            Elles fonctionnent de manière autonome en dehors des systèmes bancaires et gouvernementaux traditionnels.</h2>


          <div className="lg:col-start-1 lg:col-end-3 sm:col-span-6">

            <Image src="/images/main.jpg" alt="crypto" width={600} height={450} />

          </div>
          <div className="lg:col-end-6 lg:col-span-3 sm:col-span-6 sm:text-center">

            <p className="text-center text-l text-white">Possibilité de Convertir ci-dessous EUR/USD, EUR/BTC ...et bien plus</p>
            {/* <Convert /> */}
            <Test />

          </div>

          <p className="text-center text-l text-white col-start-1 col-end-7">
            Ici vous pouvez retrouver le top 15 des cryptomonnaies en temps réel au MarketCap, leurs cours et plus encore. Dans les infos ont retrouve une liste des 10 principaux exchanges qui sont présents sur le marché avec un lien vers leur site web. la possibilité de faire une recherche par nom de crypto (250 principal) est également disponible.

          </p>
        </div>
        <Footer />
      </Layout>



    </>
  );


}




