import axios from "axios";

import { useState, useEffect } from "react";

import EmployeeInput from "./Employee";



export  default function Forms  ()  {



  const [formdata, setformdata]=useState([]);



;



  const handleformdata= async (data)=>{

    await axios.post("http://localhost:3000/users", data)



     alert("registered")

      getData();

  

  }



  const getData = async ()=>{

      const response = await axios.get("http://localhost:3000/users");



      console.log(response);



      setformdata(response.data)

  }



  useEffect(()=>{

    // getData();



    // console.log()



  },[])



  return (

    <div >

      <EmployeeInput handleformdata={handleformdata}> </EmployeeInput>




    </div>

  );

};