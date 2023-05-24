const Content = ( {courseName, courseInfo} ) => {
    return(
      <div>
        <h2>{courseName}</h2>

        {courseInfo.map(obj => 
          <li className="list">
            {obj.name} {obj.exercises}
          </li>
        )} 

      </div>
  )}

  export default Content