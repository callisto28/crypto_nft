import Layout from "../components/Layout";
import { useState } from "react";



const Home = () => {

    const [input, setInput] = useState([]);
    const [test, setTest] = useState([]);

    const search = async (e) => {
        e.preventDefault()


        const res = await fetch(`https://api.nomics.com/v1/currencies/ticker?key=a7aa7ea4b3e128b4497f815cd1aa2c9198e51909&ids=${input}&interval=1d,30d&convert=EUR&per-page=100&page=1`)
            .then((res) => res.json())
        console.log(res, "stock res");

        setTest(res)
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
                        onChange={e => setInput(e.target.value.toUpperCase(''))} />
                    <button className="bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-2 rounded-r"
                        type="submit"
                        onClick={search}>
                        Search
                    </button>
                </form>
            </div>
            <div className="flex lg:justify-center sm:justify-center">
                {test && test.map((crypt, index) => (

                    <a key={index} className="rounded-md ">
                        <div className="relative hover:shadow-md p-5 border border-blue-700 rounded-3xl bg-gradient-to-r from-green-100 to-blue-200 mx-2">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={crypt.logo_url} alt={crypt.logo_url} className="w-20 h-20 mx-auto m-6" />

                            <h2 className="text-center text-2xl uppercase tracking-wider font-bold text-gray-800">{crypt.name}</h2>
                            <p className="text-center text-gray-700">{crypt.symbol}</p>
                            <h3 className="text-center text-black">Price: {parseFloat(crypt.price).toFixed(2)} EUR</h3>
                            <p className="text-center text-gray-800">Variation 1d: <span>{parseFloat(crypt['1d'].price_change).toFixed(2) + "EUR"}</span>
                                {crypt["1d"].price_change_pct < 0 ? (<span className="text-red-600 font-bold">&#x2798; </span>) : (<span className="text-green-600 font-bold">&#x279A; </span>)}
                            </p>
                            <p className="text-center text-gray-800">Variation 30d: <span>{parseFloat(crypt['30d'].price_change).toFixed(2) + "EUR"}</span>
                                {crypt["30d"].price_change_pct < 0 ? (<span className="text-red-600 font-bold">&#x2798; </span>) : (<span className="text-green-600 font-bold">&#x279A; </span>)}
                            </p>
                        </div>
                    </a>
                ))}
            </div>
        </Layout>
    )

}

export default Home

