function init() {
   let date1 = new Date("04/12/2020");
   let date2 = new Date(Date.now());

   let timeDiff = Math.abs(date2 - date1);
   let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

   let valor = document.querySelector("#dias");
   let seconds =
      date2.getSeconds() < 10 ? `0${date2.getSeconds()}` : date2.getSeconds();
   let minutes =
      date2.getMinutes() < 10 ? `0${date2.getMinutes()}` : date2.getMinutes();
   let hours = date2.getHours() < 10 ? `0${date2.getHours()}` : date2.getHours();
   valor.innerText = `${diffDays} dias ${hours}h:${minutes}m:${seconds}s `;
}
//time real time
setInterval(() => {
   init();
}, 1000);

addEventListener("click", function (ev) {
   let img = ev.target.tagName;

   if (img == "IMG") {
      console.log("oiiiii");
   }
});
