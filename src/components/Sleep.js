import React from "react"
import { useState } from "react"
import "../bootstrap.css"
import "../style.css"

function Sleep(){
    const [sleepVal, setSleepVal] = useState(0)
    
    const options = [
        {label: " ", value: ''},
        {label: "10 hours", value: 10},
        {label: "9 hours", value: 9},
        {label: "8 hours", value: 8}
    ]

    function getSleep(e){
        setSleepVal(e.target.value)
    }

    return {
        sleepVal,
        renderSleep: (
        <div class="container">
        <h3>HOURS ACTUALLY SPENT SLEEPING</h3>
            <div class="form-check">
                <div class="card-school">
                    <div class="card-body">
                        <h4 class="card-title">Sleep</h4>
                        <div class="dropdown">
                            <select name="sleepHours" id="sleepHours" onChange={getSleep}>
                                {options.map(option => (
                                    <option key={option.label} value={option.value}>{option.label}</option>
                                ))}
                            </select>
                        </div>
                        { sleepVal !== '' ? (
                            <span class="range-slider__wrap">
                                <input type="range" class="range-slider-disabled range-slider--primary" id="range-slider-sleep" value={sleepVal} min="0" max="12" step="0.5" disabled={true} />                               
                                <div class="range-slider__tooltip range-slider__tooltip--auto range-slider__tooltip--bottom range-slider__tooltip--disabled">
                                    <div class="range-slider__tooltip__label" id="label-sleep">{sleepVal} hours</div>
                                    <div class="range-slider__tooltip__arrow"></div>
                                </div>
                            </span>
                        ) : (
                            <span class="range-slider__wrap">
                                <input type="range" class="range-slider-disabled range-slider--primary" id="range-slider-sleep" value="0" min="0" max="12" step="0.5" disabled={true} />                               
                                <div class="range-slider__tooltip range-slider__tooltip--auto range-slider__tooltip--bottom range-slider__tooltip--disabled">
                                    <div class="range-slider__tooltip__label" id="label-sleep"></div>
                                    <div class="range-slider__tooltip__arrow"></div>
                                </div>
                            </span>

                        )}
                    </div>
                </div>
            </div>
        </div>

    )
    }
    
}
export default Sleep;