// Demo contact (ready-to-view). Edit these fields for your real card.
const contact = {
  fullName: 'Willem Mostert',
  title: 'Electronic & Electrical Engineer : Intern',
  company: 'Institute for Maritime Technology',
  phone: '0124288133',
  email: 'WillemM@imt.co.za',
  address: 'Martello Road Simon’s Town 7975, South Africa'
};

function createAvatarDataUrl(name) {
  const initials = name.split(' ').map(s=>s[0]||'').slice(0,2).join('').toUpperCase();
  const bg = '#0366d6';
  const fg = '#ffffff';
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='256' height='256'>`+
    `<rect width='100%' height='100%' fill='${bg}'/>`+
    `<text x='50%' y='50%' dy='.1em' font-family='Verdana,Segoe UI,Arial' font-size='96' fill='${fg}' text-anchor='middle'>${initials}</text>`+
    `</svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

function init() {
  document.getElementById('name').textContent = contact.fullName;
  document.getElementById('title').textContent = `${contact.title} • ${contact.company}`;
  document.getElementById('phone').textContent = contact.phone;
  document.getElementById('email').textContent = contact.email;
  // display address
  document.getElementById('address').textContent = contact.address;
  const avatar = document.getElementById('avatar');
  if (avatar) {
    // If `avatar.png` fails to load, fall back to generated initials SVG
    avatar.onerror = () => {
      avatar.onerror = null;
      avatar.src = createAvatarDataUrl(contact.fullName);
    };
    // leave `src` as the HTML-provided `avatar.png` so Pages-served image loads when present
  }

  // QR code points to LinkedIn profile
  const url = 'https://www.linkedin.com/in/wian-mostert';
  new QRCode(document.getElementById('qrcode'), {text: url, width:160, height:160});

  document.getElementById('downloadVcard').addEventListener('click', downloadVCard);
}

function downloadVCard() {
  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${contact.fullName}`,
    `TITLE:${contact.title}`,
    `ORG:${contact.company}`,
    `TEL;TYPE=WORK,VOICE:${contact.phone}`,
    `EMAIL;TYPE=INTERNET:${contact.email}`,
    `ADR;TYPE=WORK:;;${contact.address};;;;`,
    'END:VCARD'
  ].join('\r\n');

  const blob = new Blob([vcard], {type: 'text/vcard'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${contact.fullName.replace(/\s+/g,'_')}.vcf`;
  a.click();
  URL.revokeObjectURL(url);
}

function copyLink() {
  navigator.clipboard.writeText(location.href).then(()=>{
    alert('Link copied to clipboard');
  },()=>{
    alert('Unable to copy link');
  });
}

window.addEventListener('DOMContentLoaded', init);
