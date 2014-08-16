function getTpl(field) {
    var tpl = '/templates/' + field + '.html';
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', tpl, false);
    httpRequest.send();
    return httpRequest.responseText;
}

function parse(tpl) {
    var out='';
    if (tpl) {
        out += tpl.replace(/{{(.+?)}}/g, function(mutch, field) {

            if (field == 'content')
                field = 'page' + (location.pathname == '/' ? '/index' : location.pathname);

            return parse(getTpl(field));
        });
    }

    return out;
}

document.write(parse('{{layout}}'));