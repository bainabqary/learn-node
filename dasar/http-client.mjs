import https from 'https';

const endPoint = 'https://eo3iukgll8vh9qu.m.pipedream.net';

const request = https.request(endPoint, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }
}, (response) => {
    response.addListener("data", (data) => {
        console.info(`Received data : ${data.toString()}`);
    });
});

const body = JSON.stringify({
    name: "Bain",
});

request.write(body);
request.end();