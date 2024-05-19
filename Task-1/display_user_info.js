//Code to display information about user. Used to retrieve ID to use for creation of work item
import axios from 'axios';

function apiTest(token, url){
  axios.get(url, {
    headers: {
      'Authorization': token,
    }
  })
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
}

const url = 'https://api.devrev.ai/dev-users.self';
const token = "API-TOKEN"; //Replace API Token with actual token

apiTest(token, url);