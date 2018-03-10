

window.onload=function () {
//购物车
    let gouwu = document.querySelector(".header_gouwu");
    let gouwu_box = document.querySelector(".gouwu_box");
    gouwu.onmouseover =function () {
        gouwu.classList.add("active");
        animate(gouwu_box,{height:98,overflow:"none"},500)
    }
    gouwu.onmouseout =function () {
        gouwu.classList.remove("active");
        animate(gouwu_box,{height:0,overflow:"hidden"},100)
    }


// 选项卡
    let nav_word = document.querySelector(".nav_word");
    console.log(nav_word);
    let non = document.querySelector(".nav_xuan");
    console.log(non);
    nav_word.onmouseover = function () {
        animate(non,{height:229,overflow:"none",borderTop: "1px solid #E0E0E0"},500);
    }
    nav_word.onmouseout = function () {
        animate(non,{height:0,overflow:"hidden",borderTop:"none"},500);
    }
    let nav = document.querySelectorAll(".nav_box");
    console.log(nav);
    let content = document.querySelectorAll(".xuan_center");
    console.log(content);
    nav.forEach(function (vl,ide) {
        vl.onmouseover = function () {
            nav.forEach(function (dm,xi) {
                dm.classList.remove("active");
                content[xi].style.display="none";
            })
            nav[ide].classList.add("active");
            content[ide].style.display="block";
            nav[5].onmousemove = function () {
                animate(non,{height:0,overflow:"none"},200);
            }
            nav[8].onmousemove = function () {
                animate(non,{height:0,overflow:"none"},200);
            }
            nav[9].onmousemove = function () {
                animate(non,{height:0,overflow:"none"},200);
            }
        }
    })

// banner
    let ban = document.querySelector(".banner");
    let banimg = document.querySelectorAll("ul.banner_img li");
    let left = document.querySelector('.banner_left');
    let right = document.querySelector('.banner_right');
    let banner = document.querySelector(".baner_nav");
    let btn = document.querySelectorAll(".banner_button span");
    let t = 0;
    let flag = true;
    function name() {
        t++;
        if (t == banimg.length) {
            t = 0;
        }
        banimg.forEach(function (value, xia) {
            animate(value, {opacity: 0}, 2000);
            value.classList.remove("z");
            btn[xia].classList.remove("active");
        })
        animate(banimg[t], {opacity: 1}, 2000, function () {
            flag = true;
        });
        banimg[t].classList.add("z");
        btn[t].classList.add("active");
    }

    let time = setInterval(name, 5000);
    ban.onmouseover = function () {
        clearInterval(time);
    }
    ban.onmouseout = function () {
        time = setInterval(name, 5000);
    }
    right.onclick = function () {
        if (!flag) {
            return;
        }
        flag = false;
        name();
    }
    left.onclick = function () {
        if (!flag) {
            return;
        }
        flag = false;
        t--;
        if (t < 0) {
            t = banimg.length - 1;
        }
        banimg.forEach(function (value) {
            animate(value, {opacity: 0}, 2000);
        })
        animate(banimg[t], {opacity: 1}, 2000, function () {
            flag = true;
        });
    }
    // 按键
    btn.forEach(function (dom, ind) {
        dom.onclick = function () {
            if (!flag) {
                return;
            }
            flag = false;
            btn.forEach(function (va, i) {
                va.classList.remove("active");
                animate(banimg[i], {opacity: 0}, 2000);
            })
            btn[ind].classList.add("active");
            animate(banimg[ind], {opacity: 1}, 2000, function () {
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
    bb.forEach(function (vl, idn) {
        vl.onmousemove = function () {
            bb.forEach(function (vv, ii) {
                vv.classList.remove("active");
                cc[ii].style.display = "none";
            })
            bb[idn].classList.add("active");
            bb[idn].style.background = "#ff6700";
            cc[idn].style.display = "block";
        }
        vl.onmouseout = function () {
            bb.forEach(function (vv, ii) {
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
    xuan('.title_R .right_title', '.jiadian .jiadian_bottom .jiadian_right');
    xuan('.zhineng .right_word', '#zhineng .shopping_right');
    xuan('.dapei .right_word', '#dapei .shopping_right');
    xuan('.peijian .right_word', '#peijian .shopping_right');
    xuan('.zhoubian .right_word', '#zhoubian .shopping_right');


// 明星单品选项卡
    let danpin = document.querySelectorAll(".danpin_bottom");
    // console.log(danpin);
    let boxx = document.querySelector(".danpin");
    // console.log(boxx);
    let left_j = document.querySelector(".left_jiantou");
    console.log(left_j)
    let right_j = document.querySelector(".right_jiantou");
    // console.log(right_j)
    let now =0;
    let next = 0;
    let flag1 = true;
    let width = parseInt(getComputedStyle(boxx,null).width);
    console.log(width);
    function dan() {
        next = now +1;
        if (next >= danpin.length) {
            next = 0;
        }
        danpin[next].style.left = "100%";
        // 盒子出现
        animate(danpin[now], {left: -width},500);
        // 接下来的盒子出现
        animate(danpin[next], {left: 0}, 500,function () {
            flag1 = true;
        });
        now =next;
    }
    let sh =setInterval(dan,4000);
    boxx.onmouseenter= function () {
        clearInterval(sh)
    }
    boxx.onmouseleave= function () {
        sh =setInterval(dan,4000);
    }
    right_j.onclick =function () {
        if(!flag1){
            return;
        }
        flag1 = false;
        dan();
    }
    left_j.onclick = function () {
        if(!flag1){
            return
        }
        flag1 = false;
        next = now -1;
        if (next < 0) {
            next = danpin.length-1;
        }
        danpin[next].style.left = "-100%";
        // 盒子出现
        animate(danpin[now], {left: width},500,function () {
            flag1 = true;
        });
        // 接下来的盒子出现
        animate(danpin[next], {left: 0}, 500,function () {
            flag1 = true;
        });
        now =next;
    }
// 为你推荐
    let tuijian = document.querySelectorAll(".tuijian_bottom");
    let ttbox = document.querySelector(".tuijian");
    let left_t = document.querySelector(".left_tuijiantou");
    let right_t = document.querySelector(".right_tuijiantou");
    let now1 =0;
    let next1 = 0;
    let flag2 = true;
    let kuan = parseInt(getComputedStyle(ttbox,null).width);
    console.log(width);
    function tui() {
        next1 = now1 +1;
        if (next1 >= tuijian.length) {
            next1 = 0;
        }
        tuijian[next1].style.left = "100%";
        // 盒子出现
        animate(tuijian[now1], {left: -kuan},500);
        // 接下来的盒子出现
        animate(tuijian[next1], {left: 0}, 500,function () {
            flag2 = true;
        });
        now1 =next1;
    }
    let shij =setInterval(tui,4000);
    ttbox.onmouseenter= function () {
        clearInterval(shij)
    }
    ttbox.onmouseleave= function () {
        shij =setInterval(tui,4000);
    }
    right_t.onclick =function () {
        if(!flag2){
            return;
        }
        flag2 = false;
        tui();
    }
    left_t.onclick = function () {
        if(!flag2){
            return
        }
        flag2 = false;
        next1 = now1 -1;
        if (next1 < 0) {
            next1 = tuijian.length-1;
        }
        tuijian[next1].style.left = "-100%";
        // 盒子出现
        animate(tuijian[now1], {left: kuan},500,function () {
            flag2 = true;
        });
        // 接下来的盒子出现
        animate(tuijian[next1], {left: 0}, 500,function () {
            flag2 = true;
        });
        now1 =next1;
        left_t.style.color = "#B0B0B2";
    }

//     内容
    let hezi = document.querySelectorAll(".neirong_box");
    function feng(hezi) {
        // 要遍历的盒子
        let neirong = hezi.querySelectorAll(".neirong_bot .neirong_box .neirong_aa");
        // console.log(neirong);
        // 按钮
        let bt = hezi.querySelectorAll(".neirong_box .neirong_button .button_dot");
        // console.log(bt);
        // 两个初始值
        let now = 0;
        let next = 0;
        // 获取总盒子的宽
        let width = parseInt(getComputedStyle(hezi, null).width);
        // console.log(width);
        // 开关
        let flag = true;
        function move() {
            // 接下来出现的盒子要在后面放着，所以要在现有的盒子加一，下标
            next = now + 1;
            // 判断接下来出来的盒子>=内容的总长度的时候就等于0；接下来的图片就出现了
            if (next >= neirong.length) {
                next = 0;
            }
            neirong[next].style.left = "100%";
            // 盒子出现
            animate(neirong[now], {left: -width}, 2000);
            // 接下来的盒子出现
            animate(neirong[next], {left: 0}, 2000,function () {
                flag = true;
            });
            // 按钮
            bt[now].classList.remove("active");
            bt[next].classList.add("active");
            now = next;
        }
        let ll = hezi.querySelector(".neirong_box .n_left");
        // console.log(ll);
        let rr = hezi.querySelector(".neirong_box .n_right");
        // console.log(rr);
        rr.onclick = function () {
            if(!flag){
                return
            }
            flag = false;
            move();
        }
        ll.onclick = function () {
            if(!flag){
                return
            }
            flag = false;
            // 接下来出现的盒子要在前面放着，所以要在现有的盒子减一，下标
            next = now - 1;
            // 判断接下来出来的盒子<0（下标）时，接下来出现的盒子=内容的总长度-1（下标）；接下来的盒子就从右出现了
            if (next < 0) {
                next = neirong.length - 1;
            }
            neirong[next].style.left = "-100%";
            // 盒子出现
            animate(neirong[now],{left:width},2000);
            // 接下来的盒子出现
            animate(neirong[next], {left: 0}, 2000,function () {
                flag = true;
            });
            now = next;
        }
        // 遍历按钮
        for(let i =0;i<bt.length;i++){
            // 遍历按钮点击事件
            bt[i].onclick = function () {
                if(!flag){
                    return
                }
                flag = false;
                // 如果按钮[i]<现在盒子的位置，则接下来的盒子等于按钮n,
                if(i<now){
                    next = i;
                    neirong[next].style.left = "-100%";
                    // 盒子出现
                    animate(neirong[now], {left: width}, 2000);
                    // 接下来的盒子出现
                    animate(neirong[next], {left: 0}, 2000,function () {
                        flag = true;
                    });
                    // 按钮
                    bt[now].classList.remove("active");
                    bt[next].classList.add("active");
                    now =next;
                }else if(i>now){
                    next = i;
                    neirong[next].style.left = "100%";
                    // 盒子出现
                    animate(neirong[now], {left: -width}, 2000);
                    // 接下来的盒子出现
                    animate(neirong[next], {left: 0}, 2000,function () {
                        flag = true;
                    });
                    // 按钮
                    bt[now].classList.remove("active");
                    bt[next].classList.add("active");
                    now =next;
                }

            }
        }
    }
    hezi.forEach(function (vall,indd) {
        feng(vall);
    })
//     let t = 0;
//     rights.onclick = function () {
//         lickFn()
//     };
//     lefts.onclick = function () {
//         lickFn(2)
//     };
//     function lickFn(wo = 1) {
//         if (wo === 1) {
//             t++;
//             if (t === dianObj.length) {
//                 t = dianObj.length - 1
//             }
//         } else if (wo === 2) {
//             t--;
//             if (t === -1) {
//                 t = 0;
//             }
//         }
//         console.log(wo);
//         for (let i = 0; i < dianObj.length; i++) {
//             dianObj[i].classList.remove("active");
//         }
//         dianObj[t].classList.add("active");
//         contents.style.marginLeft = -296 * t + "px";
//     }
// }
// let arr= document.querySelectorAll(".content-btom .content-list");
// for(let i = 0;i<arr.length;i++){
//     bao(arr[i]);
// }
// }

}
