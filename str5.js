const str = `<title>
Ủy ban Tài chính: Chi 65 tỷ đồng mua quà tặng thành lập tỉnh là quá lãng phí
</title>`;

function getBody(source, pre, post) {
    // return source.replace(pre, '').replace(post, '').trim();
}

console.log(getBody(str, '<title>', '</title>'));

