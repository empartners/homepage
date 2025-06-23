import { COMPANY_CONFIG } from '@/config/company'

interface StructuredDataProps {
  type?: 'organization' | 'website' | 'service' | 'faq' | 'breadcrumb'
  data?: any
}

export default function StructuredData({ type = 'organization', data }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://empartners.co.kr'
    
    switch (type) {
      case 'organization':
        return {
          '@context': 'https://schema.org',
          '@type': ['Organization', 'FinancialService', 'ProfessionalService'],
          name: COMPANY_CONFIG.name,
          alternateName: COMPANY_CONFIG.nameEn,
          description: COMPANY_CONFIG.seo.description,
          url: baseUrl,
          logo: {
            '@type': 'ImageObject',
            url: `${baseUrl}/images/logo.png`,
            width: 512,
            height: 512
          },
          image: `${baseUrl}/images/logo.png`,
          telephone: COMPANY_CONFIG.contact.phone,
          email: COMPANY_CONFIG.contact.email,
          foundingDate: '2024-07-01',
          numberOfEmployees: COMPANY_CONFIG.business.employees,
          slogan: '정책자금 신청부터 승인까지 원스톱 관리',
          contactPoint: [
            {
              '@type': 'ContactPoint',
              telephone: COMPANY_CONFIG.contact.phone,
              contactType: 'customer service',
              areaServed: 'KR',
              availableLanguage: ['Korean'],
              hoursAvailable: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '18:00'
              }
            }
          ],
          address: {
            '@type': 'PostalAddress',
            streetAddress: `${COMPANY_CONFIG.contact.address} ${COMPANY_CONFIG.contact.addressDetail}`,
            addressLocality: '부산시',
            addressRegion: '남구',
            postalCode: '48508',
            addressCountry: 'KR'
          },
          areaServed: {
            '@type': 'Country',
            name: '대한민국'
          },
          serviceArea: {
            '@type': 'Country',
            name: '대한민국'
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: '정책자금 컨설팅 서비스',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: '정책자금 신청 컨설팅',
                  description: '정책자금 신청부터 승인까지 전 과정 지원'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: '정부지원사업 컨설팅',
                  description: '정부지원사업 신청 및 관리 컨설팅'
                }
              }
            ]
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            reviewCount: '200',
            bestRating: '5'
          },
          sameAs: [
            'https://blog.naver.com/empartners'
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
      
      case 'faq':
        return {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: data?.faqs?.map((faq: any) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer
            }
          })) || []
        }
      
      case 'breadcrumb':
        return {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: data?.breadcrumbs?.map((item: any, index: number) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: `${baseUrl}${item.url}`
          })) || []
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