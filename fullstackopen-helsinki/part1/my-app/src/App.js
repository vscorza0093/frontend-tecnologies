const js = "JavaScript"

const ReactApp = () => {
  console.log("Função 1 -> " + ReactApp.name)
  return (
    <div>
      <h1>Olá, {js}</h1>
      <p>Eu sempre te odiei...</p>
      <p>Quem sabe agora eu não mudo de ideia?</p>
      <Crazyness js='JavaScript' jsx='JSX' react='React'/>
    </div>
  )
}

const Crazyness = (props) => {
  console.log("Função 2 -> " + Crazyness.name)
  return (
    <div>
      <h2>É bem provável</h2>
      <p>
        Essa coisa de {props.js} e {props.jsx}, {props.react}... loucura
      </p>
      <FckingCrazyness js='JavaScript' jsx='JSX' html='HTML'/>
    </div>
  )
}

const FckingCrazyness = (props) => {
  console.log("Função 3 -> " + FckingCrazyness.name)
  return (
    <div>
      <h3>Look!</h3>
      <p>I'm creating {props.jsx} components and calling them from other functions like {props.html} components and compiling in {props.js}</p>
      <AndNow ctrl="&#127918;"/>
    </div>
  )
}

const AndNow = (props) => {
  console.log("Função 4 -> " + AndNow.name)
  return (
  <div>
    <h2>IN ENGLISH AND WITH EMOJIS {props.ctrl}</h2>
    <p>.</p>
    <p>.</p>
    <p>.</p>
    <p>.</p>
    <p>.</p>
    <p>.</p>
    <Finito react='React'/>
  </div>
)}

const Finito = (props) => {
  console.log("Função 5 -> " + Finito.name)
  return (
    <div>
      <h1>
        Finito.
      </h1>
      <p style={{fontSize:5}}>eu gostei disso, obrigado {props.react}</p>
    </div>
)}
/*
const ReactApp = () => {
  const games = [
    { name: 'Doom 2', type: 'FPS'},
    { name: 'Diablo 2', type: 'Action RPG'},
  ]

  return (
    <div>
      <h1>Greate games</h1>
      <br></br>
      <h2>{games[0].name}</h2>
      <h2>{games[1].name}</h2>

    </div>
  )
}
*/
export default ReactApp
