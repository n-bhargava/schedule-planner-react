import React, { useCallback } from "react"
import { useState } from "react"
import "../bootstrap.css"
import "../style.css"

function RangeSlider({storeValue}){
    const [value, setValue] = useState(0)

    function getValue(e){
        setValue(e.target.value)
        storeValue(e.target.value)
    }

    return (
        <span class="range-slider__wrap">
            <input type="range" class="range-slider range-slider--primary"
                id="range-slider-ec-3" value={value} min="0" max="300" step="5" onChange={getValue} />
            <div class="range-slider__tooltip range-slider__tooltip--auto range-slider__tooltip--bottom range-slider__tooltip">
                <div class="range-slider__tooltip__label" >{ value } min</div>
                <div class="range-slider__tooltip__arrow"></div>
            </div>
        </span>
    )

}

export default RangeSlider;