import React from "react"
import { useState } from "react"
import "../bootstrap.css"
import "../style.css"

function School(){
    const [schoolVal, setSchoolVal] = useState(0)
    const options = [
        {label: " ", value: ''},
        {label: "5.5 hours (early dismissal/late arrival)", value: 5.5},
        {label: "7 hours (full day)", value: 7}
    ]

    function getSchool(e){
        setSchoolVal(e.target.value)
    }


    return {
        schoolVal,
        renderSchool: (
        <div class="container">
            <h3>HOURS IN SCHOOL DAY</h3>
            <div class="form-check">
                <div class="card-school">
                    <div class="card-body">
                        <h4 class="card-title">School</h4>
                        <div class="dropdown">
                            <select name="schoolHours" id="schoolHours" onChange={getSchool}>
                                {options.map(option => (
                                    <option key={option.label} value={option.value}>{option.label}</option>
                                ))}
                            </select>
                        </div>
                        { schoolVal !== '' ? (
                            <span class="range-slider__wrap">
                                <input type="range" class="range-slider-disabled range-slider--primary" id="range-slider-school" value={schoolVal} min="0" max="10" step="0.5" disabled={true} />
                                <div class="range-slider__tooltip range-slider__tooltip--auto range-slider__tooltip--bottom range-slider__tooltip--disabled">
                                    <div class="range-slider__tooltip__label" id="label-school">{schoolVal} hours</div>
                                    <div class="range-slider__tooltip__arrow"></div>
                                </div>
                            </span> 

                        ) : (
                            <span class="range-slider__wrap">
                                <input type="range" class="range-slider-disabled range-slider--primary" id="range-slider-school" value="0" min="0" max="10" step="0.5" disabled={true} />
                                <div class="range-slider__tooltip range-slider__tooltip--auto range-slider__tooltip--bottom range-slider__tooltip--disabled">
                                    <div class="range-slider__tooltip__label" id="label-school"></div>
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

export default School;