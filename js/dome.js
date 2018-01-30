

window.onload=function () {
// 选项卡
    let nav = document.querySelectorAll(".nav_word .nav_box");
    console.log(nav);
    let non = document.querySelector(".nav_xuan");
    console.log(non);
    let content = document.querySelectorAll(".xuan_center");
    console.log(content);
    nav.forEach(function (vl,id) {
        vl.onmousemove = function () {
            nav.forEach(function (dm,xi) {
                dm.classList.remove("active");
                // non[xi].style.display='none';
            })
            nav[id].classList.add("active");
            // non[id].style.display = 'block';
        }
    })

// banner
    let ban = document.querySelector(".banner");
    let banimg = document.querySelectorAll("ul.banner_img li");
    let left = document.querySelector('.banner_left');
    let right = document.querySelector('.banner_right');
    let banner=document.querySelector(".baner_nav");
    let btn = document.querySelectorAll(".banner_button span");
    let t = 0;
    let flag = true;
    function name() {
        t++;
        if (t == banimg.length) {
            t = 0;
        }
        banimg.forEach(function (value,xia) {
            animate(value,{opacity:0},2000);
            value.classList.remove("z");
            btn[xia].classList.remove("active");
        })
        animate(banimg[t],{opacity:1},2000,function () {
            flag = true;
        });
        banimg[t].classList.add("z");
        btn[t].classList.add("active");
    }
    let time = setInterval(name, 2500);
    ban.onmouseover = function () {
        clearInterval(time);
    }
    ban.onmouseout = function () {
        time = setInterval(name,2000);
    }
    right.onclick = function () {
        if(!flag){
            return;
        }
        flag = false;
        name();
    }
    left.onclick = function () {
        if(!flag){
            return;
        }
        flag = false;
        t--;
        if (t < 0) {
            t = banimg.length - 1;
        }
        banimg.forEach(function (value) {
            animate(value,{opacity:0},2000);
        })
        animate(banimg[t],{opacity:1},2000,function () {
            flag = true;
        });
    }
    // 按键
    btn.forEach(function (dom,ind) {
        dom.onclick=function () {
            if(!flag){
                return;
            }
            flag = false;
            btn.forEach(function (va,i) {
                va.classList.remove("active");
                animate(banimg[i],{opacity:0},2000);
            })
            btn[ind].classList.add("active");
            animate(banimg[ind],{opacity:1},2000,function () {
                flag = true;
            });
            t = ind;
        }
    })
// banner选项卡
    let bb = document.querySelectorAll(".n_w");
    // console.log(bb);
    let cc = document.querySelectorAll(".banner_none");
    // console.log(cc);
    bb.forEach(function (vl,idn) {
        vl.onmousemove = function(){
            bb.forEach(function (vv,ii) {
                vv.classList.remove("active");
                cc[ii].style.display = "none";
            })
            bb[idn].classList.add("active");
            bb[idn].style.background = "#ff6700";
            cc[idn].style.display = "block";
        }
        vl.onmouseout = function(){
            bb.forEach(function (vv,ii) {
                vv.classList.remove("active");
                cc[ii].style.display = "none";
            })
            bb[idn].classList.remove("active");
            cc[idn].style.display = "none";
            bb[idn].style.background = "none";
        }
    })


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
