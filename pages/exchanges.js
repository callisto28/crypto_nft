import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Image from "next/image";
//import api
import { getAllExchange } from "../lib/api";





export default function SearchExc({ data }) {



    return (
        <>

            <Layout page='Exchange'>

                <h2 className="text-red-600 pb-20"> Voici le top 10 des plus gros exchanges disponibles  </h2>
                <div className="grid lg:grid-cols-5 lg:gap-1 md:grid-cols-2 md:gap-9 sm:grid-cols-1 sm:gap-5">

                    {data && data
                        .map((exch, index) => (

                            <a key={index} className="rounded-md ">
                                <div className="relative hover:shadow-md p-2 border border-blue-700 rounded-2xl bg-gradient-to-r from-green-100 to-blue-200 mx-2">
                                    <a className="rounded-md" href={exch.url} target="_blank" rel="noreferrer">


                                        <Image src={exch.image} alt={exch.image} width={100} height={100} />

                                        <h2 className="text-center text-l uppercase tracking-wider font-bold text-gray-800">{exch.name}</h2>
                                        <p className="text-center text-gray-700">Année de création : {exch.year_established}</p>
                                        <h3 className="text-center text-black">Classement exchange : {exch.trust_score_rank} </h3>
                                        <p className="text-center text-gray-800"> Pays : <span>{exch.country}</span></p>


                                    </a>
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


