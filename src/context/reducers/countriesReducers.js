export async function countriesReducers(state = [], action){
  if (action.type === "SEARCH_EN") {
      try {
        const data = await fetch(action.payload.url);
  
        if (!data.ok) {
          throw { errorTrue : true, status: data.status, statusText: "the country could not be found" };
        }
        
        const json = await data.json();
        return json;
      } catch (error) {
        return error;
      }
    }
    if(action.type === "SERCH_ES"){
      try {
        const data = await fetch("https://restcountries.com/v3.1/all")
        if(!data.ok){
          throw { errorTrue : true, status: data.status, statusText: "The country could not be found" };
        }
        
        const json = await data.json()
        
        const res = json.find(country => country.translations.spa.common === action.payload.name || country.translations.spa.official === action.payload.name);
        
        if(!res){
          throw { errorTrue : true, status: data.status, statusText: "The country could not be found" };
        }

        return ([res])

      }catch(error){
        return error;
      }

    }else {
      return state;
    }
}
 


export async function init (initialState){
  try{
    const data = await fetch("https://restcountries.com/v3.1/all")
    if(!data.ok) throw {message: data.statusText, status : data.status}
    const json =  await  data.json()
    initialState = json.slice(0,8)
    return initialState
  }catch(err){
    return err
  }
}