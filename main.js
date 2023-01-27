const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 530,
    height: 459,
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})