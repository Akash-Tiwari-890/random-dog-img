let btn = document.querySelector("button");
 btn.addEventListener("click" ,async()=>{
    console.log("button was clicked");
     let fact= await getimg();
    let img= document.querySelector("#fact");
    img.setAttribute("src" , fact);
     console.log(fact);

  });





 let url = "https://dog.ceo/api/breeds/image/random";
   async function getimg(){
      try{let response=  await axios.get(url);
         
          return (response.data.message);
      } catch(e){
          console.log(e);
          return "No fact found"
      }
   }

