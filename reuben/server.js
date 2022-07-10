const http = require('http');
// const fs = require('fs');
const port = 3000;
// const filename = 'notes.txt'

const server = http.createServer(async (request, response) => {
    // if (request.url == '/post/notes' && request.method == 'POST') {
    //     // const note = await getReqData(request);
    //     fs.appendFile(filename, note + '\n', (error) => {
    //         if (error) {
    //             console.log('error occurred appending to file ', error)
    //         }
    //     });
    // response.write(note, ' note has been written');
    // response.end();
    // }

    response.write('Hellllooo there!');
    response.end();
});

server.listen(port, (error) => {
    if (error) {
        console.log('a server error occured: ', error)
    } else {
        console.log('server listening on port ', port);
    }
});

// function getReqData(req) {
//     return new Promise((resolve, reject) => {
//         try {
//             let body = "";
//             // listen to data sent by client
//             req.on("data", (chunk) => {
//                 // append the string version to the body
//                 body += chunk.toString();
//             });
//             // listen till the end
//             req.on("end", () => {
//                 // send back the data
//                 resolve(body);
//             });
//         } catch (error) {
//             reject(error);
//         }
//     });
// }
