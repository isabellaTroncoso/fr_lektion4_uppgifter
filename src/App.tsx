import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Student } from './types/Student';


function App() {
  const [student, setStudent] = useState<Student>({
    name: "Liam",
    age: 20,
    grade: "B",
  });

  // Funktion för att uppdatera studentdata
  const updateStudent = () => {
    setStudent({
      name: "Olivia",
      age: 18,
      grade: "A",
    });
  };

  return (
    <>
     <h1>Studentprofil</h1>
      <p>
        Student: {student.name}, Age: {student.age}, Grade: {student.grade}
      </p>
      <button onClick={updateStudent}>Uppdatera student</button>
      <div>
      <p>{2 < 4 ? "True" : "False"}</p>

{2 < 4 ? <p>Condition met</p> : <h1>Condition not met</h1>}

<p>{2 + 2 == 99 || 2 + 2 == 4 ? "TRUE" : "FALSE"}</p>

<p>{2 + 2 == 4 && 2 + 4 == 6 ? "TRUE" : "FALSE"}</p>
      </div>
    </>
  )
}

export default App;

