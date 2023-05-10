const js = "JavaScript"
const jsx = "JSX"
const react = "React"
const html = "HTML"

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
      <FckingCrazyness />
    </div>
  )
}

const FckingCrazyness = () => {
  console.log("Função 3 -> " + FckingCrazyness.name)
  return (
    <div>
      <h3>Look!</h3>
      <p>I'm creating {jsx} components and calling them from other functions like {html} components and compiling in {js}</p>
      <AndNow />
    </div>
  )
}

const AndNow = () => {
  console.log("Função 4 -> " + AndNow.name)
  return (
  <div>
    <h2>IN ENGLISH AND WITH EMOJIS &#127918;</h2>
    <p>.</p>
    <p>.</p>
    <p>.</p>
    <p>.</p>
    <p>.</p>
    <p>.</p>
    <Finito />
  </div>
)}

const Finito = () => {
  console.log("Função 5 -> " + Finito.name)
  return (
    <div>
      <h1>
        Finito.
      </h1>
      <p style={{fontSize:5}}>eu gostei disso</p>
    </div>
)}

export default ReactApp