// Auto change Japanese styles by Lambholl

function isJapanese(text) {
    let reg = new RegExp("[\\u3040-\\u30FF]+","g");
    return reg.test(text);
}


function changeStyles() {
    let el = document.getElementById('aaa114514');
    let i = 0, len = el.children.length;
    
    for (; i < len; i++) {
        if (!el.children[i].children[2].checked) {
            if (isJapanese(el.children[i].children[2].innerText)) {
                el.children[i].children[2].lang = 'ja';
            }
            el.children[i].children[2].checked = true;
        }
    }
}

