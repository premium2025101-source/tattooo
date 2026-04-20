// ─── Translations: English / French / Spanish ───

export type Locale = "en" | "fr" | "es";

export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  es: "Español",
};

export const localeFlags: Record<Locale, string> = {
  en: "🇬🇧",
  fr: "🇫🇷",
  es: "🇪🇸",
};

type TranslationKey = string;
type TranslationValue = string | string[];
type Translations = Record<TranslationKey, Record<Locale, TranslationValue>>;

export const t: Translations = {
  // ─── NAVBAR ───
  "nav.portfolio": { en: "Portfolio", fr: "Portfolio", es: "Portafolio" },
  "nav.services": { en: "Services", fr: "Services", es: "Servicios" },
  "nav.about": { en: "About", fr: "À propos", es: "Acerca de" },
  "nav.booking": { en: "Booking", fr: "Réservation", es: "Reserva" },
  "nav.faq": { en: "FAQ", fr: "FAQ", es: "Preguntas frecuentes" },
  "nav.reviews": { en: "Reviews", fr: "Avis", es: "Reseñas" },
  "nav.bookNow": { en: "Book Now", fr: "Réserver", es: "Reservar" },
  "nav.customTattoos": { en: "Custom Tattoos", fr: "Tatouages Personnalisés", es: "Tatuajes Personalizados" },

  // ─── HERO ───
  "hero.badge": { en: "Health Canada Compliant • Certified Sterile Technician", fr: "Conforme Santé Canada • Technicien Stérile Certifié", es: "Cumple con Salud Canadá • Técnico Estéril Certificado" },
  "hero.inkYour": { en: "INK YOUR", fr: "ENCREZ VOTRE", es: "TINTA TU" },
  "hero.story": { en: "STORY", fr: "HISTOIRE", es: "HISTORIA" },
  "hero.sub": { en: "Custom Tattoos in Canada", fr: "Tatouages Personnalisés au Canada", es: "Tatuajes Personalizados en Canadá" },
  "hero.desc": { en: "Premium artistry, sterile environment. Book your session today and secure your spot.", fr: "Artisanat premium, environnement stérile. Réservez votre session aujourd'hui et réservez votre place.", es: "Arte premium, entorno estéril. Reserva tu sesión hoy y asegura tu lugar." },
  "hero.bookCta": { en: "Book Now & Pay Deposit", fr: "Réserver et Payer l'Acompte", es: "Reservar y Pagar Depósito" },
  "hero.viewPortfolio": { en: "View Portfolio", fr: "Voir le Portfolio", es: "Ver Portafolio" },
  "hero.happyClients": { en: "200+ Happy Clients", fr: "200+ Clients Satisfaits", es: "200+ Clientes Felices" },
  "hero.yearsExp": { en: "5 Years Experience", fr: "5 Ans d'Expérience", es: "5 Años de Experiencia" },
  "hero.scroll": { en: "Scroll", fr: "Défiler", es: "Desplazar" },

  // ─── PORTFOLIO ───
  "portfolio.tag": { en: "THE PROOF", fr: "LES PREUVES", es: "LA PRUEBA" },
  "portfolio.title": { en: "PORTFOLIO", fr: "PORTFOLIO", es: "PORTAFOLIO" },
  "portfolio.desc": { en: "Every piece tells a story. Browse diverse styles — from intricate realism to bold traditional work.", fr: "Chaque pièce raconte une histoire. Parcourez des styles variés — du réalisme détaillé au travail traditionnel audacieux.", es: "Cada pieza cuenta una historia. Explora estilos diversos — desde realismo intrincado hasta trabajo tradicional audaz." },
  "portfolio.seeMore": { en: "See More on Instagram", fr: "Voir Plus sur Instagram", es: "Ver Más en Instagram" },
  "portfolio.close": { en: "Close", fr: "Fermer", es: "Cerrar" },
  "portfolio.bookSimilar": { en: "Book a Similar Piece", fr: "Réserver une Pièce Similaire", es: "Reservar una Pieza Similar" },
  "portfolio.style": { en: "Style", fr: "Style", es: "Estilo" },
  "portfolio.duration": { en: "Duration", fr: "Durée", es: "Duración" },
  "portfolio.size": { en: "Size", fr: "Taille", es: "Tamaño" },

  // ─── SERVICES ───
  "services.tag": { en: "WHAT I OFFER", fr: "CE QUE J'OFFRE", es: "LO QUE OFREZCO" },
  "services.title": { en: "SERVICES & PRICING", fr: "SERVICES ET TARIFS", es: "SERVICIOS Y PRECIOS" },
  "services.desc": { en: "Every piece is custom-designed. Below are estimated price ranges and session times. Final cost is determined during your free consultation.", fr: "Chaque pièce est conçue sur mesure. Ci-dessous les gammes de prix estimées et les temps de session. Le coût final est déterminé lors de votre consultation gratuite.", es: "Cada pieza es diseñada a medida. Abajo están los rangos de precios estimados y tiempos de sesión. El costo final se determina durante tu consulta gratuita." },
  "services.estimatedPrice": { en: "Estimated Price", fr: "Prix Estimé", es: "Precio Estimado" },
  "services.estimatedTime": { en: "Estimated Time", fr: "Temps Estimé", es: "Tiempo Estimado" },
  "services.deposit": { en: "Deposit", fr: "Acompte", es: "Depósito" },
  "services.mostPopular": { en: "Most Popular", fr: "Le Plus Populaire", es: "Más Popular" },
  "services.bookThis": { en: "Book This Style", fr: "Réserver ce Style", es: "Reservar este Estilo" },
  "services.hourlyRate": { en: "HOURLY RATE", fr: "TAUX HORAIRE", es: "TARIFA POR HORA" },
  "services.hourlyRateTitle": { en: "BASE RATE", fr: "TARIF DE BASE", es: "TARIFA BASE" },
  "services.hourlyRateDesc": { en: "Hourly rate for all custom work. Minimum session 1 hour. Final price depends on complexity and size.", fr: "Taux horaire pour tous les travaux personnalisés. Session minimum 1 heure. Le prix final dépend de la complexité et de la taille.", es: "Tarifa por hora para todos los trabajos personalizados. Sesión mínima 1 hora. El precio final depende de la complejidad y el tamaño." },

  // Services data
  "svc.fineline.title": { en: "Fine Line & Minimalist", fr: "Trait Fin & Minimaliste", es: "Línea Fina y Minimalista" },
  "svc.fineline.desc": { en: "Delicate, thin-line designs — perfect for first-timers or those who prefer subtle, elegant work. Floral, geometric, small text, and single-needle pieces.", fr: "Des dessins délicats à traits fins — parfaits pour les débutants ou ceux qui préfèrent un travail subtil et élégant. Floraux, géométriques, petits textes et pièces à aiguille unique.", es: "Diseños delicados de línea fina — perfectos para principiantes o quienes prefieren un trabajo sutil y elegante. Florales, geométricos, textos pequeños y piezas de aguja única." },
  "svc.realism.title": { en: "Black & Grey Realism", fr: "Réalisme Noir & Gris", es: "Realismo Negro y Gris" },
  "svc.realism.desc": { en: "Hyper-detailed portraits, animals, and photo-realistic imagery rendered in shades of black and grey. My signature style.", fr: "Portraits hyper-détaillés, animaux et images photo-réalistes rendus en nuances de noir et gris. Mon style signature.", es: "Retratos hiperdetallados, animales e imágenes fotorrealistas en tonos de negro y gris. Mi estilo característico." },
  "svc.traditional.title": { en: "Traditional / Neo-Traditional", fr: "Traditionnel / Néo-Traditionnel", es: "Tradicional / Neo-Tradicional" },
  "svc.traditional.desc": { en: "Bold outlines, vibrant color palettes, and timeless designs. Classic American traditional with a modern twist.", fr: "Contours audacieux, palettes de couleurs vibrantes et designs intemporels. Traditionnel américain classique avec une touche moderne.", es: "Contornos audaces, paletas de colores vibrantes y diseños atemporales. Tradicional americano clásico con un toque moderno." },
  "svc.sleeve.title": { en: "Full Sleeve", fr: "Manche Complète", es: "Manga Completa" },
  "svc.sleeve.desc": { en: "A complete arm or leg sleeve — a multi-session masterpiece that tells your story from shoulder to wrist or ankle to thigh.", fr: "Une manche complète bras ou jambe — un chef-d'œuvre en plusieurs sessions qui raconte votre histoire de l'épaule au poignet ou de la cheville à la cuisse.", es: "Una manga completa de brazo o pierna — una obra maestra multi-sesión que cuenta tu historia del hombro a la muñeca o del tobillo al muslo." },
  "svc.coverup.title": { en: "Cover-Up / Rework", fr: "Recouvrement / Retouche", es: "Cubrir / Retrabajar" },
  "svc.coverup.desc": { en: "Transform an old or unwanted tattoo into something you'll love. Includes consultation and custom redesign.", fr: "Transformez un ancien tatouage indésirable en quelque chose que vous aimerez. Inclut consultation et redesign personnalisé.", es: "Transforma un tatuaje antiguo o no deseado en algo que amarás. Incluye consulta y rediseño personalizado." },
  "svc.flash.title": { en: "Custom Flash Designs", fr: "Designs Flash Personnalisés", es: "Diseños Flash Personalizados" },
  "svc.flash.desc": { en: "Pre-designed flash art ready to be inked. Limited availability — first come, first served. Each design is one-of-a-kind.", fr: "Art flash pré-conçu prêt à être tatoué. Disponibilité limitée — premier arrivé, premier servi. Chaque design est unique.", es: "Arte flash prediseñado listo para ser tatuado. Disponibilidad limitada — por orden de llegada. Cada diseño es único." },

  // ─── ARTIST ───
  "artist.tag": { en: "THE ARTIST", fr: "L'ARTISTE", es: "EL ARTISTA" },
  "artist.yearsExp": { en: "Years Experience", fr: "Ans d'Expérience", es: "Años de Experiencia" },
  "artist.workWithMe": { en: "Work With Me", fr: "Travailler avec Moi", es: "Trabajar Conmigo" },
  "artist.bio1": { en: "I believe every tattoo is a collaboration — a story that lives between the artist's vision and the client's soul. Specializing in hyper-realistic black & grey work, I've spent the last five years transforming skin into galleries across Quebec and beyond.", fr: "Je crois que chaque tatouage est une collaboration — une histoire qui vit entre la vision de l'artiste et l'âme du client. Spécialisé dans le travail hyperréaliste noir et gris, j'ai passé les cinq dernières années à transformer la peau en galeries à travers le Québec et au-delà.", es: "Creo que cada tatuaje es una colaboración — una historia que vive entre la visión del artista y el alma del cliente. Especializado en trabajo hiperrealista en blanco y negro, he pasado los últimos cinco años transformando piel en galerías a través de Quebec y más allá." },
  "artist.bio2": { en: "My studio is more than a workspace — it's a sanctuary where art meets precision. Every needle is single-use, every surface is meticulously sterilized, and every session begins with your comfort and safety as the top priority.", fr: "Mon studio est plus qu'un espace de travail — c'est un sanctuaire où l'art rencontre la précision. Chaque aiguille est à usage unique, chaque surface est méticuleusement stérilisée, et chaque session commence avec votre confort et sécurité comme priorité absolue.", es: "Mi estudio es más que un espacio de trabajo — es un santuario donde el arte se encuentra con la precisión. Cada aguja es de un solo uso, cada superficie es meticulosamente esterilizada, y cada sesión comienza con tu comodidad y seguridad como prioridad absoluta." },
  "artist.cert1": { en: "Health Canada Compliant", fr: "Conforme Santé Canada", es: "Cumple con Salud Canadá" },
  "artist.cert2": { en: "Bloodborne Pathogens Certified", fr: "Certifié Agents Pathogènes Transmis par le Sang", es: "Certificado en Patógenos Sanguíneos" },
  "artist.cert3": { en: "First Aid & CPR Trained", fr: "Formé en Premiers Secours et RCR", es: "Entrenado en Primeros Auxilios y RCP" },
  "artist.cert4": { en: "Autoclave Sterilization Protocol", fr: "Protocole de Stérilisation par Autoclave", es: "Protocolo de Esterilización por Autoclave" },

  // Process
  "artist.processTag": { en: "HOW IT WORKS", fr: "COMMENT ÇA MARCHE", es: "CÓMO FUNCIONA" },
  "artist.processTitle": { en: "THE PROCESS", fr: "LE PROCESSUS", es: "EL PROCESO" },
  "artist.step1Title": { en: "Consultation", fr: "Consultation", es: "Consulta" },
  "artist.step1Desc": { en: "Digital or in-person. We discuss your vision, placement, sizing, and style preferences. No commitment required.", fr: "Numérique ou en personne. Nous discutons de votre vision, du placement, de la taille et des préférences de style. Aucun engagement requis.", es: "Digital o en persona. Discutimos tu visión, ubicación, tamaño y preferencias de estilo. Sin compromiso requerido." },
  "artist.step2Title": { en: "Design & Approval", fr: "Design & Approbation", es: "Diseño y Aprobación" },
  "artist.step2Desc": { en: "I craft a custom design tailored to your body and story. Revisions until you're 100% thrilled with the concept.", fr: "Je crée un design personnalisé adapté à votre corps et votre histoire. Révisions jusqu'à ce que vous soyez 100% ravi du concept.", es: "Creo un diseño personalizado adaptado a tu cuerpo e historia. Revisiones hasta que estés 100% encantado con el concepto." },
  "artist.step3Title": { en: "The Session", fr: "La Session", es: "La Sesión" },
  "artist.step3Desc": { en: "Sterile environment, premium equipment, and an experience designed for your comfort. Your story becomes permanent art.", fr: "Environnement stérile, équipement premium et une expérience conçue pour votre confort. Votre histoire devient un art permanent.", es: "Entorno estéril, equipo premium y una experiencia diseñada para tu comodidad. Tu historia se convierte en arte permanente." },

  // Safety
  "artist.safetyTitle": { en: "YOUR SAFETY, OUR PRIORITY", fr: "VOTRE SÉCURITÉ, NOTRE PRIORITÉ", es: "TU SEGURIDAD, NUESTRA PRIORIDAD" },
  "artist.safetyDesc": { en: "Single-use needles • Hospital-grade sterilization • Vegan ink options", fr: "Aiguilles à usage unique • Stérilisation de qualité hospitalière • Options d'encre végane", es: "Agujas de un solo uso • Esterilización de grado hospitalario • Opciones de tinta vegana" },
  "artist.learnMore": { en: "Learn More", fr: "En Savoir Plus", es: "Saber Más" },

  // ─── BOOKING ───
  "booking.tag": { en: "GET INKED", fr: "FAITES-VOUS TATOUER", es: "TATÚATE" },
  "booking.title": { en: "BOOK YOUR SESSION", fr: "RÉSERVEZ VOTRE SESSION", es: "RESERVA TU SESIÓN" },
  "booking.desc": { en: "Your next tattoo, simplified. Fill in your details below, choose your session type, and secure your spot with a $75 deposit.", fr: "Votre prochain tatouage, simplifié. Remplissez vos informations ci-dessous, choisissez votre type de session et sécurisez votre place avec un acompte de 75 $.", es: "Tu próximo tatuaje, simplificado. Completa tus datos abajo, elige tu tipo de sesión y asegura tu lugar con un depósito de $75." },
  "booking.studioSession": { en: "Studio Session", fr: "Session au Studio", es: "Sesión en Estudio" },
  "booking.mobileSession": { en: "Mobile Session", fr: "Session Mobile", es: "Sesión Móvil" },
  "booking.yourDetails": { en: "Your Details", fr: "Vos Informations", es: "Tus Datos" },
  "booking.yourDetailsDesc": { en: "Fill in your information so we can get in touch about your session.", fr: "Remplissez vos informations pour que nous puissions vous contacter concernant votre session.", es: "Completa tu información para que podamos ponernos en contacto contigo sobre tu sesión." },
  "booking.fullName": { en: "Full Name", fr: "Nom Complet", es: "Nombre Completo" },
  "booking.fullNamePlaceholder": { en: "Enter your full name", fr: "Entrez votre nom complet", es: "Ingresa tu nombre completo" },
  "booking.mobile": { en: "Mobile Number", fr: "Numéro de Mobile", es: "Número de Móvil" },
  "booking.mobilePlaceholder": { en: "(555) 000-0000", fr: "(555) 000-0000", es: "(555) 000-0000" },
  "booking.email": { en: "Email Address", fr: "Adresse Email", es: "Correo Electrónico" },
  "booking.emailPlaceholder": { en: "you@example.com", fr: "vous@exemple.com", es: "tu@ejemplo.com" },
  "booking.dateTime": { en: "Preferred Date & Time", fr: "Date et Heure Préférées", es: "Fecha y Hora Preferidas" },
  "booking.dateTimeDesc": { en: "Select your preferred session date and time. We'll confirm availability.", fr: "Sélectionnez la date et l'heure de votre session. Nous confirmerons la disponibilité.", es: "Selecciona tu fecha y hora preferida. Confirmaremos la disponibilidad." },
  "booking.sessionDate": { en: "Session Date", fr: "Date de la Session", es: "Fecha de la Sesión" },
  "booking.preferredTime": { en: "Preferred Time", fr: "Heure Préférée", es: "Hora Preferida" },
  "booking.selectTime": { en: "Select a time slot", fr: "Sélectionnez un créneau", es: "Selecciona un horario" },
  "booking.studioLocation": { en: "Studio Location", fr: "Emplacement du Studio", es: "Ubicación del Estudio" },
  "booking.studioName": { en: "Marc Blackwell Tattoo Studio", fr: "Studio de Tatouage Marc Blackwell", es: "Estudio de Tatuajes Marc Blackwell" },
  "booking.studioAddress": { en: "Full address provided upon booking confirmation", fr: "Adresse complète fournie lors de la confirmation de réservation", es: "Dirección completa proporcionada al confirmar la reserva" },
  "booking.yourAddress": { en: "Your Address", fr: "Votre Adresse", es: "Tu Dirección" },
  "booking.addressPlaceholder": { en: "Full address for the mobile session", fr: "Adresse complète pour la session mobile", es: "Dirección completa para la sesión móvil" },
  "booking.mobileNote": { en: "Mobile service available in Laval & surrounding areas. $30 travel fee applies.", fr: "Service mobile disponible à Laval et environs. Des frais de déplacement de 30 $ s'appliquent.", es: "Servicio móvil disponible en Laval y alrededores. Se aplica tarifa de viaje de $30." },
  "booking.notes": { en: "Additional Notes", fr: "Notes Supplémentaires", es: "Notas Adicionales" },
  "booking.notesOptional": { en: "(optional)", fr: "(facultatif)", es: "(opcional)" },
  "booking.notesPlaceholder": { en: "Describe your tattoo idea, size, placement, reference links...", fr: "Décrivez votre idée de tatouage, taille, emplacement, liens de référence...", es: "Describe tu idea de tatuaje, tamaño, ubicación, enlaces de referencia..." },

  // Booking right panel
  "booking.lavalQuebec": { en: "Laval, Quebec", fr: "Laval, Québec", es: "Laval, Quebec" },
  "booking.comfortZone": { en: "Your Comfort Zone", fr: "Votre Zone de Confort", es: "Tu Zona de Confort" },
  "booking.studioFeatures": { en: [
    "Fully equipped professional studio in Laval",
    "Focused creative environment",
    "Climate-controlled workspace",
    "Access to full reference library",
    "Standard pricing — no hidden fees",
  ], fr: [
    "Studio professionnel entièrement équipé à Laval",
    "Environnement créatif concentré",
    "Espace de travail climatisé",
    "Accès à une bibliothèque de référence complète",
    "Tarification standard — sans frais cachés",
  ], es: [
    "Estudio profesional completamente equipado en Laval",
    "Entorno creativo enfocado",
    "Espacio de trabajo con control climático",
    "Acceso a biblioteca de referencia completa",
    "Precios estándar — sin cargos ocultos",
  ] },
  "booking.mobileFeatures": { en: [
    "I come to your location",
    "Full sanitary mobile setup included",
    "Comfort of your own environment",
    "Ideal for large pieces (multi-session)",
    "Available on select days — book early",
  ], fr: [
    "Je me déplace à votre emplacement",
    "Configuration mobile sanitaire complète incluse",
    "Confort de votre propre environnement",
    "Idéal pour les grandes pièces (multi-sessions)",
    "Disponible certains jours — réservez tôt",
  ], es: [
    "Voy a tu ubicación",
    "Configuración móvil sanitaria completa incluida",
    "Comodidad de tu propio entorno",
    "Ideal para piezas grandes (multi-sesión)",
    "Disponible en días seleccionados — reserva temprano",
  ] },
  "booking.rate": { en: "Rate", fr: "Tarif", es: "Tarifa" },
  "booking.travel": { en: "Travel", fr: "Déplacement", es: "Viaje" },
  "booking.depositSecure": { en: "Deposit to Secure", fr: "Acompte pour Sécuriser", es: "Depósito para Asegurar" },
  "booking.includes": { en: "Includes $75 deposit + $30 travel fee", fr: "Inclut un acompte de 75 $ + 30 $ de frais de déplacement", es: "Incluye depósito de $75 + $30 de tarifa de viaje" },
  "booking.depositNote": { en: "Applied toward your final session cost. Non-refundable for cancellations within 48 hours.", fr: "Appliqué au coût final de votre session. Non remboursable pour les annulations dans les 48 heures.", es: "Aplicado al costo final de tu sesión. No reembolsable para cancelaciones dentro de 48 horas." },
  "booking.preview": { en: "Booking Preview", fr: "Aperçu de la Réservation", es: "Vista Previa de la Reserva" },
  "booking.mobileAddress": { en: "Mobile — Your Address", fr: "Mobile — Votre Adresse", es: "Móvil — Tu Dirección" },
  "booking.payVia": { en: "Pay Deposit Via:", fr: "Payer l'Acompte Via :", es: "Pagar Depósito Vía:" },
  "booking.interac": { en: "Interac e-Transfer", fr: "Interac e-Transfer", es: "Interac e-Transferencia" },
  "booking.submit": { en: "Check Availability & Book", fr: "Vérifier la Disponibilité & Réserver", es: "Verificar Disponibilidad y Reservar" },
  "booking.submitting": { en: "Submitting...", fr: "Envoi en cours...", es: "Enviando..." },
  "booking.agree": { en: "By booking, you agree to the deposit policy. After submission, you'll receive payment instructions.", fr: "En réservant, vous acceptez la politique d'acompte. Après soumission, vous recevrez les instructions de paiement.", es: "Al reservar, aceptas la política de depósito. Después del envío, recibirás instrucciones de pago." },

  // Steps
  "booking.stepsTitle": { en: "What Happens Next", fr: "Ce Qui Se Passe Ensuite", es: "Qué Pasa Después" },
  "booking.step1": { en: "Submit Booking", fr: "Soumettre la Réservation", es: "Enviar Reserva" },
  "booking.step2": { en: "Pay $75 Deposit", fr: "Payer l'Acompte de 75 $", es: "Pagar Depósito de $75" },
  "booking.step3": { en: "Get Confirmed", fr: "Recevoir la Confirmation", es: "Recibir Confirmación" },

  // Success
  "booking.successTitle": { en: "BOOKING REQUEST SENT", fr: "DEMANDE DE RÉSERVATION ENVOYÉE", es: "SOLICITUD DE RESERVA ENVIADA" },
  "booking.successThank": { en: "Thank you, Your session request has been received. Please complete your deposit payment below to secure your spot.", fr: "Merci. Votre demande de session a été reçue. Veuillez compléter votre paiement d'acompte ci-dessous pour sécuriser votre place.", es: "Gracias. Tu solicitud de sesión ha sido recibida. Completa el pago de tu depósito abajo para asegurar tu lugar." },
  "booking.successName": { en: "Name", fr: "Nom", es: "Nombre" },
  "booking.successSession": { en: "Session", fr: "Session", es: "Sesión" },
  "booking.successDate": { en: "Date", fr: "Date", es: "Fecha" },
  "booking.successTime": { en: "Time", fr: "Heure", es: "Hora" },
  "booking.successAddress": { en: "Address", fr: "Adresse", es: "Dirección" },
  "booking.successDeposit": { en: "Deposit Required", fr: "Acompte Requis", es: "Depósito Requerido" },
  "booking.payDeposit": { en: "Pay Your $75 Deposit", fr: "Payez Votre Acompte de 75 $", es: "Paga Tu Depósito de $75" },
  "booking.sendTo": { en: "Send to the email below", fr: "Envoyez à l'email ci-dessous", es: "Envía al correo de abajo" },
  "booking.payPalSecure": { en: "Pay securely online", fr: "Payez en ligne en toute sécurité", es: "Paga en línea de forma segura" },
  "booking.kohoCard": { en: "Send via KoHo prepaid card", fr: "Envoyez via carte prépayée KoHo", es: "Envía mediante tarjeta prepaga KoHo" },
  "booking.sendWhatsApp": { en: "Send Details on WhatsApp", fr: "Envoyer les Détails sur WhatsApp", es: "Enviar Detalles por WhatsApp" },
  "booking.googleCal": { en: "Save to Google Calendar", fr: "Enregistrer sur Google Calendar", es: "Guardar en Google Calendar" },
  "booking.afterPay": { en: "After paying your deposit, send me a confirmation on WhatsApp along with your payment receipt.", fr: "Après avoir payé votre acompte, envoyez-moi une confirmation sur WhatsApp avec votre reçu de paiement.", es: "Después de pagar tu depósito, envíame una confirmación por WhatsApp junto con tu comprobante de pago." },
  "booking.bookAnother": { en: "Book Another Session", fr: "Réserver une Autre Session", es: "Reservar Otra Sesión" },

  // ─── TRUST / FAQ ───
  "trust.tag": { en: "WHY CHOOSE US", fr: "POURQUOI NOUS CHOISIR", es: "POR QUÉ ELEGIRNOS" },
  "trust.title": { en: "TRUST & SAFETY", fr: "CONFIANCE ET SÉCURITÉ", es: "CONFIANZA Y SEGURIDAD" },
  "trust.badge1": { en: "Sterile Needles", fr: "Aiguilles Stériles", es: "Agujas Estériles" },
  "trust.badge1desc": { en: "Single-use, medical grade", fr: "Usage unique, qualité médicale", es: "Un solo uso, grado médico" },
  "trust.badge2": { en: "Vegan Inks", fr: "Encres Véganes", es: "Tintas Veganas" },
  "trust.badge2desc": { en: "Optional — cruelty free", fr: "Facultatif — sans cruauté", es: "Opcional — libre de crueldad" },
  "trust.badge3": { en: "Allergy Policy", fr: "Politique d'Allergie", es: "Política de Alergias" },
  "trust.badge3desc": { en: "Patch test available", fr: "Test cutané disponible", es: "Prueba de parche disponible" },
  "trust.badge4": { en: "Interac e-Transfer", fr: "Interac e-Transfer", es: "Interac e-Transferencia" },
  "trust.badge4desc": { en: "Easy Canadian payments", fr: "Paiements canadiens faciles", es: "Pagos canadienses fáciles" },
  "trust.badge5": { en: "PayPal Accepted", fr: "PayPal Accepté", es: "PayPal Aceptado" },
  "trust.badge5desc": { en: "Secure online payments", fr: "Paiements en ligne sécurisés", es: "Pagos en línea seguros" },
  "trust.badge6": { en: "KoHo Payments", fr: "Paiements KoHo", es: "Pagos KoHo" },
  "trust.badge6desc": { en: "Modern prepaid option", fr: "Option prépayée moderne", es: "Opción prepaga moderna" },

  "faq.tag": { en: "COMMON QUESTIONS", fr: "QUESTIONS FRÉQUENTES", es: "PREGUNTAS FRECUENTES" },
  "faq.title": { en: "FAQ", fr: "FAQ", es: "Preguntas Frecuentes" },

  "faq.q1": { en: "Does it hurt?", fr: "Est-ce que ça fait mal ?", es: "¿Duele?" },
  "faq.a1": { en: "Everyone's pain tolerance is different. Most clients describe it as a persistent scratch or vibration. We take regular breaks, use premium numbing options, and ensure you're as comfortable as possible throughout the entire session.", fr: "La tolérance à la douleur est différente pour chacun. La plupart des clients le décrivent comme une égratignure persistante ou une vibration. Nous faisons des pauses régulières, utilisons des options anesthésiantes premium et nous assurons que vous soyez aussi confortable que possible tout au long de la session.", es: "La tolerancia al dolor es diferente para cada persona. La mayoría de los clientes lo describen como un rasguño persistente o vibración. Hacemos pausas regulares, usamos opciones anestésicas premium y nos aseguramos de que estés lo más cómodo posible durante toda la sesión." },

  "faq.q2": { en: "How should I prepare for my session?", fr: "Comment dois-je me préparer pour ma session ?", es: "¿Cómo debo prepararme para mi sesión?" },
  "faq.a2": { en: "Get a good night's sleep, eat a solid meal beforehand, stay hydrated, and avoid alcohol for 24 hours before your appointment. Wear clothing that provides easy access to the tattoo area.", fr: "Dormez bien, mangez un bon repas avant, restez hydraté et évitez l'alcool pendant 24 heures avant votre rendez-vous. Portez des vêtements qui donnent un accès facile à la zone du tatouage.", es: "Duerme bien, come una comida sólida antes, mantente hidratado y evita el alcohol por 24 horas antes de tu cita. Usa ropa que proporcione fácil acceso al área del tatuaje." },

  "faq.q3": { en: "Is the deposit refundable?", fr: "L'acompte est-il remboursable ?", es: "¿El depósito es reembolsable?" },
  "faq.a3": { en: "The $75 deposit secures your time slot and is applied toward your final session cost. It is non-refundable for cancellations made within 48 hours of your appointment. Cancellations with 48+ hours notice may be rescheduled without losing your deposit.", fr: "L'acompte de 75 $ sécurise votre créneau et est appliqué au coût final de votre session. Il n'est pas remboursable pour les annulations faites dans les 48 heures suivant votre rendez-vous. Les annulations avec un préavis de 48+ heures peuvent être reprogrammées sans perdre votre acompte.", es: "El depósito de $75 asegura tu horario y se aplica al costo final de tu sesión. No es reembolsable para cancelaciones hechas dentro de las 48 horas de tu cita. Cancelaciones con aviso de 48+ horas pueden reprogramarse sin perder tu depósito." },

  "faq.q4": { en: "What is the aftercare process?", fr: "Quel est le processus de soins après le tatouage ?", es: "¿Cuál es el proceso de cuidado posterior?" },
  "faq.a4": { en: "You'll receive a detailed aftercare sheet. In short: keep it clean, moisturized, and out of direct sunlight for the first 2-3 weeks. Avoid swimming and excessive sweating. I'm always available for aftercare questions.", fr: "Vous recevrez une feuille de soins détaillée. En bref : gardez-le propre, hydraté et à l'abri du soleil direct pendant les 2-3 premières semaines. Évitez la natation et la transpiration excessive. Je suis toujours disponible pour les questions de soins.", es: "Recibirás una hoja detallada de cuidados. En resumen: mantenlo limpio, hidratado y fuera de la luz solar directa durante las primeras 2-3 semanas. Evita nadar y el exceso de sudoración. Siempre estoy disponible para preguntas de cuidado." },

  "faq.q5": { en: "How is pricing determined?", fr: "Comment les prix sont-ils déterminés ?", es: "¿Cómo se determina el precio?" },
  "faq.a5": { en: "Base rate is $250/hour. Final cost depends on size, complexity, and placement. I provide a firm quote during the free consultation — no surprises.", fr: "Le tarif de base est de 250 $/heure. Le coût final dépend de la taille, de la complexité et du placement. Je fournis un devis ferme lors de la consultation gratuite — pas de surprises.", es: "La tarifa base es de $250/hora. El costo final depende del tamaño, complejidad y ubicación. Proporciono una cotización firme durante la consulta gratuita — sin sorpresas." },

  "faq.q6": { en: "Can I bring a reference image?", fr: "Puis-je apporter une image de référence ?", es: "¿Puedo traer una imagen de referencia?" },
  "faq.a6": { en: "Absolutely! Reference images are incredibly helpful. You can upload them during booking or send them via WhatsApp. The more references, the better — but don't worry if you only have a general idea. We'll work together to perfect your design.", fr: "Absolument ! Les images de référence sont incroyablement utiles. Vous pouvez les télécharger lors de la réservation ou les envoyer via WhatsApp. Plus il y a de références, mieux c'est — mais ne vous inquiétez pas si vous n'avez qu'une idée générale. Nous travaillerons ensemble pour perfectionner votre design.", es: "¡Absolutamente! Las imágenes de referencia son increíblemente útiles. Puedes subirlas durante la reserva o enviarlas por WhatsApp. Cuantas más referencias, mejor — pero no te preocupes si solo tienes una idea general. Trabajaremos juntos para perfeccionar tu diseño." },

  // ─── TESTIMONIALS ───
  "reviews.tag": { en: "WORDS THAT MATTER", fr: "MOTS QUI COMPTENT", es: "PALABRAS QUE IMPORTAN" },
  "reviews.title": { en: "CLIENT STORIES", fr: "HISTOIRES DE CLIENTS", es: "HISTORIAS DE CLIENTES" },
  "reviews.readMore": { en: "Read more on", fr: "Lire plus sur", es: "Leer más en" },

  // Testimonials data
  "test.1name": { en: "Sarah Mitchell", fr: "Sarah Mitchell", es: "Sarah Mitchell" },
  "test.1location": { en: "Laval, QC", fr: "Laval, QC", es: "Laval, QC" },
  "test.1quote": { en: "Marc is an absolute artist. My geometric mandala turned out better than I ever imagined. The studio is immaculate, the vibe is chill, and he made a 6-hour session feel like nothing. Can't recommend him enough.", fr: "Marc est un véritable artiste. Mon mandala géométrique est encore mieux que je ne l'imaginais. Le studio est immaculé, l'ambiance est détendue, et il a fait en sorte qu'une session de 6 heures semble être rien. Je ne peux pas assez le recommander.", es: "Marc es un artista absoluto. Mi mandala geométrico quedó mejor de lo que jamás imaginé. El estudio está impecable, el ambiente es relajado, e hizo que una sesión de 6 horas pareciera nada. No puedo recomendarlo lo suficiente." },
  "test.1tattoo": { en: "Sacred Geometry Back Piece", fr: "Dos Géométrie Sacrée", es: "Espalda Geometría Sagrada" },

  "test.2name": { en: "James Okafor", fr: "James Okafor", es: "James Okafor" },
  "test.2location": { en: "Montreal, QC", fr: "Montréal, QC", es: "Montreal, QC" },
  "test.2quote": { en: "I was nervous about getting my first tattoo, but Marc made the whole process incredibly comfortable. He walked me through the design, answered every question, and the realism piece on my forearm is jaw-dropping.", fr: "J'étais nerveux pour mon premier tatouage, mais Marc a rendu tout le processus incroyablement confortable. Il m'a guidé à travers le design, répondu à chaque question, et la pièce réaliste sur mon avant-bras est époustouflante.", es: "Estaba nervioso por mi primer tatuaje, pero Marc hizo que todo el proceso fuera increíblemente cómodo. Me guió a través del diseño, respondió cada pregunta, y la pieza realista en mi antebrazo es impresionante." },
  "test.2tattoo": { en: "Realistic Portrait Forearm", fr: "Avant-bras Portrait Réaliste", es: "Antebrazo Retrato Realista" },

  "test.3name": { en: "Luna Reyes", fr: "Luna Reyes", es: "Luna Reyes" },
  "test.3location": { en: "Laval, QC", fr: "Laval, QC", es: "Laval, QC" },
  "test.3quote": { en: "Had Marc do a mobile session at my place for a fine line botanical piece. He brought everything — full sterile setup, amazing playlist, and the most delicate, beautiful tattoo. Already booking my next one.", fr: "J'ai fait faire une session mobile chez moi par Marc pour une pièce botanique en trait fin. Il a tout apporté — configuration stérile complète, playlist incroyable, et le tatouage le plus délicat et beau. Je réserve déjà le prochain.", es: "Marc hizo una sesión móvil en mi casa para una pieza botánica de línea fina. Trajo todo — configuración estéril completa, playlist increíble, y el tatuaje más delicado y hermoso. Ya estoy reservando el próximo." },
  "test.3tattoo": { en: "Fine Line Botanical Wrist", fr: "Poignet Botanique Trait Fin", es: "Muñeca Botánica Línea Fina" },

  // ─── FOOTER ───
  "footer.tagline": { en: "Custom tattoo artistry in Laval, Quebec. Every piece tells a story.", fr: "Art du tatouage personnalisé à Laval, Québec. Chaque pièce raconte une histoire.", es: "Arte de tatuaje personalizado en Laval, Quebec. Cada pieza cuenta una historia." },
  "footer.quickLinks": { en: "Quick Links", fr: "Liens Rapides", es: "Enlaces Rápidos" },
  "footer.contact": { en: "Contact", fr: "Contact", es: "Contacto" },
  "footer.location": { en: "Location", fr: "Emplacement", es: "Ubicación" },
  "footer.phone": { en: "Phone", fr: "Téléphone", es: "Teléfono" },
  "footer.email": { en: "Email", fr: "Email", es: "Correo" },
  "footer.hours": { en: "Studio Hours", fr: "Heures du Studio", es: "Horario del Estudio" },
  "footer.monFri": { en: "Mon - Fri: 10am - 7pm", fr: "Lun - Ven: 10h - 19h", es: "Lun - Vie: 10am - 7pm" },
  "footer.sat": { en: "Saturday: 11am - 5pm", fr: "Samedi: 11h - 17h", es: "Sábado: 11am - 5pm" },
  "footer.sun": { en: "Sunday: By Appointment", fr: "Dimanche: Sur Rendez-vous", es: "Domingo: Con Cita Previa" },
  "footer.mobile": { en: "Mobile service available within 50km of Laval", fr: "Service mobile disponible dans un rayon de 50 km de Laval", es: "Servicio móvil disponible en un radio de 50 km de Laval" },
  "footer.rights": { en: "Marc Blackwell Tattoo. Proudly Canadian.", fr: "Tatouage Marc Blackwell. Fièrement Canadien.", es: "Tatuajes Marc Blackwell. Orgullosamente Canadiense." },

  // ─── WHATSAPP FLOAT ───
  "wa.bookWA": { en: "Book on WhatsApp", fr: "Réserver sur WhatsApp", es: "Reservar por WhatsApp" },
  "wa.calendar": { en: "Save to Google Calendar", fr: "Enregistrer sur Google Calendar", es: "Guardar en Google Calendar" },
  "wa.fillForm": { en: "Fill Booking Form", fr: "Remplir le Formulaire", es: "Llenar Formulario de Reserva" },
  "wa.etransfer": { en: "eTransfer to", fr: "eTransfer à", es: "eTransfer a" },
};

// Helper: get translation as string
export function useTranslation(locale: Locale) {
  return function tr(key: keyof typeof t): string {
    const val = t[key]?.[locale] ?? key;
    return Array.isArray(val) ? val.join("||") : val;
  };
}

// Helper: get translation as array (for feature lists)
export function useTranslationArray(locale: Locale) {
  return function trArr(key: keyof typeof t): string[] {
    const val = t[key]?.[locale] ?? key;
    if (Array.isArray(val)) return val;
    return typeof val === "string" ? val.split("||") : [];
  };
}
