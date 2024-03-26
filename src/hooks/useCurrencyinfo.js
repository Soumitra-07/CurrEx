import React from "react";
import { useEffect, useState } from "react";

function useCurrencyinfo(currency) {
    const [data, setdata] = useState({})
    useEffect(() => {

        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/1/currencies/${currency}.json`).then((res) => res.json()).then((res) => setdata(res[currency]))
    }, [currency])
    console.log(data);
    return data
}
export default useCurrencyinfo;
