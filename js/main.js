document.addEventListener('DOMContentLoaded', () => {
  const targetDate = new Date('2026-10-24T08:00:00+07:00').getTime();
  const countdownEls = {
    days: document.getElementById('cd-d'),
    hours: document.getElementById('cd-h'),
    minutes: document.getElementById('cd-m'),
    seconds: document.getElementById('cd-s'),
  };

  const padNumber = (value) => String(value).padStart(2, '0');

  const updateCountdown = () => {
    const remainingTime = Math.max(0, targetDate - Date.now());
    const totalSeconds = Math.floor(remainingTime / 1000);

    countdownEls.days.textContent = Math.floor(totalSeconds / 86400);
    countdownEls.hours.textContent = Math.floor((totalSeconds % 86400) / 3600);
    countdownEls.minutes.textContent = Math.floor((totalSeconds % 3600) / 60);
    countdownEls.seconds.textContent = padNumber(totalSeconds % 60);
  };

  updateCountdown();
  setInterval(updateCountdown, 1000);

  const navLinks = document.querySelectorAll('.pills a');
  const sectionIds = ['top', 'couple', 'event', 'location', 'rsvp', 'gift'];

  const updateActiveMenu = () => {
    let currentIndex = 0;

    sectionIds.forEach((sectionId, index) => {
      const section = document.getElementById(sectionId);
      if (section && section.getBoundingClientRect().top < 160) {
        currentIndex = index;
      }
    });

    navLinks.forEach((link, index) => {
      link.classList.toggle('on', index === currentIndex);
    });
  };

  window.addEventListener('scroll', updateActiveMenu);

  const revealItems = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));

  const form = document.getElementById('rsvpForm');
  const guestList = document.getElementById('gList');
  const guestCount = document.getElementById('gCount');
  const successMessage = document.getElementById('rsvpOk');
  let guestMessagesCount = 34;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const guestName = document.getElementById('gName').value.trim() || 'Guest';
    const guestMessage = document.getElementById('gMsg').value.trim();

    if (guestMessage) {
      const messageCard = document.createElement('div');
      messageCard.className = 'msg reveal reveal-delay-1';
      const messageHeader = document.createElement('div');
      const nameElement = document.createElement('b');
      const timeElement = document.createElement('small');
      const messageElement = document.createElement('p');

      nameElement.textContent = guestName;
      timeElement.textContent = 'Just now';
      messageElement.textContent = guestMessage;
      messageHeader.append(nameElement, timeElement);
      messageCard.append(messageHeader, messageElement);

      guestList.prepend(messageCard);
      revealObserver.observe(messageCard);
      guestMessagesCount += 1;
      guestCount.textContent = `${guestMessagesCount} Messages`;
    }

    successMessage.classList.remove('d-none');
    form.reset();
  });

  document.querySelectorAll('.copy').forEach((button) => {
    button.addEventListener('click', () => {
      const originalMarkup = button.innerHTML;
      const accountNumber = button.dataset.no;

      if (navigator.clipboard) {
        navigator.clipboard.writeText(accountNumber).catch(() => {});
      }

      button.textContent = 'Copied!';
      setTimeout(() => {
        button.innerHTML = originalMarkup;
      }, 1500);
    });
  });

  const audioButton = document.getElementById('audio');
  const audioLabel = document.getElementById('aLbl');
  const weddingAudio = document.getElementById('weddingAudio');

  audioButton.addEventListener('click', async () => {
    if (weddingAudio.paused) {
      try {
        await weddingAudio.play();
        audioLabel.textContent = 'On';
        audioButton.setAttribute('aria-pressed', 'true');
      } catch (error) {
        audioLabel.textContent = 'Error';
        console.error('Audio gagal diputar:', error);
      }
      return;
    }

    weddingAudio.pause();
    audioLabel.textContent = 'Off';
    audioButton.setAttribute('aria-pressed', 'false');
  });

  weddingAudio.addEventListener('error', () => {
    audioLabel.textContent = 'Error';
    audioButton.setAttribute('aria-pressed', 'false');
    console.error('File audio tidak dapat dimuat:', weddingAudio.currentSrc);
  });
});
