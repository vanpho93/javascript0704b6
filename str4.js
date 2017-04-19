const data = require('./a');

function getBody(source, pre, post) {
    // return source.replace(pre, '').replace(post, '').trim();
    const startIndex = source.indexOf(pre) + pre.length;
    const stopIndex = source.indexOf(post);
    return source.substring(startIndex, stopIndex).trim();
}

class Tin {
    constructor(title, desc, image, link) {
        this.title = title;
        this.desc = desc;
        this.image = image;
        this.link = link;
    }
}

const arrItems = data.split('<item>');
arrItems.splice(0, 1);

function getTitle(source) {
    return getBody(source, '<title>', '</title>');
}

function getDesc(source) {
    return getBody(source, '</a></br>', ']]>');
}

function getImage(source) {
    return getBody(source, 'src="', '" ></a>');
}

function getLink(source) {
    return getBody(source, '<a href="', '"><img');
}

function getTin(source) {
    const title = getTitle(source);
    const desc = getDesc(source);
    const image = getImage(source);
    const link = getLink(source);
    return new Tin(title, desc, image, link);
}

const arrTin = arrItems.map(getTin);

console.log(arrTin);

require('fs').writeFileSync('a.txt', JSON.stringify(arrTin), 'utf8');