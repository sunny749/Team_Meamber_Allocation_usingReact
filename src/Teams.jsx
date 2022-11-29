const Teams=({selectedTeam,setTeam})=>{
  return(
      <select className='form-select form-select-lg' value={selectedTeam} onChange={(e)=>{setTeam(e.target.value)}}>
            <option value='TeamA'>TeamA</option>
            <option value='TeamB'>TeamB</option>
            <option value='TeamC'>TeamC</option>
            <option value='TeamD'>TeamD</option>
          </select>
  )
}
export default Teams