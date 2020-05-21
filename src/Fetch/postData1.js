
const   PostData =   (url,statusCode,req,token,callback) => {


  console.log(req)
    let object;
    let searchParams="";
    let arrayKey=0;
req.forEach(element => {

  if(arrayKey>0)
  {
    searchParams=searchParams+'&';
  }

  searchParams = searchParams + Object.keys(element).map((key) => {
    if(key==='isEvaluated' || key==="name" || key==="joint_hurt_id")
    {
      return "";
    }
    let keys='arr['+arrayKey+'].'+key;
    return encodeURIComponent(keys) + '=' + encodeURIComponent(element[key]);
  }).join('&');

  arrayKey=arrayKey+1;
  
});
console.log(searchParams)
  //  const searchParams = Object.keys(req).map((key) => {
  //   return encodeURIComponent(key) + '=' + encodeURIComponent(req[key]);
  // }).join('&');

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

 
   
  export default PostData;