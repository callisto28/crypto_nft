import Layout from "../components/Layout";
import Footer from "../components/Footer";

export default function Apropos() {
    return (
        <>
            <Layout page='A propos'>
                <div className="text-white text-center
                ">

                    <h1 className="font-extrabold text-xl pt-6">Principales caractéristiques des crypto-monnaies</h1>
                    <br />
                    <p>
                        Il existe quelques principes clés qui régissent l’utilisation, l’échange et les transactions des crypto-monnaies.
                    </p>
                    <br />
                    <ul>

                        <li>
                            <h2 className="font-bold">Cryptographie : </h2>
                            Les crypto-monnaies utilisent une cryptographie avancée et ce, par différentes manières. La cryptographie est née de la nécessité d’établir des communications sécurisées durant la seconde guerre mondiale et ce, afin de convertir des informations facilement déchiffrables en code crypté. La cryptographie moderne a parcouru un long chemin depuis lors et, au sein du monde digital actuel, est basée principalement sur la science informatique et les théories mathématiques. Elle dérive également de la science des communications, de la physique et de l’ingénierie électrique.

                            Deux des éléments principaux liés à la cryptographie s’appliquent aux crypto-monnaies, le ‘hashing’ et les signatures électroniques:

                            Le hashing ou hachage en français vérifie l’intégrité des données, maintient la structure de la blockchain et encode les adresses des comptes et les transactions des individus. Il génère également des puzzles cryptographiques en vue de rendre le minage du blocs impossible.
                            Les signatures électroniques permettent à un individu de prouver qu’il dispose d’un morceau d’information crypté sans révéler cette information. Avec les crypto-monnaies, cette technologie est utilisée pour signer des transactions monétaires. Il prouve au réseau que le détenteur du compte a donné son accord pour la transaction.
                        </li>
                        <br />
                        <li>
                            <h2 className="font-bold" >La technologie de la blockchain : </h2>

                            Une blockchain est le registre public ou la liste de toutes les transactions en crypto-monnaie. Les blocs complétés, composés des dernières transactions, sont enregistrés et ajoutés à la blockchain. Ils sont stockés par ordre chronologique en tant que registre ouvert, permanent et vérifiable. Un réseau peer-to-peer composé de participants à ce marché gère les blockchains et ils suivent toute une série de protocole pour valider les nouveaux blocs. Chaque ‘node’ ou ordinateur connecté au réseau télécharge automatiquement une copie de la blockchain. Cela permet à tous de suivre les transactions sans la nécessité de tenir un registre centralisé.

                            La technologie de la blockchain crée un registre qui ne peut être modifié sans l’accord du reste du réseau. Le concept de la blockchain est attribué au fondateur du bitcoin, Satoshi Nakamoto. Ce concept a été l’inspiration pour d’autres applications basées sur les monnaies et l’argent numériques.
                        </li>
                        <br />
                        <li>
                            <h2 className="font-bold">Le minage de blocs : </h2>

                            Le minage de blocs est le processus consistant à rattacher de nouveaux registres de transactions en tant que blocs à la blockchain. Durant ce processus - en prenant le bitcoin comme exemple - de nouveaux bitcoins sont produits, augmentant donc le nombre total en circulation. Le minage de crypto-monnaies requiert certains logiciels utilisés pour résoudre des puzzles mathématiques et cela valide ainsi les transactions légitimes qui constituent les blocs. Ces blocs sont ajoutés au registre public (blockchain) toutes les 10 minutes environ. Tandis que le logiciel résout ces transactions, le mineur est récompensé avec un montant donné de bitcoins. Plus le matériel du mineur peut effectuer les problèmes mathématiques, plus la probabilité de valider une transaction et d’obtenir la récompense en bitcoins est importante.
                        </li>
                    </ul>
                </div>
            </Layout>
            <Footer />
        </>

    )
}