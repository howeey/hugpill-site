/**
 * HugPill (药宝宝 / 藥寶寶) 5 语种文案字典
 * 严格对应 App 真实功能与截图语言目录：en / zh-Hans / zh-Hant / ja / ko
 */
window.HUGPILL_I18N = {
  en: {
    htmlLang: "en",
    screenFolder: "en-US",
    brandName: "HugPill",
    pageTitle: "HugPill — Cute Pill, Vitamin & Eye Drops Reminder for iPhone",
    metaDescription:
      "A gentle, ADHD-friendly pill, vitamin & eye drop reminder built by a dad of two. Smart stepped nudges, 2x2 family Home Screen widgets, zero guilt, and 100% private iCloud sync.",
    nav: {
      features: "Features",
      screens: "Screenshots",
      story: "Dad's Story",
      pricing: "Pricing",
    },
    hero: {
      eyebrow: "iPhone · iOS 18+ · Zero Ads & Zero Sign-Up",
      title: "A gentle pill buddy that nudges until you take it—never scolds you.",
      subtitle:
        "Daily meds, kids' Vitamin D, and eye drops—quietly cared for by a smiling axolotl. Smart follow-ups, 2×2 family widgets, and zero external servers.",
      ctaReview: "App Store Review in Progress",
      ctaLive: "Download on the App Store",
      ctaStory: "Read why I built this",
      trust1: "No account required",
      trust2: "Your iCloud only",
      trust3: "ADHD-friendly nudges",
    },
    screenLabels: [
      {
        key: "01_home",
        tab: "Today",
        title: "Cozy Daily Check-In",
        desc: "Your smiling axolotl greets you with a warm mug. Tap once to log meds or eye drops and watch your buddy sip along.",
      },
      {
        key: "02_family",
        tab: "Family & Drops",
        title: "Family Badges & 28-Day Eye Drops",
        desc: "Color-coded badges (Me, Kid 1, Kid 2, Partner) keep everyone's Vitamin D distinct, plus a built-in 28-day freshness countdown for opened eye drops.",
      },
      {
        key: "03_widgets",
        tab: "Widgets",
        title: "Check In Without Opening the App",
        desc: "Includes a 2×2 Family Grid, auto-shifting companion widgets, Large 1–5 row layouts, and Lock Screen progress rings.",
      },
      {
        key: "04_cabin",
        tab: "Pet Cabin",
        title: "Zero-Guilt 5-Stage Growth",
        desc: "Missed a dose? No red warnings or lost streaks. Earn cozy water drops every time you check in to unlock tiny hats, mugs, and cabin decor.",
      },
      {
        key: "05_footprints_privacy",
        tab: "Privacy & History",
        title: "Soothing Calendar & Private iCloud",
        desc: "Review monthly paw-print stamps and export long-form summaries. Everything stays on your iPhone and your own encrypted Apple iCloud.",
      },
    ],
    features: {
      kicker: "What makes HugPill different",
      title: "Built for real mornings when you swipe away alarms on autopilot",
      desc: "Cold alarm clocks stop ringing the moment you dismiss them. HugPill stays quietly by your side until you actually tap Done.",
      items: [
        {
          badgeClass: "badge-amber",
          badge: "ADHD-Friendly",
          title: "Smart Stepped Nudges (30m → 1h)",
          body: "Miss the first chime? HugPill asks gently again 30 minutes later, then checks in every hour until bedtime (default 23:59, adjustable). Tap Taken on your Lock Screen or widget and the rest vanish immediately.",
        },
        {
          badgeClass: "badge-sage",
          badge: "Family & Schedules",
          title: "2×2 Family Grid & 4 Schedule Modes",
          body: "Tag cards for Me, Kid 1, Kid 2, Partner, Mom, or Dad. Supports daily, specific weekdays, every-X-days, and X-days-on / Y-days-off cycles—with rest days tucked away cleanly.",
        },
        {
          badgeClass: "badge-peach",
          badge: "Eye Drops Mode",
          title: "“Apply Now” & 28-Day Open Timer",
          body: "Switch any card to Drops mode for bottle icons, “Applied” buttons on Lock Screen, and an automatic 28-day post-opening countdown so you never lose track of when a bottle was opened.",
        },
        {
          badgeClass: "badge-apricot",
          badge: "100% Private",
          title: "Zero Guilt, Zero Servers, Zero Tracking",
          body: "No account creation, no analytics SDKs, no camera permissions. Your routines live locally and sync safely via your personal Apple iCloud, with one-tap local JSON backup.",
        },
      ],
      demoTitle: "See how one check-in clears the queue",
      demoBtnTaken: "Simulate “Taken” Tap",
      demoBtnReset: "Reset Demo",
      demoSteps: [
        { time: "08:30", pending: "First chime (Music Box)", cleared: "08:30 · Chime rang" },
        { time: "09:00", pending: "+30m gentle nudge", cleared: "09:02 · Tapped Taken on widget" },
        { time: "10:00", pending: "+1h follow-up queued", cleared: "Cancelled automatically" },
        { time: "11:00+", pending: "Hourly until 23:59", cleared: "Cleared · Queue refreshed" },
      ],
    },
    showcase: {
      kicker: "Inside the App",
      title: "Five screens, zero clutter",
      desc: "Every button is rounded, high-contrast, and easy to tap—even when you are half asleep or juggling breakfast for the kids.",
    },
    story: {
      kicker: "From the Developer",
      title: "Why a dad of two built HugPill",
      paragraphs: [
        "I have two daughters, ages 5 and 10. Every week our family juggles Vitamin D, kids' supplements, and evening eye drops. Regular phone alarms drove me crazy—one sleepy swipe in the morning and I completely forgot whether I actually took anything.",
        "Other pill apps felt either like a cold hospital spreadsheet or bombarded me with ads and sign-up walls. So I built HugPill for my own family: a calm, cozy corner where a smiling axolotl (and a warm otter friend) waits with a cup of tea.",
        "I'm rolling it out across 171 App Store regions right now (no sign-up, no tracking, just local + your private iCloud). If it helps your family remember one more dose without stress, that makes my day.",
      ],
      sign: "— Built with care in late-night dad hours · hugpill@icloud.com",
      axolotlName: "Smiling Axolotl",
      axolotlRole: "Free default companion",
      otterName: "Cozy Otter",
      otterRole: "Plus buddy & dynamic icon",
    },
    pricing: {
      kicker: "Simple, Honest Pricing",
      title: "Free for everyday essentials. One-time option if you want Plus.",
      desc: "Core reminders, stepped nudges, widgets, eye-drop tracking, and iCloud backup are all included in Free.",
      free: {
        name: "Free Forever",
        badge: "Up to 3 cards",
        price: "$0",
        sub: "No trial traps · No ads",
        items: [
          "Up to 3 daily pill, vitamin, or eye-drop cards",
          "Smart stepped follow-up nudges (+30m → 1h)",
          "Smiling Axolotl 5-stage cozy growth cabin",
          "Home Screen 2×2, Small, Medium, Large & Lock Screen widgets",
          "28-day opened eye-drop timer & 4 schedule rules",
          "Private Apple iCloud sync & local JSON backup",
        ],
      },
      plus: {
        name: "HugPill Plus",
        badge: "Optional upgrade",
        price: "$9.99 / yr",
        sub: "Or $19.99 Lifetime (one-time purchase)",
        items: [
          "Unlimited medication, supplement & family cards",
          "Unlock Cozy Otter companion + Home Screen dynamic App Icon",
          "4 seasonal pet outfits (Spring, Summer, Autumn, Winter)",
          "Full family multi-role badge organization",
          "Export HD monthly footprint check-in poster",
          "Supports independent dad-built development",
        ],
      },
      finePrint:
        "Annual Plus ($9.99/year) auto-renews unless canceled at least 24 hours before renewal in Apple Account settings. Lifetime Plus ($19.99) is a single one-time payment.",
    },
    faq: {
      kicker: "Honest Answers",
      title: "Questions you might have",
      items: [
        {
          q: "Do I have to create an account or upload health info?",
          a: "No. HugPill has zero sign-up screens and zero external servers. Your schedules stay on your iPhone and optionally sync through your personal Apple iCloud.",
        },
        {
          q: "What happens if I dismiss a notification without taking the pill?",
          a: "Instead of disappearing forever like a normal alarm, HugPill gently follows up 30 minutes later, then hourly until your bedtime cutoff—until you actually tap Taken.",
        },
        {
          q: "When will it be on the App Store?",
          a: "Version 1.0 has just been submitted to Apple for review across 171 App Store countries and regions (excluding Mainland China). This page will switch directly to the App Store link as soon as it clears review.",
        },
        {
          q: "Will there be launch promo codes?",
          a: "Yes! Once Apple approves 1.0, I'm giving away 20 Lifetime ($19.99) promo codes via an anti-bot claim page connected right here.",
        },
      ],
    },
    modal: {
      title: "Currently in App Store Review",
      body: "HugPill 1.0 has been submitted to Apple and is waiting for approval across 171 regions. As soon as it goes live, this button will link straight to the App Store. Questions or want a launch-day ping? Email hugpill@icloud.com anytime.",
      emailBtn: "Email hugpill@icloud.com",
      closeBtn: "Got it",
    },
    footer: {
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      contact: "Contact Support",
      disclaimer:
        "Medical Disclaimer: For personal medication & supplement tracking and reminders only. HugPill does not provide medical advice or dosing guidance.",
    },
  },

  "zh-Hans": {
    htmlLang: "zh-Hans",
    screenFolder: "zh-Hans",
    brandName: "药宝宝 · HugPill",
    pageTitle: "药宝宝 HugPill — 微笑六角龙陪伴吃药、补剂与眼药水提醒 App",
    metaDescription:
      "一位两个女儿的爸爸开发的暖心吃药与营养补剂提醒 iPhone 应用。支持智能阶梯追问、2×2 家庭四宫格桌面小组件、眼药水开封 28 天倒计时、零惩罚养成与零服务器隐私保护。",
    nav: {
      features: "核心功能",
      screens: "界面实拍",
      story: "奶爸初心",
      pricing: "透明定价",
    },
    hero: {
      eyebrow: "iPhone · iOS 18+ · 零广告 · 免注册",
      title: "忘记吃药不怪你，微笑六角龙陪你稳稳打卡到吃过为止。",
      subtitle:
        "每天的维生素 D、常备药和眼药水，交给我们。+30 分钟后温柔追问、桌面 2×2 全家四宫格抬手即点，不建账号、不传外部服务器。",
      ctaReview: "App Store 审核中 · 敬请期待",
      ctaLive: "前往 App Store 下载",
      ctaStory: "看看我为什么做它",
      trust1: "免注册登录",
      trust2: "个人 iCloud 加密备份",
      trust3: "ADHD 友好阶梯追问",
    },
    screenLabels: [
      {
        key: "01_home",
        tab: "今日陪伴",
        title: "暖夜茶色陪伴首页",
        desc: "微笑六角龙捧着温水杯在首页等你，点一下“吃过啦 / 滴过啦”就陪你咕咚喝口水。",
      },
      {
        key: "02_family",
        tab: "全家与滴剂",
        title: "家人彩色角标与眼药水 28 天倒计时",
        desc: "用自己、大宝、二宝、太太、先生彩色角标区分同名维 D；眼药水自动记录开封后 28 天保质期。",
      },
      {
        key: "03_widgets",
        tab: "桌面小组件",
        title: "不打开 App，在桌面抬手打卡",
        desc: "自带 2×2 家庭四宫格、未吃优先自动顶替中号组件、自适应大号组件和锁屏进度圆环。",
      },
      {
        key: "04_cabin",
        tab: "成长小屋",
        title: "只奖励不惩罚的 5 阶养成",
        desc: "漏吃不掉级、没有红字责备。每次打卡攒水滴，帮六角龙和小水獭解锁小雏菊、保温杯和暖光小屋。",
      },
      {
        key: "05_footprints_privacy",
        tab: "足迹与隐私",
        title: "安心足迹日历与纯本地 + iCloud",
        desc: "翻看每月小脚印全勤印章，支持导出打卡长图。零外部服务器、零相机相册权限、零广告追踪。",
      },
    ],
    features: {
      kicker: "为什么不用系统闹钟",
      title: "专治“闹钟响了顺手划掉，转身全忘光”",
      desc: "冷冰冰的系统闹钟划掉就结束了；药宝宝会像温柔的家人一样记住你还没点确认，轻声多问几句。",
      items: [
        {
          badgeClass: "badge-amber",
          badge: "ADHD 友好",
          title: "智能阶梯连环追问（先 30 分后 1 小时）",
          body: "准点没打卡会在 30 分钟后轻声提醒一次，之后每隔 1 小时温柔追问直到睡前（默认 23:59 可调）。在锁屏或桌面点下“吃过啦”，当晚后续追问立刻自动清空。",
        },
        {
          badgeClass: "badge-sage",
          badge: "全家共管",
          title: "2×2 家庭四宫格 + 4 种吃药周期",
          body: "支持每天吃、按星期多选、隔 X 天吃、吃 X 天停 Y 天（内置 21/7、30/7 模板），轮休日自动折叠防误吃；全家人的补剂放在桌面四宫格一屏点完。",
        },
        {
          badgeClass: "badge-peach",
          badge: "眼药水模式",
          title: "专属“滴过啦”与开封 28 天提醒",
          body: "滴剂/外用模式把主按钮与锁屏快捷操作统一切换为“滴过啦”，并默默替你数着开封天数，临近 28 天温和提示换新。",
        },
        {
          badgeClass: "badge-apricot",
          badge: "100% 隐私",
          title: "零内疚、零服务器、零追踪",
          body: "不设账号体系、没有广告和第三方统计 SDK。所有记录只存在手机本地和你的私人 Apple iCloud，也支持导出 JSON 本地备份。",
        },
      ],
      demoTitle: "点一下体验“打卡即止追问”",
      demoBtnTaken: "模拟点一下“吃过啦”",
      demoBtnReset: "重置演示",
      demoSteps: [
        { time: "08:30", pending: "准点首响（风铃八音盒）", cleared: "08:30 · 已响首条提醒" },
        { time: "09:00", pending: "+30 分首次轻声追问", cleared: "09:02 · 桌面小组件已打卡" },
        { time: "10:00", pending: "+1 小时后续追问", cleared: "已自动取消，不再响铃" },
        { time: "11:00+", pending: "每小时守护至 23:59", cleared: "队列已清空并自动续杯明天" },
      ],
    },
    showcase: {
      kicker: "真实界面一览",
      title: "五个常用画面，清晰好点不费眼",
      desc: "全程采用护眼暖夜茶色与圆润大号字体，早上刚醒或晚上关灯前都能一眼看清。",
    },
    story: {
      kicker: "开发者的话",
      title: "我为什么做了「药宝宝」",
      paragraphs: [
        "我是两个女儿的爸爸，大宝 10 岁、二宝 5 岁。家里每天要记大人和孩子的维生素 D、日常补剂还有睡前眼药水。系统自带闹钟对我完全不管用——手滑划掉之后，过十分钟就彻底忘了到底吃没吃。",
        "市面上的提醒 App 要么像冰冷的医院表格，要么还没开始记就弹登录框和广告。于是我利用晚上哄完娃后的时间，写了这款只给我和家人用的小工具：让一只微笑六角龙捧着温水杯守在桌面上。",
        "1.0 版本已经提交给苹果审核，准备面向海外 171 个国家/地区上架（暂不含中国大陆）。如果它也能帮到你或家人少漏掉几次药，我就很开心了。",
      ],
      sign: "— 一位两个女儿的爸爸 · hugpill@icloud.com",
      axolotlName: "微笑六角龙",
      axolotlRole: "免费初始陪伴伙伴",
      otterName: "暖心小水獭",
      otterRole: "Plus 解锁伙伴与动态图标",
    },
    pricing: {
      kicker: "定价透明",
      title: "日常核心功能免费，喜欢再支持终身买断",
      desc: "免费版即可完整使用智能追问、小组件、眼药水 28 天追踪、六角龙 5 阶养成与 iCloud 自动备份。",
      free: {
        name: "免费版",
        badge: "最多 3 项提醒",
        price: "$0",
        sub: "无试用到期套路 · 无广告",
        items: [
          "最多 3 项吃药、补剂或眼药水提醒",
          "智能阶梯连环追问（+30 分后每 1 小时）",
          "微笑六角龙 5 阶暖心成长小屋",
          "2×2 家庭四宫格、小/中/大号桌面及锁屏小组件",
          "眼药水开封 28 天倒计时与 4 种周期排期",
          "个人 Apple iCloud 加密同步与本地 JSON 备份",
        ],
      },
      plus: {
        name: "HugPill Plus",
        badge: "按需升级",
        price: "$9.99 / 年",
        sub: "或 $19.99 一次性终身买断",
        items: [
          "无限添加药品、补剂与家人提醒卡片",
          "解锁暖心小水獭伙伴 + 桌面 App 图标联动切换",
          "4 套四季限定宠物配饰（春樱/夏帽/秋围巾/冬圣诞）",
          "全家多角色标签管理与无限扩展",
          "导出高清月度打卡足迹长图",
          "支持独立爸爸持续打磨更新",
        ],
      },
      finePrint:
        "年度陪伴订阅（$9.99/年）将通过 Apple 账户自动续订，可随时在系统设置中取消；终身买断（$19.99）为一次性付费，无后续扣费。",
    },
    faq: {
      kicker: "常见疑问",
      title: "你可能想先确认的事",
      items: [
        {
          q: "需要注册账号吗？健康数据会上传到你们的服务器吗？",
          a: "不用注册，也没有任何外部服务器。所有数据都存在你的 iPhone 本地，并仅通过你自己的 Apple ID iCloud 加密备份。",
        },
        {
          q: "如果没听到提醒或者手滑划掉了怎么办？",
          a: "只要还没在 App、桌面小组件或锁屏按钮点“吃过啦 / 滴过啦”，系统就会先在 30 分钟后轻声再问一次，之后每小时温和提醒直至睡前。",
        },
        {
          q: "什么时候可以下载？哪些地区可以用？",
          a: "1.0 正式版已提交 App Store 审核，覆盖全球 171 个国家与地区（暂不含中国大陆）。审核通过后本页面按钮会第一时间直达下载页。",
        },
        {
          q: "过审后会有终身码福利吗？",
          a: "会的！苹果审核一通过，我会通过这里即将上线的防机器人领码页，发放 20 枚 $19.99 终身买断兑换码给第一批朋友。",
        },
      ],
    },
    modal: {
      title: "App Store 正在审核中",
      body: "药宝宝（HugPill）1.0 已提交苹果审核，即将在全球 171 个国家与地区上架（暂不含中国大陆）。过审后这里会第一时间替换为正式 App Store 下载链接。如需过审提醒或交流建议，欢迎写信到 hugpill@icloud.com。",
      emailBtn: "发送邮件至 hugpill@icloud.com",
      closeBtn: "知道了",
    },
    footer: {
      privacy: "隐私政策",
      terms: "使用条款",
      contact: "联系支持",
      disclaimer:
        "免责声明：仅用于个人日常服药与营养补剂记录提醒，不提供任何医疗建议或用药指导。",
    },
  },

  "zh-Hant": {
    htmlLang: "zh-Hant",
    screenFolder: "zh-Hant",
    brandName: "藥寶寶 · HugPill",
    pageTitle: "藥寶寶 HugPill — 微笑六角龍陪伴吃藥、保健品與眼藥水提醒 App",
    metaDescription:
      "一位兩個女兒的爸爸開發的療癒吃藥與保健品提醒 iPhone 小工具。支援智能階梯追問、2×2 家庭四宮格桌面小工具、眼藥水開封 28 天倒計時與零伺服器隱私保護。",
    nav: {
      features: "核心亮點",
      screens: "畫面預覽",
      story: "開發故事",
      pricing: "透明定價",
    },
    hero: {
      eyebrow: "iPhone · iOS 18+ · 零廣告 · 免註冊",
      title: "忘記吃藥不怪你，微笑六角龍溫柔提醒到你吃過為止。",
      subtitle:
        "每天的維他命 D、常備藥與眼藥水，交給療癒小夥伴。30 分鐘後輕聲追問、桌面 2×2 家庭四宮格抬手即點，零外部伺服器。",
      ctaReview: "App Store 審核中 · 即將上架",
      ctaLive: "前往 App Store 下載",
      ctaStory: "看看爸爸的開發故事",
      trust1: "免註冊登入",
      trust2: "個人 iCloud 加密備份",
      trust3: "ADHD 友善階梯追問",
    },
    screenLabels: [
      {
        key: "01_home",
        tab: "今日陪伴",
        title: "暖夜茶色療癒首頁",
        desc: "微笑六角龍捧著溫水杯等你，點一下「吃過啦 / 滴過啦」就陪你喝口水慶祝。",
      },
      {
        key: "02_family",
        tab: "全家與滴劑",
        title: "家人彩色角標與眼藥水 28 天倒計時",
        desc: "用自己、大寶、二寶、太太、先生彩色角標分清同款維他命 D；眼藥水自動倒數開封後 28 天保鮮期。",
      },
      {
        key: "03_widgets",
        tab: "桌面小工具",
        title: "免開 App，在桌面抬手打卡",
        desc: "內建 2×2 家庭四宮格、自動頂替中號小工具、自適應大號小工具與鎖定畫面進度圈。",
      },
      {
        key: "04_cabin",
        tab: "成長小屋",
        title: "只獎勵不懲罰的 5 階養成",
        desc: "漏吃不扣分、沒有紅字警告。每次打卡累積水滴，幫六角龍與小水獺解鎖小雛菊、保溫杯與暖光小屋。",
      },
      {
        key: "05_footprints_privacy",
        tab: "足跡與隱私",
        title: "安心足跡日曆與純本機 + iCloud",
        desc: "查看每月小腳印印章與匯出打卡長圖。零伺服器、零相機權限、零廣告追蹤。",
      },
    ],
    features: {
      kicker: "為什麼換掉系統鬧鐘",
      title: "專治「鬧鐘響了順手滑掉，轉眼全忘記」",
      desc: "系統鬧鐘滑掉就沒下文了；藥寶寶會一直溫柔掛記著，直到你真的點下已吃或已滴。",
      items: [
        {
          badgeClass: "badge-amber",
          badge: "ADHD 友善",
          title: "智能階梯連環追問（先 30 分後 1 小時）",
          body: "準點未打卡會在 30 分鐘後輕聲再問一次，之後拉長為每小時溫和提醒至睡前（預設 23:59 可調）。在鎖定畫面或桌面點下「吃過啦」，剩餘提醒立刻自動清空。",
        },
        {
          badgeClass: "badge-sage",
          badge: "全家共用",
          title: "2×2 家庭四宮格 + 4 種服用週期",
          body: "支援每天吃、按星期選擇、隔 X 天吃、吃 X 天停 Y 天（內建 21/7、30/7 快捷鍵），輪休日自動摺疊防誤吃；全家保健品放在桌面四宮格一屏點完。",
        },
        {
          badgeClass: "badge-peach",
          badge: "眼藥水模式",
          title: "專屬「滴過啦」與開封 28 天倒數",
          body: "切換為滴劑／外用模式後，全端按鈕自動改為「滴過啦」，並自動記錄開封日與 28 天保鮮倒計時。",
        },
        {
          badgeClass: "badge-apricot",
          badge: "100% 隱私",
          title: "零內疚、零伺服器、零追蹤",
          body: "免建立帳號、無任何廣告或第三方追蹤。資料只存於本機與你的私人 Apple iCloud，並支援本機 JSON 匯出還原。",
        },
      ],
      demoTitle: "試試看「點一下就停止後續提醒」",
      demoBtnTaken: "模擬點擊「吃過啦」",
      demoBtnReset: "重設示範",
      demoSteps: [
        { time: "08:30", pending: "準點首響（風鈴八音盒）", cleared: "08:30 · 已響首條提醒" },
        { time: "09:00", pending: "+30 分首次輕聲追問", cleared: "09:02 · 桌面小工具已打卡" },
        { time: "10:00", pending: "+1 小時後續追問", cleared: "已自動取消，不再打擾" },
        { time: "11:00+", pending: "每小時守護至 23:59", cleared: "佇列已清空並自動排明天" },
      ],
    },
    showcase: {
      kicker: "App 實拍畫面",
      title: "五個核心畫面，清楚又護眼",
      desc: "溫潤暖夜茶色配圓潤字體，早上趕時間或睡前關燈都一目了然。",
    },
    story: {
      kicker: "開發者自述",
      title: "一位兩個女兒的爸爸，為什麼寫了「藥寶寶」",
      paragraphs: [
        "我有兩個女兒，大的 10 歲、小的 5 歲。家裡每天要顧大人小孩的維他命 D、日常保健品還有眼藥水。我超受不了手機鬧鐘——早上恍神滑掉，十分鐘後就完全想不起到底吃了沒。",
        "找了幾個吃藥軟體，不是像冷冰冰的醫院表單，就是一打開就要註冊看廣告。於是我趁晚上孩子睡了之後，親手寫了這個小工具：讓一隻微笑六角龍捧著暖水杯在桌面陪我們。",
        "1.0 正式版剛送交 Apple 審核，即將在全球 171 個國家與地區上架（香港、台灣、澳門與海外皆可下載）。希望它也能幫你和家人輕鬆記住每一份照顧。",
      ],
      sign: "— 一位兩個女兒的爸爸 · hugpill@icloud.com",
      axolotlName: "微笑六角龍",
      axolotlRole: "免費預設陪伴夥伴",
      otterName: "暖心小水獺",
      otterRole: "Plus 夥伴與動態桌面圖示",
    },
    pricing: {
      kicker: "簡單透明的定價",
      title: "日常基礎免費使用，喜歡再考慮買斷",
      desc: "免費版已包含智能追問、全部桌面小工具、眼藥水 28 天追蹤、六角龍養成與 iCloud 備份。",
      free: {
        name: "免費版",
        badge: "最多 3 項提醒",
        price: "$0",
        sub: "無試用陷阱 · 零廣告",
        items: [
          "最多 3 項吃藥、保健品或眼藥水提醒",
          "智能階梯連環追問（+30 分後每 1 小時）",
          "微笑六角龍 5 階暖心成長小屋",
          "2×2 家庭四宮格、小/中/大號桌面與鎖定畫面小工具",
          "眼藥水開封 28 天倒計時與 4 種週期規則",
          "私人 Apple iCloud 加密同步與本機 JSON 備份",
        ],
      },
      plus: {
        name: "HugPill Plus",
        badge: "自由升級",
        price: "$9.99 / 年",
        sub: "或 $19.99 一次性終身買斷",
        items: [
          "無限新增藥品、保健品與家人提醒卡片",
          "解鎖暖心小水獺夥伴 + 動態切換手機桌面圖示",
          "4 套四季限定寵物配飾（春櫻/夏帽/秋圍巾/冬聖誕）",
          "家庭成員多角色角標管理",
          "匯出高畫質月度打卡足跡長圖",
          "支持獨立奶爸持續維護更新",
        ],
      },
      finePrint:
        "年度方案（$9.99/年）透過 Apple 帳號自動續訂，可隨時於系統設定取消；終身買斷（$19.99）為一次性付費，無須續費。",
    },
    faq: {
      kicker: "常見問題",
      title: "上架前你可能想知道的事",
      items: [
        {
          q: "需要註冊帳號嗎？健康紀錄會上傳伺服器嗎？",
          a: "不用註冊，也沒有任何外部伺服器。資料僅存於本機與你自己的 Apple ID iCloud 加密空間。",
        },
        {
          q: "不小心把通知滑掉怎麼辦？",
          a: "只要還沒點擊「吃過啦 / 滴過啦」，它會在 30 分鐘後輕聲再提醒，之後每小時提醒至睡前截止。",
        },
        {
          q: "什麼時候上架？台灣和香港都可以下載嗎？",
          a: "1.0 已提交 App Store 審核，涵蓋全球 171 個地區（包含台灣、香港、澳門及美日韓等）。過審後本頁按鈕會直接連往 App Store。",
        },
        {
          q: "過審當天會有免費終身碼活動嗎？",
          a: "有的！審核通過後，會在這裡搭配防機器人領碼頁送出 20 枚 $19.99 終身兌換碼給大家搶先體驗。",
        },
      ],
    },
    modal: {
      title: "App Store 審核中",
      body: "藥寶寶（HugPill）1.0 已送交 Apple 審核，即將在包含台港澳在內的 171 個地區上架。通過後這裡會立即更新為正式 App Store 下載連結，也歡迎隨時寄信到 hugpill@icloud.com 聯繫我。",
      emailBtn: "寄信至 hugpill@icloud.com",
      closeBtn: "知道了",
    },
    footer: {
      privacy: "隱私權政策",
      terms: "使用條款",
      contact: "聯繫支援",
      disclaimer:
        "免責聲明：僅供個人日常服藥與保健食品紀錄提醒使用，不提供任何醫療建議或用藥指導。",
    },
  },

  ja: {
    htmlLang: "ja",
    screenFolder: "ja",
    brandName: "HugPill",
    pageTitle: "HugPill — ウーパールーパーとやさしく続くお薬・目薬リマインダー",
    metaDescription:
      "2人の娘を持つパパが個人開発した、やさしく続くiPhoneお薬・サプリ・目薬リマインダー。段階リマインド、家族2×2ウィジェット、目薬開封28日カウント、登録不要＆iCloud暗号化同期。",
    nav: {
      features: "主な機能",
      screens: "画面イメージ",
      story: "開発ストーリー",
      pricing: "料金プラン",
    },
    hero: {
      eyebrow: "iPhone · iOS 18+ · 広告なし · 登録不要",
      title: "飲み忘れを責めない。ウーパールーパーが「飲んだ！」までやさしく寄り添います。",
      subtitle:
        "毎日のお薬やビタミンD、目薬の習慣をかわいく記録。30分後のさりげない再通知や、ホーム画面の家族2×2ウィジェットで1タップ記録できます。",
      ctaReview: "App Store 審査中（近日公開）",
      ctaLive: "App Store でダウンロード",
      ctaStory: "作ったきっかけを読む",
      trust1: "アカウント登録不要",
      trust2: "外部サーバーなし",
      trust3: "ADHDの方にもやさしい",
    },
    screenLabels: [
      {
        key: "01_home",
        tab: "今日",
        title: "あたたかい色のホーム画面",
        desc: "ウーパールーパーが温かいカップを持って待機。「飲んだ！ / 点眼した！」をタップすると一緒にお水を飲んでくれます。",
      },
      {
        key: "02_family",
        tab: "家族・目薬",
        title: "家族タグ＆目薬の開封28日カウント",
        desc: "「自分・上の子・下の子・パートナー」の色別タグで家族のサプリも一目瞭然。目薬は開封後28日間のカウントダウン付き。",
      },
      {
        key: "03_widgets",
        tab: "ウィジェット",
        title: "アプリを開かずにホーム画面から記録",
        desc: "2×2家族グリッドや、未服用を自動で前に繰り上げるウィジェット、ロック画面の進捗リングまで勢ぞろい。",
      },
      {
        key: "04_cabin",
        tab: "育成小屋",
        title: "プレッシャーゼロの5段階育成",
        desc: "飲み忘れてもペナルティや赤い警告は一切なし。記録するたびにもらえるしずくで、お花やカップ、お部屋の飾りが増えます。",
      },
      {
        key: "05_footprints_privacy",
        tab: "履歴・安心",
        title: "あしあとカレンダー＆プライベートiCloud",
        desc: "月ごとの達成スタンプや記録画像の書き出しに対応。データは端末内とご自身のiCloudだけに保存されます。",
      },
    ],
    features: {
      kicker: "HugPill の工夫",
      title: "「アラームを止めた瞬間に忘れる」を防ぐ仕組み",
      desc: "普通のアラームはスワイプしたら終わり。HugPill は「飲んだ！」を押すまでやさしく見守り続けます。",
      items: [
        {
          badgeClass: "badge-amber",
          badge: "段階リマインド",
          title: "最初30分後 → 以後1時間ごとのやさしい再通知",
          body: "予定時刻に記録がないと30分後にそっとお声がけし、その後はおやすみ時刻（初期値23:59・調整可）まで1時間おきにリマインド。ウィジェットやロック画面で押せば残りは即キャンセルされます。",
        },
        {
          badgeClass: "badge-sage",
          badge: "家族対応",
          title: "2×2家族グリッド＆4種類の服用サイクル",
          body: "毎日・曜日指定・X日おき・X日服用Y日休薬（21/7・30/7ワンタップ対応）に対応。休薬日はホームでそっと折り畳み、誤飲を防ぎます。",
        },
        {
          badgeClass: "badge-peach",
          badge: "目薬専用モード",
          title: "「点眼した！」表記＆開封28日カウント",
          body: "目薬モードにするとボタンや通知アクションが「点眼した！」に切り替わり、開封日からの28日経過を自動で数えてくれます。",
        },
        {
          badgeClass: "badge-apricot",
          badge: "完全プライベート",
          title: "登録不要・外部サーバーなし・広告ゼロ",
          body: "会員登録も解析SDKもカメラ権限もなし。記録はiPhone本体とご自身のApple iCloudにのみ暗号化保存され、JSONバックアップも可能です。",
        },
      ],
      demoTitle: "ワンタップで残りの通知が止まる流れ",
      demoBtnTaken: "「飲んだ！」をタップしてみる",
      demoBtnReset: "リセット",
      demoSteps: [
        { time: "08:30", pending: "定時通知（オルゴール音）", cleared: "08:30 · 定時通知を受信" },
        { time: "09:00", pending: "+30分 最初の再通知", cleared: "09:02 · ウィジェットで完了" },
        { time: "10:00", pending: "+1時間ごとの追加通知", cleared: "自動キャンセル済み" },
        { time: "11:00+", pending: "23:59まで1時間おき待機", cleared: "キューを整理し翌日に備え済み" },
      ],
    },
    showcase: {
      kicker: "アプリの中身",
      title: "目にやさしい夜カフェ色、5つの画面",
      desc: "寝起きや夜遅くでもまぶしくない落ち着いた配色と、押しやすい丸みのあるボタン設計です。",
    },
    story: {
      kicker: "個人開発ストーリー",
      title: "5歳と10歳の娘を持つパパが作った理由",
      paragraphs: [
        "私には5歳と10歳の娘がいます。家族で毎日のビタミンDやサプリ、夜の目薬を続けているのですが、iPhoneの標準アラームはスワイプして止めた瞬間に「あれ、もう飲んだっけ？」と忘れてしまうことが何度もありました。",
        "既存の服薬アプリは病院の表のように堅苦しかったり、広告や会員登録が必須だったり。それなら自分たちのためにと、夜寝かしつけのあとに少しずつ個人開発したのが HugPill です。",
        "現在バージョン1.0をApp Storeへ審査提出中です（世界171の国・地域対応）。忙しい毎日の中で、同じ悩みを持つご家庭の助けになれば嬉しいです。",
      ],
      sign: "— 2児のパパ・個人開発者 · hugpill@icloud.com",
      axolotlName: "スマイル・ウーパールーパー",
      axolotlRole: "無料の初期パートナー",
      otterName: "ぬくもりカワウソ",
      otterRole: "Plus限定パートナー＆アイコン連動",
    },
    pricing: {
      kicker: "シンプルな料金",
      title: "基本機能は無料。気に入ったら買い切りも選べます",
      desc: "段階リマインド、ウィジェット全種、目薬28日カウント、ウーパールーパー育成、iCloudバックアップまで無料でお使いいただけます。",
      free: {
        name: "無料プラン",
        badge: "3件まで登録OK",
        price: "$0",
        sub: "お試し課金誘導なし・広告なし",
        items: [
          "お薬・サプリ・目薬を3件まで登録",
          "段階フォロー通知（+30分 → 以後1時間おき）",
          "ウーパールーパー5段階育成小屋",
          "2×2家族グリッド・小/中/大・ロック画面ウィジェット",
          "目薬の開封28日カウント＆4種の服用スケジュール",
          "ご自身のiCloud暗号化同期＆ローカルJSONバックアップ",
        ],
      },
      plus: {
        name: "HugPill Plus",
        badge: "任意アップグレード",
        price: "$9.99 / 年",
        sub: "または $19.99 買い切りプラン",
        items: [
          "お薬・サプリ・家族カードの登録数が無制限",
          "「ぬくもりカワウソ」解放＆ホーム画面アプリアイコン連動変更",
          "春夏秋冬の限定アクセサリー4種",
          "家族メンバー別タグのフル活用",
          "月間チェックインまとめ画像の書き出し",
          "個人開発の継続応援",
        ],
      },
      finePrint:
        "年額プラン（$9.99/年）は更新24時間前までにApple Account設定で解約しない限り自動更新されます。買い切りプラン（$19.99）は一度のお支払いで追加課金はありません。",
    },
    faq: {
      kicker: "よくある質問",
      title: "リリース前のQ&A",
      items: [
        {
          q: "アカウント登録や個人情報の送信は必要ですか？",
          a: "いいえ。アカウント機能も外部サーバーも一切ありません。データは端末とご自身のApple iCloudにのみ保存されます。",
        },
        {
          q: "通知をうっかり消してしまったらどうなりますか？",
          a: "記録ボタンを押さない限り、30分後にそっと再通知し、その後はおやすみ時刻まで1時間おきにお知らせします。",
        },
        {
          q: "いつApp Storeで公開されますか？",
          a: "現在Appleの審査待ちです。承認され次第、このページのボタンからそのままApp Storeへ飛べるようになります。",
        },
        {
          q: "公開記念のプロモーションコードはありますか？",
          a: "はい！審査通過後、こちらのページからボット対策付きで先着20名様に $19.99 買い切りコードを配布予定です。",
        },
      ],
    },
    modal: {
      title: "App Store 審査中です",
      body: "HugPill 1.0 はただいま Apple の審査キューに入っています。日本を含む171の国と地域で公開され次第、このボタンからそのままダウンロードできるようになります。ご質問は hugpill@icloud.com までお気軽にどうぞ。",
      emailBtn: "hugpill@icloud.com へメール",
      closeBtn: "閉じる",
    },
    footer: {
      privacy: "プライバシーポリシー",
      terms: "利用規約",
      contact: "お問い合わせ",
      disclaimer:
        "免責事項：本アプリはお薬やサプリメントの個人的な服用記録・リマインダー専用であり、医療上の助言や服薬指導を行うものではありません。",
    },
  },

  ko: {
    htmlLang: "ko",
    screenFolder: "ko",
    brandName: "HugPill",
    pageTitle: "HugPill — 다정한 우파루파와 함께 챙기는 복약·영양제·안약 알림 앱",
    metaDescription:
      "두 딸의 아빠가 만든 다정한 iPhone 복약 및 영양제 알림 앱. 스마트 단계별 재알림, 2×2 가족 홈 화면 위젯, 안약 개봉 28일 카운트다운, 계정·서버 없는 100% 프라이버시.",
    nav: {
      features: "주요 기능",
      screens: "화면 미리보기",
      story: "개발 이야기",
      pricing: "요금 안내",
    },
    hero: {
      eyebrow: "iPhone · iOS 18+ · 광고 없음 · 회원가입 없음",
      title: "깜빡해도 혼내지 않아요. 우파루파가 체크할 때까지 다정하게 알려드릴게요.",
      subtitle:
        "매일 먹는 비타민 D, 상비약, 안약까지. 30분 뒤 조용한 재알림과 홈 화면 2×2 가족 위젯으로 탭 한 번에 기록하고, 외부 서버 없이 iCloud에 안전하게 보관해요.",
      ctaReview: "App Store 심사 중 · 곧 출시",
      ctaLive: "App Store에서 다운로드",
      ctaStory: "만든 이유 읽어보기",
      trust1: "회원가입 없음",
      trust2: "내 iCloud만 사용",
      trust3: "ADHD 친화 재알림",
    },
    screenLabels: [
      {
        key: "01_home",
        tab: "오늘의 동행",
        title: "눈이 편안한 따뜻한 밤차 테마",
        desc: "미소 짓는 우파루파가 따뜻한 컵을 들고 기다려요. ‘먹었어요 / 점안 완료’를 누르면 함께 물을 마시며 응원해요.",
      },
      {
        key: "02_family",
        tab: "가족 & 안약",
        title: "가족 컬러 태그 & 안약 개봉 28일 카운트",
        desc: "나, 첫째, 둘째, 배우자 태그로 같은 비타민 D도 한눈에 구분하고, 안약은 개봉 후 28일 유통기한을 자동으로 세어줘요.",
      },
      {
        key: "03_widgets",
        tab: "홈 위젯",
        title: "앱을 열지 않고 홈 화면에서 바로 체크",
        desc: "2×2 가족 그리드, 남은 약 우선 자동 정렬 위젯, 큰 위젯 및 잠금 화면 진행 링까지 모두 지원해요.",
      },
      {
        key: "04_cabin",
        tab: "성장 오두막",
        title: "부담 제로 5단계 성장 시스템",
        desc: "하루 놓쳐도 연속 기록 벌점이나 빨간 경고가 없어요. 체크인마다 모이는 물방울로 귀여운 장식과 소품을 열 수 있어요.",
      },
      {
        key: "05_footprints_privacy",
        tab: "발자취 & 보안",
        title: "월간 발자취 달력 & 개인 iCloud 백업",
        desc: "한 달 기록을 한눈에 보고 이미지로 저장하세요. 외부 서버, 광고 추적, 카메라 권한 요청이 전혀 없어요.",
      },
    ],
    features: {
      kicker: "HugPill이 다른 이유",
      title: "알람을 끄자마자 까먹는 아침을 위해 만들었어요",
      desc: "기본 알람은 밀어서 끄면 그걸로 끝이지만, HugPill은 실제로 체크인 버튼을 누를 때까지 곁에서 다정하게 챙겨드려요.",
      items: [
        {
          badgeClass: "badge-amber",
          badge: "ADHD 친화",
          title: "스마트 단계별 재알림 (30분 후 → 1시간마다)",
          body: "제시간에 기록이 없으면 30분 뒤 조용히 한 번 더 묻고, 이후 취침 시간(기본 23:59 조절 가능)까지 1시간 간격으로 알려줘요. 위젯이나 잠금 화면에서 완료하면 남은 알림은 즉시 사라져요.",
        },
        {
          badgeClass: "badge-sage",
          badge: "온 가족 케어",
          title: "2×2 가족 위젯 & 4가지 복용 주기",
          body: "매일, 요일 선택, N일 간격, X일 복용·Y일 휴식(21/7·30/7 버튼 제공)까지 지원해요. 쉬는 날 약은 홈에서 접어두어 오복용을 막아줘요.",
        },
        {
          badgeClass: "badge-peach",
          badge: "안약 전용 모드",
          title: "‘점안 완료’ 버튼 & 개봉 후 28일 알림",
          body: "점안액 모드를 켜면 앱과 잠금 화면 버튼이 ‘점안 완료’로 바뀌고, 개봉일 기준 28일 카운트다운으로 교체 시기를 놓치지 않게 도와줘요.",
        },
        {
          badgeClass: "badge-apricot",
          badge: "100% 프라이버시",
          title: "죄책감 제로 · 서버 제로 · 추적 제로",
          body: "계정 로그인, 외부 서버, 광고 SDK, 사진/카메라 권한이 전혀 없어요. 모든 기록은 기기와 개인 Apple iCloud에만 저장되며 JSON 백업도 지원해요.",
        },
      ],
      demoTitle: "체크인 한 번으로 남은 알림이 정리되는 과정",
      demoBtnTaken: "‘먹었어요’ 눌러보기",
      demoBtnReset: "데모 초기화",
      demoSteps: [
        { time: "08:30", pending: "정시 첫 알림 (오르골 벨소리)", cleared: "08:30 · 첫 알림 도착" },
        { time: "09:00", pending: "+30분 첫 재알림", cleared: "09:02 · 홈 위젯에서 체크 완료" },
        { time: "10:00", pending: "+1시간 간격 재알림", cleared: "자동 취소됨 (더 울리지 않음)" },
        { time: "11:00+", pending: "23:59까지 매시간 대기", cleared: "대기열 정리 및 내일 일정 준비 완료" },
      ],
    },
    showcase: {
      kicker: "앱 둘러보기",
      title: "눈이 편안한 5가지 핵심 화면",
      desc: "부드러운 다크 톤과 둥근 큰 글씨로 막 잠에서 깬 아침이나 불 끈 밤에도 한눈에 보여요.",
    },
    story: {
      kicker: "개발자 이야기",
      title: "5살, 10살 두 딸의 아빠가 HugPill을 만든 이유",
      paragraphs: [
        "저에게는 5살, 10살 두 딸이 있습니다. 온 가족이 매일 비타민 D와 영양제, 저녁 안약을 챙겨야 하는데, 아이폰 기본 알람은 잠결에 밀어서 끄고 나면 방금 먹었는지조차 까맣게 잊어버리곤 했어요.",
        "기존 약 알림 앱들은 차가운 병원 기록표 같거나 처음부터 회원가입과 광고가 쏟아지더라고요. 그래서 밤마다 아이들을 재운 뒤 우리 가족을 위해 직접 만들기 시작했습니다.",
        "현재 버전 1.0을 App Store 심사에 제출해 두었고 한국을 포함한 171개 국가에서 곧 만나보실 수 있어요. 바쁜 일상 속에서 조금이나마 든든한 도움이 되길 바랍니다.",
      ],
      sign: "— 두 딸의 아빠이자 1인 개발자 · hugpill@icloud.com",
      axolotlName: "미소 짓는 우파루파",
      axolotlRole: "무료 기본 동반자",
      otterName: "다정한 수달",
      otterRole: "Plus 친구 & 홈 아이콘 연동",
    },
    pricing: {
      kicker: "투명한 요금제",
      title: "기본 기능은 무료로, 원하실 때 평생 소장도 가능해요",
      desc: "단계별 재알림, 모든 위젯, 안약 28일 타이머, 우파루파 성장 오두막, iCloud 자동 백업까지 무료 버전에 모두 담았습니다.",
      free: {
        name: "무료 버전",
        badge: "최대 3개 알림",
        price: "$0",
        sub: "체험 후 자동결제 유도 없음 · 광고 없음",
        items: [
          "약·영양제·안약 최대 3개 등록",
          "스마트 단계별 재알림 (+30분 → 1시간 간격)",
          "우파루파 5단계 성장 오두막",
          "2×2 가족 위젯·소/중/대형 및 잠금 화면 위젯",
          "안약 개봉 28일 카운트다운 & 4가지 복용 주기",
          "개인 Apple iCloud 암호화 동기화 & 로컬 JSON 백업",
        ],
      },
      plus: {
        name: "HugPill Plus",
        badge: "선택 업그레이드",
        price: "$9.99 / 년",
        sub: "또는 $19.99 1회 평생 이용권",
        items: [
          "약·영양제·가족 카드 무제한 등록",
          "다정한 수달 친구 잠금 해제 & 홈 화면 앱 아이콘 자동 전환",
          "사계절 한정 펫 액세서리 4종",
          "가족 구성원별 컬러 태그 관리",
          "고화질 월간 기록 리포트 이미지 저장",
          "1인 개발자 지속 업데이트 응원",
        ],
      },
      finePrint:
        "연간 플랜($9.99/년)은 갱신 24시간 전까지 Apple 계정 설정에서 해지하지 않으면 자동 갱신됩니다. 평생 이용권($19.99)은 1회 결제로 추가 요금이 없습니다.",
    },
    faq: {
      kicker: "자주 묻는 질문",
      title: "출시 전 궁금하실 점들",
      items: [
        {
          q: "회원가입이 필요하거나 건강 기록이 서버로 전송되나요?",
          a: "아니요. 회원가입 기능도 외부 서버도 없습니다. 모든 기록은 iPhone 내부와 사용자 본인의 Apple iCloud에만 안전하게 보관됩니다.",
        },
        {
          q: "알림을 실수로 밀어서 지워버리면 어떻게 되나요?",
          a: "체크인 버튼을 누르기 전까지는 30분 뒤에 부드럽게 다시 알려드리고, 이후 취침 시간 전까지 매시간 챙겨드려요.",
        },
        {
          q: "언제 App Store에서 받을 수 있나요?",
          a: "1.0 정식 버전이 현재 Apple 심사 대기 중입니다. 심사가 통과되는 대로 이 페이지 버튼이 App Store 다운로드 링크로 바로 연결됩니다.",
        },
        {
          q: "출시 기념 프로모션 코드 이벤트도 있나요?",
          a: "네! 심사 통과 직후 이 사이트에 연결될 봇 방지 페이지에서 선착순 20분께 $19.99 평생 이용권 코드를 드릴 예정이에요.",
        },
      ],
    },
    modal: {
      title: "App Store 심사 진행 중이에요",
      body: "HugPill 1.0이 Apple 심사에 제출되어 한국을 포함한 171개국 출시를 기다리고 있습니다. 심사가 완료되면 이 버튼이 바로 App Store로 연결됩니다. 문의나 출시 알림은 hugpill@icloud.com으로 편하게 연락 주세요.",
      emailBtn: "hugpill@icloud.com으로 메일 보내기",
      closeBtn: "확인",
    },
    footer: {
      privacy: "개인정보 처리방침",
      terms: "이용약관",
      contact: "문의하기",
      disclaimer:
        "면책 고지: 본 앱은 개인의 일상 복약 및 영양제 기록과 알림을 위한 도구이며, 의료 조언이나 복약 지도를 제공하지 않습니다.",
    },
  },
};
