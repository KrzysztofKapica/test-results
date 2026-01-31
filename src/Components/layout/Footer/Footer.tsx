import { Facebook } from "../../../assets/icons/Facebook"
import { Instagram } from "../../../assets/icons/Instagram"
import { Linkedin } from "../../../assets/icons/Linkedin"
import { TikTok } from "../../../assets/icons/TikTok"

export default function Footer() {
  return (
    <footer className="relative bg-[url('src/assets/backgrounds/dots.svg')] bg-cover bg-no-repeat py-20 px-4">
      <div className="absolute inset-0 bg-white/85"></div>
      <div className="container mx-auto relative z-10 px-[25px]">
        {/* Layout responsywny - kolumna na mobile, wiersz na desktop */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 items-center lg:items-start">
          
          {/* Lewa sekcja - Nagłówek i tekst główny */}
          <div className="flex flex-col items-center text-center gap-6 w-full lg:w-[600px]">
            {/* Nagłówek */}
            <h2 className="text-3xl font-bold text-brandGraphite">
              Chcę dołączyć!
            </h2>

            {/* Tekst główny */}
            <div className="space-y-2 text-sm">
              <p>Chcesz pomóc w promowaniu wartościowej wiedzy naukowej?</p>
              <p>Wesprzyj kolejną edycję badania!</p>
              <p>Napisz do nas na</p>
              <a 
                href="mailto:badanie@szczesliwsi.com"
                className="hover:underline font-semibold underline block"
              >
                badanie@szczesliwsi.com
              </a>
              <p>- każda forma pomocy na wagę złota!</p>
            </div>

            {/* Tekst o edukacji */}
            <p className="text-sm w-full px-4 lg:px-0 lg:w-[480px]">
            Jeśli stać Cię, żeby nas wesprzeć finansowo, każde 5 PLN wykorzystamy na edukację 
            - opisz proszę przelew "Darowizna na cele statutowe - badanie naukowe"
            </p>
          </div>

          {/* ikony social media */}
          <div className="flex lg:hidden gap-4">
            <a
              href="https://www.tiktok.com/@fundacjaszczesliwsi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="h-10 w-10 rounded-lg hover:bg-gray-50 flex items-center justify-center transition-colors"
            >
              <TikTok className="w-10 h-10" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="h-10 w-10 rounded-lg hover:bg-gray-50 flex items-center justify-center transition-colors"
            >
              <Facebook className="w-8 h-8" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="h-10 w-10 rounded-lg hover:bg-gray-50 flex items-center justify-center transition-colors"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="h-10 w-10 rounded-lg hover:bg-gray-50 flex items-center justify-center transition-colors"
            >
              <Instagram className="w-8 h-8" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="h-10 w-10 rounded-lg hover:bg-gray-50 flex items-center justify-center transition-colors"
            >
              <Linkedin className="w-8 h-8" />
            </a>
          </div>

          {/* Prawa sekcja - Ramka z danymi */}
          <div className="flex justify-center lg:justify-end mt-0 lg:mt-[65px] w-full lg:w-auto px-4 lg:px-0">
            <div className="border-2 border-brandGraphite rounded-xl px-4 lg:px-8 py-6 w-full lg:w-[450px] h-auto lg:h-[190px] space-y-2 text-sm font-semibold">
              <div className="flex items-center justify-between">
                <span className="text-left">Fundacja Szczęśliwsi,</span>
                <button 
                  className="ml-2 hover:bg-gray-200 rounded p-1 flex-shrink-0"
                  onClick={() => navigator.clipboard.writeText('Fundacja Szczęśliwsi, Hallera 108/7, 80-420, Gdańsk')}
                  aria-label="Kopiuj adres"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="9" y="9" width="13" height="13" rx="2" strokeWidth="2"/>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" strokeWidth="2"/>
                  </svg>
                </button>
              </div>
              <p className="text-left">Hallera 108/7, 80-420, Gdańsk</p>
              
              <div className="flex items-center justify-between pt-2">
                <span className="text-left">NIP: 5751912980</span>
                <button 
                  className="ml-2 hover:bg-gray-200 rounded p-1 flex-shrink-0"
                  onClick={() => navigator.clipboard.writeText('5751912980')}
                  aria-label="Kopiuj NIP"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="9" y="9" width="13" height="13" rx="2" strokeWidth="2"/>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" strokeWidth="2"/>
                  </svg>
                </button>
              </div>
              
              <div className="flex items-center justify-between pt-2">
                <span className="text-left break-all">Nest Bank: 41187010452078108555150001</span>
                <button 
                  className="ml-2 hover:bg-gray-200 rounded p-1 flex-shrink-0"
                  onClick={() => navigator.clipboard.writeText('41187010452078108555150001')}
                  aria-label="Kopiuj numer konta"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="9" y="9" width="13" height="13" rx="2" strokeWidth="2"/>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" strokeWidth="2"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dolna sekcja - ikony i teksty  */}
        <div className="flex flex-col items-center text-center gap-6 mt-12">
          {/* Ikony social media */}
          <div className="hidden lg:flex gap-4">
            <a
              href="https://www.tiktok.com/@fundacjaszczesliwsi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="h-10 w-10 rounded-lg hover:bg-gray-50 flex items-center justify-center transition-colors"
            >
              <TikTok className="w-10 h-10" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="h-10 w-10 rounded-lg hover:bg-gray-50 flex items-center justify-center transition-colors"
            >
              <Facebook className="w-8 h-8" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="h-10 w-10 rounded-lg hover:bg-gray-50 flex items-center justify-center transition-colors"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="h-10 w-10 rounded-lg hover:bg-gray-50 flex items-center justify-center transition-colors"
            >
              <Instagram className="w-8 h-8" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="h-10 w-10 rounded-lg hover:bg-gray-50 flex items-center justify-center transition-colors"
            >
              <Linkedin className="w-8 h-8" />
            </a>
          </div>
        
          {/* Teksty końcowe */}
          <p className="text-xs max-w-lg">
            #MałymiKrokami możemy być #Szczęśliwsi.
          </p>
          <p className="text-xs text-gray-600">
            Fantastycznego dnia dla Ciebie!
          </p>
        </div>
      </div>
    </footer>
  );
}