import { contextBridge, ipcRenderer } from "electron";

// Expose une API sécurisée dans le renderer via window.SnippetAPI
contextBridge.exposeInMainWorld("SnippetAPI", {
  // Lit les snippets depuis le fichier via le main process
  readSnippet: () => ipcRenderer.invoke("read-snippet"),

  // Écrit les snippets dans le fichier
  writeSnippet: (data: Snippet[]) => ipcRenderer.invoke("write-snippet", data),
});
