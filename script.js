console.log("oiiiaa")
let date1 = new Date("04/12/2020")
let date2 = new Date(Date.now())
console.log(date1,date2)
let timeDiff = Math.abs(date2 - date1);
let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
console.log(diffDays)

let body = document.querySelector('body')
let valor = document.querySelector('#dias')

valor.innerText =  `${diffDays} dias ${date2.getHours()}h:${date2.getMinutes()}m:${date2.getSeconds()}s:${date2.getMilliseconds()}ms `

addEventListener('click',function(ev){
   let img =ev.target.tagName

   if(img=='IMG'){
    console.log('oiiiii')
   }

})
