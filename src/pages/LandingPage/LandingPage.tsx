import logo from "../../assets/images/logo.png";
import utensils from "../../assets/images/utensils.png"
import './LandingPage.css'

function App() {

  return (
    <>
     <div className="">
  
    <header>
        <div className="absolute top-[20px] left-[20px]">
         
            <img className="w-20" src={logo} alt="Logo"/>
        </div>
        
        <nav>
            <ul>
                <li className="text-red-50"><a href="#">HOME</a></li>
                <li><a href="#">FOOD</a></li>
                <li><a href="#">ABOUT US</a></li>
                <li><a href="#">CONTACT US</a></li>
            </ul>
        </nav>
    </header>
   
  
<div className="green-rectangle"></div>

   
{/*this is comment */}

    <main>
        <section className="quote">
            <p>"Filipino cuisine is a vibrant blend of bold flavors, rich traditions, and diverse influences, offering a unique culinary experience that reflects the country's history and culture."</p>
        </section>
        <section className="flex-none ml-[1100px] max-w-[200px]
">
            <img className="w-[120px]" src={utensils} alt="Utensils Graphic"/>
        </section>
       
    </main>
    <div className="pt-32 pl-[4.5rem]">
        <p className="text-center  text-6xl font-bold w-[18.9rem]">Recipe</p>
    </div>
    
</div>
    </>
  )
}

export default App
