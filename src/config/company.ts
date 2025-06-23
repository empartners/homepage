// 회사 정보 설정
export const COMPANY_CONFIG = {
  // 기본 회사 정보
  name: "EM파트너스",
  nameEn: "EM Partners",
  logoText: "EM",
  fullName: "EM파트너스 주식회사",
  
  // 비즈니스 정보
  business: {
    type: "정책자금 전문 컨설팅",
    description: "정책자금 신청부터 승인까지 원스톱 관리. 1:1 맞춤 컨설팅으로 높은 승인률을 자랑하는",
    experience: "12년간",
    approvalRate: "89%",
    heroApprovalRate: "95%",
    establishedYear: "2024년 7월",
    employees: "2명"
  },
  
  // 연락처 정보
  contact: {
    phone: "1688-7510",
    email: "emmainc@empartners.co.kr",
    address: "부산시 남구 수영로 312",
    addressDetail: "센츄리시티 1515호",
    businessNumber: "846-60-00749",
    ceoName: "오태우",
    salesReportNumber: "2024-서울강남-1234"
  },
  
  // 성과 지표
  achievements: {
    totalConsultations: "1,000+",
    approvalRate: "95%",
    totalFunding: "500억+",
    experience: "1년",
    currentApprovals: "95%",
    avgProcessingDays: "30일"
  },
  
  // SEO 정보
  seo: {
    title: "정책자금 전문 컨설팅 | 95% 승인률 보장",
    keywords: "정책자금, 정책자금 컨설팅, 정부지원사업, 기업지원, 정책자금 신청, 중소기업 지원, 창업지원, 정책자금 승인률, 사업자금, 정부보조금, 기업대출, 정책자금 전문가, 정책자금 대행, 정책자금 서류, 정책자금 조건",
    domain: "empartners.co.kr",
    description: "12년 경력의 정책자금 전문가가 1:1 맞춤 컨설팅으로 95% 승인률을 보장합니다. 신청부터 승인까지 원스톱 서비스로 빠르고 확실하게 정책자금을 확보하세요.",
    ogDescription: "정책자금 신청이 어려우신가요? EM파트너스의 12년 노하우로 95% 승인률을 경험하세요. 무료 상담부터 승인까지 전 과정을 책임집니다."
  }
};

// 타입 정의
export type CompanyConfig = typeof COMPANY_CONFIG; 