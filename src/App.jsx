import { useCallback, useEffect, useState } from 'react'

import './App.css'
import {Person} from './Person.jsx'
import {StudentList} from './StudentList.jsx'
import {NotPresent} from './NotPresent.jsx'

import data from './data/students.json'

function App() {
  const [students, setStudents] = useState(data.students)

  useEffect(() => {
    fetch('./data/students.json')
    .then(response => response.json())
    .then((json) => setStudents(json.students))
  }, [])

  const togglePresent = (id) => {
    console.log(id)
    setStudents(prevStudents =>
      prevStudents.map(student =>
        student.id === id
          ? { ...student, isPresent: !student.isPresent }
          : student
      )
    )
  }

  const present = students.filter(student => student.isPresent)
  const absent = students.filter(student => !student.isPresent)

  return (
    <>
      <PunOfTheDay />

      <StudentList>
        {present.map(student => (
          <Person
            key={student.id}
            {...student}
            onClickHandler={() => togglePresent(student.id)} // ← Pass handler
          />
        ))}
      </StudentList>

      <NotPresent>
        {absent.map(student => (
          <Person
            key={student.id}
            {...student}
            onClickHandler={() => togglePresent(student.id)} // ← Pass handler
          />
        ))}
      </NotPresent>
    </>
  )
}

export default App

export function PunOfTheDay() {

    const [joke, setJoke] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        fetch('https://v2.jokeapi.dev/joke/pun')
        .then(response => response.json())
        .then(jsonJoke => setJoke(jsonJoke))
        .catch((error => console.error("Jokeerror: " + error)))
        .finally(() => setLoading(false))

    }, [])


    return (
        <article>
            { loading ? 'Loading...' : 
                <details style={{color:"black",fontSize:"2rem"}}>
                    <summary>{joke?.setup}</summary>
                    <span style={{fontSize:"4rem"}}>{joke?.delivery}</span>
                </details>
            }
        </article>
    )
}