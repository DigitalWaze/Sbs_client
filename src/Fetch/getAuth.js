
const   GetData =   (url,statusCode,req,callback) => {

    let object;
    fetch(url,{
    method: 'POST',
    headers: {
      // 'Access-Control-Request-Headers':'Content-Type',
      // 'Content-Type': 'application/json',
      "Authorization": "basic " + btoa(JSON.stringify(req))
    }

  })
  .then (  function (response)  {
    if (response.status !== statusCode) {
      console.log('Looks like there was a problem. Status Code: ' +
        response.status);
      return response;
    }

    else return response.json()
    
  
  
  
  })
  .then (  function(data) {
    
    if(data.id && data.id!=null)
    { console.log("Success")
      object=data;
    }
    else {object=data; console.log("Failed")}


    callback(object);

  }
  
  )



 
}

 
   
  export default GetData;