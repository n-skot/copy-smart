import { Link } from "react-router-dom"

export default function Button({ link, text }) {
  console.log(link, text)
  return (
    <button className="m-2 p-2 pr-4 pl-4 rounded-md bg-violet-600"><Link to={link}>{text}</Link></button>
  )
}
