import React from "react"
import { useState, useEffect } from "react"
import ClassRangeSlider from "./ClassRangeSlider"
import "../bootstrap.css"
import "../style.css"


function Classes(){
    const [class1Val, setClass1Val] = useState(0)
    const [class2Val, setClass2Val] = useState(0)
    const [class3Val, setClass3Val] = useState(0)
    const [class4Val, setClass4Val] = useState(0)
    const [class1Label, setClass1Label] = useState('')
    const [class2Label, setClass2Label] = useState('')
    const [class3Label, setClass3Label] = useState('')
    const [class4Label, setClass4Label] = useState('')
    const [sameClass, setSameClass] = useState(false)

    function setClasses1 (classes){
        setClass1Val(classes)
        // setClass1Label(label)

    }

    function setClasses2(classes) {
        setClass2Val(classes)
        // setClass2Label(label)

    }

    function setClasses3(classes) {
        setClass3Val(classes)
        // setClass3Label(label)

    }

    function setClasses4(classes) {
        setClass4Val(classes)
        // setClass4Label(label)

    }


    function setClass1Info(value, label) {
        setClass1Val(value);
        setClass1Label(label);
    }

    function setClass2Info(value, label) {
        setClass2Val(value);
        setClass2Label(label);
    }

    function setClass3Info(value, label) {
        setClass3Val(value);
        setClass3Label(label);
    }

    function setClass4Info(value, label) {
        setClass4Val(value);
        setClass4Label(label);
    }


    useEffect(() => {
        if (class1Label === class2Label){
            if (class1Label !== "" && class1Label !== "Other Math" && class1Label !== "Other Science" && class1Label !== "Other Social Studies" && class1Label !== "Other English" 
            && class1Label !== "Other World Language" && class1Label !== "Other CTE" && class1Label !== "Other VAPA" && class1Label !== "Other Elective"){
                setSameClass(true)
            } else {
                setSameClass(false)
            }
        } else if (class1Label === class3Label) {
            if (class1Label !== "" && class1Label !== "Other Math" && class1Label !== "Other Science" && class1Label !== "Other Social Studies" && class1Label !== "Other English"
                && class1Label !== "Other World Language" && class1Label !== "Other CTE" && class1Label !== "Other VAPA" && class1Label !== "Other Elective") {
                setSameClass(true)
            } else {
                setSameClass(false)
            }
        } else if (class1Label === class4Label) {
            if (class1Label !== "" && class1Label !== "Other Math" && class1Label !== "Other Science" && class1Label !== "Other Social Studies" && class1Label !== "Other English"
                && class1Label !== "Other World Language" && class1Label !== "Other CTE" && class1Label !== "Other VAPA" && class1Label !== "Other Elective") {
                setSameClass(true)
            } else {
                setSameClass(false)
            }
        } else if (class2Label === class3Label) {
            if (class2Label !== "" && class2Label !== "Other Math" && class2Label !== "Other Science" && class2Label !== "Other Social Studies" && class2Label !== "Other English"
                && class2Label !== "Other World Language" && class2Label !== "Other CTE" && class2Label !== "Other VAPA" && class2Label !== "Other Elective") {
                setSameClass(true)
            } else {
                setSameClass(false)
            }
        } else if (class2Label === class4Label) {
            if (class2Label !== "" && class2Label !== "Other Math" && class2Label !== "Other Science" && class2Label !== "Other Social Studies" && class2Label !== "Other English"
                && class2Label !== "Other World Language" && class2Label !== "Other CTE" && class2Label !== "Other VAPA" && class2Label !== "Other Elective") {
                setSameClass(true)
            } else {
                setSameClass(false)
            }
        } else if (class3Label === class4Label) {
            if (class3Label !== "" && class3Label !== "Other Math" && class3Label !== "Other Science" && class3Label !== "Other Social Studies" && class3Label !== "Other English"
                && class3Label !== "Other World Language" && class3Label !== "Other CTE" && class2Label !== "Other VAPA" && class3Label !== "Other Elective") {
                setSameClass(true)
            } else {
                setSameClass(false)
            }
        } else {
            setSameClass(false)
        }
    }, [class1Label, class2Label, class3Label, class4Label])

    return {
        class1Val, class2Val, class3Val, class4Val, class1Label, class2Label, class3Label, class4Label, sameClass,
        renderClasses: (
        <div class="container">
            <h3>HOMEWORK HOURS: HARDEST CLASSES</h3>
            <div class="form-check">
                { sameClass ? (
                    <div id="alertSame" class="alert alert-warning alert-dismissible fade show">
                        <strong>Wait!</strong> You seem to have selected the same class for two or more of your homework options!
                    </div>
                ) :  null }
                <div class="card-deck">
                        <div class="card-school">
                            <div class="card-body-homework-1">
                                <h4 class="card-title">Class #1</h4>
                                <ClassRangeSlider 
                                    storeClassVal={setClasses1} 
                                    storeLabel={setClass1Info} 
                                />
                            </div>
                        </div>

                        <div class="card-school">
                            <div class="card-body-homework-2">
                                <h4 class="card-title">Class #2</h4>
                                <ClassRangeSlider 
                                    storeClassVal={setClasses2} 
                                    storeLabel={setClass2Info} 
                                />
                            </div>
                        </div>

                        <div class="card-school">
                            <div class="card-body-homework-3">
                                <h4 class="card-title">Class #3</h4>
                                <ClassRangeSlider 
                                    storeClassVal={setClasses3}
                                    storeLabel={setClass3Info}
                                />
                            </div>
                        </div>

                        <div class="card-school">
                            <div class="card-body-homework-4">
                                <h4 class="card-title">Class #4</h4>
                                <ClassRangeSlider 
                                    storeClassVal={setClasses4} 
                                    storeLabel={setClass4Info}
                                />
                            </div>
                        </div>
                </div>
                    <h6><b>NOTE:</b> MHT stands for the minimum number of homework minutes required for the class. You can not select any amount of time lower than the MHT value, but if you feel you take more time with homework, feel free to pick a higher homework time value for the class!</h6>
            </div>
        </div>
        

    )
    }

}

export default Classes;