import React, { useEffect, useState } from "react";

const Main = () => {
  const [user, setuser] = useState("circle");
  const [player,setplayer]=useState('Player 1');
  const [over,setover]=useState(false);
  const handleclick = (e) => {
      e.preventDefault();
      let a = document.getElementById("result");
      if (e.target.attributes[1].value === "" && a.style.display!=='block') {
          e.target.attributes[1].value=user;
          // console.log(e.target.parentNode.parentNode);
          if (user === "circle"){
            e.target.innerHTML = `<div onClick={} style="clip-path: circle(40% at 50% 50%); background-color: blue;width: 100%; height: 100%; "></div>`;
            setuser('cross');
            setplayer('Player 2');
          }
          else{
            e.target.innerHTML = `<div onClick={} style="clip-path: polygon(10% 0, 0 10%, 40% 50%, 0% 90%, 10% 100%, 50% 60%, 90% 100%, 100% 90%, 60% 50%, 100% 10%, 90% 0, 50% 40%); width: 100%; height: 100%; "><span style="clip-path: circle(40% at 50% 50%); background-color: green;width: 100%; height: 100%; display:block"></span></div>`;
            setuser("circle");
            setplayer('Player 1');
          }
        }
        // else if(e.target.attributes[1].value === "" && a.style.display!=='block'){
        //   e.target.attributes[1].value=user;
        //   if (user === "circle"){
        //     e.target.innerHTML = `<div style="clip-path: circle(40% at 50% 50%); background-color: blue;width: 100%; height: 100%; "></div>`;
        //     setuser('cross');
        //   }
        //   else{
        //     e.target.innerHTML = `<div style="clip-path: polygon(10% 0, 0 10%, 40% 50%, 0% 90%, 10% 100%, 50% 60%, 90% 100%, 100% 90%, 60% 50%, 100% 10%, 90% 0, 50% 40%); width: 100%; height: 100%; "><span style="clip-path: circle(40% at 50% 50%); background-color: green;width: 100%; height: 100%; display:block"></span></div>`;
        //     setuser("circle");
        //   }
        // }
    };
    useEffect(() => {
    let a = document.getElementById("result");
    let c=document.getElementById('box').style;
    let b=document.getElementById('loading').style;
    if(a.style.display!=='block'){
        if (
            document.getElementById("00").attributes[1].value.length !== 0 &&
            document.getElementById("00").attributes[1].value ==
              document.getElementById("01").attributes[1].value &&
            document.getElementById("01").attributes[1].value ==
              document.getElementById("02").attributes[1].value
          ) {
            b.display='none';
              a.style.display = "block";
              setover(true);
            if (document.getElementById("00").attributes[1].value === "circle") {
              c.borderColor='blue'
              a.innerHTML = "Player1 won congratulations";
            } else if (document.getElementById("00").attributes[1].value === "cross") {
              c.borderColor='green'
              document.getElementById("result").innerHTML =
                "Player2 won congratulations";
            }
          } else if (
            document.getElementById("10").attributes[1].value.length !== 0 &&
            document.getElementById("10").attributes[1].value ==
              document.getElementById("11").attributes[1].value &&
            document.getElementById("11").attributes[1].value ==
              document.getElementById("12").attributes[1].value
          ) {
            setover(true);
            b.display='none';
              a.style.display = "block";
            if (document.getElementById("10").attributes[1].value === "circle") {
              c.borderColor='blue'
              a.innerHTML = "Player1 won congratulations";
            } else if (document.getElementById("10").attributes[1].value === "cross") {
              c.borderColor='green'
              document.getElementById("result").innerHTML =
                "Player2 won congratulations";
            }
          } else if (
            document.getElementById("20").attributes[1].value.length !== 0 &&
            document.getElementById("20").attributes[1].value ==
              document.getElementById("21").attributes[1].value &&
            document.getElementById("21").attributes[1].value ==
              document.getElementById("22").attributes[1].value
          ) {
            setover(true);
            b.display='none';
              a.style.display = "block";
            if (document.getElementById("20").attributes[1].value === "circle") {
              c.borderColor='blue'
              a.innerHTML = "Player1 won congratulations";
            } else if (document.getElementById("20").attributes[1].value === "cross") {
              c.borderColor='green'
              document.getElementById("result").innerHTML =
                "Player2 won congratulations";
            }
          } else if (
            document.getElementById("00").attributes[1].value.length !== 0 &&
            document.getElementById("00").attributes[1].value ==
              document.getElementById("10").attributes[1].value &&
            document.getElementById("10").attributes[1].value ==
              document.getElementById("20").attributes[1].value
          ) {
            setover(true);
            b.display='none';
              a.style.display = "block";
            if (document.getElementById("00").attributes[1].value === "circle") {
              c.borderColor='blue'
              a.innerHTML = "Player1 won congratulations";
            } else if (document.getElementById("00").attributes[1].value === "cross") {
              c.borderColor='green'
              document.getElementById("result").innerHTML =
                "Player2 won congratulations";
            }
          } else if (
            document.getElementById("01").attributes[1].value.length !== 0 &&
            document.getElementById("01").attributes[1].value ==
              document.getElementById("11").attributes[1].value &&
            document.getElementById("11").attributes[1].value ==
              document.getElementById("21").attributes[1].value
          ) {
            setover(true);
            b.display='none';
              a.style.display = "block";
            if (document.getElementById("01").attributes[1].value === "circle") {
              c.borderColor='blue'
              a.innerHTML = "Player1 won congratulations";
            } else if (document.getElementById("01").attributes[1].value === "cross") {
              c.borderColor='green'
              document.getElementById("result").innerHTML =
                "Player2 won congratulations";
            }
          } else if (
            document.getElementById("02").attributes[1].value.length !== 0 &&
            document.getElementById("02").attributes[1].value ==
              document.getElementById("12").attributes[1].value &&
            document.getElementById("12").attributes[1].value ==
              document.getElementById("22").attributes[1].value
          ) {
            setover(true);
            b.display='none';
              a.style.display = "block";
            if (document.getElementById("02").attributes[1].value === "circle") {
              c.borderColor='blue'
              a.innerHTML = "Player1 won congratulations";
            } else if (document.getElementById("02").attributes[1].value === "cross") {
              c.borderColor='green'
              document.getElementById("result").innerHTML =
                "Player2 won congratulations";
            }
          } else if (
            document.getElementById("00").attributes[1].value.length !== 0 &&
            document.getElementById("00").attributes[1].value ==
              document.getElementById("11").attributes[1].value &&
            document.getElementById("11").attributes[1].value ==
              document.getElementById("22").attributes[1].value
          ) {
            setover(true);
            b.display='none';
              a.style.display = "block";
            if (document.getElementById("00").attributes[1].value === "circle") {
              c.borderColor='blue'
              a.innerHTML = "Player1 won congratulations";
            } else if (document.getElementById("00").attributes[1].value === "cross") {
              c.borderColor='green'
              document.getElementById("result").innerHTML =
                "Player2 won congratulations";
            }
          } else if (
            document.getElementById("02").attributes[1].value.length !== 0 &&
            document.getElementById("02").attributes[1].value ==
              document.getElementById("11").attributes[1].value &&
            document.getElementById("11").attributes[1].value ==
              document.getElementById("20").attributes[1].value
          ) {
            setover(true);
            b.display='none';
              a.style.display = "block";
            if (document.getElementById("02").attributes[1].value === "circle") {
              c.borderColor='blue'
              a.innerHTML = "Player1 won congratulations";
            } else if (document.getElementById("02").attributes[1].value === "cross") {
              c.borderColor='green'
              document.getElementById("result").innerHTML =
                "Player2 won congratulations";
            }
          }
          else if(document.getElementById("00").attributes[1].value.length !== 0 && document.getElementById("01").attributes[1].value.length !== 0 && document.getElementById("02").attributes[1].value.length !== 0 && document.getElementById("10").attributes[1].value.length !== 0 && document.getElementById("11").attributes[1].value.length !== 0 && document.getElementById("12").attributes[1].value.length !== 0 && document.getElementById("20").attributes[1].value.length !== 0 && document.getElementById("21").attributes[1].value.length !== 0 && document.getElementById("22").attributes[1].value.length !== 0){
            setover(true);
            b.display='none';
            a.style.display='block';
            document.getElementById("result").innerText='Game Tied';
          }
        }
  }, [user]);
  // console.log(document.getElementById('00'));
  return (
    <>
      <center>
        <h2>circle belongs to <span style={{color:'blue'}}>Player1</span> and cross belongs to <span style={{color:'green'}}>Player2</span></h2>
        <h3 style={{color:player=='Player 1'?'blue':'green'}}>{!over && player +' turn'}</h3>
      </center>
      <div id="box">
        <div>
          <div id="00" value='' onClick={(e) => handleclick(e)}></div>
          <div id="01" value='' onClick={(e) => handleclick(e)}></div>
          <div id="02" value='' onClick={(e) => handleclick(e)}></div>
        </div>
        <div>
          <div id="10" value='' onClick={(e) => handleclick(e)}></div>
          <div id="11" value='' onClick={(e) => handleclick(e)}></div>
          <div id="12" value='' onClick={(e) => handleclick(e)}></div>
        </div>
        <div>
          <div id="20" value='' onClick={(e) => handleclick(e)}></div>
          <div id="21" value='' onClick={(e) => handleclick(e)}></div>
          <div id="22" value='' onClick={(e) => handleclick(e)}></div>
        </div>
      </div>
      <center>
        <div id="result"></div>
      </center>
      <center>
        <div id="loading">
            Game in progress <span id="load"></span>
        </div>
      </center>
      <center>
        <button id="reset" onClick={()=>window.location.reload()}>Reset</button>
      </center>
    </>
  );
};

export default Main;
