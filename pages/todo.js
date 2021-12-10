import { useAuth } from 'libs/hooks/useAuth';
import { AppBar } from "../components/appbar";
import {Title} from "../ui/title";
import Link from "next/link"


function ToDoPage(props) {
   
  const user = useAuth()
  if(!user) {
    return (<>
    <AppBar/>
    <Title> YOUR NOT WELCOME GO AWAY!</Title>
    </>)
  }
  
  return(
    <>
    <AppBar/>
    <Title>Render The Users To Do List</Title>
    <Link href="/add-item"><a>Click to Add Item</a></Link>
    </>
  )
  
}

export default ToDoPage;
