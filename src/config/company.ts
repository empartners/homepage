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
    email: "empartners77@gmail.com",
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
    title: "정책자금 전문 컨설팅",
    keywords: "정책자금, 컨설팅, 기업지원, 정부지원사업",
    domain: "empartners.co.kr"
  }
};

// 타입 정의
export type CompanyConfig = typeof COMPANY_CONFIG; 