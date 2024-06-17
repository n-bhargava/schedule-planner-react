import React from "react"
import { useState } from "react"
import RangeSlider from "./RangeSlider"
import "../bootstrap.css"
import "../style.css"


function DailyLiving(){
    const [necessitiesVal, setNecessities] = useState(0)
    const [familyVal, setFamily] = useState(0)
    const [downtimeVal, setDowntime] = useState(0)
    const [workVal, setWork] = useState(0)
    const [otherVal, setOther] = useState(0)



    return {
        necessitiesVal, familyVal, downtimeVal, workVal, otherVal,  
        renderDaily: (
        <div class="container">
            <h3>DAILY LIVING ACTIVITIES</h3>
            <div class="form-check">
                <div class="card-deck">
                    <div class="card-school" id="card-school-living">
                        <div class="card-body">
                            <h4 class="card-title">Necessities (eat, shower, chores, etc)</h4>
                        </div>
                        <RangeSlider storeValue={setNecessities} />
                    </div>

                    <div class="card-school" id="card-school-living">
                        <div class="card-body">
                            <h4 class="card-title">Family time</h4>
                        </div>
                        <RangeSlider storeValue={setFamily}/>
                    </div>

                    <div class="card-school" id="card-school-living">
                        <div class="card-body">
                            <h4 class="card-title">Downtime / playtime (friends, TV, social media, Internet, etc)</h4>
                        </div>
                        <RangeSlider storeValue={setDowntime}/>
                    </div>

                    <div class="card-school" id="card-school-living">
                        <div class="card-body">
                            <h4 class="card-title">Work</h4>
                        </div>
                        <RangeSlider storeValue={setWork}/>
                    </div>

                    <div class="card-school" id="card-school-living">
                        <div class="card-body">
                            <h4 class="card-title">Other (if appropriate)</h4>
                        </div>
                        <RangeSlider storeValue={setOther}/>
                    </div>
                </div>
            </div>
        </div>
    )
    }
}

export default DailyLiving;