export async function getTenCrypto(context) {

    const API_KEY = process.env.API_KEY;
    try {
        const res = await fetch(`https://api.nomics.com/v1/currencies/ticker?key=a7aa7ea4b3e128b4497f815cd1aa2c9198e51909&ids=BTC,ETH,USDT,ADA,BNB,XRP,SOL,USDC,DOT,DOGE,ENJ,LTC&interval=1d,30d&convert=EUR&per-page=100&page=1`
        ).then((res) => res.json());

        return res

    } catch (err) {
        console.error(err);
    }
}

export async function getAllCrypto(context) {

    const API_KEY = process.env.API_KEY;
    try {
        const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C%2024h`
        ).then((res) => res.json());

        return res

    } catch (err) {
        console.error(err);
    }
}
