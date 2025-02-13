const urlParams = new URLSearchParams(new URL(document.currentScript.src).search);
const hId = urlParams.get('hId');

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
if (getCookie("logoHide") == "t") {
    document.querySelector("#"+hId).classList.add(urlParams.get('hBluC'))
    document.querySelector("#"+hId).querySelector("h2").innerText = "************"
}
if (window.location.pathname == "/settings") {
    window.hId = urlParams.get('hId')
    window.hBluC = urlParams.get('hBluC')
}