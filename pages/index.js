import Layout from "../components/Layout";
import Image from "next/image";
import Footer from "../components/Footer";
import Video from "../components/Video";




export default function Home({ }) {


  return (
    <>

      <Layout page='Accueil Crypto'>
        <div className="">
          <h2 className=" text-center text-xl mb-4  text-white col-start-2 col-span-3"> Une crypto-monnaie est un type de monnaie cryptographique créée à partir de code informatique.
            <br />
            Elles fonctionnent de manière autonome en dehors des systèmes bancaires et gouvernementaux traditionnels.</h2>


        </div>

        <div className="flex lg:flex-row lg:justify-evenly sm:flex-col sm:content-evenly ">
          <div className="mt-24">
            <Image src="/images/main.png" alt="crypto" width={500} height={400} />
          </div>
          <picture className="sm:mt-24">
            <Video />

            <p className="text-center lg:mt-3 text-l text-white sm:mt-8">Vous voulez en savoir plus sur le bitcoin sont fonctionnement ainsi que le mystère autour de Satochi sont créateur. <br />
              Et bien la chaîne Arte a réalisé un documentaire sur le Bitcoin en plusieurs episodes.
            </p>
          </picture>
        </div>
        <div className="">
          <p className="text-center text-l mt-12 text-gray-400 ">
            En quelque clic dans le menu vous pourrez trouver le top 15 des cryptomonnaies en temps réel au MarketCap. Dans infos Crypto ont retrouve la liste des 10 principaux exchanges présents sur le marché + accès aux exchange, possibilité de rechercher une crypto clssé dans les 250 premières au marketcap.
            En bonus, vous pourrez aussi voir les dernières ventes effectuées de la plateforme Opensea pour ce qui est des NFT.

          </p>
        </div>

        <Footer />
      </Layout>



    </>
  );


}




