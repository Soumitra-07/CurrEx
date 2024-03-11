import React from "react";
import { useEffect, useState } from "react";

function useCurrencyinfo(currency) {
    const [data, setdata] = useState({})
    useEffect(() => {
        let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        fetch(url).then((res) => { res.json }).then((res) => setdata(res))
    }, [currency])
    return {
        data
    }
}
export default useCurrencyinfo;
