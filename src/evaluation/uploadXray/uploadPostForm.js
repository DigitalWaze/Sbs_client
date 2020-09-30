
const   PostFormData =   (url,statusCode,req,token,callback) => {


    console.log(req)
      let object;
    
  
      fetch(url,{
      method: 'POST',
      headers: {
        // 'Access-Control-Request-Headers':'Content-Type',
        // 'Content-Type': 'multipart/form-data',
        "Authorization": "bearer " + token
      },
      body:req,
  
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
      // if(data.responseCode=="Success")
      // { console.log("Success")
      //   object=data;
      // }
      // else {object=data; console.log("Failed")}
      object=data;
  
  
  
      callback(object);
  
    }
    
    )
  
  
  
   
  }
  
   
     
    export default PostFormData;