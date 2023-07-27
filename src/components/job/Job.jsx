import { useLocation } from "react-router-dom"

const Job = () => {
    const work = useLocation().state
    return(
        <>
        {work.title}
        {work.image}
        {work.location}
        {work.description}
        {work.requirements}
        </>
    )
}


export default Job;