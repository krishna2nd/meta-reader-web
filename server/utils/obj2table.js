let text = (data) => `<input type=text value="${data}" />`;

module.exports = obj2table = (obj) => {
  table = `<div class="table">
    <div class="row header blue">
    <div class="cell prop">property</div>
    <div class="cell">value</div>
    </div>
  `;
  for(prop in obj) {
    let p = obj[prop];
    tr = `<div class="row">
      <div class="cell prop">
        ${prop}
      </div>
      <div class="cell">`;
    switch(typeof p) {
      case  'object': tr += obj2table(p); break;
      case 'string': tr += text(p); break;
      case 'number': tr += text(p); break;
      default: continue;
    }
    tr += '</div></div>';
    table += tr;
  }
  return table + '</div>'
}

