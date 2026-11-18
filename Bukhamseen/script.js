/**
 * script.js - Bukhamseen Aviation Contact Cards with Multilingual Support (English & Arabic)
 * Dynamic vCard generator compatible with iOS Safari, Android, macOS & Windows.
 */

const bukhamseenProfiles = {
    "Elhoussieny Abdulhameed": {
        slug: "Elhoussieny",
        vcfFilename: "Elhoussieny_Abdulhameed",
        phoneMobile: "+965 9737 1035",
        phoneMobileRaw: "96597371035",
        phoneWork: "+965 2206 3064",
        phoneWorkVcard: "+96522063064",
        phoneFax: "+965 2246 1437",
        phoneFaxVcard: "+96522461437",
        email: "e.abdulhameed@bukhamseenaviation.com",
        website: "https://bukhamseenaviation.com",
        websiteDisplay: "bukhamseenaviation.com",
        en: {
            pageTitle: "Elhoussieny Abdulhameed - CEO | Bukhamseen Aviation",
            name: "Elhoussieny Abdulhameed",
            title: "CEO",
            aboutText: "CEO at Bukhamseen Aviation, Kuwait. Spearheading strategic aviation leadership, international airline representation, corporate travel management, and premier cargo & logistics operations across Kuwait and the region.",
            org: "Bukhamseen Aviation, Kuwait",
            langToggle: "العربية",
            langAria: "Switch to Arabic",
            saveContact: "Save Contact",
            sendMessage: "Send Message",
            whatsappGreeting: "Hello Mr. Elhoussieny, I would like to get in touch with you.",
            address: "Al-Sharq - Ahmed Al Jaber Street, Block 04 - B8 Tower, 13th Floor, Kuwait City",
            qubytzCta: "Customize your NFC Card with Qubytz Today",
            vcardTitle: "CEO",
            vcardOrg: "Bukhamseen Aviation",
            vcardNote: "CEO at Bukhamseen Aviation, Kuwait."
        },
        ar: {
            pageTitle: "الحسيني عبدالحميد - الرئيس التنفيذي | بوخمسين للطيران",
            name: "الحسيني عبدالحميد",
            title: "الرئيس التنفيذي",
            aboutText: "الرئيس التنفيذي في شركة بوخمسين للطيران، دولة الكويت. قيادة الاستراتيجيات التنفيذية لقطاع الطيران، وتمثيل شركات الطيران العالمية، وإدارة سفر الشركات وخدمات الشحن الجوي والخدمات اللوجستية الرائدة في الكويت والمنطقة.",
            org: "بوخمسين للطيران - دولة الكويت",
            langToggle: "English",
            langAria: "التحويل إلى اللغة الإنجليزية",
            saveContact: "حفظ جهة الاتصال",
            sendMessage: "إرسال رسالة",
            whatsappGreeting: "مرحباً أستاذ الحسيني، أود التواصل معك.",
            address: "الشرق - شارع أحمد الجابر، قطعة 4 - برج B8، الدور 13، مدينة الكويت",
            qubytzCta: "قم بتخصيص بطاقة NFC الخاصة بك مع كيوبيتز اليوم",
            vcardTitle: "الرئيس التنفيذي",
            vcardOrg: "بوخمسين للطيران",
            vcardNote: "الرئيس التنفيذي - شركة بوخمسين للطيران، دولة الكويت."
        }
    }
};

let currentLang = 'en';
let isTransitioning = false;

function getProfile() {
    const rawName = (document.body.getAttribute('data-name') || '').trim();
    for (const [nameKey, prof] of Object.entries(bukhamseenProfiles)) {
        if (rawName.toLowerCase() === nameKey.toLowerCase() ||
            rawName.toLowerCase().includes(prof.slug.toLowerCase()) ||
            rawName.toLowerCase().includes(nameKey.toLowerCase())) {
            return prof;
        }
    }
    return bukhamseenProfiles["Elhoussieny Abdulhameed"];
}

function setLanguage(lang, smooth = true) {
    const profile = getProfile();
    const t = profile[lang] || profile.en;
    if (isTransitioning) return;
    
    const profileContainer = document.querySelector('.profile-container');

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
        const whatsappContactLink = document.getElementById('whatsappContactLink');

        const qubytzCtaText = document.querySelector('.qubytz-cta-text');
        const qubytzCardCta = document.querySelector('.qubytz-card-cta');

        const phoneMobileText = document.getElementById('phoneMobileText');
        const phoneWorkText = document.getElementById('phoneWorkText');
        const phoneFaxText = document.getElementById('phoneFaxText');
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

        // International phone numbers remain clean in dir="ltr"
        if (phoneMobileText) {
            phoneMobileText.setAttribute('dir', 'ltr');
            phoneMobileText.textContent = profile.phoneMobile;
        }
        if (phoneWorkText) {
            phoneWorkText.setAttribute('dir', 'ltr');
            phoneWorkText.textContent = profile.phoneWork;
        }
        if (phoneFaxText) {
            phoneFaxText.setAttribute('dir', 'ltr');
            phoneFaxText.textContent = profile.phoneFax;
        }

        const phone = profile.phoneMobileRaw;
        const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(t.whatsappGreeting)}`;
        if (sendWhatsappLink) {
            sendWhatsappLink.href = waUrl;
        }
        if (whatsappContactLink) {
            whatsappContactLink.href = waUrl;
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
        const profile = getProfile();
        const t = profile[currentLang] || profile.en;
        const body = document.body;
        
        if (!contact || typeof contact !== 'object') {
            contact = {
                name: currentLang === 'ar' ? t.name : (body.getAttribute('data-name') || t.name),
                title: t.vcardTitle,
                company: t.vcardOrg,
                phone: body.getAttribute('data-phone') || profile.phoneMobile,
                workPhone: body.getAttribute('data-workphone') || profile.phoneWorkVcard,
                fax: body.getAttribute('data-fax') || profile.phoneFaxVcard,
                email: body.getAttribute('data-email') || profile.email,
                website: body.getAttribute('data-website') || profile.website,
                address: t.address,
                note: t.vcardNote
            };
        }

        const name = contact.name || t.name;
        const title = contact.title || t.vcardTitle;
        const org = contact.company || t.vcardOrg;
        const phone = contact.phone || '';
        const workPhone = contact.workPhone || '';
        const fax = contact.fax || '';
        const email = contact.email || '';
        const website = contact.website || 'https://bukhamseenaviation.com';
        const address = contact.address || contact.location || t.address;
        const note = contact.note || t.vcardNote;

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
        if (fax) {
            vcardLines.push('TEL;TYPE=WORK,FAX:' + fax);
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
        const filename = `${profile.vcfFilename || 'contact'}.vcf`;

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
    // Default Language: English. Explicit toggle only.
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
