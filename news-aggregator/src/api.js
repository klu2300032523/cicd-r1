export function callApi(requestMethod, url, data, responseHandler) {
    let options = {
        method: requestMethod,
        headers: { 'Content-Type': 'application/json' },
    };

    if (requestMethod === 'POST' || requestMethod === 'PUT') {
        options.body = JSON.stringify(data); // Ensure the data is sent as JSON
    }

    fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            return response.json(); // Parse JSON response
        })
        .then(responseHandler)
        .catch(error => alert(error));
}
