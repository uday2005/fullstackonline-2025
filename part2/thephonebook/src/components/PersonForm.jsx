
const PersonForm = (props) => {
  return(
    <form onSubmit={props.onSubmit}>
        <div>New info</div>
        <div> name: <input onChange={props.onNameChange} value={props.nameValue}/> </div>
        <div> number: <input onChange={props.onNumberChange} value={props.numberValue}/> </div>
        <button type="submit"> add</button>
    </form>
  )
}

export default PersonForm