import Layout from "../../components/Layout";
import { useState } from "react";
import { getAllCrypto } from "../../lib/api";
import Head from "next/head";





export default function Search({ data }) {

    const [input, setInput] = useState([]);
    // const [test, setTest] = useState();
    // console.log(test, 'input');


    const search = async (e) => {
        e.preventDefault()
        // setTest(data)
        setInput([])

    }


    return (
        <Layout page='Accueil Crypto'>
            <Head>
                <title>{data.id}</title>
            </Head>
            <h2 className="text-white"> Voici la liste des 250 premières cryptomonnaies classées par leur Marketcap  </h2>
            <h3 className="text-white"> Veuillez saisir la première lettre de la cryptomonnaie recherchée  </h3>
            <div className='p-8 justify-center items-center flex'>

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
            </div>
            <div className="grid lg:grid-cols-4 gap-12 sm:grid-cols-1">
                {data && data.
                    filter((crypt) => {
                        if (input == "") {

                            return
                        } else if (crypt.symbol.toUpperCase().includes(input.toUpperCase())) {

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


                                {/* <p className="text-center text-gray-800">Variation sur 30d: <span>{parseFloat(crypt['30d'].price_change).toFixed(2) + "EUR"}</span>
                                    {crypt["30d"].price_change_pct < 0 ?
                                        (<span className="text-red-600 font-bold">&#x2798; </span>) :
                                        (<span className="text-green-600 font-bold">&#x279A; </span>)}
                                </p> */}
                            </div>
                        </a>
                    ))}

            </div>
        </Layout>
    )

};



export async function getStaticProps() {

    const data = await getAllCrypto()

    console.log(data, 'data');
    return { props: { data } }

}


