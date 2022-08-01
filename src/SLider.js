
import image1 from '../src/images/slider1.png'
import image2 from '../src/images/slider2.png'
import slider03 from '../src/images/slider03.png'
                  // pasta
                  import sefood  from "../src/images/pexels-photo-7474118-removebg-preview.png"
                  import saladPasta  from "../src/images/pasta.png"
                  import italian from "../src/images/pasta_PNG58.png" 
                                   // chicken
                  import chicken1 from "../src/images/chicken1.png"
                  import chicken2 from "../src/images/chicken2.png"
                  import chicken3 from  "../src/images/chicken3.png"
                  import chicken4 from  "../src/images/chicken4.png"
                  
                                   //    rice 
                  import rice1 from "../src/images/pexels-photo-2296430-removebg-preview.png"
                  import rice2 from "../src/images/pexels-photo-1618955-removebg-preview.png"
                  
                                    //Burger
                  import BeefBurger from "../src/images/pexels-photo-918581-removebg-preview.png"   
                  import chickenBurger from "../src/images/pexels-photo-1639557.jpeg" 
                                   //coffe
                  import coffe1 from "../src/images/coffe1-removebg-preview.png"             
                  import coffe2 from "../src/images/coffe2.png"     
                  import coffe3 from "../src/images/pexels-photo-1627933-removebg-preview.png"    
                                  //dessert
                  
                  import dessert02 from "../src/images/dessert02.png"
                  import dessert2 from "../src/images/dessert2.png"
                  
                  import dessert3 from "../src/images/dessert3.png"
                   //pizza 
                   import pizza1 from '../src/images/pizza1.png'
                   import pizza2 from '../src/images/pizza3.png'
                   import pizza3 from '../src/images/pizza4.png'
                  
import { createContext, useState } from "react";

export let DataContext = createContext()
export function DataContextProvider(props) {
const [Slider1, setSlider1] = useState(

    [
        {
            id: "1",
            title: "We have simple and delicious food for you.",
            desc : "Lorem ipsum dolor sit amet. Vel rerum sint qui consectetur eveniet aut voluptas excepturi sed neque doloribus qui repudiandae numquam. Ut perspiciatis iure sed molestias facilis qui nihil earum rem quis praesentium et iusto unde?",           
             imgUrl : image1
        },
        {
            id: "2",
            title: "We belive good food over great smile.",
            desc : "Lorem ipsum dolor sit amet. Vel rerum sint qui consectetur eveniet aut voluptas excepturi sed neque doloribus qui repudiandae numquam. Ut perspiciatis iure sed molestias facilis qui nihil earum rem quis praesentium et iusto unde?",           
             imgUrl : image2
        },
        {
            id: "3",
            title: "Eat and enjoy the true test.",
            desc : "Lorem ipsum dolor sit amet. Vel rerum sint qui consectetur eveniet aut voluptas excepturi sed neque doloribus qui repudiandae numquam. Ut perspiciatis iure sed molestias facilis qui nihil earum rem quis praesentium et iusto unde?",           
             imgUrl : slider03
        },


    ]
);
const [Product, setProduct] = useState(
    [
        {
            id : "1",
            title : "sefood pasta",
            category : "pasta",
            price : "60",
            imgUrl : sefood ,
            popular : 'false'
   
           },
           {
               id : "2",
               title : "salad vector pasta",
               category : "pasta",
               price : "80",
               imgUrl : saladPasta, 
               popular : 'false'
      
           },
           {
               id : "3",
               title : "italian  pasta",
               category : "pasta",
               price : "70",
               imgUrl : italian ,
               popular : 'true'
           },
           {
               id : "4",
               title : "chicken dish",
               category : "chicken",
               price : "90",
               imgUrl : chicken1 ,
               popular : 'false'
      
           },
           {
               id : "5",
               title : "chicken dish",
               category : "chicken",
               price : "90",
               imgUrl : chicken2  ,
               popular : 'false' 
           },
           {
               id : "6",
               title : "chicken dish",
               category : "chicken",
               price : "90",
               imgUrl : chicken3  ,
               popular : 'true' 
                },
           {
               id : "7",
               title : "chicken dish",
               category : "chicken",
               price : "90",
               imgUrl : chicken4, 
               popular : 'false'
           },
           {
               id : "8",
               title : "Rice dish",
               category : "Rice",
               price : "90",
               imgUrl : rice1 ,
               popular : 'false'

           },
           {
               id : "9",
               title : "Rice dish",
               category : "Rice",
               price : "90",
               imgUrl : rice2,
               popular : 'false'
           },
           {
               id : "10",
               title : "Beef Burger",
               category : "Burger",
               price : "90",
               imgUrl : BeefBurger,
               popular : 'false'
           },
           {
               id : "11",
               title : "Chicken Burger",
               category : "Burger",
               price : "90",
               imgUrl : chickenBurger,
               popular : 'false'
           },
           {
               id : "12",
               title : "coffe",
               category : "coffe",
               price : "90",
               imgUrl : coffe1,
               popular : 'false'
           },
           {
               id : "13",
               title : "coffe",
               category : "coffe",
               price : "90",
               imgUrl : coffe2,
               popular : 'false'
           },
           {
               id : "14",
               title : "coffe",
               category : "coffe",
               price : "90",
               imgUrl : coffe3,
               popular : 'false'
           },
           {
               id : "15",
               title : "dessert",
               category : "dessert",
               price : "90",
               imgUrl : dessert02,
               popular : 'false'
           },
           {
               id : "16",
               title : "dessert",
               category : "dessert",
               price : "90",
               imgUrl : dessert2,
               popular : 'false'
           },
           {
               id : "17",
               title : "dessert",
               category : "dessert",
               price : "90",
               imgUrl : dessert3,
               popular : 'true'
           },
           {
            id : "18",
            title : "Pizza",
            category : "Pizza",
            price : "90",
            imgUrl : pizza1,
            popular : 'true'
        },
        {
            id : "19",
            title : "Pizza",
            category : "Pizza",
            price : "90",
            imgUrl : pizza2,
            popular : 'false'
        },
        {
            id : "20",
            title : "Pizza",
            category : "Pizza",
            price : "90",
            imgUrl : pizza3,
            popular : 'false'
        },
       
       
           
           
           
   
    ]
) 

  return <DataContext.Provider value={{Slider1 , Product}}>
        {props.children} 
    </DataContext.Provider>
}
