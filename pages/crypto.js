import Layout from "../components/Layout";
import Link from "next/link";
import { getTenCrypto } from "../lib/api";


export default function Home({ res }) {


    return (<Layout page='Accueil Crypto'>
        {/* <Link href={'/posts/crypto'}>
            <div className='p-8 justify-center items-center flex'>
                <form className='flex'>

                    <button className='bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-2 rounded-r' type='submit'>
                        Rechercher une Crypto
                    </button>
                </form>
            </div>
        </Link> */}


        <ul className="grid lg:grid-cols-3 gap-2 sm:grid-cols-1">
            {res.map((crypt, index) => (
                <li key={index} className="relative hover:shadow-md p-5 border border-blue-700 rounded-3xl bg-gradient-to-r from-green-100 to-blue-200 mx-2">
                    <Link href={`/`}>
                        <a className="rounded-md">
                            <div className="text-center">
                                {/*  eslint-disable-next-line @next/next/no-img-element */}
                                <img src={crypt.logo_url} alt={crypt.name} className="w-20 h-20 mx-auto m-6" />

                            </div>
                            <h2 className="text-center text-2xl uppercase tracking-wider font-bold text-gray-800">{crypt.name}</h2>
                            <p className="text-center text-gray-700">{crypt.symbol}</p>
                            <h3 className="text-center text-black">Price: {parseFloat(crypt.price).toFixed(2)} EUR</h3>
                            <p className="text-center text-gray-800">Variation 1d: <span>{parseFloat(crypt['1d'].price_change).toFixed(2) + "EUR"}</span>
                                {crypt["1d"].price_change_pct < 0 ?
                                    (<span className="text-red-600 font-bold">&#x2798; </span>) :
                                    (<span className="text-green-600 font-bold">&#x279A; </span>)}
                            </p>
                            <p className="text-center text-gray-800">Variation 30d: <span>{parseFloat(crypt['30d'].price_change).toFixed(2) + "EUR"}</span>
                                {crypt["30d"].price_change_pct < 0 ?
                                    (<span className="text-red-600 font-bold">&#x2798; </span>) :
                                    (<span className="text-green-600 font-bold">&#x279A; </span>)}
                            </p>


                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    </Layout>);

}

export async function getStaticProps({ params }) {
    const res = await getTenCrypto(params)
    return {
        props: {
            res
        }
    }

}

