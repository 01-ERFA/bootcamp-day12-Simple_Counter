//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let digit0 = 0
let digit1 = 0
let digit2 = 0
let digit3 = 0
let digit4 = 0
let digit5 = 0
let wall = 10

setInterval(() => {ReactDOM.render( < Home digit0 = {digit0} digit1 = {digit1} digit2 = {digit2} digit3 = {digit3} digit4 = {digit4} digit5 = {digit5}/>, 
                document.querySelector("#app"));
                    digit0++;
                    if(digit0 === wall){
                        digit0 = 0
                        digit1++
                    }
                    if(digit1 === wall) {
                        digit0 = 0
                        digit1 = 0
                        digit2++
                    }
                    if(digit2 === wall) {
                        digit0 = 0
                        digit1 = 0
                        digit2 = 0
                        digit3++
                    }
                    if(digit3 === wall) {
                        digit0 = 0
                        digit1 = 0
                        digit2 = 0
                        digit3 = 0
                        digit4++
                    }
                    if(digit4 === wall) {
                        digit0 = 0
                        digit1 = 0
                        digit2 = 0
                        digit3 = 0
                        digit4 = 0
                        digit5++
                    }
                    if(digit5 === wall) {
                        digit0 = 0
                        digit1 = 0
                        digit2 = 0
                        digit3 = 0
                        digit4 = 0
                        digit5 = 0
                    }
            }, 1000) 