import {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";

export default function Price(props) {
    const apiKey = "CB99B3F8-9D46-4373-BAAD-668B5FFA19FF";

    const params = useParams();
    const symbol = params.symbol;

    const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

    const [coin, setCoin] = useState("null");

    const getCoin = async () => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            setCoin(data);
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getCoin();
    }, []);

    const loaded = () => {
        return(
            <div>
                <h1>
                    {coin.asset_id_base}/{coin.asset_id_quote}
                </h1>
                <h2>{coin.rate}</h2>
            </div>
        );
    };

    const loading = () => {
        return <h1>Loading...</h1>;
    };

    return coin && coin.rate ? loaded() : loading();
}