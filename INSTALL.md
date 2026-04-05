# DeFi Wallet — Installation Guide

## What You Have (4 files)
```
index.html   ← Main wallet app (all logic, CSS, JS)
manifest.json ← Makes it installable as a PWA
sw.js         ← Service worker (offline support)
icon.svg      ← App icon (fox + wallet)
```

---

## Option A: Deploy to GitHub Pages (FREE, recommended)

### Step 1 — Create a GitHub account
Go to https://github.com and sign up if you don't have an account.

### Step 2 — Create a new repository
1. Click the **+** button top right → **New repository**
2. Name it: `defi-wallet` (or anything you want)
3. Set it to **Public**
4. Do NOT check "Add a README"
5. Click **Create repository**

### Step 3 — Upload your files
1. On the empty repo page, click **uploading an existing file**
2. Drag and drop ALL 4 files:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `icon.svg`
3. Scroll down, click **Commit changes**

### Step 4 — Enable GitHub Pages
1. Go to **Settings** (tab at top of repo)
2. Scroll down to **Pages** in the left sidebar
3. Under **Source**, select **Deploy from a branch**
4. Branch: `main` → Folder: `/ (root)`
5. Click **Save**

### Step 5 — Get your URL
- Wait 1-2 minutes
- Your wallet will be live at:
  `https://YOUR-USERNAME.github.io/defi-wallet/`
- GitHub will show you the exact URL in the Pages settings

---

## Option B: Deploy to Vercel (Fastest, 30 seconds)

### Step 1 — Go to Vercel
Visit https://vercel.com and sign up with GitHub.

### Step 2 — Deploy
1. Click **Add New → Project**
2. Or go directly to https://vercel.com/new
3. Click **Browse** and select your folder with the 4 files
4. Click **Deploy**
5. Done — live in ~30 seconds

---

## Option C: Deploy to Netlify (Drag & Drop)

1. Go to https://netlify.com → Sign up
2. Drag your entire folder onto the deploy zone at:
   https://app.netlify.com/drop
3. That's it. Live immediately with a `.netlify.app` URL.

---

## Install on iPhone as PWA (Home Screen App)

⚠️ **Must be on HTTPS** — GitHub Pages, Vercel, or Netlify all work. Does NOT work on `file://`.

### Steps:
1. Open **Safari** on your iPhone (must be Safari, not Chrome)
2. Go to your live URL (e.g. `https://yourname.github.io/defi-wallet/`)
3. Tap the **Share button** (box with arrow pointing up)
4. Scroll down and tap **Add to Home Screen**
5. Name it `DeFi Wallet` → tap **Add**
6. The wallet icon now appears on your home screen
7. Open it — it runs fullscreen like a native app

---

## Install on Android as PWA

1. Open **Chrome** on Android
2. Go to your live URL
3. Chrome will show a banner: **"Add to Home Screen"** — tap it
4. Or: tap the 3-dot menu → **Add to Home Screen**
5. Tap **Add**

---

## Install on Desktop (Chrome/Edge)

1. Open your live URL in Chrome or Edge
2. Look for the **install icon** (⊕) in the address bar right side
3. Click it → **Install**
4. The wallet opens as a standalone desktop app

---

## Using the Secret Admin Dashboard

**Desktop:** Press `Ctrl + Shift + A` anywhere in the wallet

**iPhone/Mobile:** Tap the MetaMask fox logo **5 times quickly** (within 3 seconds)

**Password:** `synth2024`

### What you can control:
- ✅ Wallet address and network name
- ✅ Show/hide the "Balance Verified ✓" badge
- ✅ Token quantities (prices auto-fetched from Binance)
- ✅ Add/remove tokens
- ✅ DeFi pool amounts, APY, lock dates
- ✅ Add/remove DeFi pools
- ✅ KYC name, phone, email

⚠️ **Note on Firefox:** `Ctrl+Shift+A` opens Firefox Add-ons manager. Use the 5-tap fox method instead, or use Chrome.

---

## Live Price Updates

The wallet auto-fetches live prices from Binance every **30 seconds**. Requires internet.

- ETH, BTC, LINK, BNB — live from `api.binance.com`
- USDT, USDC, DAI — hardcoded at $1.00
- Total portfolio = sum of (qty × live price) + DeFi locked amounts

If Binance API is unavailable, the last cached prices are used silently.

---

## How the Send Flow Works

1. Click **↑ Send**
2. Select token, enter amount, paste recipient address
3. Click **Review Transaction** → see gas fee preview
4. Click **Confirm & Send 🚀**
5. 2.5 second broadcast animation
6. **Success screen** with transaction hash + confetti
7. Token balance is automatically reduced
8. Transaction appears in the **Activity** tab

---

## How the Swap Flow Works

1. Click **⇄ Swap**
2. Select from/to tokens, enter amount
3. Live exchange rate shown using Binance prices
4. Click **Preview Swap** → confirm screen
5. 2 second animation → **Success + confetti**
6. Both token balances updated

---

## DeFi Section

- Start date: **February 3, 2026**
- End date: **February 3, 2027** (exactly 1 year)
- Live countdown timer ticking every second
- Progress bar shows % of lock period elapsed
- Total locked value included in hero balance

---

## Troubleshooting

**"Prices not updating"**
→ Check internet connection. Binance API works on HTTPS only.

**"Admin not opening with Ctrl+Shift+A"**
→ If on Firefox, use the 5-tap fox method. Otherwise make sure you're clicking inside the wallet window first.

**"Can't install on iPhone"**
→ Must use Safari (not Chrome/Firefox). Must be on HTTPS URL.

**"Balance not saving"**
→ Don't open in Private/Incognito mode — localStorage is disabled there.

---

*Made with ❤️ by SYNTH*
