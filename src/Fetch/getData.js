
const   GetData =   (url,statusCode,req,token,callback) => {


  console.log(req)
    let object;

   const searchParams = Object.keys(req).map((key) => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(req[key]);
  }).join('&');

    fetch(url,{
    method: 'POST',
    headers: {
      'Access-Control-Request-Headers':'Content-Type',
      'Content-Type': 'application/x-www-form-urlencoded',
      "Authorization": "bearer " + token
    },
    body:searchParams,

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
    if(data.responseCode=="Success")
    { console.log("Success")
      object=data;
    }
    else {object=data; console.log("Failed")}


    callback(object);

  }
  
  )



 
}

 
   
  export default GetData;