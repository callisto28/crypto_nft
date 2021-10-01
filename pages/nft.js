import Layout from "../components/Layout";
import Link from "next/link";


export default function Home({ res1 }) {

    console.log(res1, "res1");


    return (<Layout page='Accueil Nft'>
        <div className="text-white text-center">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p className="text-center py-2">Voici une liste d'événements qui se produisent sur les actifs suivis par OpenSea. Le champ "event_type" indique de quel type d'événement il s'agit (transfert, enchère réussie, etc.).</p>
        </div>
        <ul className="grid lg:grid-cols-3 gap-2 sm:grid-cols-1 py-2">
            {res1.asset_events.map((nft, index1) => (
                <li key={index1} className="relative hover:shadow-md p-5 border border-blue-700 rounded-3xl bg-gradient-to-r from-green-100 to-blue-200 mx-2">

                    <a className="rounded-md h-10" href={nft.asset.collection.external_url} target="_blank" rel="noreferrer">
                        <div className="text-center" >
                            {/*  eslint-disable-next-line @next/next/no-img-element */}
                            <img src={nft.asset.asset_contract.image_url} alt={nft.asset.asset_contract.image_url} className="w-20 h-20 mx-auto m-6" />

                        </div>
                        <h2 className="text-center text-2xl uppercase tracking-wider font-bold text-gray-800"> Name NFT : {nft.asset.asset_contract.name}</h2>
                        <p className="text-center text-xl uppercase tracking-wider font-bold text-gray-800">Symbol : {nft.asset.asset_contract.symbol}</p>
                        <p className="text-center text-gray-700">Description : {nft.asset.collection.description}</p>
                        <h3 className="text-center">URL Poject : {nft.asset.collection.external_url}</h3>
                        <h3 className="text-center">Event : {nft.event_type}</h3>
                        {/* <h3 className="text-center text-black">Price : {parseFloat(nft.price).toFixed(2)} EUR</h3>
                            <p className="text-center text-gray-800">Variation 1d : <span>{parseFloat(nft['1d'].price_change).toFixed(2) + "EUR"}</span>
                                {nft["1d"].price_change_pct < 0 ? (<span className="text-red-600 font-bold">&#x2798;</span>) : (<span className="text-green-600 font-bold">&#x279A;</span>)}
                            </p>
                            <p className="text-center text-gray-800">Variation 30d : <span>{parseFloat(nft['30d'].price_change).toFixed(2) + "EUR"}</span>
                                {nft["30d"].price_change_pct < 0 ? (<span className="text-red-600 font-bold">&#x2798;</span>) : (<span className="text-green-600 font-bold">&#x279A;</span>)}
                            </p> */}


                    </a>

                </li>
            ))}



        </ul>



    </Layout>);

}

export async function getStaticProps() {

    try {
        const res1 = await fetch(
            "https://api.opensea.io/api/v1/events?only_opensea=false&offset=0&limit=20"
        ).then((res1) => res1.json());






        return {
            props: { res1 },

        }


    } catch (err) {
        console.error(err);
    }

}