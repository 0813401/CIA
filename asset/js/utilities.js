

const filesname = window.location.pathname.split('/').at(-1).split('.')[0];
console.log(filesname);
if (/mobile/i.test(navigator.userAgent)) {
    window.location = filesname + "_mobile.html";
}