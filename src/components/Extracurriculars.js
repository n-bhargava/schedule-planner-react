import React from "react"
import { useState } from "react"
import RangeSlider from "./RangeSlider"
// import Charts from "./Chart"
import "../bootstrap.css"
import "../style.css"

function Extracurriculars(){
    const [ec1Val, setEc1Val] = useState(0)
    const [ec2Val, setEc2Val] = useState(0)
    const [ec3Val, setEc3Val] = useState(0)





    return {
        ec1Val, ec2Val, ec3Val,
        renderEc: (
        <div class="container">
            <h3>EXTRACURRICULARS</h3>
            <div class="form-check">
                <div class="card-deck">
                    <div class="card-school">
                        <div class="card-body">
                            <h4 class="card-title">Extracurricular #1</h4>
                        </div>
                            <RangeSlider storeValue={setEc1Val}/>
                        
                    </div>

                    <div class="card-school">
                        <div class="card-body">
                            <h4 class="card-title">Extracurricular #2</h4>
                        </div>
                        <RangeSlider storeValue={setEc2Val} />
                    </div>

                    <div class="card-school">
                        <div class="card-body">
                            <h4 class="card-title">Extracurricular #3</h4>
                        </div>
                        <RangeSlider storeValue={setEc3Val} />
                    </div>

                </div>

            </div>
        </div>

    )
    }
}

export default Extracurriculars;