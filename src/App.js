import { useState } from 'react';
import { InputBox } from './components';
import useCurrencyinfo from './hooks/useCurrencyinfo';
import './App.css';
import React from 'react';

function App() {



  const [amount, setamount] = useState(0)
  const [convertedamount, setconvertedamount] = useState(0)
  const [to, setto] = useState("usd")
  const [from, setfrom] = useState("inr")
  const Currencyinfo = useCurrencyinfo(from);
  const options = Object.keys(Currencyinfo)
  const swap = () => {
    setamount(convertedamount);
    setconvertedamount(amount);
    setto(from)
    setfrom(to)
  }
  const convert = () => {
    setconvertedamount(amount * Currencyinfo[to]);
  }


  return (
    <>

      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/6771607/pexels-photo-6771607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}

      >
        <div className="flex justify-center items-center p-4 bg-gray-200 rounded-lg">
          <h1 className="text-3xl font-bold text-gray-800"><span className="text-3xl font-bold text-green-500">Curr</span>Ex</h1>
        </div>
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert()
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="from"
                  amount={amount}
                  CurrencyOptions={options}
                  onCurrencyChange={(currency) => {
                    setamount(amount)
                  }}
                  selectCurrency={from}
                  onAmountChange={(amount) => {
                    setamount(amount)
                  }}

                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="to"
                  amount={amount}
                  CurrencyOptions={options}
                  onCurrencyChange={(currency) => {
                    setto(currency)
                  }}
                  selectCurrency={to}

                />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>

  );
}

export default App;
