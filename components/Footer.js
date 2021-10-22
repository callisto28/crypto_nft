import React from "react";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="bg-black pt-5 text-center">
            <footer className="pt-8 border-t-4">


                <ul className="flex justify-around">
                    <li className="text-white"> <Link href='./Apropos'>La crypto-monnaies ? </Link></li>
                    <li className="text-white"><a href="https://seb4dev.works/" target="_blank" rel="noreferrer">Seb4Dev</a></li>

                </ul>

            </footer>
        </div>
    )
}