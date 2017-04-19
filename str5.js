const str = `asdfafda<title>
Ủy ban Tài chính: Chi 65 tỷ đồng mua quà tặng thành lập tỉnh là quá lãng phí
</title>dafafd`;

function getBody(source, pre, post) {
    // return source.replace(pre, '').replace(post, '').trim();
    const startIndex = source.indexOf(pre) + pre.length;
    const stopIndex = source.indexOf(post);
    return source.substring(startIndex, stopIndex).trim();
}

console.log(getBody(str, '<title>', '</title>'));

