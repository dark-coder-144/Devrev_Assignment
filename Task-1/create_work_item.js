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

const apiKey = 'eyJhbGciOiJSUzI1NiIsImlzcyI6Imh0dHBzOi8vYXV0aC10b2tlbi5kZXZyZXYuYWkvIiwia2lkIjoic3RzX2tpZF9yc2EiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiamFudXMiXSwiYXpwIjoiZG9uOmlkZW50aXR5OmR2cnYtaW4tMTpkZXZvLzJLQmF6SmNNMTE6ZGV2dS8xIiwiZXhwIjoxODEwMzk3MTg4LCJodHRwOi8vZGV2cmV2LmFpL2F1dGgwX3VpZCI6ImRvbjppZGVudGl0eTpkdnJ2LXVzLTE6ZGV2by9zdXBlcjphdXRoMF91c2VyL2xpbmtlZGlufGhoOGY4N1JCb2siLCJodHRwOi8vZGV2cmV2LmFpL2F1dGgwX3VzZXJfaWQiOiJsaW5rZWRpbnxoaDhmODdSQm9rIiwiaHR0cDovL2RldnJldi5haS9kZXZvX2RvbiI6ImRvbjppZGVudGl0eTpkdnJ2LWluLTE6ZGV2by8yS0JhekpjTTExIiwiaHR0cDovL2RldnJldi5haS9kZXZvaWQiOiJERVYtMktCYXpKY00xMSIsImh0dHA6Ly9kZXZyZXYuYWkvZGV2dWlkIjoiREVWVS0xIiwiaHR0cDovL2RldnJldi5haS9kaXNwbGF5bmFtZSI6InNocmF2YW4yMDAyayIsImh0dHA6Ly9kZXZyZXYuYWkvZW1haWwiOiJzaHJhdmFuMjAwMmtAZ21haWwuY29tIiwiaHR0cDovL2RldnJldi5haS9mdWxsbmFtZSI6IlNocmF2YW4gSyIsImh0dHA6Ly9kZXZyZXYuYWkvaXNfdmVyaWZpZWQiOnRydWUsImh0dHA6Ly9kZXZyZXYuYWkvdG9rZW50eXBlIjoidXJuOmRldnJldjpwYXJhbXM6b2F1dGg6dG9rZW4tdHlwZTpwYXQiLCJpYXQiOjE3MTU3ODkxODgsImlzcyI6Imh0dHBzOi8vYXV0aC10b2tlbi5kZXZyZXYuYWkvIiwianRpIjoiZG9uOmlkZW50aXR5OmR2cnYtaW4tMTpkZXZvLzJLQmF6SmNNMTE6dG9rZW4vMmthWjZvMEMiLCJvcmdfaWQiOiJvcmdfN1M2VWVIYUVTcW5aVWNyTSIsInN1YiI6ImRvbjppZGVudGl0eTpkdnJ2LWluLTE6ZGV2by8yS0JhekpjTTExOmRldnUvMSJ9.faCB8pVQrHerHhrE8Sw75-PPGh0HBP4YU0ngNPBtedFs59QGRmQG0LdXExHPpWRUygVvg32vyu-0-NQ6CMnXlcsRjZ5O5Q_8Z05NuL4FHQ8li13WRVMag2kAzklf62sUgDKc-wSgcq8WDofjV-Ssa28WSuiSQ5peTpa54-tq2xj1TLnkr0xiPTO7JG3ThywzPm8dnfkvxs6e4u4fRS__Et-HnsaY4F8T8cuPOqgy1Dlv0p2QJn1KqbpUf39gpNB8XNMYyoXrhu5ZjgMRfJKnGiibbr-gat_8FeNSm4V3RFYPqcfDEvTP-fUvP-nbxvPzH79R0-S90utI4KaZqttsrg';
const url = 'https://api.devrev.ai/works.create'

createWorkItem(url, apiKey, requestedData);



