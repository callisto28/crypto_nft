export async function getTenCrypto(context) {

    const API_KEY = process.env.API_KEY;
    try {
        const res = await fetch(`https://api.nomics.com/v1/currencies/ticker?key=${API_KEY}&interval=1d,30d&convert=EUR&rank&per-page=15&page=1`
        ).then((res) => res.json());

        return res

    } catch (err) {
        console.error(err);
    }
}

export async function getAllCrypto(context) {


    try {
        const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h%24h%7d`
        ).then((res) => res.json());

        return res

    } catch (err) {
        console.error(err);
    }
}


export async function getAllExchange(context) {


    try {
        const res = await fetch(`
        https://api.coingecko.com/api/v3/exchanges?per_page=100`
        ).then((res) => res.json());

        return res

    } catch (err) {
        console.error(err);
    }
}

export async function getNft() {

    try {
        const res1 = await fetch(
            "https://api.opensea.io/api/v1/events?only_opensea=false&offset=0&limit=50"
        ).then((res1) => res1.json());

        return res1

    } catch (err) {
        console.error(err);
    }

}





