import React from 'react'

const Affichage = ({ tip, totalByPeople, resetFunc }) => {
    return (
        <div className="w-3/4 bg-indigo-300 ms-4 space-y-8 text-center px-6 py-12 rounded-xl ">
            <div className="flex p-2 ">
                <h3 className="font-bold">Tip Mount</h3>
                <h3 className="text-2xl px-3"> {tip} $</h3>
            </div>
            <div className="flex p-2">
                <h3 className="font-bold">Tip Mount</h3>
                <h3 className="text-xl px-3"> {totalByPeople} $</h3>
            </div>
            <button
                type="reset"
                className="border-solid border-2 py-2 px-4  rounded-lg"
                onClick={(e) => {
                    resetFunc();
                }}>
                reset
            </button>
        </div>
    );
};

export default Affichage