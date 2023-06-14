let sub = document.getElementById('sub')
let valid = document.getElementById('valid')
let ins = document.getElementById('in')
let b = document.querySelector('b')
function dis(){
    window.location.href = '/src/index.html'
}
    b.textContent = ins.value
    sub.addEventListener('click',(e)=>{
        e.preventDefault()
        if (ins.value == '') {
            valid.style.display = 'flex'
            ins.style.borderColor = 'red'
        } else{
            window.location.href = '/src/sucess.html'
           
        }
    })