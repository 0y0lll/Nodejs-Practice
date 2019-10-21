var http = require('http');
var fs = require('fs');
var url = require('url');   // require : url이라는 모듈을 사용하겠다

function tmpl(title, list, body) {
    return `
            <!doctype html>
            <html>
            <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
            </head>
            <body>
                <h1><a href="/">WEB</a></h1>
                ${list}
                <a href="/create">Create</a>
                ${body}
            </body>
            </html>
            `;
}

function tmplList(filelist) {
    var list = '<ul>';
    var i = 0;
    while (i < filelist.length) {
        list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
        i = i + 1;
    }
    return list = list + '</ul>';
}

var app = http.createServer(function (request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;

    if (pathname === '/') {
        if (queryData.id === undefined) {

            fs.readdir('./data', function (error, filelist) {
                var title = 'Hello World';
                var desc = 'Hello Node.js!!!';
                var list = tmplList(filelist);
                var template = tmpl(title, list, `<h2>${title}</h2><p>${desc}</p>`);

                response.writeHead(200);
                response.end(template);
            })

        } else {
            fs.readdir('./data', function (error, filelist) {
                fs.readFile(`data/${queryData.id}`, 'utf8', function (err, desc) {
                    var title = queryData.id;
                    var list = tmplList(filelist);
                    var template = tmpl(title, list, `<h2>${title}</h2><p>${desc}</p>`);

                    response.writeHead(200);
                    response.end(template);

                }) // 쿼리 스트링에 따라 파일명 생성
            });
        }
    } else if (pathname === '/create') {
        fs.readdir('./data', function (error, filelist) {
            var title = 'WEB - Create';
            var list = tmplList(filelist);
            var template = tmpl(title, list, `
                <form action="http://localhost:3000/process_create" method="post">
                    <p><input type="text" name="title" placeholder="Title"></p>
                    <p><textarea name="description" placeholder="Description"></textarea></p>
                    <p><input type="submit"></p>
                </form>
            `);

            response.writeHead(200);
            response.end(template);
        })
    } else {
        response.writeHead(404);    // 웹브라우저에 상태값 전달
        response.end('Not Found');
    }

});

app.listen(3000);