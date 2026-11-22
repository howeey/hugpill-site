(function () {
  const SUPPORTED_LANGS = ["en", "zh-Hans", "zh-Hant", "ja", "ko"];
  const STORAGE_KEY = "hugpill_landing_lang";

  let activeLang = "en";
  let activeScreenIdx = 0;
  let demoTaken = false;

  function normalizeLang(raw) {
    if (!raw || typeof raw !== "string") return null;
    const lower = raw.trim().replace(/_/g, "-").toLowerCase();
    if (lower.startsWith("ja")) return "ja";
    if (lower.startsWith("ko")) return "ko";
    if (lower.startsWith("zh")) {
      if (
        lower.includes("hant") ||
        lower.includes("-tw") ||
        lower.includes("-hk") ||
        lower.includes("-mo")
      ) {
        return "zh-Hant";
      }
      return "zh-Hans";
    }
    if (lower.startsWith("en")) return "en";
    return null;
  }

  function detectInitialLang() {
    const params = new URLSearchParams(window.location.search);
    const fromQuery = normalizeLang(params.get("lang"));
    if (fromQuery) return fromQuery;

    try {
      const saved = normalizeLang(window.localStorage.getItem(STORAGE_KEY));
      if (saved) return saved;
    } catch (_) {
      // ignore storage access errors
    }

    const browserLangs = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language];
    for (const candidate of browserLangs) {
      const matched = normalizeLang(candidate);
      if (matched) return matched;
    }
    return "en";
  }

  function getValue(obj, path) {
    return path.split(".").reduce((acc, part) => (acc ? acc[part] : undefined), obj);
  }

  function applyConfigLinks(dict) {
    const cfg = window.HUGPILL_CONFIG || {};
    const primaryCta = document.getElementById("primary-cta");
    const primaryCtaLabel = document.getElementById("primary-cta-label");
    const hasStoreUrl = Boolean(cfg.appStoreURL && cfg.appStoreURL.trim());

    if (primaryCta && primaryCtaLabel) {
      if (hasStoreUrl) {
        primaryCta.setAttribute("href", cfg.appStoreURL.trim());
        primaryCta.setAttribute("target", "_blank");
        primaryCta.setAttribute("rel", "noopener noreferrer");
        primaryCta.dataset.mode = "live";
        primaryCtaLabel.textContent = dict.hero.ctaLive;
      } else {
        primaryCta.setAttribute("href", "#review-status");
        primaryCta.removeAttribute("target");
        primaryCta.removeAttribute("rel");
        primaryCta.dataset.mode = "review";
        primaryCtaLabel.textContent = dict.hero.ctaReview;
      }
    }

    const privacyLink = document.getElementById("footer-privacy");
    const termsLink = document.getElementById("footer-terms");
    const contactLink = document.getElementById("footer-contact");
    const modalEmailLink = document.getElementById("modal-email-btn");

    if (privacyLink && cfg.privacyPolicyURL) privacyLink.href = cfg.privacyPolicyURL;
    if (termsLink && cfg.termsURL) termsLink.href = cfg.termsURL;
    if (contactLink && cfg.supportEmail) contactLink.href = `mailto:${cfg.supportEmail}`;
    if (modalEmailLink && cfg.supportEmail) modalEmailLink.href = `mailto:${cfg.supportEmail}`;
  }

  function renderScreens(dict) {
    const folder = dict.screenFolder;
    const screens = dict.screenLabels;
    const current = screens[activeScreenIdx] || screens[0];
    const imgPath = `./assets/screens/${folder}/${current.key}.webp`;

    const heroImg = document.getElementById("hero-phone-img");
    const showcaseImg = document.getElementById("showcase-phone-img");
    if (heroImg) {
      heroImg.src = imgPath;
      heroImg.alt = current.title;
    }
    if (showcaseImg) {
      showcaseImg.src = imgPath;
      showcaseImg.alt = current.title;
    }

    const heroTabsEl = document.getElementById("hero-phone-tabs");
    if (heroTabsEl) {
      heroTabsEl.innerHTML = "";
      screens.forEach((screen, idx) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "phone-tab-btn" + (idx === activeScreenIdx ? " is-active" : "");
        btn.textContent = screen.tab;
        btn.addEventListener("click", () => {
          activeScreenIdx = idx;
          renderScreens(window.HUGPILL_I18N[activeLang]);
        });
        heroTabsEl.appendChild(btn);
      });
    }

    const showcaseListEl = document.getElementById("showcase-list");
    if (showcaseListEl) {
      showcaseListEl.innerHTML = "";
      screens.forEach((screen, idx) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "showcase-item" + (idx === activeScreenIdx ? " is-active" : "");

        const titleEl = document.createElement("strong");
        titleEl.textContent = screen.title;
        const descEl = document.createElement("span");
        descEl.textContent = screen.desc;

        btn.appendChild(titleEl);
        btn.appendChild(descEl);
        btn.addEventListener("click", () => {
          activeScreenIdx = idx;
          renderScreens(window.HUGPILL_I18N[activeLang]);
        });
        showcaseListEl.appendChild(btn);
      });
    }
  }

  function renderDemo(dict) {
    const stepsContainer = document.getElementById("nudge-steps");
    const toggleBtn = document.getElementById("nudge-toggle-btn");
    if (!stepsContainer || !toggleBtn) return;

    toggleBtn.textContent = demoTaken
      ? dict.features.demoBtnReset
      : dict.features.demoBtnTaken;

    stepsContainer.innerHTML = "";
    dict.features.demoSteps.forEach((step, index) => {
      const card = document.createElement("div");
      let cls = "nudge-step";
      if (demoTaken) {
        cls += index === 1 ? " is-cleared" : index >= 2 ? " is-muted" : "";
      }
      card.className = cls;

      const timeEl = document.createElement("div");
      timeEl.className = "nudge-time";
      timeEl.textContent = step.time;

      const labelEl = document.createElement("div");
      labelEl.className = "nudge-label";
      labelEl.textContent = demoTaken ? step.cleared : step.pending;

      card.appendChild(timeEl);
      card.appendChild(labelEl);
      stepsContainer.appendChild(card);
    });
  }

  function renderDynamicLists(dict) {
    // Features 4 cards
    const featuresGrid = document.getElementById("features-grid");
    if (featuresGrid) {
      featuresGrid.innerHTML = "";
      dict.features.items.forEach((item) => {
        const card = document.createElement("article");
        card.className = "feature-card";

        const badge = document.createElement("span");
        badge.className = `feature-badge ${item.badgeClass}`;
        badge.textContent = item.badge;

        const h3 = document.createElement("h3");
        h3.textContent = item.title;

        const p = document.createElement("p");
        p.textContent = item.body;

        card.appendChild(badge);
        card.appendChild(h3);
        card.appendChild(p);
        featuresGrid.appendChild(card);
      });
    }

    // Story paragraphs
    const storyContainer = document.getElementById("story-paragraphs");
    if (storyContainer) {
      storyContainer.innerHTML = "";
      dict.story.paragraphs.forEach((text) => {
        const p = document.createElement("p");
        p.textContent = text;
        storyContainer.appendChild(p);
      });
      const signP = document.createElement("p");
      signP.className = "story-sign";
      signP.textContent = dict.story.sign;
      storyContainer.appendChild(signP);
    }

    // Pricing lists
    const freeList = document.getElementById("free-items");
    const plusList = document.getElementById("plus-items");
    [
      [freeList, dict.pricing.free.items],
      [plusList, dict.pricing.plus.items],
    ].forEach(([el, items]) => {
      if (!el) return;
      el.innerHTML = "";
      items.forEach((itemText) => {
        const li = document.createElement("li");
        const dot = document.createElement("span");
        dot.className = "check-dot";
        dot.textContent = "✓";
        const span = document.createElement("span");
        span.textContent = itemText;
        li.appendChild(dot);
        li.appendChild(span);
        el.appendChild(li);
      });
    });

    // FAQ
    const faqList = document.getElementById("faq-list");
    if (faqList) {
      faqList.innerHTML = "";
      dict.faq.items.forEach((item) => {
        const card = document.createElement("article");
        card.className = "faq-item";
        const h3 = document.createElement("h3");
        h3.textContent = item.q;
        const p = document.createElement("p");
        p.textContent = item.a;
        card.appendChild(h3);
        card.appendChild(p);
        faqList.appendChild(card);
      });
    }
  }

  function applyLanguage(lang, persist) {
    if (!SUPPORTED_LANGS.includes(lang)) lang = "en";
    activeLang = lang;
    const dict = window.HUGPILL_I18N[lang];

    document.documentElement.lang = dict.htmlLang;
    document.title = dict.pageTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", dict.metaDescription);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = getValue(dict, key);
      if (typeof val === "string") el.textContent = val;
    });

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.lang === lang);
      btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
    });

    applyConfigLinks(dict);
    renderDynamicLists(dict);
    renderDemo(dict);
    renderScreens(dict);

    if (persist) {
      try {
        window.localStorage.setItem(STORAGE_KEY, lang);
      } catch (_) {
        // ignore
      }
    }
  }

  function setupInteractions() {
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        applyLanguage(btn.dataset.lang, true);
      });
    });

    const toggleBtn = document.getElementById("nudge-toggle-btn");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        demoTaken = !demoTaken;
        renderDemo(window.HUGPILL_I18N[activeLang]);
      });
    }

    const modal = document.getElementById("review-modal");
    const primaryCta = document.getElementById("primary-cta");
    const closeBtn = document.getElementById("modal-close-btn");

    if (primaryCta && modal) {
      primaryCta.addEventListener("click", (ev) => {
        if (primaryCta.dataset.mode === "review") {
          ev.preventDefault();
          modal.hidden = false;
        }
      });
    }

    if (closeBtn && modal) {
      closeBtn.addEventListener("click", () => {
        modal.hidden = true;
      });
    }

    if (modal) {
      modal.addEventListener("click", (ev) => {
        if (ev.target === modal) modal.hidden = true;
      });
    }

    document.addEventListener("keydown", (ev) => {
      if (ev.key === "Escape" && modal && !modal.hidden) {
        modal.hidden = true;
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    setupInteractions();
    applyLanguage(detectInitialLang(), false);
  });
})();
