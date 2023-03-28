import fetch from 'node-fetch'

export const handler = async (event, context) => {
  let path=event.path
  path.replace("/.netlify/functions/pokedex", "/")
  let url = new URL(path);
  
  if (url.pathname.startsWith('/')) {
    url.hostname = 'frosty-glitter-b25e.spreadsheet22.workers.dev'
    let new_request = new Request(url, event);
    
    //const POKE_API = 'https://pokeapi.co/api/v2/pokedex/' + eventBody.region
    //const response = await fetch(POKE_API)
    //const data = await response.json()
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        new_request: new_request,
        url: event.path + "?" + new URLSearchParams(event.queryStringParameters),
      })
   }
  
}
