import net from 'net';

const server = net.createServer((client) => {
    console.info('client connected!');

    client.addListener('data', (data) => {
        console.info(`received data : ${data.toString()}`);
        client.write(`hello ${data.toString()}`)
    })
})

server.listen(3000, "localhost");
