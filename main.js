// js/script.js

// ----- TRANSLATIONS -----
const translations = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.education": "Education",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.estimating": "Estimating",
    "nav.contact": "Contact",
    "hero.title": "Hi, I'm Shakhawat Hossain",
    "hero.sub": "Civil Site Engineer",
    "hero.desc": "I am a Civil Site Engineer from Bangladesh with practical experience in construction, water supply infrastructure, quality assurance, BOQ, engineering documentation and site management.",
    "hero.btnExp": "View My Experience",
    "hero.btnCv": "Download CV",
    "hero.btnContact": "Contact Me",
    "about.title": "About Me",
    "about.p1": "I am a dedicated Civil Site Engineer with a Diploma in Civil Engineering and hands-on experience in construction supervision, water supply infrastructure, quality assurance, BOQ preparation, and engineering documentation. Proficient in AutoCAD, MS Office, and site management, I bring a practical, detail-oriented approach to every project.",
    "about.p2": "My work focuses on delivering quality results while ensuring compliance with technical specifications and safety standards. I am passionate about contributing to sustainable infrastructure development in Bangladesh and beyond.",
    "about.personal": "Personal Information",
    "about.fullName": "Full Name:",
    "about.fullNameVal": "Shakhawat Hossain",
    "about.nationality": "Nationality:",
    "about.nationalityVal": "Bangladeshi",
    "about.dob": "Date of Birth:",
    "about.dobVal": "04 January 2000",
    "about.pob": "Place of Birth:",
    "about.pobVal": "Feni, Bangladesh",
    "about.profession": "Profession:",
    "about.professionVal": "Civil Site Engineer",
    "about.field": "Field:",
    "about.fieldVal": "Civil Engineering",
    "education.title": "Education",
    "education.ssc": "SSC",
    "education.sscQual": "Secondary School Certificate (SSC)",
    "education.sscInst": "Feni Government Technical School and College",
    "education.diploma": "Diploma",
    "education.diplomaQual": "Diploma in Civil Engineering",
    "education.diplomaInst": "Institute of Computer Science & Technology",
    "education.diplomaComp": "Completion: December 2023",
    "experience.title": "Experience",
    "experience.jobTitle": "Civil Site Engineer",
    "experience.since": "Since",
    "experience.industry": "Industry",
    "experience.resp1": "Construction site supervision",
    "experience.resp2": "Quality assurance",
    "experience.resp3": "Quantity measurement",
    "experience.resp4": "BOQ preparation and checking",
    "experience.resp5": "Engineering documentation",
    "experience.resp6": "Construction monitoring",
    "experience.resp7": "Consultant coordination",
    "experience.resp8": "Water supply infrastructure",
    "experience.resp9": "Overhead Water Tank construction",
    "experience.resp10": "Pipeline connection works",
    "experience.resp11": "Site inspection",
    "experience.resp12": "Quality control",
    "experience.resp13": "Progress monitoring",
    "experience.resp14": "Maintenance coordination",
    "experience.project": "World Bank-funded / AIIB-funded rural water, sanitation and hygiene development project",
    "skills.title": "Skills",
    "skills.civil": "Civil Engineering",
    "skills.c1": "Construction Site Supervision",
    "skills.c2": "Quality Assurance",
    "skills.c3": "Quantity Measurement",
    "skills.c4": "BOQ",
    "skills.c5": "Construction Monitoring",
    "skills.c6": "Water Supply Infrastructure",
    "skills.c7": "Pipeline Works",
    "skills.c8": "Overhead Water Tank Works",
    "skills.tech": "Technical",
    "skills.t1": "AutoCAD",
    "skills.t2": "MS Office",
    "skills.t3": "Web Design",
    "skills.t4": "Programming",
    "skills.t5": "e-GP",
    "services.title": "My Services",
    "services.s1": "Civil Site Supervision",
    "services.s1d": "Construction site monitoring, work coordination and progress supervision.",
    "services.s2": "Quantity & BOQ Support",
    "services.s2d": "Quantity measurement, BOQ preparation, checking and construction documentation.",
    "services.s3": "Construction Quality Assurance",
    "services.s3d": "Construction quality monitoring and technical requirement checking.",
    "services.s4": "AutoCAD Drafting",
    "services.s4d": "Basic civil engineering drawings and technical drafting support.",
    "services.s5": "Engineering Documentation",
    "services.s5d": "Construction reports, measurements and technical documentation.",
    "services.s6": "Water Supply Infrastructure",
    "services.s6d": "Support related to water supply pipelines, overhead water tanks and civil construction.",
    "services.s7": "Web Design",
    "services.s7d": "Basic responsive website design.",
    "services.s8": "Technical Computer Support",
    "services.s8d": "MS Office, documentation, data handling and basic programming support.",
    "projects.title": "Projects",
    "estimating.title": "Construction Estimating",
    "estimating.area": "Area",
    "estimating.volume": "Volume",
    "estimating.steel": "Steel Weight",
    "estimating.calc": "Calculate",
    "estimating.steelNote": "Theoretical estimation. Follow approved structural drawings.",
    "estimating.boq": "BOQ Calculator",
    "estimating.addRow": "Add Row",
    "estimating.print": "Print Estimate",
    "estimating.item": "Item",
    "estimating.desc": "Description",
    "estimating.unit": "Unit",
    "estimating.qty": "Quantity",
    "estimating.rate": "Unit Rate (৳)",
    "estimating.amount": "Amount (৳)",
    "estimating.subtotal": "Subtotal",
    "estimating.total": "Estimated Total",
    "estimating.disclaimer": "This calculator provides a preliminary estimate based on user-provided quantities and manually configured rates. Actual costs may vary.",
    "contact.title": "Contact Me",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.inquiryType": "Inquiry Type",
    "contact.inq1": "Civil Engineering",
    "contact.inq2": "Construction Estimation",
    "contact.inq3": "BOQ / Quantity",
    "contact.inq4": "AutoCAD",
    "contact.inq5": "Water Supply Infrastructure",
    "contact.inq6": "Web Design",
    "contact.inq7": "General Inquiry",
    "contact.inq8": "Other",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.send": "Send Inquiry",
    "footer.tagline": "Civil Site Engineer",
    "footer.privacy": "Privacy",
    "footer.cookies": "Cookies"
  },
  bn: {
    "nav.home": "হোম",
    "nav.about": "আমার সম্পর্কে",
    "nav.education": "শিক্ষা",
    "nav.experience": "অভিজ্ঞতা",
    "nav.skills": "দক্ষতা",
    "nav.services": "সেবা",
    "nav.projects": "প্রকল্প",
    "nav.estimating": "আনুমানিক ব্যয়",
    "nav.contact": "যোগাযোগ",
    "hero.title": "হাই, আমি শাখাওয়াত হোসেন",
    "hero.sub": "সিভিল সাইট ইঞ্জিনিয়ার",
    "hero.desc": "আমি বাংলাদেশের একজন সিভিল সাইট ইঞ্জিনিয়ার, নির্মাণ, পানি সরবরাহ অবকাঠামো, গুণগত মান নিশ্চিতকরণ, বিওকিউ, প্রকৌশল ডকুমেন্টেশন এবং সাইট ব্যবস্থাপনায় বাস্তব অভিজ্ঞতা রয়েছে।",
    "hero.btnExp": "আমার অভিজ্ঞতা দেখুন",
    "hero.btnCv": "সিভি ডাউনলোড করুন",
    "hero.btnContact": "যোগাযোগ করুন",
    "about.title": "আমার সম্পর্কে",
    "about.p1": "আমি একজন নিবেদিত সিভিল সাইট ইঞ্জিনিয়ার, সিভিল ইঞ্জিনিয়ারিংয়ে ডিপ্লোমা এবং নির্মাণ তত্ত্বাবধান, পানি সরবরাহ অবকাঠামো, গুণগত মান নিশ্চিতকরণ, বিওকিউ প্রস্তুতি এবং প্রকৌশল ডকুমেন্টেশনের হ্যান্ডস-অন অভিজ্ঞতা রয়েছে। অটোক্যাড, এমএস অফিস এবং সাইট ব্যবস্থাপনায় দক্ষ, আমি প্রতিটি প্রকল্পে একটি ব্যবহারিক, বিশদ-ভিত্তিক পদ্ধতি নিয়ে আসি।",
    "about.p2": "আমার কাজ প্রযুক্তিগত বৈশিষ্ট্য এবং নিরাপত্তা মান মেনে চলার সাথে মানসম্পন্ন ফলাফল প্রদানের উপর দৃষ্টি নিবদ্ধ করে। আমি বাংলাদেশ এবং এর বাইরে টেকসই অবকাঠামো উন্নয়নে অবদান রাখতে আগ্রহী।",
    "about.personal": "ব্যক্তিগত তথ্য",
    "about.fullName": "পুরো নাম:",
    "about.fullNameVal": "শাখাওয়াত হোসেন",
    "about.nationality": "জাতীয়তা:",
    "about.nationalityVal": "বাংলাদেশি",
    "about.dob": "জন্ম তারিখ:",
    "about.dobVal": "০৪ জানুয়ারী ২০০০",
    "about.pob": "জন্মস্থান:",
    "about.pobVal": "ফেনী, বাংলাদেশ",
    "about.profession": "পেশা:",
    "about.professionVal": "সিভিল সাইট ইঞ্জিনিয়ার",
    "about.field": "ক্ষেত্র:",
    "about.fieldVal": "সিভিল ইঞ্জিনিয়ারিং",
    "education.title": "শিক্ষা",
    "education.ssc": "এসএসসি",
    "education.sscQual": "মাধ্যমিক স্কুল সার্টিফিকেট (এসএসসি)",
    "education.sscInst": "ফেনী সরকারি কারিগরি স্কুল ও কলেজ",
    "education.diploma": "ডিপ্লোমা",
    "education.diplomaQual": "সিভিল ইঞ্জিনিয়ারিংয়ে ডিপ্লোমা",
    "education.diplomaInst": "ইনস্টিটিউট অব কম্পিউটার সায়েন্স অ্যান্ড টেকনোলজি",
    "education.diplomaComp": "সমাপ্তি: ডিসেম্বর ২০২৩",
    "experience.title": "অভিজ্ঞতা",
    "experience.jobTitle": "সিভিল সাইট ইঞ্জিনিয়ার",
    "experience.since": "হতে",
    "experience.industry": "শিল্প",
    "experience.resp1": "নির্মাণ সাইট তত্ত্বাবধান",
    "experience.resp2": "গুণগত মান নিশ্চিতকরণ",
    "experience.resp3": "পরিমাণ পরিমাপ",
    "experience.resp4": "বিওকিউ প্রস্তুতি ও পরীক্ষা",
    "experience.resp5": "প্রকৌশল ডকুমেন্টেশন",
    "experience.resp6": "নির্মাণ পর্যবেক্ষণ",
    "experience.resp7": "পরামর্শক সমন্বয়",
    "experience.resp8": "পানি সরবরাহ অবকাঠামো",
    "experience.resp9": "ওভারহেড ওয়াটার ট্যাঙ্ক নির্মাণ",
    "experience.resp10": "পাইপলাইন সংযোগ কাজ",
    "experience.resp11": "সাইট পরিদর্শন",
    "experience.resp12": "গুণমান নিয়ন্ত্রণ",
    "experience.resp13": "অগ্রগতি পর্যবেক্ষণ",
    "experience.resp14": "রক্ষণাবেক্ষণ সমন্বয়",
    "experience.project": "ওয়ার্ল্ড ব্যাংক / এআইআইবি-অর্থায়িত গ্রামীণ পানি, স্যানিটেশন এবং স্বাস্থ্যবিধি উন্নয়ন প্রকল্প",
    "skills.title": "দক্ষতা",
    "skills.civil": "সিভিল ইঞ্জিনিয়ারিং",
    "skills.c1": "নির্মাণ সাইট তত্ত্বাবধান",
    "skills.c2": "গুণগত মান নিশ্চিতকরণ",
    "skills.c3": "পরিমাণ পরিমাপ",
    "skills.c4": "বিওকিউ",
    "skills.c5": "নির্মাণ পর্যবেক্ষণ",
    "skills.c6": "পানি সরবরাহ অবকাঠামো",
    "skills.c7": "পাইপলাইন কাজ",
    "skills.c8": "ওভারহেড ওয়াটার ট্যাঙ্ক কাজ",
    "skills.tech": "প্রযুক্তিগত",
    "skills.t1": "অটোক্যাড",
    "skills.t2": "এমএস অফিস",
    "skills.t3": "ওয়েব ডিজাইন",
    "skills.t4": "প্রোগ্রামিং",
    "skills.t5": "ই-জিপি",
    "services.title": "আমার সেবা",
    "services.s1": "সিভিল সাইট তত্ত্বাবধান",
    "services.s1d": "নির্মাণ সাইট মনিটরিং, কাজ সমন্বয় এবং অগ্রগতি তত্ত্বাবধান।",
    "services.s2": "পরিমাণ ও বিওকিউ সহায়তা",
    "services.s2d": "পরিমাণ পরিমাপ, বিওকিউ প্রস্তুতি, পরীক্ষা এবং নির্মাণ ডকুমেন্টেশন।",
    "services.s3": "নির্মাণ গুণগত মান নিশ্চিতকরণ",
    "services.s3d": "নির্মাণ গুণমান পর্যবেক্ষণ এবং প্রযুক্তিগত প্রয়োজনীয়তা পরীক্ষা।",
    "services.s4": "অটোক্যাড ড্রাফটিং",
    "services.s4d": "মৌলিক সিভিল ইঞ্জিনিয়ারিং অঙ্কন এবং প্রযুক্তিগত ড্রাফটিং সহায়তা।",
    "services.s5": "প্রকৌশল ডকুমেন্টেশন",
    "services.s5d": "নির্মাণ প্রতিবেদন, পরিমাপ এবং প্রযুক্তিগত ডকুমেন্টেশন।",
    "services.s6": "পানি সরবরাহ অবকাঠামো",
    "services.s6d": "পানি সরবরাহ পাইপলাইন, ওভারহেড ওয়াটার ট্যাঙ্ক এবং সিভিল নির্মাণ সম্পর্কিত সহায়তা।",
    "services.s7": "ওয়েব ডিজাইন",
    "services.s7d": "মৌলিক প্রতিক্রিয়াশীল ওয়েবসাইট ডিজাইন।",
    "services.s8": "প্রযুক্তিগত কম্পিউটার সহায়তা",
    "services.s8d": "এমএস অফিস, ডকুমেন্টেশন, ডেটা হ্যান্ডলিং এবং মৌলিক প্রোগ্রামিং সহায়তা।",
    "projects.title": "প্রকল্প",
    "estimating.title": "নির্মাণ আনুমানিক ব্যয়",
    "estimating.area": "ক্ষেত্রফল",
    "estimating.volume": "আয়তন",
    "estimating.steel": "ইস্পাতের ওজন",
    "estimating.calc": "গণনা করুন",
    "estimating.steelNote": "তাত্ত্বিক অনুমান। অনুমোদিত কাঠামোগত অঙ্কন অনুসরণ করুন।",
    "estimating.boq": "বিওকিউ ক্যালকুলেটর",
    "estimating.addRow": "সারি যোগ করুন",
    "estimating.print": "আনুমানিক প্রিন্ট করুন",
    "estimating.item": "আইটেম",
    "estimating.desc": "বিবরণ",
    "estimating.unit": "একক",
    "estimating.qty": "পরিমাণ",
    "estimating.rate": "ইউনিট হার (৳)",
    "estimating.amount": "পরিমাণ (৳)",
    "estimating.subtotal": "সাবটোটাল",
    "estimating.total": "আনুমানিক মোট",
    "estimating.disclaimer": "এই ক্যালকুলেটর ব্যবহারকারীর প্রদত্ত পরিমাণ এবং ম্যানুয়ালি কনফিগার করা হারের উপর ভিত্তি করে একটি প্রাথমিক অনুমান প্রদান করে। প্রকৃত খরচ পরিবর্তিত হতে পারে।",
    "contact.title": "যোগাযোগ করুন",
    "contact.name": "নাম",
    "contact.email": "ইমেইল",
    "contact.phone": "ফোন",
    "contact.inquiryType": "অনুসন্ধানের ধরন",
    "contact.inq1": "সিভিল ইঞ্জিনিয়ারিং",
    "contact.inq2": "নির্মাণ আনুমানিক ব্যয়",
    "contact.inq3": "বিওকিউ / পরিমাণ",
    "contact.inq4": "অটোক্যাড",
    "contact.inq5": "পানি সরবরাহ অবকাঠামো",
    "contact.inq6": "ওয়েব ডিজাইন",
    "contact.inq7": "সাধারণ অনুসন্ধান",
    "contact.inq8": "অন্যান্য",
    "contact.subject": "বিষয়",
    "contact.message": "বার্তা",
    "contact.send": "বার্তা পাঠান",
    "footer.tagline": "সিভিল সাইট ইঞ্জিনিয়ার",
    "footer.privacy": "গোপনীয়তা",
    "footer.cookies": "কুকিজ"
  },
  lt: {
    "nav.home": "Pagrindinis",
    "nav.about": "Apie mane",
    "nav.education": "Išsilavinimas",
    "nav.experience": "Patirtis",
    "nav.skills": "Įgūdžiai",
    "nav.services": "Paslaugos",
    "nav.projects": "Projektai",
    "nav.estimating": "Sąmata",
    "nav.contact": "Kontaktai",
    "hero.title": "Sveiki, aš Shakhawat Hossain",
    "hero.sub": "Statybos inžinierius",
    "hero.desc": "Esu statybos inžinierius iš Bangladešo, turintis praktinės patirties statybose, vandens tiekimo infrastruktūroje, kokybės užtikrinime, BOQ, inžinerinėje dokumentacijoje ir aikštelės valdyme.",
    "hero.btnExp": "Peržiūrėti patirtį",
    "hero.btnCv": "Atsisiųsti CV",
    "hero.btnContact": "Susisiekti",
    "about.title": "Apie mane",
    "about.p1": "Esu atsidavęs statybos inžinierius, turintis Civilinės inžinerijos diplomą ir praktinės patirties statybų priežiūroje, vandens tiekimo infrastruktūroje, kokybės užtikrinime, BOQ rengime ir inžinerinėje dokumentacijoje. Gerai išmanau AutoCAD, MS Office ir aikštelės valdymą, todėl į kiekvieną projektą žiūriu praktiškai ir detaliai.",
    "about.p2": "Mano darbas sutelktas į kokybiškų rezultatų užtikrinimą, laikantis techninių specifikacijų ir saugos standartų. Noriu prisidėti prie tvarios infrastruktūros plėtros Bangladeše ir už jo ribų.",
    "about.personal": "Asmeninė informacija",
    "about.fullName": "Pilnas vardas:",
    "about.fullNameVal": "Shakhawat Hossain",
    "about.nationality": "Pilietybė:",
    "about.nationalityVal": "Bangladešietis",
    "about.dob": "Gimimo data:",
    "about.dobVal": "2000 m. sausio 4 d.",
    "about.pob": "Gimimo vieta:",
    "about.pobVal": "Feni, Bangladešas",
    "about.profession": "Profesija:",
    "about.professionVal": "Statybos inžinierius",
    "about.field": "Sritis:",
    "about.fieldVal": "Civilinė inžinerija",
    "education.title": "Išsilavinimas",
    "education.ssc": "SSC",
    "education.sscQual": "Vidurinės mokyklos atestatas (SSC)",
    "education.sscInst": "Feni vyriausioji technikos mokykla ir kolegija",
    "education.diploma": "Diplomas",
    "education.diplomaQual": "Civilinės inžinerijos diplomas",
    "education.diplomaInst": "Informatikos ir technologijų institutas",
    "education.diplomaComp": "Baigta: 2023 m. gruodis",
    "experience.title": "Patirtis",
    "experience.jobTitle": "Statybos inžinierius",
    "experience.since": "Nuo",
    "experience.industry": "Pramonė",
    "experience.resp1": "Statybos aikštelės priežiūra",
    "experience.resp2": "Kokybės užtikrinimas",
    "experience.resp3": "Kiekių matavimas",
    "experience.resp4": "BOQ rengimas ir tikrinimas",
    "experience.resp5": "Inžinerinė dokumentacija",
    "experience.resp6": "Statybos stebėjimas",
    "experience.resp7": "Konsultantų koordinavimas",
    "experience.resp8": "Vandens tiekimo infrastruktūra",
    "experience.resp9": "Antžeminių vandens rezervuarų statyba",
    "experience.resp10": "Vamzdynų sujungimo darbai",
    "experience.resp11": "Aikštelės apžiūra",
    "experience.resp12": "Kokybės kontrolė",
    "experience.resp13": "Pažangos stebėjimas",
    "experience.resp14": "Priežiūros koordinavimas",
    "experience.project": "Pasaulio banko / AIIB finansuojamas kaimo vandens, sanitarijos ir higienos plėtros projektas",
    "skills.title": "Įgūdžiai",
    "skills.civil": "Civilinė inžinerija",
    "skills.c1": "Statybos aikštelės priežiūra",
    "skills.c2": "Kokybės užtikrinimas",
    "skills.c3": "Kiekių matavimas",
    "skills.c4": "BOQ",
    "skills.c5": "Statybos stebėjimas",
    "skills.c6": "Vandens tiekimo infrastruktūra",
    "skills.c7": "Vamzdynų darbai",
    "skills.c8": "Antžeminių rezervuarų darbai",
    "skills.tech": "Techniniai",
    "skills.t1": "AutoCAD",
    "skills.t2": "MS Office",
    "skills.t3": "Web dizainas",
    "skills.t4": "Programavimas",
    "skills.t5": "e-GP",
    "services.title": "Mano paslaugos",
    "services.s1": "Statybos priežiūra",
    "services.s1d": "Statybos aikštelės stebėjimas, darbų koordinavimas ir pažangos priežiūra.",
    "services.s2": "Kiekių ir BOQ pagalba",
    "services.s2d": "Kiekių matavimas, BOQ rengimas, tikrinimas ir statybos dokumentacija.",
    "services.s3": "Kokybės užtikrinimas statyboje",
    "services.s3d": "Statybos kokybės stebėjimas ir techninių reikalavimų tikrinimas.",
    "services.s4": "AutoCAD braižyba",
    "services.s4d": "Pagrindiniai civilinės inžinerijos brėžiniai ir techninė braižybos pagalba.",
    "services.s5": "Inžinerinė dokumentacija",
    "services.s5d": "Statybos ataskaitos, matavimai ir techninė dokumentacija.",
    "services.s6": "Vandens tiekimo infrastruktūra",
    "services.s6d": "Pagalba, susijusi su vandens tiekimo vamzdynais, antžeminiais rezervuarais ir statyba.",
    "services.s7": "Web dizainas",
    "services.s7d": "Pagrindinis responsive svetainių dizainas.",
    "services.s8": "Techninė kompiuterinė pagalba",
    "services.s8d": "MS Office, dokumentacija, duomenų tvarkymas ir pagrindinė programavimo pagalba.",
    "projects.title": "Projektai",
    "estimating.title": "Statybos sąmata",
    "estimating.area": "Plotas",
    "estimating.volume": "Tūris",
    "estimating.steel": "Plieno svoris",
    "estimating.calc": "Skaičiuoti",
    "estimating.steelNote": "Teorinis įvertinimas. Vadovaukitės patvirtintais brėžiniais.",
    "estimating.boq": "BOQ skaičiuoklė",
    "estimating.addRow": "Pridėti eilutę",
    "estimating.print": "Spausdinti sąmatą",
    "estimating.item": "Punktas",
    "estimating.desc": "Aprašymas",
    "estimating.unit": "Vienetas",
    "estimating.qty": "Kiekis",
    "estimating.rate": "Vieneto kaina (৳)",
    "estimating.amount": "Suma (৳)",
    "estimating.subtotal": "Tarpinė suma",
    "estimating.total": "Bendra suma",
    "estimating.disclaimer": "Ši skaičiuoklė pateikia preliminarų įvertinimą pagal vartotojo pateiktus kiekius ir rankiniu būdu nustatytus įkainius. Faktinės išlaidos gali skirtis.",
    "contact.title": "Susisiekite",
    "contact.name": "Vardas",
    "contact.email": "El. paštas",
    "contact.phone": "Telefonas",
    "contact.inquiryType": "Užklausos tipas",
    "contact.inq1": "Civilinė inžinerija",
    "contact.inq2": "Statybos sąmata",
    "contact.inq3": "BOQ / Kiekiai",
    "contact.inq4": "AutoCAD",
    "contact.inq5": "Vandens tiekimo infrastruktūra",
    "contact.inq6": "Web dizainas",
    "contact.inq7": "Bendra užklausa",
    "contact.inq8": "Kita",
    "contact.subject": "Tema",
    "contact.message": "Žinutė",
    "contact.send": "Siųsti",
    "footer.tagline": "Statybos inžinierius",
    "footer.privacy": "Privatumas",
    "footer.cookies": "Slapukai"
  }
};

// ----- STATE -----
let currentLang = localStorage.getItem('portfolioLang') || 'en';

// ----- DOM REFS -----
const navMenu = document.getElementById('navMenu');
const hamburger = document.getElementById('hamburger');
const langBtns = document.querySelectorAll('.lang-btn');
const projectsGrid = document.getElementById('projectsGrid');

// ----- PROJECT DATA (easy to update images) -----
const projectsData = [
  {
    title: "Rural Water Supply Infrastructure",
    image: "assets/images/project-1.webp",
    description: "Water supply network for rural communities.",
    role: "Civil Site Engineer",
    responsibilities: "Site supervision, quality assurance, BOQ"
  },
  {
    title: "Overhead Water Tank Construction",
    image: "assets/images/project-2.webp",
    description: "Construction of elevated water storage tanks.",
    role: "Civil Site Engineer",
    responsibilities: "Structural supervision, QA/QC, documentation"
  },
  {
    title: "Pipeline Connection Works",
    image: "assets/images/project-3.webp",
    description: "Water pipeline distribution network.",
    role: "Civil Site Engineer",
    responsibilities: "Pipeline inspection, measurement, coordination"
  },
  {
    title: "Civil Construction Site Supervision",
    image: "assets/images/project-4.webp",
    description: "General civil construction site management.",
    role: "Site Engineer",
    responsibilities: "Daily supervision, progress reporting, quality control"
  }
];

// ----- RENDER PROJECTS -----
function renderProjects() {
  projectsGrid.innerHTML = projectsData.map(p => `
    <div class="project-card">
      <img src="${p.image}" alt="${p.title}" loading="lazy" onerror="this.src='assets/images/placeholder.webp'">
      <div class="card-body">
        <h4>${p.title}</h4>
        <p><strong>Role:</strong> ${p.role}</p>
        <p>${p.description}</p>
        <p><strong>Responsibilities:</strong> ${p.responsibilities}</p>
      </div>
    </div>
  `).join('');
}

// ----- LANGUAGE SWITCHING -----
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('portfolioLang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });
  langBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.documentElement.lang = lang;
}

// ----- NAV -----
hamburger.addEventListener('click', () => {
  const open = navMenu.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', open);
});

// Close menu on link click (mobile)
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// Active section highlight
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) {
      current = section.getAttribute('id');
    }
  });
  document.querySelectorAll('.nav-menu a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
  });
});

// ----- ESTIMATING CALCULATORS -----
// Area
document.getElementById('calcArea')?.addEventListener('click', () => {
  const l = parseFloat(document.getElementById('areaLen').value) || 0;
  const w = parseFloat(document.getElementById('areaWid').value) || 0;
  const unit = document.getElementById('areaUnit').value;
  const area = l * w;
  document.getElementById('areaResult').textContent = `Area: ${area.toFixed(2)} ${unit}`;
});

// Volume
document.getElementById('calcVol')?.addEventListener('click', () => {
  const l = parseFloat(document.getElementById('volLen').value) || 0;
  const w = parseFloat(document.getElementById('volWid').value) || 0;
  const h = parseFloat(document.getElementById('volHei').value) || 0;
  const unit = document.getElementById('volUnit').value;
  const vol = l * w * h;
  document.getElementById('volResult').textContent = `Volume: ${vol.toFixed(2)} ${unit}`;
});

// Steel
document.getElementById('calcSteel')?.addEventListener('click', () => {
  const d = parseFloat(document.getElementById('steelDia').value) || 0;
  const len = parseFloat(document.getElementById('steelLen').value) || 0;
  const bars = parseInt(document.getElementById('steelBars').value) || 0;
  const weightPerM = (d * d) / 162;
  const totalLen = len * bars;
  const weight = weightPerM * totalLen;
  document.getElementById('steelResult').textContent = `Weight: ${weight.toFixed(2)} kg (Total length: ${totalLen.toFixed(2)} m)`;
});

// ----- BOQ TABLE -----
const boqBody = document.getElementById('boqBody');
let boqRowCount = 0;

function addBoqRow() {
  boqRowCount++;
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td><input type="text" value="Item ${boqRowCount}" class="boq-item"></td>
    <td><input type="text" value="Description" class="boq-desc"></td>
    <td><input type="text" value="m³" class="boq-unit" style="max-width:60px;"></td>
    <td><input type="number" value="1" step="any" class="boq-qty" style="max-width:70px;"></td>
    <td><input type="number" value="0" step="any" class="boq-rate" style="max-width:90px;"></td>
    <td><span class="boq-amount">0</span></td>
    <td><button class="btn small" style="background:#e74c3c;color:#fff;" onclick="this.closest('tr').remove(); updateBoqTotals();"><i class="fas fa-trash"></i></button></td>
  `;
  boqBody.appendChild(tr);
  // update on input
  tr.querySelectorAll('input').forEach(inp => {
    inp.addEventListener('input', updateBoqTotals);
  });
  updateBoqTotals();
}

function updateBoqTotals() {
  let subtotal = 0;
  document.querySelectorAll('#boqBody tr').forEach(tr => {
    const qty = parseFloat(tr.querySelector('.boq-qty')?.value) || 0;
    const rate = parseFloat(tr.querySelector('.boq-rate')?.value) || 0;
    const amount = qty * rate;
    const amountSpan = tr.querySelector('.boq-amount');
    if (amountSpan) amountSpan.textContent = amount.toFixed(2);
    subtotal += amount;
  });
  document.getElementById('boqSubtotal').textContent = subtotal.toFixed(2);
  document.getElementById('boqTotal').textContent = subtotal.toFixed(2);
}

document.getElementById('addBoqRow')?.addEventListener('click', addBoqRow);
// initial rows
addBoqRow();
addBoqRow();

// Print estimate
document.getElementById('printEstimate')?.addEventListener('click', () => {
  window.print();
});

// ----- CONTACT FORM (frontend only) -----
document.getElementById('contactForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const feedback = document.getElementById('formFeedback');
  feedback.textContent = 'Backend connection required to send this message.';
  feedback.style.color = '#2c7a7b';
  // prepare for fetch later
  const formData = new FormData(e.target);
  console.log('Form data ready for backend:', Object.fromEntries(formData));
});

// ----- INIT -----
renderProjects();
setLanguage(currentLang);

// Initial active lang highlight
langBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    setLanguage(btn.dataset.lang);
  });
});

// Navbar compact on scroll
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 50) {
    nav.style.padding = '0.2rem 0';
  } else {
    nav.style.padding = '';
  }
});