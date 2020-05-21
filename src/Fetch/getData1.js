
const   GetData =   (url,statusCode,req,token,callback) => {


  console.log(req)
    let object;
    let searchParams="";
    

  searchParams = searchParams + Object.keys(req).map((key) => {
   
    return encodeURIComponent(key) + '=' + encodeURIComponent(req[key]);
  }).join('&');

console.log(searchParams)


    fetch(url+'?'+searchParams,{
    method: 'GET',
    headers: {
     
      "Authorization": "bearer " + token
    },
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
    object=data;



    callback(object);

  }
  
  )



 
}

 
   
  export default GetData;