
const   GetDataJson =   async(url,statusCode,req,token) => {
    console.log(req)

    try
    {
  
        const response = await fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "bearer " + token
        },
        body:JSON.stringify(req),
    
        })
    
        console.log(response)
        let data;
        if (response.status != statusCode) {
        console.log('Looks like there was a problem. Status Code: ' + response.status);
        data = await response.json();
        }

        else data = await response.json()
        
        
        console.log(data)
        if(data.responseCode=="Success" || data.ResponseCode=="Success")
        {   
            console.log("Success")
        }
        else {console.log("Failed Request")}

        return data;
    }
    catch(err){ 
        console.log('errr = ',err)
    }

}  
     
export default GetDataJson;