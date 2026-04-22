// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.finaldestinationurns.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.finaldestinationurns.com/","title_tag":"Custom Cremation Urns & Fun Urn Styles | Final Destination Urns","meta_description":"Discover unique urn designs, DIY keepsake urns, and fun urn styles from Final Destination Urns in Pomona. Creative cremation keepsakes to honor every fan."},{"page_url":"https://www.finaldestinationurns.com/contact-us","title_tag":"Custom Cremation Urns Contact | Final Destination Urns","meta_description":"Contact Final Destination Urns in Pomona for custom cremation urns, personalized cremation keepsakes, and creative urn options. We’re here to help you honor a life."},{"page_url":"https://www.finaldestinationurns.com/copy-of-contact-us","title_tag":"Memorial Urns Pomona Business Cards | Final Destination Urns","meta_description":"Pomona funeral services can request FREE business cards from Final Destination Urns. Promote custom cremation urns, unique urn designs, and creative keepsakes."},{"page_url":"https://www.finaldestinationurns.com/product-page/lego-brick-cremation-urn-keepsake","title_tag":"Custom Cremation Urns Lego Brick Keepsake | Final Destination Urns","meta_description":"Lego Brick cremation urn keepsake for builders and collectors. Custom cremation urns with personalized plates and DIY keepsake urns crafted in Pomona, California."},{"page_url":"https://www.finaldestinationurns.com/product-page/adidas-shoebox-cremation-urn-keepsake","title_tag":"Sports Themed Urns Adidas Shoebox | Final Destination Urns","meta_description":"Adidas Shoebox sports themed urns with personalized plates. Unique urn designs and custom cremation urns for sneaker enthusiasts, crafted as heartfelt keepsakes."},{"page_url":"https://www.finaldestinationurns.com/product-page/nike-shoebox-cremation-urn-keepsake","title_tag":"Sports Themed Urns Nike Shoebox | Final Destination Urns","meta_description":"Nike Shoebox sports themed urns with personalized plates. Custom cremation urns and unique urn designs for sneaker fans, creating a lasting tribute and keepsake."},{"page_url":"https://www.finaldestinationurns.com/product-page/baseball-glove-cremation-urn","title_tag":"Sports Themed Urns Baseball Glove | Final Destination Urns","meta_description":"Baseball glove sports themed urns for the ultimate fan. DIY keepsake urns with personalized plates and creative urn options to honor sports lovers with style."},{"page_url":"https://www.finaldestinationurns.com/product-page/classic-baseball-urn","title_tag":"Sports Themed Urns Classic Baseball | Final Destination Urns","meta_description":"Classic baseball sports themed urns with display case and personalized plates. DIY keepsake urns and creative urn options for honoring devoted baseball fans."},{"page_url":"https://www.finaldestinationurns.com/product-page/basketball-hoop-urn","title_tag":"Sports Themed Urns Basketball Hoop | Final Destination Urns","meta_description":"Basketball hoop sports themed urns for dedicated fans. Explore creative urn options and fun urn styles from Final Destination Urns to celebrate a life and passion."}],"keywords":["custom cremation urns","unique urn designs","sports themed urns","diy keepsake urns","memorial urns pomona","personalized cremation keepsakes","fun urn styles","specialty urns for pets","creative urn options","pomona funeral services"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "Store",
  "@id": "https://www.finaldestinationurns.com/#store",
  "name": "Final Destination Urns",
  "url": "https://www.finaldestinationurns.com/",
  "image": [
    "https://static.wixstatic.com/media/666e85_c4de3b8c73e842fd90e5beb00fab8564%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/666e85_c4de3b8c73e842fd90e5beb00fab8564%7Emv2.png"
  ],
  "logo": "https://static.wixstatic.com/media/666e85_c4de3b8c73e842fd90e5beb00fab8564%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/666e85_c4de3b8c73e842fd90e5beb00fab8564%7Emv2.png",
  "description": "Unique custom sports and movie themed cremation keepsake urns designed to honor the lives, hobbies, and personalities of loved ones with fun, quirky memorials.",
  "slogan": "Sports & Movie Cremation Urns for the Ultimate Fan",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Pomona",
    "addressRegion": "CA",
    "postalCode": "91767",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "foundingDate": "2026",
  "sameAs": [],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Cremation Keepsake Urns",
    "itemListElement": [
      {
        "@type": "Product",
        "@id": "https://www.finaldestinationurns.com/product-page/lego-brick-cremation-urn-keepsake",
        "name": "Lego Brick Cremation Urn Keepsake",
        "url": "https://www.finaldestinationurns.com/product-page/lego-brick-cremation-urn-keepsake",
        "image": "https://static.wixstatic.com/media/666e85_faeed4c6d915491788955a321dfcbbba~mv2.png/v1/fill/w_82,h_105,al_c,q_85,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/666e85_faeed4c6d915491788955a321dfcbbba~mv2.png",
        "description": "Mini Lego brick style cremation urn keepsake made of high-quality pine, designed for builders and collectors, holding up to 50 cubic inches of ash.",
        "brand": {
          "@type": "Brand",
          "name": "Final Destination Urns"
        },
        "offers": {
          "@type": "Offer",
          "url": "https://www.finaldestinationurns.com/product-page/lego-brick-cremation-urn-keepsake",
          "price": "149.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "Product",
        "@id": "https://www.finaldestinationurns.com/product-page/adidas-shoebox-cremation-urn-keepsake",
        "name": "Adidas Shoebox Cremation Urn Keepsake",
        "url": "https://www.finaldestinationurns.com/product-page/adidas-shoebox-cremation-urn-keepsake",
        "image": [
          "https://static.wixstatic.com/media/666e85_40bff464db344946a1ab45d5a66010c2~mv2.jpg/v1/fill/w_138,h_97,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/666e85_40bff464db344946a1ab45d5a66010c2~mv2.jpg",
          "https://static.wixstatic.com/media/666e85_adb9cc47d62c49ab8d616fa2c7dcbe6c~mv2.jpg/v1/fill/w_160,h_155,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/666e85_adb9cc47d62c49ab8d616fa2c7dcbe6c~mv2.jpg"
        ],
        "description": "Mini Adidas-style shoebox cremation urn keepsake made of high-quality pine with hinged lid and clasp, holding up to 54 cubic inches of ash.",
        "brand": {
          "@type": "Brand",
          "name": "Final Destination Urns"
        },
        "offers": {
          "@type": "Offer",
          "url": "https://www.finaldestinationurns.com/product-page/adidas-shoebox-cremation-urn-keepsake",
          "price": "119.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "Product",
        "@id": "https://www.finaldestinationurns.com/product-page/nike-shoebox-cremation-urn-keepsake",
        "name": "Nike Shoebox Cremation Urn Keepsake",
        "url": "https://www.finaldestinationurns.com/product-page/nike-shoebox-cremation-urn-keepsake",
        "image": [
          "https://static.wixstatic.com/media/666e85_d069f65eb54d4deda69a513e5c7f2f14~mv2.png/v1/fill/w_49,h_38,al_c,q_85,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/666e85_d069f65eb54d4deda69a513e5c7f2f14~mv2.png",
          "https://static.wixstatic.com/media/666e85_276fd67be7c742f69f5bf43a03675eb6~mv2.png/v1/fill/w_86,h_125,al_c,q_85,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/666e85_276fd67be7c742f69f5bf43a03675eb6~mv2.png"
        ],
        "description": "Mini Nike-style shoebox cremation urn keepsake made of high-quality pine with durable hinges and retro clasp, holding up to 54 cubic inches of ash.",
        "brand": {
          "@type": "Brand",
          "name": "Final Destination Urns"
        },
        "offers": {
          "@type": "Offer",
          "url": "https://www.finaldestinationurns.com/product-page/nike-shoebox-cremation-urn-keepsake",
          "price": "119.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "Product",
        "@id": "https://www.finaldestinationurns.com/product-page/baseball-glove-cremation-urn",
        "name": "Baseball Glove Cremation Urn with Ball Keepsake",
        "url": "https://www.finaldestinationurns.com/product-page/baseball-glove-cremation-urn",
        "image": [
          "https://static.wixstatic.com/media/666e85_4da1f8e9218d451280c06a3d9c098565~mv2.jpg/v1/fill/w_161,h_118,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/666e85_4da1f8e9218d451280c06a3d9c098565~mv2.jpg",
          "https://static.wixstatic.com/media/666e85_c4140b09785d4075a9263860ad936479~mv2.jpg/v1/fill/w_124,h_113,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/666e85_c4140b09785d4075a9263860ad936479~mv2.jpg"
        ],
        "description": "Bronze-finished baseball glove cremation urn keepsake with standard or specialty ball options and a waterproof capsule for ashes.",
        "brand": {
          "@type": "Brand",
          "name": "Final Destination Urns"
        },
        "offers": {
          "@type": "Offer",
          "url": "https://www.finaldestinationurns.com/product-page/baseball-glove-cremation-urn",
          "price": "140.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "Product",
        "@id": "https://www.finaldestinationurns.com/product-page/classic-baseball-urn",
        "name": "Classic Baseball Cremation Urn Keepsake",
        "url": "https://www.finaldestinationurns.com/product-page/classic-baseball-urn",
        "image": [
          "https://static.wixstatic.com/media/666e85_a73ac4701dee48d19eca23cfb2944186~mv2.jpg/v1/fill/w_147,h_165,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/666e85_a73ac4701dee48d19eca23cfb2944186~mv2.jpg",
          "https://static.wixstatic.com/media/666e85_4861595cd0754f10a537bf6374115b5a~mv2.jpg/v1/fill/w_147,h_157,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/666e85_4861595cd0754f10a537bf6374115b5a~mv2.jpg"
        ],
        "description": "Baseball cremation urn keepsake in a clear acrylic display case with UV protection and waterproof ash capsule.",
        "brand": {
          "@type": "Brand",
          "name": "Final Destination Urns"
        },
        "offers": {
          "@type": "Offer",
          "url": "https://www.finaldestinationurns.com/product-page/classic-baseball-urn",
          "price": "135.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "Product",
        "@id": "https://www.finaldestinationurns.com/product-page/bowling-cremation-urn-ball-and-pins",
        "name": "Bowling Cremation Urn Ball and Pins Keepsake",
        "url": "https://www.finaldestinationurns.com/",
        "image": [
          "https://static.wixstatic.com/media/666e85_b619b2d243e847e2abf434c35deb1a13~mv2.jpg/v1/fill/w_139,h_129,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/666e85_b619b2d243e847e2abf434c35deb1a13~mv2.jpg",
          "https://static.wixstatic.com/media/666e85_ae32a612f41b410294ac7b556a91f515~mv2.jpg/v1/fill/w_110,h_118,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/666e85_ae32a612f41b410294ac7b556a91f515~mv2.jpg"
        ],
        "description": "Indian rosewood box cremation urn featuring a bowling ball and pins memorial design for bowling enthusiasts.",
        "brand": {
          "@type": "Brand",
          "name": "Final Destination Urns"
        }
      },
      {
        "@type": "Product",
        "@id": "https://www.finaldestinationurns.com/product-page/football-helmet-cremation-urn",
        "name": "Football Helmet Cremation Urn Keepsake",
        "url": "https://www.finaldestinationurns.com/",
        "image": [
          "https://static.wixstatic.com/media/666e85_66d47d9eeb2c470981068208d6fec7f7~mv2.jpg/v1/fill/w_147,h_140,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/666e85_66d47d9eeb2c470981068208d6fec7f7~mv2.jpg",
          "https://static.wixstatic.com/media/666e85_0ff53a261f464641b01eca79c0c00d8c~mv2.png/v1/fill/w_49,h_47,al_c,q_85,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/666e85_0ff53a261f464641b01eca79c0c00d8c~mv2.png"
        ],
        "description": "Mini football helmet cremation urn keepsake displayed in a clear case for devoted football fans.",
        "brand": {
          "@type": "Brand",
          "name": "Final Destination Urns"
        }
      },
      {
        "@type": "Product",
        "@id": "https://www.finaldestinationurns.com/product-page/golf-cremation-urn-keepsake",
        "name": "Golf Cremation Urn Keepsake",
        "url": "https://www.finaldestinationurns.com/",
        "image": [
          "https://static.wixstatic.com/media/666e85_f5d83542bdd24d9ebd6806d8ffd4b936~mv2.jpg/v1/fill/w_147,h_197,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/666e85_f5d83542bdd24d9ebd6806d8ffd4b936~mv2.jpg",
          "https://static.wixstatic.com/media/666e85_a0de30db6c6f416a936f6b8289a072e9~mv2.jpg/v1/fill/w_147,h_149,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/666e85_a0de30db6c6f416a936f6b8289a072e9~mv2.jpg"
        ],
        "description": "Golf ball in clear display case cremation urn keepsake designed for golf lovers.",
        "brand": {
          "@type": "Brand",
          "name": "Final Destination Urns"
        }
      },
      {
        "@type": "Product",
        "@id": "https://www.finaldestinationurns.com/product-page/handyman-cremation-urn-keepsake",
        "name": "Handyman Cremation Urn Keepsake",
        "url": "https://www.finaldestinationurns.com/",
        "image": [
          "https://static.wixstatic.com/media/666e85_8db55b8857cf43d0b075aaea857c346a~mv2.jpg/v1/fill/w_159,h_138,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/666e85_8db55b8857cf43d0b075aaea857c346a~mv2.jpg",
          "https://static.wixstatic.com/media/666e85_a8e5eb48864946f1905d1d24b42d0e91~mv2.jpg/v1/fill/w_161,h_123,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/666e85_a8e5eb48864946f1905d1d24b42d0e91~mv2.jpg"
        ],
        "description": "Red mini toolbox style handyman cremation urn keepsake for those who loved working with their hands.",
        "brand": {
          "@type": "Brand",
          "name": "Final Destination Urns"
        }
      }
    ]
  },
  "knowsAbout": [
    "cremation urns",
    "keepsake urns",
    "sports-themed urns",
    "movie-themed urns",
    "personalized memorials"
  ]
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
