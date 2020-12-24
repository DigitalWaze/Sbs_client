
const GetImage = (url,statusCode,apiKey,TIMESTAMP,NONCE,DIGEST,callback) =>
{
    fetch(url,{
        method: 'GET',
        headers: {
            "X-API-KEY" : apiKey,
            "X-TIMESTAMP" : TIMESTAMP,
            "X-NONCE" : NONCE,
            "Authentication" : DIGEST,
        },
        })
    .then(
        function(response) {
            console.log(response);
            return response.blob()
            // callback(response.body);

        }
    )
    .then (  function(imageBlob) {
    
        let image = URL.createObjectURL(imageBlob);
        console.log('imageBlob=> ',imageBlob);
        console.log('image=> ',image);

        callback(image);
    
      }
    )
    .catch(function(err) {
        console.log('Fetch Error : ', err);
    });
}

export default GetImage;