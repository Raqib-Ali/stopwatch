import { useState } from "react";



export function StopWatch() {

    var [sec, setSec] = useState(0);
    var [min, setMin] = useState(0);
    var [mil, setMil] = useState(0);


    var i = 0;
    var j = 0;
    var k = 0;

    function Start() {
        i++;
        setMil(i);
        if (i === 99) {
            i=0;
            j++;
            setSec(j);
            if (j === 60) {
                j=0;
                k++;
                setMin(k);
            }
        }
    }

    function handleSec() {
        reset();
        window.ref = setInterval(Start, 10);
    }

    function Stop() {
        clearInterval(window.ref);
    }

    function reset() {
        Stop();
        setMil(0);
        setMin(0);
        setSec(0);
    }


    return (<div className="d-flex bg-dark justify-content-center align-items-center" style={{ height: "100vh" }}>
        <div className="rounded-3 d-flex flex-column justify-content-around h-50 p-3 bg-light border w-50">
            <div className="text-dark d-flex justify-content-md-center"><div style={{ fontSize: "35px", fontWeight: "bold" }} className="d-flex w-25 justify-content-around "><span style={{ fontSize: "35px", fontWeight: "bold" }}>{min}</span>:<span style={{ fontSize: "35px", fontWeight: "bold" }}>{sec}</span>.<span style={{ fontSize: "35px", fontWeight: "bold" }}>{mil}</span></div></div>
            <div className="d-flex justify-content-around">
                <button className="btn btn-success w-25" onClick={handleSec}>Start</button>
                <button className="btn btn-danger  w-25" onClick={Stop}>Stop</button>
                <button className="btn btn-warning  w-25" onClick={reset}>Reset</button>
            </div>
        </div>
    </div>)
}