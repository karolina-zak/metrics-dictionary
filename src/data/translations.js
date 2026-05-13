/** @typedef {'en'|'pl'|'de'} Lang */

export const LANGS = /** @type {const} */ (["en", "pl", "de"]);

/** @type {Record<Lang, { k: string; v: string }[]>} */
const ABBREV = {
  en: [
    { k: "CR", v: "Conversion rate — share of visits that result in an order." },
    { k: "ATC", v: "Add to cart — adding at least one product to the basket during a visit." },
    { k: "PLP", v: "Product listing page — category or search results grid." },
    { k: "PDP", v: "Product detail page — a single product’s page." },
    { k: "AOV", v: "Average order value — revenue divided by number of orders." },
    { k: "GMV", v: "Gross merchandise value — total value of orders before returns/discounts." },
    { k: "CTR", v: "Click-through rate — clicks divided by eligible views or visits." },
    { k: "NPS", v: "Net promoter score — loyalty survey metric (not the same as conversion)." },
    { k: "UX", v: "User experience — how easy and clear the interface is to use." },
    { k: "SEO", v: "Search engine optimisation — organic visibility in search engines." },
    { k: "B2B", v: "Business-to-business — professional or trade buyers." },
    { k: "YoY / WoW", v: "Year-over-year / week-over-week — comparing the same metric across time periods." },
    { k: "pp", v: "Percentage points — difference between two percentages (not percent of a percent)." },
    { k: "D2C", v: "Direct-to-consumer — selling through your own channel rather than only via partners." },
    { k: "KPI", v: "Key performance indicator — a metric you track for decisions." },
  ],
  pl: [
    { k: "CR", v: "Conversion rate (współczynnik konwersji) — udział wizyt zakończonych zakupem." },
    { k: "ATC", v: "Add to cart — dodanie co najmniej jednego produktu do koszyka w wizycie." },
    { k: "PLP", v: "Product listing page — strona listingu kategorii lub wyników wyszukiwania." },
    { k: "PDP", v: "Product detail page — strona karty pojedynczego produktu." },
    { k: "AOV", v: "Average order value — średnia wartość zamówienia (przychód ÷ liczba zamówień)." },
    { k: "GMV", v: "Gross merchandise value — łączna wartość zamówień przed zwrotami/rabatami." },
    { k: "CTR", v: "Click-through rate — kliknięcia w stosunku do wyświetleń lub wizyt." },
    { k: "NPS", v: "Net promoter score — metryka ankiety lojalnościowej (nie to samo co konwersja)." },
    { k: "UX", v: "User experience — doświadczenie użytkownika, czytelność i łatwość obsługi." },
    { k: "SEO", v: "Search engine optimisation — widoczność organiczna w wyszukiwarce." },
    { k: "B2B", v: "Business-to-business — klienci biznesowi / instalatorzy." },
    { k: "YoY / WoW", v: "Year-over-year / week-over-week — porównanie tej samej metryki między okresami." },
    { k: "pp", v: "Punkty procentowe — różnica między dwoma procentami (nie „procent z procenta”)." },
    { k: "D2C", v: "Direct-to-consumer — sprzedaż we własnym kanale, nie tylko u partnerów." },
    { k: "KPI", v: "Key performance indicator — kluczowy wskaźnik używany do decyzji." },
  ],
  de: [
    { k: "CR", v: "Conversion Rate — Anteil der Besuche, die in eine Bestellung münden." },
    { k: "ATC", v: "Add to cart — mindestens ein Produkt im Besuch in den Warenkorb legen." },
    { k: "PLP", v: "Product Listing Page — Kategorie- oder Suchergebnisliste." },
    { k: "PDP", v: "Product Detail Page — Produktseite eines einzelnen Artikels." },
    { k: "AOV", v: "Average Order Value — Umsatz geteilt durch Bestellanzahl." },
    { k: "GMV", v: "Gross Merchandise Value — Bestellwert brutto vor Retouren/Rabatten." },
    { k: "CTR", v: "Click-Through-Rate — Klicks geteilt durch Sichtungen oder passende Basis." },
    { k: "NPS", v: "Net Promoter Score — Loyalitäts-Umfragekennzahl (nicht gleich Conversion)." },
    { k: "UX", v: "User Experience — Bedienbarkeit und Klarheit der Oberfläche." },
    { k: "SEO", v: "Search Engine Optimisation — organische Sichtbarkeit in Suchmaschinen." },
    { k: "B2B", v: "Business-to-Business — gewerbliche oder professionelle Käufer:innen." },
    { k: "YoY / WoW", v: "Year-over-year / Week-over-week — Kennzahl über Zeiträume vergleichen." },
    { k: "pp", v: "Prozentpunkte — Differenz zweier Prozentwerte (nicht „Prozent von Prozent“)." },
    { k: "D2C", v: "Direct-to-consumer — Verkauf im eigenen Kanal statt nur über Partner." },
    { k: "KPI", v: "Key Performance Indicator — Messgröße für Steuerung und Priorität." },
  ],
};

export const TX = {
  en: {
    appTitle: "UX Metrics Dictionary",
    appSubtitle: "Adobe Analytics workspace — definitions for designers",
    openDashboard: "Open Dashboard",
    openDashboardContext:
      "Internal Adobe Analytics workspace in your organization. Opens in a new browser tab.",
    openDashboardUnavailable:
      "Dashboard link is not configured. Set dashboardUrl in App.jsx (must be a valid https URL).",
    openDashboardAriaSuffix: "opens in a new tab",
    skipToContent: "Skip to main content",
    browserTabTitle: "UX Metrics Dictionary — Adobe Analytics",
    searchLabel: "Search metrics",
    metricsTabsLabel: "Categories",
    sidebarCollapseAria: "Collapse categories sidebar",
    sidebarExpandAria: "Expand categories sidebar",
    categoriesHeading: "Categories:",
    categoriesHelp:
      "The tabs (All, Business KPIs, Engagement, …) choose which category of metrics you browse. The importance filter above narrows the list within that category, or across every metric when All is selected.",
    priorityFilterLabel: "Filter by importance level",
    langSwitcherLabel: "Interface language",
    langPressToCycle:
      "Change interface language. Current language: {{lang}}. Activate to rotate English, Polski, Deutsch.",
    resultsLive1: "1 metric matches your current filters.",
    resultsLiveN: "{{count}} metrics match your current filters.",
    flatResultsHeading: "Filtered metrics",
    showingOf: "Showing {{visible}} of {{total}} metrics",
    showingAll: "All {{total}} metrics",
    sortSectionLabel: "Sort",
    filterSectionLabel: "Filter",
    sortDefault: "Default (dictionary order)",
    sortByImportance: "By importance (Critical → Context)",
    filterClear: "Clear filter",
    priorityFilterHint:
      "Leave all chips off to show every importance level. Select one or more to narrow the list (e.g. Critical + Important).",
    metaDescription:
      "UX metrics dictionary for Adobe Analytics: definitions, formulas, examples, and priorities for e-commerce designers (EN/PL/DE).",
    search: "Search metrics…",
    all: "All",
    noResults: "No metric found. Try a different search.",
    version: "Version",
    updated: "Updated",
    scrollTop: "Top",
    scrollTopAria: "Scroll back to top of page",
    searchClear: "Clear search",
    searchHint: "Searches metric titles and full descriptions.",
    sortSecondaryHint: "Metrics with the same importance level keep their dictionary order.",
    permalinkAria: "Link to metric",
    abbreviationsLinkLabel: "Abbreviations",
    abbreviationsTitle: "Abbreviations used in this dictionary",
    abbreviationsIntro: "Quick reference for acronyms you will see in metric names and descriptions.",
    abbreviations: ABBREV.en,
    labels: {
      formula: "Formula",
      measures: "What it measures",
      example: "Example / How to read",
      benchmark: "Benchmark / What to do",
      whyCritical: "Why it's critical",
      whyImportant: "Why it matters",
    },
    priorities: {
      1: "Critical",
      2: "Important",
      3: "Conversion & UX",
      4: "Context",
    },
    legend: {
      1: "Critical — revenue, orders, and hard errors that directly affect business outcomes.",
      2: "Important — explains why the funnel or checkout behaves as it does (diagnosis).",
      3: "Conversion & UX — tuning listings, PDPs, search, and journeys to lift conversion.",
      4: "Context — supporting signals (devices, segments, secondary reads).",
    },
    headerBrowseAllTitle: "Browse All UX Metrics",
    headerBrowseAllSubtitle:
      "The full catalogue in one place — use search and importance filters below. Pick a category in the sidebar when you want to focus (business KPIs, engagement, checkout, and more).",
    sectionHeaderDesc: {
      business:
        "Core ecommerce KPIs: revenue, GMV, conversion rate, AOV, and how traffic splits by source and device.",
      engagement:
        "How visitors use your pages — bounce, time on site, and early signals before a purchase.",
      users:
        "Who visits: new vs returning, registration paths, categories they reach, and device mix.",
      discovery:
        "From listing to product page: add-to-cart, purchase intent, comparison tools, filters, and navigation quality.",
      pdp:
        "Product-detail behaviour — specs, reviews, media and docs — whatever builds confidence to buy.",
      search:
        "On-site search: refinements, zero-result queries, click-through to product pages, and recovery after queries that fail.",
      cart:
        "Basket dynamics: abandonment, journeys back from add-to-cart, attach rates, and the hand-off toward checkout.",
      checkout:
        "Payment flow steps, friction points, validation errors, and completion — where revenue closes or slips away.",
    },
  },
  pl: {
    appTitle: "Słownik metryk UX",
    appSubtitle: "Workspace Adobe Analytics — definicje dla designerów",
    openDashboard: "Otwórz dashboard",
    openDashboardContext:
      "Wewnętrzny workspace Adobe Analytics w Twojej organizacji. Otwiera się w nowej karcie przeglądarki.",
    openDashboardUnavailable:
      "Link do dashboardu nie jest skonfigurowany. Ustaw dashboardUrl w App.jsx (prawidłowy adres https).",
    openDashboardAriaSuffix: "otwiera się w nowej karcie",
    skipToContent: "Przejdź do treści głównej",
    browserTabTitle: "Słownik metryk UX — Adobe Analytics",
    searchLabel: "Szukaj metryki",
    metricsTabsLabel: "Kategorie",
    sidebarCollapseAria: "Zwiń panel kategorii",
    sidebarExpandAria: "Rozwiń panel kategorii",
    categoriesHeading: "Kategorie:",
    categoriesHelp:
      "Zakładki (Wszystkie, Biznesowe KPI, Zaangażowanie itd.) wybierają kategorię metryk. Filtr ważności powyżej zawęża listę w obrębie tej kategorii albo we wszystkich metrykach, gdy aktywne jest Wszystkie.",
    priorityFilterLabel: "Filtr wg poziomu ważności",
    langSwitcherLabel: "Język interfejsu",
    langPressToCycle:
      "Zmień język interfejsu. Aktualnie: {{lang}}. Aktywuj kolejny język w kolejności English, Polski, Deutsch.",
    resultsLive1: "1 metryka pasuje do bieżących filtrów.",
    resultsLiveN: "Pasujące metryki: {{count}}.",
    flatResultsHeading: "Przefiltrowane metryki",
    showingOf: "Wyniki: {{visible}} z {{total}} metryk",
    showingAll: "Wszystkie {{total}} metryk",
    sortSectionLabel: "Sortowanie",
    filterSectionLabel: "Filtrowanie",
    sortDefault: "Domyślna (kolejność w słowniku)",
    sortByImportance: "Według ważności (Krytyczna → Kontekstowa)",
    filterClear: "Wyczyść filtr",
    priorityFilterHint:
      "Gdy żaden poziom nie jest zaznaczony — widać wszystkie poziomy. Zaznacz jeden lub kilka, by zawęzić listę (np. Krytyczna + Ważna).",
    metaDescription:
      "Słownik metryk UX dla Adobe Analytics: definicje, formuły, przykłady i priorytety dla designerów e-commerce (PL/EN/DE).",
    search: "Szukaj metryki…",
    all: "Wszystkie",
    noResults: "Nie znaleziono metryki. Spróbuj innej frazy.",
    version: "Wersja",
    updated: "Aktualizacja",
    scrollTop: "Do góry",
    scrollTopAria: "Przewiń na górę strony",
    searchClear: "Wyczyść wyszukiwanie",
    searchHint: "Przeszukuje tytuły metryk i pełne opisy.",
    sortSecondaryHint: "Metryki o tym samym poziomie ważności zachowują kolejność słownikową.",
    permalinkAria: "Link do metryki",
    abbreviationsLinkLabel: "Skróty",
    abbreviationsTitle: "Skróty w tym słowniku",
    abbreviationsIntro: "Szybka ściąga dla skrótów w nazwach i opisach metryk.",
    abbreviations: ABBREV.pl,
    labels: {
      formula: "Formuła",
      measures: "Co mierzy",
      example: "Przykład / Jak czytać",
      benchmark: "Benchmark / Co robić",
      whyCritical: "Dlaczego krytyczna",
      whyImportant: "Dlaczego to ważne",
    },
    priorities: {
      1: "Krytyczna",
      2: "Ważna",
      3: "Konwersja i UX",
      4: "Kontekstowa",
    },
    legend: {
      1: "Krytyczna — przychód, zamówienia i twarde błędy bezpośrednio wpływające na biznes.",
      2: "Ważna — wyjaśnia przyczyny zachowania lejka lub checkoutu (diagnoza).",
      3: "Konwersja i UX — tuning listingu, PDP, wyszukiwarki i ścieżek pod konwersję.",
      4: "Kontekstowa — sygnały wspierające (np. urządzenie, segment, drugorzędne odczyty).",
    },
    headerBrowseAllTitle: "Przeglądaj wszystkie metryki UX",
    headerBrowseAllSubtitle:
      "Cały katalog w jednym widoku — poniżej wyszukiwarka i filtr ważności. Wybierz kategorię w panelu bocznym, gdy chcesz się skupić (biznes, zaangażowanie, checkout itd.).",
    sectionHeaderDesc: {
      business:
        "Kluczowe KPI e‑commerce: przychód, GMV, konwersja, AOV oraz podział ruchu według źródła i urządzenia.",
      engagement:
        "Jak użytkownicy korzystają ze stron — bounce, czas wizyty i sygnały przed decyzją o zakupie.",
      users:
        "Kto przychodzi: nowi i powracający, ścieżka rejestracji, kategorie oraz mix urządzeń.",
      discovery:
        "Od listingu do karty produktu: dodanie do koszyka, intencja zakupu, narzędzia porównań, filtry i jakość nawigacji.",
      pdp:
        "Zachowanie na PDP — parametry, opinie, media i materiały — co buduje pewność przed zakupem.",
      search:
        "Wyszukiwanie w serwisie: doprecyzowania zapytania, zero wyników, przejścia do PDP i co dzieje się po błędzie.",
      cart:
        "Koszyk: porzucenia, powroty po dodaniu do koszyka, dopasowanie usług i przejście w stronę checkoutu.",
      checkout:
        "Przepływ płatności: kroki lejka, punkty tarcia, błędy formularzy i finalizacja — tu domyka się przychód.",
    },
  },
  de: {
    appTitle: "UX-Metrik-Lexikon",
    appSubtitle: "Adobe Analytics Workspace — Definitionen für Designer:innen",
    openDashboard: "Dashboard öffnen",
    openDashboardContext:
      "Internes Adobe-Analytics-Dashboard Ihrer Organisation (Workspace). Öffnet in einem neuen Browser-Tab.",
    openDashboardUnavailable:
      "Dashboard-Link nicht konfiguriert. dashboardUrl in App.jsx setzen (gültige https-URL).",
    openDashboardAriaSuffix: "öffnet in neuem Tab",
    skipToContent: "Zum Hauptinhalt springen",
    browserTabTitle: "UX-Metrik-Lexikon — Adobe Analytics",
    searchLabel: "Metriken durchsuchen",
    metricsTabsLabel: "Kategorien",
    sidebarCollapseAria: "Kategorie-Seitenleiste einklappen",
    sidebarExpandAria: "Kategorie-Seitenleiste ausklappen",
    categoriesHeading: "Kategorien:",
    categoriesHelp:
      "Die Tabs (Alle, Business-KPIs, Engagement, …) wählen die Metrik-Kategorie. Der Wichtigkeits-Filter darüber grenzt die Anzeige innerhalb dieser Kategorie ein — oder über alle Metriken, wenn „Alle“ gewählt ist.",
    priorityFilterLabel: "Nach Wichtigkeitsstufe filtern",
    langSwitcherLabel: "Sprache der Oberfläche",
    langPressToCycle:
      "Oberflächensprache wechseln. Aktuell: {{lang}}. Klick wechselt nacheinander English, Polski, Deutsch.",
    resultsLive1: "1 Metrik entspricht den aktuellen Filtern.",
    resultsLiveN: "{{count}} Metriken entsprechen den aktuellen Filtern.",
    flatResultsHeading: "Gefilterte Metriken",
    showingOf: "{{visible}} von {{total}} Metriken",
    showingAll: "Alle {{total}} Metriken",
    sortSectionLabel: "Sortierung",
    filterSectionLabel: "Filter",
    sortDefault: "Standard (Lexikon-Reihenfolge)",
    sortByImportance: "Nach Wichtigkeit (Kritisch → Kontext)",
    filterClear: "Filter löschen",
    priorityFilterHint:
      "Keine Auswahl = alle Stufen anzeigen. Eine oder mehrere Stufen aktivieren, um einzugrenzen (z. B. Kritisch + Wichtig).",
    metaDescription:
      "UX-Metrik-Lexikon für Adobe Analytics: Definitionen, Formeln und Prioritäten für E-Commerce-Design (DE/EN/PL).",
    search: "Metriken durchsuchen…",
    all: "Alle",
    noResults: "Keine Metrik gefunden. Bitte andere Suche.",
    version: "Version",
    updated: "Stand",
    scrollTop: "Nach oben",
    scrollTopAria: "Zurück zum Seitenanfang scrollen",
    searchClear: "Suche zurücksetzen",
    searchHint: "Durchsucht Metrik-Titel und vollständige Beschreibungen.",
    sortSecondaryHint: "Metriken gleicher Wichtigkeit behalten die Lexikon-Reihenfolge.",
    permalinkAria: "Link zur Metrik",
    abbreviationsLinkLabel: "Abkürzungen",
    abbreviationsTitle: "Abkürzungen in diesem Lexikon",
    abbreviationsIntro: "Kurzreferenz für Akronyme in Namen und Beschreibungen.",
    abbreviations: ABBREV.de,
    labels: {
      formula: "Formel",
      measures: "Was sie misst",
      example: "Beispiel / Lesart",
      benchmark: "Benchmark / Maßnahmen",
      whyCritical: "Warum kritisch",
      whyImportant: "Warum relevant",
    },
    priorities: {
      1: "Kritisch",
      2: "Wichtig",
      3: "Conversion & UX",
      4: "Kontext",
    },
    legend: {
      1: "Kritisch — Umsatz, Bestellungen und harte Fehler mit direktem Geschäftseffekt.",
      2: "Wichtig — erklärt Ursachen im Trichter oder Checkout (Diagnose).",
      3: "Conversion & UX — Listing, PDP, Suche und Customer Journey für mehr Abschluss optimieren.",
      4: "Kontext — unterstützende Signale (Gerät, Segment, sekundäre Lesarten).",
    },
    headerBrowseAllTitle: "Alle UX-Metriken durchsuchen",
    headerBrowseAllSubtitle:
      "Das gesamte Lexikon hier — darunter Suche und Wichtigkeitsfilter. Wählen Sie in der Sidebar eine Kategorie, wenn Sie fokussieren wollen (Business, Engagement, Checkout usw.).",
    sectionHeaderDesc: {
      business:
        "Kerne-Commerce-KPIs: Umsatz, GMV, Konversionsrate, AOV sowie Traffic nach Herkunft und Gerät.",
      engagement:
        "Nutzung der Seiten - Absprünge, Verweildauer und frühe Signale vor der Kaufentscheidung.",
      users:
        "Wer zu Ihnen kommt: Neu vs. Wiederkehrende, Registrierungspfad, Kategorien-Reichweite und Gerätemix.",
      discovery:
        "Vom Listing zur PDP: Warenkorb, Kaufabsicht, Vergleich, Filter und Navigationsqualität.",
      pdp:
        "Detailseitenverhalten — Daten, Bewertungen, Medien, Downloads — Vertrauen vor dem Abschluss.",
      search:
        "On-site-Suche: Verfeinerung, keine Treffer, CTR zur PDP und was nach fehlerhaften Suchen passiert.",
      cart:
        "Warenkorb: Abbrechen, Rückkehren nach ATC, Attach-Rates und Übergang in den Checkout.",
      checkout:
        "Checkout-Schritte, Friktion, Validierung und Completion — dort wird Umsatz abgeschlossen oder verloren.",
    },
  },
};
