# 🚀 Quick Start Guide - Valentine's Day Website

## For Beginners - Step by Step

### What You Need First
1. **Node.js** - Download from https://nodejs.org (choose LTS version)
   - This includes npm (node package manager)
   - After installing, restart your computer

### How to Run the Website

#### Windows:
1. Open the `valentines-teana` folder
2. Hold `Shift` and right-click in the folder
3. Select "Open PowerShell window here" or "Open in Terminal"
4. Type these commands one at a time:
   ```
   npm install
   npm run dev
   ```
5. Wait for the browser to open automatically!

#### Mac:
1. Open the `valentines-teana` folder
2. Right-click and select "New Terminal at Folder"
3. Type these commands one at a time:
   ```
   npm install
   npm run dev
   ```
4. Wait for the browser to open automatically!

#### Linux:
1. Navigate to the folder in terminal:
   ```bash
   cd path/to/valentines-teana
   ```
2. Run these commands:
   ```bash
   npm install
   npm run dev
   ```
3. Open the URL shown in your terminal (usually http://localhost:3000)

### What Happens When You Run It?

1. **npm install** 
   - Downloads all needed packages (React, Framer Motion, etc.)
   - Only needs to be done once
   - Creates a `node_modules` folder (this is normal!)

2. **npm run dev**
   - Starts the development server
   - Opens your browser automatically
   - Shows the website at http://localhost:3000
   - Keep this terminal window open while viewing

### To Stop the Server
- Press `Ctrl + C` in the terminal window

### To Run It Again Later
- You only need to run `npm run dev`
- No need to install again!

### Common Issues

**"npm is not recognized"**
- You need to install Node.js first
- Restart your computer after installing

**Port 3000 is already in use**
- Another program is using port 3000
- Stop other servers or use a different port

**Nothing happens after npm run dev**
- Manually open: http://localhost:3000

### Making Changes

Want to customize the website?
1. Open the project folder in any code editor (VS Code recommended)
2. Make changes to files in the `src` folder
3. Save the file
4. The browser will automatically refresh!

### Sharing the Website

To create files you can share:
1. Run: `npm run build`
2. Find the files in the `dist` folder
3. Upload to any web hosting service

---

**Need Help?**
- Check the full README.md for detailed information
- All code is well-commented for easy understanding

**Enjoy! 💖**
