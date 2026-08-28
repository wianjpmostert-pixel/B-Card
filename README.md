# Virtual Business Card

This is a small static site you can host on GitHub Pages to serve a virtual business card. It includes:

- A simple contact card UI (`index.html`)
- vCard generation and download (`.vcf`) via JavaScript
- A QR code that points to the hosted page

Quick start

1. Edit `script.js` and replace the fields in the `contact` object with your info.
2. Add an avatar image named `avatar.png` (optional).
3. Initialize a git repo, push to GitHub, then enable GitHub Pages on the repository (Settings → Pages → Deploy from branch `main` or `gh-pages`).

Commands example:

```bash
git init
git add .
git commit -m "Add virtual business card"
git remote add origin git@github.com:youruser/your-repo.git
git push -u origin main
# Then enable GitHub Pages in repo Settings and set the site to serve from `main` or `gh-pages` branch
```

Samsung Wallet (overview)

Samsung Wallet supports 'passes' (offers, loyalty cards, tickets, etc.). To add a custom Wallet pass for a business card you will usually:

1. Sign up as a Samsung Wallet developer at the Samsung developer portal.
2. Create a Wallet pass template (JSON + assets) according to Samsung's pass specification.
3. Sign the pass package with your Samsung-issued credentials (required for distribution).
4. Host the signed pass package and provide an "Add to Wallet" URL or deep link from your site.

Important: The signing/issuance steps require credentials from Samsung and cannot be performed purely client-side. See Samsung's developer docs for exact package format and signing steps:

- https://developer.samsung.com/samsung-wallet

Sample approach

- Use this static site as the public-facing card and vCard download.
- For a Wallet pass, prepare a server-side workflow (or use Samsung's console) to generate and sign pass packages and serve an endpoint like `/passes/mycard.wlt`.
- Link that endpoint from this site with an "Add to Samsung Wallet" button.

If you want, I can:

- Generate a sample Samsung Wallet pass JSON template (you'll still need to register and sign it), or
- Help set up a minimal server to produce signed passes (requires your Samsung credentials).

Passes and pushing

- Sample pass templates are in the `passes/` folder. Edit `passes/sample_pass.json` and add assets (`icon.png`, `logo.png`) before signing.
- A convenience PowerShell script to commit and push changes is `push_to_github.ps1`. Run it from the repository root:

```powershell
./push_to_github.ps1 -remote origin -branch main -message "Add pass template and site"
```

If you prefer, run the git commands manually instead of the script.
