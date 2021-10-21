import React from "react";
import Link from "next/link";
import MyDropdown from "./Dropdown";



export default function Nav() {

    return (
        <>
            <nav>
                <div className="inline-grid grid-cols-4 gap-x-20 p-4 text-white visited:text-purple-600">

                    <Link href="/" scroll>
                        <a>
                            Home
                        </a>
                    </Link>
                    <button>
                        <MyDropdown />
                    </button>
                    <Link href="../cryptos">
                        <a>
                            Top 10 Crypto
                        </a>

                    </Link>


                    <Link href="../nft">
                        <a>
                            View NFT
                        </a>
                    </Link>

                </div>

            </nav>

            <div className="border-t-4">
            </div>
        </>
    )

}



