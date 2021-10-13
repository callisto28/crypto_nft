import Head from 'next/head';
import Link from 'next/link';


export default function Layout({ children, pages }) {
    return (
        <div className="bg-black pt-5 text-center min-h-screen">

            <Head>
                <title>{pages}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="title" content="FOURNY Sébastien - Développeur Web" />
                <meta name="description" content="Application qui permet de visualiser le top10 des cryptomonnaies ainsi que les NFT en cour d'evenement, 1er réalisation sous NextJS"></meta>
                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://crypto-nft.vercel.app/" />
                <meta property="og:title" content="FOURNY Sébastien - Développeur Web" />
                <meta property="og:description" content="Application qui permet de visualiser le top10 des cryptomonnaies ainsi que les NFT en cour d'evenement, 1er réalisation sous NextJS" />
                <meta property="og:image" content="https://crypto-nft.vercel.app/_next/image?url=%2Fimg%2Fmain.jpg&w=384&q=50" />

                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://crypto-nft.vercel.app/" />
                <meta property="twitter:title" content="FOURNY Sébastien - Développeur Web" />
                <meta property="twitter:description" content="Application qui permet de visualiser le top10 des cryptomonnaies ainsi que les NFT en cour d'evenement, 1er réalisation sous NextJS" />
                <meta property="twitter:image" content="https://crypto-nft.vercel.app/_next/image?url=%2Fimg%2Fmain.jpg&w=384&q=50"></meta>
            </Head>
            <header className="container-lg">
                <h1 className="text-3xl mb-2 text-white">Crypto and NFT </h1>
                <div className="inline-grid grid-cols-1 gap-x-10 p-4">
                    {/*  eslint-disable-next-line @next/next/link-passhref */}
                    <Link href="/" scroll>
                        <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 px-10 py-2 m-2 rounded-3xl hover:shadow-md border-2 border-blue-300">Home</button>
                    </Link>
                </div>
                <div className="border-t-4">
                </div>
            </header>
            <main className="grid-cols-1 p-4">{children}</main>

            <footer className="p-5 border-t-4">


                <ul className=" pt-5 pb-1 flex justify-around">
                    <li className="text-white">A propos</li>
                    <li className="text-white"><a href="https://seb4dev.works/" target="_blank" rel="noreferrer">Seb4Dev</a></li>
                    <li className="text-white">Mentions légales</li>
                </ul>

            </footer>
        </div>
    )
}