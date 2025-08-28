# 🔄 RTL/LTR Toggle Bookmarklet

<div dir="rtl" style="text-align: right; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 15px; color: white; margin: 20px 0;">
  <h3>🔄 החלפת כיוון טקסט RTL/LTR</h3>
  <p>זהו כלי פשוט וחזק להחלפת כיוון טקסט בין ימין לשמאל (RTL) ומשמאל לימין (LTR) בכל דף אינטרנט.</p>
</div>

<div dir="ltr" style="text-align: left; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 15px; color: white; margin: 20px 0;">
  <h3>🔄 RTL/LTR Text Direction Toggle</h3>
  <p>A simple and powerful tool to toggle text direction between right-to-left (RTL) and left-to-right (LTR) on any webpage.</p>
</div>

## ✨ Features

- 🎯 **One-click toggle** between RTL and LTR text direction
- 🌍 **Works on any webpage** - no installation required
- 💾 **Remembers your preference** using localStorage
- 🎨 **Beautiful visual feedback** with smooth animations
- 📱 **Responsive design** - works on all devices
- 🔒 **Privacy-focused** - no data collection
- 🚀 **Lightning fast** - instant direction switching

## 🎯 Demo Examples

### RTL (Right-to-Left) Sample:
<div dir="rtl" style="text-align: right; background: #f8f9fa; padding: 20px; border-radius: 10px; border-right: 4px solid #667eea; margin: 15px 0;">
  <h4>טקסט בעברית עם מספרים 123 ו-English words</h4>
  <p>זהו טקסט לדוגמה להדגמת כיוון RTL. הטקסט כולל מספרים 456 ו-English words כדי להדגים את ההבדל. זה עובד עם כל טקסט כולל מספרים 789 ו-English words.</p>
  <p>הטקסט מתחיל מימין וממשיך לשמאל, כפי שמצופה בעברית, ערבית, ושאר השפות ה-RTL.</p>
</div>

### LTR (Left-to-Right) Sample:
<div dir="ltr" style="text-align: left; background: #f8f9fa; padding: 20px; border-radius: 10px; border-left: 4px solid #667eea; margin: 15px 0;">
  <h4>English text with numbers 123 and Hebrew words עברית</h4>
  <p>This is a sample text to demonstrate LTR direction. The text includes numbers 456 and Hebrew words עברית to show the difference. It works with any text including numbers 789 and Hebrew words עברית.</p>
  <p>The text starts from the left and continues to the right, as expected in English, French, and other LTR languages.</p>
</div>

## 🚀 Quick Start

### Method 1: Drag & Drop (Recommended)
1. **Visit** the [demo page](https://neuron-vision.github.io/rtl-bookmarklet)
2. **Drag** the "🔄 החלפת RTL" button to your bookmarks bar
3. **Navigate** to any webpage where you want to toggle text direction
4. **Click** the bookmarklet in your bookmarks bar
5. **Watch** the magic happen! ✨

### Method 2: Manual Installation
1. **Create a new bookmark** in your browser
2. **Set the URL** to the JavaScript code below
3. **Save** and use on any webpage

```javascript
javascript:(function(){var d=document,b=d.body||d.documentElement,s=b.style,c=s.direction,r='rtl',l='ltr';if(c===r){s.direction=l;s.textAlign='left';localStorage.setItem('rtl-toggle','ltr');}else{s.direction=r;s.textAlign='right';localStorage.setItem('rtl-toggle','rtl');}var n=d.createElement('div');n.style.cssText='position:fixed;top:20px;right:20px;background:#667eea;color:white;padding:15px 25px;border-radius:30px;z-index:99999;font-family:Arial;font-size:16px;font-weight:bold;box-shadow:0 8px 25px rgba(0,0,0,0.3);';n.textContent='Direction: '+(s.direction===r?'RTL ←':'LTR →');d.body.appendChild(n);setTimeout(function(){n.remove();},2500);})();
```

## 🎨 Visual Examples

### Before Toggle (LTR):
```
Hello World! This is English text.
שלום עולם! זהו טקסט בעברית.
```

### After Toggle (RTL):
```
Hello World! This is English text.
שלום עולם! זהו טקסט בעברית.
```

Notice how the Hebrew text now flows properly from right to left!

## 🌟 Use Cases

- **Bilingual websites** - Switch between language directions
- **Reading Arabic/Hebrew content** on LTR websites
- **Testing RTL layouts** during development
- **Accessibility** - Better reading experience for RTL language users
- **Educational purposes** - Learning about text direction differences

## 🛠️ Technical Details

### How It Works
1. **Detects current direction** of the webpage
2. **Toggles between RTL and LTR** using CSS `direction` property
3. **Adjusts text alignment** for optimal reading
4. **Saves preference** in browser's localStorage
5. **Shows visual notification** with current direction

### Browser Support
- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

### CSS Properties Modified
```css
body {
  direction: rtl; /* or ltr */
  text-align: right; /* or left */
}
```

## 📁 Project Structure

```
rtl-bookmarklet/
├── hosting/
│   ├── index.html          # Main demo page
│   ├── src/
│   │   ├── RTL_Bookmarklet.js           # Original bookmarklet
│   │   └── Improved_RTL_Bookmarklet.js  # Enhanced version
│   ├── package.json        # Dependencies
│   └── favicon.ico         # Project icon
├── firebase.json           # Firebase hosting config
├── .firebaserc            # Firebase project config
└── README.md              # This file
```

## 🚀 Deployment

This project is deployed using Firebase Hosting:

```bash
# Install dependencies
npm install

# Deploy to Firebase
firebase deploy
```

**Live Demo**: [https://neuron-vision.github.io/rtl-bookmarklet](https://neuron-vision.github.io/rtl-bookmarklet)

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch
3. **Make** your changes
4. **Test** thoroughly
5. **Submit** a pull request

### Development Setup
```bash
git clone https://github.com/neuron-vision/rtl-bookmarklet.git
cd rtl-bookmarklet/hosting
npm install
npm run dev
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Hebrew and Arabic language communities** for inspiration
- **Firebase** for hosting
- **Vite** for the development environment
- **All contributors** who help improve this tool

## 📞 Support

If you have questions or need help:

- **GitHub Issues**: [Create an issue](https://github.com/neuron-vision/rtl-bookmarklet/issues)
- **Email**: rtl@neuron.vision
- **Demo**: [Try it live](https://neuron-vision.github.io/rtl-bookmarklet)

---

<div style="text-align: center; margin-top: 40px; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 15px; color: white;">
  <h3>🌟 Made with ❤️ for the RTL language community</h3>
  <p>Supporting better reading experiences across the web</p>
</div>
