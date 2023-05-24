import UL from './components/UL'
import H1 from './components/H1'

const App = ( {notes} ) => {
  const anotherList = [{content:0, id:1}, {content:0, id:2}, {content:0, id:3}, {content:666, id:666}]
  
  return (
    <div>
      <H1 text="Notes" />
      <UL component={notes}/>
      <H1 text="Crazyness"/>
      <UL component={anotherList}/>
    </div>
  )
}

export default App