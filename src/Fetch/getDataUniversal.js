
const   GetData =   (url,statusCode,token,callback) => {

    let object;

      fetch(url,{
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