import './App.css'
import {useState,useEffect} from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import Teams from './Teams'
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from './Nav'
import Employees from './Employees'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import GroupedTeamMembers from './GroupedTeamMembers'
import Notfound from './Notfound'

export default function App() {
    const [selectedTeam,setTeam]=useState(JSON.parse(localStorage.getItem('selectedTeamList'))||'TeamB')
  const [Employee,setEmployee]=useState(JSON.parse(localStorage.getItem('EmployeeList'))||[{
    id: 1,
    fullName: "Bob Jones",
    designation: "JavaScript Developer",
    gender: "male",
    teamName: "TeamA"
  },
  {
    id: 2,
    fullName: "Jill Bailey",
    designation: "Node Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 3,
    fullName: "Gail Shepherd",
    designation: "Java Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 4,
    fullName: "Sam Reynolds",
    designation: "React Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 5,
    fullName: "David Henry",
    designation: "DotNet Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 6,
    fullName: "Sarah Blake",
    designation: "SQL Server DBA",
    gender: "female",
    teamName: "TeamB"
  },
  {
    id: 7,
    fullName: "James Bennet",
    designation: "Angular Developer",
    gender: "male",
    teamName: "TeamC"
  },
  {
    id: 8,
    fullName: "Jessica Faye",
    designation: "API Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 9,
    fullName: "Lita Stone",
    designation: "C++ Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 10,
    fullName: "Daniel Young",
    designation: "Python Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 11,
    fullName: "Adrian Jacobs",
    designation: "Vue Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 12,
    fullName: "Devin Monroe",
    designation: "Graphic Designer",
    gender: "male",
    teamName: "TeamD"
}
])
                                           
  const handleEmployeeCardClick=(event)=>{
    const transformedEmployees=Employee.map(employee=>{return(employee.id===parseInt(event.currentTarget.id)?(employee.teamName===selectedTeam)?{...employee,teamName:''}:{...employee,teamName:selectedTeam}:employee)
    })
    setEmployee(transformedEmployees)
  }
  useEffect(()=>{
    localStorage.setItem('EmployeeList',JSON.stringify(Employee))
  },[Employee])
  useEffect(()=>{
    localStorage.setItem('selectedTeamList',JSON.stringify(selectedTeam))
  },[selectedTeam])
  
  return (
    <Router>
          <Nav></Nav>
          <Header selectedTeam={selectedTeam}
            teamMemberCount={Employee.filter(employee=>employee.teamName===selectedTeam).length}
    />
    <Routes>
      <Route path='/'
         element= {<Employees selectedTeam={selectedTeam}
                     setTeam={setTeam}
                     Employee={Employee}
                     setEmployee={setEmployee}
                     handleEmployeeCardClick={handleEmployeeCardClick}
                    />}>
      </Route>
      <Route path='/GroupedTeamMembers'
                  element={<GroupedTeamMembers
                             setTeam={setTeam}
                             selectedTeam={selectedTeam}
                             employee={Employee}
                             />}>
      </Route>
      <Route path='*'
                  element={<Notfound />}>
      </Route>
    </Routes>
      <Footer />
    </Router>
  )
}
