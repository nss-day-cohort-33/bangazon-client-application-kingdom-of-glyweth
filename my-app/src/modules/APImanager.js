const remoteURL = "http://localhost:8000"

export default {
    get(resource, id) {
        return fetch(`${remoteURL}/${resource}/${id}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: `Token ${localStorage.getItem("bangazon_token")}`
            }
        }).then(response => response.json())
    },
    getAll(resource) {
        return fetch(`${remoteURL}/${resource}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: `Token ${localStorage.getItem("bangazon_token")}`
            }
        }).then(response => response.json())
    },
    // SN- Below is a fetch call to specifically get any resource that doesn't need a token i.e. Customers & Customer Categories
    getAllUnauthorized(resource) {
      // if (isAuthenticated()) {
          return fetch(`${remoteURL}/${resource}`, {
              "method": "GET",
              "headers": {
                  "Accept": "application/json"
              }
          })
              .then(response => response.json())
      // }
  },
    post(resource, newObject) {
        return fetch(`${remoteURL}/${resource}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Token ${localStorage.getItem("bangazon_token")}`
            },
            body: JSON.stringify(newObject)
        })
    },
    put(resource, resourceObject) {
        return fetch(`${remoteURL}/${resource}/${resourceObject.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(resourceObject)
        }).then(data => data.json())
    },
    delete(resource) {
        return fetch(`${remoteURL}/${resource}/${resource.id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Token ${localStorage.getItem("bangazon_token")}`
            }
        })
    }
}
