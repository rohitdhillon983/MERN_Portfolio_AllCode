import { About } from "./sub-components/About"
import { Contact } from "./sub-components/Contact"
import { Hero } from "./sub-components/Hero"
import { MyApps } from "./sub-components/MyApps"
import { Portfolio } from "./sub-components/Portfolio"
import { Skills } from "./sub-components/Skills"
import { Timeline } from "./sub-components/Timeline"

export const Home=()=>{

    return(
        <article className=" w-full flex flex-col overflow-hidden">
            <Hero></Hero>
            <About></About>
            <Timeline></Timeline>
            <Skills></Skills>
            <Portfolio></Portfolio>
            <MyApps></MyApps>
            <Contact></Contact>
        </article>
    )
}