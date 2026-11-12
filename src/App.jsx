import { useState } from 'react'
import './App.css'  
function App() {
  const [currentPage, setCurrentPage] = useState('Dashboard')
  
  const [student, setStudent] = useState({
  studentId: '',
  fullName: '',
  age: '',
  gender: '',
  course: '',
  yearLevel: '',
  email: ''
  })
  const [students, setStudents] = useState([])
  const handleSaveStudent = () => {
    if (
  !student.studentId ||
  !student.fullName ||
  !student.age ||
  !student.gender ||
  !student.course ||
  !student.yearLevel ||
  !student.email
) {
  alert('Please fill in all fields!')
  return
}
    const existingStudent = students.find(
  (item) => item.studentId === student.studentId
  )



  if (existingStudent) {
  alert('Student ID already exists!')
  return
  }
  const updatedStudents = [...students, student]

  setStudents(updatedStudents)

  setStudent({
  studentId: '',
  fullName: '',
  age: '',
  gender: '',
  course: '',
  yearLevel: '',
  email: ''
  })
  console.log(updatedStudents)
 }

 

  return (
    <div className="dashboard">

      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Student System</h2>

        <ul>
          <li onClick={() => setCurrentPage('Dashboard')}>
            Dashboard
          </li>

          <li onClick={() => setCurrentPage('Students')}>
            Students
          </li>

          <li onClick={() => setCurrentPage('Add Student')}>
             Add Student
          </li>

          <li onClick={() => setCurrentPage('Settings')}>
            Settings
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">

        {/* Header */}
        <header>
          <h1>Dashboard</h1>
          <p>Welcome, Administrator!</p>
        </header>

        {/* Dashboard Content */}
      
<section className="content">

  {currentPage === 'Dashboard' && (
    <>
      <h2>Overview</h2>
      <p>Here is your student information summary.</p>

    <p>Here is your student information summary.</p>

<div className="stats-container">

  <div className="stat-card">
    <h3>Total Students</h3>
    <h1>120</h1>
  </div>

  <div className="stat-card">
    <h3>Male Students</h3>
    <h1>65</h1>
  </div>

  <div className="stat-card">
    <h3>Female Students</h3>
    <h1>55</h1>
  </div>

  <div className="stat-card">
    <h3>Enrolled Students</h3>
    <h1>110</h1>
  </div>

</div>

    </>
  )}
    {currentPage === 'Students' && (
  <>
    <h2>Students</h2>
    <p>List of registered students.</p>

    {students.length === 0 ? (
      <p>No students registered yet.</p>
    ) : (
      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Full Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Course</th>
            <th>Year Level</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {students.map((item) => (
            <tr key={item.studentId}>
              <td>{item.studentId}</td>
              <td>{item.fullName}</td>
              <td>{item.age}</td>
              <td>{item.gender}</td>
              <td>{item.course}</td>
              <td>{item.yearLevel}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </>
)}
  {currentPage === 'Add Student' && (
  <>
    <h2>Add New Student</h2>
    <p>Enter the student's information below.</p>

<div className="student-form">
  
  <div className="form-group">
    <label>Student ID</label>
    <input
      type="text"
      placeholder="Enter Student ID"
      value={student.studentId}
      onChange={(e) => setStudent({...student, studentId: e.target.value})}
    />
    </div>

     <div className="form-group">
        <label>Full Name</label>
        <input
         type="text"
         placeholder="Enter Full Name"
         value={student.fullName}
         onChange={(e) => setStudent({...student, fullName: e.target.value})}
       />
      </div>

    <div className="form-group">
      <label>Age</label>
      <input
       type="number"
       placeholder="Enter Age"
       value={student.age}
       onChange={(e) => 
        setStudent({...student, age: e.target.value})}
     />

   </div>

    <div className="form-group">
      <label>Gender</label>
        <select
          value={student.gender}
          onChange={(e) => setStudent({...student, gender: e.target.value})}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
       </select>
    </div>

   <div className="form-group">
     <label>Course</label>
     <select
       value={student.course}
       onChange={(e) => setStudent({...student, course: e.target.value})}
     >
        <option value="">Select Course</option>
        <option value="BSCS">BS Computer Science</option>
        <option value="BSIT">BS Information Technology</option>
        <option value="BSBA">BS Business Administration</option>
        <option value="BSED">BS Education</option>
     </select>
   </div>

    <div className="form-group">
     <label>Year Level</label>
      <select
        value={student.yearLevel}
        onChange={(e) => setStudent({...student, yearLevel: e.target.value})}
      >
       <option value="">Select Year Level</option>
       <option value="1st Year">1st Year</option>
       <option value="2nd Year">2nd Year</option>
       <option value="3rd Year">3rd Year</option>
       <option value="4th Year">4th Year</option>
     </select>
    </div>
    
    <div className="form-group">
     <label>Email Address</label>
      <input
       type="email"
       placeholder="Enter Email Address"
       value={student.email}
       onChange={(e) => setStudent({...student, email: e.target.value})}
      />
   </div>

   <button type="button" className="save-button" 
      onClick={handleSaveStudent}>
      Save Student
   </button>

</div>
</>
)}

</section>

      </main>

    </div>
  )
}

export default App
