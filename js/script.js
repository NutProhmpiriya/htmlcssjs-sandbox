const workBtn = document.querySelector('#work-btn');
workBtn.addEventListener('click', () => {
    let final = 0;
    for(let i = 0; i < 1000000; i++) {
        final += i;
        console.log(final);
    }
    document.querySelector("#output").innerHTML = final;
})

const hahaBtn = document.querySelector("#btn");
hahaBtn.addEventListener('click', () => {

   document.querySelector("#random").innerHTML = "random"
})