import React, { useState } from "react";

import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Affichage from "./components/Affichage";

function App() {
    const [bill, setBill] = useState(0);
    const [person, setPerson] = useState(0);
    const [tipSelected, setTipSelected] = useState(null)
    const [tip, setTip] = useState(0)
    const [total,setTotal] = useState(0)

    const porencentValues = [5, 10, 15, 20, 25];
    

    const addBill = (e) => {
        setBill(e.target.value);
    };

    const addPerson = (e) => {
        setPerson(e.target.value);
    };

    const calcTipPers = (tip) => {
        if (!bill ||!person) {
            alert('enter une valeur si il vous plait !!!')
            return
        }
        
        setTipSelected(tip)
        console.log(tip)
        console.log(bill)
        console.log(person)
       
        const totalTips = bill * (tip / 100);
        const tipByPeople = (totalTips / person).toFixed(2)
        // console.log('tip', tipByPeople);
        setTip(tipByPeople)
        const totalByPeople = (bill / person + tip).toFixed(2)
        setTotal(totalByPeople)
    }

    const resetFunc = () => {

        setBill(0)
        setPerson(0)
        setTip(0)
        setTotal(0)
    }
    // console.log(calcTipPers())

    return (
        <div className=" p-5 bg-white flex items-center justify-between ">
            {/* left side  */}
            <div className="space-y-3">
                <Input text="bill" addValue={addBill} value={bill} />
                <div>
                    <p>select Tip %</p>
                    <div className="flex items-center justify-start flex-wrap w-4/5 me-14 space-y-3 mb-1">
                        {porencentValues.map((element, index) => (
                            <Button
                                key={index}
                               
                                percent={element}
                                calcTipPers={calcTipPers}
                                tipSelected={tipSelected}
                            />
                        ))}
                    </div>
                </div>

                <Input text="tip" addValue={addPerson} value={person} />
            </div>
            {/* right side  */}
            <Affichage tip={tip} totalByPeople={total} resetFunc={resetFunc} />
        </div>
    );
}

export default App;
