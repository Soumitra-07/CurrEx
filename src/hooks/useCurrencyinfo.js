import React from "react";
import { useEffect, useState } from "react";

function useCurrencyinfo(currency) {
    useEffect(() => {
        let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        fetch(url).then((res) => { res.json }).then()
    }, [])
    return {

    }
}
