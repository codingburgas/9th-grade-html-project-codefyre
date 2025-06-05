const items = document.querySelectorAll(".items");
 
items.forEach((item,i)=>{
    item.addEventListener('click', ()=>{
        document.querySelector('.active').classList.remove('active');
        item.classList.add('active');
 
        document.querySelector('.pointer').style.left = `${i * 98 + 34}px`
    })
})