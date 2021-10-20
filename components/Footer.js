import React from "react";

export default function Footer() {
    return (
        <div className="bg-black pt-5 text-center">
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