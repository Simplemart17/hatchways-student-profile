import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import './App.css'
import Profile from '../components/Profile/profile'
import Input from '../components/InputField/TextInput'
import searchProfile from '../utils/searchProfile'

const App = () => {
  const [studentData, setStudentData] = useState([])
  const [resultDataState, setResultDataState] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [inputState, setInputState] = useState({
    searchName: '',
    searchTag: '',
  })
  const [expanded, setExpanded] = useState({})

  useEffect(() => {
    const getStudentProfileData = async () => {
      const {
        data: { students },
      } = await axios.get('https://api.hatchways.io/assessment/students')

      // add tag details to the student data
      const addTagDetails = students.map((data) => ({ ...data, tags: [] }))

      setStudentData(addTagDetails)
      setLoaded(true)
    }

    getStudentProfileData()
  }, [])

  useEffect(() => {
    const searchResult = searchProfile(studentData, inputState.searchName, inputState.searchTag)
    const searchParam = inputState.searchName || inputState.searchTag
    setResultDataState(searchParam ? searchResult : studentData)
  }, [studentData, inputState.searchName, inputState.searchTag])

  const handleChange = (event) => {
    const { name, value } = event.target
    setInputState({ ...inputState, [name]: value })
  }

  const handleToggle = (idx) => () => {
    setExpanded({ ...expanded, [idx]: !expanded[idx] })
  }

  return (
    <div className="App-container">
      <div className="App-input-wrapper">
        <Input
          placeholder="Search by name"
          onChange={handleChange}
          name="searchName"
          value={inputState.searchName}
          className="App-input"
        />
      </div>
      <div className="App-input-wrapper">
        <Input
          placeholder="Search by tag"
          onChange={handleChange}
          name="searchTag"
          value={inputState.searchTag}
          className="App-input"
        />
      </div>
      <SimpleBar style={{ height: '65vh' }}>
        {loaded && (
          <Profile
            profileData={resultDataState}
            setToggleDetails={handleToggle}
            toggleDetails={expanded}
          />
        )}
      </SimpleBar>
    </div>
  )
}

export default App
