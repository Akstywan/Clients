/**
 * script.js - Staff Contact Cards with Multilingual Support (English & Arabic)
 * Optimized for iOS (iPhone Safari), Android (Samsung / Google Contacts), macOS & Windows.
 */

const staffTranslations = {
    "Mohammed Safwan": {
        en: {
            pageTitle: "Mohammed Safwan - IT Solutions Consultant | QUBYTZ",
            name: "Mohammed Safwan",
            title: "IT Solutions Consultant",
            aboutText: "Managing day-to-day operations and client success at QUBYTZ. Committed to streamlined processes and delivering exceptional INTEGRATED COMPUTER SERVICES.",
            org: "QUBYTZ INTEGRATED COMPUTER SOLUTIONS COMPANY",
            address: "Kuwait City, Kuwait",
            vcardTitle: "IT Solutions Consultant",
            vcardNote: "IT Solutions Consultant at QUBYTZ INTEGRATED COMPUTER SOLUTIONS COMPANY, Kuwait."
        },
        ar: {
            pageTitle: "محمد صفوان - استشاري حلول تكنولوجيا المعلومات | كيوبتز",
            name: "محمد صفوان",
            title: "استشاري حلول تكنولوجيا المعلومات",
            aboutText: "إدارة العمليات اليومية ونجاح العملاء في شركة كيوبتز. ملتزمون بتبسيط الإجراءات وتقديم خدمات حلول الكمبيوتر المتكاملة المتميزة.",
            org: "شركة كيوبتز لحلول الكمبيوتر المتكاملة",
            address: "مدينة الكويت، دولة الكويت",
            vcardTitle: "استشاري حلول تكنولوجيا المعلومات",
            vcardNote: "استشاري حلول تكنولوجيا المعلومات - شركة كيوبتز للحلول المتكاملة، دولة الكويت."
        }
    },
    "Nandu P.L.J": {
        en: {
            pageTitle: "Co Founder & Director | QUBYTZ",
            name: "Nandu P.L.J",
            title: "Co Founder & Director",
            aboutText: "Overseeing the technical architecture and solutions at QUBYTZ. Focused on scalable, secure, and cutting-edge INTEGRATED COMPUTER SYSTEMS.",
            org: "QUBYTZ INTEGRATED COMPUTER SOLUTIONS COMPANY",
            address: "Kuwait City, Kuwait",
            vcardTitle: "Co Founder & Director",
            vcardNote: "Co Founder & Director at QUBYTZ INTEGRATED COMPUTER SOLUTIONS COMPANY, Kuwait."
        },
        ar: {
            pageTitle: "ناندو بي إل جي - شريك مؤسس ومدير | كيوبتز",
            name: "ناندو بي إل جي",
            title: "شريك مؤسس ومدير",
            aboutText: "الإشراف على البنية التقنية والحلول البرمجية في شركة كيوبتز. التركيز على أنظمة الكمبيوتر المتكاملة القابلة للتطوير والآمنة والمبتكرة.",
            org: "شركة كيوبتز لحلول الكمبيوتر المتكاملة",
            address: "مدينة الكويت، دولة الكويت",
            vcardTitle: "شريك مؤسس ومدير",
            vcardNote: "شريك مؤسس ومدير - شركة كيوبتز لحلول الكمبيوتر المتكاملة، دولة الكويت."
        }
    },
    "Mohammed Nawas": {
        en: {
            pageTitle: "Co Founder & Director | QUBYTZ",
            name: "Mohammed Nawas",
            title: "Co Founder & Director",
            aboutText: "Driving innovation and strategic growth at QUBYTZ. Passionate about delivering INTEGRATED COMPUTER SOLUTIONS that transform businesses and provide exceptional technological value.",
            org: "QUBYTZ INTEGRATED COMPUTER SOLUTIONS COMPANY",
            address: "Kuwait City, Kuwait",
            vcardTitle: "Co Founder & Director",
            vcardNote: "Co Founder & Director at QUBYTZ INTEGRATED COMPUTER SOLUTIONS COMPANY, Kuwait."
        },
        ar: {
            pageTitle: "محمد نواس - شريك مؤسس ومدير | كيوبتز",
            name: "محمد نواس",
            title: "شريك مؤسس ومدير",
            aboutText: "قيادة الابتكار والنمو الاستراتيجي في شركة كيوبتز. شغوف بتقديم حلول الكمبيوتر المتكاملة التي تدعم الأعمال وتوفر قيمة تكنولوجية استثنائية.",
            org: "شركة كيوبتز لحلول الكمبيوتر المتكاملة",
            address: "مدينة الكويت، دولة الكويت",
            vcardTitle: "شريك مؤسس ومدير",
            vcardNote: "شريك مؤسس ومدير - شركة كيوبتز لحلول الكمبيوتر المتكاملة، دولة الكويت."
        }
    }
};

let currentLang = 'en';
let isTransitioning = false;

function getCurrentStaffKey() {
    const bodyName = (document.body.getAttribute('data-name') || '').toLowerCase();
    if (bodyName.includes('nawas')) return "Mohammed Nawas";
    if (bodyName.includes('nandu')) return "Nandu P.L.J";
    if (bodyName.includes('safwan')) return "Mohammed Safwan";

    const path = window.location.pathname.toLowerCase();
    if (path.includes('nawas')) return "Mohammed Nawas";
    if (path.includes('nandu')) return "Nandu P.L.J";
    if (path.includes('safwan')) return "Mohammed Safwan";

    return "Mohammed Safwan";
}

function setLanguage(lang, smooth = true) {
    const staffKey = getCurrentStaffKey();
    const tGroup = staffTranslations[staffKey];
    if (!tGroup || !tGroup[lang] || isTransitioning) return;
    
    const profileContainer = document.querySelector('.profile-container');
    const t = tGroup[lang];

    const applyDOMUpdates = () => {
        currentLang = lang;

        document.documentElement.lang = lang;
        document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
        document.body.setAttribute('dir', (lang === 'ar') ? 'rtl' : 'ltr');
        if (lang === 'ar') {
            document.body.classList.add('rtl-mode');
        } else {
            document.body.classList.remove('rtl-mode');
        }

        document.title = t.pageTitle;

        const nameEl = document.getElementById('profileName');
        const titleEl = document.getElementById('profileTitle');
        const aboutEl = document.getElementById('aboutText');
        const langBtn = document.getElementById('langToggleBtn');
        const saveContactText = document.getElementById('saveContactText');
        const sendMessageText = document.getElementById('sendMessageText');
        const sendWhatsappLink = document.getElementById('sendWhatsappLink');

        if (nameEl) nameEl.textContent = t.name;
        if (titleEl) titleEl.textContent = t.title;
        if (aboutEl) aboutEl.textContent = t.aboutText;
        if (langBtn) {
            langBtn.querySelector('.lang-btn-text').textContent = (lang === 'en' ? 'العربية' : 'English');
            langBtn.setAttribute('aria-label', (lang === 'en' ? 'Switch to Arabic' : 'التحويل إلى الإنجليزية'));
        }
        if (saveContactText) saveContactText.textContent = (lang === 'ar' ? 'حفظ جهة الاتصال' : 'Save Contact');
        if (sendMessageText) sendMessageText.textContent = (lang === 'ar' ? 'إرسال رسالة' : 'Send Message');

        const qubytzCtaText = document.querySelector('.qubytz-cta-text');
        const qubytzCardCta = document.querySelector('.qubytz-card-cta');
        const ctaText = lang === 'ar' ? 'قم بتخصيص بطاقة NFC الخاصة بك مع كيوبيتز اليوم' : 'Customize your NFC Card with Qubytz Today';
        if (qubytzCtaText) qubytzCtaText.textContent = ctaText;
        if (qubytzCardCta) qubytzCardCta.title = ctaText;

        const phoneMobileText = document.getElementById('phoneMobileText');
        const locationText = document.getElementById('locationText');

        if (locationText) locationText.textContent = t.address;
        if (phoneMobileText) {
            const rawPhone = document.body.getAttribute('data-phone') || '';
            phoneMobileText.setAttribute('dir', 'ltr');
            if (rawPhone.includes('98761069')) {
                phoneMobileText.textContent = '+965 9876 1069';
            } else if (rawPhone.includes('97222765')) {
                phoneMobileText.textContent = '+965 9722 2765';
            }
        }

        if (sendWhatsappLink) {
            const phone = document.body.getAttribute('data-phone') || '96598761069';
            const cleanPhone = phone.replace(/\D/g, '');
            const greeting = lang === 'ar' ? `مرحباً ${t.name}، أود التواصل معك.` : `Hello ${t.name}, I would like to get in touch with you.`;
            sendWhatsappLink.href = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(greeting)}`;
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
        const staffKey = getCurrentStaffKey();
        const t = staffTranslations[staffKey][currentLang];
        
        if (!contact || typeof contact !== 'object') {
            const body = document.body;
            contact = {
                name: t.name,
                title: t.vcardTitle,
                company: t.org,
                phone: body.getAttribute('data-phone') || '+96598761069',
                workPhone: body.getAttribute('data-workphone') || '',
                email: body.getAttribute('data-email') || 'support@qubytz.com',
                website: body.getAttribute('data-website') || 'https://www.qubytz.com',
                address: t.address,
                note: t.vcardNote
            };
        }

        const name = contact.name || 'Contact';
        const title = contact.title || '';
        const org = contact.company || contact.org || 'QUBYTZ INTEGRATED COMPUTER SOLUTIONS COMPANY';
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
        const filename = name.replace(/\s+/g, '_') + '.vcf';

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
