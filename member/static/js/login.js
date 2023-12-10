function changeContent() {
    var button = document.getElementById("btn1");
    var button1 = document.getElementById("btn2");
    var targetElement = document.querySelector('.deng-an');
    if (button.innerHTML == '注册'){
        targetElement.style.float = 'right'; // 修改背景色为红色
        button.innerHTML = '登录';
        button1.value = '注册';
    }else {
        targetElement.style.float = 'left'; // 修改背景色为红色
        button.innerHTML = '注册';
        button1.value = '登录';

    }
}