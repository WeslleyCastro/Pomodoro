import { HeaderContainer } from "./style";
import { Timer, Scroll, Alarm } from "phosphor-react"
import { NavLink } from "react-router-dom"

export function Header(){
  return (
   <HeaderContainer>
    <Alarm color="#3A7BF2" size={40} weight="fill"/>
    <nav>
      <NavLink to="/" title="timer"><Timer size={24}/></NavLink>
      <NavLink to="/history" title="histórico"><Scroll size={24}/></NavLink>
    </nav>
   </HeaderContainer>
  )
}