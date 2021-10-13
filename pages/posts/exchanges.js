import Layout from "../../components/Layout";
import { useState } from "react";
import { getAllExchange } from "../../lib/api";
import Head from "next/head";






export default function Search({ data }) {

    // const [input, setInput] = useState([]);
    // const [test, setTest] = useState();
    // console.log(test, 'input');


    // const search = async (e) => {
    //     e.preventDefault()
    //     setTest(data)
    //     setInput([])

    // }


    return (
        <Layout page='Accueil Crypto'>
            <Head>
                <title>{data.id}</title>
            </Head>
            <h2 className="text-white pb-3"> Voici la liste des 100 plus gros exchanges disponibles  </h2>

            {/* <div className='p-8 justify-center items-center flex'>

                <form className='flex' autoComplete='off'>
                    <input type="text"
                        className="bg-gray-200 shadow-inner rounded-l p-3 flex-1"
                        placeholder="Search Crypto here"
                        value={input}
                        onChange={e => setInput(e.target.value.toUpperCase())}
                        option={data.symbol}
                    />
                    <br />
                    <button className="bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow pl-2 rounded-r"
                        type="submit"
                        onClick={search}>
                        Réinitialiser
                    </button>
                </form>
            </div> */}

            <div className="grid lg:grid-cols-4 gap-12 sm:grid-cols-1">
                {data && data

                    .map((exch, index) => (

                        <a key={index} className="rounded-md ">
                            <a className="rounded-md h-10" href={exch.url} target="_blank" rel="noreferrer">
                                <div className="relative hover:shadow-md p-3 border border-blue-700 rounded-2xl bg-gradient-to-r from-green-100 to-blue-200 mx-5">


                                    <img src={exch.image} alt={exch.image} className="w-20 h-20 mx-auto m-6" />

                                    <h2 className="text-center text-xl uppercase tracking-wider font-bold text-gray-800">{exch.name}</h2>
                                    <p className="text-center text-gray-700">Année de création{exch.year_established}</p>
                                    <h3 className="text-center text-black">Classement exchange {exch.trust_score_rank} </h3>
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

    console.log(data, 'data');
    return { props: { data } }

}


