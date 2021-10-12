export async function getTenCrypto(context) {

    const API_KEY = process.env.API_KEY;
    try {
        const res = await fetch(`https://api.nomics.com/v1/currencies/ticker?key=${API_KEY}&ids=BTC,ETH,USDT,ADA,BNB,XRP,SOL,USDC,DOT,DOGE,ENJ,LTC&interval=1d,30d&convert=EUR&per-page=100&page=1`
        ).then((res) => res.json());

        return res

    } catch (err) {
        console.error(err);
    }
}
