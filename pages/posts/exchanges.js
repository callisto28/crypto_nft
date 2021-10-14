import Layout from "../../components/Layout";

import { getAllExchange } from "../../lib/api";
import Head from "next/head";






export default function Search({ data }) {

    return (
        <Layout page='Accueil Crypto'>
            <Head>
                <title>{data.id}</title>
            </Head>
            <h2 className="text-white pb-3"> Voici le top 20 des plus gros exchanges disponibles  </h2>

            <div className="grid lg:grid-cols-3 gap-12 md:grid-cols-2 md:gap-9 sm:grid-cols-1 sm:gap-5">
                {data && data
                    .map((exch, index) => (

                        <a key={index} className="rounded-md ">
                            <a className="rounded-md h-10" href={exch.url} target="_blank" rel="noreferrer">
                                <div className="relative hover:shadow-md p-3 border border-blue-700 rounded-2xl bg-gradient-to-r from-green-100 to-blue-200 mx-5">


                                    <img src={exch.image} alt={exch.image} className="w-20 h-20 mx-auto m-6" />

                                    <h2 className="text-center text-l uppercase tracking-wider font-bold text-gray-800">{exch.name}</h2>
                                    <p className="text-center text-gray-700">Année de création : {exch.year_established}</p>
                                    <h3 className="text-center text-black">Classement exchange : {exch.trust_score_rank} </h3>
                                    <p className="text-center text-gray-800"> Pays : <span>{exch.country}</span></p>

                                </div>
                            </a>
                        </a>
                    ))}

            </div>

        </Layout>
    )

};



export async function getStaticProps() {

    const data = await getAllExchange()


    return {
        props: { data },
        revalidate: 1,
    }

}


