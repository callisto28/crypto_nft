import Layout from "../components/Layout";
import Link from "next/link";
import { getTenCrypto } from "../lib/api";

import Image from "next/image";



export default function Home({ res }) {



    return (
        <Layout page='top ten'>
            <ul className="grid lg:grid-cols-5 lg:gap-2 md:grid-cols-2 md:gap-9 sm:grid-cols-1 sm:gap-5">

                {res.map((crypt, index) => (
                    <li key={index} className="relative hover:shadow-md p-3 border border-blue-100 rounded-2xl bg-gradient-to-t from-black to-gray-500 mx-2" >
                        <Link href={`/`}>
                            <a className="rounded-md">
                                <picture className="text-center">


                                    <Image src={crypt.logo_url} alt={crypt.name} width={100} height={100} />

                                </picture>
                                <h2 className="text-center text-l uppercase tracking-wider font-bold text-white">{crypt.name}</h2>
                                <p className="text-center text-red-700 font-bold">{crypt.symbol}</p>
                                <p className="text-center text-s text-white">Classement Top 15 : <span className="text-red-500"> {crypt.rank}</span></p>
                                <h3 className="text-center text-white">Price: <span className="text-purple-400">{parseFloat(crypt.price).toFixed(6).toLocaleString()} EUR</span></h3>
                                <p className="text-center text-white">Variation 1d: <span>{parseFloat(crypt['1d'].price_change).toFixed(6) + "EUR"}</span>
                                    {crypt["1d"].price_change_pct < 0 ?
                                        (<span className="text-red-600 font-bold">&#x2798; </span>) :
                                        (<span className="text-green-600 font-bold">&#x279A; </span>)}
                                </p>
                                <p className="text-center text-gray-400">Variation 30d: <span>{parseFloat(crypt['30d'].price_change).toFixed(6) + "EUR"}</span>
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
        },
        revalidate: 1,
    }

}

