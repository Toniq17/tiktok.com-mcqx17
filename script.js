const menuButton=document.querySelector('.menu-toggle');
const navLinks=document.querySelector('.links');
const themeButton=document.querySelector('.theme-toggle');

menuButton?.addEventListener('click',()=>{
  navLinks?.classList.toggle('open');
  menuButton.setAttribute('aria-expanded',navLinks?.classList.contains('open')?'true':'false');
});

document.querySelectorAll('.links a').forEach(link=>link.addEventListener('click',()=>navLinks?.classList.remove('open')));

themeButton?.addEventListener('click',()=>{
  document.body.classList.toggle('light');
  const light=document.body.classList.contains('light');
  localStorage.setItem('tooni-theme',light?'light':'dark');
  themeButton.textContent=light?'☀':'☾';
  themeButton.setAttribute('aria-label',light?'Switch to dark mode':'Switch to light mode');
});

if(localStorage.getItem('tooni-theme')==='light'){
  document.body.classList.add('light');
  if(themeButton)themeButton.textContent='☀';
}

const revealObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible');});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));

document.querySelectorAll('.year').forEach(el=>el.textContent=new Date().getFullYear());

// Display name
const displayName='MOHAMETT UPDY QANI';
document.querySelectorAll('*').forEach(el=>{
  el.childNodes.forEach(node=>{
    if(node.nodeType===Node.TEXT_NODE){
      node.textContent=node.textContent.replaceAll('Tooni17',displayName).replaceAll('Tooni',displayName);
    }
  });
});
document.title=`${displayName} — Digital Creator`;
document.querySelector('meta[name="description"]')?.setAttribute('content',`${displayName} — Digital Creator and Web Developer portfolio.`);
document.querySelector('meta[property="og:title"]')?.setAttribute('content',`${displayName} — Digital Creator`);

// Snapchat social link
const contactCopy=document.querySelector('.contact-copy');
if(contactCopy && !document.querySelector('.social-links')){
  const social=document.createElement('div');
  social.className='social-links buttons';
  social.innerHTML='<a class="btn secondary" href="https://www.snapchat.com/add/toni20239171?share_id=4ALpOQ16YLk&locale=en-GB" target="_blank" rel="noopener noreferrer" aria-label="Open Snapchat profile">👻 Snapchat</a>';
  contactCopy.appendChild(social);
}

const form=document.querySelector('#contactForm');
const note=document.querySelector('#formNote');
form?.addEventListener('submit',e=>{
  e.preventDefault();
  const name=form.elements.name.value.trim();
  const message=form.elements.message.value.trim();
  const subject=encodeURIComponent(`Portfolio message from ${name}`);
  const body=encodeURIComponent(`Hi ${displayName},\n\n${message}\n\n— ${name}`);
  window.location.href=`mailto:hello@tooni17.com?subject=${subject}&body=${body}`;
  if(note)note.textContent='Opening your email app…';
});
