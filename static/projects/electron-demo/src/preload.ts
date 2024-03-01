// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge } from "electron";
import fs from "node:fs";

contextBridge.exposeInMainWorld("versions", {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
});

window.addEventListener("DOMContentLoaded", () => {
  fs.readdir("/", {}, (err, files) => {
    document.getElementById("files").innerHTML = files.join(" - ");
    console.log(files);
  });
});
