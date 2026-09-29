"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Language = "en" | "bm" | "zh";

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav & Brand
    tagline: "Powering innovation & collaboration",
    subBrand: "Innovation • Ecosystem • Orchestration",
    bookNow: "Book Now",
    joinNow: "Join Now",
    signIn: "Sign In",
    publicPortal: "← Public Portal",
    
    // Hero
    heroTitlePrefix: "Turn your ideas into reality with the power of",
    heroTitleAccent: "SUPER 5G and AI.",
    heroDesc: "IEO - Innovation Ecosystem and Orchestration connects physical facilities, structured co-creation lifecycles, and IP discovery into a single measurable operating system.",
    startJourney: "Start your journey",
    discoverFramework: "Discover IEO Framework",
    scrollToExplore: "Scroll to explore",

    // About Section
    aboutBadge: "About the Platform",
    aboutTitle: "A Strategic Foundation for Innovation",
    aboutDesc: "Accelerating 5G-Advanced and AI adoption for Malaysian and global enterprises.",
    tabWhat: "What is IEO",
    tabDo: "What We Do",
    tabFor: "Who IEO is For",
    whatTitle: "What is IEO Hub?",
    whatDesc1: "IEO - Innovation Ecosystem and Orchestration is a strategic initiative designed to accelerate 5G-Advanced (5G-A) and Artificial Intelligence (AI) adoption for Malaysian and regional enterprises.",
    whatDesc2: "It acts as a digital and physical bridge linking real-world infrastructure (MakerLabs, cleanrooms, immersive XR arenas) with commercial industry opportunities.",
    joinEip: "Join IEO",
    coreTenets: "Core Tenets",
    tenet1: "High-speed low-latency 5G-A edge connectivity",
    tenet2: "Physical testing labs for microelectronics & robotics",
    tenet3: "Stage-gate corporate incubation and pilot financing",
    doTitle: "What We Do",
    doDesc1: "IEO Hub serves as a neutral foundation that integrates physical tools, enterprise stakeholders, and funding resources, enabling friction-free collaboration and commercialization.",
    doDesc2: "We guide technological solutions through verification, live telemetry testing, and enterprise proof-of-concepts (PoC).",
    statAssets: "Pre-commercial Assets",
    statUtilization: "Hub Space Utilization",
    statPartners: "Ecosystem Partners",
    statPilots: "Live Industry Pilots",
    forTitle: "A Playing Ground for Visionaries",
    forDesc: "IEO Hub unites stakeholders across Malaysia’s digital and industrial ecosystem:",

    // Journey
    journeyBadge: "Structured Methodology",
    journeyTitle: "We Drive the Innovation Journey",
    journeyDesc: "A structured stage-gate approach that guides enterprises, agencies, and innovators from problem statements to refined, market-tested solutions.",
    stage1Title: "Frame & Ideate",
    stage1Desc: "Define commercial challenge statements with industry mentors, examine IP patents, and align architectural goals.",
    stage2Title: "Develop",
    stage2Desc: "Engineer rapid prototypes inside MakerLabs using industrial 5-axis CNCs, SLA 3D printers, and edge AI kits.",
    stage3Title: "Test",
    stage3Desc: "Validate low-latency wireless transmission, microfluidic sensing in Cleanrooms, and spatial audio in XR Studios.",
    stage4Title: "Demo & Scale",
    stage4Desc: "Showcase verified outcomes to enterprises, agencies, and investors in the Executive Alliance Arena for commercial contracts.",

    // Use cases
    useCasesBadge: "Live Demonstrations",
    useCasesTitle: "Real-World Use Case Development",
    useCasesDesc: "Built and validated ahead of the IEO Hub physical launch to demonstrate technological proficiency and business value.",

    // What we offer
    offerBadge: "Ecosystem Enablement",
    offerTitle: "What We Offer",
    offerDesc: "Access comprehensive technical, industry, and funding support at every phase of your innovation lifecycle.",
    offer1Title: "World-Class Facilities",
    offer1Desc: "ISO Class 6 Cleanrooms, rapid SLA 3D printing labs, spatial audio isolation chambers, and alliance pitch auditoriums.",
    offer2Title: "Industry Mentors",
    offer2Desc: "Direct advisory from telco network architects, enterprise CIOs, patent attorneys, and venture capital partners.",
    offer3Title: "Regulatory Sandbox",
    offer3Desc: "Safe testing zone conforming to MCMC, eIDAS 2.0, and national standards for rapid live compliance validation.",
    offer4Title: "Capital & Pilot Co-Creation",
    offer4Desc: "Bilateral corporate matching, POC sponsorships, and direct procurement channels into enterprise supply chains.",

    // Ecosystem
    ecosystemBadge: "Strategic Alliances",
    ecosystemTitle: "Our Ecosystem",
    ecosystemDesc: "IEO Hub collaborates with anchor technology partners, premier universities, ministries, and agencies to strengthen national innovation capabilities.",

    // Newsroom
    newsroomBadge: "Newsroom & Milestones",
    newsroomTitle: "Latest Events & Case Studies",
    viewAllPress: "View All Press Releases",

    // FAQ
    faqBadge: "Knowledge Base",
    faqTitle: "Frequently Asked Questions",
    faqDesc: "Everything you need to know about joining, booking, and collaborating in the IEO Hub.",

    // Pre-footer
    ctaTitle: "Develop, test and demonstrate future-ready solutions.",
    ctaDesc: "Join IEO - Innovation Ecosystem and Orchestration today to connect talent, technology assets, and enterprise partners through orchestrated innovation.",
    bookFacilities: "Book Hub Facilities",
  },
  bm: {
    // Nav & Brand
    tagline: "Memperkasa inovasi & kolaborasi",
    subBrand: "Inovasi • Ekosistem • Orkestrasi",
    bookNow: "Tempah Sekarang",
    joinNow: "Sertai Sekarang",
    signIn: "Log Masuk",
    publicPortal: "← Portal Awam",
    
    // Hero
    heroTitlePrefix: "Tukarkan idea anda kepada realiti dengan kuasa",
    heroTitleAccent: "SUPER 5G dan AI.",
    heroDesc: "IEO - Inovasi, Ekosistem dan Orkestrasi menghubungkan fasiliti fizikal, kitaran hayat penciptaan bersama berstruktur, dan penemuan IP ke dalam satu sistem operasi yang boleh diukur.",
    startJourney: "Mulakan langkah anda",
    discoverFramework: "Ketahui Rangka Kerja IEO",
    scrollToExplore: "Tatal untuk terokai",

    // About Section
    aboutBadge: "Mengenai Platform",
    aboutTitle: "Asas Strategik untuk Inovasi",
    aboutDesc: "Mempercepatkan penggunaan 5G-Lanjutan dan AI untuk perusahaan Malaysia dan serantau.",
    tabWhat: "Apakah IEO",
    tabDo: "Peranan Kami",
    tabFor: "Sasaran IEO",
    whatTitle: "Apakah IEO Hub?",
    whatDesc1: "IEO - Inovasi, Ekosistem dan Orkestrasi ialah inisiatif strategik yang direka untuk mempercepatkan penggunaan 5G-Lanjutan (5G-A) dan Kecerdasan Buatan (AI) bagi perusahaan di Malaysia dan serantau.",
    whatDesc2: "Ia bertindak sebagai jambatan digital dan fizikal yang menghubungkan infrastruktur dunia nyata (MakerLabs, bilik bersih, arena XR imersif) dengan peluang industri komersial.",
    joinEip: "Sertai IEO",
    coreTenets: "Teras Utama",
    tenet1: "Sambungan pinggir 5G-A berkecepatan tinggi dengan kependaman rendah",
    tenet2: "Makmal ujian fizikal untuk mikroelektronik & robotik",
    tenet3: "Inkubasi korporat peringkat pintu dan pembiayaan rintis",
    doTitle: "Peranan Kami",
    doDesc1: "IEO Hub berfungsi sebagai asas neutral yang menyepadukan alatan fizikal, pihak berkepentingan perusahaan, dan sumber pembiayaan, membolehkan kolaborasi tanpa geseran.",
    doDesc2: "Kami membimbing penyelesaian teknologi melalui pengesahan, ujian telemetri langsung, dan bukti konsep (PoC) perusahaan.",
    statAssets: "Aset Pra-Komersial",
    statUtilization: "Penggunaan Ruang Hub",
    statPartners: "Rakan Kongsi Ekosistem",
    statPilots: "Rintis Industri Langsung",
    forTitle: "Medan Peluang untuk Wawasan",
    forDesc: "IEO Hub menyatukan pelbagai pihak dalam ekosistem digital dan perindustrian Malaysia:",

    // Journey
    journeyBadge: "Metodologi Berstruktur",
    journeyTitle: "Kami Memacu Perjalanan Inovasi",
    journeyDesc: "Pendekatan berperingkat yang membimbing perusahaan, agensi, dan inovator dari pernyataan masalah kepada penyelesaian yang diuji pasaran.",
    stage1Title: "Rangka & Idea",
    stage1Desc: "Tentukan pernyataan cabaran komersial bersama mentor industri, teliti paten IP, dan selaraskan matlamat seni bina.",
    stage2Title: "Pembangunan",
    stage2Desc: "Bina prototaip pantas di dalam MakerLabs menggunakan CNC 5-paksi industri, pencetak 3D SLA, dan kit AI pinggir.",
    stage3Title: "Ujian",
    stage3Desc: "Sahkan penghantaran wayarles kependaman rendah, penderiaan mikrofluidik dalam Bilik Bersih, dan audio spatial dalam Studio XR.",
    stage4Title: "Demonstrasi & Skala",
    stage4Desc: "Pamerkan hasil yang disahkan kepada perusahaan, agensi, dan pelabur di Arena Perikatan Eksekutif untuk kontrak komersial.",

    // Use cases
    useCasesBadge: "Demonstrasi Langsung",
    useCasesTitle: "Pembangunan Kes Penggunaan Dunia Nyata",
    useCasesDesc: "Dibina dan disahkan sebelum pelancaran fizikal IEO Hub untuk membuktikan kecekapan teknologi dan nilai perniagaan.",

    // What we offer
    offerBadge: "Pemerkasaan Ekosistem",
    offerTitle: "Tawaran Kami",
    offerDesc: "Akses sokongan teknikal, industri, dan pembiayaan yang komprehensif pada setiap fasa kitaran hayat inovasi anda.",
    offer1Title: "Fasiliti Bertaraf Dunia",
    offer1Desc: "Bilik Bersih ISO Kelas 6, makmal pencetakan 3D SLA pantas, ruang pengasingan audio spatial, dan auditorium persembahan.",
    offer2Title: "Mentor Industri",
    offer2Desc: "Nasihat langsung daripada arkitek rangkaian telekomunikasi, CIO perusahaan, peguam paten, dan rakan kongsi modal teroka.",
    offer3Title: "Kotak Pasir Kawal Selia",
    offer3Desc: "Zon ujian selamat mematuhi piawaian MCMC, eIDAS 2.0, dan standard kebangsaan untuk pengesahan pematuhan pantas.",
    offer4Title: "Modal & Penciptaan Bersama",
    offer4Desc: "Pemadanan korporat dua hala, penajaan POC, dan saluran perolehan terus ke dalam rantaian bekalan perusahaan.",

    // Ecosystem
    ecosystemBadge: "Perikatan Strategik",
    ecosystemTitle: "Ekosistem Kami",
    ecosystemDesc: "IEO Hub bekerjasama dengan rakan teknologi utama, universiti terkemuka, kementerian, dan agensi bagi memperkukuh keupayaan inovasi negara.",

    // Newsroom
    newsroomBadge: "Bilik Berita & Pencapaian",
    newsroomTitle: "Acara Terkini & Kajian Kes",
    viewAllPress: "Lihat Semua Siaran Akhbar",

    // FAQ
    faqBadge: "Pusat Maklumat",
    faqTitle: "Soalan Lazim",
    faqDesc: "Segala maklumat yang anda perlukan mengenai pendaftaran, tempahan, dan kolaborasi dalam IEO Hub.",

    // Pre-footer
    ctaTitle: "Bina, uji dan demonstrasikan penyelesaian masa hadapan.",
    ctaDesc: "Sertai IEO - Inovasi, Ekosistem dan Orkestrasi hari ini untuk menghubungkan bakat, aset teknologi, dan rakan kongsi perusahaan melalui inovasi terorkestra.",
    bookFacilities: "Tempah Fasiliti Hub",
  },
  zh: {
    // Nav & Brand
    tagline: "驱动创新与跨界合作",
    subBrand: "创新 • 生态 • 编排管理",
    bookNow: "立即预约",
    joinNow: "立即加入",
    signIn: "登录系统",
    publicPortal: "← 公共门户",
    
    // Hero
    heroTitlePrefix: "依托领先力量将构想转化为现实",
    heroTitleAccent: "SUPER 5G 与 AI",
    heroDesc: "IEO - 创新、生态与协同编排 (Innovation Ecosystem and Orchestration) 将物理测试空间、结构化共创生命周期与专利资产发现融为一体，构建量化数字操作系统。",
    startJourney: "开启创新之旅",
    discoverFramework: "探索 IEO 架构",
    scrollToExplore: "向下滚动探索",

    // About Section
    aboutBadge: "关于平台",
    aboutTitle: "企业创新的战略基石",
    aboutDesc: "加速 5G 进阶版 (5G-A) 与人工智能技术在马来西亚及区域企业的规模化落地。",
    tabWhat: "什么是 IEO",
    tabDo: "核心业务",
    tabFor: "赋能对象",
    whatTitle: "什么是 IEO Hub？",
    whatDesc1: "IEO - 创新、生态与协同编排 (Innovation Ecosystem and Orchestration) 是一项前瞻性战略倡议，旨在推动 5G-Advanced 与人工智能 (AI) 赋能各行业伙伴与前沿先锋。",
    whatDesc2: "作为连接真实物理设施（创客实验室、洁净室、沉浸式 XR 空间）与商业采购机遇的关键桥梁。",
    joinEip: "加入 IEO",
    coreTenets: "核心原则",
    tenet1: "高速率、低延迟的 5G-A 边缘连接",
    tenet2: "微电子与工业机器人物理验证测试舱",
    tenet3: "阶梯式企业孵化与概念验证 (PoC) 专项基金",
    doTitle: "核心业务",
    doDesc1: "IEO Hub 打造中立基础设施，聚合物理设备、企业决策者与资本，打破跨组织协同壁垒。",
    doDesc2: "全程护航技术成果完成合规认证、实时边缘遥测与商业级 PoC 落地。",
    statAssets: "已收录预商用成果",
    statUtilization: "试验空间使用率",
    statPartners: "生态圈联盟伙伴",
    statPilots: "进行中企业试点",
    forTitle: "汇聚创新愿景家的舞台",
    forDesc: "IEO Hub 联结马来西亚及全球数字经济体系中的核心力量：",

    // Journey
    journeyBadge: "严谨方法论",
    journeyTitle: "全流程护航创新跃升",
    journeyDesc: "通过标准化的阶段门禁管理，协助企业、机构与创新者从痛点定义平稳过渡至经受市场验证的成熟方案。",
    stage1Title: "需求定义与构思",
    stage1Desc: "与行业导师共同定义商业痛点，检索专利壁垒并确立技术演进路线。",
    stage2Title: "敏捷工程开发",
    stage2Desc: "在创客实验室利用 5 轴工业数控、SLA 3D 打印与边缘计算套件快速试制原型。",
    stage3Title: "严苛实测验证",
    stage3Desc: "在洁净室与 XR 影棚完成低延迟通信、微流控感测与空间音频实测验证。",
    stage4Title: "演示与规模落地",
    stage4Desc: "在行政联盟演示厅向全球企业高管与机构投资人展示可商用成果并签订采购合同。",

    // Use cases
    useCasesBadge: "实战案例演示",
    useCasesTitle: "前沿真实场景研发验证",
    useCasesDesc: "在 IEO Hub 物理空间全面落成前完成高强度预演，充分验证前瞻技术深度与商业应用潜力。",

    // What we offer
    offerBadge: "生态赋能支持",
    offerTitle: "我们提供的核心赋能",
    offerDesc: "在全生命周期的每一个关键跃迁点，提供全方位工程、合规与产业资源支持。",
    offer1Title: "世界级前沿设施",
    offer1Desc: "ISO 6 级洁净室、工业级 SLA 光固化打印中心、全消音空间音频舱与路演演示厅。",
    offer2Title: "全球领军产业导师",
    offer2Desc: "来自电信架构师、财富 500 强 CIO、国际知识产权律师与头部 VC 的常驻辅导。",
    offer3Title: "合规与政策沙盒",
    offer3Desc: "符合 MCMC 与 eIDAS 2.0 规范的真实测试沙盒，助力快速获取国家级合规许可。",
    offer4Title: "试点孵化与商业资本",
    offer4Desc: "企业一对一定制对接、PoC 专项赞助及直通大型跨国企业供应链的商业采购通道。",

    // Ecosystem
    ecosystemBadge: "战略战略同盟",
    ecosystemTitle: "协同生态联盟",
    ecosystemDesc: "IEO Hub 与核心通信巨头、顶尖理工院校、国家部委及投资机构紧密联结，筑牢创新底座。",

    // Newsroom
    newsroomBadge: "动态与里程碑",
    newsroomTitle: "最新动态与标杆案例",
    viewAllPress: "浏览全部新闻动态",

    // FAQ
    faqBadge: "知识库",
    faqTitle: "常见问题解答",
    faqDesc: "关于平台入驻、设备预约与项目协同所需了解的一切核心指引。",

    // Pre-footer
    ctaTitle: "研发、测试并向世界展示面向未来的前沿方案",
    ctaDesc: "立即加入 IEO - 创新、生态与协同编排 (Innovation Ecosystem and Orchestration)，通过精准的协同编排，无缝联结顶尖人才、技术专利与企业采购需求。",
    bookFacilities: "预约测试设施",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem("ieo_lang") as Language | null;
      if (saved && (saved === "en" || saved === "bm" || saved === "zh")) {
        setLanguageState(saved);
      }
    } catch {
      // Ignore localStorage access errors
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("ieo_lang", lang);
    } catch {
      // Ignore
    }
  };

  const t = (key: string): string => {
    const langDict = translations[language] || translations.en;
    return langDict[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
