document.addEventListener("DOMContentLoaded", () => {
  /* =========================================
     Mobile menu
  ========================================= */
  const menuBtn = document.getElementById("menuBtn");
  const mobileNav = document.getElementById("mobileNav");

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", () => {
      const isOpen = !mobileNav.hasAttribute("hidden");

      if (isOpen) {
        mobileNav.setAttribute("hidden", "");
        menuBtn.setAttribute("aria-expanded", "false");
      } else {
        mobileNav.removeAttribute("hidden");
        menuBtn.setAttribute("aria-expanded", "true");
      }
    });
  }

  /* =========================================
     Desktop / touch dropdown - services
  ========================================= */
  const dropWrap = document.querySelector(".nav-dropdown");
  const dropBtn = document.querySelector(".nav-dropbtn");
  const dropMenu = dropWrap ? dropWrap.querySelector(".dropdown") : null;

  if (dropWrap && dropBtn) {
    const isDesktopHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (isDesktopHover) {
      dropBtn.addEventListener("click", (e) => e.preventDefault());

      dropWrap.addEventListener("mouseleave", () => {
        dropWrap.classList.remove("open");
        dropBtn.setAttribute("aria-expanded", "false");
      });
    } else {
      dropBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        const isOpen = dropWrap.classList.toggle("open");
        dropBtn.setAttribute("aria-expanded", String(isOpen));
      });

      if (dropMenu) {
        dropMenu.addEventListener("click", (e) => e.stopPropagation());
      }

      document.addEventListener("click", () => {
        dropWrap.classList.remove("open");
        dropBtn.setAttribute("aria-expanded", "false");
      });
    }
  }

  /* =========================================
     Mobile services accordion
  ========================================= */
  const mobileServicesBtn = document.getElementById("mobileServicesBtn");
  const mobileServicesSub = document.getElementById("mobileServicesSub");

  if (mobileServicesBtn && mobileServicesSub) {
    mobileServicesBtn.addEventListener("click", () => {
      const isOpen = mobileServicesBtn.getAttribute("aria-expanded") === "true";
      mobileServicesBtn.setAttribute("aria-expanded", String(!isOpen));
      mobileServicesSub.hidden = isOpen;
    });
  }

  /* =========================================
     Reveal on scroll
  ========================================= */
  const revealItems = document.querySelectorAll(".reveal");

  if (revealItems.length) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealItems.forEach((el, i) => {
      el.style.transitionDelay = `${i * 80}ms`;
      revealObserver.observe(el);
    });
  }

  /* =========================================
     FAQ accordion
  ========================================= */
  const faq = document.querySelector(".faq-card");

  if (faq) {
    const items = faq.querySelectorAll(".faq-item");

    const closeItem = (item) => {
      item.classList.remove("open");

      const btn = item.querySelector(".faq-q");
      const panel = item.querySelector(".faq-a");

      if (btn) btn.setAttribute("aria-expanded", "false");
      if (panel) panel.style.maxHeight = null;
    };

    const openItem = (item) => {
      item.classList.add("open");

      const btn = item.querySelector(".faq-q");
      const panel = item.querySelector(".faq-a");

      if (btn) btn.setAttribute("aria-expanded", "true");
      if (panel) panel.style.maxHeight = panel.scrollHeight + "px";
    };

    items.forEach((item) => {
      const btn = item.querySelector(".faq-q");
      const panel = item.querySelector(".faq-a");

      if (panel) panel.style.maxHeight = null;

      btn?.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");

        items.forEach(closeItem);

        if (!isOpen) openItem(item);
      });
    });
  }

  /* =========================================
     Timeline / Process content + scroll progress
  ========================================= */
  const contentByStep = {
    1: `
      <h2>היכרות, הגדרת מטרות ותיאום ציפיות</h2>
      <p>
        <strong>השלב הראשון בתכנון פיננסי 360 אינו הכסף – אלא החיים.</strong>
        הפגישה מתקיימת עם <strong>שני בני הזוג יחד</strong>, מתוך הבנה שמטרות חיים וכסף הם תהליך זוגי ומשפחתי.
      </p>
      <p>
        באמצעות שיח פתוח והדדי אנו מגדירים את מטרות החיים בטווח הקצר, הבינוני והארוך,
        ומוודאים שיש איזון בין איכות החיים בהווה לבין הביטחון והחופש בעתיד.
        במקום להישאר ברמת הצהרות כלליות כמו “לשמור על רמת החיים בפרישה”,
        אנו <strong>מתרגמים את המטרות ליעדים ברורים ומדידים</strong>
        כגון באיזה גיל רוצים לפרוש, איזו רמת הכנסה נטו נדרשת,
        אילו אבני דרך צפויות בדרך ומהם לוחות הזמנים לכל מטרה.
      </p>
      <p>
        כך חלומות הופכים ליעדים שניתן לתכנן, לבחון ולהגשים.
      </p>
      <p>
        בנוסף בשלב זה אנו בוחנים גם את <strong>סיבולת הסיכון הסובייקטיבית של כל אחד מבני הזוג</strong>,
        כלומר היכולת הפסיכולוגית להתמודד עם תנודתיות וירידות חדות בשווקים.
        הבנה זו חיונית כדי שחלוקת ההשקעות בין מניות לנכסים סולידיים
        תתאים לפרופיל הלקוח ותאפשר התמדה לאורך זמן.
      </p>
      <p>
        בנוסף, נאסף בשלב זה מידע איכותי באמצעות שאלות “הכר את הלקוח”,
        המאפשר להבין את ההקשר האישי, המשפחתי והפיננסי,
        ולבנות תהליך שיהיה לא רק נכון על הנייר — אלא גם ישים ומתאים לכם בפועל.
      </p>
    `,
    2: `
      <h2>איסוף מידע והבנת התמונה המלאה</h2>
      <p>
        בשלב זה אנחנו ממפים את כל מרכיבי התמונה הפיננסית של המשפחה:
        הכנסות, הוצאות, נכסים, התחייבויות, חסכונות, ביטוחים, השקעות ונדל״ן.
        המטרה <strong>אינה רק לאסוף נתונים, אלא להבין כיצד כל החלקים משתלבים זה בזה</strong>
        ומה המשמעות שלהם ביחס למטרות החיים שהוגדרו בשלב הקודם.
      </p>
      <p>
        בשלב זה אנו בונים תמונת מצב מלאה ועדכנית, המאפשרת להבין את
        <strong>נקודת הפתיחה האמיתית של המשפחה</strong>
        לא רק במספרים, אלא גם בהקשר של סיכונים, מגבלות והזדמנויות.
      </p>
      <p>
        המטרה היא לבנות <strong>תמונת מצב מדויקת ואובייקטיבית</strong>
        שתשמש נקודת פתיחה אמינה להמשך התהליך.
        תמונה זו מהווה את הבסיס לגיבוש האסטרטגיה
        ולקבלת החלטות מושכלות בשלבים הבאים של תהליך התכנון.
      </p>
    `,
    3: `
      <h2>ניתוח פיננסי וזיהוי Quick Wins</h2>
      <p>
        לאחר שיש בידינו תמונת מצב כמותית מלאה, מתחיל שלב הניתוח.
        בשלב זה אנו מגבשים הנחות בסיס ריאליות לגבי העתיד:
        הכנסות והוצאות, קצב חיסכון, תשואות צפויות, אינפלציה ושינויים אפשריים לאורך החיים.
        הנחות אלו אינן תרחיש אופטימי או פסימי, אלא
        <strong>בסיס עבודה אחראי לקבלת החלטות מושכלות.</strong>
      </p>
      <p>
        כחלק מהניתוח נבנית גם <strong>תחזית פרישה</strong>:
        מה צפויה להיות ההכנסה החודשית בגיל הפרישה,
        מה הפער מול רמת החיים הרצויה,
        ואילו פעולות ניתן לבצע כבר היום כדי לצמצם או לסגור את הפער לאורך זמן.
      </p>
      <p>
        במקביל נבחן <strong>מבנה החוב של המשפחה</strong>:
        משכנתאות, הלוואות והתחייבויות שונות,
        כולל עלויות מימון, תנאים, לוחות סילוקין ואפשרויות להוזלה ו/או הקלה תזרימית.
      </p>
      <p>
        חלק מרכזי נוסף בשלב זה הוא מיפוי חשיפות לסיכונים:
        תנודתיות בשוק ההון, חשיפה למטבע, סיכוני מיסוי,
        וכן סיכוני חיים כגון מוות, מחלה או אובדן כושר עבודה.
      </p>
      <p>
        לעיתים, כבר בשלב זה מזוהים שינויים נקודתיים
        שאינם חלק מהאסטרטגיה ארוכת הטווח, אלא טקטיקה נטו:
        התאמות פשוטות, תיקונים או החלטות שניתן ליישם מיידית,
        ואשר עשויים להביא לחיסכון כספי משמעותי,
        מה שמכונה לא פעם <strong>“כסף על הרצפה”</strong>.
      </p>
      <p>
        שלב זה מאפשר לזהות פערים, סיכונים והזדמנויות ולעבור מהבנת המצב הקיים
        <strong>לבניית אסטרטגיה פיננסית מבוססת מספרים, תרחישים ובחירה מודעת.</strong>
      </p>
    `,
    4: `
      <h2>בניית האסטרטגיה הפיננסית להשגת המטרות</h2>
      <p>
        לאחר שהוגדרו המטרות ונותחו הנתונים, נבנית האסטרטגיה הפיננסית.
        בשלב זה מתורגמת כל מטרה לתוכנית פיננסית שתאפשר את מימושה בצורה אחראית,
        מבוקרת ובת־קיימא.
      </p>
      <p>
        האסטרטגיה הפיננסית מתמקדת בשאלה <strong>איך נכון לפעול</strong>:
        כיצד לחלק חיסכון והשקעות בין טווחי זמן שונים,
        איך לבחור ולשלב בין אפיקי השקעה מתאימים ובין מכשירים פיננסיים רלוונטיים,
        ואיך לאזן בין יעדים קצרי טווח ליעדים ארוכי טווח.
      </p>
      <p>
        כחלק מהאסטרטגיה נבנית גם <strong>אסטרטגיית השקעות ואופטימיזציית מס</strong>,
        הכוללת שילוב מושכל בין השקעות בשוק ההון, השקעות בנדל״ן,
        מכשירים פנסיוניים ואפיקי חיסכון נוספים.
      </p>
      <p>
        בנוסף, נבנית <strong>אסטרטגיית העברה בין־דורית</strong>
        המאפשרת להעביר ערך, ביטחון ושגשוג לדור הבא,
        בצורה מתוכננת, יעילה ומותאמת לאופי ולרצון המשפחה.
      </p>
      <p>
        האסטרטגיות השונות אינן עומדות בפני עצמן,
        אלא משתלבות לכדי <strong>אסטרטגיה פיננסית כוללת אחת</strong>,
        גמישה וניתנת לעדכון, שמלווה את המשפחה גם כשהחיים משתנים.
      </p>
    `,
    5: `
      <h2>הצגת התוכנית וקבלת החלטות משותפת</h2>
      <p>
        זהו שלב מרכזי בתהליך, שבו האסטרטגיה הפיננסית פוגשת אתכם בפועל.
        כאן זה המקום לשאול שאלות, להעלות חששות, להתלבט ולהעמיק,
        <strong>ולוודא שהתוכנית לא רק נכונה מקצועית, אלא גם מתאימה לכם</strong>,
        לערכים שלכם ולדרך שבה אתם רוצים לחיות.
      </p>
      <p>
        בשלב זה מוצגות חלופות שונות לכל מטרה,
        יחד עם המשמעויות, היתרונות והמחירים של כל בחירה.
      </p>
      <p>
        <strong>אין פתרון אחד “נכון”</strong>,
        יש בחירה שמתאימה ליכולות, להעדפות ולשלב החיים שבו אתם נמצאים.
      </p>
      <p>
        זהו גם הזמן להציף אמונות פיננסיות שנבנו לאורך השנים:
        אמונות לגבי סיכון, כסף, חובות, השקעות וביטחון.
      </p>
      <p>
        הדיון מתקיים בצורה פתוחה ולא שיפוטית,
        במטרה לבחון יחד אילו אמונות מקדמות אתכם
        ואילו עלולות להגביל את קבלת ההחלטות,
        ולבצע התאמות בתוכנית כך שתהיה ישימה וברורה לאורך זמן.
      </p>
      <p>
        בסיום שלב זה, האסטרטגיה מתורגמת ל־<strong>Action Items ברורים ומוגדרים</strong>:
        מה בדיוק צריך לעשות, באיזה סדר ובאילו לוחות זמנים.
        לכל Action Item מוגדר גם הגורם המקצועי הרלוונטי לביצוע.
      </p>
      <p>
        המטרה היא שתצאו מהשלב הזה עם <strong>בהירות מלאה</strong>:
        מה הוחלט, מה הצעד הבא ומי אחראי לביצוע.
        מתוך ידיעה שאתם מנהלים את הכסף,
        <strong>שהכסף עובד עבורכם ולא אתם עבורו</strong>,
        ושאתם פועלים באופן עקבי להשגת מטרות החיים שהוגדרו.
      </p>
    `,
    6: `
      <h2>ליווי ויישום התוכנית</h2>
      <p>
        תוכנית טובה שלא מיושמת – נשארת על הנייר.
        בשלב זה אני מלווה אתכם ביישום ההחלטות בפועל,
        ובתיאום מול אנשי המקצוע הרלוונטיים:
        יועצי השקעות, סוכני ביטוח, רואי חשבון, יועצי משכנתאות ועוד.
      </p>
      <p>
        הליווי מבטיח שהתוכנית אכן מיושמת, מותאמת לשינויים לאורך הדרך,
        ושומרת על כיוון ברור גם כשהחיים משתנים.
      </p>
    `
  };

  const timelineSteps = document.querySelectorAll(".timeline-step");
  const processBox = document.getElementById("processContent");
  const timelineCenter = document.getElementById("timelineCenter");
  const timelineProgress = document.getElementById("timelineProgress");

  if (timelineSteps.length && processBox && timelineCenter && timelineProgress) {
    let currentStep = "1";
    let isAnimating = false;
    let scrollTicking = false;

    function animateProcessContent() {
      processBox.classList.remove("is-animating");
      void processBox.offsetWidth;
      processBox.classList.add("is-animating");
    }

    function setStep(step) {
      if (!contentByStep[step] || isAnimating) return;

      if (step === currentStep && processBox.innerHTML.trim() !== "") {
        timelineSteps.forEach((btn) => {
          const isActive = btn.dataset.step === step;
          btn.classList.toggle("active", isActive);
          btn.setAttribute("aria-current", isActive ? "step" : "false");
        });
        return;
      }

      currentStep = step;

      timelineSteps.forEach((btn) => {
        const isActive = btn.dataset.step === step;
        btn.classList.toggle("active", isActive);
        btn.setAttribute("aria-current", isActive ? "step" : "false");
      });

      isAnimating = true;
      processBox.style.opacity = "0";

      setTimeout(() => {
        processBox.innerHTML = contentByStep[step];
        animateProcessContent();
        processBox.style.opacity = "1";

        setTimeout(() => {
          isAnimating = false;
        }, 220);
      }, 140);
    }

    function updateProgressLine() {
      const rect = timelineCenter.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const totalHeight = timelineCenter.offsetHeight;

      const progress = Math.min(
        Math.max(viewportHeight * 0.45 - rect.top, 0),
        totalHeight
      );

      timelineProgress.style.height = `${progress}px`;
    }

    function activateClosestStepOnScroll() {
      let closestStep = null;
      let closestDistance = Infinity;
      const targetY = window.innerHeight * 0.42;

      timelineSteps.forEach((step) => {
        const rect = step.getBoundingClientRect();
        const centerY = rect.top + rect.height / 2;
        const distance = Math.abs(centerY - targetY);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestStep = step;
        }
      });

      if (closestStep) {
        setStep(closestStep.dataset.step);
      }
    }

    function onScrollTimeline() {
      if (!scrollTicking) {
        requestAnimationFrame(() => {
          updateProgressLine();
          activateClosestStepOnScroll();
          scrollTicking = false;
        });
        scrollTicking = true;
      }
    }

    timelineSteps.forEach((btn) => {
      btn.addEventListener("click", () => {
        setStep(btn.dataset.step);
      });
    });

    const timelineObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.18
      }
    );

    timelineSteps.forEach((step) => {
      timelineObserver.observe(step);
    });

    processBox.innerHTML = contentByStep["1"];
    timelineSteps.forEach((btn) => {
      const isActive = btn.dataset.step === "1";
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-current", isActive ? "step" : "false");
    });

    setTimeout(() => {
      timelineSteps.forEach((step, index) => {
        setTimeout(() => {
          step.classList.add("visible");
        }, index * 120);
      });
    }, 120);

    updateProgressLine();
    activateClosestStepOnScroll();

    window.addEventListener("scroll", onScrollTimeline, { passive: true });
    window.addEventListener("resize", () => {
      updateProgressLine();
      activateClosestStepOnScroll();
    });
  }

  /* =========================================
     Contact form message
  ========================================= */
  const form = document.getElementById("contactForm");
  const msg = document.getElementById("formMsg");

  if (form && msg) {
    form.addEventListener("submit", () => {
      msg.textContent = "ההודעה נשלחה בהצלחה, נחזור אליכם בהקדם 😊";
      msg.className = "form-msg ok";
    });
  }

  /* =========================================
     Privacy modal
  ========================================= */
  const openBtn = document.getElementById("openPrivacy");
  const modal = document.getElementById("privacyModal");
  const closeBtn = document.getElementById("closePrivacy");

  if (openBtn && modal && closeBtn) {
    openBtn.addEventListener("click", () => {
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    });

    closeBtn.addEventListener("click", closeModal);

    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });

    function closeModal() {
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const track = document.getElementById("blogTrack");
  const cards = track ? track.querySelectorAll(".post-card") : [];
  const prevBtn = document.getElementById("blogPrev");
  const nextBtn = document.getElementById("blogNext");

  if (!track || !cards.length || !prevBtn || !nextBtn) return;

  let index = 0;

  function visibleCards() {
    return window.innerWidth <= 900 ? 1 : 2;
  }

  function maxIndex() {
    return Math.max(0, cards.length - visibleCards());
  }

  function getGap() {
    return parseInt(window.getComputedStyle(track).gap) || 0;
  }

  function getStep() {
    return cards[0].offsetWidth + getGap();
  }

  function updateSlider() {
    track.style.transform = `translateX(-${index * getStep()}px)`;
  }

  // 👉 כפתור קדימה (מעגלי)
  nextBtn.addEventListener("click", function () {
    if (index >= maxIndex()) {
      index = 0; // חוזר להתחלה
    } else {
      index++;
    }
    updateSlider();
  });

  // 👉 כפתור אחורה (מעגלי)
  prevBtn.addEventListener("click", function () {
    if (index <= 0) {
      index = maxIndex(); // קופץ לסוף
    } else {
      index--;
    }
    updateSlider();
  });

  window.addEventListener("resize", function () {
    if (index > maxIndex()) {
      index = 0;
    }
    updateSlider();
  });

  updateSlider();
});
