import path from "node:path";
import fs from "node:fs";
import started from "electron-squirrel-startup";
import { app, screen, BrowserWindow } from "electron";
import { ipcMain } from "electron";

const SnippetFilePath = path.join(app.getPath("userData"), "SnippetObject.json");

ipcMain.handle("read-snippet", async () => {
  if (!fs.existsSync(SnippetFilePath)) {
    fs.writeFileSync(SnippetFilePath, JSON.stringify([]));
  }
  return JSON.parse(fs.readFileSync(SnippetFilePath).toString());
});

ipcMain.handle("write-snippet", async (event, data) => {
  fs.writeFileSync(SnippetFilePath, JSON.stringify(data, null, 2));
  return true;
});

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
      nodeIntegration: true,
      contextIsolation: true,
    },
  });

  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
  }
};

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  app.quit();
});
