/**
 * HugPill (药宝宝 / 藥寶寶) 官网配置
 * 已接入正式 App Store ID（6837860725），全站按钮与 iOS Safari 顶部原生下载横幅均直达官方商店页。
 */
window.HUGPILL_CONFIG = {
  // 苹果官方 10 位数字 Apple ID（通过 Apple iTunes Lookup API 实测核验）
  appStoreID: "6837860725",

  // 全球通用 App Store 商店链接（自动匹配访客所在国家/地区商店）
  appStoreURL: "https://apps.apple.com/app/id6837860725",

  // 合规与客服信息（与 App 内 AppLanguage.swift 保持一致）
  supportEmail: "hugpill@icloud.com",
  privacyPolicyURL:
    "https://caring-aurora-5e0.notion.site/HugPill-Support-Privacy-Policy-41f32a75082b80f199d3d089c136f4ca",
  termsURL:
    "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/",
};
