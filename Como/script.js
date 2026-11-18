/**
 * script.js - Como Travel & Tourism Contact Cards with Multilingual Support (English & Arabic)
 * Dynamic vCard generator compatible with iOS Safari, Android, macOS & Windows.
 */

const comoProfiles = {
    "Mohammad Khalaf": {
        slug: "Mohammad",
        vcfFilename: "Mohammad_Khalaf",
        phoneMobile: "+965 9948 8800",
        phoneMobileRaw: "96599488800",
        phoneWork: "+965 181 1008",
        phoneWorkRaw: "9651811008",
        email: "mb@comotravels.com",
        website: "https://comotravels.com",
        websiteDisplay: "comotravels.com",
        en: {
            pageTitle: "Mohammad Khalaf - Chairman | Como Travel & Tourism",
            name: "Mohammad Khalaf",
            title: "Chairman",
            aboutText: "Chairman at Como Travel & Tourism, Kuwait. Leading strategic governance, corporate growth, executive leadership, and premier travel management across Kuwait.",
            org: "Como Travel & Tourism, Kuwait",
            langToggle: "العربية",
            langAria: "Switch to Arabic",
            saveContact: "Save Contact",
            sendMessage: "Send Message",
            whatsappGreeting: "Hello Mr. Mohammad, I would like to get in touch with you.",
            address: "Head Office: Egaila 89 Mall, 3rd Floor, Kuwait",
            branches: "Branches: Bayan · Shuhada · Mangaf",
            qubytzCta: "Customize your NFC Card with Qubytz Today",
            vcardTitle: "Chairman",
            vcardOrg: "Como Travel & Tourism",
            vcardNote: "Chairman at Como Travel & Tourism, Kuwait."
        },
        ar: {
            pageTitle: "محمد خلف - رئيس مجلس الإدارة | سفريات كومو",
            name: "محمد خلف",
            title: "رئيس مجلس الإدارة",
            aboutText: "رئيس مجلس الإدارة في سفريات كومو، دولة الكويت. قيادة الحوكمة الاستراتيجية، والنمو المؤسسي، والريادة التنفيذية، وإدارة خدمات السفر والسياحة الرائدة في الكويت.",
            org: "سفريات كومو - دولة الكويت",
            langToggle: "English",
            langAria: "التحويل إلى اللغة الإنجليزية",
            saveContact: "حفظ جهة الاتصال",
            sendMessage: "إرسال رسالة",
            whatsappGreeting: "مرحباً أستاذ محمد، أود التواصل معك.",
            address: "المقر الرئيسي: العقيلة، مول 89، الدور الثالث، دولة الكويت",
            branches: "الفروع: بيان · الشهداء · المنقف",
            qubytzCta: "قم بتخصيص بطاقة NFC الخاصة بك مع كيوبيتز اليوم",
            vcardTitle: "رئيس مجلس الإدارة",
            vcardOrg: "سفريات كومو",
            vcardNote: "رئيس مجلس الإدارة - سفريات كومو، دولة الكويت."
        }
    },
    "Mohammed Alhajeri": {
        slug: "Alhajeri",
        vcfFilename: "Mohammed_Alhajeri",
        phoneMobile: "+965 9713 1378",
        phoneMobileRaw: "96597131378",
        phoneWork: "+965 181 1008",
        phoneWorkRaw: "9651811008",
        email: "mr@comotravels.com",
        website: "https://comotravels.com",
        websiteDisplay: "comotravels.com",
        en: {
            pageTitle: "Mohammed Alhajeri - Executive Manager | Como Travel & Tourism",
            name: "Mohammed Alhajeri",
            title: "Executive Manager",
            aboutText: "Executive Manager at Como Travel & Tourism, Kuwait. Directing executive operations, business development, client partnerships, and premier travel solutions across Kuwait.",
            org: "Como Travel & Tourism, Kuwait",
            langToggle: "العربية",
            langAria: "Switch to Arabic",
            saveContact: "Save Contact",
            sendMessage: "Send Message",
            whatsappGreeting: "Hello Mr. Mohammed, I would like to get in touch with you.",
            address: "Head Office: Egaila 89 Mall, 3rd Floor, Kuwait",
            branches: "Branches: Bayan · Shuhada · Mangaf",
            qubytzCta: "Customize your NFC Card with Qubytz Today",
            vcardTitle: "Executive Manager",
            vcardOrg: "Como Travel & Tourism",
            vcardNote: "Executive Manager at Como Travel & Tourism, Kuwait."
        },
        ar: {
            pageTitle: "محمد الهاجري - المدير التنفيذي | سفريات كومو",
            name: "محمد الهاجري",
            title: "المدير التنفيذي",
            aboutText: "المدير التنفيذي في سفريات كومو، دولة الكويت. إدارة العمليات التنفيذية، وتطوير الأعمال، والشراكات الاستراتيجية، وتقديم أرقى حلول السفر والسياحة في الكويت.",
            org: "سفريات كومو - دولة الكويت",
            langToggle: "English",
            langAria: "التحويل إلى اللغة الإنجليزية",
            saveContact: "حفظ جهة الاتصال",
            sendMessage: "إرسال رسالة",
            whatsappGreeting: "مرحباً أستاذ محمد، أود التواصل معك.",
            address: "المقر الرئيسي: العقيلة، مول 89، الدور الثالث، دولة الكويت",
            branches: "الفروع: بيان · الشهداء · المنقف",
            qubytzCta: "قم بتخصيص بطاقة NFC الخاصة بك مع كيوبيتز اليوم",
            vcardTitle: "المدير التنفيذي",
            vcardOrg: "سفريات كومو",
            vcardNote: "المدير التنفيذي - سفريات كومو، دولة الكويت."
        }
    },
    "Amr Hamed": {
        slug: "Amr",
        vcfFilename: "Amr_Hamed",
        phoneMobile: "+965 9789 1096",
        phoneMobileRaw: "96597891096",
        phoneWork: "+965 181 1008",
        phoneWorkRaw: "9651811008",
        email: "accounts@comotravels.com",
        website: "https://comotravels.com",
        websiteDisplay: "comotravels.com",
        en: {
            pageTitle: "Amr Hamed - Financial Manager | Como Travel & Tourism",
            name: "Amr Hamed",
            title: "Financial Manager",
            aboutText: "Financial Manager at Como Travel & Tourism, Kuwait. Overseeing financial strategy, corporate budgeting, fiscal operations, and premier travel management across Kuwait.",
            org: "Como Travel & Tourism, Kuwait",
            langToggle: "العربية",
            langAria: "Switch to Arabic",
            saveContact: "Save Contact",
            sendMessage: "Send Message",
            whatsappGreeting: "Hello Mr. Amr, I would like to get in touch with you.",
            address: "Head Office: Egaila 89 Mall, 3rd Floor, Kuwait",
            branches: "Branches: Bayan · Shuhada · Mangaf",
            qubytzCta: "Customize your NFC Card with Qubytz Today",
            vcardTitle: "Financial Manager",
            vcardOrg: "Como Travel & Tourism",
            vcardNote: "Financial Manager at Como Travel & Tourism, Kuwait."
        },
        ar: {
            pageTitle: "عمرو حامد - المدير المالي | سفريات كومو",
            name: "عمرو حامد",
            title: "المدير المالي",
            aboutText: "المدير المالي في سفريات كومو، دولة الكويت. إدارة الاستراتيجيات المالية والميزانيات المؤسسية والعمليات المالية لخدمات السفر والسياحة الرائدة في الكويت.",
            org: "سفريات كومو - دولة الكويت",
            langToggle: "English",
            langAria: "التحويل إلى اللغة الإنجليزية",
            saveContact: "حفظ جهة الاتصال",
            sendMessage: "إرسال رسالة",
            whatsappGreeting: "مرحباً أستاذ عمرو، أود التواصل معك.",
            address: "المقر الرئيسي: العقيلة، مول 89، الدور الثالث، دولة الكويت",
            branches: "الفروع: بيان · الشهداء · المنقف",
            qubytzCta: "قم بتخصيص بطاقة NFC الخاصة بك مع كيوبيتز اليوم",
            vcardTitle: "المدير المالي",
            vcardOrg: "سفريات كومو",
            vcardNote: "المدير المالي - سفريات كومو، دولة الكويت."
        }
    },
    "Faten Al-Azhari": {
        slug: "Faten",
        vcfFilename: "Faten_Al-Azhari",
        phoneMobile: "+965 9968 9049",
        phoneMobileRaw: "96599689049",
        phoneWork: "+965 181 1008",
        phoneWorkRaw: "9651811008",
        email: "faten@comotravels.com",
        website: "https://comotravels.com",
        websiteDisplay: "comotravels.com",
        en: {
            pageTitle: "Faten Al-Azhari - General Manager | Como Travel & Tourism",
            name: "Faten Al-Azhari",
            title: "General Manager",
            aboutText: "General Manager at Como Travel & Tourism, Kuwait. Leading agency operations, strategic travel solutions, corporate partnerships, and premier customer experiences across Kuwait.",
            org: "Como Travel & Tourism, Kuwait",
            langToggle: "العربية",
            langAria: "Switch to Arabic",
            saveContact: "Save Contact",
            sendMessage: "Send Message",
            whatsappGreeting: "Hello Ms. Faten, I would like to get in touch with you.",
            address: "Head Office: Egaila 89 Mall, 3rd Floor, Kuwait",
            branches: "Branches: Bayan · Shuhada · Mangaf",
            qubytzCta: "Customize your NFC Card with Qubytz Today",
            vcardTitle: "General Manager",
            vcardOrg: "Como Travel & Tourism",
            vcardNote: "General Manager at Como Travel & Tourism, Kuwait."
        },
        ar: {
            pageTitle: "فاتن الأزهري - المديرة العامة | سفريات كومو",
            name: "فاتن الأزهري",
            title: "المديرة العامة",
            aboutText: "المديرة العامة في سفريات كومو، دولة الكويت. قيادة العمليات وإدارة حلول السفر المتميزة والشراكات المؤسسية لتقديم أرقى تجارب السفر والسياحة في الكويت.",
            org: "سفريات كومو - دولة الكويت",
            langToggle: "English",
            langAria: "التحويل إلى اللغة الإنجليزية",
            saveContact: "حفظ جهة الاتصال",
            sendMessage: "إرسال رسالة",
            whatsappGreeting: "مرحباً أستاذة فاتن، أود التواصل معك.",
            address: "المقر الرئيسي: العقيلة، مول 89، الدور الثالث، دولة الكويت",
            branches: "الفروع: بيان · الشهداء · المنقف",
            qubytzCta: "قم بتخصيص بطاقة NFC الخاصة بك مع كيوبيتز اليوم",
            vcardTitle: "المديرة العامة",
            vcardOrg: "سفريات كومو",
            vcardNote: "المديرة العامة - سفريات كومو، دولة الكويت."
        }
    }
};

let currentLang = 'en';
let isTransitioning = false;

function getProfile() {
    const rawName = (document.body.getAttribute('data-name') || '').trim();
    for (const [nameKey, prof] of Object.entries(comoProfiles)) {
        if (rawName.toLowerCase() === nameKey.toLowerCase() ||
            rawName.toLowerCase().includes(prof.slug.toLowerCase()) ||
            rawName.toLowerCase().includes(nameKey.toLowerCase())) {
            return prof;
        }
    }
    return comoProfiles["Mohammad Khalaf"] || comoProfiles["Mohammad Bader Khalaf"];
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
        const locationText = document.getElementById('locationText');
        const branchesText = document.getElementById('branchesText');

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
        if (branchesText) branchesText.textContent = t.branches;

        // International phone numbers remain clean in dir="ltr"
        if (phoneMobileText) {
            phoneMobileText.setAttribute('dir', 'ltr');
            phoneMobileText.textContent = profile.phoneMobile;
        }
        if (phoneWorkText) {
            phoneWorkText.setAttribute('dir', 'ltr');
            phoneWorkText.textContent = profile.phoneWork;
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
                workPhone: body.getAttribute('data-workphone') || profile.phoneWork,
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
        const email = contact.email || '';
        const website = contact.website || 'https://comotravels.com';
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
