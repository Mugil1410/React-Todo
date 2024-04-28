
const Footer = ({length,Completed,Incompleted}) => {
  return (
    
    <footer>
      <table>
      <th>{length ===0 ? null:"Tasks: "+length+" |"}</th>
      <th>{Completed ===0 ? null:" Completed: "+Completed+" |"}</th>
      <th>{Incompleted ===0 ? null:" Incompleted: "+Incompleted}</th>
      </table>
      <br />
      <p >created by <a href="https://mugil.netlify.app/" style={{color: "inherit"}}>Mugilaananthan</a></p>
    </footer>
  )
}

export default Footer
