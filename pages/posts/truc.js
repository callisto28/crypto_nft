// import Layout from "../../components/Layout";
// import { getTenCrypto } from '../../lib/api';
// import Link from "next/link";



// console.log('arrive dans Crypt');

// export default function Home({ postData }) {


//     return (<Layout page='Accueil Crypto'>

//         <h1 className="text-white"> Crypto top ten</h1>
//         {postData.map((post, index) => {
//             console.log(postData, 'postdata');
//             <li key={index} className="relative hover:shadow-md p-5 border border-blue-700 rounded-3xl bg-gradient-to-r from-green-100 to-blue-200 mx-2">
//                 <Link href={`/`}>
//                     <a className="rounded-md">
//                         <div className="text-center">

//                             <img src={post.logo_url} alt={post.name} className="w-20 h-20 mx-auto m-6" />

//                         </div>
//                         <h2 className="text-center text-2xl uppercase tracking-wider font-bold text-gray-800">{post.name}</h2>
//                         <p className="text-center text-gray-700">{post.symbol}</p>
//                         <h3 className="text-center text-black">Price: {parseFloat(post.price).toFixed(2)} EUR</h3>
//                         <p className="text-center text-gray-800">Variation 1d: <span>{parseFloat(post['1d'].price_change).toFixed(2) + "EUR"}</span>
//                             {post["1d"].price_change_pct < 0 ?
//                                 (<span className="text-red-600 font-bold">&#x2798; </span>) :
//                                 (<span className="text-green-600 font-bold">&#x279A; </span>)}
//                         </p>
//                         <p className="text-center text-gray-800">Variation 30d: <span>{parseFloat(post['30d'].price_change).toFixed(2) + "EUR"}</span>
//                             {post["30d"].price_change_pct < 0 ?
//                                 (<span className="text-red-600 font-bold">&#x2798; </span>) :
//                                 (<span className="text-green-600 font-bold">&#x279A; </span>)}
//                         </p>
//                     </a>
//                 </Link>
//             </li>
//         }

//         )
//         }


//     </Layout>);

// }

// export async function getStaticPaths() {
//     const posts = await getTenCrypto()
//     const paths = posts.map((post) => ({
//         params: { id: post[0] },

//     }))
//     console.log(paths, 'paths');
//     return { paths, fallback: true }
// }

// export async function getStaticProps({ params }) {
//     const postData = await getTenCrypto(params.id)
//     return {
//         props: {
//             postData
//         }
//     }

// }




