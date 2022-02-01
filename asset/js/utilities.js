

const filesname = window.location.pathname.split('/').at(-1).split('.')[0];
console.log(filesname);
// if (/mobile/i.test(navigator.userAgent)) {
//     window.location = filesname + "_mobile.html";
// }


// if (navigator.userAgent.match(/Android/i)
//             || navigator.userAgent.match(/webOS/i)
//             || navigator.userAgent.match(/iPhone/i)
//             || navigator.userAgent.match(/iPod/i)
//             || navigator.userAgent.match(/BlackBerry/i)
//             || navigator.userAgent.match(/Windows Phone/i)
//             ){
//                 window.location.href = filesname + "_mobile.html";
//             }

if (window.screen.height < window.screen.width)
{
    window.location = filesname + "_pc.html";
}