const BASE_URL = "https://api.coinpaprika.com/v1";

export function fetchCoins() {
    return fetch(`${BASE_URL}/coins`).then((res) => res.json());
}

export function fetchCoinInfo(id: string) {
    return fetch(`${BASE_URL}/coins/${id}`).then((res) => res.json());
}
export function fetchCoinTicker(id: string) {
    return fetch(`${BASE_URL}/tickers/${id}`).then((res) => res.json());
}
export function fetchCoinHistory(id: string) {
    return fetch(`https://ohlcv-api.nomadcoders.workers.dev?coinId=${id}`).then(
        (res) => res.json()
    );
}
