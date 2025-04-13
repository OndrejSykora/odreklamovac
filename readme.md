# 🎯 Odreklamovač 2.0

**Odreklamovač 2.0** je *userscript* pro rozšíření **Tampermonkey**, který automaticky kliká na reklamní prvky na YouTube.

Po zobrazení reklamy skript:

1. Klikne na reklamní tlačítko.
2. Otevře nabídku „Proč tato reklama“.
3. Klikne na **Blokovat**.
4. Potvrdí volbu přes **POKRAČOVAT**.
5. Dokončí akci kliknutím na tlačítko se SVG ikonou.

To vše probíhá automaticky a s jemným zpožděním mezi jednotlivými kroky, aby se napodobil běžný uživatelský pohyb.

---

## ✅ Funkce

- Automatická detekce reklamních tlačítek na YouTube
- Interakce s iframe, kde se nachází nabídka k blokování
- Postupné a spolehlivé provádění akcí s časovými prodlevami
- Čistý a přehledný kód v JavaScriptu s využitím `async/await`

---

## 🛠 Instalace (doporučeno přes Tampermonkey)

1. Nainstaluj si [Tampermonkey](https://www.tampermonkey.net/) (pro Chrome, Firefox, Edge, atd.).
2. Klikni na `+ Create a new script` nebo otevři soubor `Odreklamovač 2.0.user.js` v tomto repozitáři a klikni na **Raw**.
3. Tampermonkey nabídne automatickou instalaci – potvrď.
4. Přejdi na YouTube.
5. Skript se automaticky aktivuje při detekci reklamy.

---

## 📂 Cílová stránka

- `https://www.youtube.com/*`

---

## ⚠️ Upozornění

- Skript pracuje s iframe prvkem YouTube. Pokud YouTube změní strukturu stránky nebo pravidla pro sandboxing iframe, skript může přestat fungovat.
- Tento skript **neblokuje reklamy**, ale pouze automatizuje klikání na volby v rámci existující nabídky YouTube pro správu reklam.

---

## 👨‍💻 Autor

**Ondra** (2025)

---
