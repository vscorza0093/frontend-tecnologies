import Content from './Content'
import Total from './Total'

const Informations = ( {course} ) => {
    return(
        <div>
            <Content courseName={course.name} courseInfo={course.parts}/>
            <Total total={course.parts.reduce((previous, current) => previous + current.exercises,0)}/>
        </div>
    )
}
    
export default Informations