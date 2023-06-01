
const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name} </h1>
      <h2>Last Name: {props.lastName}</h2>
      <h2>Age: {props.age}</h2>
    </>
  )
}



const App = () => {
  const name = 'John';
  const isNameShowing = true;
  return (
    <div className="App">
      <Person
        name={'John'}
        lastName={'Doe'}
        age={25} />
      <Person
        name={'Jane'}
        lastName={'Johnson'}
        age={24} />
      <h1>Hello, {isNameShowing ? name : "someone"}!</h1>
      {name ? (
        <>
          <h1>{name}</h1>
        </>
      ) : (
        <>
          <h1>test</h1>
          <h2>There is no name</h2>
        </>
      )}
    </div>
  );
}

export default App;
