import { MyLib } from "./lib.js";
console.log(`Printing ${MyLib.Hello}`);

chrome.runtime.onInstalled.addListener(() => {
  chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true });
});
