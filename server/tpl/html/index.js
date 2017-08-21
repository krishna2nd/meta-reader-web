module.exports = function(context) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Meta scrap viewer</title>
    <style type="text/css">
    html, body {
      margin: 0px;
      padding: 0px;
      font-family:arial, helvetica, sans-serif;
      text-shadow: -1px -1px 0 rgba(0,0,0,0.3);
    }
    header {
      padding-top: 5px ;
      padding-left: 10px;
      padding-bottom: 1px;
      color: white;
      background-color: royalblue;
      -webkit-box-shadow: -1px 3px 7px 0px rgba(171,171,171,1);
      -moz-box-shadow: -1px 3px 7px 0px rgba(171,171,171,1);
      box-shadow: -1px 3px 7px 0px rgba(171,171,171,1);
    }
    form {
      margin-top: 50px;
      text-align:center;
      margin-left: auto;
      margin-right:auto;
    }
    form input[type=text] {
      width: 70%;
      height: 22px;
      padding: 5px;
      color: gray;
    }
    form input[type=submit] {
      border: none;
      color: white;
      width: 200px;
    }
    form input[type=submit]{
      border:1px solid #7d99ca;
      -webkit-border-radius: 3px;
      -moz-border-radius: 3px;
      border-radius: 3px;
      font-size:12px;
      padding: 10px; 
      text-decoration:none;
      display:inline-block;
      text-shadow: -1px -1px 0 rgba(0,0,0,0.3);
      font-weight:bold; color: #FFFFFF;
      background-color: #a5b8da; background-image: -webkit-gradient(linear, left top, left bottom, from(#a5b8da), to(#7089b3));
      background-image: -webkit-linear-gradient(top, #a5b8da, #7089b3);
      background-image: -moz-linear-gradient(top, #a5b8da, #7089b3);
      background-image: -ms-linear-gradient(top, #a5b8da, #7089b3);
      background-image: -o-linear-gradient(top, #a5b8da, #7089b3);
      background-image: linear-gradient(to bottom, #a5b8da, #7089b3);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#a5b8da, endColorstr=#7089b3);
    }
    
    input[type=submit]:hover{
      border:1px solid #5d7fbc;
      background-color: #819bcb; background-image: -webkit-gradient(linear, left top, left bottom, from(#819bcb), to(#536f9d));
      background-image: -webkit-linear-gradient(top, #819bcb, #536f9d);
      background-image: -moz-linear-gradient(top, #819bcb, #536f9d);
      background-image: -ms-linear-gradient(top, #819bcb, #536f9d);
      background-image: -o-linear-gradient(top, #819bcb, #536f9d);
      background-image: linear-gradient(to bottom, #819bcb, #536f9d);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#819bcb, endColorstr=#536f9d);
    }
    .report {
      width: 80%;
      margin-left: auto;
      margin-right: auto;
      margin-top: 20px;
      padding-top: 10px;
    }

    
    .wrapper {
      font-family: "Helvetica Neue", Helvetica, Arial;
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      color: #3b3b3b;
      -webkit-font-smoothing: antialiased;
      font-smoothing: antialiased;
      text-shadow: none;
    }
    
    .table {
      margin: 0 0 40px 0;
      width: 100%;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
      display: table;
    }

    .wrapper input[type=text] {
      height: 40px;
      border: none;
      width: 98%;
      background-color: transparent;
    }
    .cell.prop {
      width: 18%;
    }
    .cell>.table {
      margin: 2px 0;
    }
    @media screen and (max-width: 580px) {
      .table {
        display: block;
      }
    }
    
    .row {
      display: table-row;
      background: #f6f6f6;
    }
    .row:nth-of-type(odd) {
      background: #e9e9e9;
    }
    .row.header {
      font-weight: 900;
      color: #ffffff;
      background: #ea6153;
    }

    .row.blue {
      background: #2980b9;
    }
    @media screen and (max-width: 580px) {
      .row {
        padding: 8px 0;
        display: block;
      }
    }
    
    .cell {
      padding: 6px 12px;
      display: table-cell;
    }
    @media screen and (max-width: 580px) {
      .cell {
        padding: 2px 12px;
        display: block;
      }
    }

    </style>
  </head>
  <body>
    <header><h3>
      Meta viewer
      </h3></header>
    
    <form action="/" method="post">
      <input type="text" name="url" placeholder="Please provide a web url" value=${context.url || ''} />
      <input type="submit" name="submit" value="Fetch meta" />
  </form>
  <div class='report'>
  ${context.content || ''}
  </div>
  </body>
  </html>`;
}
