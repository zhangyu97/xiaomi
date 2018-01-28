    //
    // let nav = document.querySelectorAll(".nav_word .nav_box");
    // let none = document.querySelector(".nav_xuan");
    // let content = document.querySelectorAll(".xuan_center");
    // nav.forEach(function (dom, xia) {
    //     dom.onmouseover = function (val, index) {
    //         nav.forEach(function (value, index) {
    //             value.classList.remove(".nav_box_active");
    //             none.style.display = "none";
    //             content[xia].style.display = "none";
    //         })
    //         this.classList.add(".nav_box_active");
    //         none.style.display = "block";
    //         content[xia].style.display = "block";
    //     }
    // });
//    for (let i =0;i<content.length;i++){
//        nav.onmouseover = function (value,index) {
//            content.style.display="block";
//        }
//        nav.onmouseout = function (value,index) {
//            content.style.display="none";
//        }
//	}
// banner
window.onload=function () {
    let ban = document.querySelector(".banner");
    let banimg = document.querySelectorAll("ul.banner_img li");
    let left = document.querySelector('.banner_left');
    let right = document.querySelector('.banner_right');
    let t = 0;
    function name() {
        if (t == banimg.length) {
            t = 0;
        }
        banimg.forEach(function (value) {
            value.className = ' ';
        })
        banimg[t].className = "active"
            t++;
    }
    let time = setInterval(name, 2000);
    ban.onmouseover = function () {
        clearInterval(time);
    }
    ban.onmouseout = function () {
        time = setInterval(name, 2000);
    }
    right.onclick = function () {
        t++;
        if (t == banimg.length) {
            t = 0;
        }
        banimg.forEach(function (value) {
            value.className = " ";
        })
        banimg[t].className = 'active';
    }
    left.onclick = function () {
        t--;
        if (t < 0) {
            t = banimg.length - 1;
        }
        banimg.forEach(function (value) {
            value.className = " ";
        })
        banimg[t].className = "active";
    }
// banner选项卡
//     let banner=document.querySelector(".baner_nav")
//     let bb = document.querySelector(".banner_nav li");
//     let cc = document.querySelector(".baner_none");
//         bb.onmouseover = function (val,index) {
//             bb.forEach(function (a, b) {
//                 a.classList.remove("active")
//             })
//             val.classList.add("active")
//             cc.forEach(function (a, b) {
//                 cc.style.display="none";
//             })
//             cc[index].style.display="block";
//         }
// 家电、智能选项卡
    let xuan = function (top, bottom) {
        let title = document.querySelectorAll(top);
        let img = document.querySelectorAll(bottom);
        title.forEach(function (dom, index) {
            dom.onmousemove = function () {
                title.forEach(function (a, b) {
                    a.classList.remove("active_")
                })
                this.classList.add("active_")
                img.forEach(function (a, b) {
                    a.classList.remove("active_")
                })
                img[index].classList.add("active_")
            }
        })
    }
    xuan('.title_R .right_title','.jiadian .jiadian_bottom .jiadian_right');
    xuan('.zhineng .right_word','#zhineng .shopping_right');
    xuan('.dapei .right_word','#dapei .shopping_right');
    xuan('.peijian .right_word','#peijian .shopping_right');
    xuan('.zhoubian .right_word','#zhoubian .shopping_right');
}
