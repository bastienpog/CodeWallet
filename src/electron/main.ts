import path from "node:path";
import fs from "node:fs";
import started from "electron-squirrel-startup";
import { app, screen, BrowserWindow } from "electron";
import { ipcMain } from "electron";

// Chemin du fichier où seront stockés les snippets
const SnippetFilePath = path.join(app.getPath("userData"), "SnippetObject.json");

// Lit les snippets (ou crée un fichier vide s’il n’existe pas)
ipcMain.handle("read-snippet", async () => {
  if (!fs.existsSync(SnippetFilePath)) {
    fs.writeFileSync(SnippetFilePath, JSON.stringify([]));
  }
  return JSON.parse(fs.readFileSync(SnippetFilePath).toString());
});

// Écrit les snippets dans le fichier
ipcMain.handle("write-snippet", async (event, data) => {
  fs.writeFileSync(SnippetFilePath, JSON.stringify(data, null, 2));
  return true;
});

// Quitte l'app si démarrée via Squirrel (Windows)
if (started) {
  app.quit();
}

const createWindow = () => {
  const primaryDisplay = screen.getPrimaryDisplay();
  const { width, height } = primaryDisplay.workAreaSize;

  const mainWindow = new BrowserWindow({
    width,
    height,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  // Charge l'URL de dev ou le fichier HTML en production
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
  }
};

app.whenReady().then(() => {
  createWindow();
});

// Quitte l'application quand toutes les fenêtres sont fermées
app.on("window-all-closed", () => {
  app.quit();
});
