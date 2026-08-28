# Samsung Wallet pass template

This folder contains a sample pass JSON template for a virtual business card. It is a generic template you can adapt for Samsung Wallet.

Important notes:

- Samsung Wallet requires pass packages to be signed with credentials from Samsung. You cannot install an unsigned pass on most devices.
- The JSON structure below is a starting template — consult Samsung's developer docs for the exact keys and packaging requirements:

- https://developer.samsung.com/samsung-wallet

Suggested workflow:

1. Edit `sample_pass.json` with your details and add required asset files (`icon.png`, `logo.png`, etc.).
2. Use Samsung's pass signing tools or developer console to create a signed pass package (typically a `.wlt` file).
3. Host the signed pass on your server (or GitHub Pages) and link to it from your site with an "Add to Samsung Wallet" button.

Example add link (hosted file):

```
https://your-domain.com/passes/yourcard.wlt
```

If you want, I can generate a sample pass asset set and a minimal Node script to bundle and sign locally — but you will still need Samsung developer credentials to sign and distribute passes.
