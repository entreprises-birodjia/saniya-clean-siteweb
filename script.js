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
document.querySelectorAll('a[href="#mentions-legales"], a[href="#confidentialite"]').forEach(link => link.addEventListener('click', () => { const target = document.querySelector(link.getAttribute('href')); if(target) target.open = true; }));
