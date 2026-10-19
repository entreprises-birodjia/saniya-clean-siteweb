/* Interactions locales uniquement : aucune requête réseau, stockage ou collecte. */
'use strict';
document.documentElement.classList.add('js');
const toggle = document.querySelector('.menu-toggle');
const navigation = document.getElementById('navigation');
function closeMenu(){
  toggle.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    closeMenu(); toggle.focus();
  }
});
window.matchMedia('(min-width: 1001px)').addEventListener('change', closeMenu);
document.querySelectorAll('.service-link').forEach(link => link.addEventListener('click', () => {
  document.getElementById('prestation').value = link.dataset.service;
}));
// L'attribut onsubmit des formulaires constitue aussi un garde-fou sans JavaScript externe.
document.querySelectorAll('.demo-form').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    form.querySelector('.form-status').textContent = 'Démonstration uniquement : aucun envoi, aucun enregistrement et aucun devis calculé. Les informations restent dans les champs de cette page et ne sont pas transmises à SANÍYA CLEAN.';
  });
});
document.querySelectorAll('a[href="#mentions-legales"], a[href="#confidentialite"]').forEach(link => {
  link.addEventListener('click', () => {
    const target = document.querySelector(link.getAttribute('href'));
    target.open = true;
  });
});
