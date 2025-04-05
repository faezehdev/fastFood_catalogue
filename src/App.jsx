
import './App.css'
import Header from './Components/Header/Header'
import Nav from './Components/Navbar/Nav'
import ListPro from './Components/Products/ListPro'
import { FoodListProvider } from './assets/Contexts/ListFoodContext'; 
import { FoodProvider } from './assets/Contexts/foodContext'; 
function App() {

  return (
    <>
    <FoodListProvider>
     <FoodProvider>
    <Header />
    <Nav />
    <ListPro />
   
    </FoodProvider>
    </FoodListProvider>
    </>
  )
}

export default App
