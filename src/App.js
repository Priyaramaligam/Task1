import Main from './componets/main';
import Header from './componets/header';
import Footer from './componets/footer';
import './App.css';
import Northfood from './Assets/north-food.jpg';
import Southfood from './Assets/south-food.jpg';
import Eastfood from './Assets/east-food.jpg';

let foodobject = [{

  foodimage: Northfood,
  foodcontent: "North Indain foods available",
},
{
  foodimage: Southfood,
  foodcontent: "South Indain foods available",
},
{
  foodimage: Eastfood,
  foodcontent: "East Indain foods available",
}];


function App() {
  return (
    <>
      <Header />
      <div className="Main-Container">
      {
        foodobject.map((e, i) => {
          return (
            <Main image={e.foodimage} content={e.foodcontent} />
          )
        })
      }
       </div>

      <Footer />

    </>
  );
}

export default App;
