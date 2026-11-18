/* Navigation et formulaires SANÍYA CLEAN */
'use strict';
document.documentElement.classList.add('js');
const toggle = document.querySelector('.menu-toggle');
const navigation = document.getElementById('navigation');
function closeMenu(){ toggle.setAttribute('aria-expanded', 'false'); navigation.classList.remove('is-open'); }
toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded', String(open)); navigation.classList.toggle('is-open', open); });
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { closeMenu(); toggle.focus(); } });
window.matchMedia('(min-width: 1001px)').addEventListener('change', closeMenu);
document.querySelectorAll('.service-link').forEach(link => link.addEventListener('click', () => { const field = document.getElementById('prestation'); if(field) field.value = link.dataset.service; }));
const recipient = 'SaniyaClean@birodjia.com';
function sendByEmail(form, subject, fields){
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const lines = fields.map(([label, name]) => `${label} : ${data.get(name) || 'Non renseigné'}`);
    const url = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n\n'))}`;
    const status = form.querySelector('.form-status');
    status.textContent = 'Votre logiciel de messagerie va s’ouvrir avec votre demande. Vérifiez le message puis cliquez sur Envoyer.';
    window.location.href = url;
  });
}
sendByEmail(document.getElementById('quote-form'), 'Demande de devis — SANÍYA CLEAN', [
  ['Type de client','client'],['Prestation','prestation'],['Type de lieu','lieu'],['Surface (m²)','surface'],['Fréquence','frequence'],['Commune','commune'],['Date souhaitée','date'],['Nom','nom'],['E-mail','email'],['Téléphone','telephone'],['Description','besoin']
]);
sendByEmail(document.getElementById('contact-form'), 'Message depuis le site — SANÍYA CLEAN', [['Nom','nom'],['E-mail','email'],['Message','message']]);
document.querySelectorAll('a[href="#mentions-legales"], a[href="#confidentialite"]').forEach(link => link.addEventListener('click', () => { const target = document.querySelector(link.getAttribute('href')); if(target) target.open = true; }));
