import React, { useState, useEffect } from "react"
import "../bootstrap.css"
import "../style.css"


function ClassDropdown({ storeMinValue, storeLabel }) {
    const [selectedOption, setSelectedOption] = useState({
        value: '',
        label: 'Select a Class',
    });

    const mathOptions = [
        { label: "Advanced Algebra", title: "Rigor: 2.5", value: 25 },
        { label: "AP Calculus", title: "Rigor: 4", value: 50 },
        { label: "AP Statistics*", title: "Rigor: 3", value: 35 },
        { label: "Integrated Math 1", title: "Rigor: 2.5", value: 30 },
        { label: "Integrated Math 2", title: "Rigor: 3", value: 30 },
        { label: "Integrated Math 3", title: "Rigor: 2.5", value: 25 },
        { label: "Personal Business Finance", title: "Rigor: 1.5", value: 10 },
        { label: "Pre-Calculus", title: "Rigor: 2.5", value: 20 },
        { label: "Other Math", title: '', value: 0 }
    ]

    const scienceOptions = [
        { label: "Advanced Medical Biotechnology", title: "Rigor: 2", value: 5 },
        { label: "AP Biology*", title: "Rigor: 4", value: 60 },
        { label: "AP Chemistry", title: "Rigor: 3.5", value: 45 },
        { label: "AP Environmental Science*", title: "Rigor: 3", value: 30 },
        { label: "AP Physics 1*", title: "Rigor: 3", value: 15 },
        { label: "Biology", title: "Rigor: 2.5", value: 20 },
        { label: "Chemistry", title: "Rigor: 3", value: 25 },
        { label: "Honors Chemistry", title: "Rigor: 3", value: 30 },
        { label: "Human Anatomy and Physiology", title: "Rigor: 3.5", value: 30 },
        { label: "Medical Biotechnology", title: "Rigor: 2", value: 20 },
        { label: "Physics", title: "Rigor: 2.5", value: 20 },
        { label: "Other Science", title: '', value: 0 }
    ]

    const socialOptions = [
        { label: "AP Government", title: "Rigor: 3", value: 25 },
        { label: "AP Human Geography", title: "Rigor: 3", value: 40 },
        { label: "AP Psychology", title: "Rigor: 3", value: 50 },
        { label: "AP US History*", title: "Rigor: 3", value: 55 },
        { label: "AP World History", title: "Rigor: 3", value: 40 },
        { label: "Government/Economics", title: "Rigor: 2.5", value: 25 },
        { label: "US History", title: "Rigor: 2", value: 20 },
        { label: "World Cultures", title: "Rigor: 2.5", value: 20 },
        { label: "Other Social Studies", title: '', value: 0 }
    ]

    const englishOptions = [
        { label: "AP Language*", title: "Rigor: 3", value: 30 },
        { label: "AP Literature*", title: "Rigor: 3.5", value: 35 },
        { label: "CSU ERWC (12th)", title: "Rigor: 2.5", value: 20 },
        { label: "English 2 (10th grade)", title: "Rigor: 2.5", value: 30 },
        { label: "English 3 (11th grade)", title: "Rigor: 2", value: 20 },
        { label: "Honors English 1*", title: "Rigor: 3", value: 30 },
        { label: "Honors English 2*", title: "Rigor: 3", value: 30 },
        { label: "Other English", title: '', value: 0 }
    ]

    const langOptions = [
        { label: "French 1", title: "Rigor: 2.5", value: 25 },
        { label: "French 2", title: "Rigor: 3", value: 25 },
        { label: "French 3", title: "Rigor: 3", value: 30 },
        { label: "French 4", title: "Rigor: 3", value: 30 },
        { label: "Spanish 1", title: "Rigor: 3", value: 25 },
        { label: "Spanish 2", title: "Rigor: 3", value: 25 },
        { label: "Spanish 3", title: "Rigor: 3", value: 25 },
        { label: "Spanish 4", title: "Rigor: 4", value: 30 },
        { label: "Other World Language", title: '', value: 0 }
    ]

    const cteOptions = [
        { label: "3D Design 1", title: "Rigor: 2.5", value: 25 },
        { label: "Advanced Graphic Communications", title: "Rigor: 1.5", value: 5 },
        { label: "Advanced Production Management", title: "Rigor: 2", value: 40 },
        { label: "Animation 1", title: "Rigor: 2", value: 10 },
        { label: "Animation 2", title: "Rigor: 2.5", value: 35 },
        { label: "AP Computer Science A*", title: "Rigor: 2.5", value: 20 },
        { label: "AP Computer Science Principles", title: "Rigor: 2", value: 15 },
        { label: "Careers with Children", title: "Rigor: 1.5", value: 15 },
        { label: "Child Development and Guidance", title: "Rigor: 1.5", value: 10 },
        { label: "Develop Psychology of Children", title: "Rigor: 1", value: 5 },
        { label: "Intro to Engineering Design", title: "Rigor: 2.5", value: 25 },
        { label: "Intro to Kinesiology", title: "Rigor: 1", value: 5 },
        { label: "Planning Algorithms Using Python", title: "Rigor: 2.5", value: 15 },
        { label: "Principles of Engineering", title: "Rigor: 3", value: 30 },
        { label: "Multimedia Production", title: "Rigor: 2", value: 10 },
        { label: "Video Production 1-2", title: "Rigor: 1.5", value: 10 },
        { label: "Other CTE", title: '', value: 0 }
    ]

    const vapaOptions = [
        { label: "Advanced Guitar", title: "Rigor: 2", value: 5 },
        { label: "AP Drawing*", title: "Rigor: 2.5", value: 25 },
        { label: "AP Studio Art*", title: "Rigor: 2", value: 20 },
        { label: "Ceramics and Sculpture", title: "Rigor: 1", value: 0 },
        { label: "CME", title: "Rigor: 1.5", value: 10 },
        { label: "Concert Band", title: "Rigor: 1.5", value: 10 },
        { label: "Concert Choir", title: "Rigor: 1", value: 5 },
        { label: "Drama", title: "Rigor: 1.5", value: 10 },
        { label: "Drawing and Painting 1", title: "Rigor: 2", value: 10 },
        { label: "Drawing and Painting 2", title: "Rigor: 2", value: 15 },
        { label: "Drawing and Painting 3", title: "Rigor: 1.5", value: 15 },
        { label: "Fine Art Photo", title: "Rigor: 1.5", value: 10 },
        { label: "Guitar (All Levels)", title: "Rigor: 1.5", value: 10 },
        { label: "Orchestra", title: "Rigor: 1", value: 5 },
        { label: "Other VAPA", title: '', value: 0 }
    ]

    const electiveOptions = [
        { label: "Community Service and Leadership", title: "Rigor: 1.5", value: 10 },
        { label: "Creative Writing", title: "Rigor: 3", value: 45 },
        { label: "Critical Approaches to Cinema", title: "Rigor: 1.5", value: 10 },
        { label: "Driver’s Ed", title: "Rigor: 1.5", value: 10 },
        { label: "Forensics", title: "Rigor: 2", value: 15 },
        { label: "Health", title: "Rigor: 1.5", value: 10 },
        { label: "Humanities (AcaDeca)", title: "Rigor: 2.5", value: 20 },
        { label: "Personal Startegic Planning", title: "Rigor: 1.5", value: 10 },
        { label: "Science Fiction as Literature", title: "Rigor: 1.5", value: 10 },
        { label: "Sociology", title: "Rigor: 1.5", value: 20 },
        { label: "Speech and Debate 1", title: "Rigor: 2", value: 15 },
        { label: "Student Government", title: "Rigor: 2.5", value: 30 },
        { label: "Teacher Assistant", title: "Rigor: 1", value: 0 },
        { label: "Yearbook", title: "Rigor: 2", value: 15 },
        { label: "Other Elective", title: '', value: 0 }
    ]


    const handleOptionChange = (e) => {
        const selectedValue = e.target.value;
        const selectedLabel = e.target.options[e.target.selectedIndex].text;
        setSelectedOption({ value: selectedValue, label: selectedLabel });
        storeMinValue(selectedValue);
        storeLabel(selectedValue, selectedLabel);
    };


    return (
        <div class="dropdown">
            <select
                name="homeworkHours"
                id="homeworkHours"
                onChange={handleOptionChange}
            >
                <option value=''> </option>
                <optgroup label="---------------- Mathematics ----------------">
                     {mathOptions.map((option) => (
                         <option key={option.label} value={option.value} title={option.title}>{option.label}</option>
                     ))}
                </optgroup>

                <optgroup label="------------------ Science ------------------">
                    {scienceOptions.map(option => (
                        <option key={option.label} value={option.value} title={option.title}>{option.label}</option>
                    ))}
                </optgroup>

                <optgroup label="--------------- Social Studies ---------------">
                    {socialOptions.map(option => (
                        <option key={option.label} value={option.value} title={option.title}>{option.label}</option>
                    ))}
                </optgroup>

                <optgroup label="------------------- English -------------------">
                    {englishOptions.map(option => (
                        <option key={option.label} value={option.value} title={option.title}>{option.label}</option>
                    ))}
                </optgroup>

                <optgroup label="--------------- World Languages ---------------">
                    {langOptions.map(option => (
                        <option key={option.label} value={option.value} title={option.title}>{option.label}</option>
                    ))}
                </optgroup>

                <optgroup label="--------------------- CTE ---------------------">
                    {cteOptions.map(option => (
                        <option key={option.label} value={option.value} title={option.title}>{option.label}</option>
                    ))}
                </optgroup>

                <optgroup label="--------------------- VAPA ---------------------">
                    {vapaOptions.map(option => (
                        <option key={option.label} value={option.value} title={option.title}>{option.label}</option>
                    ))}
                </optgroup>

                <optgroup label="------------------- Electives -------------------">
                    {electiveOptions.map(option => (
                        <option key={option.label} value={option.value} title={option.title}>{option.label}</option>
                    ))}
                </optgroup>
                
            </select>
        </div>
    )
}

export default ClassDropdown;