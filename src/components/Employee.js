

import { useState } from "react";



export default function EmployeeInput  ({handleformdata})  {



   const [formdata, setFormdata] = useState({

    name:"",

    price:"",

    descrption:"",

   imgURL:"",
   })



const handleChange=(e)=>{



  let {id, value, checked, type} = e.target;



  value = type==="checkbox" ? checked :  value



  setFormdata({

    ...formdata,

    [id]:value

  })

}





const handleSubmit =(e)=>{

  e.preventDefault();



  

  handleformdata(formdata)



  setFormdata({

    name:"",

        price:"",

        descrption:"",

        imgUrl:"",

    
      })



  console.log(formdata)

}





  return (

    <div >

      <form  onSubmit={handleSubmit}>

        <label>product Name :</label>

        <input type="text"

        value={formdata.name}

        id="name"

        onChange={handleChange} />



        <br />

        <br />

        <label>Product Descrption :</label>

        <input value={formdata.descrption}

         type="text"

         id="descrption" 

         onChange={handleChange} 

         />



        <br />



        <label>price :</label>

        <input value={formdata.price}

         type="Number"

         id="price"

         onChange={handleChange}

         />



        

       

     


 <br />
        <label>upload image url :</label>
        <input value={formdata.imgURL} 
         type="text"
         id="imgURL"  
         onChange={handleChange}  
         />
      

        <input className="submitBtn" type="submit" />

      </form>

    </div>

  );

};