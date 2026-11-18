import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Directories to ignore (including internal staff / parent company)
const IGNORE_DIRS = new Set([
  'node_modules',
  'dist',
  'public',
  '.git',
  '.agent',
  'scripts',
  'images',
  'staff' // Qubytz internal staff - excluded as Qubytz is the parent company
]);

/**
 * Curated metadata dictionary for known client companies
 */
const KNOWN_CLIENT_COMPANIES = {
  GulfIndianSchool: {
    name: 'New Gulf Indian School',
    category: 'Education',
    subtitle: 'Private CBSE Educational Institution',
    desc: 'Leading educational institution in Kuwait delivering academic distinction, ethical leadership, and transformative CBSE education.',
    url: '/GulfIndianSchool/index.html',
    logoWebp: '/GulfIndianSchool/images/Gis_logo.webp',
    logoPng: '/GulfIndianSchool/images/Gis_logo.png',
    icon: 'fa-graduation-cap',
    color: '#4ade80',
    tagBg: 'rgba(22, 163, 74, 0.15)',
    tagBorder: 'rgba(22, 163, 74, 0.35)'
  },
  Travelport: {
    name: 'Travelport',
    category: 'Travelport Partner',
    subtitle: 'Travel Technology Systems Co.',
    desc: 'Official Partner of Travelport in Kuwait, providing world-class travel technology systems, corporate distribution, and aviation booking solutions.',
    url: '/Travelport/index.html',
    logoWebp: '/Travelport/images/TravelportLogo.webp',
    logoPng: '/Travelport/images/TravelportLogo.png',
    icon: 'fa-plane',
    color: '#38bdf8',
    tagBg: 'rgba(0, 102, 255, 0.15)',
    tagBorder: 'rgba(0, 102, 255, 0.35)'
  },
  onflap: {
    name: 'Onflap Technologies',
    category: 'Software & Cloud Solutions',
    subtitle: 'Enterprise Software & Cloud Architecture',
    desc: 'Global technology partner specializing in scalable enterprise software engineering, cloud architecture, and modern digital transformation.',
    url: '/onflap/index.html',
    logoWebp: '/onflap/images/logo.webp',
    logoPng: '/onflap/images/logo.png',
    icon: 'fa-cubes',
    color: '#f43f5e',
    tagBg: 'rgba(244, 63, 94, 0.15)',
    tagBorder: 'rgba(244, 63, 94, 0.35)'
  },
  AlFaisal: {
    name: 'Al Faisal Educational Est.',
    category: 'Educational Establishment',
    subtitle: 'Private Educational Institutions & Schools',
    desc: 'Prominent educational establishment in Kuwait overseeing premier private academic institutions, curriculum excellence, and educational leadership.',
    url: '/AlFaisal/index.html',
    logoWebp: '/AlFaisal/images/AlFaisal_logo.webp',
    logoPng: '/AlFaisal/images/AlFaisal_logo.png',
    icon: 'fa-school',
    color: '#ef4444',
    tagBg: 'rgba(239, 68, 68, 0.15)',
    tagBorder: 'rgba(239, 68, 68, 0.35)'
  },
  Como: {
    name: 'Como Travel & Tourism',
    category: 'Travel & Tourism',
    subtitle: 'Premier IATA Travel Agency',
    desc: 'Accredited IATA travel and tourism agency in Kuwait, offering corporate travel management, flight reservations, and customized holiday packages.',
    url: '/Como/index.html',
    logoWebp: '/Como/images/Como_logo.webp',
    logoPng: '/Como/images/Como_logo.png',
    icon: 'fa-plane-departure',
    color: '#10b981',
    tagBg: 'rgba(16, 185, 129, 0.15)',
    tagBorder: 'rgba(16, 185, 129, 0.35)'
  },
  Bukhamseen: {
    name: 'Bukhamseen Aviation',
    category: 'Aviation & Travel',
    subtitle: 'Aviation, Airline GSA & Travel Group',
    desc: 'Leading aviation and travel group in Kuwait specializing in international airline representation (GSA), corporate travel management, and air cargo logistics.',
    url: '/Bukhamseen/index.html',
    logoWebp: '/Bukhamseen/images/Bukhamseen_logo.webp',
    logoPng: '/Bukhamseen/images/Bukhamseen_logo.png',
    icon: 'fa-plane-up',
    color: '#eab308',
    tagBg: 'rgba(234, 179, 8, 0.15)',
    tagBorder: 'rgba(234, 179, 8, 0.35)'
  },
  Qgo: {
    name: "Q'go Group",
    category: 'Aviation & Travel',
    subtitle: 'Aviation, Travel, Cargo & Logistics Group',
    desc: "Leading travel, aviation, cargo logistics, and corporate services group in Kuwait operating premier OTA platforms, airline representation, and global logistics solutions.",
    url: '/Qgo/index.html',
    logoWebp: '/Qgo/images/Qgo_logo.webp',
    logoPng: '/Qgo/images/Qgo_logo.png',
    icon: 'fa-plane-departure',
    color: '#0063a6',
    tagBg: 'rgba(0, 99, 166, 0.15)',
    tagBorder: 'rgba(0, 99, 166, 0.35)'
  }
};

/**
 * Categorize dynamically detected client based on folder name and text
 */
function detectCategory(folderName, text = '') {
  const lower = `${folderName} ${text}`.toLowerCase();
  
  if (lower.includes('travel') || lower.includes('flight') || lower.includes('tour') || lower.includes('tts')) {
    return {
      tag: 'Travelport Partner',
      icon: 'fa-plane',
      color: '#38bdf8',
      tagBg: 'rgba(0, 102, 255, 0.15)',
      tagBorder: 'rgba(0, 102, 255, 0.35)'
    };
  }
  if (lower.includes('school') || lower.includes('education') || lower.includes('academic') || lower.includes('gis')) {
    return {
      tag: 'Education',
      icon: 'fa-graduation-cap',
      color: '#4ade80',
      tagBg: 'rgba(22, 163, 74, 0.15)',
      tagBorder: 'rgba(22, 163, 74, 0.35)'
    };
  }
  if (lower.includes('health') || lower.includes('clinic') || lower.includes('doctor') || lower.includes('hospital')) {
    return {
      tag: 'Healthcare',
      icon: 'fa-user-md',
      color: '#f87171',
      tagBg: 'rgba(239, 68, 68, 0.15)',
      tagBorder: 'rgba(239, 68, 68, 0.35)'
    };
  }
  if (lower.includes('onflap') || lower.includes('software') || lower.includes('cloud')) {
    return {
      tag: 'Software & Cloud Solutions',
      icon: 'fa-cubes',
      color: '#f43f5e',
      tagBg: 'rgba(244, 63, 94, 0.15)',
      tagBorder: 'rgba(244, 63, 94, 0.35)'
    };
  }
  return {
    tag: 'Corporate Enterprise',
    icon: 'fa-building',
    color: '#fbbf24',
    tagBg: 'rgba(245, 158, 11, 0.15)',
    tagBorder: 'rgba(245, 158, 11, 0.35)'
  };
}

/**
 * Find logo in client directory
 */
function findClientLogo(clientDir, folderName) {
  const imagesDir = path.join(clientDir, 'images');
  if (!fs.existsSync(imagesDir)) return null;

  const files = fs.readdirSync(imagesDir);
  const logoWebp = files.find(f => f.toLowerCase().includes('logo') && f.endsWith('.webp'));
  const logoPng = files.find(f => f.toLowerCase().includes('logo') && (f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.jpeg')));

  if (logoWebp || logoPng) {
    return {
      webp: logoWebp ? `/${folderName}/images/${logoWebp}` : null,
      png: logoPng ? `/${folderName}/images/${logoPng}` : (logoWebp ? `/${folderName}/images/${logoWebp.replace('.webp', '.png')}` : null)
    };
  }
  return null;
}

/**
 * Scan workspace for client company directories
 */
function scanClientCompanies(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const companies = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (entry.name.startsWith('.')) continue;
    if (IGNORE_DIRS.has(entry.name)) continue;
    
    // Explicitly exclude any qubytz-related internal folder
    if (entry.name.toLowerCase().includes('qubytz') || entry.name.toLowerCase().includes('staff')) continue;

    const folderName = entry.name;
    const clientPath = path.join(dir, folderName);

    // Check if folder has HTML files
    const htmlFiles = fs.readdirSync(clientPath).filter(f => f.endsWith('.html'));
    if (htmlFiles.length === 0) continue;

    // Use known company metadata if available
    if (KNOWN_CLIENT_COMPANIES[folderName]) {
      companies.push({
        id: folderName.toLowerCase(),
        folder: folderName,
        ...KNOWN_CLIENT_COMPANIES[folderName]
      });
      continue;
    }

    // Dynamic discovery for newly added client company directories
    const entryHtml = htmlFiles.includes('index.html') ? 'index.html' : htmlFiles[0];
    const htmlContent = fs.readFileSync(path.join(clientPath, entryHtml), 'utf-8');

    // Extract company name from data-company or title
    const companyMatch = htmlContent.match(/data-company=["']([^"']+)["']/i);
    const titleMatch = htmlContent.match(/<title>(.*?)<\/title>/i);
    let companyName = companyMatch ? companyMatch[1].trim() : (titleMatch ? titleMatch[1].split('-').pop().trim() : folderName);
    
    // Clean up company name
    companyName = companyName.replace(/,\s*Kuwait/i, '').trim();

    const category = detectCategory(folderName, htmlContent);
    const logos = findClientLogo(clientPath, folderName);

    companies.push({
      id: folderName.toLowerCase(),
      folder: folderName,
      name: companyName,
      category: category.tag,
      subtitle: `${category.tag} Client`,
      desc: `Corporate client utilizing Qubytz contactless smart NFC business cards for seamless networking and brand presentation.`,
      url: `/${folderName}/${entryHtml}`,
      logoWebp: logos?.webp || null,
      logoPng: logos?.png || null,
      icon: category.icon,
      color: category.color,
      tagBg: category.tagBg,
      tagBorder: category.tagBorder
    });
  }

  return companies;
}

/**
 * Generate HTML card string for a client company
 */
function renderCardHtml(c) {
  let logoHtml = '';
  if (c.logoWebp || c.logoPng) {
    logoHtml = `
                        <div class="client-card-logo">
                            <picture>
                                ${c.logoWebp ? `<source srcset="${c.logoWebp}" type="image/webp">` : ''}
                                <img src="${c.logoPng || c.logoWebp}" alt="${c.name} Logo" class="client-logo-img" loading="lazy">
                            </picture>
                        </div>`;
  }

  return `                    <!-- ${c.name} (${c.category}) -->
                    <div class="sample-card client-card">
                        <div class="sample-card-header">${logoHtml}
                            <span class="sample-brand-tag" style="background: ${c.tagBg}; color: ${c.color}; border-color: ${c.tagBorder};">
                                <i class="fas ${c.icon}"></i> ${c.category}
                            </span>
                        </div>
                        <h3>${c.name}</h3>
                        <div class="sample-role">${c.subtitle || c.category}</div>
                        <p>${c.desc}</p>
                    </div>`;
}

/**
 * Main Execution
 */
export function runScanner() {
  console.log('🔍 Scanning workspace for corporate client companies...');
  const clients = scanClientCompanies(rootDir);

  console.log(`✅ Found ${clients.length} client companie(s):`);
  clients.forEach(c => console.log(`   🏢 [${c.category}] ${c.name} -> ${c.url}`));

  // Save clients.json in root and public/
  const jsonContent = JSON.stringify(clients, null, 2);
  fs.writeFileSync(path.join(rootDir, 'clients.json'), jsonContent);
  
  const publicDir = path.join(rootDir, 'public');
  if (fs.existsSync(publicDir)) {
    fs.writeFileSync(path.join(publicDir, 'clients.json'), jsonContent);
  }

  // Update root index.html .samples-grid section
  const indexPath = path.join(rootDir, 'index.html');
  if (fs.existsSync(indexPath)) {
    let indexHtml = fs.readFileSync(indexPath, 'utf-8');
    const cardsHtml = clients.map(renderCardHtml).join('\n\n');

    // Replace contents inside <div class="samples-grid"> ... </div>
    const gridRegex = /(<div class="samples-grid"[^>]*>)([\s\S]*?)(<\/div>\s*<\/div>\s*<\/section>)/i;
    if (gridRegex.test(indexHtml)) {
      indexHtml = indexHtml.replace(gridRegex, `$1\n${cardsHtml}\n                $3`);
      fs.writeFileSync(indexPath, indexHtml);
      console.log('✨ Updated index.html client showcase cards successfully!');
    }
  }

  return clients;
}

// Run directly if called from CLI
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  runScanner();
}

