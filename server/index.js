var express = require('express'),
  morgan = require('morgan'),
  MrReader =  require('meta-reader').Reader,
  tpl = require('./tpl'),
  obj2table = require('./utils/obj2table'),
  _ = require('underscore')
  bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 8080;
app.use(morgan(
  ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'
))

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', function(req, res) {
  res.send(tpl.index({
    url: 'http://imdb.com/title/tt0117500/'
  }));
});

app.post('/', urlencodedParser, function(req, res) {
  let url = req.body.url;
  let mr = new MrReader();
  mr.parseUrl(url).then(function(result){
    let noData = `No og:* meta data available in head for 
      <a href="${url}">${url}<a><br/>
      Please refer: <a href="http://ogp.me">http://ogp.me<a>
    `;
    let content = !_.isEmpty(result) ? obj2table(result): noData;
    res.send(tpl.report({
      url: url,
      content: `<div class=wrapper > ${content} </div>`
    }));
  })
});

app.listen(port);
console.log('Meta reader server started at http://localhost:' + port);
