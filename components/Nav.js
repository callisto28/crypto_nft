import React from "react";
import Link from "next/link";
import MyDropdown from "./Dropdown";


export default function Nav() {

    return (
        <nav>
            <div className="inline-grid grid-cols-4 gap-x-20 p-4 text-white visited:text-purple-600">

                <Link href="/" scroll>
                    <button>
                        Home
                    </button>
                </Link>
                <button>
                    <MyDropdown />
                </button>
                <Link href="../cryptos">
                    <button>
                        Top 10 Crypto
                    </button>

                </Link>


                <Link href={`../nft`}>
                    <button>
                        View NFT
                    </button>
                </Link>
            </div>

        </nav>
    )

}



