function changeContent() {
    var username = document.getElementsByName('username')[0].value;
    var password = document.getElementsByName('password')[0].value;
    var err = document.getElementById("err");

    console.log(username + 'user');
    console.log(password + 'pass');

    if (username == '13082833919' && password == 'yy20210730..') {
        window.location.href = '../../templates/home/home.html'
    } else {
        err.innerHTML = '账号或密码错误，请仔细查看';
        document.getElementById('overlay').style.display = 'block'
        document.getElementById('myModal').style.display = 'block'
    }
}

function closeModal() {
    var ove = document.getElementById('overlay');
    var modal = document.getElementById("myModal");
    ove.style.display = 'none';
    modal.style.display = "none";
}