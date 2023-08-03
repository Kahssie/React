import pic from './test.jpg';
import './App.css';

function App() {
  
  const element = "Office Space"
  const jsxatt = <img src={pic} width="25%" height="25%" alt="Office Space" />
  const ItemName = { Name: "DBS", Rent: 50000, Address: "Chennai" }

  // GIVEN THE FOLLOWING CODE SNIPPET, I CONVERTED IT TO JSX DIRECTLY IN <h3>
  /*
  let colors = [];

  if (ItemName.Rent <= 60000) {
    colors.push('textRed');
  } else {
    colors.push('textGreen');
  }
  */
  
  return (
    <div className="App">
      <h1>{element}, at Affordable Range</h1>
      {jsxatt}
      <h1>Name: {ItemName.Name}</h1>
      <h3 style={{color: ItemName.Rent <= 60000 ? 'green' : 'red'}}>Rent: {ItemName.Rent}</h3>
      <h3>Address: {ItemName.Address}</h3>
    </div>
  );
}


export default App;
