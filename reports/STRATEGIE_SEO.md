# Stratégie SEO & Performance

**Projet:** test
**Date:** 06/02/2026

---

## 1. Schema.org Product & Offer Markup

**Impact:** HIGH | **Catégorie:** TECHNICAL

Crucial for displaying rich snippets in Google Search, including price, availability, and 'Limited Edition' status which drives CTR for hype drops.

> 💡 **Conseil:** Inject JSON-LD on Product pages: { '@context': 'https://schema.org/', '@type': 'Product', 'name': 'Product Name', 'offers': { '@type': 'Offer', 'availability': 'https://schema.org/LimitedAvailability', 'price': '00.00' } }.

---

## 2. LCP Optimization for Immersive Lookbook

**Impact:** HIGH | **Catégorie:** PERFORMANCE

High-resolution urban photography in the Lookbook can degrade Largest Contentful Paint (LCP), hurting SEO rankings and user retention.

> 💡 **Conseil:** Implement the <picture> element with AVIF/WebP formats. Use fetchpriority='high' on the first fold image and loading='lazy' for all subsequent lookbook assets.

---

## 3. Dynamic Open Graph for Social Virality

**Impact:** MEDIUM | **Catégorie:** CONTENT

Streetwear brands rely on social sharing. Preview cards must look premium to maintain the 'hype' aesthetic when shared on IG/Twitter.

> 💡 **Conseil:** Set dynamic meta tags: <meta property='og:title' content='[DROP DATE] - Exclusive Release'> and <meta property='og:image' content='high_res_product_mockup.jpg'>.

---

## 4. Core Web Vitals: Total Blocking Time (TBT)

**Impact:** HIGH | **Catégorie:** PERFORMANCE

The countdown system and cart logic in Vanilla JS must not block the main thread, ensuring the site remains interactive during high-traffic drops.

> 💡 **Conseil:** Use requestAnimationFrame for the countdown timer instead of setInterval. Ensure all Vanilla JS modules are loaded with the 'defer' attribute to prevent render-blocking.

---

## 5. Semantic HTML for Scarcity Messaging

**Impact:** MEDIUM | **Catégorie:** TECHNICAL

Search engines need to understand the temporal nature of 'drops' to index them correctly as time-sensitive events.

> 💡 **Conseil:** Use the <time> tag for all countdown displays and <section aria-live='polite'> for stock updates. This improves accessibility and helps crawlers identify time-sensitive content.

---

