/**
 * SmartAI Homepage Content — edit via BRIDGE Content Editor
 * Run: node tools/content-editor/server.cjs (from BRIDGE root)
 */

export const vi = {
  // Hero
  badge: '⚡ Nền Tảng AI Cho Doanh Nghiệp',
  title: 'Khiến AI',
  titleAccent: 'Làm Việc Cho Bạn',
  subtitle: 'Từ công cụ đánh giá miễn phí đến giải pháp AI cao cấp — BRIDGE giúp doanh nghiệp tận dụng AI đúng cách, đúng lúc, đúng ngân sách.',
  ctaPrimary: '🧭 Khám Phá Compass Miễn Phí',
  ctaSecondary: 'Tìm Hiểu Thêm →',

  // Stats
  stat1Value: '8+',
  stat1Label: 'Công Cụ Miễn Phí',
  stat2Value: '25+',
  stat2Label: 'AI Skills',
  stat3Value: '10–15h',
  stat3Label: 'Tiết Kiệm / Tuần',

  // Compass section
  compassTitle: 'Công Cụ Compass Miễn Phí',
  compassSubtitle: 'Bộ công cụ đánh giá AI giúp bạn hiểu vị trí hiện tại, tiềm năng tiết kiệm, và sản phẩm phù hợp nhất.',
  compassLinkAll: 'Xem Tất Cả Công Cụ →',

  // Products section
  productsTitle: 'Sản Phẩm BRIDGE',
  productsSubtitle: 'Mỗi sản phẩm được thiết kế cho một nhu cầu cụ thể — từ tạo nội dung đến xử lý tài liệu.',

  // Why BRIDGE section
  whyTitle: 'Tại Sao Chọn BRIDGE?',

  // CTA section
  ctaBoxTitle: 'Bắt Đầu Từ Đâu?',
  ctaBoxSubtitle: 'Dùng Compass miễn phí để khám phá AI phù hợp với bạn — chỉ 60 giây.',
  ctaBoxBtn: '🧭 Bắt Đầu Ngay',

  // Footer
  footerCopy: '© 2026 BRIDGE Methods',
  footerPrivacy: 'Dữ liệu của bạn chỉ được dùng để chuẩn bị đề xuất BRIDGE. Chúng tôi không chia sẻ với bên thứ ba.',
};

export const en = {
  // Hero
  badge: '⚡ The AI Platform for Business',
  title: 'Make AI',
  titleAccent: 'Work For You',
  subtitle: 'From free assessment tools to premium AI solutions — BRIDGE helps businesses leverage AI the right way, at the right time, within budget.',
  ctaPrimary: '🧭 Explore Compass Free',
  ctaSecondary: 'Learn More →',

  // Stats
  stat1Value: '8+',
  stat1Label: 'Free Tools',
  stat2Value: '25+',
  stat2Label: 'AI Skills',
  stat3Value: '10–15h',
  stat3Label: 'Saved / Week',

  // Compass section
  compassTitle: 'Free Compass Tools',
  compassSubtitle: 'Our AI assessment tools help you understand where you are, your savings potential, and the right product for you.',
  compassLinkAll: 'View All Tools →',

  // Products section
  productsTitle: 'BRIDGE Products',
  productsSubtitle: 'Each product designed for a specific need — from content creation to document processing.',

  // Why BRIDGE section
  whyTitle: 'Why Choose BRIDGE?',

  // CTA section
  ctaBoxTitle: 'Where to Start?',
  ctaBoxSubtitle: 'Use the free Compass to discover the right AI for you — in just 60 seconds.',
  ctaBoxBtn: '🧭 Get Started Now',

  // Footer
  footerCopy: '© 2026 BRIDGE Methods',
  footerPrivacy: 'Your data is only used to prepare BRIDGE recommendations. We do not share with third parties.',
};

export const tools = [
  { href: '/compass/quick/',      icon: '🧭', name: 'Compass Nhanh',     desc: '60 giây — tìm AI phù hợp' },
  { href: '/compass/roi/',        icon: '📈', name: 'Tính ROI',           desc: 'Xem tiết kiệm bao nhiêu' },
  { href: '/compass/readiness/',  icon: '🎯', name: 'Đánh Giá Sẵn Sàng', desc: 'Đo mức sẵn sàng AI' },
  { href: '/compass/navigation/', icon: '🗺️', name: 'Bản Đồ AI',          desc: 'Xem lộ trình của bạn' },
  { href: '/compass/matcher/',    icon: '🔍', name: 'Tìm Tool AI',        desc: 'Match tool với nhu cầu' },
  { href: '/compass/calculator/', icon: '🧮', name: 'Máy Tính Chi Phí',   desc: 'Tính ngân sách AI' },
  { href: '/compass/automator/',  icon: '⚡', name: 'Tự Động Hóa',        desc: 'Tìm quy trình cần tự động' },
  { href: '/compass/report/',     icon: '📊', name: 'Báo Cáo AI',         desc: 'Tổng hợp kết quả của bạn' },
];

export const products = [
  {
    icon: '✍️',
    name: 'ContentBridge',
    desc: 'Bộ kỹ năng AI tạo nội dung. 25 biến thể cho Creator, Affiliate, Email, Agency, Business.',
    price: 'Từ $19/tháng',
    status: 'Đã Ra Mắt',
    live: true,
  },
  {
    icon: '🎬',
    name: 'CreatorStudio',
    desc: 'Pipeline sản xuất video AI. Kịch bản, thumbnail, SEO, phân phối đa kênh.',
    price: 'Sắp ra mắt',
    status: 'Đang Phát Triển',
    live: false,
  },
  {
    icon: '📄',
    name: 'DocBridge',
    desc: 'Xử lý tài liệu doanh nghiệp bằng AI. Hợp đồng, báo cáo, đề xuất.',
    price: 'Sắp ra mắt',
    status: 'Đang Phát Triển',
    live: false,
  },
];

export const whyItems = [
  { icon: '🏗️', title: 'Cấu Trúc, Không Phải Prompt',  desc: 'Hệ thống AI bền vững được xây từ kiến trúc, không phải từ prompt dài.' },
  { icon: '🎯', title: 'Đo Lường Trước Khi Mua',       desc: 'Compass miễn phí giúp bạn hiểu rõ nhu cầu trước khi đầu tư.' },
  { icon: '💰', title: 'Kiểm Soát Chi Phí',             desc: 'Thiết kế cho ngân sách $100–400/tháng. Không phí ẩn.' },
  { icon: '🔒', title: 'Dữ Liệu Của Bạn',              desc: 'Dùng API key của bạn. Dữ liệu không qua server trung gian.' },
];
