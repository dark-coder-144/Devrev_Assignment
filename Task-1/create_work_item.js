//Code to create a work item using DevRev API
import axios from 'axios'; 

function createWorkItem(url, apiToken, requestData){
  axios.post(url, requestData, {
    headers: {
      'Authorization': apiToken,
      'Content-Type': 'application/json',
    }
  })
  .then(response => console.log('Response:', response.data))
  .catch(error => console.error('Error:', error.response.data));
}

const requestedData = {
    "type": "issue",
    "applies_to_part": "FEAT-6", //obtained from Parts section of DevRev Website
    "owned_by":["don:identity:dvrv-in-1:devo/2KBazJcM11:devu/1"], //obtained from display_user_info
    "title": "Creating Issue using DevRev API",
    "body": "This is a sample issue created using DevRev API",
    "priority": "p1"
};

const apiKey = "API-TOKEN" //Replace API-TOKEN with actual token
const url = 'https://api.devrev.ai/works.create'

createWorkItem(url, apiKey, requestedData);



