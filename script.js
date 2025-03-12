// Language translations
const translations = {
    tr: {
        'home': 'Ana Sayfa',
        'features': 'Özellikler',
        'tech-stack': 'Teknolojiler',
        'impact': 'Etki ve Başarılar',
        'hero-title': 'Akıllı Drone Güvenlik Sistemi',
        'hero-subtitle': 'Yapay zeka destekli drone güvenlik çözümümüz ile alanınızı güvende tutun. Gelişmiş termal kamera ve yapay zeka teknolojileri ile tehditleri anında tespit edin.',
        'learn-more': 'Daha Fazla',
        'tech-details': 'Teknik Detaylar',
        'features-title': 'Özellikler ve Yetenekler',
        'mobile-control': 'Mobil Kontrol',
        'mobile-control-desc': 'Android uygulaması üzerinden tam drone kontrolü. Jetpack Compose ile geliştirilmiş modern ve kullanıcı dostu arayüz.',
        'thermal-vision': 'Termal Görüş',
        'thermal-vision-desc': 'Gelişmiş termal kamera ile gece ve gündüz tehdit tespiti. Özel algoritmalar ile yüksek doğruluk oranı.',
        'instant-alerts': 'Anlık Bildirimler',
        'instant-alerts-desc': 'Tehdit algılandığında anında mobil bildirim. Hızlı müdahale için detaylı konum ve tehdit bilgisi.',
        'sound-deterrent': 'Ultrasonik Ses Sistemi',
        'sound-deterrent-desc': '20-50 kHz frekans aralığında ultrasonik ses dalgaları ile etkili ve güvenli uzaklaştırma sistemi.',
        'tech-stack-title': 'Kullanılan Teknolojiler',
        'accuracy': 'Tehdit Tespit Doğruluğu',
        'monitoring': 'Kesintisiz İzleme',
        'false-alarms': 'Yanlış Alarm Oranı',
        'innovation': 'İnovasyon',
        'innovation-desc': 'Yapay zeka ve drone teknolojilerinin yenilikçi entegrasyonu. Sektörde öncü çözüm.',
        'team': 'Takım Çalışması',
        'team-desc': 'Çok disiplinli ekip ile başarılı proje yönetimi ve uygulama.',
        'technical': 'Teknik Yetkinlik',
        'technical-desc': 'Modern teknolojilerin etkin kullanımı ve optimizasyonu.',
        'impact-title': 'Etki ve Başarılar',
        'impact-description': 'Güvenlik çözümümüz, çiftçilerin karşılaştığı güvenlik sorunlarına yenilikçi bir yaklaşım getiriyor.',
        'achievement-title': 'Teknofest Akdeniz Finalisti',
        'achievement-description': '12.599 takım arasından 26. finalist olarak, tarım arazilerinin korunmasına yönelik yenilikçi bir sistem geliştirdik.',
        'backend-tech': 'Backend Teknolojileri',
        'backend-desc': 'Spring Boot ve FastAPI ile güçlü, ölçeklenebilir backend altyapısı.',
        'mobile-tech': 'Mobil Teknolojiler',
        'mobile-desc': 'Jetpack Compose ile modern Android uygulama geliştirme.',
        'hardware-tech': 'Donanım Teknolojileri',
        'hardware-desc': 'Yüksek performanslı termal kamera ve drone kontrol sistemleri.',
        'rights': 'Tüm hakları saklıdır.',
        'project-stats': 'Proje İstatistikleri',
        'key-features': 'Temel Özellikler',
        'tech-overview': 'Teknoloji Özeti'
    },
    en: {
        'home': 'Home',
        'features': 'Features',
        'tech-stack': 'Tech Stack',
        'impact': 'Impact & Achievements',
        'hero-title': 'Smart Drone Security System',
        'hero-subtitle': 'Secure your area with our AI-powered drone security solution. Detect threats instantly with advanced thermal camera and artificial intelligence technologies.',
        'learn-more': 'Learn More',
        'tech-details': 'Technical Details',
        'features-title': 'Features & Capabilities',
        'mobile-control': 'Mobile Control',
        'mobile-control-desc': 'Full drone control through Android application. Modern and user-friendly interface developed with Jetpack Compose.',
        'thermal-vision': 'Thermal Vision',
        'thermal-vision-desc': 'Threat detection day and night with advanced thermal camera. High accuracy rate with specialized algorithms.',
        'instant-alerts': 'Instant Alerts',
        'instant-alerts-desc': 'Immediate mobile notifications when threats are detected. Detailed location and threat information for quick response.',
        'sound-deterrent': 'Ultrasonic Sound System',
        'sound-deterrent-desc': 'Effective and safe deterrence system using ultrasonic sound waves in the 20-50 kHz frequency range.',
        'tech-stack-title': 'Technology Stack',
        'accuracy': 'Threat Detection Accuracy',
        'monitoring': '24/7 Monitoring',
        'false-alarms': 'False Alarm Rate',
        'innovation': 'Innovation',
        'innovation-desc': 'Innovative integration of AI and drone technologies. Leading solution in the industry.',
        'team': 'Team Collaboration',
        'team-desc': 'Successful project management and implementation with a multidisciplinary team.',
        'technical': 'Technical Expertise',
        'technical-desc': 'Effective use and optimization of modern technologies.',
        'impact-title': 'Impact & Achievements',
        'impact-description': 'Our security solution brings an innovative approach to addressing security challenges faced by farmers.',
        'achievement-title': 'Teknofest Mediterranean Finalist',
        'achievement-description': 'We developed an innovative system for protecting agricultural lands, earning us a place among the top 26 finalists out of 12,599 teams.',
        'backend-tech': 'Backend Technologies',
        'backend-desc': 'Robust, scalable backend infrastructure with Spring Boot and FastAPI.',
        'mobile-tech': 'Mobile Technologies',
        'mobile-desc': 'Modern Android app development with Jetpack Compose.',
        'hardware-tech': 'Hardware Technologies',
        'hardware-desc': 'High-performance thermal camera and drone control systems.',
        'rights': 'All rights reserved.',
        'project-stats': 'Project Statistics',
        'key-features': 'Key Features',
        'tech-overview': 'Technology Overview'
    }
};

// Current language
let currentLang = 'tr';

// Function to toggle language
function toggleLanguage() {
    currentLang = currentLang === 'tr' ? 'en' : 'tr';
    updateLanguage();
    updateLangButton();
}

// Function to update language
function updateLanguage() {
    document.querySelectorAll('[data-tr]').forEach(element => {
        const key = element.getAttribute('data-tr');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
    document.documentElement.lang = currentLang;
}

// Function to update language button text
function updateLangButton() {
    const langText = document.querySelector('.lang-text');
    langText.textContent = currentLang === 'tr' ? 'EN' : 'TR';
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add fade-in animation to feature cards and tech cards
document.querySelectorAll('.feature-card, .tech-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Add CSS class for fade-in animation
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    updateLanguage();
}); 