const ReactApp = () => {
  console.log("Função 1 -> " + ReactApp.name)
  return (
    <div>
      <h1>Olá, JavaScript!</h1>
      <p>Eu sempre te odiei...</p>
      <p>Quem sabe agora eu não mudo de ideia?</p>
      <Crazyness />
    </div>
  )
}

const Crazyness = () => {
  console.log("Função 2 -> " + Crazyness.name)
  return (
    <div>
      <h2>É bem provável</h2>
      <p>
        Essa coisa de JavaScript e JSX, React... loucura
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
      <p>I'm creating JSX components and calling them from other functions like html components</p>
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
    </div>
)}

export default ReactApp