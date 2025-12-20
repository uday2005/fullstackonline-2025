const Notifications = ({ confirmMessage, errorMessage }) => {
  if (errorMessage) {
    return <div className="errors">{errorMessage}</div>
  }

  if (confirmMessage) {
    return <div className="success">{confirmMessage}</div>
  }

  return null
}

export default Notifications