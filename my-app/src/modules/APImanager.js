const remoteURL = "http://localhost:8000"

export default {
    get(resource, id) {
        // if isAuthenticated() {
      return fetch(`${remoteURL}/${resource}/${id}`, {
          "method": "GET",
          "headers": {
              "Accept": "application/json",
              "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
          }
      }).then(response => response.json())
    //   }
    },
    getAll(resource) {
        // if (isAuthenticated()) {
            return fetch(`${remoteURL}/${resource}`, {
                "method": "GET",
                "headers": {
                    "Accept": "application/json",
                    "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
                }
            })
                .then(response => response.json())
        // }
    },
    post(newObject) {
      return fetch(`${remoteURL}/resource`, {
        "method": "POST",
        "headers": {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
        },
        body: JSON.stringify(newObject)
      }).then(data => data.json())
    },
    put(resourceObject) {
      return fetch(`${remoteURL}/resource/${resourceObject.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        "body": JSON.stringify(resourceObject)
      }).then(data => data.json());
    },
    delete(resource) {
        // if (isAuthenticated()) {
            return fetch(`${remoteURL}/${resource}/${resource.id}`, {
                "method": "DELETE",
                "headers": {
                "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
                }
            })
        // }
    }
  }
