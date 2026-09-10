
const header = document.querySelector('.site-header');
const year = document.getElementById('year');
const heroDownloadButton = document.getElementById('heroDownloadButton');

year.textContent = new Date().getFullYear();

function updateHeader(){
  header.classList.toggle('scrolled', window.scrollY > 14);
}
updateHeader();
window.addEventListener('scroll', updateHeader, { passive:true });

function setStickyDownload(active){
  header.classList.toggle('show-download', active);
  document.body.classList.toggle('download-sticky-active', active);
}

if (heroDownloadButton) {
  const observer = new IntersectionObserver((entries) => {
    const entry = entries[0];
    const buttonIsAboveViewport = entry.boundingClientRect.bottom <= 0;
    setStickyDownload(!entry.isIntersecting && buttonIsAboveViewport);
  }, {
    threshold: [0, 0.01, 1]
  });

  observer.observe(heroDownloadButton);
}
