import Layout from "../../components/Layout";
import { useState } from "react";
import { getTenCrypto } from "../../lib/api";





export default function Search({ data }) {
    // console.log(data, 'data');
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
            <div className='p-8 justify-center items-center flex'>
                <form className='flex' autoComplete='off'>
                    <input type="select"
                        className="bg-gray-200 shadow-inner rounded-l p-2 flex-1"
                        placeholder="Search for Crypto"
                        value={input}
                        onChange={e => setInput(e.target.value.toUpperCase())}
                    />
                    <button className="bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-2 rounded-r"
                        type="submit"
                        onClick={search}>
                        Search
                    </button>
                </form>
            </div>
            <div className="grid lg:grid-cols-4 gap-1 sm:grid-cols-1">
                {data && data.
                    filter((crypt) => {
                        if (input == "") {

                            return crypt
                        } else if (crypt.symbol.toUpperCase().includes(input.toUpperCase())) {

                            return crypt
                        }
                    }).
                    map((crypt, index) => (

                        <a key={index} className="rounded-md ">
                            <div className="relative hover:shadow-md p-5 border border-blue-700 rounded-3xl bg-gradient-to-r from-green-100 to-blue-200 mx-2">

                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={crypt.logo_url} alt={crypt.logo_url} className="w-20 h-20 mx-auto m-6" />

                                <h2 className="text-center text-2xl uppercase tracking-wider font-bold text-gray-800">{crypt.name}</h2>
                                <p className="text-center text-gray-700">{crypt.symbol}</p>
                                <h3 className="text-center text-black">Price: {parseFloat(crypt.price).toFixed(2)} EUR</h3>
                                <p className="text-center text-gray-800">Variation sur 24h: <span>{parseFloat(crypt['1d'].price_change).toFixed(2) + "EUR"}</span>
                                    {crypt["1d"].price_change_pct < 0 ?
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

export async function getStaticPaths() {
    const posts = await getTenCrypto()
    const paths = posts.map((post) => ({
        params: { id: post.id.toString() },

    }))
    console.log(paths, 'paths');
    return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
    const data = await getTenCrypto(params.id)
    return {
        props: {
            data
        }
    }

}

