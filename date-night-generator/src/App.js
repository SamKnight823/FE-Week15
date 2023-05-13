import {useEffect, useState, Component} from 'react'
import './App.css';
import { dateNightApi } from './dateNightApi';

function App() {
  
  const [dateNightIdeas, setDateNightIdeas] = useState([])
  async function getIdeas() {
    const data = await dateNightApi.get();
        setDateNightIdeas(data)   
  }
async function deleteDate(id){
  await dateNightApi.delete(id);
  getIdeas();
 }
  const [newWeekDay, setNewWeekDay] = useState('')
  const [newOccassion, setNewOccassion] = useState('')
  const [newMood, setNewMood] = useState('')

  async function postNewDate(e, newWeekDay, newMood, newOccassion) {
    e.preventDefault()
    const data = {weekDay:newWeekDay, occassion: newOccassion, mood:newMood}
   await dateNightApi.post(data); 
   getIdeas();
  }

  const [updateWeekDay, setupdateWeekDay] = useState('')
  const [updateOccassion, setUpdateOccassion] = useState('')
  const [updateMood, setUpdateMood] = useState('')

  async function updateDate(e, updateWeekDay, updateMood, updateOccassion,id) {
    e.preventDefault()
    const data = {weekDay:updateWeekDay, occassion: updateOccassion, mood:updateMood}
   await dateNightApi.put(data,id); 
   getIdeas();
  }
  useEffect(() => {
    getIdeas();
    
  }, [])

  return (
      <div className ="App">
         <form className="Dates">
        <h3>POST new Date Night form </h3>
        <label>Weekday</label>
        <input onChange={(e) => setNewWeekDay(e.target.value)}></input><br></br>
        <label>Occassion</label>
        <input onChange={(e) => setNewOccassion(e.target.value)}></input><br></br>
        <label>Mood</label>
        <input onChange={(e) => setNewMood(e.target.value)}></input><br></br>
        <button onClick={(e) => postNewDate(e,newWeekDay, newOccassion, newMood)}>Submit</button>
      </form>
      <br></br>
      {dateNightIdeas.map((idea, index) => (      
          <div key={index} className='DateList'>
            <div>
              Name: {idea.weekDay} <br></br>
              Occassion: {idea.occassion} <br></br>
              Mood: {idea.mood} <br></br>
              <button onClick={() => deleteDate(idea.id)}>Delete</button>
            </div>          
      <form>
            <label>Update Weekday</label>
            <input
              onChange={(e) => setupdateWeekDay(e.target.value)}
            ></input>
            <br></br>
            <label>Update Occassion</label>
            <input
              onChange={(e) => setUpdateOccassion(e.target.value)}
            ></input>
            <br></br>
            <label>Update Mood</label>
            <input
              onChange={(e) => setUpdateMood(e.target.value)}
            ></input>
            <br></br>
            <button onClick={(e) => updateDate(e,updateWeekDay,updateOccassion,updateMood, idea.id)}>Update</button>
          </form>
      </div>      
      ))}
      </div>
  )
} 
export default App;
