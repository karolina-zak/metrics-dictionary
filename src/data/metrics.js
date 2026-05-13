/**
 * METRICS DICTIONARY — DATA FILE
 *
 * HOW TO UPDATE:
 * 1. Edit EN/PL in src/metricsData.ts, edit DE in scripts/de-locale.json, then run: node scripts/gen-metrics.mjs
 * 2. To add a new metric: copy an existing object, change the id, fill all 3 language fields
 * 3. Update APP_CONFIG.version and APP_CONFIG.lastUpdated in App.jsx
 * 4. Run: git add . && git commit -m "v1.x.x - description" && git push
 * Netlify will auto-deploy within ~2 minutes.
 *
 * VERSION HISTORY:
 * v1.0.0 (2025-05-13) — Initial release, 41 metrics, EN/PL/DE
 */

export const METRIC_SECTIONS = [
  {
    "id": "business",
    "isNew": true,
    "label": {
      "en": "Business KPIs",
      "pl": "Biznesowe KPI",
      "de": "Business-KPIs"
    },
    "title": {
      "en": "Missing Business KPIs",
      "pl": "Brakujące KPI Biznesowe",
      "de": "Fehlende Business-KPIs"
    },
    "metrics": [
      {
        "id": "gmv",
        "priority": 1,
        "isNew": true,
        "name": {
          "en": "Revenue / GMV",
          "pl": "Revenue / GMV",
          "de": "Umsatz / GMV"
        },
        "tag": {
          "en": "MISSING",
          "pl": "BRAK w dashboardzie",
          "de": "Fehlt im Dashboard"
        },
        "tagColor": "red",
        "why": {
          "en": "The only metric answering 'is the business making money?'. All others (ATC rate, bounce, CTR) describe behaviour — without GMV and Revenue you cannot tell if the site generates income or evaluate any optimisation.",
          "pl": "Jedyna metryka odpowiadająca na pytanie 'czy biznes zarabia?'. Wszystkie pozostałe (ATC rate, bounce, CTR) opisują zachowanie — bez GMV i Revenue nie wiesz czy strona generuje pieniądze i nie możesz ocenić efektów żadnej optymalizacji.",
          "de": "Die einzige Kennzahl, die klar beantwortet, ob das Geschäft verdient. Verhaltens-KPIs allein reichen nicht, um UX- oder Marketinginvestitionen zu priorisieren."
        },
        "formula": {
          "en": "GMV = Total value of all orders (gross)\nRevenue = GMV minus returns and discounts",
          "pl": "GMV = Suma wartości wszystkich zamówień (brutto)\nRevenue = GMV minus zwroty i rabaty",
          "de": "GMV = Summe aller Bestellwerte (brutto)\nRevenue = GMV abzüglich Retouren, Stornos und Rabatte"
        },
        "description": {
          "en": "The most important business metric. GMV is the gross value of all orders. Revenue is net income after deducting returns. Without it the entire dashboard describes behaviour but not financial results.",
          "pl": "Najważniejsza metryka biznesowa. GMV to wartość brutto wszystkich zamówień. Revenue to przychód netto po odjęciu zwrotów. Bez niej cały dashboard opisuje zachowanie, ale nie wynik finansowy.",
          "de": "Die zentrale finanzielle Kennzahl: Sie beantwortet, ob die Website Umsatz erzeugt. GMV ist Brutto, Revenue ist Netto nach Retouren. Ohne sie beschreibt das Dashboard nur Verhalten, nicht Wirtschaftlichkeit. Für Mehrmarken-AGD sollten Sie nach Marke, Kategorie, Land und Kanal splitten."
        },
        "example": {
          "en": "5,000 orders × £300 = GMV £1,500,000. ATC rate increased 2% — but without GMV you cannot tell whether that translated into money.",
          "pl": "5 000 zamówień × 1 200 zł = GMV 6 000 000 zł. ATC rate wzrósł o 2% — ale bez GMV nie wiesz czy to przełożyło się na pieniądze.",
          "de": "5.000 Bestellungen à 1.200 € ergeben GMV 6 Mio. €. Steigt die ATC-Rate um 2 %, sehen Sie ohne GMV nicht, ob mehr Umsatz entstand."
        },
        "benchmark": {
          "en": "Monitor: Total GMV | GMV by brand/category/country | YoY trend. YoY change is more important than the absolute value — home appliance seasonality is significant.",
          "pl": "Monitoruj: GMV całkowity | GMV wg marki/kategorii/kraju | Trend YoY. Zmiana YoY ważniejsza niż wartość absolutna — sezonowość AGD jest duża.",
          "de": "Beobachten: Gesamt-GMV, GMV nach Marke/Kategorie/Land, WoW- und YoY-Trends. Bei stark saisonalem AGD sind relative Veränderungen oft aussagekräftiger als Absolutwerte."
        }
      },
      {
        "id": "overall-cr",
        "priority": 1,
        "isNew": true,
        "name": {
          "en": "Overall Conversion Rate",
          "pl": "Overall Conversion Rate",
          "de": "Gesamt-Konversionsrate"
        },
        "tag": {
          "en": "MISSING",
          "pl": "BRAK w dashboardzie",
          "de": "Fehlt im Dashboard"
        },
        "tagColor": "red",
        "why": {
          "en": "The final score of the entire funnel. Purchase Intent Rate (which IS in the dashboard) is NOT the same — it measures intent, not completion. You can have 15% Purchase Intent and only 1.5% CR. Without CR you cannot see where customers are lost.",
          "pl": "Wynik końcowy całego lejka. Purchase Intent Rate (który jest w dashboardzie) to NIE to samo — mierzy intencję, nie finalizację. Można mieć 15% Purchase Intent i tylko 1.5% CR. Bez CR nie widać gdzie uciekają klienci.",
          "de": "Endnote des gesamten Funnels. Kaufabsicht im Dashboard misst Absicht, nicht Abschluss – ohne CR sehen Sie nicht, wo Kund:innen aussteigen."
        },
        "formula": {
          "en": "CR = Number of orders ÷ Number of all visits × 100",
          "pl": "CR = Liczba zamówień ÷ Liczba wszystkich wizyt × 100",
          "de": "CR = Anzahl Bestellungen ÷ Anzahl aller Besuche × 100"
        },
        "description": {
          "en": "What percentage of all visits result in a purchase. The final funnel score: traffic → interest → basket → payment.",
          "pl": "Jaki procent wszystkich odwiedzin kończy się zakupem. To wynik końcowy lejka: ruch → zainteresowanie → koszyk → płatność.",
          "de": "Anteil der Besuche, die in einen Kauf münden – Endpunkt des gesamten Trichters (Traffic → Interesse → Warenkorb → Zahlung). Nicht verwechseln mit Kaufabsicht: hohe Absicht bei niedriger CR deutet auf Checkout- oder Angebotsprobleme."
        },
        "example": {
          "en": "500,000 visits/month, 5,000 orders → CR = 1%. Improving CR to 1.2% without changing traffic = 1,000 additional orders per month.",
          "pl": "500 000 wizyt/miesiąc, 5 000 zamówień → CR = 1%. Poprawa CR do 1.2% bez zmiany ruchu = 1 000 dodatkowych zamówień miesięcznie.",
          "de": "500.000 Besuche und 5.000 Bestellungen ergeben CR 1 %. Eine Verbesserung auf 1,2 % ohne mehr Traffic bringt 1.000 zusätzliche Bestellungen pro Monat."
        },
        "benchmark": {
          "en": "Home appliance benchmarks: Good: 1.5–3% | Average: 0.8–1.5% | Poor: < 0.8%. Always analyse together with AOV.",
          "pl": "Benchmarki AGD: Dobry: 1.5–3% | Średni: 0.8–1.5% | Słaby: < 0.8%. Zawsze analizuj razem z AOV.",
          "de": "AGD-E-Commerce: gut 1,5–3 %, mittel 0,8–1,5 %, schwach unter 0,8 %. Immer zusammen mit AOV und Traffic-Qualität lesen."
        }
      },
      {
        "id": "aov",
        "priority": 1,
        "isNew": true,
        "name": {
          "en": "Average Order Value (AOV)",
          "pl": "Average Order Value (AOV)",
          "de": "Durchschnittlicher Bestellwert (AOV)"
        },
        "tag": {
          "en": "MISSING",
          "pl": "BRAK w dashboardzie",
          "de": "Fehlt im Dashboard"
        },
        "tagColor": "red",
        "why": {
          "en": "+10% AOV with the same number of orders = +10% Revenue with zero additional marketing spend. The dashboard has Additional Service Attach rate but without AOV the financial impact of those services is invisible.",
          "pl": "+10% AOV przy tej samej liczbie zamówień = +10% Revenue bez żadnych dodatkowych kosztów marketingowych. Dashboard ma Additional Service Attach rate, ale bez AOV nie widać efektu finansowego tych usług.",
          "de": "+10 % AOV bei gleicher Bestellzahl bringt +10 % Umsatz ohne zusätzliche Akquisekosten. Zusatzleistungs-Raten allein zeigen nicht den finanziellen Effekt."
        },
        "formula": {
          "en": "AOV = Total Revenue ÷ Number of orders",
          "pl": "AOV = Łączny przychód ÷ Liczba zamówień",
          "de": "AOV = Gesamtumsatz ÷ Anzahl Bestellungen"
        },
        "description": {
          "en": "How much the average customer spends in a single order. AOV is influenced by: cross-sell (accessories), upsell (pricier model), bundle (sets), Additional Service Attach (installation, warranty).",
          "pl": "Ile przeciętnie wydaje klient w jednym zamówieniu. Na AOV wpływają: cross-sell (akcesoria), upsell (droższy model), bundle (zestawy), Additional Service Attach (instalacja, gwarancja).",
          "de": "Durchschnittlicher Warenkorbwert pro Bestellung. AOV steigt durch Cross-Sell, Upsell, Bundles und Zusatzleistungen (Montage, Garantie). Für UX: sichtbare Zusatzoptionen, klare Pakete und vertrauensbildende Preisdarstellung."
        },
        "example": {
          "en": "Customer buys washing machine £600 + installation £80 + warranty £100 → AOV rises from £600 to £780 = +30% Revenue without a new customer.",
          "pl": "Klient kupuje pralkę 2 500 zł + instalacja 200 zł + gwarancja 300 zł → AOV rośnie z 2 500 do 3 000 zł = +20% Revenue bez nowego klienta.",
          "de": "Waschmaschine 600 € plus Montage 80 € plus Garantie 100 €: AOV steigt von 600 € auf 780 € – mehr Umsatz ohne neue Kund:innen."
        },
        "benchmark": {
          "en": "Monitor AOV by category, channel (mobile vs desktop), country. Warning: AOV drops while order count rises = acquiring customers for cheaper products.",
          "pl": "Monitoruj AOV wg kategorii, kanału (mobile vs desktop), kraju. Alarm: AOV spada a liczba zamówień rośnie = pozyskujesz klientów na tańsze produkty.",
          "de": "AOV nach Kategorie, Gerät und Land vergleichen. Sinkt AOV bei steigender Bestellzahl, könnten günstigere Produkte oder Rabattaktionen dominieren."
        }
      },
      {
        "id": "traffic-sources",
        "priority": 2,
        "isNew": true,
        "name": {
          "en": "Traffic Sources",
          "pl": "Traffic Sources (Źródła ruchu)",
          "de": "Traffic-Quellen"
        },
        "tag": {
          "en": "MISSING",
          "pl": "BRAK w dashboardzie",
          "de": "Fehlt im Dashboard"
        },
        "tagColor": "red",
        "why": {
          "en": "Without traffic source breakdown every dashboard metric is incomplete. Bounce 49.8% may be normal (40% traffic from Paid Search) or alarming (mainly organic). Without Traffic Sources you cannot decide where to allocate the marketing budget.",
          "pl": "Bez rozbicia na źródła każda metryka dashboardu jest niekompletna. Bounce 49.8% może być normalny (40% ruchu z Paid Search) lub katastrofalny (głównie organic). Bez Traffic Sources nie wiesz gdzie wydać budżet marketingowy.",
          "de": "Jede Kennzahl braucht Kanal-Kontext. Ohne Traffic-Quellen wissen Sie nicht, wo Marketing und Produkt gezielt ansetzen müssen."
        },
        "formula": {
          "en": "Channel share = Visits from a given channel ÷ All visits × 100",
          "pl": "Udział kanału = Wizyty z danego kanału ÷ Wszystkie wizyty × 100",
          "de": "Kanalanteil = Besuche aus einem Kanal ÷ alle Besuche × 100"
        },
        "description": {
          "en": "Where users come from. Channels: Organic Search, Paid Search (Google Ads), Direct, Email (newsletter), Social, Referral (comparison sites/blogs), Display/Retargeting.",
          "pl": "Skąd przychodzą użytkownicy. Kanały: Organic Search, Paid Search (Google Ads), Direct, Email (newsletter), Social, Referral (porównywarki/blogi), Display/Retargeting.",
          "de": "Verteilung des Traffics auf organische Suche, bezahlte Suche, Direkt, E-Mail, Social, Referral und Display. Ohne diese Aufschlüsselung wirken Bounce oder CR irreführend – dieselbe Rate kann je nach Kanal völlig unterschiedlich interpretiert werden."
        },
        "example": {
          "en": "Paid Search CR 0.5% vs Email CR 4% — the email budget is 8× more efficient. You cannot see this without breaking down by source.",
          "pl": "Paid Search CR 0.5% vs Email CR 4% — budżet emailowy jest 8× bardziej efektywny. Tego nie zobaczysz bez rozbicia na źródła.",
          "de": "Paid Search CR 0,5 % vs. E-Mail CR 4 %: E-Mail ist deutlich effizienter – ohne Quellenauflösung bleibt das unsichtbar."
        },
        "benchmark": {
          "en": "Analyse per channel: Visits | Bounce rate | CR | AOV | Revenue. Allows evaluation of ROI for each marketing channel.",
          "pl": "Analizuj dla każdego kanału: Wizyty | Bounce rate | CR | AOV | Revenue. Pozwala ocenić ROI każdego kanału marketingowego.",
          "de": "Pro Kanal: Besuche, Bounce, CR, AOV und Umsatz. So priorisieren Sie Budgets und erkennen kanalspezifische UX-Schmerzpunkte."
        }
      },
      {
        "id": "cr-per-device",
        "priority": 2,
        "isNew": true,
        "name": {
          "en": "Conversion Rate per Device",
          "pl": "Conversion Rate per Device",
          "de": "Konversionsrate nach Gerät"
        },
        "tag": {
          "en": "MISSING",
          "pl": "BRAK w dashboardzie",
          "de": "Fehlt im Dashboard"
        },
        "tagColor": "red",
        "why": {
          "en": "Mobile dominates traffic but without CR per device you cannot tell whether mobile also dominates sales. For home appliances: research on mobile, purchase on desktop. Without this metric you might wrongly cut the mobile budget.",
          "pl": "Mobile dominuje ruch, ale bez CR per device nie wiesz czy mobile też dominuje w sprzedaży. Dla AGD: research na mobile, zakup na desktop. Bez tej metryki możesz błędnie obciąć budżet mobile uznając go za nieefektywny.",
          "de": "Ohne Geräte-CR unterschätzen oder überbewerten Sie Mobile. Fehlinvestitionen in Kanäle oder falsche UX-Prioritäten sind die Folge."
        },
        "formula": {
          "en": "CR per device = Orders from device ÷ Visits from device × 100",
          "pl": "CR per device = Zamówienia z urządzenia ÷ Wizyty z urządzenia × 100",
          "de": "CR pro Gerät = Bestellungen vom Gerät ÷ Besuche vom Gerät × 100"
        },
        "description": {
          "en": "Separate conversion rate for mobile phone, desktop, tablet. Mobile and desktop are often completely different purchasing experiences.",
          "pl": "Oddzielny współczynnik konwersji dla telefonu, desktopu, tabletu. Mobile i desktop to często zupełnie różne doświadczenia zakupowe.",
          "de": "Getrennte CR für Smartphone, Desktop und Tablet. Bei Großgeräten oft Recherche mobil und Kauf desktop – eine niedrige Mobile-CR kann trotzdem Teil eines gesunden Customer Journeys sein."
        },
        "example": {
          "en": "Customer sees ad on mobile → browses on mobile → returns on desktop → buys. Mobile CR looks poor, but it was the first funnel step.",
          "pl": "Klient widzi reklamę na telefonie → przegląda na mobile → wraca na desktop → kupuje. Mobile CR wygląda słabo, ale był pierwszym krokiem lejka.",
          "de": "Kampagne auf dem Handy gesehen, später am Desktop gekauft: Mobile-CR wirkt schwach, war aber Einstieg in den Trichter."
        },
        "benchmark": {
          "en": "Home appliance benchmarks: Mobile: 0.5–1.2% | Desktop: 1.5–3.5% | Tablet: 1–2%. If mobile CR < 0.5%: simplify mobile checkout, add Apple Pay / Google Pay.",
          "pl": "Benchmarki AGD: Mobile: 0.5–1.2% | Desktop: 1.5–3.5% | Tablet: 1–2%. Jeśli mobile CR < 0.5%: uprość checkout mobile, dodaj Apple Pay / Google Pay.",
          "de": "Typisch AGD: Mobil 0,5–1,2 %, Desktop 1,5–3,5 %, Tablet 1–2 %. Unter 0,5 % mobil: Checkout vereinfachen, Apple/Google Pay prüfen."
        }
      },
      {
        "id": "new-vs-returning-cr",
        "priority": 2,
        "isNew": true,
        "name": {
          "en": "New vs Returning — Conversion Rate",
          "pl": "New vs Returning — Conversion Rate",
          "de": "Konversionsrate: Neu vs. Wiederkehrend"
        },
        "tag": {
          "en": "MISSING",
          "pl": "BRAK w dashboardzie",
          "de": "Fehlt im Dashboard"
        },
        "tagColor": "red",
        "why": {
          "en": "The dashboard measures Returning Visitors rate but that is only half the picture. Without CR you cannot tell whether returners actually buy. If returning visitors convert 8× better — strategy should focus on retention, not acquisition.",
          "pl": "Dashboard mierzy Returning Visitors rate ale to tylko połowa obrazu. Bez CR nie wiadomo czy powracający faktycznie kupują. Jeśli powracający konwertują 8× lepiej — strategia powinna skupić się na retencji, nie akwizycji.",
          "de": "Nur „Wiederkehrend-Rate“ ohne CR zeigt nicht, ob Rückkehrer kaufen. Strategie hängt davon ab, ob Retention oder Akquise der Hebel ist."
        },
        "formula": {
          "en": "CR new = Orders from new ÷ Visits from new × 100\nCR returning = Orders from returning ÷ Visits from returning × 100",
          "pl": "CR nowi = Zamówienia od nowych ÷ Wizyty nowych × 100\nCR powracający = Zamówienia od powracających ÷ Wizyty powracających × 100",
          "de": "CR Neu = Bestellungen Neukund:innen ÷ Besuche Neukund:innen × 100\nCR Wiederkehrend = Bestellungen Wiederkehrende ÷ Besuche Wiederkehrende × 100"
        },
        "description": {
          "en": "Comparison of purchasing effectiveness of new (first visit) vs returning users. Fundamental analysis for the decision: acquisition or retention?",
          "pl": "Porównanie skuteczności zakupowej nowych (pierwsza wizyta) vs powracających. Fundamentalna analiza dla decyzji: akwizycja czy retencja?",
          "de": "Vergleicht Kaufeffizienz erster Besuche mit wiederkehrenden Nutzer:innen. Entscheidend für Balance zwischen Akquise und Retention – besonders bei langen Entscheidungszyklen bei AGD."
        },
        "example": {
          "en": "Typical home appliance: New CR 0.4% (research), Returning CR 3.2% (decision made). Returning visitors convert 8× better → invest in email, loyalty, wishlist.",
          "pl": "Typowy AGD: Nowi CR 0.4% (research), Powracający CR 3.2% (decyzja podjęta). Powracający konwertują 8× lepiej → inwestuj w email, loyalty, wishlist.",
          "de": "Neu 0,4 % (Recherche) vs. Wiederkehrend 3,2 % (Kaufentscheidung): Fokus auf E-Mail, Merkzettel und Loyalty lohnt sich."
        },
        "benchmark": {
          "en": "High CR new → acquisition effective. Low CR new + high returning → invest in remarketing. Low CR both → fundamental problem (price, UX, availability).",
          "pl": "Wysoki CR nowych → akwizycja efektywna. Niski CR nowych + wysoki powracających → inwestuj w remarketing. Niski CR obu → problem fundamentalny (cena, UX, dostępność).",
          "de": "Hohe CR bei Neuen: Akquise wirkt. Niedrig bei Neuen, hoch bei Wiederkehrenden: Remarketing ausbauen. Beides niedrig: Preis, Verfügbarkeit oder grundlegendes UX-Problem."
        }
      },
      {
        "id": "cross-sell-upsell",
        "priority": 3,
        "isNew": true,
        "name": {
          "en": "Cross-sell / Upsell Rate",
          "pl": "Cross-sell / Upsell Rate",
          "de": "Cross-Sell- / Upsell-Rate"
        },
        "tag": {
          "en": "MISSING",
          "pl": "BRAK w dashboardzie",
          "de": "Fehlt im Dashboard"
        },
        "tagColor": "red",
        "formula": {
          "en": "Cross-sell = Orders with ≥2 different categories ÷ All × 100\nUpsell = Orders with higher-tier product ÷ All × 100",
          "pl": "Cross-sell = Zamówienia z ≥2 różnymi kategoriami ÷ Wszystkie × 100\nUpsell = Zamówienia z produktem wyższej klasy ÷ Wszystkie × 100",
          "de": "Cross-Sell = Bestellungen mit ≥2 Kategorien ÷ alle Bestellungen × 100\nUpsell = Bestellungen mit höherwertigem Modell ÷ alle Bestellungen × 100"
        },
        "description": {
          "en": "Cross-sell = customer bought a washing machine AND detergent (different category). Upsell = customer viewed a £500 machine but bought the £700 model. Dashboard has Additional Service Attach (narrow service cross-sell) — full product cross-sell is missing.",
          "pl": "Cross-sell = klient kupił pralkę ORAZ środek do prania (inna kategoria). Upsell = klient oglądał pralkę za 1 800 zł, ale kupił model za 2 400 zł. Dashboard ma Additional Service Attach (wąski cross-sell usług) — brakuje pełnego cross-sell produktowego.",
          "de": "Cross-Sell verbindet Zubehör oder zweite Kategorie; Upsell führt zu einem höherwertigen Gerät. Zusatzleistungs-Anbindung im Dashboard deckt nur einen Teil ab – produktübergreifendes Cross-Sell fehlt oft."
        },
        "example": {
          "en": "Cross-sell: buying a dishwasher → Add salt + tablets. Upsell: viewing 400L fridge → 500L model with No Frost only £100 more. Cross-sell rate 8% + AOV 35% higher = real revenue impact.",
          "pl": "Cross-sell: kupujesz zmywarkę → Dokup sól + tabletki. Upsell: oglądasz lodówkę 400L → Model 500L z No Frost tylko 300 zł więcej. Cross-sell rate 8% + AOV wyższy o 35% = realny przychód.",
          "de": "Geschirrspüler plus Salz und Tabs; oder Kühlschrank 400 l statt 500 l mit No-Frost für wenig Aufpreis – höhere AOV und Marge."
        },
        "benchmark": {
          "en": "Benchmarks: Cross-sell: 10–30% (Amazon ~35%) | Upsell: 5–15%. How to improve: Customers also bought on PDP, product bundles, upsell in checkout.",
          "pl": "Benchmarki: Cross-sell: 10–30% (Amazon ~35%) | Upsell: 5–15%. Jak poprawić: Klienci kupili też na PDP, bundle produktowe, upsell w checkout.",
          "de": "Cross-Sell häufig 10–30 %, Upsell 5–15 %. PDP-Module „Kunden kauften auch“, Bundles und Checkout-Upsell sind typische UX-Hebel."
        }
      }
    ]
  },
  {
    "id": "engagement",
    "isNew": false,
    "label": {
      "en": "Engagement",
      "pl": "Zaangażowanie",
      "de": "Engagement"
    },
    "title": {
      "en": "User Engagement",
      "pl": "Zaangażowanie użytkowników",
      "de": "Nutzer-Engagement"
    },
    "metrics": [
      {
        "id": "bounce-rate",
        "priority": 2,
        "isNew": false,
        "name": {
          "en": "Bounce rate",
          "pl": "Bounce rate",
          "de": "Bounce-Rate"
        },
        "tag": {
          "en": "Present: 49.8%",
          "pl": "Obecna: 49.8%",
          "de": "Aktuell: 49,8 %"
        },
        "tagColor": "amber",
        "why": {
          "en": "Every other visit ends after one page. Combined with Traffic Sources it helps identify which channels or pages repel users. Without traffic source context this metric is incomplete.",
          "pl": "Co druga wizyta kończy się po jednej stronie. W połączeniu z Traffic Sources pozwala znaleźć które kanały lub strony odpychają użytkowników. Bez kontekstu źródła ruchu ta metryka jest niekompletna.",
          "de": "Jeder zweite Besuch endet nach einer Seite – mit Quellenanalyse finden Sie Kanäle oder Seiten, die abspringen lassen."
        },
        "formula": {
          "en": "Visits with only 1 pageview ÷ all visits × 100",
          "pl": "Wizyty z tylko 1 odsłoną ÷ wszystkie wizyty × 100",
          "de": "Besuche mit nur einer Seitenansicht ÷ alle Besuche × 100"
        },
        "description": {
          "en": "Percentage of visits where the user viewed only one page and left. Not all bounces are bad — if a user found a phone number and called, that is also a bounce but a positive one.",
          "pl": "Procent wizyt podczas których użytkownik zobaczył tylko jedną stronę i opuścił witrynę. Nie wszystkie bounces są złe — jeśli user znalazł numer telefonu i zadzwonił, to też jest bounce ale pozytywny.",
          "de": "Anteil der Besuche mit nur einer Seite vor dem Verlassen. Nicht jeder Bounce ist negativ (z. B. Telefonnummer gefunden). Für AGD mit Paid/Preisvergleich sind 45–60 % oft normal."
        },
        "example": {
          "en": "For home appliances with traffic from ads and comparison sites, benchmark is 45–60%, so 49.8% is normal. Above 65–70% would be concerning.",
          "pl": "Dla AGD przy ruchu z reklam/porównywarek benchmark to 45–60%, więc 49.8% jest w normie. Niepokojący byłby powyżej 65–70%.",
          "de": "Bei viel Paid- und Vergleichstraffic sind 49,8 % unauffällig; dauerhaft über 65–70 % sollten Sie Landeseiten und Erwartungsmanagement prüfen."
        },
        "benchmark": {
          "en": "Benchmark: 45–60% OK | > 65% concerning | > 75% alarming. Always analyse with traffic source.",
          "pl": "Benchmark: 45–60% OK | > 65% niepokojący | > 75% alarmowy. Analizuj zawsze ze źródłem ruchu.",
          "de": "Richtwert 45–60 % oft OK; >65 % kritisch; >75 % alarmierend. Immer mit Traffic-Quelle und Zielseite kombinieren."
        }
      },
      {
        "id": "time-per-visit",
        "priority": 3,
        "isNew": false,
        "name": {
          "en": "Time spent per visit",
          "pl": "Time spent per visit",
          "de": "Verweildauer pro Besuch"
        },
        "tag": {
          "en": "Present: 369 sec",
          "pl": "Obecna: 369 sek",
          "de": "Aktuell: 369 Sek."
        },
        "tagColor": "green",
        "formula": {
          "en": "Total time on site ÷ number of visits",
          "pl": "Całkowity czas na stronie ÷ liczba wizyt",
          "de": "Gesamtzeit auf der Site ÷ Anzahl Besuche"
        },
        "description": {
          "en": "Average seconds spent during one visit. 369 sec ≈ 6 minutes. Measures overall engagement — the more time spent, the more the user is drawn into browsing.",
          "pl": "Średnia liczba sekund spędzona podczas jednej wizyty. 369 sek = ok. 6 minut. Mierzy ogólne zaangażowanie — im więcej czasu, tym bardziej użytkownik wciągnął się w przeglądanie.",
          "de": "Durchschnittliche Verweildauer pro Besuch. Längere Sessions deuten auf stärkeres Informationsbedürfnis – typisch bei techniklastigen AGD-Käufen."
        },
        "example": {
          "en": "For home appliances 6 minutes is a good result — customers read specs and compare models. General e-commerce benchmark: 3–4 min.",
          "pl": "Dla AGD 6 minut to dobry wynik — klienci czytają specyfikacje, porównują modele. Benchmark e-commerce ogólnie: 3–4 min.",
          "de": "369 Sekunden ≈ 6 Minuten: für AGD solide, weil Spezifikationen verglichen werden. Sehr kurz kann auf Ladezeiten oder schwache PDP-Inhalte hindeuten."
        },
        "benchmark": {
          "en": "Good result for appliances: > 5 min. Low (< 2 min) = content quality or speed problem. Monitor alongside bounce rate.",
          "pl": "Dobry wynik AGD: > 5 min. Niski (< 2 min) = problem z jakością treści lub szybkością strony. Monitoruj razem z bounce rate.",
          "de": ">5 Minuten oft positiv für AGD; unter 2 Minuten prüfen Sie Content-Tiefe und Performance gemeinsam mit Bounce."
        }
      },
      {
        "id": "bounce-single-page",
        "priority": 3,
        "isNew": false,
        "name": {
          "en": "Bounce Rate — Based on Single Page Visits",
          "pl": "Bounce Rate — Based on Single Page Visits",
          "de": "Bounce-Rate (Einzelseitenbesuche)"
        },
        "tag": {
          "en": "Present: 58% (alt. method)",
          "pl": "Obecna: 58% (alt. metoda)",
          "de": "Aktuell: 58 % (alt. Methode)"
        },
        "tagColor": "amber",
        "formula": {
          "en": "Single-page sessions ÷ all sessions × 100",
          "pl": "Sesje jednostronicowe ÷ wszystkie sesje × 100",
          "de": "Einzelseiten-Sessions ÷ alle Sessions × 100"
        },
        "description": {
          "en": "Alternative bounce definition based on sessions. The dashboard shows 3 bounce values (49.8%, 58%, 50.14%) — the same idea measured by different methods.",
          "pl": "Alternatywna definicja bounce oparta na sesjach. Dashboard pokazuje 3 wartości bounce (49.8%, 58%, 50.14%) — ta sama idea mierzona różnymi metodami.",
          "de": "Alternative Bounce-Definition auf Session-Basis. Wenn das Dashboard mehrere Bounce-Werte zeigt, entstehen in Stakeholder-Meetings widersprüchliche Antworten."
        },
        "example": {
          "en": "Problem: in a meeting someone asks 'what is our bounce rate?' and gets 3 different answers. This confuses stakeholders.",
          "pl": "Problem: na spotkaniu ktoś pyta 'jaki mamy bounce rate?' i pada 3 różne odpowiedzi. To dezorientuje interesariuszy.",
          "de": "Die Frage „Wie hoch ist unser Bounce?“ bekommt drei Zahlen – das verwirrt Entscheider:innen und erschwert Priorisierung."
        },
        "benchmark": {
          "en": "Choose one official definition for reporting, mark others as alternative methodology. Add a tooltip explaining the difference.",
          "pl": "Wybierz jedną oficjalną definicję dla raportowania, oznacz pozostałe jako alternatywna metodologia. Dodaj tooltip wyjaśniający różnicę.",
          "de": "Eine offizielle Definition für Reporting festlegen, andere als „alternativ“ kennzeichnen und in Tooltips die Messlogik erklären."
        }
      },
      {
        "id": "feedback-intent",
        "priority": 4,
        "isNew": false,
        "name": {
          "en": "Feedback Intent Activation rate",
          "pl": "Feedback Intent Activation rate",
          "de": "Feedback-Intent-Aktivierungsrate"
        },
        "tag": {
          "en": "Present: definition",
          "pl": "Obecna: definicja",
          "de": "Aktuell: Definition"
        },
        "tagColor": "blue",
        "formula": {
          "en": "Visits with a click on the feedback module ÷ visits that opened the module × 100",
          "pl": "Wizyty z kliknięciem w moduł feedbacku ÷ wizyty które otworzyły moduł × 100",
          "de": "Besuche mit Klick im Feedback-Modul ÷ Besuche, die das Modul sahen × 100"
        },
        "description": {
          "en": "How often users who were shown a feedback module (e.g. Rate this page, NPS) actually click on it and express an opinion.",
          "pl": "Jak często użytkownicy którym pokazał się moduł feedbacku (np. Oceń tę stronę, NPS) faktycznie w niego klikają i wyrażają opinię.",
          "de": "Misst, ob Nutzer:innen ein gezeigtes Feedback-Widget (z. B. NPS, Seitenbewertung) tatsächlich nutzen. Wichtig für UX Research und die Repräsentativität von Stimmen."
        },
        "example": {
          "en": "Low value = module ignored (poor placement, timing). High = feedback system works effectively.",
          "pl": "Niska wartość = moduł ignorowany (zły placement, timing). Wysoka = system feedbacku działa efektywnie.",
          "de": "Niedrige Rate: Widget wird ignoriert (Platzierung, Timing, visuelle Priorität). Hohe Rate: Feedback-System erreicht aktive Nutzer:innen."
        },
        "benchmark": {
          "en": "Important for UX Research — are collected opinions representative (high activation) or selective (only very satisfied or dissatisfied users respond)?",
          "pl": "Ważna dla UX Research — czy zbierane opinie są reprezentatywne (wysoka aktywacja) czy selektywne (tylko bardzo zadowoleni lub niezadowoleni).",
          "de": "Prüfen, ob nur extrem Zufriedene oder Unzufriedene antworten – sonst verzerrt die Kennzahl Produktentscheidungen."
        }
      }
    ]
  },
  {
    "id": "users",
    "isNew": false,
    "label": {
      "en": "Users",
      "pl": "Użytkownicy",
      "de": "Nutzer & Traffic"
    },
    "title": {
      "en": "Users & Traffic",
      "pl": "Użytkownicy & ruch",
      "de": "Nutzer & Traffic"
    },
    "metrics": [
      {
        "id": "returning-visitors-rate",
        "priority": 3,
        "isNew": false,
        "name": {
          "en": "Returning Visitors rate",
          "pl": "Returning Visitors rate",
          "de": "Anteil wiederkehrender Besucher"
        },
        "tag": {
          "en": "Present: definition",
          "pl": "Obecna: definicja",
          "de": "Aktuell: Definition"
        },
        "tagColor": "blue",
        "formula": {
          "en": "Visitors with >1 visit ÷ all unique visitors × 100",
          "pl": "Odwiedzający z >1 wizytą ÷ wszyscy unikalni odwiedzający × 100",
          "de": "Besucher mit >1 Besuch ÷ alle eindeutigen Besucher × 100"
        },
        "description": {
          "en": "What percentage of unique users visit the site more than once. Measures loyalty and habit of returning. For home appliances the purchase cycle lasts weeks.",
          "pl": "Jaki procent unikalnych użytkowników odwiedza stronę więcej niż raz. Mierzy lojalność i nawyk powracania. Dla AGD cykl zakupowy trwa tygodnie.",
          "de": "Anteil wiederkehrender Nutzer:innen. Misst Gewohnheit und Markenbindung – bei AGD oft über Wochen bis zum Kauf."
        },
        "example": {
          "en": "High returning rate = good retention and brand recognition. Pair with New vs Returning CR — return count alone without CR does not give the full picture.",
          "pl": "Wysoki returning rate = dobra retencja i rozpoznawalność marki. Zestawić z New vs Returning CR — sama liczba powrotów bez CR nie daje pełnego obrazu.",
          "de": "Hohe Rückkehrrate kann Retention signalisieren; ohne CR wissen Sie nicht, ob zurückgekehrt wird, um zu kaufen oder nur zu recherchieren."
        },
        "benchmark": {
          "en": "If returning rate is high but CR is low — returners come back to browse, not buy. An important strategic distinction.",
          "pl": "Jeśli returning rate wysoki ale CR niski — powracający wracają żeby przeglądać, nie kupować. Ważna różnica dla strategii.",
          "de": "Hohe Rückkehr bei niedriger CR: Recherche-Modus. Mit New-vs-Returning-CR zusammen auswerten."
        }
      },
      {
        "id": "returning-registration-rate",
        "priority": 3,
        "isNew": false,
        "name": {
          "en": "Returning Visitors registration rate",
          "pl": "Returning Visitors registration rate",
          "de": "Registrierungsrate wiederkehrender Besucher"
        },
        "tag": {
          "en": "Present: definition",
          "pl": "Obecna: definicja",
          "de": "Aktuell: Definition"
        },
        "tagColor": "blue",
        "formula": {
          "en": "Registered returning users ÷ all returning users × 100",
          "pl": "Zarejestrowani użytkownicy powracający ÷ wszyscy powracający × 100",
          "de": "Registrierte Wiederkehrende ÷ alle Wiederkehrende × 100"
        },
        "description": {
          "en": "What proportion of returning users are registered (have an account). Measures whether loyal visitors are identified by the system — enabling personalisation and email targeting.",
          "pl": "Ile spośród powracających jest zarejestrowanych (ma konto). Mierzy czy lojalni odwiedzający są zidentyfikowani przez system — co umożliwia personalizację i targetowanie emailowe.",
          "de": "Anteil identifizierbarer wiederkehrender Nutzer:innen. Registrierung ermöglicht Personalisierung, E-Mail-Journeys und bessere Attribution."
        },
        "example": {
          "en": "Low value = large portion of returners are anonymous — the store cannot target them by email or personalise their experience.",
          "pl": "Niska wartość = duża część powracających jest anonimowa — sklep nie może ich targetować emailem ani personalizować doświadczenia.",
          "de": "Viele anonyme Rückkehrer:innen erschweren gezielte Ansprache nach dem ersten Besuch."
        },
        "benchmark": {
          "en": "If returning rate is high but registration rate is low — investigate registration barriers. Perhaps the form is too long or there are no clear account benefits.",
          "pl": "Jeśli returning rate wysoki ale registration rate niski — zbadaj bariery rejestracji. Może formularz za długi lub brak jasnych korzyści z konta.",
          "de": "Wenn Rückkehr hoch, Registrierung niedrig: Hürden im Formular, Nutzen des Kontos und Vertrauen prüfen."
        }
      },
      {
        "id": "registration-after-first-visit",
        "priority": 4,
        "isNew": false,
        "name": {
          "en": "Registration rate after first visit",
          "pl": "Registration rate after first visit",
          "de": "Registrierungsrate nach erstem Besuch"
        },
        "tag": {
          "en": "Present: definition",
          "pl": "Obecna: definicja",
          "de": "Aktuell: Definition"
        },
        "tagColor": "blue",
        "formula": {
          "en": "Returners who registered after 1st visit ÷ those who did not register during 1st visit × 100",
          "pl": "Powracający zarejestrowani po 1. wizycie ÷ ci którzy nie zarejestrowali się podczas 1. wizyty × 100",
          "de": "Wiederkehrende, die sich nach dem 1. Besuch registrierten ÷ alle, die sich beim 1. Besuch nicht registrierten × 100"
        },
        "description": {
          "en": "Effectiveness of delayed registration — users who did not register during their first visit but did so on a subsequent one.",
          "pl": "Skuteczność opóźnionej rejestracji — użytkownicy którzy nie zarejestrowali się przy pierwszej wizycie ale zrobili to przy kolejnej.",
          "de": "Misst verzögerte Registrierung: Nutzer:innen registrieren sich erst, wenn der Mehrwert klar ist (Bestellverfolgung, schnellerer Checkout, exklusive Angebote)."
        },
        "example": {
          "en": "Helps assess whether an email reminder to complete registration or an exclusive offer for registered users works upon return.",
          "pl": "Pomaga ocenić czy email reminder 'dokończ rejestrację' lub oferta ekskluzywna dla zarejestrowanych działa przy powrocie.",
          "de": "E-Mail 24–48 h nach erstem Besuch mit konkreten Kontovorteilen kann diese Rate heben."
        },
        "benchmark": {
          "en": "Best practice: email 24–48h after first visit highlighting registration benefits (order tracking, faster checkout, exclusive offers).",
          "pl": "Dobra praktyka: email po 24–48h od pierwszej wizyty z korzyściami z rejestracji (śledzenie zamówień, szybszy checkout, ekskluzywne oferty).",
          "de": "Reminder-Flows und klare Value Props auf der Registrierungsseite testen."
        }
      },
      {
        "id": "most-visited-categories",
        "priority": 3,
        "isNew": false,
        "name": {
          "en": "Most visited product categories",
          "pl": "Most visited product categories",
          "de": "Meistbesuchte Produktkategorien"
        },
        "tag": {
          "en": "Present: top 10",
          "pl": "Obecna: top 10",
          "de": "Aktuell: Top 10"
        },
        "tagColor": "green",
        "formula": {
          "en": "Number of visits to a given category's pages in the selected period",
          "pl": "Liczba wizyt na stronach danej kategorii w wybranym okresie",
          "de": "Besuche auf Kategorieseiten im Zeitraum"
        },
        "description": {
          "en": "Ranking of the 10 most visited categories (Feb–May). Top: fridgefreezers, washingmachines, vacuums, cookersandovens, dishwashers. Heavy appliances dominate.",
          "pl": "Ranking 10 najczęściej odwiedzanych kategorii (Feb–May). Top: fridgefreezers, washingmachines, vacuums, cookersandovens, dishwashers. Dominuje ciężki AGD.",
          "de": "Ranking stark besuchter Kategorien (z. B. Kühl-Gefrierkombis, Waschmaschinen). Steuert Content-, Performance- und Navigationsbudgets."
        },
        "example": {
          "en": "These categories should have the best-optimised PDPs, fastest loading, best filters and the highest content budget.",
          "pl": "Te kategorie powinny mieć najlepiej zoptymalizowane PDP, najszybsze ładowanie, najlepsze filtry i najwyższy budżet contentowy.",
          "de": "Top-Kategorien verdienen die schnellsten PDPs, besten Filter und höchste inhaltliche Pflege."
        },
        "benchmark": {
          "en": "Note: category names are concatenated (fridgefreezers instead of Fridge Freezers) — an analytics implementation artefact. Use readable labels in presentations.",
          "pl": "Uwaga: nazwy kategorii sklejone (fridgefreezers zamiast Fridge Freezers) — artefakt implementacji analityki. Na prezentacjach używaj czytelnych etykiet.",
          "de": "Analytics-Namen sind oft technisch verkettet – in Präsentationen lesbare Labels verwenden."
        }
      },
      {
        "id": "visits-by-device",
        "priority": 3,
        "isNew": false,
        "name": {
          "en": "Visits by device type",
          "pl": "Visits by device type",
          "de": "Besuche nach Gerätetyp"
        },
        "tag": {
          "en": "Present: data visible",
          "pl": "Obecna: dane widoczne",
          "de": "Aktuell: sichtbar"
        },
        "tagColor": "green",
        "formula": {
          "en": "Visits from a given device ÷ all visits × 100",
          "pl": "Wizyty z danego urządzenia ÷ wszystkie wizyty × 100",
          "de": "Besuche je Gerät ÷ alle Besuche × 100"
        },
        "description": {
          "en": "Traffic breakdown by: Mobile Phone, Other (= desktop), Tablet, Television and others. Mobile dominates, desktop second, tablet marginal.",
          "pl": "Rozbicie ruchu na: Mobile Phone, Other (= desktop), Tablet, Television i inne. Mobile dominuje, desktop drugi, tablet marginalny.",
          "de": "Verteilung auf Mobil, Desktop, Tablet usw. Wichtige UX-Frage: dominiert Mobil nur im Traffic oder auch im Umsatz?"
        },
        "example": {
          "en": "Key question: does mobile also dominate in sales or just in browsing? Without CR per device you cannot answer this.",
          "pl": "Kluczowe pytanie: czy mobile też dominuje w sprzedaży czy tylko w przeglądaniu? Bez CR per device nie można odpowiedzieć.",
          "de": "Ohne CR pro Gerät bleibt offen, ob Mobile nur Recherche oder auch Abschlusskanal ist."
        },
        "benchmark": {
          "en": "If > 60% of traffic is mobile — optimise for mobile: speed, button sizes, simplified checkout, Apple Pay / Google Pay.",
          "pl": "Jeśli > 60% ruchu to mobile — optymalizuj pod mobile: szybkość, rozmiar przycisków, uproszczony checkout, Apple Pay / Google Pay.",
          "de": ">60 % mobil: Performance, Touch-Ziele, Checkout und Wallet-Zahlungen priorisieren."
        }
      }
    ]
  },
  {
    "id": "discovery",
    "isNew": false,
    "label": {
      "en": "Discovery",
      "pl": "Odkrywanie",
      "de": "Produktentdeckung"
    },
    "title": {
      "en": "Product Discovery & Navigation",
      "pl": "Odkrywanie produktów & nawigacja",
      "de": "Produktentdeckung & Navigation"
    },
    "metrics": [
      {
        "id": "atc",
        "priority": 1,
        "isNew": false,
        "name": {
          "en": "Add-to-cart rate (ATC)",
          "pl": "Add-to-cart rate (ATC)",
          "de": "In-den-Warenkorb-Rate (ATC)"
        },
        "tag": {
          "en": "Present: definition",
          "pl": "Obecna: definicja",
          "de": "Aktuell: Definition"
        },
        "tagColor": "blue",
        "why": {
          "en": "The first concrete purchase signal — the user stops browsing and starts considering. ATC rate is a direct predictor of conversion: if it drops, CR and Revenue drop too. It is the entry point for all basket metrics.",
          "pl": "Pierwszy konkretny sygnał zakupowy — użytkownik przestaje przeglądać i zaczyna rozważać zakup. ATC rate jest bezpośrednim predyktorem konwersji: jeśli spada, spada też CR i Revenue. To punkt wejścia do wszystkich metryk koszyka.",
          "de": "Sinkt ATC, folgen oft CR und Revenue. Einstiegspunkt für alle Warenkorb- und Checkout-Kennzahlen."
        },
        "formula": {
          "en": "Visits with ≥1 add-to-cart ÷ all visits × 100",
          "pl": "Wizyty z ≥1 dodaniem do koszyka ÷ wszystkie wizyty × 100",
          "de": "Besuche mit ≥1 In-den-Warenkorb ÷ alle Besuche × 100"
        },
        "description": {
          "en": "Percentage of all visits where the user added anything to the basket. A key transition point in the purchase funnel.",
          "pl": "Procent wszystkich wizyt podczas których użytkownik dodał cokolwiek do koszyka. Kluczowy punkt przejścia w lejku zakupowym.",
          "de": "Erstes starkes Kaufsignal: vom Stöbern zur konkreten Kaufüberlegung. ATC korreliert stark mit späterer CR und Umsatz – idealer Frühindikator für Funnel- und PDP-Tests."
        },
        "example": {
          "en": "Home appliance benchmark: 3–8%. Low value: too hard to find ATC, product out of stock, deterring price, or poor images/descriptions on PDP.",
          "pl": "Benchmark AGD: 3–8%. Niska wartość: za trudno znaleźć ATC, produkt niedostępny, cena odstraszająca, słabe zdjęcia/opisy na PDP.",
          "de": "AGD-Richtwert oft 3–8 %. Niedrig: ATC schwer findbar, Lagerbestände, Preis, schwache Medien oder Vertrauen auf der PDP."
        },
        "benchmark": {
          "en": "Monitor alongside Cart Abandonment — high ATC + high Abandonment = customers want to buy but something blocks completion (checkout, delivery, payments).",
          "pl": "Monitoruj razem z Cart Abandonment — wysoki ATC + wysoki Abandonment = klienci chcą kupić ale coś blokuje finalizację (checkout, dostawa, płatności).",
          "de": "Gemeinsam mit Warenkorbabbruch lesen: hohe ATC bei hohem Abbruch deutet auf Checkout-, Liefer- oder Zahlungsprobleme."
        }
      },
      {
        "id": "purchase-intent",
        "priority": 2,
        "isNew": false,
        "name": {
          "en": "Purchase intent rate",
          "pl": "Purchase intent rate",
          "de": "Kaufabsicht-Rate"
        },
        "tag": {
          "en": "Present: definition",
          "pl": "Obecna: definicja",
          "de": "Aktuell: Definition"
        },
        "tagColor": "blue",
        "why": {
          "en": "Shows total purchase intent across all channels. If Purchase Intent >> ATC rate — many customers want to buy but not online. Key signal for omnichannel strategy and sales channel decisions.",
          "pl": "Pokazuje łączną intencję zakupową ze wszystkich kanałów. Jeśli Purchase Intent >> ATC rate — dużo klientów chce kupić, ale nie online. Kluczowy sygnał dla strategii omnichannel i decyzji o kanałach sprzedaży.",
          "de": "Zentral für Omnichannel-Strategie: Sie zeigt, ob digitale Absicht außerhalb des eigenen Warenkorbs landet."
        },
        "formula": {
          "en": "(ATC + dealer search + buy online + external retailer click) ÷ all visits × 100",
          "pl": "(ATC + dealer search + buy online + external retailer click) ÷ wszystkie wizyty × 100",
          "de": "(ATC + Händlersuche + Online kaufen + externer Händler-Klick) ÷ alle Besuche × 100"
        },
        "description": {
          "en": "Aggregate of all purchase signals. Broader than ATC — also includes those searching for a physical store or clicking to an external retailer.",
          "pl": "Agregat wszystkich sygnałów zakupowych. Szerszy niż ATC — obejmuje też szukających sklepu fizycznego lub klikających do zewnętrznego sprzedawcy.",
          "de": "Aggregiert mehrere Kaufsignale inkl. stationärer oder Partnerkanäle. Wenn Kaufabsicht deutlich über ATC liegt, kaufen viele lieber offline oder beim Partner."
        },
        "example": {
          "en": "If Purchase Intent >> ATC rate — customers prefer to buy elsewhere. Check the buy online vs external retailer split.",
          "pl": "Jeśli Purchase Intent >> ATC rate — klienci wolą kupić gdzie indziej. Sprawdź split buy online vs external retailer.",
          "de": "Split „Online kaufen“ vs. externer Händler zeigt, ob der eigene Shop im Preis- oder Convenience-Mix zurückliegt."
        },
        "benchmark": {
          "en": "Compare with Overall CR — large gap = lots of intent leaks without completion. Look for checkout problems.",
          "pl": "Porównaj z Overall CR — duża różnica = dużo intencji ucieka bez finalizacji. Szukaj problemów w checkout.",
          "de": "Mit Gesamt-CR vergleichen: große Lücke deutet auf Checkout- oder Fulfillment-Reibung."
        }
      },
      {
        "id": "buy-online",
        "priority": 3,
        "isNew": false,
        "name": {
          "en": "Buy online click rate",
          "pl": "Buy online click rate",
          "de": "„Online kaufen“-Klickrate"
        },
        "tag": {
          "en": "Present: definition",
          "pl": "Obecna: definicja",
          "de": "Aktuell: Definition"
        },
        "tagColor": "blue",
        "formula": {
          "en": "Visits with Buy online click ÷ all visits × 100",
          "pl": "Wizyty z kliknięciem Kup online ÷ wszystkie wizyty × 100",
          "de": "Besuche mit Klick „Online kaufen“ ÷ alle Besuche × 100"
        },
        "description": {
          "en": "How many visits end with a Buy online click — direct purchase intent through e-commerce, not through a dealer.",
          "pl": "Ile wizyt kończy się kliknięciem Kup online — bezpośrednia intencja zakupu przez e-commerce, nie przez dealera.",
          "de": "Direkte Absicht, im eigenen E-Commerce zu kaufen – ohne Umweg über Händlerstrecken. Trend ist oft wichtiger als Einzelwert."
        },
        "example": {
          "en": "If buy online rate grows — e-commerce is gaining importance in the sales mix. Trend over time is more important than the absolute value.",
          "pl": "Jeśli buy online rate rośnie — e-commerce zyskuje na znaczeniu w miksie sprzedażowym. Trend w czasie ważniejszy niż wartość absolutna.",
          "de": "Steigt die Rate, gewinnt der Direktkanal im Vertriebsmix an Bedeutung."
        },
        "benchmark": {
          "en": "If external retailer >> buy online — the own store may be more expensive or less convenient than partners.",
          "pl": "Jeśli external retailer >> buy online — własny sklep może być droższy lub mniej wygodny niż partnerzy.",
          "de": "Wenn externer Händler deutlich überwiegt, Preis, Lieferversprechen und Checkout-Reibung prüfen."
        }
      },
      {
        "id": "external-retailer",
        "priority": 3,
        "isNew": false,
        "name": {
          "en": "External retailer click rate",
          "pl": "External retailer click rate",
          "de": "Klickrate externer Händler"
        },
        "tag": {
          "en": "Present: definition",
          "pl": "Obecna: definicja",
          "de": "Aktuell: Definition"
        },
        "tagColor": "blue",
        "formula": {
          "en": "Visits with a click to an external retailer ÷ all visits × 100",
          "pl": "Wizyty z kliknięciem do zewnętrznego sprzedawcy ÷ wszystkie wizyty × 100",
          "de": "Besuche mit Klick zu externem Händler ÷ alle Besuche × 100"
        },
        "description": {
          "en": "How many visits end with a redirect to an external trading partner. Key for the multi-channel model.",
          "pl": "Ile wizyt kończy się przekierowaniem do zewnętrznego partnera handlowego. Kluczowe dla modelu wielokanałowego.",
          "de": "Misst Weiterleitungen zu Marktplätzen oder Partnern. Kann strategisch gewollt sein oder auf Wettbewerbsnachteile hinweisen."
        },
        "example": {
          "en": "High value = customers prefer to buy from a dealer rather than directly. Can be strategically desirable or a problem.",
          "pl": "Wysoka wartość = klienci wolą kupić u dealera niż bezpośrednio. Może być strategicznie pożądane lub problem.",
          "de": "Hohe Rate: Kauf lieber beim Partner – prüfen Sie Margen, Verfügbarkeit und wahrgenommene Sicherheit."
        },
        "benchmark": {
          "en": "Trend over time shows whether the direct-to-consumer strategy is gaining or losing ground.",
          "pl": "Trend w czasie pokazuje czy strategia direct-to-consumer zyskuje czy traci na znaczeniu.",
          "de": "Trend beobachten, um D2C-Strategie und Partnerprogramm zu kalibrieren."
        }
      },
      {
        "id": "comparison-lift",
        "priority": 3,
        "isNew": false,
        "name": {
          "en": "Comparison conversion lift",
          "pl": "Comparison conversion lift",
          "de": "Konversions-Lift durch Vergleich"
        },
        "tag": {
          "en": "Present: definition",
          "pl": "Obecna: definicja",
          "de": "Aktuell: Definition"
        },
        "tagColor": "blue",
        "formula": {
          "en": "CR (with comparison tool) − CR (without) = lift in pp",
          "pl": "CR (z narzędziem porównania) − CR (bez) = lift w pp",
          "de": "CR mit Vergleichstool − CR ohne Vergleich (Prozentpunkte)"
        },
        "description": {
          "en": "By how many pp users of the product comparison tool convert higher vs non-users.",
          "pl": "O ile pp wyżej konwertują użytkownicy korzystający z narzędzia porównywania produktów vs nieużywający.",
          "de": "Misst, ob das Produktvergleichstool Kaufwahrscheinlichkeit erhöht. Hoher Lift kann auch Selektion bedeuten (schon entschlossene Nutzer:innen)."
        },
        "example": {
          "en": "Lift = +5 pp — comparison tool genuinely helps decision-making. Lift ≈ 0 — used by already-decided customers (correlation, not causation).",
          "pl": "Lift = +5 pp — porównywarka realnie pomaga w decyzji. Lift ≈ 0 — używają go i tak zdecydowani klienci (korelacja, nie przyczynowość).",
          "de": "+5 PP kann echte Entscheidungshilfe sein; ~0 PP kann bedeuten, dass nur Power-User das Tool nutzen."
        },
        "benchmark": {
          "en": "Note: high lift may result from selection bias. For certainty, run an A/B test hiding the tool for a control group.",
          "pl": "Uwaga: wysoki lift może wynikać z selekcji. Dla pewności przeprowadź test A/B ukrywając narzędzie dla grupy kontrolnej.",
          "de": "Bei starkem Lift A/B-Test mit ausgeblendetem Tool zur Kausalsicherung erwägen."
        }
      },
      {
        "id": "filter-sort-lift",
        "priority": 3,
        "isNew": false,
        "name": {
          "en": "Filter/sort conversion lift",
          "pl": "Filter/sort conversion lift",
          "de": "Konversions-Lift durch Filter/Sortierung"
        },
        "tag": {
          "en": "Present: definition",
          "pl": "Obecna: definicja",
          "de": "Aktuell: Definition"
        },
        "tagColor": "blue",
        "formula": {
          "en": "CR (with filters/sorting) − CR (without) = lift in pp",
          "pl": "CR (z filtrami/sortowaniem) − CR (bez) = lift w pp",
          "de": "CR mit Filtern/Sortierung − CR ohne (Prozentpunkte)"
        },
        "description": {
          "en": "By how much higher do PLP filter/sort users convert. For home appliances with hundreds of products, good filtering is critical.",
          "pl": "O ile wyżej konwertują użytkownicy używający filtrów lub sortowania na PLP. Dla AGD z setkami produktów dobra filtracja jest krytyczna.",
          "de": "Zeigt, ob PLP-Filter die Auswahl erleichtern – bei großen Sortimenten zentral für UX und Findability."
        },
        "example": {
          "en": "High lift = filters help with selection. Low = filters too hidden or unintuitive. If only 5% of PLP users use filters — they are too hard to access.",
          "pl": "Wysoki lift = filtry ułatwiają wybór. Niski = filtry zbyt ukryte lub nieintuicyjne. Jeśli tylko 5% użytkowników PLP używa filtrów — są za trudno dostępne.",
          "de": "Nur 5 % nutzen Filter: Steuerung ist zu versteckt oder nicht verständlich beschriftet."
        },
        "benchmark": {
          "en": "Check which filters are used most frequently (energy rating, price, brand, capacity) — informs how the category page should be structured.",
          "pl": "Sprawdź jakie filtry używane najczęściej (energia, cena, marka, pojemność) — informuje jak powinna wyglądać strona kategorii.",
          "de": "Meistgenutzte Filter (Energie, Preis, Marke, Volumen) analysieren und in der Informationsarchitektur priorisieren."
        }
      },
      {
        "id": "competence-to-pdp",
        "priority": 3,
        "isNew": false,
        "name": {
          "en": "Competence-to-PDP CTR",
          "pl": "Competence-to-PDP CTR",
          "de": "CTR von Ratgeber zur PDP"
        },
        "tag": {
          "en": "Present: definition",
          "pl": "Obecna: definicja",
          "de": "Aktuell: Definition"
        },
        "tagColor": "blue",
        "formula": {
          "en": "Visits going from Competence page to PDP ÷ all Competence page visits × 100",
          "pl": "Wizyty przechodzące z Competence page na PDP ÷ wszystkie wizyty na Competence page × 100",
          "de": "Besuche von Ratgeber- zu Produktseite ÷ alle Ratgeber-Besuche × 100"
        },
        "description": {
          "en": "CTR from educational pages (e.g. How to choose a washing machine) to a specific product page. Measures educational content effectiveness as a sales tool.",
          "pl": "CTR ze stron edukacyjnych (np. Jak wybrać pralkę) na kartę konkretnego produktu. Mierzy skuteczność treści edukacyjnych jako narzędzia sprzedażowego.",
          "de": "Misst, ob Ratgeber („Waschmaschine kaufen“) zu konkreten Produkten führt – Brücke zwischen Content und Commerce."
        },
        "example": {
          "en": "High CTR = educational content leads to products. Low = they read guides but do not go to products — visible CTAs are missing.",
          "pl": "Wysoki CTR = treści edukacyjne prowadzą do produktów. Niski = czytają poradniki ale nie przechodzą do produktów — brakuje widocznych CTA.",
          "de": "Niedrige CTR: starke Texte, aber schwache CTAs oder fehlende Produktkarten im Fluss."
        },
        "benchmark": {
          "en": "Competence pages have higher SEO potential (long-tail). If they convert well to PDP — invest in more educational articles.",
          "pl": "Strony kompetencji mają wyższy potencjał SEO (long-tail). Jeśli dobrze konwertują do PDP — inwestuj w więcej artykułów edukacyjnych.",
          "de": "Gute Ratgeber haben SEO-Potenzial; hohe CTR rechtfertigt mehr Editorial-Invest."
        }
      },
      {
        "id": "plp-to-pdp",
        "priority": 2,
        "isNew": false,
        "name": {
          "en": "PLP-to-PDP CTR",
          "pl": "PLP-to-PDP CTR",
          "de": "CTR von Produktliste zur PDP"
        },
        "tag": {
          "en": "Present: definition",
          "pl": "Obecna: definicja",
          "de": "Aktuell: Definition"
        },
        "tagColor": "blue",
        "why": {
          "en": "The entry point to the product funnel. If users land on a listing and do not click any product — the entire downstream funnel (PDP, ATC, checkout) has no chance. Listing problems block sales right at the start of the process.",
          "pl": "Punkt wejścia do lejka produktowego. Jeśli użytkownicy wchodzą na listing i nie klikają w żaden produkt — cały dalszy lejek (PDP, ATC, checkout) nie ma szans. Problemy z listingiem blokują sprzedaż na samym początku procesu.",
          "de": "Ohne PLP-CTR stirbt der gesamte downstream-Funnel – Listing-UX ist der erste Hebel."
        },
        "formula": {
          "en": "Visits from product listing (PLP) to product page ÷ all PLP visits × 100",
          "pl": "Wizyty z listingu (PLP) na kartę produktu ÷ wszystkie wizyty PLP × 100",
          "de": "Besuche von PLP zu PDP ÷ alle PLP-Besuche × 100"
        },
        "description": {
          "en": "How many product listing visits end with a click on a specific product. Entry point to the sales funnel.",
          "pl": "Ile wizyt na liście produktów kończy się kliknięciem w konkretny produkt. Punkt wejścia do lejka sprzedażowego.",
          "de": "Einstieg in den Produkttrichter. Ohne Klick aus der Liste folgen keine PDP-, ATC- oder Checkout-Schritte."
        },
        "example": {
          "en": "Low value: too many products without good sorting, poor tile images, no price on tile, slow loading.",
          "pl": "Niska wartość: za dużo produktów bez dobrego sortowania, słabe zdjęcia kafelków, brak ceny na kafelku, wolne ładowanie.",
          "de": "Niedrig: zu viele Produkte ohne Sortierung, schwache Kacheln, fehlender Preis, langsame PLP."
        },
        "benchmark": {
          "en": "Check CTR for different categories. A/B test tile layouts, image sizes, price visibility.",
          "pl": "Sprawdź CTR dla różnych kategorii. A/B testuj układy kafelków, rozmiary zdjęć, widoczność ceny.",
          "de": "Kachel-Layouts, Bildgrößen und Preissichtbarkeit per A/B-Tests optimieren."
        }
      },
      {
        "id": "product-discovery-success",
        "priority": 3,
        "isNew": false,
        "name": {
          "en": "Product Discovery Success rate",
          "pl": "Product Discovery Success rate",
          "de": "Produktfinder-Erfolgsrate"
        },
        "tag": {
          "en": "Present: definition",
          "pl": "Obecna: definicja",
          "de": "Aktuell: Definition"
        },
        "tagColor": "blue",
        "formula": {
          "en": "PDP visits with ATC OR ≥30 sec on page ÷ all PDP visits × 100",
          "pl": "Wizyty PDP z ATC LUB ≥30 sek na stronie ÷ wszystkie wizyty PDP × 100",
          "de": "PDP-Besuche mit ATC oder ≥30 s Verweildauer ÷ alle PDP-Besuche × 100"
        },
        "description": {
          "en": "Whether a PDP visit ended in success — ATC or at least 30 seconds (a signal of genuine interest). Two definitions of success in one metric.",
          "pl": "Czy wizyta na PDP zakończyła się sukcesem — ATC lub przynajmniej 30 sekund (sygnał realnego zainteresowania). Dwie definicje sukcesu w jednej metryce.",
          "de": "Kombiniert hartes Signal (ATC) mit softer Engagement-Zeit als Surrogat für echtes Interesse."
        },
        "example": {
          "en": "Low result = users land on PDP and immediately leave. Compare between categories.",
          "pl": "Niski wynik = użytkownicy wpadają na PDP i od razu wychodzą. Porównaj między kategoriami.",
          "de": "Steigt die Rate ohne ATC-Anstieg, zögern Nutzer:innen vor Preis, Verfügbarkeit oder CTA."
        },
        "benchmark": {
          "en": "If success rate grows but ATC does not — users engage but do not add to basket. Problem may be price, availability or a weak CTA.",
          "pl": "Jeśli success rate rośnie ale ATC nie — użytkownicy się angażują ale nie dodają do koszyka. Problem może być w cenie, dostępności lub słabym CTA.",
          "de": "Zwischen Kategorien vergleichen und schwache PDP-Muster identifizieren."
        }
      }
    ]
  },
  {
    "id": "pdp",
    "isNew": false,
    "label": {
      "en": "Product Page",
      "pl": "Karta produktu",
      "de": "Produktseite"
    },
    "title": {
      "en": "Product Page (PDP)",
      "pl": "Karta produktu (PDP)",
      "de": "Produktseite (PDP)"
    },
    "metrics": [
      {
        "id": "pdp-to-atc",
        "priority": 1,
        "isNew": false,
        "name": {
          "en": "PDP-to-ATC rate",
          "pl": "PDP-to-ATC rate",
          "de": "PDP-zu-ATC-Rate"
        },
        "tag": {
          "en": "Present: definition",
          "pl": "Obecna: definicja",
          "de": "Aktuell: Definition"
        },
        "tagColor": "blue",
        "why": {
          "en": "The most important product page quality metric — directly measures whether the PDP convinces users to buy. This is the point where the largest portion of potential transactions is lost. Low value = something on the product page repels customers before they reach the basket.",
          "pl": "Najważniejsza metryka jakości strony produktu — bezpośrednio mierzy czy PDP przekonuje do zakupu. Tu traci się największa część potencjalnych transakcji. Niska wartość = coś na karcie produktu odpycha klientów zanim trafią do koszyka.",
          "de": "Direkter Hebel für Informationsarchitektur, Medien, Reviews und primäre Aktionen auf der PDP."
        },
        "formula": {
          "en": "PDP visits with ≥1 ATC ÷ all PDP visits × 100",
          "pl": "Wizyty PDP z ≥1 ATC ÷ wszystkie wizyty PDP × 100",
          "de": "PDP-Besuche mit ≥1 ATC ÷ alle PDP-Besuche × 100"
        },
        "description": {
          "en": "How many PDP visits end with it being added to the basket. A direct measure of PDP effectiveness.",
          "pl": "Ile wizyt na karcie produktu kończy się dodaniem go do koszyka. Bezpośrednia miara skuteczności PDP.",
          "de": "Wichtigste PDP-Qualitätskennzahl: misst, ob die Produktseite zur Warenkorbentscheidung überzeugt. Hier gehen oft die meisten potenziellen Transaktionen verloren."
        },
        "example": {
          "en": "Home appliance benchmark: 5–15%. Low value: poor presentation, price too high, no visible ATC, few reviews, out of stock.",
          "pl": "Benchmark AGD: 5–15%. Niska wartość: zła prezentacja, zbyt wysoka cena, brak widocznego ATC, mało recenzji, out of stock.",
          "de": "AGD-Richtwert oft 5–15 %. Schwach bei schlechter Medienqualität, fehlendem Vertrauen, Preis oder Lagerstatus."
        },
        "benchmark": {
          "en": "Compare by category and brand. If Brand X has 12% and Brand Y 4% — the problem is Brand Y's PDP content/price/availability, not the whole store.",
          "pl": "Porównaj wg kategorii i marki. Jeśli marka X ma 12% a marka Y 4% — problem jest w treści PDP/cenie/dostępności marki Y, nie w całym sklepie.",
          "de": "Nach Marke und Kategorie vergleichen – große Lücken zeigen inhaltliche oder Angebotsprobleme, nicht nur „Shop“."
        }
      },
      {
        "id": "media-engagement",
        "priority": 3,
        "isNew": false,
        "name": {
          "en": "Media Engagement rate",
          "pl": "Media Engagement rate",
          "de": "Medien-Engagement-Rate"
        },
        "tag": {
          "en": "Present: definition",
          "pl": "Obecna: definicja",
          "de": "Aktuell: Definition"
        },
        "tagColor": "blue",
        "formula": {
          "en": "PDP visits with gallery interaction (click, scroll, video) ÷ all PDP visits × 100",
          "pl": "Wizyty PDP z interakcją z galerią (kliknięcie, scroll, wideo) ÷ wszystkie wizyty PDP × 100",
          "de": "PDP-Besuche mit Galerie-Interaktion (Klick, Scroll, Video) ÷ alle PDP-Besuche × 100"
        },
        "description": {
          "en": "How many PDP visits end with gallery interaction. For home appliances the gallery is the physical store online — the customer cannot touch the product.",
          "pl": "Ile odwiedzin karty produktu kończy się interakcją z galerią zdjęć lub wideo. Dla AGD galeria to sklep fizyczny online — klient nie może dotknąć produktu.",
          "de": "Großgeräte online nicht anfassbar – Galerie und Video ersetzen das stationäre Erlebnis."
        },
        "example": {
          "en": "Low value: too few images, bad format (too small, no zoom), no video, gallery below the fold.",
          "pl": "Niska wartość: za mało zdjęć, zły format (za małe, brak zoomu), brak wideo, galeria poniżej fold.",
          "de": "Wenig Interaktion: zu wenige Bilder, kleine Darstellung, kein Zoom, Video unterhalb der Falz."
        },
        "benchmark": {
          "en": "Check Media Engagement rate for products with video vs without — if a large ATC rate difference, it justifies investment in video production.",
          "pl": "Sprawdź Media Engagement rate dla produktów z wideo vs bez — jeśli duża różnica w ATC rate, uzasadnia to inwestycję w produkcję wideo.",
          "de": "PDPs mit und ohne Video vergleichen; große ATC-Unterschiede rechtfertigen Medienproduktion."
        }
      },
      {
        "id": "reviews-reading",
        "priority": 3,
        "isNew": false,
        "name": {
          "en": "Reviews reading rate",
          "pl": "Reviews reading rate",
          "de": "Rate „Bewertungen lesen“"
        },
        "tag": {
          "en": "Present: definition",
          "pl": "Obecna: definicja",
          "de": "Aktuell: Definition"
        },
        "tagColor": "blue",
        "formula": {
          "en": "PDP visits with a click on the reviews section ÷ all PDP visits × 100",
          "pl": "Wizyty PDP z kliknięciem w sekcję recenzji ÷ wszystkie wizyty PDP × 100",
          "de": "PDP-Besuche mit Klick in Bewertungsbereich ÷ alle PDP-Besuche × 100"
        },
        "description": {
          "en": "How many PDP visits end with clicking on the customer reviews section. Measures the need for social proof before a purchasing decision.",
          "pl": "Ile odwiedzin karty produktu kończy się kliknięciem w sekcję opinii. Mierzy zapotrzebowanie na dowód społeczny (social proof) przed decyzją zakupową.",
          "de": "Misst Bedarf an Social Proof vor dem Kauf. Hohe Rate bei wenigen Reviews blockiert oft den Abschluss."
        },
        "example": {
          "en": "High rate = customers need reviews — worth actively collecting opinions (post-purchase email).",
          "pl": "Wysoki wskaźnik = klienci potrzebują recenzji — warto aktywnie zbierać opinie (email po zakupie).",
          "de": "Wenn viele in Reviews klicken, aber <5 Bewertungen da sind, fehlt Vertrauensmaterial."
        },
        "benchmark": {
          "en": "If Reviews reading rate is high but the number of reviews is small (< 5) — customers are looking for reviews and not finding them, blocking the purchase.",
          "pl": "Jeśli Reviews reading rate wysoki ale liczba recenzji mała (< 5) — klienci szukają recenzji i ich nie znajdują, co blokuje zakup.",
          "de": "Post-Purchase-Urteilsbitten und strukturierte Review-UX ausbauen."
        }
      },
      {
        "id": "technical-data-filtered",
        "priority": 4,
        "isNew": false,
        "name": {
          "en": "Technical data filtered rate",
          "pl": "Technical data filtered rate",
          "de": "Rate gefilterte technische Daten"
        },
        "tag": {
          "en": "Present: definition",
          "pl": "Obecna: definicja",
          "de": "Aktuell: Definition"
        },
        "tagColor": "blue",
        "formula": {
          "en": "PDP visits using search in technical specs ÷ visits that opened specifications × 100",
          "pl": "Wizyty PDP z wyszukiwarką w spec. technicznych ÷ wizyty które otworzyły specyfikację × 100",
          "de": "PDP-Besuche mit Suche in technischen Daten ÷ Besuche, die Spezifikation öffneten × 100"
        },
        "description": {
          "en": "How often a user uses the search within the technical parameters section. Measures how hard it is to find a specific specification in the data table.",
          "pl": "Ile razy użytkownik używa wyszukiwarki w sekcji parametrów technicznych. Mierzy jak trudno znaleźć konkretną specyfikację w tabeli danych.",
          "de": "Hohe Nutzung der Spezifikationssuche deutet auf überladene Tabellen hin – Nutzer:innen suchen gezielt nach einem Parameter."
        },
        "example": {
          "en": "High rate = specification table too long or disorganised. Group specifications, highlight key parameters at the top.",
          "pl": "Wysoki wskaźnik = tabela specyfikacji zbyt długa lub nieuporządkowana. Pogrupuj specyfikacje, wyróżnij kluczowe parametry na górze.",
          "de": "Bei Waschmaschinen oft Kapazität, Energielabel, Schleuderdrehzahl – diese nach oben holen."
        },
        "benchmark": {
          "en": "Check which parameters are searched most often. For a washing machine: capacity, energy rating, spin speed.",
          "pl": "Sprawdź jakich parametrów szukają najczęściej. Dla pralki kluczowe: pojemność, klasa energetyczna, prędkość wirowania.",
          "de": "Häufig gesuchte Parameter priorisieren und Tabellen logisch gruppieren."
        }
      },
      {
        "id": "document-download-pdp",
        "priority": 4,
        "isNew": false,
        "name": {
          "en": "Document downloaded rate on PDP",
          "pl": "Document downloaded rate on PDP",
          "de": "Dokumenten-Download-Rate auf der PDP"
        },
        "tag": {
          "en": "Present: definition",
          "pl": "Obecna: definicja",
          "de": "Aktuell: Definition"
        },
        "tagColor": "blue",
        "formula": {
          "en": "PDP visits with document download ÷ all PDP visits × 100",
          "pl": "Wizyty PDP z pobraniem dokumentu ÷ wszystkie wizyty PDP × 100",
          "de": "PDP-Besuche mit Dokumentdownload ÷ alle PDP-Besuche × 100"
        },
        "description": {
          "en": "How many PDP visits end with downloading a document — user manual, technical data sheet, energy certificate, CE declaration.",
          "pl": "Ile wizyt na PDP kończy się pobraniem dokumentu — instrukcji, karty technicznej, certyfikatu energetycznego, deklaracji CE.",
          "de": "Relevant für B2B, Installateur:innen und technisch tiefe Käufe (Energielabel, Datenblatt, CE)."
        },
        "example": {
          "en": "Important for B2B and installers. Low value may mean documents are hidden too deep on the page.",
          "pl": "Ważne dla B2B i instalatorów. Niska wartość może oznaczać że dokumenty ukryte zbyt głęboko na stronie.",
          "de": "Hohe Downloads bei Einbaugeräten: professionelles Publikum – ggf. B2B-Ansicht erwägen."
        },
        "benchmark": {
          "en": "If download rate is high for specific categories (e.g. built-in dishwashers) — these products are bought by professionals. Consider a dedicated B2B view.",
          "pl": "Jeśli download rate wysoki dla konkretnych kategorii (np. wbudowane zmywarki) — te produkty kupują profesjonaliści. Rozważ dedykowany widok B2B.",
          "de": "Downloads prominent, aber nicht überladen platzieren."
        }
      }
    ]
  },
  {
    "id": "search",
    "isNew": false,
    "label": {
      "en": "Search",
      "pl": "Wyszukiwarka",
      "de": "Suche"
    },
    "title": {
      "en": "Search Experience",
      "pl": "Wyszukiwarka — Search Experience",
      "de": "Such-Erlebnis"
    },
    "metrics": [
      {
        "id": "search-refinement",
        "priority": 2,
        "isNew": false,
        "name": {
          "en": "Search Refinement rate",
          "pl": "Search Refinement rate",
          "de": "Such-Verfeinerungsrate"
        },
        "tag": {
          "en": "Present: 53.5% — too high!",
          "pl": "Obecna: 53.5% — za wysoki!",
          "de": "Aktuell: 53,5 % — zu hoch!"
        },
        "tagColor": "red",
        "why": {
          "en": "53.5% — more than half of searching users need to search again. A good search engine benchmark is < 35%. A poor search engine directly lowers CR. Combined with 0% zero-results it suggests the search engine returns results but they are not sufficiently relevant.",
          "pl": "53.5% — ponad połowa użytkowników szukających musi szukać ponownie. Benchmark dobrej wyszukiwarki to < 35%. Słaba wyszukiwarka bezpośrednio obniża CR. Zestawiony z 0% zero-results sugeruje że wyszukiwarka daje wyniki ale niewystarczająco trafne.",
          "de": "Schwache Suche senkt CR direkt; bei 0 % Nulltreffern liegt das Problem oft in Relevanz, nicht in leeren Ergebnissen."
        },
        "formula": {
          "en": "Visits with a subsequent search after the first ÷ all visits with search × 100",
          "pl": "Wizyty z kolejnym wyszukiwaniem po pierwszym ÷ wszystkie wizyty z wyszukiwaniem × 100",
          "de": "Besuche mit Folgesuche ÷ alle Besuche mit Suche × 100"
        },
        "description": {
          "en": "More than half of users using the search engine need to search again — because first results are poor or they are exploring the catalogue.",
          "pl": "Ponad połowa użytkowników korzystających z wyszukiwarki musi szukać ponownie — bo pierwsze wyniki są złe lub eksplorują katalog.",
          "de": "Anteil, der nach der ersten Suche erneut sucht. >50 % deutet auf schwache Trefferqualität oder unklare Synonyme hin."
        },
        "example": {
          "en": "53.5% is too high — benchmark < 35%. Check the top 20 queries with the highest refinement rate and assess the relevance of first-page results.",
          "pl": "53.5% to za dużo — benchmark < 35%. Sprawdź top 20 zapytań z najwyższym refinement rate i oceń trafność pierwszych wyników.",
          "de": "53,5 % ist deutlich über dem Ziel <35 % – Top-Queries mit hoher Verfeinerung manuell bewerten."
        },
        "benchmark": {
          "en": "Combined with Search-to-PDP CTR 29.6%: those who find — find well, but more than half need to try multiple times. Problem with precision, not architecture.",
          "pl": "Zestawienie z Search-to-PDP CTR 29.6%: ci co trafiają — trafiają dobrze, ale ponad połowa musi próbować kilka razy. Problem z precyzją, nie architekturą.",
          "de": "Mit Search-to-PDP-CTR kombinieren: präzise Treffer, aber Nutzer:innen brauchen dennoch viele Versuche = Ranking/Recall-Thema."
        }
      },
      {
        "id": "search-zero-results",
        "priority": 3,
        "isNew": false,
        "name": {
          "en": "Search Zero-results rate",
          "pl": "Search Zero-results rate",
          "de": "Such-Nulltreffer-Rate"
        },
        "tag": {
          "en": "Present: 0.00% — excellent!",
          "pl": "Obecna: 0.00% — świetny wynik!",
          "de": "Aktuell: 0,00 % — exzellent!"
        },
        "tagColor": "green",
        "formula": {
          "en": "Searches with no results ÷ all searches × 100",
          "pl": "Wyszukiwania bez wyników ÷ wszystkie wyszukiwania × 100",
          "de": "Suchen ohne Treffer ÷ alle Suchen × 100"
        },
        "description": {
          "en": "Percentage of searches that returned no results. Measures the dead zone of the search engine. 0.00% is an outstanding result.",
          "pl": "Procent wyszukiwań które nie zwróciły żadnych wyników. Mierzy martwą strefę wyszukiwarki. 0.00% to wybitny wynik.",
          "de": "Anteil leerer Ergebnisse. 0 % kann exzellente NLP-Abdeckung oder ein Fallback bedeuten, der immer etwas zeigt."
        },
        "example": {
          "en": "0% = the search engine handles every query. Check: good NLP or a fallback mechanism showing anything instead of an empty page.",
          "pl": "0% = wyszukiwarka radzi sobie z każdym zapytaniem. Sprawdź: dobry NLP czy mechanizm fallback który pokazuje cokolwiek zamiast pustej strony.",
          "de": "Prüfen, ob echte Trefferqualität oder „weiche“ Fallbacks die 0 % erklären."
        },
        "benchmark": {
          "en": "Benchmark: < 5% good | < 2% very good | 0% outstanding or fallback. Monitor what queries historically gave zero results.",
          "pl": "Benchmark: < 5% dobry | < 2% bardzo dobry | 0% wybitny lub fallback. Monitoruj jakie zapytania historycznie dawały zero wyników.",
          "de": "<5 % gut, <2 % sehr gut; historische Nulltreffer-Queries dokumentieren."
        }
      },
      {
        "id": "search-to-pdp-ctr",
        "priority": 3,
        "isNew": false,
        "name": {
          "en": "Search-to-PDP CTR rate",
          "pl": "Search-to-PDP CTR rate",
          "de": "Such-zu-PDP-CTR"
        },
        "tag": {
          "en": "Present: 29.6%",
          "pl": "Obecna: 29.6%",
          "de": "Aktuell: 29,6 %"
        },
        "tagColor": "green",
        "formula": {
          "en": "Visits where user searched and directly went to a PDP ÷ all visits with search × 100",
          "pl": "Wizyty gdzie user szukał i bezpośrednio przeszedł na PDP ÷ wszystkie wizyty z wyszukiwaniem × 100",
          "de": "Besuche mit direktem Sprung von Suche zur PDP ÷ alle Suchbesuche × 100"
        },
        "description": {
          "en": "How many search visits end with a direct transition to a PDP without PLP clicks. Measures search engine precision in delivering specific products.",
          "pl": "Ile wizyt z wyszukiwaniem kończy się bezpośrednim przejściem na PDP bez kliknięć przez PLP. Mierzy precyzję wyszukiwarki w dostarczaniu konkretnych produktów.",
          "de": "Misst, wie oft Suche direkt zu einem Produkt führt – Indikator für Trefferpräzision."
        },
        "example": {
          "en": "29.6% — nearly one in three search sessions leads directly to a PDP. Combined with 53.5% refinement: those who find — find well.",
          "pl": "29.6% — niemal co trzecia sesja z wyszukiwarką prowadzi bezpośrednio na PDP. Zestawiony z 53.5% refinement: ci co trafiają — trafiają dobrze.",
          "de": "~30 % direkte PDPs bei hoher Verfeinerung: Treffer sind oft passend, aber Nutzer:innen müssen trotzdem nachschärfen."
        },
        "benchmark": {
          "en": "Increasing Search-to-PDP CTR alongside decreasing Refinement rate = search engine improvement. Monitor these two metrics as a pair.",
          "pl": "Wzrost Search-to-PDP CTR przy jednoczesnym spadku Refinement rate = poprawa wyszukiwarki. Monitoruj te dwie metryki razem jako parę.",
          "de": "Steigende PDP-CTR bei sinkender Verfeinerung = messbare Suchverbesserung."
        }
      }
    ]
  },
  {
    "id": "cart",
    "isNew": false,
    "label": {
      "en": "Basket",
      "pl": "Koszyk",
      "de": "Warenkorb & Kauf"
    },
    "title": {
      "en": "Basket & Purchase",
      "pl": "Koszyk & zakup",
      "de": "Warenkorb & Kauf"
    },
    "metrics": [
      {
        "id": "error-to-intent",
        "priority": 1,
        "isNew": false,
        "name": {
          "en": "Error-to-intent rate",
          "pl": "Error-to-intent rate",
          "de": "Fehler-zur-Intent-Rate"
        },
        "tag": {
          "en": "CRITICAL",
          "pl": "KRYTYCZNA",
          "de": "KRITISCH"
        },
        "tagColor": "red",
        "why": {
          "en": "The only metric where a technical problem literally prevents a purchase — it does not just discourage, it blocks the transaction. Even 1–2% with high traffic = tens of thousands in lost revenue monthly. Absolute priority for the tech team.",
          "pl": "Jedyna metryka gdzie problem techniczny dosłownie uniemożliwia zakup — nie zniechęca, ale blokuje transakcję. Nawet 1–2% przy dużym ruchu = dziesiątki tysięcy złotych straconych miesięcznie. Priorytet absolutny dla tech teamu.",
          "de": "Einzige Kennzahl, bei der Bugs direkt Transaktionen verhindern – absoluter Fokus für Tech und QA."
        },
        "formula": {
          "en": "Visits with ATC that encountered a basket error ÷ all visits with ATC × 100",
          "pl": "Wizyty z ATC które napotkały błąd koszyka ÷ wszystkie wizyty z ATC × 100",
          "de": "Besuche mit ATC und Warenkorbfehler ÷ alle ATC-Besuche × 100"
        },
        "description": {
          "en": "What percentage of purchase sessions (with ATC) encounter technical basket errors — product does not add, checkout error. Every error = a directly lost transaction.",
          "pl": "Ile procent sesji zakupowych (z ATC) napotyka błędy techniczne koszyka — produkt nie dodaje się, błąd przy checkout. Każdy błąd = bezpośrednio stracona transakcja.",
          "de": "Technische Fehler blockieren den Kauf hart – nicht nur Friction, sondern Abbruch. Selbst 1–2 % sind bei Volumen massiver Umsatzverlust."
        },
        "example": {
          "en": "1M visits, 5% ATC = 50K purchase sessions. Error-to-intent = 2% = 1,000 visits with errors = tens of thousands in lost revenue monthly.",
          "pl": "1M wizyt, 5% ATC = 50K sesji zakupowych. Error-to-intent = 2% = 1 000 wizyt z błędem = dziesiątki tysięcy złotych straconych miesięcznie.",
          "de": "1 Mio. Besuche, 5 % ATC = 50.000 Kaufsessions; 2 % Fehler = 1.000 verlorene Abschlusschancen."
        },
        "benchmark": {
          "en": "Absolute priority — fix basket errors before everything else. Alert when Error-to-intent exceeds 1%. Check errors by device.",
          "pl": "Priorytet absolutny — błędy koszyka naprawiaj przed wszystkimi innymi zadaniami. Alert gdy Error-to-intent przekracza 1%. Sprawdź błędy wg urządzenia.",
          "de": "Höchste Priorität: Monitoring, Geräte-Splits, Alerts >1 %."
        }
      },
      {
        "id": "cart-abandonment",
        "priority": 1,
        "isNew": false,
        "name": {
          "en": "Cart Abandonment rate",
          "pl": "Cart Abandonment rate",
          "de": "Warenkorbabbruch-Rate"
        },
        "tag": {
          "en": "Present: definition",
          "pl": "Obecna: definicja",
          "de": "Aktuell: Definition"
        },
        "tagColor": "blue",
        "why": {
          "en": "Measures how many almost-purchases did not succeed. Every abandoned ATC session is a customer who was committed and something stopped them. Distinguishing deliberate abandonment (needs more time — typical for appliances) vs error abandonment (priority to fix) determines strategy.",
          "pl": "Mierzy ile prawie-zakupów się nie udało. Każda porzucona sesja z ATC to klient który był zdecydowany i coś go zatrzymało. Różnicowanie: porzucenie z wyboru (potrzebuje więcej czasu — typowe AGD) vs porzucenie przez błąd (priorytet naprawy) decyduje o strategii.",
          "de": "Jede abgebrochene ATC-Session war Kaufnähe – Ursachen (Checkout, Lieferung, Zahlung) gezielt qualitativ erforschen."
        },
        "formula": {
          "en": "Visits with ATC but no purchase ÷ all visits with ATC × 100",
          "pl": "Wizyty z ATC bez zakupu ÷ wszystkie wizyty z ATC × 100",
          "de": "Besuche mit ATC ohne Kauf ÷ alle ATC-Besuche × 100"
        },
        "description": {
          "en": "What percentage of users who added a product to the basket did not complete the purchase. Measures leakage between decision and payment.",
          "pl": "Ile procent użytkowników którzy dodali produkt do koszyka nie sfinalizowało zakupu. Mierzy wyciek między decyzją a płatnością.",
          "de": "Misst fast-Käufe, die nicht abgeschlossen werden. Bei AGD ist hoher Abbruch teils normal (Wunschliste, lange Entscheidung)."
        },
        "example": {
          "en": "Home appliance benchmark: 70–85% is normal — customers use the basket as a wishlist. Concerning is an increase over time or large differences between brands.",
          "pl": "Benchmark AGD: 70–85% to normalne — klienci używają koszyka jak listy życzeń. Niepokojący jest wzrost w czasie lub duże różnice między markami.",
          "de": "70–85 % können bei Großgeräten üblich sein – alarmierend sind steigende Trends oder extreme Marken-Outliers."
        },
        "benchmark": {
          "en": "Monitor alongside Error-to-intent — distinguish deliberate abandonments from error abandonments. The latter is a priority.",
          "pl": "Monitoruj razem z Error-to-intent — odróżnij porzucenia z wyboru od porzucenia przez błąd. Drugi typ jest priorytetem.",
          "de": "Mit Fehler-zur-Intent-Rate trennen: bewusstes Verzögern vs. technischer Blocker."
        }
      },
      {
        "id": "additional-service-attach",
        "priority": 2,
        "isNew": false,
        "name": {
          "en": "Additional Service Attach rate",
          "pl": "Additional Service Attach rate",
          "de": "Zusatzleistungs-Anbindungsrate"
        },
        "tag": {
          "en": "Present: definition",
          "pl": "Obecna: definicja",
          "de": "Aktuell: Definition"
        },
        "tagColor": "blue",
        "why": {
          "en": "Additional services (installation, warranty, recycling) often have a higher profit margin % than the appliance itself — installation can have a 60% margin while the appliance 15%. Increasing this metric directly increases profitability without additional customer acquisition costs.",
          "pl": "Usługi dodatkowe (instalacja, gwarancja, recycling) mają często wyższy margin % niż sprzęt — instalacja może mieć marżę 60% gdy sprzęt 15%. Zwiększenie tej metryki bezpośrednio zwiększa profitability bez dodatkowych kosztów pozyskania klienta.",
          "de": "Hebel für Profitabilität ohne zusätzliche Akquise – Checkout-IA und Vertrauen sind zentrale Designaufgaben."
        },
        "formula": {
          "en": "Orders with ≥1 additional service ÷ all orders × 100",
          "pl": "Zamówienia z ≥1 usługą dodatkową ÷ wszystkie zamówienia × 100",
          "de": "Bestellungen mit ≥1 Zusatzleistung ÷ alle Bestellungen × 100"
        },
        "description": {
          "en": "How many orders include at least one additional service: installation, extended warranty, recycling, configuration. A key margin metric.",
          "pl": "Ile zamówień zawiera co najmniej jedną usługę dodatkową: instalacja, rozszerzona gwarancja, recycling, konfiguracja. Kluczowa metryka marżowa.",
          "de": "Montage, Garantie, Entsorgung usw. haben oft höhere Margen als das Gerät – UX im Checkout entscheidet über Sichtbarkeit und Verständlichkeit."
        },
        "example": {
          "en": "If the rate is low: the service offering may not be visible in checkout, the price may be too high, or the benefits communication too weak.",
          "pl": "Jeśli wskaźnik niski: może oferta usług niewidoczna w checkout, cena za wysoka, lub komunikacja korzyści zbyt słaba.",
          "de": "Wenn die Rate niedrig ist, sind Angebote oft zu spät, zu teuer oder unklar kommuniziert."
        },
        "benchmark": {
          "en": "Compare with AOV — orders with a service should have higher AOV. Check at which checkout step users abandon services.",
          "pl": "Porównaj z AOV — zamówienia z usługą powinny mieć wyższy AOV. Sprawdź w którym kroku checkout rezygnują z usług.",
          "de": "Mit AOV kombinieren und Checkout-Schritte auf Abbrüche bei Services prüfen."
        }
      },
      {
        "id": "return-after-atc",
        "priority": 2,
        "isNew": false,
        "name": {
          "en": "Return after ATC no order rate",
          "pl": "Return after ATC no order rate",
          "de": "Rückkehr nach ATC ohne Bestellung"
        },
        "tag": {
          "en": "Present: definition",
          "pl": "Obecna: definicja",
          "de": "Aktuell: Definition"
        },
        "tagColor": "blue",
        "why": {
          "en": "Shows how many customers are still in the decision-making process and ready to return. For home appliances this is natural — the cycle lasts weeks. These users are prime remarketing targets: they know the product, added it to the basket, they just need a nudge.",
          "pl": "Pokazuje ilu klientów jest wciąż w procesie decyzyjnym i gotowych wrócić. Dla AGD to naturalne — cykl trwa tygodnie. Ci użytkownicy to prime target dla remarketingu: znają produkt, dodali do koszyka, potrzebują tylko impulsu.",
          "de": "Zeigt, wie viele Kund:innen noch in der Kaufreise sind – ohne diese Kennzahl verschenken Sie Retargeting-Priorität."
        },
        "formula": {
          "en": "Visitors with ATC but no purchase who returned ÷ all with ATC but no purchase × 100",
          "pl": "Odwiedzający z ATC bez zakupu którzy wrócili ÷ wszyscy z ATC bez zakupu × 100",
          "de": "ATC ohne Kauf, die zurückkehren ÷ alle ATC ohne Kauf × 100"
        },
        "description": {
          "en": "How many users who abandoned their basket returned to the site in a subsequent session. Measures the remarketing potential of warm leads.",
          "pl": "Ilu użytkowników porzuciło koszyk i wróciło na stronę w kolejnej sesji. Mierzy potencjał remarketingowy ciepłych leadów.",
          "de": "Misst warme Leads mit langer Entscheidung – typisch für AGD über mehrere Wochen."
        },
        "example": {
          "en": "Key for home appliances where decisions take weeks. High value = large pool of customers in the decision process — target for email automation, push, retargeting.",
          "pl": "Kluczowa dla AGD gdzie decyzja trwa tygodnie. Wysoka wartość = duży pool klientów w trakcie decyzji — target dla email automation, push, retargetingu.",
          "de": "Hohe Rückkehr = großes Remarketing-Potenzial (E-Mail, Push, Retargeting)."
        },
        "benchmark": {
          "en": "Returns within 7 days are most valuable — typical appliance cycle. Email: 1h after abandonment + 24h + 7 days = standard recovery flow.",
          "pl": "Powroty w ciągu 7 dni najcenniejsze — typowy cykl AGD. Email: 1h po porzuceniu + 24h + 7 dni = standardowy flow odzyskiwania.",
          "de": "7-Tage-Fenster oft wertvoll; Standard-Flow 1 h / 24 h / 7 Tage nach Abbruch testen."
        }
      },
      {
        "id": "return-buy-after-atc",
        "priority": 2,
        "isNew": false,
        "name": {
          "en": "Return and buy after ATC no order rate",
          "pl": "Return and buy after ATC no order rate",
          "de": "Rückkehr und Kauf nach ATC ohne Bestellung"
        },
        "tag": {
          "en": "Present: definition",
          "pl": "Obecna: definicja",
          "de": "Aktuell: Definition"
        },
        "tagColor": "blue",
        "why": {
          "en": "Measures the effectiveness of the entire remarketing strategy. If Return after ATC is high but this metric is low — customers return but still do not buy: price changed, out of stock, or a new checkout friction point.",
          "pl": "Mierzy skuteczność całej strategii remarketingowej. Jeśli Return after ATC wysoki ale ta metryka niska — klienci wracają ale znowu nie kupują: zmiana ceny, out of stock, lub nowy punkt tarcia w checkout.",
          "de": "Verbindet Marketing-Maßnahmen mit tatsächlichem Recovery-Erfolg."
        },
        "formula": {
          "en": "Visitors with ATC but no purchase who returned AND completed a purchase ÷ all with ATC but no purchase × 100",
          "pl": "Odwiedzający z ATC bez zakupu którzy wrócili I sfinalizowali zakup ÷ wszyscy z ATC bez zakupu × 100",
          "de": "ATC ohne Kauf, später zurück und gekauft ÷ alle ATC ohne Kauf × 100"
        },
        "description": {
          "en": "How many of those who abandoned their basket ultimately bought during a subsequent visit. Measures how many abandonments are actually delayed purchases.",
          "pl": "Ile z osób które porzuciły koszyk ostatecznie kupiło podczas kolejnej wizyty. Mierzy ile porzuceń to opóźnione zakupy.",
          "de": "Effektivität von Remarketing und Checkout-Fixes: Rückkehr ohne Kauf deutet auf neue Blocker (Preis, Lager, UX)."
        },
        "example": {
          "en": "Typically high for home appliances. If many return but few buy — what is blocking them? Price? Out of stock? Complex checkout?",
          "pl": "Dla AGD typowo wysoka. Jeśli dużo wraca ale mało kupuje — co ich blokuje? Cena? Out of stock? Skomplikowany checkout?",
          "de": "Viele Rückkehrer, wenige Käufe: Preissprung, Lager oder neues Checkout-Problem prüfen."
        },
        "benchmark": {
          "en": "Monitor trend after changes in checkout or remarketing strategy — a direct indicator of basket recovery effectiveness.",
          "pl": "Monitoruj trend po zmianach w checkout lub strategii remarketingowej — bezpośredni indicator skuteczności odzyskiwania koszyków.",
          "de": "Nach Checkout- oder CRM-Änderungen Trends beobachten."
        }
      },
      {
        "id": "cart-view-ratio",
        "priority": 3,
        "isNew": false,
        "name": {
          "en": "Cart View Ratio per visitor",
          "pl": "Cart View Ratio per visitor",
          "de": "Warenkorb-Ansichten pro Besucher"
        },
        "tag": {
          "en": "Present: definition",
          "pl": "Obecna: definicja",
          "de": "Aktuell: Definition"
        },
        "tagColor": "blue",
        "formula": {
          "en": "Total basket views ÷ number of unique visitors with ATC",
          "pl": "Łączna liczba wyświetleń koszyka ÷ liczba unikalnych odwiedzających z ATC",
          "de": "Gesamte Warenkorb-Ansichten ÷ eindeutige Besucher mit ATC"
        },
        "description": {
          "en": "How many times the average user with ATC viewed their basket. Measures decision hesitation.",
          "pl": "Ile razy przeciętny użytkownik z ATC przeglądał swój koszyk. Mierzy wahanie decyzyjne.",
          "de": "Misst Zögern: viele Ansichten ohne Kauf deuten auf Preisvergleich, Warten auf Aktion oder Unsicherheit."
        },
        "example": {
          "en": "High value = repeatedly return to basket but do not buy — uncertainty about price, waiting for a promotion.",
          "pl": "Wysoka wartość = wielokrotnie wracają do koszyka ale nie kupują — niepewność co do ceny, oczekiwanie na promocję.",
          "de": "Hohe Quote: Reminder mit klarem Nutzen und zeitlich begrenztem Anreiz testen."
        },
        "benchmark": {
          "en": "Good remarketing signal — hot leads. Email reminder about basket products + time-limited offer.",
          "pl": "Dobry sygnał dla remarketingu — gorące leady. Email z przypomnieniem o produktach + ograniczona czasowo oferta.",
          "de": "Als Remarketing-Signal für heiße Leads nutzen."
        }
      },
      {
        "id": "return-buy-same-visit",
        "priority": 3,
        "isNew": false,
        "name": {
          "en": "Return and buy same visit / return rate",
          "pl": "Return and buy same visit / return rate",
          "de": "Rückkehr und Kauf in derselben Session"
        },
        "tag": {
          "en": "Present: complex metric",
          "pl": "Obecna: złożona metryka",
          "de": "Aktuell: komplexe Metrik"
        },
        "tagColor": "blue",
        "formula": {
          "en": "Returners with ATC but no purchase who bought in the same return session ÷ all returners × 100",
          "pl": "Powracający z ATC bez zakupu którzy kupili w tej samej sesji powrotu ÷ wszyscy powracający × 100",
          "de": "Wiederkehrende mit ATC ohne Kauf, die in derselben Rückkehr-Session kaufen ÷ alle Wiederkehrende × 100"
        },
        "description": {
          "en": "Among those who returned after abandoning — how many bought immediately upon return. Distinguishes: returned and bought immediately vs returned but browsed again and left.",
          "pl": "Spośród tych którzy wrócili po porzuceniu — ilu kupiło od razu przy powrocie. Rozróżnia: wrócił i od razu kupił vs wrócił ale znowu przeglądał i wyszedł.",
          "de": "Unterscheidet sofortigen Abschluss nach Rückkehr von erneutem Stöbern ohne Kauf."
        },
        "example": {
          "en": "If high — return is a strong decision signal. Show a simplified checkout or Welcome back, your products are waiting.",
          "pl": "Jeśli wysoka — powrót jest silnym sygnałem decyzji. Pokaż uproszczony checkout lub Witaj z powrotem, Twoje produkty czekają.",
          "de": "Hohe Rate: Rückkehr ist starkes Kaufsignal – reduzierten Checkout oder „Willkommen zurück“-Banner testen."
        },
        "benchmark": {
          "en": "Do you immediately show the basket with products upon return? This can significantly increase this metric.",
          "pl": "Czy przy powrocie pokazujesz od razu koszyk z produktami? To może znacząco zwiększyć tę metrykę.",
          "de": "Direktes Anzeigen des gespeicherten Warenkorbs nach Rückkehr kann die Rate heben."
        }
      },
      {
        "id": "most-abandoned-products",
        "priority": 3,
        "isNew": false,
        "name": {
          "en": "Most abandoned products — table",
          "pl": "Most abandoned products — tabela",
          "de": "Meist abgebrochene Produkte (Tabelle)"
        },
        "tag": {
          "en": "Present: table visible",
          "pl": "Obecna: tabela widoczna",
          "de": "Aktuell: sichtbar"
        },
        "tagColor": "blue",
        "formula": {
          "en": "Columns: Orders | Cart Additions | Cart gap | Cart Abandonment Rate | Cart Abandonment rate – product",
          "pl": "Kolumny: Orders | Cart Additions | Cart gap | Cart Abandonment Rate | Cart Abandonment rate – product",
          "de": "Tabelle: Bestellungen | Cart Additions | Cart gap | Abbruchrate | Abbruchrate Produkt"
        },
        "description": {
          "en": "Table showing top products with the highest basket abandonment rate. Cart gap = difference between basket additions and orders for a specific product.",
          "pl": "Tabela pokazująca top produkty z najwyższym porzuceniem koszyka. Cart gap = różnica między liczbą dodań do koszyka a liczbą zamówień dla konkretnego produktu.",
          "de": "Top-SKUs mit hoher Lücke zwischen Adds und Orders. Zeigt konkrete UX- und Angebotsrisiken pro Produkt."
        },
        "example": {
          "en": "Product with 500 Cart Additions and 50 Orders: Cart gap = 450, Abandonment = 90%. Red flag: price too high, technical issue, or poor availability.",
          "pl": "Produkt z 500 Cart Additions i 50 Orders: Cart gap = 450, Abandonment = 90%. Red flag: cena za wysoka, problem techniczny, lub zła dostępność.",
          "de": "500 Adds, 50 Orders → 90 % Abbruch: Preis, Verfügbarkeit, Reviews oder Bugs prüfen."
        },
        "benchmark": {
          "en": "Action plan: check price vs competition, availability (out of stock?), reviews, technical errors for this SKU.",
          "pl": "Action plan: sprawdź cenę vs konkurencja, dostępność (out of stock?), recenzje, błędy techniczne dla tego SKU.",
          "de": "Action Plan: Wettbewerbspreis, Lager, Reviews, technische Fehler je SKU."
        }
      }
    ]
  }
];

export const METRIC_COUNT = METRIC_SECTIONS.reduce((s, sec) => s + sec.metrics.length, 0);
