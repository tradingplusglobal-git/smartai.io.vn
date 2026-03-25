/**
 * Product recommendation mapping for Quick Compass results
 * Edit via BRIDGE Content Editor → "Recommendations" tab
 */

export interface Recommendation {
  skillName: string;
  description: string;
  timeSaved: string;
  price: string;
  matchScore: number;
  variant: string;
  link: string;
}

export const SKILL_MAP: Record<string, Recommendation> = {
  content: {
    skillName: 'ContentBridge Creator',
    description: 'Hệ thống tạo nội dung toàn diện cho creator và marketer.',
    timeSaved: '8–12',
    price: '$19/tháng',
    matchScore: 95,
    variant: 'creator',
    link: '/',
  },
  creator: {
    skillName: 'ContentBridge Creator',
    description: 'Xây dựng thương hiệu cá nhân với AI — YouTube, podcast, khóa học.',
    timeSaved: '10–15',
    price: '$19/tháng',
    matchScore: 90,
    variant: 'creator',
    link: '/',
  },
  documents: {
    skillName: 'DocBridge',
    description: 'Xử lý tài liệu doanh nghiệp bằng AI — hợp đồng, báo cáo.',
    timeSaved: '6–10',
    price: 'Sắp ra mắt',
    matchScore: 85,
    variant: 'enterprise',
    link: '/',
  },
  automation: {
    skillName: 'ContentBridge Agency',
    description: 'Tự động hóa quy trình và pipeline nội dung cho agency.',
    timeSaved: '12–18',
    price: '$49/tháng',
    matchScore: 90,
    variant: 'agency',
    link: '/',
  },
  ecommerce: {
    skillName: 'ContentBridge Affiliate',
    description: 'AI content cho seller — listing, quảng cáo, mạng xã hội.',
    timeSaved: '8–12',
    price: '$19/tháng',
    matchScore: 88,
    variant: 'affiliate',
    link: '/',
  },
  education: {
    skillName: 'ContentBridge Creator',
    description: 'Tạo khóa học, giáo trình và tài liệu đào tạo bằng AI.',
    timeSaved: '10–14',
    price: '$19/tháng',
    matchScore: 88,
    variant: 'creator',
    link: '/',
  },
  business: {
    skillName: 'ContentBridge Business',
    description: 'AI cho quản lý đội nhóm, báo cáo và quy trình nội bộ.',
    timeSaved: '12–20',
    price: '$49/tháng',
    matchScore: 85,
    variant: 'business',
    link: '/',
  },
  development: {
    skillName: 'ContentBridge Business',
    description: 'AI hỗ trợ phát triển phần mềm, tài liệu kỹ thuật và DevOps.',
    timeSaved: '8–15',
    price: '$49/tháng',
    matchScore: 82,
    variant: 'business',
    link: '/',
  },
};

export const DEFAULT_REC: Recommendation = {
  skillName: 'ContentBridge',
  description: 'Hệ thống AI toàn diện cho doanh nghiệp Việt Nam.',
  timeSaved: '8–12',
  price: '$19/tháng',
  matchScore: 80,
  variant: 'creator',
  link: '/',
};
