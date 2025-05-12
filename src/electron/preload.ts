import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("SnippetAPI", {
  readSnippet: () => ipcRenderer.invoke("read-snippet"),
  writeSnippet: (data: Snippet[]) => ipcRenderer.invoke("write-snippet", data),
});
