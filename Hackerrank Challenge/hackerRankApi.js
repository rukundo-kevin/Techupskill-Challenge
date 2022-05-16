// api to get stock infromation from https://jsonmock.hackerrank.com/api/stocks
const request = require("request");
async function getStockInformation(date) {
    try{
    let apiEndpoint = `https://jsonmock.hackerrank.com/api/stocks?date=${date}`;
    return new Promise((resolve, reject) => {
        request(apiEndpoint, (error, response, body) => {
            if(error){
                reject(error);
            }
            let data = JSON.parse(body).data;
        
            data.length == 0 ? resolve({}) : resolve(data[0]);
        });
    });
    }
    catch(error){
       return error; 
    }

}

