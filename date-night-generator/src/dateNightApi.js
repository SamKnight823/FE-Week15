const dateNightApi_Endpoint = 'https://645d0260250a246ae3150b47.mockapi.io/dateIdeas';

class DateNightApi {
    get = async () => {
        try{
            const resp = await fetch(dateNightApi_Endpoint);
            const data = await resp.json();
            
            return data
            
        }catch(e){
            console.log("Your get method didnt work", e);
        }
    }

    put = async (date,id) => {
        try{
            const resp = await fetch(`${dateNightApi_Endpoint}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(date)
            });
            return await resp.json();
        }catch(e){
            console.log("Your put method didnt work", e); 
        }
    }

    delete = async (id) => {
        try{
            const resp = await fetch(`${dateNightApi_Endpoint}/${id}`, {
                method: 'DELETE',                
            });
            return await resp.json();
        }catch(e){
            console.log("Your delete method didnt work", e); 
        }
    }

    post = async (date) => {
        try{
            const resp = await fetch(dateNightApi_Endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(date)
            });
            return await resp.json();
        }catch(e){
            console.log("Your post method didnt work", e); 
        }
    }
}
export const dateNightApi = new DateNightApi();
