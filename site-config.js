/**
 * HugPill (药宝宝 / 藥寶寶) 官网配置
 * 过审后只需填入 10 位纯数字 appStoreID（例如 "6739123456"），
 * 再运行 ./publish_gh_pages.sh，全站下载按钮与 iOS Safari 顶部原生下载横幅会自动生效并推送上线。
 */
window.HUGPILL_CONFIG = {
  // 苹果后台 App 信息里的 10 位数字 Apple ID（审核期间留空 "" 即可）
  appStoreID: "",

  // 可选自定义商店链接；留空但填了 appStoreID 时会自动拼出 https://apps.apple.com/app/id<appStoreID>
  appStoreURL: "",

  // 合规与客服信息（与 App 内 AppLanguage.swift 保持一致）
  supportEmail: "hugpill@icloud.com",
  privacyPolicyURL:
    "https://caring-aurora-5e0.notion.site/HugPill-Support-Privacy-Policy-41f32a75082b80f199d3d089c136f4ca",
  termsURL:
    "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/",
};
