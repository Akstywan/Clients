/**
 * script.js - Q'go Group Contact Cards with Multilingual Support (English & Arabic)
 * Universal vCard generator compatible with iOS Safari, Android, macOS & Windows.
 */

const qgoProfile = {
    slug: "Murtuza",
    vcfFilename: "Murtuza_Khan",
    phoneMobile: "+965 9725 6315",
    phoneMobileRaw: "96597256315",
    phoneWork: "+965 2208 7417 / 8",
    phoneWorkRaw: "96522087417",
    phoneWork2Raw: "96522087418",
    hotline: "+965 1887 887",
    hotlineRaw: "9651887887",
    email: "murtuzakhan@qgoaviation.com",
    website: "https://qgogroup.com",
    websiteDisplay: "qgogroup.com",
    en: {
        pageTitle: "Murtuza Khan - Group Finance Manager | Q'go Group",
        name: "Murtuza Khan",
        title: "Group Finance Manager",
        aboutText: "Group Finance Manager at Q'go Group, Kuwait. Leading corporate fiscal governance, strategic financial planning, budgeting, aviation financial management, and multi-entity investment operations.",
        org: "Q'go Group, Kuwait",
        langToggle: "العربية",
        langAria: "Switch to Arabic",
        saveContact: "Save Contact",
        sendMessage: "Send Message",
        whatsappGreeting: "Hello Mr. Murtuza, I would like to get in touch with you.",
        address: "P.O. Box 5798 / Safat 13058, Kuwait",
        qubytzCta: "Customize your NFC Card with Qubytz Today",
        vcardTitle: "Group Finance Manager",
        vcardOrg: "Q'go Group, Kuwait",
        vcardNote: "Group Finance Manager at Q'go Group, Kuwait."
    },
    ar: {
        pageTitle: "مرتضى خان - مدير عام الشؤون المالية للمجموعة | مجموعة كيو جو",
        name: "مرتضى خان",
        title: "مدير عام الشؤون المالية للمجموعة",
        aboutText: "مدير عام الشؤون المالية للمجموعة في مجموعة كيو جو، دولة الكويت. قيادة الحوكمة المالية المؤسسية والتخطيط المالي الاستراتيجي والميزانيات وإدارة العمليات المالية لقطاع الطيران والسياحة والخدمات اللوجستية.",
        org: "مجموعة كيو جو - دولة الكويت",
        langToggle: "English",
        langAria: "التحويل إلى اللغة الإنجليزية",
        saveContact: "حفظ جهة الاتصال",
        sendMessage: "إرسال رسالة",
        whatsappGreeting: "مرحباً أستاذ مرتضى، أود التواصل معك.",
        address: "ص.ب 5798 / الصفاة 13058، دولة الكويت",
        qubytzCta: "قم بتخصيص بطاقة NFC الخاصة بك مع كيوبيتز اليوم",
        vcardTitle: "مدير عام الشؤون المالية للمجموعة",
        vcardOrg: "مجموعة كيو جو",
        vcardNote: "مدير عام الشؤون المالية للمجموعة - مجموعة كيو جو، دولة الكويت."
    }
};

let currentLang = 'en';
let isTransitioning = false;

function setLanguage(lang, smooth = true) {
    if (!qgoProfile[lang] || isTransitioning) return;
    
    const profileContainer = document.querySelector('.profile-container');
    const t = qgoProfile[lang];

    const applyDOMUpdates = () => {
        currentLang = lang;

        // Document language and direction
        document.documentElement.lang = lang;
        document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
        document.body.setAttribute('dir', (lang === 'ar') ? 'rtl' : 'ltr');
        if (lang === 'ar') {
            document.body.classList.add('rtl-mode');
        } else {
            document.body.classList.remove('rtl-mode');
        }

        // Page title
        document.title = t.pageTitle;

        // Elements
        const nameEl = document.getElementById('profileName');
        const titleEl = document.getElementById('profileTitle');
        const aboutEl = document.getElementById('aboutText');
        const langBtn = document.getElementById('langToggleBtn');
        const saveContactText = document.getElementById('saveContactText');
        const sendMessageText = document.getElementById('sendMessageText');
        const sendWhatsappLink = document.getElementById('sendWhatsappLink');
        const whatsappContactLink = document.getElementById('whatsappContactLink');
        const qubytzCtaText = document.querySelector('.qubytz-cta-text');
        const qubytzCardCta = document.querySelector('.qubytz-card-cta');
        const locationText = document.getElementById('locationText');

        // Phone numbers display in standard international format (+965 XXXX XXXX) in dir="ltr"
        const phoneMobileText = document.getElementById('phoneMobileText');
        const phoneWorkText = document.getElementById('phoneWorkText');
        const phoneHotlineText = document.getElementById('phoneHotlineText');

        if (nameEl) nameEl.textContent = t.name;
        if (titleEl) titleEl.textContent = t.title;
        if (aboutEl) aboutEl.textContent = t.aboutText;
        if (langBtn) {
            langBtn.querySelector('.lang-btn-text').textContent = t.langToggle;
            langBtn.setAttribute('aria-label', t.langAria);
        }
        if (saveContactText) saveContactText.textContent = t.saveContact;
        if (sendMessageText) sendMessageText.textContent = t.sendMessage;

        if (sendWhatsappLink) {
            sendWhatsappLink.href = `https://wa.me/${qgoProfile.phoneMobileRaw}?text=${encodeURIComponent(t.whatsappGreeting)}`;
        }
        if (whatsappContactLink) {
            whatsappContactLink.href = `https://wa.me/${qgoProfile.phoneMobileRaw}?text=${encodeURIComponent(t.whatsappGreeting)}`;
        }

        if (qubytzCtaText) qubytzCtaText.textContent = t.qubytzCta;
        if (qubytzCardCta) qubytzCardCta.title = t.qubytzCta;

        if (locationText) locationText.textContent = t.address;

        if (phoneMobileText) {
            phoneMobileText.setAttribute('dir', 'ltr');
            phoneMobileText.textContent = qgoProfile.phoneMobile;
        }
        if (phoneWorkText) {
            phoneWorkText.setAttribute('dir', 'ltr');
            phoneWorkText.textContent = qgoProfile.phoneWork;
        }
        if (phoneHotlineText) {
            phoneHotlineText.setAttribute('dir', 'ltr');
            phoneHotlineText.textContent = qgoProfile.hotline;
        }
    };

    if (smooth && profileContainer) {
        isTransitioning = true;
        profileContainer.classList.add('lang-fading');
        setTimeout(() => {
            applyDOMUpdates();
            profileContainer.classList.remove('lang-fading');
            isTransitioning = false;
        }, 180);
    } else {
        applyDOMUpdates();
    }
}

/**
 * Universal vCard 3.0 generation and download
 */
async function downloadVCard() {
    try {
        const t = qgoProfile[currentLang];
        const name = (currentLang === 'ar') ? qgoProfile.ar.name : qgoProfile.en.name;
        const title = (currentLang === 'ar') ? qgoProfile.ar.vcardTitle : qgoProfile.en.vcardTitle;
        const org = (currentLang === 'ar') ? qgoProfile.ar.vcardOrg : qgoProfile.en.vcardOrg;
        const note = (currentLang === 'ar') ? qgoProfile.ar.vcardNote : qgoProfile.en.vcardNote;
        const address = (currentLang === 'ar') ? qgoProfile.ar.address : qgoProfile.en.address;

        const vcardLines = [
            'BEGIN:VCARD',
            'VERSION:3.0',
            `FN;CHARSET=UTF-8:${name}`,
            (currentLang === 'ar') ? `N;CHARSET=UTF-8:خان;مرتضى;;;` : `N;CHARSET=UTF-8:Khan;Murtuza;;;`,
            `TITLE;CHARSET=UTF-8:${title}`,
            `ORG;CHARSET=UTF-8:${org}`,
            `TEL;TYPE=CELL,VOICE:${qgoProfile.phoneMobile.replace(/\s+/g, '')}`,
            `TEL;TYPE=WORK,VOICE:+96522087417`,
            `TEL;TYPE=MAIN,VOICE:+9651887887`,
            `EMAIL;TYPE=PREF,INTERNET:${qgoProfile.email}`,
            `URL;TYPE=WORK:${qgoProfile.website}`,
            `ADR;TYPE=WORK,POSTAL;CHARSET=UTF-8:;;${address};Kuwait;;;Kuwait`,
            `NOTE;CHARSET=UTF-8:${note}`,
            'REV:' + new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z',
            'END:VCARD'
        ];

        const vcardData = vcardLines.join('\r\n');
        const filename = `${qgoProfile.vcfFilename}.vcf`;

        const userAgent = window.navigator.userAgent || '';
        const isAndroid = /Android/i.test(userAgent);

        // Native Android Share Sheet support
        if (isAndroid && navigator.canShare && typeof File !== 'undefined') {
            try {
                const file = new File([vcardData], filename, { type: 'text/vcard;charset=utf-8' });
                if (navigator.canShare({ files: [file] })) {
                    await navigator.share({
                        files: [file],
                        title: name,
                        text: `Save contact for ${name}`
                    });
                    return;
                }
            } catch (shareErr) {
                if (shareErr && shareErr.name === 'AbortError') return;
                console.warn('Android Share Sheet fallback:', shareErr);
            }
        }

        // Standard Blob download for iOS Safari, macOS & Windows
        const blob = new Blob([vcardData], { type: 'text/vcard;charset=utf-8;' });
        const blobUrl = URL.createObjectURL(blob);
        
        const downloadLink = document.createElement('a');
        downloadLink.href = blobUrl;
        downloadLink.download = filename;
        
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        
        setTimeout(() => {
            URL.revokeObjectURL(blobUrl);
        }, 1500);

    } catch (err) {
        console.error('vCard Download Error:', err);
    }
}

window.downloadVCard = downloadVCard;

document.addEventListener('DOMContentLoaded', () => {
    // English default on initial load (strictly no localStorage/navigator flipping)
    setLanguage('en', false);

    // Language Toggle Click Handler
    const langBtn = document.getElementById('langToggleBtn');
    if (langBtn) {
        langBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const nextLang = (currentLang === 'en') ? 'ar' : 'en';
            setLanguage(nextLang, true);
        });
    }

    // Save Contact Button Click Handler
    const saveContactBtn = document.getElementById('saveContactBtn');
    if (saveContactBtn) {
        saveContactBtn.addEventListener('click', (e) => {
            e.preventDefault();
            downloadVCard();
        });
    }
});
