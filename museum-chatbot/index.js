const express = require('express')
const app = express();
const dfff = require('dialogflow-fulfillment');
const http = require('http');
const url = "http://localhost:8080/exhibits/all";

var results;
http.get(url, (resp) => {
  let data = '';

  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    results = JSON.parse(data);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});

app.get('/', (req, res) => {
    res.send('working')
})

app.post('/', express.json(), (req, res)=> {
    const agent = new dfff.WebhookClient({
        request: req,
        response: res
    })

    function customIntent(agent){
        if (agent.query != 'search'){
          var payload = { 
                          "richContent": [
                            
                          ]
                        };
          const searchValue = agent.query.split(' ')[1].toLowerCase();
          results.forEach(elem => {
            if( elem.title.toLowerCase().includes(searchValue) || elem.century.toLowerCase().includes(searchValue)
               || elem.period.toLowerCase().includes(searchValue) || elem.classification.toLowerCase().includes(searchValue) 
               || elem.price == searchValue || elem.tourTime == searchValue
               || elem.rating == searchValue){
              payload.richContent.push(
                    [
                      {
                        "type": "image",
                        "rawUrl": elem.image,
                        "accessibilityText": "image",
                      },
                      {
                        "type": "info",
                        "title": elem.title,
                        "subtitle": "Price: " + elem.price + "€ | Time: " + elem.tourTime + "min | Rating: " + elem.rating, 
                        "actionLink": "http://localhost:4200/exhibits/exhibit/" + elem.id,
                      }
                    ]
                 )
            }
          })
          agent.add(new dfff.Payload(agent.UNSPECIFIED, payload, {sendAsMessage: true, rawPayload: true}))
        }
        else{
          agent.add('After keyword "search" type name of the item that you want to search')
        }
      }
    
    var intentMap = new Map()
    // intentMap.set('search', demoWebHook)
    intentMap.set('search', customIntent)
    
    agent.handleRequest(intentMap)
})




app.listen(333, ()=>console.log('server radi na portu 333'))