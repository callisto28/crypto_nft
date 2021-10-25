import Layout from "../components/Layout";
import { useState } from "react";
import { getAllCrypto } from "../lib/api";
import Head from "next/head";
import Footer from "../components/Footer";



export default function Search({ data }) {

    const [input, setInput] = useState([]);

    const regex = new RegExp(`^${input}`);

    return (
        <>
            <Layout page='top 250'>
                <Head>
                    <title>{data.id}</title>
                </Head>

                <h2 className="text-white"> Veuillez saisir la première lettre de la cryptomonnaie recherchée ou le nom de votre cryptomonnaie  </h2>
                <span className="text-red-600"> Exemple : Bitcoin, BTC, btc </span>
                <div className='p-8 justify-center items-center flex'>

                    <form className='flex ' autoComplete='on'>
                        <input type="search"
                            className="focus:ring-2 focus:ring-green-400 rounded-4 p-3 flex-1"
                            placeholder="Search Crypto here"
                            value={input}

                            onChange={e => setInput(e.target.value.toLowerCase())}


                            option={data.symbol}
                        />
                        <br />


                    </form>
                </div>
                <div className="grid lg:grid-cols-4 gap-12 sm:grid-cols-1">
                    {data && data.
                        filter((crypt) => {
                            if (input == "") {

                                return
                            }
                            else if (crypt.symbol.toLowerCase().match(regex) || crypt.name.toLowerCase().match(regex)) {

                                return crypt
                            }
                        }).
                        map((crypt, index) => (

                            <a key={index} className="rounded-md ">
                                <div className="relative hover:shadow-md p-5 border border-blue-700 rounded-2xl bg-gradient-to-r from-green-100 to-blue-200 mx-2">

                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={crypt.image} alt={crypt.image} className="w-20 h-20 mx-auto m-6" />

                                    <h2 className="text-center text-xl uppercase tracking-wider font-bold text-gray-800">{crypt.name}</h2>
                                    <p className="text-center text-gray-700">{crypt.symbol}</p>
                                    <h3 className="text-center text-black">Price : {parseFloat(crypt.current_price).toLocaleString()} EUR </h3>
                                    <p className="text-center text-gray-800"> % de variation : <span>{parseFloat(crypt.price_change_24h).toFixed(2) + "EUR"} en 24h</span>
                                        {crypt.price_change_percentage_24h < 0 ?
                                            (<span className="text-red-600 font-bold">&#x2798; </span>) :
                                            (<span className="text-green-600 font-bold">&#x279A; </span>)}
                                    </p>

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

    const data = await getAllCrypto()


    return {
        props: { data },
        revalidate: 1,
    }

}


