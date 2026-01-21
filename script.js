document.addEventListener("DOMContentLoaded", () => {
    // ===== Mobile menu =====
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
  
    // ===== Read more =====
    const readmoreBox = document.getElementById("readmoreBox");
    const readmoreBtn = document.getElementById("readmoreBtn");
  
    if (readmoreBox && readmoreBtn) {
      readmoreBtn.addEventListener("click", () => {
        const isOpen = readmoreBox.classList.toggle("open");
        readmoreBtn.textContent = isOpen ? "סגרו" : "המשיכו לקרוא";
        readmoreBtn.setAttribute("aria-expanded", String(isOpen));
      });
    }
  
    // ===== Dropdown: services (tap/click support) =====
    document.addEventListener("DOMContentLoaded", () => {
        const dropWrap = document.querySelector(".nav-dropdown");
        const dropBtn  = document.querySelector(".nav-dropbtn");
        const dropMenu = dropWrap ? dropWrap.querySelector(".dropdown") : null;
      
        if (!dropWrap || !dropBtn) return;
      
        const isDesktopHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
      
        if (isDesktopHover) {
          // בדסקטופ: לא צריך קליק בכלל
          dropBtn.addEventListener("click", (e) => e.preventDefault());
      
          // אם בכל זאת נפתח עם open (מאיזה מצב קודם) – נסגור כשעוזבים
          dropWrap.addEventListener("mouseleave", () => {
            dropWrap.classList.remove("open");
            dropBtn.setAttribute("aria-expanded", "false");
          });
      
        } else {
          // מובייל/טאץ': פתיחה וסגירה בקליק
          dropBtn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            const isOpen = dropWrap.classList.toggle("open");
            dropBtn.setAttribute("aria-expanded", String(isOpen));
          });
      
          // שלא יסגר בלחיצה בתוך התפריט
          dropMenu?.addEventListener("click", (e) => e.stopPropagation());
      
          // קליק בחוץ סוגר
          document.addEventListener("click", () => {
            dropWrap.classList.remove("open");
            dropBtn.setAttribute("aria-expanded", "false");
          });
        }
      });
      
  
    // ===== Reveal on scroll =====
    const items = document.querySelectorAll(".reveal");
  
    if (items.length) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("active");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.15 }
      );
  
      items.forEach((el, i) => {
        el.style.transitionDelay = `${i * 80}ms`;
        io.observe(el);
      });
    }
  });
 
  document.addEventListener("DOMContentLoaded", () => {
    const faq = document.querySelector(".faq-card");
    if (!faq) return;
  
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
  
    items.forEach(item => {
      const btn = item.querySelector(".faq-q");
      const panel = item.querySelector(".faq-a");
  
      // מצב התחלתי סגור
      if (panel) panel.style.maxHeight = null;
  
      btn?.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");
  
        // סוגר הכל
        items.forEach(closeItem);
  
        // פותח רק אם היה סגור
        if (!isOpen) openItem(item);
      });
    });
  
    // אם תרצי שברירת מחדל תהיה פתוחה שאלה ראשונה:
    // openItem(items[0]);
  });
  document.addEventListener("DOMContentLoaded", () => {

    const contentByStep = {
      1: `
        <h3>
 היכרות, הגדרת מטרות ותיאום ציפיות
</h3>
<p>
        
        <strong> השלב הראשון בתכנון פיננסי 360 אינו הכסף – אלא החיים. </strong>
        
הפגישה מתקיימת עם
 <strong>שני בני הזוג יחד </strong>
 , מתוך הבנה שמטרות חיים וכסף הם תהליך זוגי ומשפחתי.

באמצעות שיח פתוח והדדי אנו מגדירים את מטרות החיים בטווח הקצר, הבינוני והארוך,
ומוודאים שיש איזון בין איכות החיים בהווה לבין הביטחון והחופש בעתיד.
במקום להישאר ברמת הצהרות כלליות כמו “לשמור על רמת החיים בפרישה”,
אנו
<strong> מתרגמים את המטרות ליעדים ברורים ומדידים</strong>
כגון באיזה גיל רוצים לפרוש, איזו רמת הכנסה נטו נדרשת,
אילו אבני דרך צפויות בדרך ומהם לוחות הזמנים לכל מטרה.

כך חלומות הופכים ליעדים שניתן לתכנן, לבחון ולהגשים.
</p>
<p>
בנוסף בשלב זה אנו בוחנים גם את
<strong> סיבולת הסיכון הסובייקטיבית של כל אחד מבני הזוג</strong>
שזה אומר
היכולת הפסיכולוגית להתמודד עם תנודתיות וירידות חדות בשווקים.
הבנה זו חיונית כדי שחלוקת ההשקעות בין מניות לנכסים סולידיים
תתאים לפרופיל הלקוח ותאפשר התמדה לאורך זמן.

בנוסף, נאסף בשלב זה מידע איכותי באמצעות שאלות “הכר את הלקוח”,
המאפשר להבין את ההקשר האישי, המשפחתי והפיננסי,
ולבנות תהליך שיהיה לא רק נכון על הנייר — אלא גם ישים ומתאים לכם בפועל.

</p>
      `,
      2: `
        <h3>איסוף מידע והבנת התמונה המלאה</h3>
    
        <p>
          בשלב זה אנחנו ממפים את כל מרכיבי התמונה הפיננסית של המשפחה:
הכנסות, הוצאות, נכסים, התחייבויות, חסכונות, ביטוחים, השקעות ונדל״ן.
המטרה
<strong>  אינה רק לאסוף נתונים, אלא להבין כיצד כל החלקים משתלבים זה בזה</strong>
ומה המשמעות שלהם ביחס למטרות החיים שהוגדרו בשלב הקודם. בשלב זה אנו בונים תמונת מצב מלאה ועדכנית, המאפשרת להבין את 
<strong>נקודת הפתיחה האמיתית של המשפחה  </strong>
לא רק במספרים, אלא גם בהקשר של סיכונים, מגבלות והזדמנויות. המטרה היא לבנות 
<strong>תמונת מצב מדוייקת ואובייקטיבית </strong>
שתשמש נקודת פתיחה אמינה להמשך התהליך.
תמונה זו מהווה את הבסיס לגיבוש האסטרטגיה
ולקבלת החלטות מושכלות בשלבים הבאים של תהליך התכנון.

        </p>
      `,
      3: `
        <h3>ניתוח פיננסי וזיהוי Quick Wins </h3>
        <p>
        לאחר שיש בידינו תמונת מצב כמותית מלאה, מתחיל שלב הניתוח.
בשלב זה אנו מגבשים הנחות בסיס ריאליות לגבי העתיד:
הכנסות והוצאות, קצב חיסכון, תשואות צפויות, אינפלציה ושינויים אפשריים לאורך החיים. הנחות אלו אינן תרחיש אופטימי או פסימי, אלא
<strong> בסיס עבודה אחראי לקבלת החלטות מושכלות. </strong>
        כחלק מהניתוח נבנית גם 
        <strong>תחזית פרישה: </strong>
        מה צפויה להיות ההכנסה החודשית בגיל הפרישה,
מה הפער מול רמת החיים הרצויה,
ואילו פעולות ניתן לבצע כבר היום כדי לצמצם או לסגור את הפער לאורך זמן.
במקביל נבחן 
        <strong>מבנה החוב של המשפחה: </strong>
        משכנתאות, הלוואות והתחייבויות שונות ,
כולל עלויות מימון, תנאים, לוחות סילוקין ואפשרויות להוזלה ו/או הקלה תזרימית
.חלק מרכזי נוסף בשלב זה הוא מיפוי חשיפות לסיכונים:
תנודתיות בשוק ההון, חשיפה למטבע, סיכוני מיסוי,
וכן סיכוני חיים כגון מוות, מחלה או אובדן כושר עבודה.
המטרה אינה להימנע מסיכון בכל מחיר,
אלא להבין אילו סיכונים קיימים,
אילו מהם מנוהלים ואילו דורשים טיפול.
לעיתים, כבר בשלב זה מזוהים שינויים נקודתיים


שאינם חלק מהאסטרטגיה ארוכת הטווח, אלא טקטיקה נטו:
התאמות פשוטות, תיקונים או החלטות שניתן ליישם מיידית,
ואשר עשויים להביא לחיסכון כספי משמעותי , מה שמכונה לא פעם
 <strong> “כסף על הרצפה”</strong>
שלב זה מאפשר לזהות פערים, סיכונים והזדמנויות ולעבור מהבנת המצב הקיים
 <strong>
לבניית
 אסטרטגיה פיננסית מבוססת מספרים, תרחישים ובחירה מודעת.
        
        </strong>
</p>
      `,
      4: `
        <h3>בניית האסטרטגיה הפיננסית להשגת המטרות
</h3>
        <p>
        לאחר שהוגדרו המטרות ונותחו הנתונים, נבנית האסטרטגיה הפיננסית.
בשלב זה מתורגמת כל מטרה (פרישה, תמיכה בילדים, החלפת רכב, יציאה לדרך עצמאית, רכישת
דירה או יצירת חופש כלכלי) לתוכנית פיננסית שתאפשר את מימושה בצורה אחראית, מבוקרת
וברת־קיימא.
האסטרטגיה הפיננסית מתמקדת בשאלה 
<strong> איך נכון לפעול: </strong>
כיצד לחלק חיסכון והשקעות בין טווחי זמן שונים,
איך לבחור ולשלב בין אפיקי השקעה מתאימים ובין מכשירים פיננסיים רלוונטיים,
ואיך לאזן בין יעדים קצרי טווח ליעדים ארוכי טווח , תוך התאמה לשלב החיים, לצרכים
ולסיבולת הסיכון של המשפחה.
כחלק מהאסטרטגיה נבנית גם 
<strong> אסטרטגיית השקעות ואופטימיזציית מס.</strong>

הכוללת שילוב מושכל בין השקעות בשוק ההון, השקעות בנדל״ן,
מכשירים פנסיוניים ואפיקי חיסכון נוספים.
במקביל נלקחת בחשבון גם היערכות לאירועי חירום בלתי צפויים,
כגון פגיעה בהכנסה, מחלה או שינוי מהותי במצב המשפחתי.
בנוסף, נבנית 

<strong> אסטרטגיית העברה בין־דורית</strong>
המאפשרת להעביר ערך, ביטחון ושגשוג לדור הבא,
בצורה מתוכננת, יעילה ומותאמת לאופי ולרצון המשפחה.
האסטרטגיות הנבנות עבור המטרות השונות אינן עומדות בפני עצמן,
אלא משתלבות זו בזו לכדי
 <strong> אסטרטגיה פיננסית כוללת אחת </strong>
 גמישה, ניתנת לעדכון,
שמלווה את המשפחה גם כשהחיים משתנים.
        
       </p>
      `,
      5: `
        <h3>הצגת התוכנית וקבלת החלטות משותפת</h3>
        <p>
זהו שלב מרכזי בתהליך, שבו האסטרטגיה הפיננסית פוגשת אתכם בפועל.
כאן זה המקום לשאול שאלות, להעלות חששות, להתלבט ולהעמיק
<strong>ולוודא שהתוכנית לא רק נכונה מקצועית,אלא גם מתאימה לכם</strong>
, לערכים שלכם ולדרך
שבה אתם רוצים לחיות.
בשלב זה מוצגות חלופות שונות לכל מטרה,
יחד עם המשמעויות, היתרונות והמחירים של כל בחירה.
</p>
<p>
<strong>אין פתרון אחד “נכון”</strong>
, יש בחירה שמתאימה ליכולות, להעדפות ולשלב החיים שבו אתם
נמצאים.
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
בסיום שלב זה, האסטרטגיה מתורגמת ל־
<strong>
Action Items ברורים ומוגדרים: </strong>
מה בדיוק צריך לעשות, באיזה סדר ובאילו לוחות זמנים.
לכל Action Item מוגדר גם הגורם המקצועי הרלוונטי לביצוע.
</p>
<p> 
המטרה היא שתצאו מהשלב הזה עם
<strong> בהירות מלאה:</strong>
מה הוחלט, מה הצעד הבא ומי אחראי לביצוע.
מתוך ידיעה שאתם מנהלים את הכסף,
<strong>שהכסף עובד עבורכם ולא אתם עבורו</strong>
ושאתם פועלים באופן עקבי להשגת מטרות החיים שהוגדרו.
</p>
      `,
      6: `
        <h3>ליווי ויישום התוכנית</h3>
        <p>תוכנית טובה שלא מיושמת – נשארת על הנייר.
בשלב זה אני מלווה אתכם ביישום ההחלטות בפועל,
ובתיאום מול אנשי המקצוע הרלוונטיים:
יועצי השקעות, סוכני ביטוח, רואי חשבון, יועצי משכנתאות ועוד.
הליווי מבטיח שהתוכנית אכן מיושמת, מותאמת לשינויים לאורך הדרך,
ושומרת על כיוון ברור גם כשהחיים משתנים.</p>
      `
    };
  
    const buttons = document.querySelectorAll(".step-btn");
    const box = document.getElementById("processContent");
  
    function setStep(step){
      buttons.forEach(b => b.classList.toggle("active", b.dataset.step == step));
      if (box) box.innerHTML = contentByStep[step] || "";
    }
  
    buttons.forEach(btn => {
      btn.addEventListener("click", () => setStep(btn.dataset.step));
    });
  
    // ✅ ברירת מחדל: שלב 1 פתוח
    setStep("1");
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const msg = document.getElementById("formMsg");
  
    if (!form) return;
  
    form.addEventListener("submit", () => {
      msg.textContent = "ההודעה נשלחה בהצלחה, נחזור אליכם בהקדם 😊";
      msg.className = "form-msg ok";
    });
  });
  // Mobile Services dropdown
(() => {
    const btn = document.getElementById("mobileServicesBtn");
    const sub = document.getElementById("mobileServicesSub");
    if (!btn || !sub) return;
  
    btn.addEventListener("click", () => {
      const isOpen = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!isOpen));
      sub.hidden = isOpen;
    });
  })();
  
