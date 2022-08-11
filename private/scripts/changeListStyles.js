// Auto change Japanese styles by Lambholl

function isJapanese(text) {
    var reg = new RegExp("[\\u3040-\\u30FF]+","g");
    if (reg.test(text)) {
        return true;
    } else {
        return false;
    }
}


function changeStyles() {
    for (var i = 0, len = document.getElementById('aaa114514').children.length; i < len; i++) {
        if (!document.getElementById('aaa114514').children[i].children[2].checked) {
            var isJpn = isJapanese(document.getElementById('aaa114514').children[i].children[2].innerHTML);
            if (isJpn) {
                document.getElementById('aaa114514').children[i].children[2].className = 'jpn-fonts';
            }
            document.getElementById('aaa114514').children[i].children[2].checked = true;
        }
    }
}

