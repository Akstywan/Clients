/**
 * script.js - Universal Contact Card & vCard Generator with Multilingual Support (English & Arabic)
 * Optimized for iOS (iPhone Safari), Android (Samsung / Google Contacts), macOS & Windows.
 */

const translations = {
    en: {
        pageTitle: "Ambikadevi Sreekumar - Principal | New Gulf Indian School",
        name: "Ambikadevi Sreekumar",
        title: "Principal",
        aboutText: "Principal at New Gulf Indian School, Kuwait. Dedicated to academic distinction, ethical leadership, and transformative CBSE education, empowering over 2,500 students in Kuwait to excel with intellect, empathy, and global vision.",
        org: "New Gulf Indian School, Kuwait",
        langToggle: "العربية",
        langAria: "Switch to Arabic",
        saveContact: "Save Contact",
        sendMessage: "Send Message",
        whatsappGreeting: "Hello Mrs. Ambikadevi, I would like to get in touch with you.",
        address: "New Gulf Indian School, 114 St, Mahboula, Kuwait",
        qubytzCta: "Customize your NFC Card with Qubytz Today",
        vcardTitle: "Principal",
        vcardOrg: "New Gulf Indian School, Kuwait",
        vcardNote: "Principal at New Gulf Indian School, Kuwait."
    },
    ar: {
        pageTitle: "السيدة أمبيكاديفي سريكومار - المديرة | مدرسة نيو جلف الهندية",
        name: "أمبيكاديفي سريكومار",
        title: "المديرة",
        aboutText: "مديرة مدرسة نيو جلف الهندية بالكويت. مكرسة للتميز الأكاديمي والقيادة الأخلاقية والتعليم التحويلي المتميز، لتمكين أكثر من 2500 طالب في الكويت من التفوق بفكر ورؤية عالمية.",
        org: "مدرسة نيو جلف الهندية - الكويت",
        langToggle: "English",
        langAria: "التحويل إلى اللغة الإنجليزية",
        saveContact: "حفظ جهة الاتصال",
        sendMessage: "إرسال رسالة",
        whatsappGreeting: "مرحباً الأستاذة أمبيكاديفي، أود التواصل معك.",
        address: "مدرسة نيو جلف الهندية، شارع 114، المهبولة، دولة الكويت",
        qubytzCta: "قم بتخصيص بطاقة NFC الخاصة بك مع كيوبيتز اليوم",
        vcardTitle: "المديرة",
        vcardOrg: "مدرسة نيو جلف الهندية",
        vcardNote: "المديرة - مدرسة نيو جلف الهندية، الكويت."
    }
};

let currentLang = 'en';
let isTransitioning = false;

function setLanguage(lang, smooth = true) {
    if (!translations[lang] || isTransitioning) return;
    
    const profileContainer = document.querySelector('.profile-container');
    const t = translations[lang];

    const applyDOMUpdates = () => {
        currentLang = lang;

        // Document dir and lang
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
        const qubytzCtaText = document.querySelector('.qubytz-cta-text');
        const qubytzCardCta = document.querySelector('.qubytz-card-cta');

        const phoneMobileText = document.getElementById('phoneMobileText');
        const phoneWorkText = document.getElementById('phoneWorkText');
        const locationText = document.getElementById('locationText');

        if (nameEl) nameEl.textContent = t.name;
        if (titleEl) titleEl.textContent = t.title;
        if (aboutEl) aboutEl.textContent = t.aboutText;
        if (langBtn) {
            langBtn.querySelector('.lang-btn-text').textContent = t.langToggle;
            langBtn.setAttribute('aria-label', t.langAria);
        }
        if (saveContactText) saveContactText.textContent = t.saveContact;
        if (sendMessageText) sendMessageText.textContent = t.sendMessage;
        if (qubytzCtaText) qubytzCtaText.textContent = t.qubytzCta;
        if (qubytzCardCta) qubytzCardCta.title = t.qubytzCta;

        if (locationText) locationText.textContent = t.address;
        if (phoneMobileText) {
            phoneMobileText.setAttribute('dir', 'ltr');
            phoneMobileText.textContent = '+965 9936 9440';
        }
        if (phoneWorkText) {
            phoneWorkText.setAttribute('dir', 'ltr');
            phoneWorkText.textContent = '+965 2375 1515';
        }

        if (sendWhatsappLink) {
            const phone = "96599369440";
            sendWhatsappLink.href = `https://wa.me/${phone}?text=${encodeURIComponent(t.whatsappGreeting)}`;
        }

    };

    if (smooth && profileContainer) {
        isTransitioning = true;
        profileContainer.classList.add('lang-fading');
        
        setTimeout(() => {
            applyDOMUpdates();
            profileContainer.classList.remove('lang-fading');
            setTimeout(() => {
                isTransitioning = false;
            }, 300);
        }, 180);
    } else {
        applyDOMUpdates();
    }
}

function toggleLanguage() {
    const nextLang = currentLang === 'en' ? 'ar' : 'en';
    setLanguage(nextLang, true);
}

window.toggleLanguage = toggleLanguage;

async function downloadVCard(contact) {
    try {
        const t = translations[currentLang] || translations.en;
        
        if (!contact || typeof contact !== 'object') {
            const body = document.body;
            contact = {
                name: currentLang === 'ar' ? 'أمبيكاديفي سريكومار' : (body.getAttribute('data-name') || 'Ambikadevi Sreekumar'),
                title: t.vcardTitle,
                company: t.vcardOrg,
                phone: body.getAttribute('data-phone') || '+965 9936 9440',
                workPhone: body.getAttribute('data-workphone') || '+965 2375 1515',
                email: body.getAttribute('data-email') || 'principal@newgiskuwait.net',
                website: body.getAttribute('data-website') || 'https://newgiskuwait.com',
                address: t.address,
                note: t.vcardNote
            };
        }

        const name = contact.name || 'Ambikadevi Sreekumar';
        const title = contact.title || '';
        const org = contact.company || contact.org || 'New Gulf Indian School, Kuwait';
        const phone = contact.phone || '';
        const workPhone = contact.workPhone || '';
        const email = contact.email || '';
        const website = contact.website || '';
        const address = contact.address || contact.location || '';
        const note = contact.note || '';

        const nameParts = name.trim().split(/\s+/);
        const firstName = nameParts[0] || '';
        const lastName = nameParts.slice(1).join(' ') || '';

        const vcardLines = [
            'BEGIN:VCARD',
            'VERSION:3.0',
            'FN:' + name,
            'N:' + lastName + ';' + firstName + ';;;',
            'ORG:' + org,
            'TITLE:' + title
        ];

        if (phone) {
            vcardLines.push('TEL;TYPE=CELL,VOICE:' + phone);
        }
        if (workPhone) {
            vcardLines.push('TEL;TYPE=WORK,VOICE:' + workPhone);
        }
        if (email) {
            vcardLines.push('EMAIL;TYPE=PREF,INTERNET:' + email);
        }
        if (website) {
            vcardLines.push('URL;TYPE=WORK:' + website);
        }
        if (address) {
            vcardLines.push('ADR;TYPE=WORK,POSTAL:;;' + address + ';;;;');
        }
        if (note) {
            vcardLines.push('NOTE:' + note);
        }

        vcardLines.push('REV:' + new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z');
        vcardLines.push('END:VCARD');

        const vcardData = vcardLines.join('\r\n');
        const filename = 'Ambikadevi_Sreekumar.vcf';

        const userAgent = window.navigator.userAgent || '';
        const isAndroid = /Android/i.test(userAgent);

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
    // Page always begins in English by default. Language changes ONLY when toggle button is clicked.

    const saveContactBtn = document.getElementById('saveContactBtn');
    if (saveContactBtn) {
        saveContactBtn.addEventListener('click', () => {
            downloadVCard();
        });

        saveContactBtn.addEventListener('keydown', (e) => {
            if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                downloadVCard();
            }
        });
    }

    const langToggleBtn = document.getElementById('langToggleBtn');
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', toggleLanguage);
    }
});
