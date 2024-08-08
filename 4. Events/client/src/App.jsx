import './App.css'

function AlertMessage( {children, message} ) {

  return (
    <button onClick={e => e.stopPropagation()}>
      { children }
    </button>
  );
}

export default function Toolbar() {
  return (
    <div>
      <AlertMessage message={"Playing!"}>
        Play movie
      </AlertMessage>
      <AlertMessage message={"Uploading!"}>
        Upload message
      </AlertMessage>
    </div>
  )
}