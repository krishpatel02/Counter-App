const count = document.querySelector('.count')
const minusBtn = document.querySelector('.minus-btn')
const plusBtn = document.querySelector('.plus-btn')
const changeby = document.querySelector('.changeby')
const resetBtn = document.querySelector('.reset-btn')
console.log(count);
minusBtn.addEventListener('click', () => {
    const changebyvalue = parseInt(changeby.value)
    const countValue = parseInt(count.innerText)
    count.innerText = countValue - changebyvalue ;
});

plusBtn.addEventListener('click', () => {
    const countValue = parseInt(count.innerText)
    const changebyvalue = parseInt(changeby.value)
    count.innerText = countValue + changebyvalue ;
});

resetBtn.addEventListener('click', () =>{
    count.innerText= 0
})
