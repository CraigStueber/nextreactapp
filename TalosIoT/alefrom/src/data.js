export const address = "/api/ale/v1/address"
export const loc = "/api/ale/v1/location"
export const equipment = "/api/ale/v1/equipment"
export const downstream = "/downstream"
export  const header = 'Add and Edit Equipment'



    var iframeUrl = window.location.search.substring(1); //url is not a url but the params passed in from the querystring
    //get rid of "?" in querystring
  var searchParams = new URLSearchParams(iframeUrl)

  export const ownerEid = searchParams.get("owner_eid");

  export const apiKey = searchParams.get("api_key");

  
export const apiUrl = searchParams.get("api_url")
