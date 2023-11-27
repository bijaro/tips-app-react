import React from "react";

const Button = ({ percent, calcTipPers, tipel, tipSelected }) => {
    // const [isClicked, setIsClicked] = useState(false)
  const clicked = (e) => {
      
        // console.log(tipel[0])
       
        // setIsClicked(true)
        // e.target.style='bg-indigo-200';
        calcTipPers(percent);
    };
    return (
        <>
            <button
                type="button"
                className={`border-2 text-white self-end bg-${
                    percent === tipSelected ? "indigo-200" : "indigo-400"
                } py-3 px-6 rounded-xl me-3`}
                onClick={clicked}>
                {percent}%
            </button>
        </>
    );
};

export default Button;
