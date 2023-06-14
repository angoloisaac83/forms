let sub = document.getElementById('sub')
let valid = document.getElementById('valid')
let ins = document.getElementById('in')
let b = document.querySelector('b')
function dis(){
    window.location.href = '/index.html'
}
    sub.addEventListener('click',(e)=>{
        e.preventDefault()
        if (ins.value == '') {
            valid.style.display = 'flex'
            ins.style.borderColor = 'red'
        } else{
            window.location.href = '/sucess.html'
           
        }
    })
