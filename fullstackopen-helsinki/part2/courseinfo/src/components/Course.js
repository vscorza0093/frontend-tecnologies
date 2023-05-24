import Header from './Header'
import Informations from './Informations'

const Course = ( {courses} ) => {
    return(
        <div>
            <Header name="Web development curriculum"/>
            {courses.map(course => <Informations course={course}/>)}
        </div>
    )
}

export default Course