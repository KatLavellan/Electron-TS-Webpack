import { app, BrowserWindow } from "electron";
import path from "path";

app.on("ready",()=>{

    let preload = path.join(__dirname, '/preload/preload.js');

    console.log(preload)
    let Window = new BrowserWindow({
        width: 1600,
        height: 900,
        center: true,
        resizable: true,
        movable : true,
        minimizable : true,
        maximizable : true,
        closable : true,
        title: "Application",
        webPreferences: {
            preload: preload
        }

    });

    Window.loadURL("http://localhost:7473/index.html");
    Window.webContents.openDevTools();
    Window.on("ready-to-show", ()=>{

    })

    Window.webContents.ipc.on("start",()=>{
        Window.webContents.send("DBData", "a lot of data");
    })

});

