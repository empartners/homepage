import { COMPANY_CONFIG } from '@/config/company'

interface StructuredDataProps {
  type?: 'organization' | 'website' | 'service'
  data?: any
}

export default function StructuredData({ type = 'organization', data }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://empartners.co.kr'
    
    switch (type) {
      case 'organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: COMPANY_CONFIG.name,
          description: COMPANY_CONFIG.business.description,
          url: baseUrl,
          logo: `${baseUrl}/images/logo.png`,
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: COMPANY_CONFIG.contact.phone,
            contactType: '고객 상담',
            areaServed: 'KR',
            availableLanguage: 'Korean'
          },
          address: {
            '@type': 'PostalAddress',
            streetAddress: COMPANY_CONFIG.address.street,
            addressLocality: COMPANY_CONFIG.address.city,
            postalCode: COMPANY_CONFIG.address.postalCode,
            addressCountry: 'KR'
          },
          sameAs: [
            `https://blog.naver.com/${COMPANY_CONFIG.social?.blog || 'empareners'}`
          ]
        }
      
      case 'website':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: COMPANY_CONFIG.name,
          description: COMPANY_CONFIG.business.description,
          url: baseUrl,
          potentialAction: {
            '@type': 'SearchAction',
            target: `${baseUrl}/search?q={search_term_string}`,
            'query-input': 'required name=search_term_string'
          }
        }
      
      case 'service':
        return {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: '정책자금 컨설팅 서비스',
          description: '소상공인 정책자금, 중진공 자금 등 맞춤형 컨설팅 서비스',
          provider: {
            '@type': 'Organization',
            name: COMPANY_CONFIG.name
          },
          areaServed: {
            '@type': 'Country',
            name: '대한민국'
          },
          serviceType: '금융 컨설팅',
          ...data
        }
      
      default:
        return {}
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData())
      }}
    />
  )
} 