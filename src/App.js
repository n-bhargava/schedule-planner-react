import './App.css';
import { useEffect, useState } from "react"
import { Chart } from "react-google-charts"
import School from './components/School';
import Sleep from './components/Sleep';
import Classes from './components/Classes';
import Extracurriculars from './components/Extracurriculars';
import DailyLiving from './components/DailyLiving';
import logo from './images/logo.jpg'
import "./bootstrap.css"
import "./style.css"



function App() {
  // School time variables
  const { renderSchool, schoolVal } = School()

  var school = 0
  if (schoolVal !== ''){
    school = parseFloat(schoolVal)
  }

  const [schoolTotal, setSchoolTotal] = useState('')

  // Sleep time variables
  const { renderSleep, sleepVal } = Sleep()

  var sleep = 0
  if (sleepVal !== ''){
    sleep = parseFloat(sleepVal)
  }

  const [sleepTotal, setSleepTotal] = useState('')

  // Extracurricular variables
  const {renderEc, ec1Val, ec2Val, ec3Val} = Extracurriculars()
  const ec1 = (parseFloat(ec1Val))/60
  const ec2 = (parseFloat(ec2Val))/60
  const ec3 = (parseFloat(ec3Val))/60
  const [ecs, setEcs] = useState(0)

  // Class variables
  const {renderClasses, class1Val, class2Val, class3Val, class4Val, class1Label, class2Label, class3Label, class4Label, sameClass} = Classes()

  var class1 = 0
  if(class1Val !== ''){
    class1 = (parseFloat(class1Val)) / 60
  }
  
  var class2 = 0
  if (class2Val !== '') {
    class2 = (parseFloat(class2Val)) / 60
  }

  var class3 = 0
  if (class3Val !== ''){
    class3 = (parseFloat(class3Val)) / 60
  }

  var class4 = 0
  if (class4Val !== ''){
    class4 = (parseFloat(class4Val)) / 60
  }

  const [classes, setClasses] = useState(0)

  // Daily Living variables
  const {renderDaily, necessitiesVal, familyVal, downtimeVal, workVal, otherVal} = DailyLiving()
  const necessities = (parseFloat(necessitiesVal))/60
  const family = (parseFloat(familyVal))/60
  const downtime = (parseFloat(downtimeVal))/60
  const work = (parseFloat(workVal))/60
  const other = (parseFloat(otherVal))/60
  const [dls, setDls] = useState(0)  

  // set all the time variables
  const [unusedTime, setUnusedTime] = useState(24)
  const [unusedHr, setUnusedHr] = useState(0)
  const [unusedMin, setUnusedMin] = useState(0)
  const [time, setTime] = useState(1440)
  const [overtime, setOvertime] = useState(0)
  const [otMin, setOtMin] = useState(0)
  const [otHr, setOtHr] = useState(0)
  const [otState, setOtState] = useState(false)

  //set minute and hour variables (for extracurriculars, classes, daily living activities, and unused time)
  const [ecsMin, setEcsMin] = useState(0)
  const [ecsHr, setEcsHr] = useState(0)
  const [classesMin, setClassesMin] = useState(0)
  const [classesHr, setClassesHr] = useState(0)
  const [dlsMin, setDlsMin] = useState(0)
  const [dlsHr, setDlsHr] = useState(0)
  const [ecTotal, setEcTotal] = useState('')
  const [classesTotal, setClassesTotal] = useState('')
  const [dlTotal, setDlTotal] = useState('')
  const [unusedTotal, setUnusedTotal] = useState('')

  //alerts and print button variables
  const [otWarning, setOtWarning] = useState('')
  const [printBool, setPrintBool] = useState(true)



  const [data, setData] = useState([
    ['Activity', 'Hours per Day'],
    ['Unused Time', unusedTime],
    ['School', school],
    ['Sleep', sleep],
    ['Class 1', class1],
    ['Class 2', class2],
    ['Class 3', class3],
    ['Class 4', class4],
    ['EC 1', ec1],
    ['EC 2', ec2],
    ['EC 3', ec3],
    ['Necessities', necessities],
    ['Family Time', family],
    ['Downtime', downtime],
    ['Work', work],
    ['Other', other]
  ]);

  const calculateTimeValues = () => {
    setTime((24 * 60) - (school * 60) - (sleep * 60) - (60 * ec1) - (60 * ec2) - (60 * ec3) - (60 * class1) - (60 * class2) - (60 * class3) - (60 * class4) - (60 * necessities) - (60 * family) - (60 * downtime) - (60 * work) - (60 * other))
  }

  const calculateSchoolTotal = () => {
    setSchoolTotal("School hours: " + school + " hours")
  }

  const calculateSleepTotal = () => {
    setSleepTotal("Sleep hours: " + sleep + " hours")
  }

  const calculateEcsTotal = () => {
    setEcs((ec1 * 60) + (ec2 * 60) + (ec3 * 60))
  }

  const calculateClassTotal = () => {
    if (class1 === ''){
      
    }
    setClasses((class1 * 60) + (class2 * 60) + (class3 * 60) + (class4 * 60))
  }
  
  const calculateDlTotal = () => {
    setDls((necessities * 60) + (family * 60) + (downtime * 60) + (work * 60) + (other * 60))
  }

  useEffect(() => {

    calculateTimeValues()
    calculateSchoolTotal()
    calculateSleepTotal()
    calculateClassTotal()
    calculateEcsTotal()
    calculateDlTotal()
    

  }, [unusedTime, time, school, sleep, ec1, ec2, ec3, ecs, class1, class2, class3, class4, necessities, family, downtime, work, other])
    
    

  useEffect(() => {
    calculateEcsTotal()
    setEcsMin(Math.round(ecs % 60))
    setEcsHr(Math.trunc(ecs / 60))
    if (ecsMin === 0 && ecsHr === 1) {
      setEcTotal("Total number of extracurricular hours:  " + ecsHr + " hour")
    } else if (ecsMin === 0 && ecsHr > 0) {
      setEcTotal("Total number of extracurricular hours:  " + ecsHr + " hours")
    } else if (ecsMin > 0 && ecsHr === 1) {
      setEcTotal("Total number of extracurricular hours:  " + ecsHr + " hour and " + ecsMin + " minutes")
    } else if (ecsMin > 0 && ecsHr === 0) {
      setEcTotal("Total number of extracurricular hours:  " + ecsMin + " minutes")
    } else if (ecsMin > 0 && ecsHr > 1) {
      setEcTotal("Total number of extracurricular hours:  " + ecsHr + " hours and " + ecsMin + " minutes")
    } else {
      setEcTotal("")
    }

  }, [ecs, ec1, ec2, ec3, unusedTime, time])


  useEffect(() => {
    calculateClassTotal()
    setClassesMin(Math.round(classes % 60))
    setClassesHr(Math.trunc(classes / 60))
    if (classesMin === 0 && classesHr === 1) {
      setClassesTotal("Total number of class hours:  " + classesHr + " hour")
    } else if (classesMin === 0 && classesHr > 0) {
      setClassesTotal("Total number of class hours:  " + classesHr + " hours")
    } else if (classesMin > 0 && classesHr === 1) {
      setClassesTotal("Total number of class hours:  " + classesHr + " hour and " + classesMin + " minutes")
    } else if (classesMin > 0 && classesHr === 0) {
      setClassesTotal("Total number of class hours:  " + classesMin + " minutes")
    } else if (classesMin > 0 && classesHr > 1) {
      setClassesTotal("Total number of class hours:  " + classesHr + " hours and " + classesMin + " minutes")
    } else {
      setClassesTotal("")
    }


  }, [classes, class1, class2, class3, class4, unusedTime, time])
  
      
  useEffect(() => {
    calculateDlTotal()
    setDlsMin(Math.round(dls % 60))
    setDlsHr(Math.trunc(dls / 60))
    if (dlsMin === 0 && dlsHr === 1) {
      setDlTotal("Total number of daily living hours:  " + dlsHr + " hour")
    } else if (dlsMin === 0 && dlsHr > 0) {
      setDlTotal("Total number of daily living hours:  " + dlsHr + " hours")
    } else if (dlsMin > 0 && dlsHr === 1) {
      setDlTotal("Total number of daily living hours:  " + dlsHr + " hour and " + dlsMin + " minutes")
    } else if (dlsMin > 0 && dlsHr === 0) {
      setDlTotal("Total number of daily living hours:  " + dlsMin + " minutes")
    } else if (dlsMin > 0 && dlsHr > 1) {
      setDlTotal("Total number of daily living hours:  " + dlsHr + " hours and " + dlsMin + " minutes")
    } else {
      setDlTotal("")
    }

    

  }, [dls, necessities, family, downtime, work, other, unusedTime, time])

  useEffect(() => {
    calculateTimeValues()
    if (time < 0) {
      setOtState(true)
      setOvertime(Math.abs(time))
      setOtHr(Math.trunc(overtime / 60))
      setOtMin(Math.round(overtime % 60))
      setUnusedTime(0)

      if (otMin === 0 && otHr === 1) {
        setOtWarning("Warning! You are " + otHr + " hour over the 24 hour limit!")
      } else if (otMin === 0 && otHr > 0) {
        setOtWarning("Warning! You are " + otHr + " hours over the 24 hour limit!")
      } else if (otMin > 0 && otHr === 1) {
        setOtWarning("Warning! You are " + otHr + " hour and " + otMin + " minutes over the 24 hour limit!")
      } else if (otMin > 0 && otHr === 0) {
        setOtWarning("Warning! You are " + otMin + " minutes over the 24 hour limit!")
      } else if (otMin > 0 && otHr > 1) {
        setOtWarning("Warning! You are " + otHr + " hours and " + otMin + " minutes over the 24 hour limit!")
      } else {
        setOtWarning("")
      }

    } else {
      setOtState(false)
      setOtHr(0)
      setOtMin(0)
      setUnusedHr(Math.trunc(time / 60))
      setUnusedMin(Math.round(time % 60))
      setUnusedTime(time / 60.0)


      if (unusedMin === 0 && unusedHr === 1) {
        setUnusedTotal("Unused time:  " + unusedHr + " hour")
      } else if (unusedMin === 0 && unusedHr > 0) {
        setUnusedTotal("Unused time:  " + unusedHr + " hours")
      } else if (unusedMin > 0 && unusedHr === 1) {
        setUnusedTotal("Unused time:  " + unusedHr + " hour and " + unusedMin + " minutes")
      } else if (unusedMin > 0 && unusedHr === 0) {
        setUnusedTotal("Unused time:  " + unusedMin + " minutes")
      } else if (unusedMin > 0 && unusedHr > 1) {
        setUnusedTotal("Unused time:  " + unusedHr + " hours and " + unusedMin + " minutes")
      } else {
        setUnusedTotal("")
      }

    }

  }, [time, overtime, unusedTime, otHr, otMin])

      
    const calculateData = () => {
      const newData = [
        ['Activity', 'Hours per Day'],
        ['Unused Time', unusedTime],
        ['School', school],
        ['Sleep', sleep],
        ['Class 1 - ' + class1Label, class1],
        ['Class 2 - ' + class2Label, class2],
        ['Class 3 - ' + class3Label, class3],
        ['Class 4 - ' + class4Label, class4],
        ['EC 1', ec1],
        ['EC 2', ec2],
        ['EC 3', ec3],
        ['Necessities', necessities],
        ['Family Time', family],
        ['Downtime', downtime],
        ['Work', work],
        ['Other', other]
      ]
      

      setData(newData);
    }
      
    useEffect(() => {
      calculateData();

      if (otState || sameClass) {
        setPrintBool(false)
      } else {
        setPrintBool(true)
      }

    }, [unusedTime, time, school, sleep, class1, class1Label, class2, class2Label, class3, class3Label, class4, class4Label, ec1, ec2, ec3, necessities, family, downtime, work, other, otState, sameClass])

  const options = {
    width: 600,
    height: 325,
    position: 'center',
    backgroundColor: '#d3e5ff',
    fontName: 'amiri',
    fontSize: 12.5,
    is3D: true,
    slices: { 0: { color: '#e3e4e6' }, 1: { color: '#4EC7FF' }, 2: { color: '#00A7FA' }, 3: { color: '#0098E4' }, 4: { color: '#008ACE' }, 5: { color: '#006A9F' }, 6: { color: '#005F8F' }, 7: { color: '#EB3269' }, 8: { color: '#FF2E8C' }, 9: { color: '#FF509F' }, 10: { color: '#FF6AD5' }, 11: { color: '#C774E8' }, 12: { color: '#AD8CFF' }, 13: { color: '#8795E8' }, 14: { color: '#89DAFF' } },
    pieSliceText: 'label',
    chartArea: { left: 0, top: 10, right: 0, bottom: 10, width: "100%" }
  };


  const print = () => window.print();


  return (
    <div className="App">

      <header class="image">
        <a href="https://www.fcusd.org/vdlhs">
          <img class="img-logo" src={logo} alt="" />
        </a>
      </header>
      <header>
        <a class="header-brand">SCHEDULE PLANNER</a>
        <nav>
          <ul>
            <li><a>School</a></li>
            <li><a>ECs</a></li>
            <li><a>Other</a></li>
          </ul>
        </nav>
      </header>


      <h1 class="invisible">VISTA DEL LAGO</h1>
      <h1 id="welcome">BALANCE MY SCHEDULE</h1>
      <h2 id="welcome">Welcome to Vista Del Lago's Schedule Planner!</h2>
      <p id="instruction">This is in relation to one day. Please fill out all the fields!</p>
      <p id="instruction">You can not pick any homework amount lower than the reported average minutes per night. <br/> Hover over a class to view its rigor level (on a scale of 1-4, where 4 is the highest level of rigor)</p>


      {renderSchool}
      <p class="invisible">____________________________________</p>
      {renderSleep}
      <p class="invisible">____________________________________</p>
      {renderClasses}
      <p class="invisible">____________________________________</p>
      {renderEc}
      <p class="invisible">____________________________________</p>
      {renderDaily}
      <p class="invisible">____________________________________</p>

      <div className="container-chart">
        {otState ? (
          <div id="alertOvertime" className="alert alert-danger alert-dismissible fade show" >
            <strong> {otWarning}</strong>
          </div>
        ) : null}

        <div className="card-deck" style={{ paddingTop: "1%", paddingBottom: "1%" }}>
          <div className="card-stats">
            <div id="chart_wrap">
              <div className="chart" id="piechart">
                <Chart
                  chartType="PieChart"
                  data={data}
                  options={options}
                  width={"100%"}
                />

              </div>
            </div>
            <card className="stats" id="extrastats">{unusedTotal}</card>
            <card className="stats" id="schoolstats">{schoolTotal}</card>
            <card className="stats" id="sleepstats">{sleepTotal} </card>
            <card className="stats" id="hwstats">{classesTotal}</card>
            <card className="stats" id="ecstats">{ecTotal}</card>
            <card className="stats" id="dlstats">{dlTotal} </card>

          </div>
        </div>
      </div>
        
      { printBool ? (
        <div className="container-1">
          <button type="button" id="printButton" onClick={print}>Print</button>
        </div> 
      ) : null }

      <div className="container-2" id="signatures">
        <h2>Parent Signature ______________________</h2>
        <h2 id="student">Student Signature ______________________</h2>
      </div>

    </div>
  );
}

export default App;


// import './App.css'
// import { HashRouter as Router, Routes, Route } from 'react-router-dom'
// import Home from './Home'
// import Planner from './Planner'

// function App(){
//   <Planner />
//   // <Router>
//   //   <Routes>
//   //     <Route path="/" element={ <Planner/> } />
//   //     <Route path="/planner" element={ <Planner/> } />
//   //   </Routes>
//   // </Router>
// }

// export default App;