import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Image from "next/image";
//import api
import { getAllExchange } from "../lib/api";





export default function SearchExc({ data }) {



    return (
        <>

            <Layout page='Exchange'>

                <h2 className="text-red-600 pb-6"> Voici le top 10 des plus gros exchanges disponibles  </h2>
                <div className="grid lg:grid-cols-3 lg:gap-4 md:grid-cols-2 md:gap-9 sm:grid-cols-1 sm:gap-5">

                    {data && data
                        .map((exch, index) => (

                            <a key={index} className="rounded-md" href={exch.url} target="_blank" rel="noreferrer">
                                <div className="relative hover:shadow-md p-5 border border-blue-100 rounded-2xl bg-gradient-to-t from-black to-gray-500 mx-2">



                                    <Image src={exch.image} alt={exch.image} width={100} height={100} />

                                    <h2 className="text-center text-sm uppercase tracking-wider font-bold text-gray-200">{exch.name}</h2>
                                    <p className="text-center text-gray-300">Année de création : <span className="text-green-600">{exch.year_established}</span></p>
                                    <h3 className="text-center text-gray-200">Classement exchange : <span className="text-red-600">{exch.trust_score_rank}</span> </h3>
                                    <p className="text-center text-xs text-gray-300"> Pays : <span className="text-purple-400">{exch.country}</span></p>



                                </div>

                            </a>

                        ))}

                </div>

            </Layout>
            <Footer />
        </>
    )

};



export async function getStaticProps() {

    const data = await getAllExchange()


    return {
        props: { data },
        revalidate: 1,
    }

}


