// -------sec3最新/熱門變更
document.addEventListener('DOMContentLoaded', function () {
    // 初始化Swiper
    var swiper = new Swiper('.mySwiper', {
        // Swiper的相關配置
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 50,
            },
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // 獲取所有的收音機按鈕
    var radioButtons = document.querySelectorAll('.btn-check');

    // 將每個按鈕都設置一個change事件監聽器
    radioButtons.forEach(function (radio) {
        radio.addEventListener('change', function () {
            // 確認該按鈕是否被選中
            if (this.checked) {
                // 獲取選中按鈕的值
                var value = this.value;
                // 根據值改變Swiper的內容
                changeSwiperContent(value);
            }
        });
    });

    // 定義一個函數，根據所選的值改變Swiper的內容
    function changeSwiperContent(value) {
        // 獲取Swiper的wrapper元素
        var swiperWrapper = document.querySelector('.swiper-wrapper');

        // 清空Swiper的內容
        swiperWrapper.innerHTML = '';

        swiper.destroy();

        // 根據不同的值，添加不同的內容
        if (value === 'new') {
            // 添加最新商品的內容
            swiperWrapper.innerHTML += `
            <div class="swiper-slide">
            <div class="card" style="width: 18rem;">
            <img src="./img/earphone1.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>
            <div class="swiper-slide">
            <div class="card" style="width: 18rem;">
            <img src="./img/earphone2.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>
            <div class="swiper-slide">
            <div class="card" style="width: 18rem;">
            <img src="./img/earphone3.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>
            <div class="swiper-slide">
            <div class="card" style="width: 18rem;">
            <img src="./img/earphone4.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>
            <div class="swiper-slide">
            <div class="card" style="width: 18rem;">
            <img src="./img/keyboard1.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>
            <div class="swiper-slide">
            <div class="card" style="width: 18rem;">
            <img src="./img/keyboard2.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>
            <div class="swiper-slide">
            <div class="card" style="width: 18rem;">
            <img src="./img/keyboard3.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>
            <div class="swiper-slide">
            <div class="card" style="width: 18rem;">
            <img src="./img/mouse1.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>
            <div class="swiper-slide">
            <div class="card" style="width: 18rem;">
            <img src="./img/mouse2.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>
        `;
        } else if (value === 'popular') {
            // 添加熱門商品的內容
            swiperWrapper.innerHTML += `
            <div class="swiper-slide">
            <div class="card" style="width: 18rem;">
            <img src="./img/mouse3.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>
            <div class="swiper-slide">
            <div class="card" style="width: 18rem;">
            <img src="./img/mouse4.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>
            <div class="swiper-slide">
            <div class="card" style="width: 18rem;">
            <img src="./img/mouse1.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>
            <div class="swiper-slide">
            <div class="card" style="width: 18rem;">
            <img src="./img/mouse2.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>
            <div class="swiper-slide">
            <div class="card" style="width: 18rem;">
            <img src="./img/keyboard2.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>
            <div class="swiper-slide">
            <div class="card" style="width: 18rem;">
            <img src="./img/keyboard3.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>
            <div class="swiper-slide">
            <div class="card" style="width: 18rem;">
            <img src="./img/keyboard1.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>
            <div class="swiper-slide">
            <div class="card" style="width: 18rem;">
            <img src="./img/earphone3.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>
            <div class="swiper-slide">
            <div class="card" style="width: 18rem;">
            <img src="./img/earphone1.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>
        `
        };
        // 更新Swiper
        swiper = new Swiper('.mySwiper', {
            // Swiper的相關配置
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                },
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }
});

// -------scrollToTopButton
$(document).ready(function () {
    const $scrollToTopButton = $('#scrollToTopButton');

    // 監聽滾動事件
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            // 如果滾動超過 100px，顯示回到頂部按鈕
            $scrollToTopButton.show();
        } else {
            // 否則隱藏回到頂部按鈕
            $scrollToTopButton.hide();
        }
    });

    // 點擊回到頂部按鈕時，滾動到頂部
    $scrollToTopButton.click(function () {
        $('html, body').animate({ scrollTop: 0 }, 200);
    });
});

// -------member
var x = document.getElementById("login");
var y = document.getElementById("signup");
var z = document.getElementById("btn");

function signup() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "0";
    z.style.borderRadius = "10px 0 10px 0";
};

function login() {
    x.style.left = "50px";
    y.style.left = "550px";
    z.style.left = "250px";
    z.style.borderRadius = "0 10px 0 10px";
};

// -------產品點選換圖
$(".sec-img").click(function () {
    var N = $(this).attr("id").substr(2);
    $(".main-img").attr("src", "img/keyboard" + N + ".jpg");
});