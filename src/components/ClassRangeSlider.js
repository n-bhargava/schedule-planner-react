// import React, { useEffect } from "react"
import { useState } from "react"
import ClassDropdown from "./ClassDropdown"
import "../bootstrap.css"
import "../style.css"

function ClassRangeSlider({storeClassVal, storeLabel}){
    var [classes, setClasses] = useState('')
    const [minTime, setMinTime] = useState('')
    // const [className, setClassName] = useState('')

    function setInitial(value){
        setMinTime(value)
        setClasses(value)
    }

    function getClass(e) {
        if ((e.target.value >= minTime && e.target.value != 5) || e.target.value > 95) {
            setClasses(e.target.value)
            storeClassVal(e.target.value)
        } else {
            setClasses(minTime)
            storeClassVal(minTime)
        }

    }






    return (
        <div>
            <ClassDropdown storeMinValue={setInitial} storeLabel={(value, label) => storeLabel(value, label)} />

            {minTime !== '' ? (
                <span class="range-slider__wrap">
                    <input type="range" class="range-slider-disabled range-slider--primary"
                        id="range-slider-homework-1" value={classes} min="0" max="120" step="5" onChange={ getClass } />
                    { minTime === classes ? (
                        <div class="range-slider__tooltip range-slider__tooltip--auto range-slider__tooltip--bottom range-slider__tooltip--disabled">
                            <div class="range-slider__tooltip__label">MHT: {minTime} mins</div>
                            <div class="range-slider__tooltip__arrow"></div>
                        </div>
                    ) : (
                        <div class="range-slider__tooltip range-slider__tooltip--auto range-slider__tooltip--bottom range-slider__tooltip--disabled">
                                <div class="range-slider__tooltip__label">{classes} mins</div>
                            <div class="range-slider__tooltip__arrow"></div>
                        </div>
                    )}

                </span>

            ) : (
                <span class="range-slider__wrap">
                    <input type="range" class="range-slider-disabled range-slider--primary"
                        id="range-slider-homework-1" value="0" min="0" max="120" step="5" disabled={true} />
                    <div class="range-slider__tooltip range-slider__tooltip--auto range-slider__tooltip--bottom range-slider__tooltip--disabled">
                        <div class="range-slider__tooltip__label" id="label-hw1"></div>
                        <div class="range-slider__tooltip__arrow"></div>
                    </div>
                </span>
            )}

        </div>
    
    )
}

export default ClassRangeSlider;

// onChange={storeClassVal(minTime)}
// onChange={storeClassVal(classes)}