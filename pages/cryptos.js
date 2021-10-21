import Layout from "../components/Layout";
import Link from "next/link";
import { getTenCrypto } from "../lib/api";

import Image from "next/image";



export default function Home({ res }) {



    return (
        <Layout page='top ten'>
            <ul className="grid lg:grid-cols-5 lg:gap-2 md:grid-cols-2 md:gap-9 sm:grid-cols-1 sm:gap-5">

                {res.map((crypt, index) => (
                    <li key={index} className="relative hover:shadow-md p-3 border border-blue-700 rounded-2xl bg-gradient-to-r from-green-100 to-blue-200 mx-2" >
                        <Link href={`/`}>
                            <a className="rounded-md">
                                <div className="text-center">

                                    {/* <img src={crypt.logo_url} alt={crypt.name} className="w-20 h-20 mx-auto m-6" /> */}
                                    <Image src={crypt.logo_url} alt={crypt.name} width={100} height={100} />

                                </div>
                                <h2 className="text-center text-l uppercase tracking-wider font-bold text--gray-700">{crypt.name}</h2>
                                <p className="text-center text-red-700 font-bold">{crypt.symbol}</p>
                                <h3 className="text-center text--gray-700">Price: {parseFloat(crypt.price).toFixed(2).toLocaleString()} EUR</h3>
                                <p className="text-center text--gray-700">Variation 1d: <span>{parseFloat(crypt['1d'].price_change).toFixed(2) + "EUR"}</span>
                                    {crypt["1d"].price_change_pct < 0 ?
                                        (<span className="text-red-600 font-bold">&#x2798; </span>) :
                                        (<span className="text-green-600 font-bold">&#x279A; </span>)}
                                </p>
                                <p className="text-center text--gray-700">Variation 30d: <span>{parseFloat(crypt['30d'].price_change).toFixed(2) + "EUR"}</span>
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

