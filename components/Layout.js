import Head from 'next/head';
import Link from 'next/link';


export default function Layout({ children, pages }) {
    return (
        <div className="bg-black pt-5 text-center min-h-screen">

            <Head>
                <title>{pages}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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