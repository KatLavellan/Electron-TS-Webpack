import "./index.scss";

//console.log(window.preload);
window.preload.on("DBData", (data : string)=>{
    console.log("receiving DBData");
    console.log(data);
});

window.preload.start();
