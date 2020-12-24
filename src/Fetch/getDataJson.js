
const   GetData =   (url,statusCode,req,token,callback,repeatcall) => {


    console.log(req)
      let object;
  
      fetch(url,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": "bearer " + token
      },
      body:JSON.stringify(req),
  
    })
    .then (  function (response)  {
      console.log(response)
      if (response.status != statusCode) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return response.json();
      }
  
      else return response.json()
      
    
    
    
    })
    .then (  function(data) {
      
      console.log(data)
      if(data.responseCode=="Success" || data.ResponseCode=="Success")
      { console.log("Success")
        object=data;
      }
      else {object=data; console.log("Failed Request")}
  
  
      callback(object);
  
    }
    
    )

    .catch( (err) =>{ console.log('errr = ',err)
    repeatcall();})
  
  
  
   
  }
  
   
     
    export default GetData;