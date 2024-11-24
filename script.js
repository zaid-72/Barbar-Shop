function fun1(){
    document.querySelector('.side_bar').classList.toggle("one")
    document.querySelector('.main').classList.add('two')
    document.querySelector('.main').classList.remove('three')
    document.querySelector('.container5').classList.add('f')
    document.querySelector('#ach').style = "display:none;"
    document.querySelector('#ach2').style = "display:block;"
    // document.querySelector('.main').classList.add('three')
}

function fun2(){
    document.querySelector('.side_bar').classList.remove('one')
    document.querySelector('.main').classList.remove('two')
    document.querySelector('.main').classList.add('three')
    document.querySelector('.container5').classList.remove('f')
    document.querySelector('#ach').style = "display:block;"
    document.querySelector('#ach2').style = "display:none;"
}