
const Footer = ({length}) => {
  return (
    <footer>
      <p >{length===0 ? null:"No of task is "+length}</p>
      <p >created by <a href="https://mugil.netlify.app/" style={{color: "inherit"}}>Mugilaananthan</a></p>
    </footer>
  )
}

export default Footer
