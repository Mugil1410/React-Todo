
const Footer = ({length,Completed,Incompleted}) => {
  return (
    <footer>
      <table>
      <th>{length ===0 ? null:"Tasks: "+length+" |"}</th>
      <th>{Completed ===0 ? null:"Completed: "+Completed+" |"}</th>
      <th>{Incompleted ===0 ? null:"Incompleted: "+Incompleted}</th>
      </table>
      <br />
      <center>Crafted By <a style={{color: "inherit",textDecoration:"none"}} href="https://mugil.netlify.app/">Mugilaananthan</a></center>
    </footer>
  )
}

export default Footer
