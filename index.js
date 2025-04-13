// ==UserScript==
// @name         Odreklamovač 2.0
// @version      1.7
// @description  Klikne na reklamu, "Blokovat", "POKRAČOVAT" a nakonec na button se svg ve stejném iframe na YouTube.
// @author       Ondra
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  // ✋ Pomocná async delay funkce
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  // 🔁 Hlavní async funkce
  const startAdFlow = async () => {
    await delay(1000);

    const adButton = document.querySelector('.ytp-ad-button-icon');
    if (!adButton) {
      console.log('❌ Reklamní tlačítko nenalezeno.');
      return;
    }

    console.log('✅ Klikám na tlačítko reklamy...');
    adButton.click();
    await delay(700);

    const iframe = document.querySelector('iframe.yt-about-this-ad-renderer');
    if (!iframe) {
      console.log('❌ Iframe s třídou yt-about-this-ad-renderer nenalezen.');
      return;
    }

    let doc;
    try {
      doc = iframe.contentDocument || iframe.contentWindow.document;
    } catch (e) {
      console.warn('❌ Nelze přistoupit k iframe (cross-origin?):', e);
      return;
    }

    const blokovat = Array.from(doc.querySelectorAll('span')).find(
      span => span.textContent.trim() === 'Blokovat'
    );

    if (!blokovat) {
      console.log('❌ Element "Blokovat" nenalezen.');
      return;
    }

    console.log('✅ Klikám na "Blokovat"...');
    blokovat.click();
    await delay(200);

    const pokracovat = Array.from(doc.querySelectorAll('*')).find(
      el => el.textContent.trim().toUpperCase() === 'POKRAČOVAT'
    );

    if (!pokracovat) {
      console.log('❌ Element "POKRAČOVAT" nenalezen.');
      return;
    }

    console.log('✅ Klikám na "POKRAČOVAT"...');
    pokracovat.click();
    await delay(200);

    const svgButton = Array.from(doc.querySelectorAll('button')).find(
      btn => btn.querySelector('svg')
    );

    if (!svgButton) {
      console.log('❌ Žádný <button> se <svg> nenalezen.');
      return;
    }

    console.log('✅ Klikám na button se SVG...');
    svgButton.click();
  };

  // 🔄 Zkouší spustit ad flow každou sekundu, dokud nenajde reklamu
  const tryLoop = () => {
    console.log('⏳ Čekuju YouTube tlačítko na reklamy...');

    const check = document.querySelector('.ytp-ad-button-icon');
    if (check) {
      console.log('✅ Našel sem reklamu...');
      startAdFlow();
      setTimeout(tryLoop, 5000);
    } else {
      setTimeout(tryLoop, 2000);
    }
  };

  tryLoop();
})();