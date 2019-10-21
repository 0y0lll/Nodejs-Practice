var http = require('http');
var fs = require('fs');
var url = require('url');   // require : url이라는 모듈을 사용하겠다

var app = http.createServer(function (request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;

    // console.log(url.parse(_url, true))
    // path : 쿼리스트링 포함 / pathname : 순수 경로

    if (pathname === '/') {
        if (queryData.id === undefined) {

            fs.readdir('./data', function (error, filelist) {
                var title = 'Hello World';
                var desc = 'Hello Node.js!!!';

                var list = '<ul>';
                var i = 0;
                while (i < filelist.length) {
                    list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
                    i = i + 1;
                }
                list = list + '</ul>';

                var template = `
                    <!doctype html>
                    <html>
                    <head>
                    <title>WEB1 - ${title}</title>
                    <meta charset="utf-8">
                    </head>
                    <body>
                        <h1><a href="/">WEB</a></h1>
                        ${list}
                        <h2>${title}</h2>
                        <p>${desc}</p>
                    </body>
                    </html>
                `;

                response.writeHead(200);
                // response.end(fs.readFileSync(__dirname + _url)); // 사용자 url에 따라 파일 열어줌
                response.end(template);
            })

        } else {
            fs.readdir('./data', function (error, filelist) {
                var title = 'Hello World';
                var desc = 'Hello Node.js!!!';

                var list = '<ul>';
                var i = 0;
                while (i < filelist.length) {
                    list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
                    i = i + 1;
                }
                list = list + '</ul>';

                var title = queryData.id;

                // main.js 내용이 변경되면 main.js 껐다 켜줘야 하지만
                // readFile은 해당 page가 로드될 때마다 읽기 때문에 reload하면 바로 적용됨
                fs.readFile(`data/${queryData.id}`, 'utf8', function (err, desc) {
                    var template = `
                        <!doctype html>
                        <html>
                        <head>
                        <title>WEB1 - ${title}</title>
                        <meta charset="utf-8">
                        </head>
                        <body>
                            <h1><a href="/">WEB</a></h1>
                            ${list}
                            <h2>${title}</h2>
                            <p>${desc}</p>
                        </body>
                        </html>
                    `;

                    response.writeHead(200);
                    // response.end(fs.readFileSync(__dirname + _url)); // 사용자 url에 따라 파일 열어줌
                    response.end(template);

                }) // 쿼리 스트링에 따라 파일명 생성
            });
        }
    } else {
        response.writeHead(404);    // 웹브라우저에 상태값 전달
        response.end('Not Found');
    }

});

app.listen(3000);