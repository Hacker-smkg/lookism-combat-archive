const WEBTOON_URL = "https://www.webtoons.com/en/drama/lookism/list?title_no=1049";
const WIKI_CHARACTERS_URL = "https://lookism.fandom.com/wiki/Characters";
const WIKI_MASTERY_URL = "https://lookism.fandom.com/wiki/Mastery";
const WIKI_PATH_URL = "https://lookism.fandom.com/wiki/Path";
const WIKI_DANIEL_URL = "https://lookism.fandom.com/wiki/Daniel_Park";
const WIKI_GUN_URL = "https://lookism.fandom.com/wiki/Gun_Park";
const WIKI_DIEGO_URL = "https://lookism.fandom.com/wiki/Diego_Kang";
const WIKI_GOO_URL = "https://lookism.fandom.com/wiki/Goo_Kim";
const WIKI_ZACK_URL = "https://lookism.fandom.com/wiki/Zack_Lee";
const WIKI_VASCO_URL = "https://lookism.fandom.com/wiki/Vasco";
const WIKI_VIN_URL = "https://lookism.fandom.com/wiki/Vin_Jin";
const WIKI_WARREN_URL = "https://lookism.fandom.com/wiki/Warren_Chae";
const WIKI_SINU_URL = "https://lookism.fandom.com/wiki/Sinu_Han";
const WIKI_JAY_URL = "https://lookism.fandom.com/wiki/Jay_Hong";
const WIKI_SOPHIA_URL = "https://lookism.fandom.com/wiki/Sophia_Alexander";
const WIKI_BREKDAK_URL = "https://lookism.fandom.com/wiki/Brekdak";
const WIKI_ELI_URL = "https://lookism.fandom.com/wiki/Eli_Jang";
const WIKI_JOHAN_URL = "https://lookism.fandom.com/wiki/Johan_Seong";
const WIKI_PAECHEON_URL = "https://lookism.fandom.com/wiki/Paecheon_Jo";
const WIKI_BONGAE_URL = "https://lookism.fandom.com/wiki/Bongae_Choi";
const WIKI_BAKGU_URL = "https://lookism.fandom.com/wiki/Bakgu_Noh";
const WIKI_JAEGYEON_URL = "https://lookism.fandom.com/wiki/Jaegyeon_Na";
const WIKI_ULTRA_INSTINCT_URL = "https://lookism.fandom.com/wiki/Ultra_Instinct";
const SOLO_SYSTEM_URL = "https://solo-leveling.fandom.com/wiki/System";
const SOLO_QUESTS_URL = "https://solo-leveling.fandom.com/wiki/Quests";
const CDC_ACTIVITY_URL = "https://www.cdc.gov/physical-activity-basics/adding-adults/index.html";
const GEMINI_TEXT_URL = "https://ai.google.dev/gemini-api/docs/text-generation";
const GEMINI_API_KEY_URL = "https://ai.google.dev/gemini-api/docs/api-key";

const IMAGES = {
  daniel: {
    url: "https://static.wikia.nocookie.net/lookism/images/8/88/Daniel-new-icon.png/revision/latest/scale-to-width-down/320?cb=20200601172934",
    source: "https://lookism.fandom.com/wiki/Daniel_Park"
  },
  danielDual: {
    url: "https://static.wikia.nocookie.net/lookism/images/3/3a/Old_daniel_and_new_daniel.jpg/revision/latest/scale-to-width-down/420?cb=20210524045816",
    source: "https://lookism.fandom.com/wiki/Daniel_Park/Image_Gallery"
  },
  uiDaniel: {
    url: "https://static.wikia.nocookie.net/lookism/images/d/df/UI2nd_581.png/revision/latest/scale-to-width-down/420?cb=20260514165022",
    source: "https://lookism.fandom.com/wiki/Daniel_Park/Image_Gallery"
  },
  pathDaniel: {
    url: "https://static.wikia.nocookie.net/lookism/images/c/ce/Daniel-Chapter551.png/revision/latest/scale-to-width-down/420?cb=20260514165743",
    source: "https://lookism.fandom.com/wiki/Daniel_Park/Image_Gallery"
  },
  dg: {
    url: "https://static.wikia.nocookie.net/lookism/images/8/82/DG_app_profile.png/revision/latest/scale-to-width-down/320?cb=20251116002314",
    source: "https://lookism.fandom.com/wiki/Diego_Kang"
  },
  kitae: {
    url: "https://static.wikia.nocookie.net/lookism/images/3/3d/KitaeKim.png/revision/latest/scale-to-width-down/320?cb=20240627213418",
    source: "https://lookism.fandom.com/wiki/Kitae_Kim"
  },
  gun: {
    url: "https://static.wikia.nocookie.net/lookism/images/d/da/Gun_Profile.png/revision/latest/scale-to-width-down/320?cb=20240702040239",
    source: "https://lookism.fandom.com/wiki/Gun_Park"
  },
  gunCurrent: {
    url: "https://static.wikia.nocookie.net/lookism/images/f/ff/Gun_Current.png/revision/latest/scale-to-width-down/420?cb=20250615012323",
    source: "https://lookism.fandom.com/wiki/Gun_Park/Image_Gallery"
  },
  gunUnconscious: {
    url: "https://static.wikia.nocookie.net/lookism/images/c/c3/Unconscious_Gun.png/revision/latest/scale-to-width-down/420?cb=20240630054146",
    source: "https://lookism.fandom.com/wiki/Gun_Park/Image_Gallery"
  },
  goo: {
    url: "https://static.wikia.nocookie.net/lookism/images/9/91/Goo_Kim_Profile.png/revision/latest/scale-to-width-down/320?cb=20240630051501",
    source: "https://lookism.fandom.com/wiki/Goo_Kim"
  },
  tom: {
    url: "https://static.wikia.nocookie.net/lookism/images/a/ae/Tom_Lee_Profile_-_Workers.png/revision/latest/scale-to-width-down/320?cb=20240314095514",
    source: "https://lookism.fandom.com/wiki/Tom_Lee"
  },
  jinyoung: {
    url: "https://static.wikia.nocookie.net/lookism/images/8/85/Jinyoung_Park.png/revision/latest/scale-to-width-down/320?cb=20250615191234",
    source: "https://lookism.fandom.com/wiki/Jinyoung_Park"
  },
  charles: {
    url: "https://static.wikia.nocookie.net/lookism/images/9/9a/Charles_Choi_Profile.png/revision/latest/scale-to-width-down/320?cb=20240308174046",
    source: "https://lookism.fandom.com/wiki/Charles_Choi"
  },
  managerKim: {
    url: "https://static.wikia.nocookie.net/lookism/images/e/ee/Manager_kim_profile.png/revision/latest/scale-to-width-down/320?cb=20240630164001",
    source: "https://lookism.fandom.com/wiki/Manager_Kim"
  },
  jake: {
    url: "https://static.wikia.nocookie.net/lookism/images/0/00/Jake_Kim.png/revision/latest/scale-to-width-down/260?cb=20211005203139",
    source: "https://lookism.fandom.com/wiki/Jake_Kim"
  },
  johan: {
    url: "https://static.wikia.nocookie.net/lookism/images/1/17/Johan_runaway_fam.PNG/revision/latest/scale-to-width-down/320?cb=20200315184427",
    source: "https://lookism.fandom.com/wiki/Johan_Seong"
  },
  pathJohan: {
    url: "https://static.wikia.nocookie.net/lookism/images/1/15/GodDog-Path551.png/revision/latest/scale-to-width-down/420?cb=20260514165507",
    source: "https://lookism.fandom.com/wiki/Daniel_Park/Image_Gallery"
  },
  sinu: {
    url: "https://static.wikia.nocookie.net/lookism/images/6/64/Sinu_3A_Icon.png/revision/latest/scale-to-width-down/320?cb=20200627043232",
    source: "https://lookism.fandom.com/wiki/Sinu_Han"
  },
  zack: {
    url: "https://static.wikia.nocookie.net/lookism/images/c/cb/Zack_icon.png/revision/latest/scale-to-width-down/320?cb=20200601174027",
    source: "https://lookism.fandom.com/wiki/Zack_Lee"
  },
  vasco: {
    url: "https://static.wikia.nocookie.net/lookism/images/7/7b/Vasco.PNG/revision/latest/scale-to-width-down/320?cb=20190822021253",
    source: "https://lookism.fandom.com/wiki/Vasco"
  },
  eli: {
    url: "https://static.wikia.nocookie.net/lookism/images/6/6b/ELI_PROFILE.png/revision/latest/scale-to-width-down/320?cb=20190822012651",
    source: "https://lookism.fandom.com/wiki/Eli_Jang"
  },
  masteryEli: {
    url: "https://static.wikia.nocookie.net/lookism/images/0/09/Mastery-Eli551.png/revision/latest/scale-to-width-down/420?cb=20260514165644",
    source: "https://lookism.fandom.com/wiki/Daniel_Park/Image_Gallery"
  },
  warren: {
    url: "https://static.wikia.nocookie.net/lookism/images/5/55/Warren_Chae_icon.jpg/revision/latest/scale-to-width-down/320?cb=20200315012406",
    source: "https://lookism.fandom.com/wiki/Warren_Chae"
  },
  vin: {
    url: "https://static.wikia.nocookie.net/lookism/images/4/41/Vin_Jin_icon.jpg/revision/latest/scale-to-width-down/320?cb=20190829053745",
    source: "https://lookism.fandom.com/wiki/Vin_Jin"
  },
  mary: {
    url: "https://static.wikia.nocookie.net/lookism/images/2/29/Mary_Kim_icon.jpg/revision/latest/scale-to-width-down/320?cb=20190822014606",
    source: "https://lookism.fandom.com/wiki/Mary_Kim"
  },
  jerry: {
    url: "https://static.wikia.nocookie.net/lookism/images/e/ea/Jerry-icon.png/revision/latest/scale-to-width-down/320?cb=20200611045750",
    source: "https://lookism.fandom.com/wiki/Jerry_Kwon"
  },
  samuel: {
    url: "https://static.wikia.nocookie.net/lookism/images/9/94/Samuel_Seo_icon.png/revision/latest/scale-to-width-down/320?cb=20240105184643",
    source: "https://lookism.fandom.com/wiki/Samuel_Seo"
  },
  mandeok: {
    url: "https://static.wikia.nocookie.net/lookism/images/e/e5/Mandeok_Bang_icon.png/revision/latest/scale-to-width-down/320?cb=20240502002750",
    source: "https://lookism.fandom.com/wiki/Mandeok_Bang"
  },
  yuseong: {
    url: "https://static.wikia.nocookie.net/lookism/images/9/97/Yuseong.png/revision/latest/scale-to-width-down/320?cb=20240308031934",
    source: "https://lookism.fandom.com/wiki/Yuseong"
  },
  xiaolong: {
    url: "https://static.wikia.nocookie.net/lookism/images/d/d0/Xiaolong_-_Chapter_421.png/revision/latest/scale-to-width-down/320?cb=20240503003614",
    source: "https://lookism.fandom.com/wiki/Xiaolong"
  },
  taesoo: {
    url: "https://static.wikia.nocookie.net/lookism/images/0/08/TaesooProfile.png/revision/latest/scale-to-width-down/320?cb=20240702053522",
    source: "https://lookism.fandom.com/wiki/Taesoo_Ma"
  },
  gongseob: {
    url: "https://static.wikia.nocookie.net/lookism/images/5/52/Gong_Ji_icon.png/revision/latest/scale-to-width-down/320?cb=20190822015008",
    source: "https://lookism.fandom.com/wiki/Gongseob_Ji"
  },
  hudson: {
    url: "https://static.wikia.nocookie.net/lookism/images/c/c3/Hudson_Ahn_icon.png/revision/latest/scale-to-width-down/320?cb=20240107175135",
    source: "https://lookism.fandom.com/wiki/Hudson_Ahn"
  },
  olly: {
    url: "https://static.wikia.nocookie.net/lookism/images/d/d0/Olly_Wang_profile.PNG/revision/latest/scale-to-width-down/320?cb=20191129174839",
    source: "https://lookism.fandom.com/wiki/Olly_Wang"
  },
  logan: {
    url: "https://static.wikia.nocookie.net/lookism/images/8/8c/Logan_profile.PNG/revision/latest/scale-to-width-down/320?cb=20190822012105",
    source: "https://lookism.fandom.com/wiki/Logan_Lee"
  },
  jay: {
    url: "https://static.wikia.nocookie.net/lookism/images/b/b4/Jay_%28Allied%29.jpg/revision/latest?cb=20230909061739",
    source: "https://lookism.fandom.com/wiki/Jay_Hong"
  },
  jason: {
    url: "https://static.wikia.nocookie.net/lookism/images/d/d3/Jason-icon.png/revision/latest/scale-to-width-down/320?cb=20200611045954",
    source: "https://lookism.fandom.com/wiki/Jason_Yoon"
  },
  brad: {
    url: "https://static.wikia.nocookie.net/lookism/images/d/d7/Brad-icon.png/revision/latest/scale-to-width-down/320?cb=20200611050218",
    source: "https://lookism.fandom.com/wiki/Brad_Lee"
  },
  crystal: {
    url: "https://static.wikia.nocookie.net/lookism/images/a/ad/Crystal_choi_icon.png/revision/latest/scale-to-width-down/320?cb=20200601184200",
    source: "https://lookism.fandom.com/wiki/Crystal_Choi"
  },
  doo: {
    url: "https://static.wikia.nocookie.net/lookism/images/f/f3/Doo_Lee_icon.png/revision/latest/scale-to-width-down/320?cb=20200601184627",
    source: "https://lookism.fandom.com/wiki/Doo_Lee"
  },
  gapryong: {
    url: "https://static.wikia.nocookie.net/lookism/images/5/5b/OldKimGapryong549.png/revision/latest?cb=20250403164918",
    source: "https://lookism.fandom.com/wiki/Gapryong_Kim"
  },
  shingen: {
    url: "https://static.wikia.nocookie.net/lookism/images/8/8f/525_UI_RE_Shingen.png/revision/latest?cb=20241024142217",
    source: "https://lookism.fandom.com/wiki/Shingen_Yamazaki"
  },
  mujin: {
    url: "https://static.wikia.nocookie.net/lookism/images/4/47/Mujin_Jin.png/revision/latest?cb=20260523005454",
    source: "https://lookism.fandom.com/wiki/Mujin_Jin"
  },
  james: {
    url: "https://static.wikia.nocookie.net/lookism/images/c/c1/JL555.png/revision/latest?cb=20250617071143",
    source: "https://lookism.fandom.com/wiki/Diego_Kang"
  },
  seongji: {
    url: "https://static.wikia.nocookie.net/lookism/images/e/e9/Seongji_Yook.jpeg/revision/latest?cb=20240105100557",
    source: "https://lookism.fandom.com/wiki/Seongji_Yuk"
  },
  jichang: {
    url: "https://static.wikia.nocookie.net/lookism/images/1/1b/Jichang_Kwak.png/revision/latest?cb=20231230071637",
    source: "https://lookism.fandom.com/wiki/Jichang_Kwak"
  },
  sophia: {
    url: "https://static.wikia.nocookie.net/lookism/images/1/1e/Sophia.png/revision/latest?cb=20210901032417",
    source: "https://lookism.fandom.com/wiki/Sophia_Alexander"
  },
  yujae: {
    url: "https://static.wikia.nocookie.net/lookism/images/0/0c/YujaeSeon582.png/revision/latest?cb=20251120174127",
    source: "https://lookism.fandom.com/wiki/Yujae_Seon"
  },
  ryuhei: {
    url: "https://static.wikia.nocookie.net/lookism/images/7/7b/Ryuhei.jpg/revision/latest?cb=20220312112808",
    source: "https://lookism.fandom.com/wiki/Ryuhei_Kuroda"
  },
  kenta: {
    url: "https://static.wikia.nocookie.net/lookism/images/0/0f/MagamiKenta.jpg/revision/latest?cb=20250101234327",
    source: "https://lookism.fandom.com/wiki/Kenta_Magami"
  },
  baekho: {
    url: "https://static.wikia.nocookie.net/lookism/images/9/9f/%EA%B6%8C%EB%B0%B1%ED%98%B8.png/revision/latest?cb=20230316194603",
    source: "https://lookism.fandom.com/wiki/Baekho_Kwon"
  },
  hansu: {
    url: "https://static.wikia.nocookie.net/manager-kim-manhwa/images/9/9c/Hansu_Seong_Infobox.png/revision/latest?cb=20220701030909",
    source: "https://manager-kim-manhwa.fandom.com/wiki/Hansu_Seong"
  },
  brekdak: {
    url: "https://static.wikia.nocookie.net/lookism/images/5/56/Brekdak.png/revision/latest?cb=20230831021657",
    source: "https://lookism.fandom.com/wiki/Brekdak"
  },
  shintaro: {
    url: "https://static.wikia.nocookie.net/lookism/images/0/08/Shintaro_527_.png/revision/latest?cb=20241114154240",
    source: "https://lookism.fandom.com/wiki/Shintaro_Yamazaki"
  },
  jaeha: {
    url: "https://static.wikia.nocookie.net/questism/images/2/22/127_jaeha_portrait_cropped.png/revision/latest?cb=20260222052558",
    source: "https://questism.fandom.com/wiki/Jaeha_Han"
  },
  seokdu: {
    url: "https://static.wikia.nocookie.net/lookism/images/e/e2/Screenshot_20221006-145057_Chrome.jpg/revision/latest?cb=20260522001600",
    source: "https://lookism.fandom.com/wiki/Seokdu_Wang"
  },
  taejin: {
    url: "https://static.wikia.nocookie.net/lookism/images/c/cf/Cheon_Taejin.jpg/revision/latest?cb=20230507084646",
    source: "https://lookism.fandom.com/wiki/Taejin_Cheon"
  },
  hangyeol: {
    url: "https://static.wikia.nocookie.net/lookism/images/a/ac/President.jpg/revision/latest?cb=20230917110855",
    source: "https://lookism.fandom.com/wiki/Gyeol_Baek"
  },
  jibeom: {
    url: "https://static.wikia.nocookie.net/lookism/images/2/26/Jibeom_Kwak.png/revision/latest?cb=20230505091519",
    source: "https://lookism.fandom.com/wiki/Jibeom_Kwak"
  },
  jihan: {
    url: "https://static.wikia.nocookie.net/lookism/images/8/82/Jihan_Kwak.jpg/revision/latest?cb=20230401063310",
    source: "https://lookism.fandom.com/wiki/Jihan_Kwak"
  },
  jiho: {
    url: "https://static.wikia.nocookie.net/lookism/images/7/77/Onenight.jpg/revision/latest?cb=20211208062531",
    source: "https://lookism.fandom.com/wiki/Jiho_Park"
  },
  paecheon: {
    url: "https://static.wikia.nocookie.net/lookism/images/0/0c/Paecheon_Ep_564_2.JPG/revision/latest?cb=20250906233301",
    source: WIKI_PAECHEON_URL
  },
  bongae: {
    url: "https://static.wikia.nocookie.net/lookism/images/3/30/ChoiBongae.png/revision/latest?cb=20230318005014",
    source: WIKI_BONGAE_URL
  },
  bakgu: {
    url: "https://static.wikia.nocookie.net/lookism/images/7/79/Bakgu.png/revision/latest?cb=20230315223809",
    source: WIKI_BAKGU_URL
  },
  jaegyeon: {
    url: "https://static.wikia.nocookie.net/lookism/images/a/ae/Changyeon_Na_%28Cheongliang_Arc%29.jpg/revision/latest?cb=20260209164000",
    source: WIKI_JAEGYEON_URL
  },
  samdak: {
    url: "https://static.wikia.nocookie.net/viral-hit/images/a/a6/Samdak.PNG/revision/latest?cb=20220502051946",
    source: "https://viral-hit.fandom.com/wiki/Samdak"
  },
  langJin: {
    url: "https://static.wikia.nocookie.net/lookism/images/3/3a/JRW574.png/revision/latest?cb=20260522012837",
    source: "https://lookism.fandom.com/wiki/Lang_Jin"
  },
  changsu: {
    url: "https://static.wikia.nocookie.net/lookism/images/0/0c/Changsu_Oh%28Current%29.png/revision/latest?cb=20251213090349",
    source: "https://lookism.fandom.com/wiki/Changsu_Oh"
  },
  yugang: {
    url: "https://static.wikia.nocookie.net/lookism/images/6/6f/Yugang_Ha_2.JPG/revision/latest?cb=20251114011820",
    source: "https://lookism.fandom.com/wiki/Yugang_Ha"
  },
  baekjin: {
    url: "https://static.wikia.nocookie.net/lookism/images/d/d4/UnknownBusan536.2.png/revision/latest?cb=20250103043807",
    source: "https://lookism.fandom.com/wiki/Baekjin_Hyeon"
  },
  jeongseok: {
    url: "https://static.wikia.nocookie.net/lookism/images/4/49/UnknownBusan536.1.png/revision/latest?cb=20250103043428",
    source: "https://lookism.fandom.com/wiki/Jeongseok_Hwang"
  },
  lineman: {
    url: "https://static.wikia.nocookie.net/lookism/images/a/a0/557_lineman_portrait.png/revision/latest?cb=20250605053052",
    source: "https://lookism.fandom.com/wiki/Lineman"
  },
  kazuma: {
    url: "https://static.wikia.nocookie.net/lookism/images/3/32/Kazuma.jpg/revision/latest?cb=20250102163506",
    source: "https://lookism.fandom.com/wiki/Sato_Kazuma"
  },
  kwakChungHo: {
    url: "https://static.wikia.nocookie.net/lookism/images/7/73/Chuckkwak.PNG/revision/latest?cb=20220711033134",
    source: "https://lookism.fandom.com/wiki/Chuck_Kwak"
  }
};

const LOCAL_IMAGES = {
  gapryong: "./lookism-assets/characters/gapryong.webp",
  uiDaniel: "./lookism-assets/characters/ui-daniel.webp",
  danielDual: "./lookism-assets/characters/daniel-dual.webp",
  pathDaniel: "./lookism-assets/characters/daniel-path.webp",
  shingen: "./lookism-assets/characters/shingen.webp",
  mujin: "./lookism-assets/characters/mujin.webp",
  james: "./lookism-assets/characters/james.webp",
  dg: "./lookism-assets/characters/dg.webp",
  kitae: "./lookism-assets/characters/kitae.webp",
  gun: "./lookism-assets/characters/gun.webp",
  gunCurrent: "./lookism-assets/characters/gun-current.webp",
  gunUnconscious: "./lookism-assets/characters/gun-unconscious.webp",
  goo: "./lookism-assets/characters/goo.webp",
  tom: "./lookism-assets/characters/tom.webp",
  seongji: "./lookism-assets/characters/seongji.webp",
  jinyoung: "./lookism-assets/characters/jinyoung.webp",
  charles: "./lookism-assets/characters/charles.webp",
  jichang: "./lookism-assets/characters/jichang.webp",
  sophia: "./lookism-assets/characters/sophia.webp",
  managerKim: "./lookism-assets/characters/manager-kim.webp",
  taesoo: "./lookism-assets/characters/taesoo.webp",
  yujae: "./lookism-assets/characters/yujae.webp",
  mandeok: "./lookism-assets/characters/mandeok.webp",
  xiaolong: "./lookism-assets/characters/xiaolong.webp",
  samuel: "./lookism-assets/characters/samuel.webp",
  jerry: "./lookism-assets/characters/jerry.webp",
  warren: "./lookism-assets/characters/warren.webp",
  olly: "./lookism-assets/characters/olly.webp",
  vin: "./lookism-assets/characters/vin.webp",
  zack: "./lookism-assets/characters/zack.webp",
  vasco: "./lookism-assets/characters/vasco.webp",
  eli: "./lookism-assets/characters/eli.webp",
  masteryEli: "./lookism-assets/characters/eli-mastery.webp",
  johan: "./lookism-assets/characters/johan.webp",
  pathJohan: "./lookism-assets/characters/johan-path.webp",
  jake: "./lookism-assets/characters/jake.webp",
  ryuhei: "./lookism-assets/characters/ryuhei.webp",
  kenta: "./lookism-assets/characters/kenta.webp",
  hudson: "./lookism-assets/characters/hudson.webp",
  logan: "./lookism-assets/characters/logan.webp",
  baekho: "./lookism-assets/characters/baekho.webp",
  hansu: "./lookism-assets/characters/hansu.webp",
  brekdak: "./lookism-assets/characters/brekdak.webp",
  shintaro: "./lookism-assets/characters/shintaro.webp",
  sinu: "./lookism-assets/characters/sinu.webp",
  jaeha: "./lookism-assets/characters/jaeha.webp",
  seokdu: "./lookism-assets/characters/seokdu.webp",
  gongseob: "./lookism-assets/characters/gongseob.webp",
  taejin: "./lookism-assets/characters/taejin.webp",
  hangyeol: "./lookism-assets/characters/hangyeol.webp",
  jibeom: "./lookism-assets/characters/jibeom.webp",
  jihan: "./lookism-assets/characters/jihan.webp",
  jiho: "./lookism-assets/characters/jiho.webp",
  jay: "./lookism-assets/characters/jay.webp",
  paecheon: "./lookism-assets/characters/paecheon.webp",
  bongae: "./lookism-assets/characters/bongae.webp",
  bakgu: "./lookism-assets/characters/bakgu.webp",
  jaegyeon: "./lookism-assets/characters/jaegyeon.webp"
};

const BACKGROUND_WALL_EXTENSIONS = ["png", "webp", "jpg", "jpeg"];
const BACKGROUND_WALL_IMAGES = Array.from({ length: 17 }, (_, index) => {
  const id = String(index + 1).padStart(2, "0");
  return {
    base: `./lookism-assets/backgrounds/lookism-bg-${id}`,
    label: `Lookism background ${id}`
  };
});

const MASTERY_META = {
  strength: {
    label: "Strength",
    color: "#ef3d3d",
    philosophy: "Break the opponent's structure with committed force and dense lower-body drive.",
    drills: ["Heavy hinge and squat clusters", "Medicine ball punch throws", "Heavy bag power rounds", "Wrist and shoulder armor work"]
  },
  speed: {
    label: "Speed",
    color: "#4ea5ff",
    philosophy: "Win the first beat: feet, eyes, and hips move before the opponent reads intent.",
    drills: ["10 m reaction starts", "Angle-step pad entries", "Capoeira ginga intervals", "Hand-speed shadow rounds"]
  },
  endurance: {
    label: "Endurance",
    color: "#4dd678",
    philosophy: "Make fatigue hit the other fighter first; stay accurate after punishment and long rounds.",
    drills: ["Roadwork base blocks", "Tempo bodyweight ladders", "Breathing under load", "Controlled body-shot conditioning"]
  },
  technique: {
    label: "Technique",
    color: "#c7d2df",
    philosophy: "Remove wasted motion until every block, step, grab, and counter has a reason.",
    drills: ["Slow kata precision", "Film-copy reps", "Clinch escape chains", "One-rule sparring"]
  },
  conviction: {
    label: "Conviction",
    color: "#a674ff",
    philosophy: "The emotional engine: purpose, rage, protection, or pride converted into repeatable output.",
    drills: ["Failure set with form cap", "Breath reset under stress", "Purpose journaling", "Last-round simulation"]
  },
  weapon: {
    label: "Weapon",
    color: "#f2bd48",
    philosophy: "Distance, timing, and threat management around objects instead of pure empty-hand exchange.",
    drills: ["Footwork lane drills", "Grip endurance", "Target-line defense", "Safe foam-weapon timing"]
  },
  ui: {
    label: "UI",
    color: "#ffffff",
    philosophy: "Automatic response under exhaustion; the body solves the exchange before thought slows it down.",
    drills: ["Exhaustion shadowboxing", "Decision-lag pad calls", "Cold technical sparring", "Eyes-open recovery breathing"]
  },
  path: {
    label: "Path",
    color: "#ff6b6b",
    philosophy: "A personal system no copy genius can fully steal because the movement is tied to identity.",
    drills: ["Signature chain design", "Constraint sparring", "Near-failure technical rounds", "Weekly fight notebook"]
  }
};

const ARCHETYPES = {
  "ui-copy": {
    label: "Copy + UI engine",
    style: "Perfect copy, adaptive martial arts, unconscious pressure.",
    analysis: "A top-rank adaptive fighter wins by becoming the worst matchup in real time. The focus is not one martial art, but rapid recognition, clean replication, and calm violence under fatigue.",
    routine: {
      power: ["Trap-bar deadlift 5x3", "Weighted push-up 5x5", "Rotational med-ball slam 5x6"],
      speed: ["Mirror footwork 6x90 sec", "Random pad calls 8x30 sec", "Angle exit sprints 10x10 m"],
      skill: ["Watch-copy-repeat 20 min", "One-technique sparring 5 rounds", "Breath reset after every exchange"]
    }
  },
  "speed-legend": {
    label: "Speed legend",
    style: "Invisible entries, angle theft, kick-heavy flow.",
    analysis: "This archetype denies clean reads. The fighter wins with blind-side entries, fast hips, and exits that make counters arrive late.",
    routine: {
      power: ["Jump squat 6x3", "Single-leg bounds 4x8", "Core anti-rotation 4x12"],
      speed: ["Capoeira ginga 12 min", "20 m acceleration 10 reps", "Blind-side pad entry 6 rounds"],
      skill: ["Kick feint chains 5 rounds", "Pocket-hand shadowboxing 4 rounds", "Evasion only sparring 4 rounds"]
    }
  },
  "wild-wall": {
    label: "Wild wall",
    style: "Instinct fighting, grip violence, crush-and-break pressure.",
    analysis: "A wild-wall fighter removes clean technique from the opponent by making the exchange ugly, heavy, and close. Grip, neck, hips, and balance matter more than pretty form.",
    routine: {
      power: ["Farmer carry 6x40 m", "Sandbag shoulder 5x5", "Heavy sled push 8x20 m"],
      speed: ["Clinch entry bursts 8x20 sec", "Sprawl to sprint 8 reps", "Grip switch intervals 5x60 sec"],
      skill: ["Pummeling 6 rounds", "Wall wrestling 5 rounds", "Unpredictable counter drill 4 rounds"]
    }
  },
  weapon: {
    label: "Weapon specialist",
    style: "Distance control, blade-like timing, object-based threat.",
    analysis: "Weapon users punish bad range. Empty-hand strength matters less than entry timing, line control, calm eyes, and grip endurance.",
    routine: {
      power: ["Pull-up density 20 reps", "Wrist roller 5 rounds", "Split squat 4x8"],
      speed: ["Lane footwork 12 min", "Foam-weapon tag 6 rounds", "Retreat-entry drill 5 rounds"],
      skill: ["Disarm mechanics 20 min", "Target-line defense 5 rounds", "Scenario awareness walk-through"]
    }
  },
  "king-strength": {
    label: "King strength",
    style: "One-punch philosophy, rooted stance, regional-king pressure.",
    analysis: "This path turns simple movement into a disaster. Power is trained as whole-body timing, not just bench numbers.",
    routine: {
      power: ["Back squat 5x5", "Bench press 5x3", "Heavy bag single-shot 10x5"],
      speed: ["Hip snap bands 5x12", "Short-step entry 8x30 sec", "Explosive push-up 5x8"],
      skill: ["One-punch setup rounds", "Guard-break counters", "Foot-rooting balance drill"]
    }
  },
  "iron-boxing": {
    label: "Iron boxing",
    style: "Absorb, reset, counter, and outlast.",
    analysis: "An iron boxer does not chase flash. The whole body becomes a pressure vessel that can keep punching after the opponent expects collapse.",
    routine: {
      power: ["Tempo bench 4x8", "Goblet squat 4x12", "Loaded carry 5x50 m"],
      speed: ["Rope skipping 6x2 min", "Counter after block 8x45 sec", "Short roll drill 5 rounds"],
      skill: ["Controlled body-shot conditioning", "Counter-only sparring", "Long guard endurance rounds"]
    }
  },
  "conviction-brawler": {
    label: "Conviction brawler",
    style: "Purpose-fueled pressure, heart rounds, ugly persistence.",
    analysis: "These fighters win because quitting is never part of the exchange. The training focus is repeat output while emotionally charged and physically tired.",
    routine: {
      power: ["Push-pull superset 5 rounds", "Tire slam 6x20", "Bear crawl 6x20 m"],
      speed: ["Hill sprint 8 reps", "Heavy bag flurry 8x20 sec", "Partner callout entries"],
      skill: ["Last-minute sparring simulation", "Protect-the-line drill", "Breath reset under shouting"]
    }
  },
  grappler: {
    label: "Grappler",
    style: "Throws, clinch control, takedowns, submission pressure.",
    analysis: "A grappler steals posture first. Once posture breaks, power and speed both become harder for the opponent to express.",
    routine: {
      power: ["Deadlift 5x3", "Rope climb 6 reps", "Zercher carry 5x25 m"],
      speed: ["Shot entry 10x2", "Hip switch 5x60 sec", "Grip break race 6 rounds"],
      skill: ["Clinch to trip chains", "Mat return reps", "Escape every bad position"]
    }
  },
  striker: {
    label: "Technical striker",
    style: "Boxing, kickboxing, Muay Thai, and sharp pocket control.",
    analysis: "Technical strikers keep the opponent making small errors. The best version combines clean guard, body rhythm, and counters that punish overreach.",
    routine: {
      power: ["Landmine press 4x8", "Lateral lunge 4x10", "Heavy bag 6x3 min"],
      speed: ["Double-end bag 6x2 min", "Slip-line entries 5 rounds", "Low-kick return drills"],
      skill: ["Jab-only sparring", "Body-head counter chains", "Footwork square drill"]
    }
  },
  crew: {
    label: "Crew enforcer",
    style: "Street pressure, teamwork, dirty-range survival.",
    analysis: "Crew fighters are not always elegant, but they understand chaos. Their advantage is conditioning, group pressure, and fast recovery after bad exchanges.",
    routine: {
      power: ["Circuit: squat, push, row 5 rounds", "Bag carry 4x60 m", "Grip finisher 4 rounds"],
      speed: ["Shuttle run 10 reps", "Reaction slap drill", "Close-range footwork 6 rounds"],
      skill: ["Two-on-one escape patterns", "Wall pin defense", "Controlled street-scenario sparring"]
    }
  }
};

const PDF_FIGHTER_DATABASE = [
  {
    rank: 1,
    name: "UI Big Daniel",
    aliases: ["UI Daniel Park", "Perfect Body", "Second Body Daniel", "Daniel Park"],
    faction: "J-High Allied",
    archetypeKey: "ui-copy",
    imageKey: "uiDaniel",
    primaryTechniques: "All Martial Arts",
    uniqueSkill: "Infinite Copy",
    masteriesAchieved: "Perfect Hardware / Software",
    combatPath: "Absolute Neutrality",
    masteryTags: ["copy", "ui", "technique", "speed", "strength", "endurance"],
    evolution: { vb: "Fat Daniel", b: "Basic Copy", i: "Heat Mode", a: "Systema / Gun Copy", e: "Perfect UI" }
  },
  {
    rank: 2,
    name: "Gapryong Kim",
    aliases: ["Legendary Leader of Fist Gang", "Gapryong Fist"],
    faction: "Gapryong Fist",
    archetypeKey: "conviction-brawler",
    imageKey: "gapryong",
    primaryTechniques: "Brawling / Boxing",
    uniqueSkill: "Hysterical Overcome",
    masteriesAchieved: "Conviction, Strength, Speed, Endurance, Technique",
    combatPath: "Path of Protection",
    masteryTags: ["conviction", "strength", "speed", "endurance", "technique", "path"],
    evolution: { vb: "Street Thug", b: "Gangster", i: "Fist Gang Boss", a: "Invisible Attack Counter", e: "Peak of Gen 0" }
  },
  {
    rank: 3,
    name: "Yamazaki Head",
    aliases: ["Head of Yamazaki Clan", "Yamazaki Clan Head"],
    faction: "Yamazaki Clan",
    archetypeKey: "ui-copy",
    imageKey: "shingen",
    primaryTechniques: "Kyokushin / Lethal Arts",
    uniqueSkill: "Bloodline UI",
    masteriesAchieved: "Shinnu UI, Strength, Endurance, Technique",
    combatPath: "Path of Conquest",
    masteryTags: ["ui", "strength", "endurance", "technique", "path"],
    evolution: { vb: "Clan Heir", b: "Yakuza Enforcer", i: "Syndicate Boss", a: "Great Power", e: "Ultimate Destroyer" }
  },
  {
    rank: 4,
    name: "James Lee",
    aliases: ["James Lee (Prime)", "DG", "Diego Kang", "The Legend"],
    faction: "First Generation / Ten Geniuses",
    archetypeKey: "speed-legend",
    imageKey: "james",
    primaryTechniques: "Capoeira / Taekwondo",
    uniqueSkill: "Invisible Attacks",
    masteriesAchieved: "Speed, Technique, Strength",
    combatPath: "One Man Generation",
    masteryTags: ["speed", "technique", "strength", "path"],
    evolution: { vb: "Genius Student", b: "First Gen Challenger", i: "Circle Breaker", a: "Peak of Gen 1", e: "The Legend" }
  },
  {
    rank: 5,
    name: "Charles Choi",
    aliases: ["Charles Choi (Prime)", "Elite", "HNH Group"],
    faction: "Fist Gang / HNH Group",
    archetypeKey: "speed-legend",
    imageKey: "charles",
    primaryTechniques: "Taekwondo / Agility",
    uniqueSkill: "Invisible Attacks",
    masteriesAchieved: "Speed, Technique",
    combatPath: "Ruthless Pragmatism",
    masteryTags: ["speed", "technique"],
    evolution: { vb: "Fighter", b: "Strategist", i: "Vice Boss", a: "Invisible Attack Originator", e: "Elite (Prime)" }
  },
  {
    rank: 6,
    name: "Gitae Kim",
    aliases: ["Kitae Kim", "King of Seoul", "Gapryong's son"],
    faction: "Mexico / Kim Bloodline",
    archetypeKey: "king-strength",
    imageKey: "kitae",
    primaryTechniques: "Brutality / Weaponry",
    uniqueSkill: "Dark Conviction",
    masteriesAchieved: "Dark Conviction, Strength, Endurance",
    combatPath: "Raw Brutality",
    masteryTags: ["conviction", "strength", "endurance", "weapon"],
    evolution: { vb: "Neglected Son", b: "Street Fighter", i: "Cartel Boss", a: "King of Seoul", e: "Apex Predator" }
  },
  {
    rank: 7,
    name: "Gun Park",
    aliases: ["White Ghost", "Yamazaki Jonggun"],
    faction: "Yamazaki / Ten Geniuses",
    archetypeKey: "ui-copy",
    imageKey: "gun",
    primaryTechniques: "Kyokushin / Aikido",
    uniqueSkill: "Unconscious UI",
    masteriesAchieved: "UI, Strength, Endurance, Technique",
    combatPath: "Yamazaki Shield",
    masteryTags: ["ui", "strength", "endurance", "technique"],
    evolution: { vb: "Clan Prisoner", b: "Prison Demon", i: "White Ghost", a: "Nurture Genius", e: "Shinnu UI" }
  },
  {
    rank: 8,
    name: "Goo Kim",
    aliases: ["Secret Friend", "Weapon Genius"],
    faction: "Ten Geniuses",
    archetypeKey: "weapon",
    imageKey: "goo",
    primaryTechniques: "Weaponizing Objects",
    uniqueSkill: "Instant Lethality",
    masteriesAchieved: "Technique, Speed, Weapon Mastery",
    combatPath: "The Lethal Blade",
    masteryTags: ["weapon", "technique", "speed"],
    evolution: { vb: "Bully", b: "Kendo Trainee", i: "Secret Friend", a: "Weapon Genius", e: "Twin Swords / Katana" }
  },
  {
    rank: 9,
    name: "Tom Lee",
    aliases: ["Fighting Genius", "Dogyu Lee"],
    faction: "White Tiger Job Centre",
    archetypeKey: "wild-wall",
    imageKey: "tom",
    primaryTechniques: "Brawling / Wildness",
    uniqueSkill: "Demonic Charge",
    masteriesAchieved: "Strength, Speed, Endurance, Technique",
    combatPath: "Demonic Miser",
    masteryTags: ["strength", "speed", "endurance", "technique", "path"],
    evolution: { vb: "Beggar", b: "Street Brawler", i: "Fighting Genius", a: "Wildness Master", e: "Ultimate King (Prime)" }
  },
  {
    rank: 10,
    name: "Jinyoung Park",
    aliases: ["Fist Gang Copycat", "Copy Genius"],
    faction: "Gapryong Fist",
    archetypeKey: "ui-copy",
    imageKey: "jinyoung",
    primaryTechniques: "MMA / Copy",
    uniqueSkill: "Copy Talent",
    masteriesAchieved: "Technique, Speed, Copy",
    combatPath: "Infinite Adaptation",
    masteryTags: ["copy", "technique", "speed"],
    evolution: { vb: "Medical Student", b: "Street Fighter", i: "Action Chief", a: "Copy Genius", e: "3-Gen Copy Master" }
  },
  {
    rank: 11,
    name: "Mujin Jin",
    aliases: ["Legend of Ssireum", "Equal to Gapryong"],
    faction: "Cheonliang",
    archetypeKey: "grappler",
    imageKey: "mujin",
    primaryTechniques: "Ssireum / Wrestling",
    uniqueSkill: "Iron Grip",
    masteriesAchieved: "Strength, Endurance, Ssireum",
    combatPath: "Endless Horizons",
    masteryTags: ["strength", "endurance", "technique", "path"],
    evolution: { vb: "Wrestler", b: "Wanderer", i: "Legend of Ssireum", a: "Multi-Threshold", e: "3-Threshold Master" }
  },
  {
    rank: 12,
    name: "Seongji Yuk",
    aliases: ["King of Cheonliang", "Seongji Yook"],
    faction: "First Generation",
    archetypeKey: "grappler",
    imageKey: "seongji",
    primaryTechniques: "Kudo / Ssireum",
    uniqueSkill: "Six Fingers",
    masteriesAchieved: "Strength, Speed, Durability",
    combatPath: "Cheonliang Guardian",
    masteryTags: ["strength", "speed", "endurance", "technique"],
    evolution: { vb: "Sacrificial Child", b: "Mujin's Disciple", i: "Kudo Trainee", a: "King of Cheonliang", e: "3-Mastery Guardian" }
  },
  {
    rank: 13,
    name: "Shingen Yamazaki",
    aliases: ["Yamazaki Shingen", "Yamazaki top tier"],
    faction: "Yamazaki Clan",
    archetypeKey: "ui-copy",
    imageKey: "shingen",
    primaryTechniques: "Kyokushin",
    uniqueSkill: "UI State",
    masteriesAchieved: "UI, Strength, Endurance",
    combatPath: "Yakuza Hardware",
    masteryTags: ["ui", "strength", "endurance", "technique"],
    evolution: { vb: "Enforcer", b: "Syndicate Fighter", i: "Clan Executive", a: "Top Tier Yamazaki", e: "Unyielding Demon" }
  },
  {
    rank: 14,
    name: "Manager Kim",
    aliases: ["Kim Bujang", "SMK", "Elite Agent"],
    faction: "White Tiger Job Centre",
    archetypeKey: "weapon",
    imageKey: "managerKim",
    primaryTechniques: "CQC / Jeet Kune Do",
    uniqueSkill: "Wire Arts",
    masteriesAchieved: "Technique, Speed, CQC",
    combatPath: "Hidden Dragon",
    masteryTags: ["weapon", "technique", "speed"],
    evolution: { vb: "Soldier", b: "Special Forces", i: "Ghost Platoon", a: "CQC Master", e: "Wire Assassin (Prime)" }
  },
  {
    rank: 15,
    name: "Samdak",
    aliases: ["How to Fight mentor", "Mythology Counter"],
    faction: "PTJ Connected",
    archetypeKey: "striker",
    imageKey: "samdak",
    primaryTechniques: "MMA / Counters",
    uniqueSkill: "Mythology Counter",
    masteriesAchieved: "Technique, Counter Mastery",
    combatPath: "Mythological Counter",
    masteryTags: ["technique", "endurance", "path"],
    evolution: { vb: "Recruit", b: "Soldier", i: "Ghost Platoon Legend", a: "Travel Streamer", e: "Unbeaten Myth" }
  },
  {
    rank: 16,
    name: "Lang Jin",
    aliases: ["Jinrang", "Iron Elbow"],
    faction: "Busan / Conviction Route",
    archetypeKey: "conviction-brawler",
    imageKey: "langJin",
    primaryTechniques: "Muay Thai / Brawling",
    uniqueSkill: "Iron Elbow",
    masteriesAchieved: "Conviction / Overcome",
    combatPath: "Iron Elbow Bypass",
    masteryTags: ["conviction", "strength", "technique"],
    evolution: { vb: "Trainee", b: "Fighter", i: "Gangster", a: "Mastery Breaker", e: "Conviction Striker" }
  },
  {
    rank: 17,
    name: "Changsu Oh",
    aliases: ["Money Demon", "Mixed Weaponry"],
    faction: "Pre-Generation",
    archetypeKey: "weapon",
    imageKey: "changsu",
    primaryTechniques: "Mixed Weaponry",
    uniqueSkill: "Money Demon",
    masteriesAchieved: "Strength, Endurance, Technique, Speed",
    combatPath: "Miser Counterattack",
    masteryTags: ["weapon", "strength", "endurance", "technique", "speed"],
    evolution: { vb: "Thug", b: "Enforcer", i: "Weapon User", a: "Multi-Mastery", e: "4-Mastery King" }
  },
  {
    rank: 18,
    name: "Jichang Kwak",
    aliases: ["White Snake", "King of Chungcheong"],
    faction: "First Generation",
    archetypeKey: "striker",
    imageKey: "jichang",
    primaryTechniques: "Hand-Chop / Strategy",
    uniqueSkill: "Tactical IQ",
    masteriesAchieved: "Speed, Strategy, Hand-Chop",
    combatPath: "Tactical King",
    masteryTags: ["speed", "technique", "strength"],
    evolution: { vb: "Student", b: "Fighter", i: "King of Seoul", a: "King of Chungcheong", e: "White Snake" }
  },
  {
    rank: 19,
    name: "OG Daniel Park",
    aliases: ["Original Daniel", "Little Daniel", "Daniel Park"],
    faction: "J-High Allied",
    archetypeKey: "ui-copy",
    imageKey: "daniel",
    primaryTechniques: "All Martial Arts",
    uniqueSkill: "Systema / Copy",
    masteriesAchieved: "Copy, Speed, Technique, Personal Path",
    combatPath: "Original UI Evolution",
    masteryTags: ["copy", "ui", "speed", "technique", "path"],
    evolution: { vb: "Fat Victim", b: "Slim Trainee", i: "Gun's Disciple", a: "First Gen Copy", e: "OG UI State / Own Path" }
  },
  {
    rank: 20,
    name: "Johan Seong",
    aliases: ["God Dog", "Copycat", "Infinite Copy"],
    faction: "God Dog",
    archetypeKey: "ui-copy",
    imageKey: "johan",
    primaryTechniques: "Boxing / Taekwondo",
    uniqueSkill: "Infinite Copy",
    masteriesAchieved: "Copy, Speed, Pure Software",
    combatPath: "The Lone Path",
    masteryTags: ["copy", "speed", "technique", "path"],
    evolution: { vb: "Blind Boy", b: "God Dog", i: "Crew Head", a: "UI Copy (10s)", e: "Infinite Convergence" }
  },
  {
    rank: 21,
    name: "Jaegyeon Na",
    aliases: ["King of Incheon", "Jaegyeon"],
    faction: "First Generation",
    archetypeKey: "speed-legend",
    imageKey: "jaegyeon",
    primaryTechniques: "Taekwondo / Kicks",
    uniqueSkill: "Death Kick",
    masteriesAchieved: "Speed, Technique",
    combatPath: "Flawless Agility",
    masteryTags: ["speed", "technique", "path"],
    evolution: { vb: "Runner", b: "Kicker", i: "Fighter", a: "King of Incheon", e: "Uncatchable Agility" }
  },
  {
    rank: 22,
    name: "Taesoo Ma",
    aliases: ["King of Ansan", "Iron Fist"],
    faction: "First Generation",
    archetypeKey: "king-strength",
    imageKey: "taesoo",
    primaryTechniques: "Pure Boxing (Right)",
    uniqueSkill: "Iron Fist",
    masteriesAchieved: "Strength Mastery",
    combatPath: "Unyielding Right Hand",
    masteryTags: ["strength", "conviction"],
    evolution: { vb: "Brawler", b: "Boxer", i: "King of Ansan", a: "Eye-patch King", e: "Ultimate Single Fist" }
  },
  {
    rank: 23,
    name: "Gongseob Ji",
    aliases: ["King of Daegu", "Iron Boxing"],
    faction: "First Generation",
    archetypeKey: "iron-boxing",
    imageKey: "gongseob",
    primaryTechniques: "Boxing / Iron Body",
    uniqueSkill: "Counter Strike",
    masteriesAchieved: "Endurance, Speed",
    combatPath: "One Step One Kill",
    masteryTags: ["endurance", "speed", "technique"],
    evolution: { vb: "Monk Trainee", b: "Boxer", i: "King of Daegu", a: "Iron Fortress", e: "Counter-Master" }
  },
  {
    rank: 24,
    name: "Jake Kim",
    aliases: ["Big Deal", "Gapryong's Legacy"],
    faction: "Big Deal",
    archetypeKey: "conviction-brawler",
    imageKey: "jake",
    primaryTechniques: "MMA / Brawling",
    uniqueSkill: "Father's Blood",
    masteriesAchieved: "Conviction / Overcome, Strength",
    combatPath: "The Dragon's Fist",
    masteryTags: ["conviction", "strength", "endurance"],
    evolution: { vb: "MMA Trainee", b: "Big Deal No.2", i: "Prison Boss", a: "Purple Eyes", e: "Gapryong's Legacy" }
  },
  {
    rank: 25,
    name: "Paecheon Jo",
    aliases: ["Dark Crocodile", "Black Blood", "Paecheon"],
    faction: "Pre-Generation",
    archetypeKey: "wild-wall",
    imageKey: "paecheon",
    primaryTechniques: "Brawling",
    uniqueSkill: "Black Blood",
    masteriesAchieved: "Endurance Mastery",
    combatPath: "Accelerated Regen",
    masteryTags: ["endurance", "strength", "conviction"],
    evolution: { vb: "Delinquent", b: "Gangster", i: "Brawler", a: "Black Blood Awakening", e: "Healing Tank" }
  },
  {
    rank: 26,
    name: "Yujae Seon",
    aliases: ["Yujae", "Counter-Feint"],
    faction: "First Generation",
    archetypeKey: "speed-legend",
    imageKey: "yujae",
    primaryTechniques: "Agility / Feints",
    uniqueSkill: "Counter-Feint",
    masteriesAchieved: "Speed, Technique",
    combatPath: "Feint Variation",
    masteryTags: ["speed", "technique"],
    evolution: { vb: "Athlete", b: "Fighter", i: "Street Legend", a: "Feint Master", e: "Evasive Striker" }
  },
  {
    rank: 27,
    name: "Zack Lee",
    aliases: ["Blue Eyes", "Iron Fortress"],
    faction: "J-High Allied",
    archetypeKey: "iron-boxing",
    imageKey: "zack",
    primaryTechniques: "In-Fighter Boxing",
    uniqueSkill: "Iron Fortress",
    masteriesAchieved: "Endurance, Speed",
    combatPath: "The Boxer's Path",
    masteryTags: ["endurance", "speed", "technique"],
    evolution: { vb: "Bully", b: "Depressed Boxer", i: "Heat Mode", a: "Iron Fortress", e: "Speed-Counter Boxer" }
  },
  {
    rank: 28,
    name: "Vasco",
    aliases: ["Euntae Lee", "Runner's High", "Brekdak's Legacy"],
    faction: "Burn Knuckles",
    archetypeKey: "conviction-brawler",
    imageKey: "vasco",
    primaryTechniques: "Muay Thai",
    uniqueSkill: "Hero Mode",
    masteriesAchieved: "Strength, Endurance",
    combatPath: "Brekdak's Legacy",
    masteryTags: ["strength", "endurance", "conviction"],
    evolution: { vb: "Weak Victim", b: "Burn Knuckles", i: "Bear Trainee", a: "Forbidden Skills", e: "Hero Mode Master" }
  },
  {
    rank: 29,
    name: "Eli Jang",
    aliases: ["Hostel", "Wildness"],
    faction: "Hostel",
    archetypeKey: "wild-wall",
    imageKey: "eli",
    primaryTechniques: "Wildness / Aikido",
    uniqueSkill: "Dual Batons",
    masteriesAchieved: "Technique, Animal Instinct",
    combatPath: "Path of the Provider",
    masteryTags: ["technique", "path", "weapon"],
    evolution: { vb: "Runaway", b: "Hostel Head", i: "Tom Lee Disciple", a: "Baton Master", e: "Pure Wildness" }
  },
  {
    rank: 30,
    name: "Samuel Seo",
    aliases: ["Heat Mode", "Controlled Rage"],
    faction: "Workers / Big Deal",
    archetypeKey: "king-strength",
    imageKey: "samuel",
    primaryTechniques: "Brawling / Dirty",
    uniqueSkill: "Controlled Rage",
    masteriesAchieved: "Endurance Mastery",
    combatPath: "Path of Inferiority",
    masteryTags: ["endurance", "conviction", "strength"],
    evolution: { vb: "Gangnam Thug", b: "AC Repair", i: "Heat Mode", a: "Workers Exec", e: "Infinite Durability" }
  },
  {
    rank: 31,
    name: "Ryuhei Kuroda",
    aliases: ["Kagiroi", "Magician", "Kanto Boss"],
    faction: "Workers 2A",
    archetypeKey: "weapon",
    imageKey: "ryuhei",
    primaryTechniques: "Biker Brawling",
    uniqueSkill: "Kagiroi",
    masteriesAchieved: "Speed Mastery",
    combatPath: "Kagura Fireworks",
    masteryTags: ["speed", "conviction", "weapon"],
    evolution: { vb: "Biker", b: "Kanto Boss", i: "Commando", a: "Kagiroi State", e: "Fireworks Master" }
  },
  {
    rank: 32,
    name: "Sinu Han",
    aliases: ["Boy of Promise", "Invisible Attacks"],
    faction: "Big Deal",
    archetypeKey: "speed-legend",
    imageKey: "sinu",
    primaryTechniques: "Taekwondo / MMA",
    uniqueSkill: "Boy of Promise",
    masteriesAchieved: "Speed Mastery / Partial IA",
    combatPath: "Blind Spot Striker",
    masteryTags: ["speed", "technique"],
    evolution: { vb: "Street Kid", b: "Big Deal Head", i: "God of Combat", a: "Invisible Attacks", e: "The Boy of Promise" }
  },
  {
    rank: 33,
    name: "Warren Chae",
    aliases: ["New CQC", "Hostel Uncle"],
    faction: "Hostel",
    archetypeKey: "striker",
    imageKey: "warren",
    primaryTechniques: "Jeet Kune Do",
    uniqueSkill: "New CQC",
    masteriesAchieved: "Technique Mastery",
    combatPath: "Heart-Stop Path",
    masteryTags: ["technique", "speed", "endurance"],
    evolution: { vb: "Runaway", b: "Hostel Uncle", i: "JKD Trainee", a: "SMK Disciple", e: "New CQC Master" }
  },
  {
    rank: 34,
    name: "Mandeok Bang",
    aliases: ["Bang Mandeok", "Workers Sword", "Mandeok"],
    faction: "Workers",
    archetypeKey: "king-strength",
    imageKey: "mandeok",
    primaryTechniques: "Capoeira",
    uniqueSkill: "Super Strength",
    masteriesAchieved: "Strength Mastery",
    combatPath: "Gravity Striker",
    masteryTags: ["strength", "technique", "endurance"],
    evolution: { vb: "Student", b: "Brawler", i: "Workers Sword", a: "Capoeira Secret", e: "Peak Heavyweight" }
  },
  {
    rank: 35,
    name: "Yuseong",
    aliases: ["Yuseong Yoo", "Smiling Demon", "Crying Beast"],
    faction: "Workers VVIP",
    archetypeKey: "wild-wall",
    imageKey: "yuseong",
    primaryTechniques: "Instinctual Fighting",
    uniqueSkill: "Instinctive Genius",
    masteriesAchieved: "Speed, Agility Path",
    combatPath: "Feral Adaptation",
    masteryTags: ["speed", "path", "technique"],
    evolution: { vb: "Hidden Twin", b: "VVIP", i: "Smiling Demon", a: "Crying Beast", e: "Adaptable Predator" }
  },
  {
    rank: 36,
    name: "Hudson Ahn",
    aliases: ["Sun of Ansan", "Taesoo's Disciple"],
    faction: "Allied",
    archetypeKey: "king-strength",
    imageKey: "hudson",
    primaryTechniques: "Single-Fist Boxing",
    uniqueSkill: "Sun of Ansan",
    masteriesAchieved: "Strength Mastery",
    combatPath: "Unyielding Conviction",
    masteryTags: ["strength", "conviction"],
    evolution: { vb: "Trainee", b: "Taesoo's Disciple", i: "Ansan Sun", a: "Left Hand Mix", e: "Pure Right Hand" }
  },
  {
    rank: 37,
    name: "Jerry Kwon",
    aliases: ["Sword of Jake", "Big Deal Enforcer"],
    faction: "Big Deal",
    archetypeKey: "king-strength",
    imageKey: "jerry",
    primaryTechniques: "Out-Fighter Boxing",
    uniqueSkill: "Protector Mode",
    masteriesAchieved: "Strength Mastery",
    combatPath: "Sword of Jake",
    masteryTags: ["strength", "endurance", "conviction"],
    evolution: { vb: "Brawler", b: "Big Deal Enforcer", i: "Boxing Trainee", a: "Protector Mode", e: "Legacy Boxer" }
  },
  {
    rank: 38,
    name: "Jay Hong",
    aliases: ["Systema / Kali Arnis", "Sophia's Disciple", "Hong Jay"],
    faction: "J-High Allied",
    archetypeKey: "weapon",
    imageKey: "jay",
    primaryTechniques: "Systema / Kali Arnis",
    uniqueSkill: "Lethal Extraction",
    masteriesAchieved: "Weapon Mastery",
    combatPath: "Absolute Lethality",
    masteryTags: ["weapon", "technique", "speed"],
    evolution: { vb: "Silent Kid", b: "Kali Arnis", i: "Systema", a: "Sophia's Disciple", e: "Dual Sword Systema" }
  },
  {
    rank: 39,
    name: "Jihan Kwak",
    aliases: ["Kwak Jichang's Brother", "Jihan", "Chungcheong Sub"],
    faction: "Kwak Family",
    archetypeKey: "striker",
    imageKey: "jihan",
    primaryTechniques: "Hand-Chop",
    uniqueSkill: "Strategy",
    masteriesAchieved: "Hand-Chop Path",
    combatPath: "Strategy Striker",
    masteryTags: ["technique", "speed"],
    evolution: { vb: "Student", b: "Chungcheong Sub", i: "Hand-Chop Heir", a: "Tactical Fighter", e: "Strategic Chop" }
  },
  {
    rank: 40,
    name: "Jibeom Kwak",
    aliases: ["Kwak Jibeom", "Bear Trap"],
    faction: "Kwak Family",
    archetypeKey: "king-strength",
    imageKey: "jibeom",
    primaryTechniques: "Brutal Brawling",
    uniqueSkill: "Bear Trap",
    masteriesAchieved: "Brutal Strength",
    combatPath: "Street Boxing",
    masteryTags: ["strength", "technique"],
    evolution: { vb: "Student", b: "Rural Brawler", i: "Chungcheong Sub", a: "Bear Grip", e: "Brutal Striker" }
  },
  {
    rank: 41,
    name: "Kwak Chung-ho",
    aliases: ["Chung-ho Kwak", "Kwak Cheongho", "Chuck Kwak", "Thick Skin"],
    faction: "Kwak Family",
    archetypeKey: "wild-wall",
    imageKey: "kwakChungHo",
    primaryTechniques: "Brawling",
    uniqueSkill: "Thick Skin",
    masteriesAchieved: "Regional Executive Hardware",
    combatPath: "Tank Path",
    masteryTags: ["endurance", "strength"],
    evolution: { vb: "Thug", b: "Brawler", i: "Executive", a: "Sub-King", e: "Endurance Tank" }
  },
  {
    rank: 42,
    name: "Vin Jin",
    aliases: ["Cheonliang Grip", "Bone Crusher"],
    faction: "J-High / Cheonliang",
    archetypeKey: "grappler",
    imageKey: "vin",
    primaryTechniques: "Kudo / Judo",
    uniqueSkill: "Grip Strength",
    masteriesAchieved: "Kudo Mastery",
    combatPath: "Cheonliang Grip",
    masteryTags: ["strength", "technique", "endurance"],
    evolution: { vb: "Bullied Kid", b: "Middle School Boss", i: "Cheonliang Trainee", a: "Sunglasses Off", e: "Bone Crusher" }
  },
  {
    rank: 43,
    name: "Taejin Cheon",
    aliases: ["Cheon Taejin", "Sinister Kudo"],
    faction: "Cheonliang / Workers",
    archetypeKey: "grappler",
    imageKey: "taejin",
    primaryTechniques: "Kudo",
    uniqueSkill: "Sinister Synergy",
    masteriesAchieved: "Kudo Path",
    combatPath: "Hell Trainee",
    masteryTags: ["strength", "technique"],
    evolution: { vb: "Rich Kid", b: "Cheonliang Rival", i: "Hell Trainee", a: "Workers Exec", e: "Sinister Kudo" }
  },
  {
    rank: 44,
    name: "Yugang Ha",
    aliases: ["Ha Yugang", "Feint Origin"],
    faction: "Regional Powerhouse",
    archetypeKey: "striker",
    imageKey: "yugang",
    primaryTechniques: "MMA",
    uniqueSkill: "Feint Origination",
    masteriesAchieved: "Technique Mastery",
    combatPath: "Feint Origin",
    masteryTags: ["technique", "speed"],
    evolution: { vb: "Gym Rat", b: "Fighter", i: "Feint User", a: "Feint Master", e: "Master of Deception" }
  },
  {
    rank: 45,
    name: "Baekjin Hyeon",
    aliases: ["Hyeon Baekjin", "Kinetic Thrust"],
    faction: "Regional Powerhouse",
    archetypeKey: "king-strength",
    imageKey: "baekjin",
    primaryTechniques: "Brawling",
    uniqueSkill: "Kinetic Thrust",
    masteriesAchieved: "Single Mastery",
    combatPath: "Kinetic Force",
    masteryTags: ["strength", "technique"],
    evolution: { vb: "Brawler", b: "Street Fighter", i: "Thug Boss", a: "Mastery Awakening", e: "Thrust Striker" }
  },
  {
    rank: 46,
    name: "Jeongseok Hwang",
    aliases: ["Hwang Jeongseok", "Tactical Defense"],
    faction: "Regional Powerhouse",
    archetypeKey: "iron-boxing",
    imageKey: "jeongseok",
    primaryTechniques: "Defensive Boxing",
    uniqueSkill: "Tactical Defense",
    masteriesAchieved: "Single Mastery",
    combatPath: "Tactical Endurance",
    masteryTags: ["endurance", "technique"],
    evolution: { vb: "Boxer", b: "Defensive Fighter", i: "Tank", a: "Mastery Awakening", e: "Unbreakable Wall" }
  },
  {
    rank: 47,
    name: "Lineman",
    aliases: ["Big Deal Lineman", "Sinu's Protege"],
    faction: "Big Deal",
    archetypeKey: "speed-legend",
    imageKey: "lineman",
    primaryTechniques: "Brawling / Agility",
    uniqueSkill: "Lightning Speed",
    masteriesAchieved: "Speed Path",
    combatPath: "Sinu's Protege",
    masteryTags: ["speed", "technique"],
    evolution: { vb: "Fodder", b: "Big Deal Spy", i: "Trainee", a: "Speed Awakening", e: "Lightning Striker" }
  },
  {
    rank: 48,
    name: "Logan Lee",
    aliases: ["Adaptive Body", "Tank Grappler"],
    faction: "Workers / J-High",
    archetypeKey: "grappler",
    imageKey: "logan",
    primaryTechniques: "Grappling / BJJ",
    uniqueSkill: "Adaptive Body",
    masteriesAchieved: "Endurance Archetype",
    combatPath: "Adaptive Grappling",
    masteryTags: ["endurance", "strength", "technique"],
    evolution: { vb: "Bully", b: "Grappler", i: "Jikjjang", a: "Secret Friend", e: "Tank Grappler" }
  },
  {
    rank: 49,
    name: "Kenta Magami",
    aliases: ["Magami Kenta", "Red Eyes"],
    faction: "Workers 2A",
    archetypeKey: "striker",
    imageKey: "kenta",
    primaryTechniques: "Kyokushin",
    uniqueSkill: "Red Eyes",
    masteriesAchieved: "Iron Fist / Vengeance",
    combatPath: "Vengeance Path",
    masteryTags: ["conviction", "strength", "technique"],
    evolution: { vb: "Magami Heir", b: "Survivor", i: "Executive", a: "Red Eyes", e: "Iron Fist Karate" }
  },
  {
    rank: 50,
    name: "Kazuma",
    aliases: ["Sumo Hardware", "Yokozuna Path"],
    faction: "Workers",
    archetypeKey: "wild-wall",
    imageKey: "kazuma",
    primaryTechniques: "Sumo",
    uniqueSkill: "Pure Mass",
    masteriesAchieved: "Sumo Hardware",
    combatPath: "Yokozuna Path",
    masteryTags: ["strength", "endurance"],
    evolution: { vb: "Wrestler", b: "Sumo Trainee", i: "Executive", a: "Mass Tank", e: "Peak Sumo" }
  }
];

const EXTENDED_FIGHTER_DATABASE = [
  {
    rank: 51,
    tier: "Extended Archive · Grappler",
    name: "Sophia",
    aliases: ["Sophia Alexander", "Jay's Teacher", "Security Bodyguard"],
    faction: "Hong Family / Security",
    archetypeKey: "grappler",
    imageKey: "sophia",
    primaryTechniques: "Systema / Kali Arnis / Grappling",
    uniqueSkill: "Bodyguard Control",
    masteriesAchieved: "Weapon, Technique, Grappling Control",
    combatPath: "Security Combat Path",
    masteryTags: ["weapon", "technique", "strength", "endurance"],
    evolution: { vb: "Security trainee", b: "Systema base", i: "Kali-Arnis weapon control", a: "Elite bodyguard", e: "Bodyguard control specialist" }
  },
  {
    rank: 52,
    tier: "Extended Archive · Weapon",
    name: "Xiaolong",
    aliases: ["Vivi's Guard", "Guandao User", "Workers Guard"],
    faction: "Workers / Vivi",
    archetypeKey: "weapon",
    imageKey: "xiaolong",
    primaryTechniques: "Chinese Martial Arts / Guandao / Staff",
    uniqueSkill: "Long-Weapon Guard",
    masteriesAchieved: "Weapon Mastery, Technique, Endurance",
    combatPath: "Loyal Guard Path",
    masteryTags: ["weapon", "technique", "endurance"],
    evolution: { vb: "Guard trainee", b: "Staff footwork", i: "Guandao range control", a: "Workers guardian", e: "Long-weapon specialist" }
  },
  {
    rank: 53,
    tier: "Extended Archive · Conviction",
    name: "Olly Wang",
    aliases: ["Hostel A", "Pain Nullification", "Runaway Leader"],
    faction: "Hostel",
    archetypeKey: "conviction-brawler",
    imageKey: "olly",
    primaryTechniques: "Aikido / Street Brawling / Pain Tolerance",
    uniqueSkill: "Pain Nullification",
    masteriesAchieved: "Conviction, Endurance, Wildness",
    combatPath: "Hostel Tragedy Path",
    masteryTags: ["conviction", "endurance", "technique"],
    evolution: { vb: "Runaway kid", b: "Hostel imitation", i: "Pain tolerance brawler", a: "Hostel A head", e: "Tragic conviction fighter" }
  },
  {
    rank: 54,
    tier: "Extended Archive · Wild Wall",
    name: "Baekho Kwon",
    aliases: ["Gapryong's Shield", "Kwon Baekho", "Fist Gang Shield"],
    faction: "Gapryong Fist",
    archetypeKey: "wild-wall",
    imageKey: "baekho",
    primaryTechniques: "Shield Brawling / Power Guard",
    uniqueSkill: "Gapryong's Shield",
    masteriesAchieved: "Strength, Endurance, Conviction",
    combatPath: "Shield of Protection",
    masteryTags: ["strength", "endurance", "conviction"],
    evolution: { vb: "Street protector", b: "Fist Gang muscle", i: "Gapryong's guard", a: "Shield enforcer", e: "Legendary shield" }
  },
  {
    rank: 55,
    tier: "Extended Archive · Technical Striker",
    name: "Hansu Seong",
    aliases: ["Taehoon Seong's Father", "Taekwondo Master", "Manager Kim Verse"],
    faction: "Military / Seong Family",
    archetypeKey: "striker",
    imageKey: "hansu",
    primaryTechniques: "Taekwondo / Kyokushin / Military Striking",
    uniqueSkill: "Taekwondo Killing Rhythm",
    masteriesAchieved: "Technique, Speed, Endurance",
    combatPath: "Military Striker Path",
    masteryTags: ["technique", "speed", "endurance"],
    evolution: { vb: "Taekwondo student", b: "Tournament striker", i: "Military fighter", a: "Elite combat parent", e: "Kicking master" }
  },
  {
    rank: 56,
    tier: "Extended Archive · Conviction",
    name: "Brekdak",
    aliases: ["Muay Thai Champion", "Vasco's Teacher", "Forbidden Techniques"],
    faction: "Thailand / Burn Knuckles Mentor",
    archetypeKey: "conviction-brawler",
    imageKey: "brekdak",
    primaryTechniques: "Muay Thai / Clinch / Forbidden Skills",
    uniqueSkill: "Brekdak Forbidden Techniques",
    masteriesAchieved: "Strength, Endurance, Technique, Conviction",
    combatPath: "Muay Thai Mentor Path",
    masteryTags: ["strength", "endurance", "technique", "conviction"],
    evolution: { vb: "Muay Thai beginner", b: "Ring fighter", i: "Champion pressure", a: "Forbidden technique mentor", e: "Muay Thai legend" }
  },
  {
    rank: 57,
    tier: "Extended Archive · Yamazaki",
    name: "Shintaro Yamazaki",
    aliases: ["Shingen's Brother", "Yamazaki Executive", "Reverse Eyes"],
    faction: "Yamazaki Clan",
    archetypeKey: "ui-copy",
    imageKey: "shintaro",
    primaryTechniques: "Yamazaki Kyokushin / Clan Enforcement",
    uniqueSkill: "Yamazaki Bloodline Pressure",
    masteriesAchieved: "Technique, Strength, Endurance, UI Lineage",
    combatPath: "Yamazaki Succession Path",
    masteryTags: ["ui", "technique", "strength", "endurance"],
    evolution: { vb: "Clan heir candidate", b: "Kyokushin enforcer", i: "Yamazaki executive", a: "Bloodline pressure", e: "Succession demon" }
  },
  {
    rank: 58,
    tier: "Extended Archive · Crew",
    name: "Jaeha Kim",
    aliases: ["Jaeha Han", "Questism striker", "Gangbuk strategist"],
    faction: "Questism / Gangbuk",
    archetypeKey: "striker",
    imageKey: "jaeha",
    primaryTechniques: "Taekwondo / Street Strategy",
    uniqueSkill: "Calculated Kicking Pressure",
    masteriesAchieved: "Speed, Technique, Strategy",
    combatPath: "Gangbuk Strategy Path",
    masteryTags: ["speed", "technique"],
    evolution: { vb: "Street kicker", b: "Gangbuk crew", i: "Strategy striker", a: "Pressure leader", e: "Calculated striker" }
  },
  {
    rank: 59,
    tier: "Extended Archive · King Strength",
    name: "Seokdu Wang",
    aliases: ["King of Suwon", "Headbutt King", "Suwon King"],
    faction: "First Generation",
    archetypeKey: "king-strength",
    imageKey: "seokdu",
    primaryTechniques: "Headbutt Brawling / First Gen Power",
    uniqueSkill: "Suwon Headbutt",
    masteriesAchieved: "Strength, Endurance, Regional King Hardware",
    combatPath: "Suwon King Path",
    masteryTags: ["strength", "endurance", "conviction"],
    evolution: { vb: "Regional brawler", b: "First Gen challenger", i: "Suwon king", a: "Headbutt specialist", e: "Regional king wall" }
  },
  {
    rank: 60,
    tier: "Extended Archive · Crew",
    name: "Hangyeol Baek",
    aliases: ["Gyeol Baek", "Workers President", "Medical Genius"],
    faction: "Workers",
    archetypeKey: "crew",
    imageKey: "hangyeol",
    primaryTechniques: "Medical Manipulation / Crew Command",
    uniqueSkill: "Surgical Control",
    masteriesAchieved: "Technique, Sense, Crew Authority",
    combatPath: "Workers Control Path",
    masteryTags: ["technique", "endurance"],
    evolution: { vb: "Medical student", b: "Workers operator", i: "Manipulation specialist", a: "Affiliate president", e: "Clinical control threat" }
  },
  {
    rank: 61,
    tier: "Extended Archive · Speed",
    name: "Bongae Choi",
    aliases: ["Choi Bongae", "Pre-Generation Speed", "Lightning Choi"],
    faction: "Pre-Generation",
    archetypeKey: "speed-legend",
    imageKey: "bongae",
    primaryTechniques: "Speed Striking / Evasive Footwork",
    uniqueSkill: "Lightning Entry",
    masteriesAchieved: "Speed, Technique",
    combatPath: "Pre-Gen Speed Path",
    masteryTags: ["speed", "technique"],
    evolution: { vb: "Street runner", b: "Speed fighter", i: "Pre-Gen combatant", a: "Lightning entry", e: "Speed-era veteran" }
  },
  {
    rank: 62,
    tier: "Extended Archive · Iron Wall",
    name: "Bakgu Noh",
    aliases: ["Noh Bakgu", "Pre-Generation Veteran", "Old Guard"],
    faction: "Pre-Generation",
    archetypeKey: "iron-boxing",
    imageKey: "bakgu",
    primaryTechniques: "Old-School Brawling / Iron Body",
    uniqueSkill: "Veteran Wall",
    masteriesAchieved: "Endurance, Strength, Experience",
    combatPath: "Pre-Gen Veteran Path",
    masteryTags: ["endurance", "strength", "technique"],
    evolution: { vb: "Street elder", b: "Old guard brawler", i: "Pre-Gen survivor", a: "Iron-body veteran", e: "Veteran wall" }
  }
];

const CANON_ROSTER_DATABASE = [...PDF_FIGHTER_DATABASE, ...EXTENDED_FIGHTER_DATABASE];

const roster = CANON_ROSTER_DATABASE.map((entry) => {
  const archetype = ARCHETYPES[entry.archetypeKey] || ARCHETYPES.crew;
  const masteries = entry.masteryTags;
  const accent = masteries.includes("speed")
    ? MASTERY_META.speed.color
    : masteries.includes("strength")
      ? MASTERY_META.strength.color
      : masteries.includes("weapon")
        ? MASTERY_META.weapon.color
        : masteries.includes("endurance")
          ? MASTERY_META.endurance.color
          : MASTERY_META.conviction.color;
  const alias = entry.aliases[0] || entry.uniqueSkill;
  const tier = entry.tier || (entry.rank <= 10 ? "PDF Top 10" : entry.rank <= 20 ? "PDF Top 20" : "PDF 21-50");
  const analysis = `${entry.combatPath}: ${entry.primaryTechniques}. Signature lane: ${entry.uniqueSkill}.`;

  return {
    id: `${entry.rank}-${slug(entry.name)}-${slug(alias)}`,
    rank: entry.rank,
    name: entry.name,
    alias,
    aliases: entry.aliases,
    faction: entry.faction,
    tier,
    archetypeKey: entry.archetypeKey,
    archetype: archetype.label,
    style: archetype.style,
    analysis,
    masteries,
    imageKey: entry.imageKey,
    accent,
    stats: makeStats(entry.rank, masteries, entry.archetypeKey),
    routine: archetype.routine,
    primaryTechniques: entry.primaryTechniques,
    uniqueSkill: entry.uniqueSkill,
    masteriesAchieved: entry.masteriesAchieved,
    combatPath: entry.combatPath,
    evolution: entry.evolution,
    searchText: [
      entry.name,
      alias,
      entry.aliases.join(" "),
      entry.faction,
      tier,
      archetype.label,
      entry.primaryTechniques,
      entry.uniqueSkill,
      entry.masteriesAchieved,
      entry.combatPath,
      masteries.join(" ")
    ].join(" ").toLowerCase()
  };
});

const vault = [
  ["Daniel dual-body reference", "Character picture", "danielDual", "Two-body identity is the core visual idea for Daniel. Use it as the hero reference for body transformation, copy growth, and UI potential."],
  ["Daniel UI second body", "Mode picture", "uiDaniel", "UI visuals should read colder and more automatic than heat mode: no wasted expression, no panic, and sudden technical sharpness."],
  ["Gun current profile", "Character picture", "gunCurrent", "Gun's visual lane should be formal, sharp, and predatory. Build UI panels around black, white, and bruised red accents."],
  ["Gun unconscious state", "Mode picture", "gunUnconscious", "This is the right reference for UI mode cards: empty eyes, feral posture, and a sense that instinct has overtaken personality."],
  ["Johan path image", "Path picture", "pathJohan", "Johan's infinite technique path should be framed as a copy genius becoming uncopiable through personal synthesis."],
  ["Daniel path image", "Path picture", "pathDaniel", "Daniel's path panel belongs beside copy and UI training, because the app needs a bridge from copied moves to his own system."],
  ["Eli mastery image", "Mastery picture", "masteryEli", "Eli's mastery/reference image supports the animal-instinct and path track: close range, awkward angles, and survival pressure."],
  ["James Lee profile", "Character picture", "dg", "Use this as the speed mastery anchor: precise, clean, untouchable, and almost too relaxed for the violence around him."],
  ["Tom Lee profile", "Character picture", "tom", "Tom is the wall reference for wild strength: not polished, not pretty, but completely overwhelming at close range."]
];

const MARTIAL_ARTS = [
  {
    art: "Boxing / Iron Boxing",
    ko: "권투 · 아이언 복싱",
    path: "Endurance + Technique",
    color: MASTERY_META.endurance.color,
    users: "Zack Lee, Gongseob Ji, Johan Seong, Daniel Park",
    note: "The cleanest beginner base in Lookism: guard, rhythm, counters, and the Iron Boxing branch that turns defense into punishment.",
    beginner: "Stance, guard, jab-cross, rope cadence, 3-minute round breathing.",
    intermediate: "Slip-line entries, shoulder roll, body-head counters, footwork exits.",
    advanced: "Absorb-and-counter rounds, long guard pressure, pocket defense under fatigue.",
    mastery: "Iron body timing: take the safe contact, reset instantly, answer with a sharper counter.",
    sources: [["Zack", WIKI_ZACK_URL], ["Mastery", WIKI_MASTERY_URL]]
  },
  {
    art: "Muay Thai / Runner's High",
    ko: "무에타이 · 러너스 하이",
    path: "Strength + Conviction",
    color: MASTERY_META.strength.color,
    users: "Vasco, Brekdak, Burn Knuckles",
    note: "Vasco's lane is not pretty point fighting. It is pressure, knees, elbows, low kicks, and heart when the round gets ugly.",
    beginner: "Square stance, teep, low kick mechanics, elbow and knee safety lines.",
    intermediate: "Clinch posture, check-and-return, body kicks, bag rounds with hard breathing.",
    advanced: "Brekdak-style pressure chains, knee entries, low-kick counters, last-minute flurries.",
    mastery: "Runner's High pressure: keep advancing while the opponent expects output to drop.",
    sources: [["Vasco", WIKI_VASCO_URL], ["Brekdak", WIKI_BREKDAK_URL]]
  },
  {
    art: "Yamazaki Kyokushin Karate",
    ko: "야마자키 극진 공수도",
    path: "Technique + Endurance",
    color: MASTERY_META.ui.color,
    users: "Gun Park, Daniel Park, Yamazaki fighters",
    note: "Gun's core reads like full-contact karate sharpened by other systems: simple lines, brutal conditioning, and no wasted motion.",
    beginner: "Stance work, straight punches, low kicks, body conditioning, basic kata.",
    intermediate: "Guard breaks, heavy bag full-power rounds, low kick returns, no-flinch drills.",
    advanced: "Full-contact pressure, mixed counters, body-shot tolerance, round-after-round precision.",
    mastery: "UI discipline: the body chooses the cleanest strike while the mind stays cold.",
    sources: [["Gun", WIKI_GUN_URL], ["Daniel", WIKI_DANIEL_URL]]
  },
  {
    art: "Aikido / Joint Control",
    ko: "합기도 · 관절 제압",
    path: "Technique",
    color: MASTERY_META.technique.color,
    users: "Gun Park, Daniel Park, Johan Seong",
    note: "Lookism uses joint control as an efficiency layer: redirect posture, steal balance, and make strength arrive in the wrong place.",
    beginner: "Breakfalls, wrist-line awareness, posture, distance, safe partner entries.",
    intermediate: "Redirection, off-balancing, shoulder line control, throw entries from punches.",
    advanced: "Throw chains, counter-throws, transition into strikes or clinch control.",
    mastery: "No wasted motion: a small angle change becomes a complete posture collapse.",
    sources: [["Gun", WIKI_GUN_URL], ["Daniel", WIKI_DANIEL_URL]]
  },
  {
    art: "Systema / Security Combat",
    ko: "시스테마 · 경호 격투",
    path: "Technique + Weapon",
    color: MASTERY_META.weapon.color,
    users: "Sophia Alexander, Jay Hong, Daniel Park",
    note: "The Russian/security lane is calm under chaos: breathing, rolls, disarms, and survival-first movement.",
    beginner: "Breathing under pressure, falling safely, relaxed movement, basic guard recovery.",
    intermediate: "Redirection, limb control, escape angles, partner pressure with low impact.",
    advanced: "Close-quarters entries, disarm simulations with foam tools, escort and extraction footwork.",
    mastery: "Stay loose when the scene gets crowded; panic is treated as the first opponent.",
    sources: [["Sophia", WIKI_SOPHIA_URL], ["Jay", WIKI_JAY_URL]]
  },
  {
    art: "Kali / Weapon Handling",
    ko: "칼리 · 무기술",
    path: "Weapon + Speed",
    color: MASTERY_META.weapon.color,
    users: "Goo Kim, Jay Hong, Sophia Alexander, Xiaolong",
    note: "Weapon users punish bad range. The training version should stay foam-safe and focus on footwork, awareness, and distance.",
    beginner: "Triangle footwork, hand protection, foam-stick angle lines, exit habits.",
    intermediate: "Check hand, range switch, grip endurance, object-control timing.",
    advanced: "Disarm flow, improvised-object defense, blade-like entry and retreat discipline.",
    mastery: "Read threat before contact. In real life, escape beats trying to duel a weapon.",
    sources: [["Goo", WIKI_GOO_URL], ["Jay", WIKI_JAY_URL], ["Sophia", WIKI_SOPHIA_URL]]
  },
  {
    art: "Capoeira / Evasion Kicks",
    ko: "카포에이라 · 회피 발차기",
    path: "Speed + Technique",
    color: MASTERY_META.speed.color,
    users: "James Lee, Daniel Park, Johan Seong",
    note: "The DG lane is movement first: ginga rhythm, blind-side angles, relaxed posture, and kicks from places the opponent stops tracking.",
    beginner: "Ginga, hip mobility, cartwheel safety, front and crescent kick control.",
    intermediate: "Angle kicks, level changes, evasive rhythm, one-hand-behind-back shadow rounds.",
    advanced: "Blind-side entries, kick-feint chains, direction changes after every strike.",
    mastery: "Invisible Attack logic: speed plus angle selection, not just fast limbs.",
    sources: [["James/DG", WIKI_DIEGO_URL], ["Daniel", WIKI_DANIEL_URL]]
  },
  {
    art: "Taekwondo / Kick Precision",
    ko: "태권도 · 발차기 정밀도",
    path: "Speed",
    color: MASTERY_META.speed.color,
    users: "Daniel Park, Johan Seong, Gun Park, Hansu Seong",
    note: "High-speed kicks show up across PTJ fighters as a range-control layer: chamber, snap, recover, and disappear.",
    beginner: "Chamber drills, front kick, round kick, side kick, balance holds.",
    intermediate: "Feints, stance switches, step-in side kick, counter-kick timing.",
    advanced: "Spinning kicks, chain kicks, kick-to-punch transitions, fast recovery after misses.",
    mastery: "Speed mastery expression: the kick lands before the guard forms.",
    sources: [["Daniel", WIKI_DANIEL_URL], ["Gun", WIKI_GUN_URL]]
  },
  {
    art: "Judo / Kudo / Ssireum Grappling",
    ko: "유도 · 쿠도 · 씨름 그래플링",
    path: "Strength + Technique",
    color: MASTERY_META.strength.color,
    users: "Vin Jin, Mujin Jin, Sophia Alexander, Taejin Cheon",
    note: "Cheonliang-style grappling is posture theft: grips, hips, and throws that make raw strength usable in chaos.",
    beginner: "Breakfalls, grip fighting, hip throws, foot sweeps, neck-safe clinch posture.",
    intermediate: "Throw entries from strikes, trip chains, grip endurance, mat-return control.",
    advanced: "Kudo-style strike-to-throw transitions, pressure pins, escape every bad position.",
    mastery: "Mujin/Ssireum idea: monstrous grip plus perfect angle makes a bigger body feel light.",
    sources: [["Vin", WIKI_VIN_URL], ["Daniel", WIKI_DANIEL_URL]]
  },
  {
    art: "CQC / Jeet Kune Do",
    ko: "근접전 · 절권도",
    path: "Technique + Speed",
    color: MASTERY_META.technique.color,
    users: "Warren Chae, Manager Kim, Johan Seong",
    note: "Warren's CQC lane is a close-range decision tree: enter fast, hit clean, control the next beat before the opponent recovers.",
    beginner: "Straight-line stance, lead-hand entries, elbows, knees, basic trapping range.",
    intermediate: "Intercepting counters, clinch breaks, rapid body-head chains, angle exits.",
    advanced: "CQC bursts under pressure, one-step decision drills, countering in a crowd.",
    mastery: "New CQC expression: compressed violence with no pause between read, entry, and finish.",
    sources: [["Warren", WIKI_WARREN_URL], ["Johan", WIKI_JOHAN_URL]]
  },
  {
    art: "Copy-Adaptive Mixed Martial Arts",
    ko: "카피 · 적응형 종합격투",
    path: "Copy + Path",
    color: MASTERY_META.path.color,
    users: "Daniel Park, Johan Seong, Jinyoung Park, Gun Park",
    note: "Copy is not one art. It is a learning engine: observe, reproduce, combine, then eventually build a personal path.",
    beginner: "One base striking art, one base grappling art, one conditioning habit.",
    intermediate: "Watch-copy-repeat rounds, film notes, switch ranges without resetting stance.",
    advanced: "Opponent-style mimicry, constraint sparring, counter your own copied technique.",
    mastery: "Path: the copied library becomes an identity that another copy genius cannot fully steal.",
    sources: [["Daniel", WIKI_DANIEL_URL], ["Johan", WIKI_JOHAN_URL], ["Path", WIKI_PATH_URL]]
  },
  {
    art: "Street Fighting / Wildness",
    ko: "길거리 싸움 · 야성",
    path: "Conviction + Path",
    color: MASTERY_META.conviction.color,
    users: "Eli Jang, Tom Lee, Sinu Han, crew heads",
    note: "The wildness lane is not a beginner excuse to be sloppy. It is scenario control, survival angles, and unpredictable pressure.",
    beginner: "Balance, guard recovery, wall awareness, break away safely, protect the head.",
    intermediate: "Clinch survival, dirty-range frames, escape routes, verbal de-escalation habits.",
    advanced: "Scenario rounds, uneven footing, wall pins, controlled two-on-one escape patterns.",
    mastery: "Wild path: unpredictable rhythm backed by technique, not random swinging.",
    sources: [["Eli", WIKI_ELI_URL], ["Sinu", WIKI_SINU_URL], ["Mastery", WIKI_MASTERY_URL]]
  }
];

const FIGHTER_TYPE_TRAINING = [
  {
    type: "Copy + UI Engine",
    ko: "카피 · 무의식 엔진",
    color: MASTERY_META.ui.color,
    users: "Daniel Park · Johan Seong · Jinyoung Park",
    base: "Copy-adaptive mixed martial arts, Kyokushin, boxing, grappling, reaction drilling.",
    beginner: "Choose one striking base and one grappling base. Drill stance, guard, breakfalls, and clean breathing before copying flashy moves.",
    intermediate: "Watch-copy-repeat: study one combo, reproduce it slowly, then use it in one-rule sparring without changing form.",
    advanced: "Opponent mimicry rounds, counter-your-own-combo drills, exhaustion technique rounds, and mixed-range transitions.",
    mastery: "Path layer: stop being only a library. Build one signature chain that fits your body and survives fatigue."
  },
  {
    type: "Speed Legend",
    ko: "속도 전설형",
    color: MASTERY_META.speed.color,
    users: "James Lee · Sinu Han · Charles Choi · Bongae Choi",
    base: "Capoeira rhythm, evasive kicking, sprint mechanics, blind-side entries.",
    beginner: "Jump rope, ginga, sprint starts, balance holds, and clean kick chambering.",
    intermediate: "Angle entries, one-hand-behind-back shadowboxing, blind-side pad touches, and exit-after-strike rules.",
    advanced: "Invisible attack translation: speed plus angle selection, reaction starts under fatigue, and kick-feint chains.",
    mastery: "The opponent loses the first beat. You enter from the blind side and leave before the counter forms."
  },
  {
    type: "Wild Wall",
    ko: "야성 · 벽 타입",
    color: MASTERY_META.strength.color,
    users: "Tom Lee · Eli Jang · Baekho Kwon · Paecheon Jo",
    base: "Grip violence, clinch pressure, wall wrestling, carries, ugly-range survival.",
    beginner: "Loaded carries, basic pummeling, safe breakfalls, guard recovery, and neck/hip mobility.",
    intermediate: "Wall pins, clinch entries, balance breaks, sprawl-to-sprint, and grip switch intervals.",
    advanced: "Unpredictable counter rounds, uneven-footing scenarios, crush-and-exit pressure, and heavy sandbag work.",
    mastery: "Make clean technique impossible for the opponent while your own pressure stays controlled."
  },
  {
    type: "Weapon Specialist",
    ko: "무기 전문가",
    color: MASTERY_META.weapon.color,
    users: "Goo Kim · Xiaolong · Manager Kim · Sophia · Jay Hong",
    base: "Distance control, object awareness, foam-weapon timing, wrist and shoulder endurance.",
    beginner: "Triangle footwork, hand protection, exit habits, and safe foam-stick angle lines.",
    intermediate: "Range switching, check-hand control, grip endurance, retreat-entry timing, and target-line defense.",
    advanced: "Disarm simulations with foam tools, improvised-object defense, and scenario awareness under pressure.",
    mastery: "You read threat before contact. In real life, escape beats trying to duel a weapon."
  },
  {
    type: "King Strength",
    ko: "왕의 힘 타입",
    color: MASTERY_META.strength.color,
    users: "Taesoo Ma · Hudson Ahn · Seokdu Wang · Mandeok",
    base: "Rooted stance, whole-body power, single-shot mechanics, heavy compounds.",
    beginner: "Squat, hinge, push, pull, trunk bracing, and basic heavy-bag straight punches.",
    intermediate: "Med-ball throws, hip snap bands, foot-rooting balance, and single-shot bag rounds.",
    advanced: "One-punch setup rounds, guard-break counters, loaded carries, and strict progressive overload.",
    mastery: "Simple movement becomes catastrophic because the whole body arrives behind one line of force."
  },
  {
    type: "Iron Boxing",
    ko: "아이언 복싱",
    color: MASTERY_META.endurance.color,
    users: "Zack Lee · Gongseob Ji",
    base: "Boxing foundation, endurance mastery, absorb-reset-counter rhythm.",
    beginner: "Roadwork, rope, jab-cross, guard discipline, slip-line basics, and 3-minute round breathing.",
    intermediate: "Counter after block, shoulder-roll entries, body-head counters, and long-guard endurance rounds.",
    advanced: "Controlled body-shot conditioning, counter-only sparring, fatigue footwork, and late-round accuracy.",
    mastery: "You take the safe contact, reset instantly, and answer with a sharper counter."
  },
  {
    type: "Conviction Brawler",
    ko: "신념 브롤러",
    color: MASTERY_META.conviction.color,
    users: "Vasco · Jake Kim · Samuel Seo · Olly Wang",
    base: "Purpose-driven pressure, Muay Thai/bodyweight conditioning, last-round output.",
    beginner: "Compound lifts, push-pull circuits, basic knees/elbows, hill walks, and written purpose before hard days.",
    intermediate: "Hill sprints, clinch knees, heavy-bag flurries, breath reset under stress, and failure-safe finishers.",
    advanced: "Protect-the-line drills, last-minute sparring simulations, heat-mode intervals, and controlled aggression work.",
    mastery: "Emotion becomes discipline. You push harder without becoming reckless."
  },
  {
    type: "Grappler",
    ko: "그래플러",
    color: MASTERY_META.strength.color,
    users: "Vin Jin · Mujin Jin · Taejin Cheon · Sophia",
    base: "Ssireum/Judo/Kudo grip fighting, throws, clinch, posterior-chain strength.",
    beginner: "Breakfalls, grip fighting, hip throws, foot sweeps, and neck-safe clinch posture.",
    intermediate: "Throw entries from strikes, trip chains, rope climbs, mat returns, and grip endurance.",
    advanced: "Strike-to-throw transitions, pressure pins, escape every bad position, and heavy hinge work.",
    mastery: "Posture theft: grips, hips, and angle make a bigger body feel light."
  },
  {
    type: "Technical Striker",
    ko: "기술 타격가",
    color: MASTERY_META.technique.color,
    users: "Warren Chae · Jichang Kwak · Hansu Seong · Kenta",
    base: "Boxing, Taekwondo, CQC, pocket control, clean counters.",
    beginner: "Guard, jab, round kick, side kick, stance switches, and basic pad accuracy.",
    intermediate: "Slip-line entries, intercepting counters, kick-to-punch transitions, and angle exits.",
    advanced: "CQC bursts, spinning-kick recovery, one-step decision drills, and countering under crowd pressure.",
    mastery: "No wasted motion: read, enter, hit, and leave as one compressed action."
  },
  {
    type: "Crew Enforcer",
    ko: "크루 집행자",
    color: MASTERY_META.conviction.color,
    users: "Jerry Kwon · Logan Lee · Hangyeol Baek · Bakgu Noh",
    base: "Street pressure, conditioning, wall awareness, dirty-range survival.",
    beginner: "Basic strength circuit, shuttle runs, guard recovery, wall awareness, and de-escalation habits.",
    intermediate: "Two-on-one escape patterns, close-range footwork, wall pin defense, and grip finishers.",
    advanced: "Scenario rounds, controlled chaos sparring, repeat-output circuits, and recovery after bad exchanges.",
    mastery: "You are not elegant, but you are conditioned, hard to move, and hard to panic."
  }
];

const FIGHTER_TYPE_RESEARCH_GUIDES = {
  "copy-ui-engine": {
    research: "PDF lineage: Copy Geniuses. This route trains visual tracking, safe copying, hardware support, range switching, fatigue reaction, and personal path creation.",
    core: [
      "Awakening: baseline cardio, mirror copy, visual tracking, and one stable stance.",
      "Software expansion: slow repetitions until the copied movement has a purpose.",
      "Hardware forging: strength, mobility, and conditioning so copied movement does not break form.",
      "First Gen mimicry: copy principles across striking, grappling, and evasive ranges.",
      "UI translation: automatic simple answers after controlled fatigue, never unsafe exhaustion.",
      "Infinite convergence: copied library becomes one signature path chain."
    ],
    precision: ["Copy structure before speed", "One base stance anchors every borrowed move", "Film and name the purpose of each copied technique", "Fatigue drills must simplify the answer"],
    mistakes: ["Copying highlight violence literally", "Changing styles every rep", "Skipping hardware work", "Trying to force UI instead of reaction training"],
    physique: "Copy/UI build: balanced athletic base, mobile joints, resilient trunk, and enough conditioning to keep technique alive under fatigue."
  },
  "speed-legend": {
    research: "PDF lineage: Invisible Attackers & Speed Demons. This route turns blind-spot lore into sprint starts, angle entries, capoeira rhythm, kick precision, and non-telegraphed exits.",
    core: [
      "Plyometric base: sprint starts, ginga rhythm, mobility, and target accuracy.",
      "Kick-chain base: chamber, round/crescent kicks, stance switches, and safe acrobatics.",
      "Blind-spot targeting: step outside the vision cone before striking.",
      "Speed threshold: remove shoulder/hip telegraphs and leave after contact.",
      "Invisible-attack translation: random callouts, blind-side pads, and fatigue accuracy.",
      "Speed path: rhythm change, blind-side entry, fast touch, clean exit."
    ],
    precision: ["Feet create the angle before hands chase speed", "No shoulder lift before entry", "Every strike has an exit", "Fast means early and clean, not frantic"],
    mistakes: ["Only training hand speed", "Skipping hip and ankle prep", "Using flashy kicks before landings", "Forgetting the exit"],
    physique: "Speed Legend build: lean legs, elastic hips, strong ankles, mobile spine, and repeat sprint capacity."
  },
  "wild-wall": {
    research: "PDF lineage: Muay Thai Hardware Tanks plus Tom/Eli wildness. This route translates extreme feats into carries, sled work, clinch pressure, scenario control, and heavy-but-safe contact.",
    core: [
      "Wall base: carries, pummeling, breakfalls, guard recovery, and posture.",
      "Pressure body: low-kick/clinching basics, wall pins, grip switches, and hill work.",
      "Hardware tank: posterior-chain strength, sandbag work, and breath under pressure.",
      "Wildness control: uneven-footing scenarios, crush-and-exit drills, and environment awareness.",
      "Demonic charge translation: short pressure surges without losing defensive shape.",
      "Wild wall path: make clean exchanges hard while your own pressure stays measurable."
    ],
    precision: ["Pressure starts at the feet", "Grip connects to hips before force", "Chaos drills still have exit rules", "Do not trade defense for intimidation"],
    mistakes: ["Turning wildness into random swinging", "Training pain instead of skill", "Skipping neck/hip mobility", "Maxing carries too often"],
    physique: "Wild Wall build: thick back, grip, trunk, neck, and legs with enough lungs to keep moving."
  },
  "weapon-specialist": {
    research: "PDF lineage: Lethal Weapons and CQC. This route is escape-first: foam tools, distance, grip endurance, object awareness, and safe disarm simulations.",
    core: [
      "Weapon familiarity: stance, grip, angle lines, and exit habits.",
      "Range switch: check hand, retreat-entry timing, and foam disarm basics.",
      "CQC circle: one-step spatial awareness, target-line defense, and exit sprint.",
      "Unconventional object defense: towel/belt/stick scenarios with low speed.",
      "Blade discipline translation: distance control and no-contact line drills.",
      "Weapon path: read threat, angle out, control line, escape."
    ],
    precision: ["Escape is the win condition", "Step before the tool moves", "Protect the live hand", "Real weapons are not sport rounds"],
    mistakes: ["Chasing the weapon", "Standing inside range", "Practicing harmful targets on people", "Using rigid tools too early"],
    physique: "Weapon Specialist build: forearm density, shoulder endurance, footwork stamina, and calm under threat cues."
  },
  "king-strength": {
    research: "PDF lineage: Iron Fortress single-fist kings and hardware tanks. This route builds one-line force through compounds, med-ball throws, heavy bags, bracing, and clean pivots.",
    core: [
      "Foundation: squat, hinge, push, pull, bracing, and single-shot bag mechanics.",
      "Force line: wrist/shoulder armor, med-ball throws, and rooted footwork.",
      "Hardware: heavy carries, controlled bag power, and posterior-chain density.",
      "King shot: hip pivot, whole-body timing, and one-punch setup rounds.",
      "Threshold breaker: repeat power late without losing stance or guard.",
      "King path: one simple strike becomes identity because the whole body arrives."
    ],
    precision: ["Power starts from the floor", "Stop max work before joints complain", "One clean shot beats ten sloppy ones", "Progress load weekly, not emotionally"],
    mistakes: ["Punching hard surfaces", "Testing maxes too often", "Ignoring rotator cuff work", "Leaning past the base"],
    physique: "King Strength build: dense legs, trunk, shoulders, wrists, and heavy pulling power."
  },
  "iron-boxing": {
    research: "PDF lineage: Iron Fortress Boxers. This route is roadwork, jab/footwork, slip-line, breath-led defense, safe body conditioning, and counter timing.",
    core: [
      "Sweet science: stance, guard, jab path, rope cadence, and breathing.",
      "In/out fighting: slip-line, body-head combos, and angle exits.",
      "Iron body translation: controlled contact, brace breath, reset, counter.",
      "Speed-counter layer: fast entries, pivots, and single-shot accuracy.",
      "Counter mastery: answer in the same beat without losing defense.",
      "Iron Fortress path: absorb safe contact, reset, counter, and leave."
    ],
    precision: ["Exhale through contact", "Chin hidden without hunching", "Counter short enough to keep guard", "Roadwork supports precision, not punishment"],
    mistakes: ["Hard body shots without coaching", "Dropping hands after counters", "Ducking from the waist", "Running so hard skill work dies"],
    physique: "Iron Boxing build: resilient legs/lungs, strong trunk, durable shoulders, and compact counter mechanics."
  },
  "conviction-brawler": {
    research: "PDF lineage: Conviction Brawlers. This route turns protection/rage/self-belief into structured output: strength, pressure, breath reset, and emotional control.",
    core: [
      "Street survival translation: guard, balance, safe contact, and showing up consistently.",
      "Structured brawling: boxing/MMA basics, bag power, clinch survival, and roadwork.",
      "Overcome wall: failure-safe circuits, breath under fatigue, and last-round discipline.",
      "Trigger control: purpose journaling, pressure rounds, and emotional downshift after training.",
      "Aura mastery translation: repeat output late while staying technically responsible.",
      "Conviction path: emotion becomes a rule set, not reckless violence."
    ],
    precision: ["Name the reason before hard work", "Aggression must stay coachable", "Final reps still count only if clean", "Cool down after heat blocks"],
    mistakes: ["Using self-hate as the whole fuel source", "Brawling without structure", "Skipping recovery", "Treating anger as technique"],
    physique: "Conviction Brawler build: sturdy trunk, repeat-output lungs, strong clinch, and calm after adrenaline."
  },
  grappler: {
    research: "PDF lineage: Cheonliang Grapplers. This route translates Mujin/Vin feats into breakfalls, grips, kuzushi, hip throws, Kudo entries, and heavy posterior-chain work.",
    core: [
      "Cheonliang base: ukemi, grips, hips, stance, and safe falling.",
      "Ssireum/Judo fundamentals: balance breaking, hip throws, sweeps, towel pulls.",
      "Hell training translation: carries, hinges, rope/towel rows, and mat returns.",
      "Kudo integration: strike-to-grip entries, trips, pins, and escapes.",
      "Iron grip expert: latch, improve angle, finish position.",
      "Mujin path: grip, angle, uproot, control."
    ],
    precision: ["Break posture before throw", "Grip connects to hips", "Mats and supervision are non-negotiable", "Strength amplifies kuzushi"],
    mistakes: ["Yanking with arms", "Skipping breakfalls", "Throwing tired partners", "Ignoring finger/neck recovery"],
    physique: "Grappler build: posterior chain, neck, hands, hips, trunk, and enough cardio for scrambles."
  },
  "technical-striker": {
    research: "PDF lineage: hand-chop strategists, CQC strikers, Taekwondo kickers, and Kyokushin vengeance types. This route prioritizes exact lines, intercepting counters, and decision speed.",
    core: [
      "Base line: jab, round kick, stance switch, guard recovery, and pad accuracy.",
      "Timing layer: slip-line, intercept step, kick-to-punch transition, and angle exit.",
      "Decision tree: one-step counters, hand-chop/straight-line targets, and film notes.",
      "Pressure skill: CQC bursts, spinning-kick recovery, and crowd-angle discipline.",
      "Expert compression: read, enter, hit, leave with no dead beat.",
      "Technique path: one precise answer for each major range."
    ],
    precision: ["No wasted motion", "Every entry has a planned exit", "Accuracy rises before speed", "Film one small correction weekly"],
    mistakes: ["Collecting tricks", "Telegraphing shoulder/hip movement", "Skipping guard recovery", "Trying advanced kicks before landing control"],
    physique: "Technical Striker build: mobile hips, strong calves, durable shoulders, fast hands, and calm eyes."
  },
  "crew-enforcer": {
    research: "PDF lineage: street pressure and crew survival. This route keeps the realism: conditioning, wall awareness, escape patterns, recovery after bad exchanges, and teamwork discipline.",
    core: [
      "Foundation: strength circuit, shuttle runs, guard recovery, wall awareness.",
      "Close range: two-on-one escape patterns, wall pin defense, and grip finishers.",
      "Pressure base: controlled chaos rounds, breath reset, and repeat-output circuits.",
      "Scenario control: uneven footing, crowd angles, verbal de-escalation, and exit choice.",
      "Enforcer expert: recover after a bad exchange and regain position quickly.",
      "Crew path: durable, hard to panic, and useful under pressure."
    ],
    precision: ["Protect head first", "Frame before striking", "Exit beats winning ego exchanges", "Conditioning must support judgment"],
    mistakes: ["Random swinging", "Ignoring terrain", "Training ego", "Skipping recovery because the route is gritty"],
    physique: "Crew Enforcer build: practical strength, grip, shuttle conditioning, and durable trunk."
  }
};

const FIGHTER_TYPE_PROGRAMS = Object.fromEntries(FIGHTER_TYPE_TRAINING.map((type) => {
  const id = fighterTypeId(type);
  const linkedArts = {
    "copy-ui-engine": ["Copy-Adaptive Mixed Martial Arts", "Yamazaki Kyokushin Karate", "Boxing / Iron Boxing"],
    "speed-legend": ["Capoeira / Evasion Kicks", "Taekwondo / Kick Precision", "Boxing / Iron Boxing"],
    "wild-wall": ["Street Fighting / Wildness", "Judo / Kudo / Ssireum Grappling"],
    "weapon-specialist": ["Kali / Weapon Handling", "Systema / Security Combat"],
    "king-strength": ["Yamazaki Kyokushin Karate", "Boxing / Iron Boxing"],
    "iron-boxing": ["Boxing / Iron Boxing"],
    "conviction-brawler": ["Muay Thai / Runner's High", "Street Fighting / Wildness"],
    grappler: ["Judo / Kudo / Ssireum Grappling", "Aikido / Joint Control"],
    "technical-striker": ["Boxing / Iron Boxing", "Taekwondo / Kick Precision", "CQC / Jeet Kune Do"],
    "crew-enforcer": ["Street Fighting / Wildness", "CQC / Jeet Kune Do"]
  };
  const guide = FIGHTER_TYPE_RESEARCH_GUIDES[id] || {};
  return [id, {
    research: guide.research,
    core: guide.core || [type.base, type.beginner, type.intermediate, type.advanced, `${type.advanced} Add film review and controlled pressure.`, type.mastery],
    precision: guide.precision || ["Pick one measurable specialty", "Keep a recovery cap after hard days", "Film one round per week", "Progress skill before intensity"],
    mistakes: guide.mistakes || ["Copying a fighter's recklessness", "Skipping base conditioning", "Changing archetypes every week", "Training pain instead of adaptation"],
    safety: guide.safety || "Fighter-type training is fictional archetype translation. Use coaching, pads, mats, and controlled contact.",
    physique: guide.physique || `${type.type} build: develop the body qualities that support ${type.base.toLowerCase()}`,
    levels: guide.levels,
    linkedArts: linkedArts[id] || ["Boxing / Iron Boxing", "Street Fighting / Wildness"],
    sourceLinks: [["Lookism Characters", WIKI_CHARACTERS_URL], ["Lookism Mastery", WIKI_MASTERY_URL]]
  }];
}));

const SYSTEM_STORAGE_KEY = "lookismSystemProgress:v1";
const PROFILE_STORAGE_KEY = "lookismProfileDiagnosis:v1";
const AI_CONFIG_STORAGE_KEY = "lookismHybridAiConfig:v1";
const CHAT_STORAGE_KEY = "lookismSystemChat:v1";
const ASSISTANT_POSITION_STORAGE_KEY = "lookismAssistantPosition:v1";
const ONBOARDING_STORAGE_KEY = "lookismOnboarding:v1";
const TRAINING_PROGRESS_STORAGE_KEY = "lookismTrainingProgress:v1";
const USER_SETTINGS_STORAGE_KEY = "lookismUserSettings:v1";
const TRAINING_LOG_STORAGE_KEY = "lookismTrainingLogs:v1";
const CLOUD_CONFIG_ENDPOINT = "/api/config";

const VAULT_FILTERS = [
  ["all", "All"],
  ["ui", "UI"],
  ["mastery", "Mastery"],
  ["path", "Path"],
  ["brutal", "Brutal Fights"],
  ["kings", "Kings"],
  ["pre-gen", "Pre-Gen"]
];

function isStaticLocalPreview() {
  const localHosts = new Set(["127.0.0.1", "localhost", "::1"]);
  return localHosts.has(window.location.hostname) && ["4173", "4174"].includes(window.location.port);
}

const RESOURCE_LIBRARY = {
  lookism: [
    ["Lookism Mastery", WIKI_MASTERY_URL],
    ["Lookism Ultra Instinct", WIKI_ULTRA_INSTINCT_URL],
    ["Daniel Park", WIKI_DANIEL_URL],
    ["Gun Park", WIKI_GUN_URL],
    ["Path", WIKI_PATH_URL]
  ],
  system: [
    ["Solo Leveling System", SOLO_SYSTEM_URL],
    ["Solo Leveling Quests", SOLO_QUESTS_URL],
    ["CDC Activity Basics", CDC_ACTIVITY_URL],
    ["Gemini Text Generation", GEMINI_TEXT_URL],
    ["Gemini API Keys", GEMINI_API_KEY_URL]
  ],
  safety: [
    ["CDC Weekly Activity", CDC_ACTIVITY_URL],
    ["Lookism is fiction", WEBTOON_URL]
  ]
};

const PROFILE_FIELDS = [
  { key: "age", label: "Age", group: "body", type: "number", placeholder: "18" },
  { key: "height", label: "Height (cm)", group: "body", type: "number", placeholder: "175" },
  { key: "weight", label: "Weight (kg)", group: "body", type: "number", placeholder: "72" },
  { key: "bodyFat", label: "Body Fat %", group: "body", type: "number", placeholder: "18" },
  {
    key: "trainingAge",
    label: "Training Age",
    group: "context",
    type: "select",
    options: [["", "Select"], ["none", "0-3 months"], ["beginner", "3-12 months"], ["intermediate", "1-3 years"], ["advanced", "3+ years"]]
  },
  {
    key: "martialExperience",
    label: "Martial Experience",
    group: "context",
    type: "select",
    options: [["", "Select"], ["none", "None"], ["beginner", "Beginner"], ["intermediate", "Intermediate"], ["advanced", "Advanced"]]
  },
  {
    key: "equipment",
    label: "Equipment",
    group: "context",
    type: "select",
    options: [["bodyweight", "Bodyweight"], ["home", "Home equipment"], ["gym", "Full gym"], ["combat-gym", "Combat gym"]]
  },
  { key: "daysPerWeek", label: "Days / Week", group: "context", type: "number", placeholder: "4" },
  { key: "sessionLength", label: "Session Min", group: "context", type: "number", placeholder: "45" },
  {
    key: "goal",
    label: "Primary Goal",
    group: "context",
    type: "select",
    options: [["general", "General system growth"], ["fat-loss", "Fat loss / reset"], ["muscle", "Muscle gain"], ["strength", "Strength"], ["speed", "Speed"], ["endurance", "Endurance"], ["skill", "Martial skill"], ["combat", "Combat readiness"]]
  },
  { key: "injuries", label: "Injury / Limits", group: "context", type: "text", placeholder: "none, knee, shoulder..." },
  { key: "bench", label: "Bench Press (kg)", group: "prs", type: "number", placeholder: "60" },
  { key: "squat", label: "Back Squat (kg)", group: "prs", type: "number", placeholder: "80" },
  { key: "deadlift", label: "Deadlift (kg)", group: "prs", type: "number", placeholder: "100" },
  { key: "press", label: "Overhead Press (kg)", group: "prs", type: "number", placeholder: "40" },
  { key: "pullups", label: "Max Pull-ups", group: "tests", type: "number", placeholder: "5" },
  { key: "pushups", label: "Max Push-ups", group: "tests", type: "number", placeholder: "20" },
  { key: "plank", label: "Plank (sec)", group: "tests", type: "number", placeholder: "60" },
  { key: "mile", label: "Mile Time (min)", group: "tests", type: "number", placeholder: "9" },
  { key: "fiveK", label: "5K Time (min)", group: "tests", type: "number", placeholder: "32" }
];

const PROFILE_NUMERIC_LIMITS = {
  age: [10, 80],
  height: [110, 230],
  weight: [30, 250],
  bodyFat: [3, 60],
  daysPerWeek: [1, 7],
  sessionLength: [10, 240],
  bench: [0, 400],
  squat: [0, 500],
  deadlift: [0, 600],
  press: [0, 250],
  pullups: [0, 80],
  pushups: [0, 200],
  plank: [0, 900],
  mile: [3, 30],
  fiveK: [0, 120]
};

const PROFILE_REQUIRED_FOR_DIAGNOSIS = ["age", "height", "weight"];

const USER_CATEGORIES = [
  { id: "weak-daniel-low-base", label: "Weak Daniel · Low Base", ko: "약한 형석", level: 1, next: "Civilian Reset", color: "#8b949e", focus: "mobility, walking, push-pull-leg basics, confidence reps" },
  { id: "weak-daniel-overweight", label: "Weak Daniel · Overweight Reset", ko: "체중 리셋", level: 1, next: "Civilian Reset", color: "#f0a42f", focus: "low-impact conditioning, nutrition consistency, joint-friendly strength" },
  { id: "weak-daniel-skinny", label: "Weak Daniel · Skinny Reset", ko: "마른 체형 리셋", level: 1, next: "Civilian Reset", color: "#05a9c8", focus: "hypertrophy basics, food routine, posterior chain strength" },
  { id: "weak-daniel-cardio", label: "Weak Daniel · Low Cardio", ko: "심폐 리셋", level: 1, next: "Fighter", color: "#19c566", focus: "zone-2 engine, rope cadence, nasal breathing, easy intervals" },
  { id: "civilian-reset", label: "Civilian Reset", ko: "일반인 리셋", level: 6, next: "Fighter", color: "#4d5563", focus: "repeatable weekly base and clean movement" },
  { id: "fighter-balanced", label: "Fighter", ko: "파이터", level: 11, next: "Crew Member", color: "#9b4b21", focus: "balanced strength, roadwork, and one martial art" },
  { id: "power-build", label: "Power Build", ko: "힘 특화", level: 21, next: "King Candidate", color: MASTERY_META.strength.color, focus: "strength mastery and King Strength fighter type" },
  { id: "speed-build", label: "Speed Build", ko: "속도 특화", level: 21, next: "Speed Legend", color: MASTERY_META.speed.color, focus: "sprint mechanics, footwork, and angle theft" },
  { id: "iron-endurance", label: "Iron Endurance", ko: "아이언 지구력", level: 21, next: "First Gen King", color: MASTERY_META.endurance.color, focus: "roadwork, long rounds, and Iron Boxing" },
  { id: "technical-striker", label: "Technical Striker", ko: "기술 타격가", level: 21, next: "Ten Geniuses", color: MASTERY_META.technique.color, focus: "boxing, taekwondo, CQC, film review" },
  { id: "grappler-track", label: "Grappler", ko: "그래플러", level: 21, next: "Crew Head", color: MASTERY_META.strength.color, focus: "breakfalls, throws, grip, clinch, hips" },
  { id: "conviction-brawler", label: "Conviction Brawler", ko: "신념 브롤러", level: 21, next: "Crew Head", color: MASTERY_META.conviction.color, focus: "purpose-led pressure and safe last-round output" },
  { id: "copy-adaptive", label: "Copy-Adaptive", ko: "카피 적응형", level: 36, next: "Path Walker", color: MASTERY_META.path.color, focus: "copy study, mixed ranges, and personal path design" },
  { id: "path-walker", label: "Path Walker", ko: "자신만의 길", level: 91, next: "Pinnacle Legend", color: MASTERY_META.path.color, focus: "signature chain, constraints, identity-specific training" }
];

const ANALYSIS_RULES = {
  bmi: { underweight: 18.5, overweight: 27, reset: 30 },
  bodyFat: { high: 28, athlete: 14 },
  strengthRatio: { low: 2.2, fighter: 3.6, strong: 5.2, king: 6.5 },
  cardio: { mileLow: 11, mileFighter: 8.5, mileFast: 7, fiveKLow: 36, fiveKFighter: 28, fiveKFast: 23 },
  bodyweight: { pushupLow: 10, pushupFighter: 30, pullupLow: 1, pullupFighter: 8, plankLow: 45, plankFighter: 120 }
};

const LEVEL_RANKS = [
  { min: 1, max: 5, label: "Weak Daniel", ko: "약한 형석", color: "#8b949e", lore: "Low stamina, low confidence, high potential. The first victory is showing up." },
  { min: 6, max: 10, label: "Civilian Reset", ko: "일반인 리셋", color: "#4d5563", lore: "Posture, breath, sleep, walking, mobility. The body stops fighting itself." },
  { min: 11, max: 20, label: "Fighter", ko: "파이터", color: "#9b4b21", lore: "Basic strikes, base strength, roadwork, and the first clean sparring habits." },
  { min: 21, max: 35, label: "Crew Member", ko: "크루원", color: "#2368ff", lore: "A repeatable weekly system. You now train like someone who belongs in the story." },
  { min: 36, max: 50, label: "Crew Head", ko: "크루장", color: "#8d4dff", lore: "You lead with a specialty: power, speed, endurance, technique, or conviction." },
  { min: 51, max: 65, label: "King Candidate", ko: "왕 후보", color: "#ff333d", lore: "One attribute becomes a weapon. Your weak points have assigned training blocks." },
  { min: 66, max: 80, label: "First Gen King", ko: "1세대 왕", color: "#f0a42f", lore: "Regional-king pressure: durable, specific, and hard to force off your path." },
  { min: 81, max: 90, label: "Ten Geniuses", ko: "10인의 천재", color: "#05a9c8", lore: "Study catches up with violence. You can diagnose styles instead of only surviving them." },
  { min: 91, max: 99, label: "Path Walker", ko: "자신만의 길", color: "#ff6b6b", lore: "Copied methods are no longer enough. Your own movement identity starts to appear." },
  { min: 100, max: 100, label: "Pinnacle Legend", ko: "정점의 전설", color: "#f4f4f4", lore: "A fictional ceiling used as a training symbol: mastery, control, and responsibility." }
];

const SYSTEM_STATS = [
  ["power", "Power", "힘", MASTERY_META.strength.color],
  ["speed", "Speed", "속도", MASTERY_META.speed.color],
  ["endurance", "Endurance", "지구력", MASTERY_META.endurance.color],
  ["technique", "Technique", "기술", MASTERY_META.technique.color],
  ["sense", "Sense", "감각", MASTERY_META.ui.color],
  ["conviction", "Conviction", "신념", MASTERY_META.conviction.color]
];

const XP_REWARDS = {
  daily: 80,
  weekly: 240,
  boss: 520,
  masteryClick: 40
};

const QUEST_CATALOG = [
  {
    id: "daily-mobility-reset",
    type: "daily",
    title: "Mobility Reset",
    ko: "관절 리셋",
    desc: "10 minutes hips, ankles, thoracic spine, shoulders, and nasal breathing.",
    xp: 60,
    stat: "endurance",
    statGain: 1,
    color: MASTERY_META.endurance.color
  },
  {
    id: "daily-weak-daniel-base",
    type: "daily",
    title: "Weak Daniel Base",
    ko: "약한 형석 기초",
    desc: "Push, pull, squat, hinge, and core at a version you can repeat with clean form.",
    xp: 90,
    stat: "power",
    statGain: 1,
    color: MASTERY_META.strength.color
  },
  {
    id: "daily-roadwork",
    type: "daily",
    title: "Roadwork / Runner's High",
    ko: "로드워크",
    desc: "20-30 minutes easy run, brisk walk, bike, or jump rope intervals.",
    xp: 90,
    stat: "speed",
    statGain: 1,
    color: MASTERY_META.speed.color
  },
  {
    id: "daily-technique-reps",
    type: "daily",
    title: "Technique Precision Reps",
    ko: "정밀 기술 반복",
    desc: "Choose one martial art and perform 60 slow perfect reps before adding speed.",
    xp: 110,
    stat: "technique",
    statGain: 1,
    color: MASTERY_META.technique.color
  },
  {
    id: "daily-system-journal",
    type: "daily",
    title: "Conviction Log",
    ko: "신념 기록",
    desc: "Write one reason for training, one weakness, and one thing you will not skip tomorrow.",
    xp: 50,
    stat: "conviction",
    statGain: 1,
    color: MASTERY_META.conviction.color
  },
  {
    id: "weekly-full-body-strength",
    type: "weekly",
    title: "Full-Body Strength Block",
    ko: "전신 근력",
    desc: "One controlled full-body session: squat or hinge, push, pull, carry, trunk.",
    xp: 240,
    stat: "power",
    statGain: 2,
    color: MASTERY_META.strength.color
  },
  {
    id: "weekly-fighter-type",
    type: "weekly",
    title: "Chosen Fighter-Type Session",
    ko: "타입 훈련",
    desc: "Pick one fighter type and run its beginner/intermediate block for 45-75 minutes.",
    xp: 260,
    stat: "sense",
    statGain: 2,
    color: MASTERY_META.ui.color
  },
  {
    id: "weekly-martial-precision",
    type: "weekly",
    title: "Martial-Art Precision Day",
    ko: "기술 정밀일",
    desc: "Open a martial-art program and complete the current week schedule.",
    xp: 280,
    stat: "technique",
    statGain: 2,
    color: MASTERY_META.technique.color
  },
  {
    id: "boss-5k-or-30min",
    type: "boss",
    title: "Boss Quest: 5K or 30-Minute Engine",
    ko: "보스 퀘스트",
    desc: "Run/walk 5K or hold 30 minutes continuous zone-2 cardio.",
    xp: 520,
    stat: "endurance",
    statGain: 4,
    color: MASTERY_META.endurance.color
  },
  {
    id: "boss-clean-rounds",
    type: "boss",
    title: "Boss Quest: Clean Rounds",
    ko: "정확한 라운드",
    desc: "Six 3-minute technical rounds with no sloppy reps: shadow, bag, pads, or footwork.",
    xp: 560,
    stat: "technique",
    statGain: 4,
    color: MASTERY_META.technique.color
  },
  {
    id: "boss-benchmark-bodyweight",
    type: "boss",
    title: "Boss Quest: Bodyweight Benchmark",
    ko: "체중 벤치마크",
    desc: "Max clean push-ups, max pull-ups or rows, 2-minute plank, and mobility cooldown.",
    xp: 540,
    stat: "power",
    statGain: 4,
    color: MASTERY_META.strength.color
  }
];

const WEEKLY_SCHEDULES = [
  ["Mon", "System Base", "Mobility reset + full-body strength. Keep two reps in reserve."],
  ["Tue", "Technique", "Open your martial-art page. Run the current week precision block slowly."],
  ["Wed", "Roadwork", "Easy cardio, jump rope, or walk/run intervals. Finish with breathing."],
  ["Thu", "Fighter Type", "Choose Copy, Speed, Wild, Weapon, King, Iron, Conviction, Grappler, Striker, or Crew."],
  ["Fri", "Precision + Power", "One technique block, then safe power work: bag, med-ball, or carries."],
  ["Sat", "Boss Quest", "Pick one benchmark. Record the result without maxing joints recklessly."],
  ["Sun", "Penalty/Recovery", "If quests were missed: mobility debt, light walk, stretch, and sleep reset."]
];

const TECHNIQUE_LEVELS = [
  { id: "very-beginner", label: "Very Beginner", weeks: "Week 1-4 Foundation", xp: 80, schedule: "3 days/week · 20-30 min · slow reps only" },
  { id: "beginner", label: "Beginner", weeks: "Week 5-8 Beginner", xp: 120, schedule: "3 days/week · 30-40 min · add footwork" },
  { id: "intermediate", label: "Intermediate", weeks: "Week 9-14 Intermediate", xp: 180, schedule: "4 days/week · 40-55 min · light pressure" },
  { id: "advanced", label: "Advanced", weeks: "Week 15-22 Advanced", xp: 260, schedule: "4 days/week · 55-70 min · constraints and timing" },
  { id: "expert", label: "Expert", weeks: "Expert Block", xp: 360, schedule: "5 days/week · 60-80 min · film review and sparring limits" },
  { id: "technique-mastery", label: "Technique Mastery", weeks: "Technique Mastery", xp: 520, schedule: "Ongoing · deliberate practice · coach review when possible" }
];

const LEVEL_DETAIL_BLUEPRINTS = {
  "very-beginner": {
    load: "RPE 4-5. Leave two clean reps in reserve.",
    dose: "2 technique sessions, 1 easy conditioning session, daily 8-minute mobility.",
    recovery: "No hard sparring. Walk, sleep, and joint prep matter more than intensity.",
    unlock: "Clean foundations on video: balance, breathing, and no pain compensation."
  },
  beginner: {
    load: "RPE 5-6. Add volume only when the final set still looks sharp.",
    dose: "3 technique sessions, 1 strength/conditioning day, 1 optional recovery walk.",
    recovery: "Use one rest day after lower-body impact or heavy grip work.",
    unlock: "Complete two full weeks while logging one correction after every session."
  },
  intermediate: {
    load: "RPE 6-7. Introduce timing, partner cues, and fatigue with form caps.",
    dose: "3 skill sessions, 1 strength day, 1 conditioning day, film one round weekly.",
    recovery: "Deload every fourth week or anytime joints feel irritated.",
    unlock: "Show one corrected mistake under light pressure, not just in shadow work."
  },
  advanced: {
    load: "RPE 7-8. Pressure blocks are short, planned, and followed by cooldowns.",
    dose: "4 skill/conditioning sessions, 1 benchmark day, 2 recovery slots.",
    recovery: "Hard contact and high-impact work cannot stack on back-to-back days.",
    unlock: "Clear a fatigue round while preserving guard, posture, exits, and breathing."
  },
  expert: {
    load: "RPE 8 with strict stop rules. Quality decides progression, not suffering.",
    dose: "5 focused sessions: skill, strength, speed, conditioning, review.",
    recovery: "One full rest day plus one low-intensity mobility/breathing day.",
    unlock: "Run a constraint round and explain the purpose of each major movement."
  },
  "technique-mastery": {
    load: "Wave intensity. Three-week build, one-week deload, repeat with one signature test.",
    dose: "Ongoing deliberate practice with coach review, film review, and benchmark retests.",
    recovery: "Mastery requires staying trainable; pain spikes pause the block.",
    unlock: "Build one signature chain that survives fatigue, pressure, and your own body limits."
  }
};

const MARTIAL_ART_TECHNIQUE_PROGRAMS = {
  "boxing-iron-boxing": {
    core: ["Stance line", "High guard", "Jab path", "Cross hip rotation", "Slip-line", "Counter after block", "Iron-body breathing"],
    precision: ["Knuckles land behind shoulder", "Chin hidden without hunching", "Feet exit after every combo"],
    mistakes: ["Reaching with the jab", "Dropping the rear hand", "Holding breath after contact"],
    safety: "Body-shot conditioning must stay controlled. Build with a coach before hard contact."
  },
  "muay-thai-runners-high": {
    core: ["Square stance", "Teep line", "Low-kick turn", "Knee frame", "Elbow angle", "Clinch posture", "Runner's High finish"],
    precision: ["Hip turns before shin lands", "Guard returns after every kick", "Neck stays tall in clinch"],
    mistakes: ["Kicking with a locked knee", "Falling after misses", "Muscling clinch without posture"],
    safety: "Use pads and shin protection. Keep elbow drills technical, not full-contact."
  },
  "yamazaki-kyokushin-karate": {
    core: ["Rooted stance", "Straight punch line", "Low kick return", "Kata precision", "Body conditioning", "Guard break", "UI breathing"],
    precision: ["Hips drive the line", "Shoulders stay relaxed", "No-flinch drills remain controlled"],
    mistakes: ["Trading pain for skill", "Over-tensing", "Letting low kicks twist the knee"],
    safety: "Condition gradually. Pain tolerance is not the same as adaptation."
  },
  "aikido-joint-control": {
    core: ["Breakfall", "Wrist line", "Off-balance step", "Shoulder line", "Throw entry", "Counter-throw", "Exit control"],
    precision: ["Move feet before twisting arms", "Control posture, not just wrist", "Release safely"],
    mistakes: ["Forcing joints", "Standing still during entries", "Ignoring breakfalls"],
    safety: "Partner consent and slow mechanics are mandatory for joint work."
  },
  "systema-security-combat": {
    core: ["Breathing", "Relaxed guard", "Rolls", "Limb redirection", "Escape angle", "Escort footwork", "Disarm simulation"],
    precision: ["Stay loose under pressure", "Exhale through contact", "Keep exits visible"],
    mistakes: ["Going limp instead of relaxed", "Practicing disarms too fast", "Ignoring environment"],
    safety: "Use foam tools and low speed. Escape is the primary win condition."
  },
  "kali-weapon-handling": {
    core: ["Triangle footwork", "Angle one", "Angle two", "Check hand", "Range switch", "Grip endurance", "Exit line"],
    precision: ["Protect weapon-side hand", "Step before swing", "Never cross feet while retreating"],
    mistakes: ["Chasing the weapon", "Standing in range", "Over-gripping"],
    safety: "Foam tools only. Real weapon situations require escape, distance, and help."
  },
  "capoeira-evasion-kicks": {
    core: ["Ginga", "Hip mobility", "Au safety", "Crescent kick", "Level change", "Blind-side entry", "Evasion exit"],
    precision: ["Rhythm stays relaxed", "Eyes track target", "Hands protect during low movement"],
    mistakes: ["Throwing kicks before balance", "Cartwheeling without shoulder prep", "Telegraphing level changes"],
    safety: "Warm wrists, shoulders, hips, and hamstrings before inversions."
  },
  "taekwondo-kick-precision": {
    core: ["Chamber", "Front kick", "Round kick", "Side kick", "Stance switch", "Counter kick", "Spin recovery"],
    precision: ["Chamber returns before foot lands", "Base foot pivots", "Hands do not disappear"],
    mistakes: ["Kicking high before control", "Landing crossed up", "Snapping the knee cold"],
    safety: "Control height first. Knees and hips decide progression."
  },
  "judo-kudo-ssireum-grappling": {
    core: ["Breakfall", "Grip fight", "Hip throw", "Foot sweep", "Trip chain", "Mat return", "Strike-to-throw"],
    precision: ["Break posture before throw", "Hips enter under control", "Neck stays protected"],
    mistakes: ["Yanking with arms", "Skipping breakfalls", "Throwing tired partners carelessly"],
    safety: "Use mats and supervision for throws. No hard throws on unsafe floors."
  },
  "cqc-jeet-kune-do": {
    core: ["Lead-hand line", "Intercept step", "Elbow frame", "Knee line", "Trap range", "Angle exit", "Burst reset"],
    precision: ["Enter on the half-beat", "Do not pause between hit and exit", "Keep shoulders down"],
    mistakes: ["Crowding without angle", "Dropping guard during traps", "Rushing before accuracy"],
    safety: "Pad elbows and knees. Keep CQC drills controlled and technical."
  },
  "copy-adaptive-mixed-martial-arts": {
    core: ["Observe", "Slow copy", "Range switch", "Counter own combo", "Constraint spar", "Style mimicry", "Path chain"],
    precision: ["Copy structure before speed", "Name the purpose of each move", "Keep one base stance stable"],
    mistakes: ["Collecting tricks", "Changing styles every rep", "Copying unsafe contact"],
    safety: "Copy training should be technical study, not reckless imitation."
  },
  "street-fighting-wildness": {
    core: ["Balance", "Guard recovery", "Wall awareness", "Clinch survival", "Escape route", "Scenario round", "Wild rhythm"],
    precision: ["Protect head first", "Frame before striking", "Exit beats winning exchanges"],
    mistakes: ["Random swinging", "Ignoring terrain", "Training ego instead of safety"],
    safety: "Scenario drills are for de-escalation and escape. Avoid real confrontations."
  }
};

function makeLevelMap(stages) {
  return Object.fromEntries(TECHNIQUE_LEVELS.map((level, index) => [level.id, stages[index] || stages[stages.length - 1]]));
}

const ART_RESEARCH_GUIDES = {
  "boxing-iron-boxing": {
    research: "PDF lineage used: Iron Fortress Boxers. Safe translation: jab/footwork, slip-line, breath-led defense, counter timing, and controlled body-conditioning instead of rock/anvil impact.",
    levels: makeLevelMap([
      { focus: "Sweet Science base: stance, guard, jab line, rear-hand return.", drill: "3 rounds mirror stance, 5x2 min jab-only shadowboxing, 4x20 rope steps, 3x60 sec wall-guard hold.", precision: "The jab returns to cheek before the rear hand moves.", mistake: "Reaching with the head past the lead knee.", unlock: "Film 3 clean jab-footwork rounds without crossing feet.", recovery: "Wrists stay neutral; use wraps for bag work." },
      { focus: "In-fighting/out-fighting: 1-2-3, duck, weave, angle exit.", drill: "Slip rope 20 min, bag 5x2 min light combinations, 40 step-back counters, 10 min nasal cooldown.", precision: "Every slip ends with eyes still on target.", mistake: "Ducking from the waist instead of bending knees.", unlock: "Complete 5 bag rounds where every combo finishes with an exit.", recovery: "No hard head contact; keep partner work technical." },
      { focus: "Iron Boxing breath: absorb safe contact, reset, counter.", drill: "Block-counter 8x45 sec, long-guard walk 5x2 min, medicine-ball body brace 3x10 light, roadwork 25-35 min.", precision: "Exhale through contact and reset posture before answering.", mistake: "Tensing the whole body for too long after impact.", unlock: "Counter within one beat after a controlled body-pad touch.", recovery: "Body-shot conditioning needs a coach and low force." },
      { focus: "Speed threshold plus single-fist mechanics: fast entry, clean pivot, no over-swing.", drill: "6x60 m strides, single-shot bag rounds 10x5, med-ball punch throw 5x3, slip-counter timing 6 rounds.", precision: "Power starts from foot pivot, then hip, then shoulder.", mistake: "Trying to punch harder by sacrificing balance.", unlock: "Land 30 clean single shots with identical stance recovery.", recovery: "Shoulders and wrists get prehab before power rounds." },
      { focus: "Counter mastery: trade safely, make the answer arrive in the same frame.", drill: "Counter-only spar constraints, double-end bag 6x2 min, film review 20 min, late-round accuracy test.", precision: "The counter is short enough that the guard never disappears.", mistake: "Waiting to admire the counter instead of exiting.", unlock: "Explain and demonstrate 3 counter choices from one jab entry.", recovery: "Limit hard rounds; fatigue should not change head position." },
      { focus: "Personal Iron Fortress chain: jab entry, absorb/reset, counter, angle out.", drill: "Design one 4-beat chain, pressure-test it 6 rounds, retest weekly with one variable changed.", precision: "Your chain must work when tired and when the opponent changes rhythm.", mistake: "Calling it mastery before it survives constraints.", unlock: "Use your chain in three separate constraint rounds without form collapse.", recovery: "Deload after benchmark weeks." }
    ])
  },
  "yamazaki-kyokushin-karate": {
    research: "PDF lineage used: Yamazaki Iron Body. Safe translation: stance, kata, makiwara-style pads, breath control, and controlled impact tolerance instead of bone-breaking or live-weapon contact.",
    levels: makeLevelMap([
      { focus: "Clan initiation base: rooted stance, straight punch, low-kick line.", drill: "Stance holds 6x45 sec, kata basics 20 min, pad straight punches 5x20, shin mobility 8 min.", precision: "Feet grip the floor while shoulders stay relaxed.", mistake: "Locking knees during stance work.", unlock: "Hold stance and throw 50 straight punches without posture leak.", recovery: "No knuckle impact on hard surfaces." },
      { focus: "Makiwara translation: progressive pad contact and breath-led bracing.", drill: "Wrapped pad punches 5x20, low-kick bag 5x15/side, light medicine-ball brace 3x8, kata 15 min.", precision: "Contact is crisp, not angry; breath lands with the strike.", mistake: "Confusing pain tolerance with useful adaptation.", unlock: "Finish pad contact with zero wrist pain next day.", recovery: "Skin, wrists, shins, and elbows get gradual exposure only." },
      { focus: "Weather/pressure conditioning translated into calm breathing under fatigue.", drill: "Hill walk 20 min, cold-air breathing or cool shower 2 min, bag 6x2 min, defensive shell 5 rounds.", precision: "Breath rhythm stays steady when heart rate rises.", mistake: "Going too hard until kata becomes sloppy.", unlock: "Complete 6 bag rounds with the final round still clean.", recovery: "Cold exposure is optional and never a punishment." },
      { focus: "White Ghost layer: catch, pivot, off-balance, counter.", drill: "Slow parry-catch entries 5x3 min, pivot throw mechanics 30 reps, low-kick return 5x10, film notes.", precision: "Angle before force; the pivot steals posture.", mistake: "Forcing the arm before moving your feet.", unlock: "Show 3 slow catch-to-counter entries with partner consent.", recovery: "Joint-control reps stay slow." },
      { focus: "UI discipline translation: automatic simple answers under fatigue.", drill: "Exhaustion shadowboxing 4x3 min, random pad calls 10x30 sec, kata while tired 15 min, cooldown breathing.", precision: "The answer is boring, clean, and immediate.", mistake: "Chasing a fictional unconscious state instead of reaction training.", unlock: "React to 20 random pad calls with no freeze and no wild swings.", recovery: "Stop if dizziness or sharp pain appears." },
      { focus: "Yamazaki shield chain: stance, brace, pivot, strike, reset.", drill: "Build one defensive chain and test it in slow partner rounds, then in bag fatigue rounds.", precision: "Your chain must stay calm when the opponent pressures forward.", mistake: "Trying to tank everything.", unlock: "Use the chain across striking and clinch-entry constraints.", recovery: "Rotate high-impact days away from leg strength days." }
    ])
  },
  "muay-thai-runners-high": {
    research: "PDF lineage used: Muay Thai & Hardware Tanks. Safe translation: Brekdak/Vasco pressure becomes pad work, clinch posture, roadwork, carries, and last-round output with stop rules.",
    levels: makeLevelMap([
      { focus: "Brekdak foundation: stance, teep, low kick, core.", drill: "3x10 push/squat/core circuit, teep 5x15/side, low-kick form 5x10/side, 20 min walk-run.", precision: "Kick lands after hip turn, not knee snap.", mistake: "Throwing hard kicks before balance exists.", unlock: "50 controlled teeps without stepping across your base.", recovery: "Shins adapt slowly; start on pads." },
      { focus: "Shin/elbow conditioning translated into protected bag and pad rounds.", drill: "Low-kick bag 6x12, elbow pad lines 5x12, knee bag 5x20, neck isometrics 3x20 sec.", precision: "Guard returns before the next strike.", mistake: "Dropping both hands after elbows.", unlock: "Complete 5 pad rounds with clean guard recovery.", recovery: "Use shin guards and avoid bone-on-bone contact." },
      { focus: "Hardware tank: posterior-chain strength and pressure cardio.", drill: "Sled push or incline walk 8 rounds, farmer carry 5x40 m, pull-ups/rows 5 sets, bag 5x3 min.", precision: "Pressure comes from feet and breathing, not flailing.", mistake: "Turning every session into a max-effort test.", unlock: "Keep output steady across all 5 bag rounds.", recovery: "Eat, hydrate, and sleep enough for strength blocks." },
      { focus: "Forbidden-skill translation: legal targets, safe liver/leg entry mechanics.", drill: "Body kick pads 5x10, check-and-return 5 rounds, clinch knees 5x2 min, angle exit after every combo.", precision: "Enter behind a frame; exit before admiring the strike.", mistake: "Training illegal targets or uncontrolled elbows.", unlock: "Demonstrate 3 body-entry setups safely on pads.", recovery: "Hard knees/elbows are pad-only." },
      { focus: "Hero mode translation: last-minute output without form collapse.", drill: "4 normal rounds + 1 final surge, hill sprints 8x12 sec, breath reset 5 min, film final round.", precision: "The final surge still has stance and guard.", mistake: "Calling panic intensity conviction.", unlock: "Increase final-round volume without losing posture.", recovery: "One lower-intensity day after surge work." },
      { focus: "Vasco pressure chain: teep, low kick, clinch knee, exit, repeat.", drill: "Build the chain, pressure-test with pad holder movement, retest weekly under fatigue.", precision: "Forward pressure never removes defense.", mistake: "Becoming reckless because the theme is heroic.", unlock: "Run the chain for 5 rounds with consistent breathing.", recovery: "Deload after benchmark weeks." }
    ])
  },
  "capoeira-evasion-kicks": {
    research: "PDF lineage used: Invisible Attackers & Speed Demons. Safe translation: blind-spot targeting becomes footwork, vision-cone awareness, non-telegraphed entries, and controlled kick precision.",
    levels: makeLevelMap([
      { focus: "Plyometric base: ginga, sprint starts, hip mobility.", drill: "Ginga 12 min, 6x20 m starts, dynamic swings 3x12, target touches 5x30 sec.", precision: "Rhythm stays relaxed enough to change direction.", mistake: "Speeding up before balance is stable.", unlock: "Hold ginga rhythm for 3 rounds without tripping.", recovery: "Warm hips, ankles, wrists, and hamstrings." },
      { focus: "Acrobatics/kick chain base: crescent, round, side, safe au progression.", drill: "Kick chamber 5x10/side, crescent 5x8/side, au wall progression 5x3, jump rope 5x2 min.", precision: "Kick recovers before the next step.", mistake: "Throwing 540/720-style work before landing mechanics.", unlock: "Land 30 kicks per side with stable recovery.", recovery: "No high kicks cold." },
      { focus: "Blind-spot targeting: enter outside the vision cone.", drill: "Angle pad touches 8x30 sec, partner shoulder-line entries 5 rounds, exit-after-strike rule, reaction starts.", precision: "The step creates the blind spot before the strike.", mistake: "Trying to be invisible by just moving faster.", unlock: "Hit 20 angle targets without entering straight-line range.", recovery: "Keep contacts light and technical." },
      { focus: "Speed mastery translation: remove telegraphs.", drill: "No-shoulder-shift entries, one-hand shadow rounds, 10 m start into pad touch, film review.", precision: "No shoulder lift, no hip wind-up before entry.", mistake: "Over-feinting until timing becomes obvious.", unlock: "Film 10 entries and identify zero major telegraphs.", recovery: "Speed days need low total volume." },
      { focus: "James/Sinu logic: pain registers before the opponent reads the line.", drill: "Random pad callouts, blind-side kick-feints, late-round speed test, cooldown mobility.", precision: "Fast means early, clean, and gone.", mistake: "Chasing flashy kicks over angle selection.", unlock: "Maintain accuracy above 80% in random callout rounds.", recovery: "Protect knees/hips with strength work." },
      { focus: "Invisible-attack chain: rhythm change, blind-side step, fast touch, exit.", drill: "Build one speed chain, test it fresh, then test it after conditioning.", precision: "The chain works because of angle and timing, not fantasy speed.", mistake: "Ignoring the exit.", unlock: "Use the chain against two different pad feeds.", recovery: "Deload when sprint speed drops." }
    ])
  },
  "kali-weapon-handling": {
    research: "PDF lineage used: Lethal Weapons/CQC. Safe translation: weapon mastery becomes foam-tool distance, grip, exit habits, and threat awareness. Real weapon situations prioritize escape.",
    levels: makeLevelMap([
      { focus: "Weapon familiarity: stance, grip, angle one/two.", drill: "Foam stick angles 5x20, wrist roller 3 rounds, triangle footwork 10 min, exit callouts.", precision: "Step before swing and protect the live hand.", mistake: "Standing still inside range.", unlock: "Demonstrate 6 angles with a safe exit after each.", recovery: "Forearms recover slowly; rotate grip work." },
      { focus: "Range switch and check-hand basics.", drill: "Check-hand entries 5x2 min, retreat-entry timing 5 rounds, grip endurance carries, foam disarm slow reps.", precision: "Control distance before trying to control the object.", mistake: "Chasing the weapon instead of moving the body.", unlock: "Show 3 slow disarm simulations without yanking.", recovery: "Disarms remain low-speed and consent-based." },
      { focus: "CQC circle translation: spatial awareness inside one step.", drill: "One-meter circle footwork, safe target-line pads, 5-point awareness calls, escape sprint x10.", precision: "Know where the exit is before entering.", mistake: "Turning drill targets into harmful vital-strike practice.", unlock: "Complete circle drills without stepping across your feet.", recovery: "Use foam tools and protective eyewear if needed." },
      { focus: "Unconventional object defense: belt/towel/stick awareness, not real harm.", drill: "Object-control scenarios, two-on-one wrist control, escort footwork, wall-exit practice.", precision: "Hands protect centerline while feet leave danger.", mistake: "Trying to win a weapon duel.", unlock: "Choose escape route correctly in 10 scenario prompts.", recovery: "Low stress first; panic learning is bad learning." },
      { focus: "Lethal blade translation: perfect edge awareness and distance discipline.", drill: "No-contact line drills, foam spar constraints, film footwork, wrist mobility/prehab.", precision: "The safest technique is not being reachable.", mistake: "Equating weapon training with aggression.", unlock: "Finish 5 foam rounds with clean distance management.", recovery: "No hard sparring with rigid tools." },
      { focus: "Weapon specialist chain: read threat, angle out, control line, escape.", drill: "Build one escape-first chain and test across foam stick, towel, and empty-hand feeds.", precision: "Escape is the win condition.", mistake: "Making the chain too complex.", unlock: "Execute the same chain under three safe feeds.", recovery: "End with downregulation breathing." }
    ])
  },
  "cqc-jeet-kune-do": {
    research: "PDF lineage used: Lethal Weapons & CQC Assassins. Safe translation: Warren/Manager Kim style becomes close-range entries, interception, control, and rapid exits with padded drills.",
    levels: makeLevelMap([
      { focus: "Lead-hand line and intercept step.", drill: "Lead straight 5x20, step-in step-out 10 min, elbow frame pads 5x10, exit footwork.", precision: "Enter on the half-beat and leave on the next beat.", mistake: "Crowding without an angle.", unlock: "Land 40 lead-hand touches while exiting cleanly.", recovery: "Elbows and knees stay padded." },
      { focus: "Sticky-hands feel and basic clinch break.", drill: "Chi-sao style sensitivity 5x2 min, clinch pummel 5 rounds, body-head pad chain 5x12.", precision: "Feel pressure changes through the forearm, not the ego.", mistake: "Grabbing and freezing.", unlock: "Break clinch and exit safely in 10 slow reps.", recovery: "Partner neck/shoulders stay protected." },
      { focus: "CQC circle: strike/control inside one step.", drill: "One-step entry calls, 3-strike pad burst, wall-angle exit, breath reset after every burst.", precision: "No pause between read, entry, strike, and exit.", mistake: "Throwing too many strikes after the opening is gone.", unlock: "Complete 10 bursts with identical foot recovery.", recovery: "Burst training is short; do not grind sloppy reps." },
      { focus: "Heart-stop fiction translated into safe chest-line pad precision.", drill: "Centerline pad targeting, shoulder-line control, knee/elbow safe line, scenario exit.", precision: "Accuracy and control matter more than force.", mistake: "Practicing harmful targets on people.", unlock: "Hit pad targets cleanly under random callouts.", recovery: "No chest strikes on partners." },
      { focus: "New CQC: extend range without losing structure.", drill: "2-step entry, 3 m angle exit, 50-touch precision challenge, film review.", precision: "Longer range still ends with your base underneath you.", mistake: "Rushing until shoulders rise and guard drops.", unlock: "Run a 50-touch drill above 85% accuracy.", recovery: "Hands, shoulders, and neck get cooldown work." },
      { focus: "CQC signature chain: intercept, frame, burst, exit.", drill: "Build one 4-beat close-range chain and test it with pad-holder pressure.", precision: "Compressed, clean, repeatable.", mistake: "Adding moves that do not solve the exchange.", unlock: "Use the chain fresh and tired without changing shape.", recovery: "Rotate close-range days with mobility days." }
    ])
  },
  "judo-kudo-ssireum-grappling": {
    research: "PDF lineage used: Grapplers & Cheonliang Kudo Masters. Safe translation: Mujin/Vin grip power becomes breakfalls, grip fighting, throws on mats, posterior-chain strength, and controlled Kudo transitions.",
    levels: makeLevelMap([
      { focus: "Cheonliang base: ukemi, grip, stance, hip position.", drill: "Breakfalls 10 min, towel hangs 4x20 sec, collar/sleeve grips 5 rounds, hip entry steps.", precision: "Break posture before trying to throw.", mistake: "Skipping breakfalls because throws look cooler.", unlock: "Perform 30 safe breakfalls and 20 grip entries.", recovery: "Mats and supervision for throwing." },
      { focus: "Ssireum/Judo fundamentals: kuzushi, hip throws, foot sweeps.", drill: "Kuzushi 5x2 min, hip throw entries 40 reps, foot sweep timing 5 rounds, gi/towel pull-ups.", precision: "Hands guide; legs and hips do the work.", mistake: "Yanking with arms.", unlock: "Demonstrate 3 entries on both sides slowly.", recovery: "Neck and fingers need mobility after grip work." },
      { focus: "Hell-training translation: heavy grip, back, and legs without unsafe stunts.", drill: "Farmer carry 6x40 m, deadlift or hinge 5x5, rope/towel rows, mat return entries.", precision: "Grip connects to hips before the pull.", mistake: "Trying to uproot objects or train reckless feats.", unlock: "Carry bodyweight-equivalent load safely across sets.", recovery: "Grip deload after high-volume weeks." },
      { focus: "Kudo integration: catch strike, clinch, off-balance, safe mat return.", drill: "Strike-to-grip entries 5 rounds, trip chain 40 reps, pressure pins 5x60 sec, escape bad position.", precision: "Strike creates the grip; grip creates the throw.", mistake: "Throwing tired partners carelessly.", unlock: "Enter from a pad feed into a controlled mat return.", recovery: "No hard throws on unsafe floors." },
      { focus: "Iron grip expert: latch, move, finish position.", drill: "Grip breaks 5 rounds, no-gi pummeling, pressure pin transitions, film one round.", precision: "Once attached, your feet keep improving the angle.", mistake: "Holding grip without moving position.", unlock: "Control a position for 60 sec while partner gives light resistance.", recovery: "Forearms and fingers need contrast/mobility." },
      { focus: "Mujin path chain: grip, angle, uproot, control.", drill: "Build one throw/control chain and pressure-test from multiple grips.", precision: "Angle makes the bigger body feel lighter.", mistake: "Treating strength as a replacement for kuzushi.", unlock: "Apply the chain from two grips and one failed-entry recovery.", recovery: "Deload lower back and grip after benchmarks." }
    ])
  },
  "copy-adaptive-mixed-martial-arts": {
    research: "PDF lineage used: Copy Geniuses. Safe translation: visual tracking, slow copy, muscle-memory encoding, hardware base, range switching, fatigue reaction, and personal path design.",
    levels: makeLevelMap([
      { focus: "Awakening: baseline cardio plus visual tracking.", drill: "Walk/run 25 min, mirror jab-cross 5x2 min, pendulum eye tracking 5 min, mobility 10 min.", precision: "Copy posture first, then speed.", mistake: "Copying a highlight without the stance underneath.", unlock: "Reproduce one basic combo slowly from video with stable balance.", recovery: "Eyes and joints get breaks." },
      { focus: "Software expansion: encode one move at a time.", drill: "100 slow reps per chosen move, 20 min flexibility, watch-copy-repeat notes, stance reset after every rep.", precision: "Name what the move solves before repeating it.", mistake: "Collecting techniques without a base.", unlock: "Use one copied move correctly in a one-rule drill.", recovery: "Stop if flexibility work causes joint pain." },
      { focus: "Hardware forging: strength and mobility to support copied movements.", drill: "Full-body strength 4x8, roadwork 30 min, range switch drills, defensive shell under fatigue.", precision: "Your body must earn the movement before intensity.", mistake: "Overloading joints to mimic impossible fiction.", unlock: "Keep form while switching from strike to sprawl to stand-up.", recovery: "Progress strength weekly, not daily." },
      { focus: "First Gen mimicry: copy principles, not just shapes.", drill: "Study one fighter style, mimic for 3 slow rounds, counter your own combo, blindfolded footwork only.", precision: "Copy the reason behind the technique.", mistake: "Changing identity every round.", unlock: "Explain the principle behind one copied chain.", recovery: "Blindfold work is footwork-only and supervised." },
      { focus: "UI translation: automatic reactions after controlled fatigue.", drill: "Light exhaustion block, random pad defense 10x30 sec, breath reset, film reaction delay.", precision: "The body chooses simple answers under pressure.", mistake: "Trying to force unconsciousness.", unlock: "React correctly to 20 random cues after conditioning.", recovery: "No near-death or unsafe exhaustion methods." },
      { focus: "Infinite convergence: copied library becomes personal path.", drill: "Build one signature chain from two copied sources and one body-specific strength.", precision: "The chain should fit your limbs, lungs, and strongest attribute.", mistake: "Remaining only a library.", unlock: "Use your chain under two constraints and one fatigue test.", recovery: "Deload after path tests." }
    ])
  }
};

const RANKS = [
  { label: "Civilian", ko: "일반인", xp: 0, next: 300, color: "#4d5563", lore: "Baseline body. Build posture, breath, and consistency before chasing modes." },
  { label: "Fighter", ko: "파이터", xp: 300, next: 800, color: "#9b4b21", lore: "The system noticed you. Your reps are starting to look like intent." },
  { label: "Worker", ko: "워커", xp: 800, next: 1800, color: "#c26a18", lore: "Discipline becomes a job: conditioning, food, sleep, and form every week." },
  { label: "Crew Member", ko: "크루원", xp: 1800, next: 3500, color: "#2368ff", lore: "You belong to something. Strength forged through brotherhood." },
  { label: "Crew Head", ko: "크루장", xp: 3500, next: 6000, color: "#8d4dff", lore: "Others follow your back. Your reputation starts doing some of the fighting." },
  { label: "King", ko: "왕", xp: 6000, next: 10000, color: "#ff333d", lore: "A regional wall. Your specialty is no longer a hobby; it is an identity." },
  { label: "First Gen", ko: "1세대", xp: 10000, next: 16000, color: "#f0a42f", lore: "Iron will and iron body. Every weakness has been paid for in repetition." },
  { label: "Ten Geniuses", ko: "10인의 천재", xp: 16000, next: 25000, color: "#05a9c8", lore: "A weapon sharpened by study, cruelty, and pressure testing." },
  { label: "The Wall", ko: "벽", xp: 25000, next: 50000, color: "#f4f4f4", lore: "You are the limit other fighters break themselves against." }
];

const FIGHTER_DEEP_DIVE = {
  "James Lee": {
    ko: "이동규 (DG)",
    quote: "A younger version of me would struggle against UI Gun or UI Daniel.",
    uniqueSkill: "Invisible Attacks: speed and blind-spot selection make the strike arrive before the guard forms.",
    fightingStyle: "Capoeira-influenced evasion, speed mastery, relaxed pocket control.",
    physique: "Lean, tall, low body-fat build: calisthenics density over bulky mass.",
    achievement: "Known in the story as the 1st Generation legend and an era-ending benchmark.",
    trainingMethod: "Ginga footwork, blind-side pad entries, single-hand shadow rounds, sprint direction changes."
  },
  "UI Daniel Park": {
    ko: "박형석",
    quote: "I want to protect my friends.",
    uniqueSkill: "Copy plus UI-inspired automatic response: the body chooses an efficient answer under pressure.",
    fightingStyle: "Adaptive mixed martial arts: boxing, kicks, grappling, Kyokushin, Aikido, and copied techniques.",
    physique: "Perfect-body lane: tall, balanced, athletic muscle with extreme movement efficiency.",
    achievement: "The app treats Daniel as the main copy/UI training reference.",
    trainingMethod: "Watch-copy-repeat drills, exhaustion technique rounds, calm breathing after every exchange."
  },
  "Gun Park": {
    ko: "박종건",
    quote: "Life is all about consequences.",
    uniqueSkill: "Ultra Instinct discipline: cold technical response while absorbing pressure.",
    fightingStyle: "Yamazaki Kyokushin base with Aikido, weapons, grappling, and broad martial arts study.",
    physique: "Tall, dense, lean-muscular build with heavy impact tolerance.",
    achievement: "Nurture genius and one of the series' clearest technique-study references.",
    trainingMethod: "Kata precision, heavy bag full-power rounds, no-flinch body conditioning, counter study."
  },
  "Tom Lee": {
    ko: "이도규",
    quote: "The wall does not move for anyone.",
    uniqueSkill: "Wild pressure: grip, instinct, and physical threat erase clean exchanges.",
    fightingStyle: "Animal instinct, dirty-range pressure, crushing clinch, unpredictable counters.",
    physique: "Massive power-athlete frame: carries, pulls, and grip strength dominate.",
    achievement: "White Tiger Job Centre founder and Fighting Genius reference point.",
    trainingMethod: "Farmer carries, sandbag lifts, wall wrestling, pummeling, sled pushes."
  },
  "Goo Kim": {
    ko: "김준구",
    quote: "Range is a weapon before the weapon appears.",
    uniqueSkill: "Object threat: converts distance, timing, and improvised tools into fight control.",
    fightingStyle: "Street fighting with weapon specialization and sudden angle changes.",
    physique: "Tall, sharp, flexible build: fast hands, strong wrists, relaxed shoulders.",
    achievement: "One of the main weapon-specialist standards in the roster.",
    trainingMethod: "Foam-weapon timing, wrist endurance, retreat-entry footwork, grip work."
  },
  "Zack Lee": {
    ko: "이진성",
    quote: "I no longer fear the storm.",
    uniqueSkill: "Iron Boxing: absorb, reset, counter, and stay accurate late in the round.",
    fightingStyle: "Boxing foundation upgraded by Gongseob Ji's endurance philosophy.",
    physique: "Compact, resilient, boxer-athlete build with legs and lungs trained for long rounds.",
    achievement: "Core endurance mastery and boxing progression reference.",
    trainingMethod: "Roadwork, rope, counter-only sparring, body-shot conditioning, long guard rounds."
  },
  "Vasco": {
    ko: "이은태",
    quote: "Effort will not betray you.",
    uniqueSkill: "Runner's High pressure: conviction and conditioning keep output rising.",
    fightingStyle: "Muay Thai pressure, knees, elbows, low kicks, and Burn Knuckles heart.",
    physique: "Large, functional muscle: heavy shoulders, thick legs, high work capacity.",
    achievement: "The app's main conviction and Muay Thai training anchor.",
    trainingMethod: "Kicks, clinch knees, hill sprints, compound lifts, last-minute flurries."
  },
  "Vin Jin": {
    ko: "진호빈",
    quote: "Grip turns size into leverage.",
    uniqueSkill: "Ssireum-style grip and throw pressure linked to Cheonliang heritage.",
    fightingStyle: "Mujin-style Ssireum, grappling, throws, and rough clinch control.",
    physique: "Explosive grappler frame: strong neck, back, hips, hands, and posterior chain.",
    achievement: "Cheonliang grappling reference and path-to-identity fighter.",
    trainingMethod: "Grip fighting, throws, rope climbs, deadlifts, hip switches."
  },
  "Warren Chae": {
    ko: "채원석",
    quote: "Enter fast. Finish before the pause.",
    uniqueSkill: "CQC burst: compress read, entry, and finish into one short exchange.",
    fightingStyle: "Jeet Kune Do, CQC, close-range chains, interception, and body-head pressure.",
    physique: "Lean, fast, durable frame built for repeated close-range bursts.",
    achievement: "Hostel's close-quarters specialist and CQC progression anchor.",
    trainingMethod: "Lead-hand entries, intercept counters, elbow/knee safety lines, close-range pads."
  },
  "Johan Seong": {
    ko: "성요한",
    quote: "A copied move becomes dangerous when it becomes yours.",
    uniqueSkill: "Copy genius moving toward an uncopiable personal path.",
    fightingStyle: "Copy-adaptive MMA, boxing layers, kicks, grappling responses.",
    physique: "Lean, fast, wiry build focused on technical speed over mass.",
    achievement: "Core copy/path reference for the app's personal-system logic.",
    trainingMethod: "Film-copy reps, constraint sparring, style mimicry, counter your own best chain."
  },
  "Sinu Han": {
    ko: "한신우",
    quote: "Blind spots are doors.",
    uniqueSkill: "Invisible Attacks through speed plus placement.",
    fightingStyle: "Speed mastery, blind-side entries, timing traps.",
    physique: "Lean endurance striker: light frame, high rhythm, quick recovery.",
    achievement: "Big Deal speed and invisible-attack reference.",
    trainingMethod: "Reaction starts, angle pad rounds, blind-side entries, footwork exits."
  }
};

const MASTERIES_V2 = [
  {
    id: "strength",
    label: "Strength",
    ko: "힘의 경지",
    color: "#ff333d",
    users: "Samuel Seo · Taesoo Ma · Hudson Ahn",
    quote: "When your body burns, that is when you keep form.",
    desc: "Push until force becomes identity. One lift, one strike, one line of power.",
    philosophy: "Strength mastery in this app means taking a specific physical attribute and training it past comfort: fist, pull, push, grip, or hip drive.",
    achieve: "Pick one primary movement and repeat it with progressive overload. Stop chasing variety until the foundation gets frightening.",
    protocols: [
      {
        name: "Iron Fist Protocol",
        time: "60min",
        intensity: "Extreme",
        sets: ["Bench press 5x5", "Deadlift 5x3", "Squat 5x5", "Overhead press 4x6", "Weighted dips 4x8", "Knuckle push-up progression 3x20"],
        note: "Keep rest strict. If your wrists or shoulders complain, regress immediately and earn the harder version."
      },
      {
        name: "Taesoo One Punch",
        time: "45min",
        intensity: "Brutal",
        sets: ["Max-effort med-ball chest throw 6x3", "Heavy bag single-shot 10x5", "Rotator cuff circuit 3x15", "Wrist roller 4 rounds", "Explosive push-up 5x8"],
        note: "Power is whole-body timing. Do not punch walls, hardwood, or anything that breaks your hand."
      },
      {
        name: "Samuel Burn",
        time: "75min",
        intensity: "Legend",
        sets: ["Deadlift wave 6x3", "Romanian deadlift 4x10", "Bent row 4x8", "Farmer carry 6x40m", "Grip crush 100 reps each hand"],
        note: "Train the burn without turning it into reckless pain. Technique is the limit."
      }
    ]
  },
  {
    id: "speed",
    label: "Speed",
    ko: "속도의 경지",
    color: "#2368ff",
    users: "James Lee · Sinu Han · Charles Choi",
    quote: "Arrive before they understand the angle.",
    desc: "Move fast with the whole system: eyes, feet, hips, hands, and exit.",
    philosophy: "Speed mastery is not just hand speed. It is reaction time, angle theft, hip snap, rhythm change, and the ability to leave before the counter starts.",
    achieve: "Train short bursts fresh, then train accuracy while tired. Speed that loses form is just panic.",
    protocols: [
      {
        name: "Phantom Footwork",
        time: "50min",
        intensity: "High",
        sets: ["Jump rope 5x3min", "Ginga flow 12min", "10m reaction starts x12", "Lateral shuffle 6x20m", "Speed bag 5x2min"],
        note: "Feet first. Hands only become invisible when the base moves."
      },
      {
        name: "Invisible Attack Line",
        time: "40min",
        intensity: "Extreme",
        sets: ["Blind-side shadowboxing 6x3min", "Random pad callouts 8x30sec", "Depth jumps 4x6", "Sprint starts 10x10m", "Exit after every strike 5 rounds"],
        note: "This is a safe athletic translation of invisible attacks, not a promise of fiction."
      },
      {
        name: "Capoeira Evasion",
        time: "60min",
        intensity: "High",
        sets: ["Ginga 15min", "Au progression 4x6", "Crescent kick 80 reps", "Dodge-counter drill 5 rounds", "Balance holds 4x45sec"],
        note: "Relaxed rhythm beats stiff speed."
      }
    ]
  },
  {
    id: "endurance",
    label: "Endurance",
    ko: "지구력의 경지",
    color: "#19c566",
    users: "Gongseob Ji · Zack Lee · Vin Jin",
    quote: "The other fighter gets tired first.",
    desc: "Iron body, lungs, and repeat output. Stay accurate after punishment.",
    philosophy: "Endurance mastery means making fatigue predictable. You build a body that keeps its guard, breath, and technique when the round turns ugly.",
    achieve: "Run, carry, breathe, and spar with form caps. The goal is durable precision, not self-destruction.",
    protocols: [
      {
        name: "Iron Boxing",
        time: "90min",
        intensity: "Extreme",
        sets: ["Roadwork 8-10km", "Rope 6x2min", "Counter after block 8x45sec", "Bodyweight ladder 20-15-10", "Long guard rounds 5x3min"],
        note: "Controlled contact only. Body-shot conditioning needs a coach."
      },
      {
        name: "Crocodile Skin",
        time: "75min",
        intensity: "Brutal",
        sets: ["Loaded carry 5x100m", "Tempo push-ups 5x25", "Goblet squat 5x20", "Plank 5x2min", "Nasal breathing cooldown 10min"],
        note: "Recovery is part of endurance. Sleep and food decide whether adaptation happens."
      },
      {
        name: "Iron Road Work",
        time: "120min",
        intensity: "High",
        sets: ["Zone 2 run 60min", "Final 8x100m strides", "Pull-up density 30 reps", "Mobility 20min", "Cold rinse optional"],
        note: "You should finish tired but trainable tomorrow."
      }
    ]
  },
  {
    id: "technique",
    label: "Technique",
    ko: "기술의 경지",
    color: "#f4f4f4",
    users: "Gun Park · Johan Seong · Warren Chae",
    quote: "Nothing wasted. Nothing late.",
    desc: "Study, simplify, and repeat until movement becomes clean under pressure.",
    philosophy: "Technique mastery removes unnecessary motion. The fighter looks calm because the answer has already been drilled.",
    achieve: "Study every exchange slowly. Film yourself. Fix one mistake per week instead of collecting tricks.",
    protocols: [
      {
        name: "Yamazaki Study",
        time: "90min",
        intensity: "High",
        sets: ["Kata/form 25min", "Aikido entry mechanics 20min", "Shadowbox with no wasted motion 5x5min", "Pad work technique only 5 rounds", "Fight film notes 15min"],
        note: "Treat combat like an academic subject: question why every movement exists."
      },
      {
        name: "Junkyard Copy",
        time: "100min",
        intensity: "Extreme",
        sets: ["Watch-copy-repeat 20min", "Counter your own combo 5 rounds", "One-rule sparring 5 rounds", "Blind-spot entries 15min", "Breath reset 10min"],
        note: "Copy is a learning tool. Your path starts when you stop being a library."
      },
      {
        name: "CQC Compression",
        time: "55min",
        intensity: "High",
        sets: ["Lead-hand entries 6x2min", "Interception pad calls 8x30sec", "Elbow/knee safety line 5 rounds", "Clinch break drill 20 reps", "Exit angle sprint x10"],
        note: "Close-range training should stay controlled and padded."
      }
    ]
  },
  {
    id: "conviction",
    label: "Conviction",
    ko: "신념의 경지",
    color: "#8d4dff",
    users: "Daniel Park · Vasco · Jake Kim",
    quote: "Purpose turns one more rep into a promise.",
    desc: "The emotional engine: protection, pride, guilt, or purpose turned into output.",
    philosophy: "Conviction cannot be forced like a lift. It appears when training has a reason bigger than aesthetics.",
    achieve: "Name the person or promise you train for. Then build measurable habits around it.",
    protocols: [
      {
        name: "Overcome Protocol",
        time: "60min",
        intensity: "Spiritual",
        sets: ["Write the reason 5min", "Failure-safe push set", "Rest 60sec and continue", "Breath box 4x4x4x4", "Final clean set only"],
        note: "Intensity without a reason burns out. Reason without structure stays fantasy."
      },
      {
        name: "Heat Mode Translation",
        time: "45min",
        intensity: "Extreme",
        sets: ["Journal one weakness 5min", "Sprint intervals 8 reps", "Heavy bag flurry 8x20sec", "Cold shower 2-5min", "Calm technical shadowbox 10min"],
        note: "Do not train from self-hate forever. Convert emotion into discipline and then cool down."
      },
      {
        name: "Vasco Heart",
        time: "90min",
        intensity: "High",
        sets: ["Compound 5x5", "Hill sprint 8 reps", "Clinch knees 5 rounds", "Service action plan 5min", "Quiet cooldown 10min"],
        note: "Protective strength should make you more controlled, not more reckless."
      }
    ]
  }
];

const MASTERY_PROGRAMS = Object.fromEntries(MASTERIES_V2.map((mastery) => [mastery.id, {
  core: [
    `${mastery.label} posture and breathing`,
    `${mastery.label} base mechanics`,
    `${mastery.label} under fatigue`,
    `${mastery.label} under constraints`,
    `${mastery.label} plus film notes`,
    `${mastery.label} identity chain`
  ],
  precision: [
    "Stop every set before form breaks",
    "Log one measurable number per session",
    "Make the last rep look like the first",
    "Use the Lookism concept as theme, not as unsafe literal behavior"
  ],
  mistakes: [
    "Testing max effort too often",
    "Skipping warm-ups",
    "Mistaking soreness for progress",
    "Ignoring sleep, food, or injury warning signs"
  ],
  safety: "Progressive overload, clean technique, and recovery decide the result. Fictional mastery is only the motivational frame.",
  physique: `${mastery.label} physique goal: ${mastery.achieve}`,
  levels: makeMasteryLevels(mastery),
  sourceLinks: [["Lookism Mastery", WIKI_MASTERY_URL], ["CDC Activity", CDC_ACTIVITY_URL]]
}]));

const UI_STAGES = [
  {
    stage: 0,
    name: "Controlled Normal",
    ko: "일반 상태",
    color: "#9ca3af",
    desc: "Standard conscious fighting. Fear, hesitation, and overthinking still leak into performance.",
    reach: "Start here. Build basic strength, cardio, mobility, and one striking/grappling base.",
    focus: "Fundamentals, consistency, sleep, food, and clean technique.",
    characters: ["All beginners", "Pre-mastery fighters"]
  },
  {
    stage: 1,
    name: "Heat Mode",
    ko: "열혈 모드",
    color: "#ff333d",
    desc: "A real-life translation of heat mode is emotional arousal converted into effort without losing form.",
    reach: "Use hard intervals, journaling, and last-round simulations. Cool down deliberately after.",
    focus: "Stress control, aggression management, safe failure sets.",
    characters: ["Daniel Park", "Samuel Seo", "Jake Kim"]
  },
  {
    stage: 2,
    name: "Uncontrolled UI",
    ko: "무의식 (비제어)",
    color: "#8d4dff",
    desc: "The fictional state is unconscious combat. In training, treat this as automatic reaction under fatigue.",
    reach: "Exhaust the body lightly, then perform simple defensive responses with strict safety limits.",
    focus: "Reaction drills, breath control, technical sparring, decision latency.",
    characters: ["UI Daniel", "Yamazaki bloodline"]
  },
  {
    stage: 3,
    name: "Controlled UI",
    ko: "무의식 (제어)",
    color: "#05a9c8",
    desc: "The practical goal is calm automatic response: no panic, no wasted motion, no ego rush.",
    reach: "Repeat limited scenarios until the correct answer appears without conscious delay.",
    focus: "Cold sparring, constraint rounds, film review, recovery breathing.",
    characters: ["Gun Park", "High-level Daniel"]
  },
  {
    stage: 4,
    name: "Path to Pinnacle",
    ko: "정점으로 가는 길",
    color: "#f4f4f4",
    desc: "Mastery perfects what exists. A path creates something that only your body and history can use.",
    reach: "Combine your best attribute, your best martial base, and your real reason for training.",
    focus: "Signature chains, weekly fight notebook, constraint design.",
    characters: ["Gapryong Kim", "Johan Seong", "Daniel Park"]
  }
];

const storedProgress = loadProgress();
const storedProfile = loadProfileState();
const storedAiConfig = loadAiConfig();
const storedChatMessages = loadChatMessages();
const storedUserSettings = loadUserSettings();
const storedTrainingProgress = loadTrainingProgress();
const storedTrainingLogs = loadTrainingLogs();
storedUserSettings.diagnosisCompleted = Boolean(storedUserSettings.diagnosisCompleted || storedProfile.profileAnalysis || storedProfile.appliedJourney);
storedUserSettings.awakeningAccepted = Boolean(storedUserSettings.awakeningAccepted || storedUserSettings.onboardingComplete || storedUserSettings.diagnosisCompleted);

const state = {
  view: initialViewFromSaved(storedUserSettings, storedProfile, storedProgress),
  query: "",
  selectedId: roster.find((fighter) => fighter.name === "James Lee")?.id || roster[0].id,
  selectedMastery: "",
  selectedArtId: "",
  selectedFighterTypeId: "",
  trainTab: "fighter-types",
  selectedTechniqueLevel: "very-beginner",
  vaultFilter: storedUserSettings.vaultFilter || "all",
  expandedStage: 0,
  totalXp: storedProgress.totalXp,
  level: storedProgress.level,
  completedQuestIds: storedProgress.completedQuestIds,
  streak: storedProgress.streak,
  selectedPath: storedProgress.selectedPath,
  stats: storedProgress.stats,
  penaltyDebt: storedProgress.penaltyDebt,
  lastActiveDate: storedProgress.lastActiveDate,
  streakAwardedDate: storedProgress.streakAwardedDate,
  profile: storedProfile.profile,
  profileAnalysis: storedProfile.profileAnalysis,
  appliedJourney: storedProfile.appliedJourney,
  aiConfig: storedAiConfig,
  aiCoachStatus: "",
  aiCoachResult: storedProfile.aiCoachResult,
  profileValidation: { errors: [], warnings: [] },
  chatOpen: false,
  chatMessages: storedChatMessages,
  chatDraft: "",
  chatStatus: "",
  chatBusy: false,
  mobileMenuOpen: false,
  chatLastSyncedAt: "",
  chatSyncTimer: null,
  assistantPosition: loadAssistantPosition(),
  assistantDragging: false,
  assistantDragSuppress: false,
  userSettings: storedUserSettings,
  trainingProgress: storedTrainingProgress,
  trainingLogs: storedTrainingLogs,
  profileResult: "",
  cloudConfig: null,
  cloudClient: null,
  cloudUser: null,
  cloudEmail: "",
  cloudPassword: "",
  cloudStatus: "Cloud sync is loading...",
  cloudReady: false,
  cloudBusy: false,
  cloudLastSyncedAt: "",
  cloudSyncTimer: null
};

const wikiCache = {};
const app = document.querySelector("#app");

function slug(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function todayKey() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function defaultSystemStats() {
  return Object.fromEntries(SYSTEM_STATS.map(([key]) => [key, 5]));
}

function defaultSystemProgress() {
  const totalXp = 0;
  return {
    totalXp,
    level: levelFromXp(totalXp),
    completedQuestIds: [],
    streak: 0,
    selectedPath: "Weak Daniel Foundation",
    stats: defaultSystemStats(),
    penaltyDebt: false,
    lastActiveDate: todayKey(),
    streakAwardedDate: ""
  };
}

function defaultProfileValues() {
  return Object.fromEntries(PROFILE_FIELDS.map((field) => [field.key, field.key === "equipment" ? "bodyweight" : field.key === "goal" ? "general" : ""]));
}

function defaultProfileState() {
  return {
    profile: defaultProfileValues(),
    profileAnalysis: null,
    appliedJourney: null,
    aiCoachResult: ""
  };
}

function loadProfileState() {
  const fallback = defaultProfileState();
  try {
    const raw = localStorage.getItem(PROFILE_STORAGE_KEY);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return {
      ...fallback,
      ...parsed,
      profile: { ...fallback.profile, ...(parsed.profile || {}) },
      profileAnalysis: parsed.profileAnalysis || null,
      appliedJourney: parsed.appliedJourney || null,
      aiCoachResult: parsed.aiCoachResult || ""
    };
  } catch {
    return fallback;
  }
}

function saveProfileState() {
  try {
    localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify({
      profile: state.profile,
      profileAnalysis: state.profileAnalysis,
      appliedJourney: state.appliedJourney,
      aiCoachResult: state.aiCoachResult
    }));
  } catch {
    // The archive remains usable if localStorage is unavailable.
  }
}

function loadAiConfig() {
  const fallback = { apiKey: "", proxyEndpoint: defaultAiProxyEndpoint() };
  try {
    const parsed = JSON.parse(localStorage.getItem(AI_CONFIG_STORAGE_KEY) || "null");
    const merged = { ...fallback, ...(parsed || {}) };
    if (!merged.proxyEndpoint) merged.proxyEndpoint = fallback.proxyEndpoint;
    return merged;
  } catch {
    return fallback;
  }
}

function defaultAiProxyEndpoint() {
  try {
    const host = window.location.hostname;
    if (host && host !== "127.0.0.1" && host !== "localhost") return "/api/coach";
  } catch {
    // Node smoke tests do not expose location.
  }
  return "http://127.0.0.1:8787/coach";
}

function shouldUseOfflineAiFallback(endpoint) {
  const normalized = String(endpoint || "").replace(/\/$/, "");
  return isStaticLocalPreview() && normalized === "http://127.0.0.1:8787/coach";
}

function saveAiConfig() {
  try {
    localStorage.setItem(AI_CONFIG_STORAGE_KEY, JSON.stringify(state.aiConfig));
  } catch {
    // Optional AI config is allowed to fail silently.
  }
}

function createChatId() {
  const cryptoApi = globalThis.crypto;
  if (cryptoApi?.randomUUID) return cryptoApi.randomUUID();
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (char) =>
    (Number(char) ^ ((cryptoApi?.getRandomValues ? cryptoApi.getRandomValues(new Uint8Array(1))[0] : Math.random() * 255) & 15) >> Number(char) / 4).toString(16)
  );
}

function normalizeCoachCards(cards) {
  if (!Array.isArray(cards)) return [];
  return cards
    .map((card) => ({
      title: String(card?.title || "").trim().slice(0, 48),
      body: String(card?.body || card?.text || "").trim().slice(0, 520),
      action: String(card?.action || "").trim().slice(0, 40)
    }))
    .filter((card) => card.title && card.body)
    .slice(0, 4);
}

function coachCardsFromText(text) {
  const clean = String(text || "").trim();
  if (!clean) return [];
  const labels = ["Condition", "Today's Quest", "Training Focus", "Recovery", "Recovery/Diet", "Next Rank"];
  const cards = [];
  const lines = clean.split(/\n+/).map((line) => line.replace(/^[-*]\s*/, "").trim()).filter(Boolean);
  for (const line of lines) {
    const match = line.match(/^([^:]{3,34}):\s*(.+)$/);
    if (!match) continue;
    const title = match[1].replace(/\*\*/g, "").trim();
    if (!labels.some((label) => title.toLowerCase().includes(label.toLowerCase().split("/")[0]))) continue;
    cards.push({ title, body: match[2].replace(/\*\*/g, "").trim() });
  }
  if (cards.length) return normalizeCoachCards(cards);
  const fallbackParts = clean.split(/\n{2,}/).filter(Boolean);
  if (fallbackParts.length >= 3) {
    return normalizeCoachCards([
      { title: "Condition", body: fallbackParts[0] },
      { title: "Today's Quest", body: fallbackParts[1] },
      { title: "Recovery", body: fallbackParts[2] },
      { title: "Next Rank", body: fallbackParts[3] || "Clear quests and boss tests before chasing harder work." }
    ]);
  }
  return [];
}

function normalizeChatMessage(message) {
  if (!message || typeof message !== "object") return null;
  const role = ["user", "assistant"].includes(message.role) ? message.role : "assistant";
  const text = String(message.text || message.content || "").trim();
  if (!text) return null;
  return {
    id: /^[0-9a-f-]{36}$/i.test(String(message.id || "")) ? message.id : createChatId(),
    role,
    text: text.slice(0, 2400),
    createdAt: message.createdAt || message.created_at || new Date().toISOString(),
    suggestions: Array.isArray(message.suggestions) ? message.suggestions.slice(0, 4) : [],
    cards: normalizeCoachCards(message.cards || message.contextSnapshot?.cards || message.context_snapshot?.cards),
    contextSnapshot: message.contextSnapshot || message.context_snapshot || null
  };
}

function loadChatMessages() {
  try {
    const parsed = JSON.parse(localStorage.getItem(CHAT_STORAGE_KEY) || "[]");
    if (!Array.isArray(parsed)) return [];
    return parsed.map(normalizeChatMessage).filter(Boolean).slice(-80);
  } catch {
    return [];
  }
}

function saveChatMessages() {
  try {
    localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(state.chatMessages.slice(-80)));
  } catch {
    // Chat remains usable even if localStorage is unavailable.
  }
}

function defaultUserSettings() {
  return {
    onboardingComplete: false,
    onboardingStep: "auth",
    awakeningAccepted: false,
    guestMode: false,
    lastVisitedView: "",
    diagnosisCompleted: false,
    diagnosisStep: "body",
    selectedGoal: "general",
    focusMode: false,
    vaultFilter: "all",
    lastSyncedAt: ""
  };
}

function loadUserSettings() {
  const fallback = defaultUserSettings();
  try {
    const parsed = JSON.parse(localStorage.getItem(USER_SETTINGS_STORAGE_KEY) || "null");
    const onboarding = JSON.parse(localStorage.getItem(ONBOARDING_STORAGE_KEY) || "null");
    return {
      ...fallback,
      ...(parsed || {}),
      onboardingComplete: Boolean(parsed?.onboardingComplete || onboarding?.complete),
      awakeningAccepted: Boolean(parsed?.awakeningAccepted || parsed?.onboardingComplete || onboarding?.complete),
      guestMode: Boolean(parsed?.guestMode),
      diagnosisCompleted: Boolean(parsed?.diagnosisCompleted),
      diagnosisStep: parsed?.diagnosisStep || fallback.diagnosisStep,
      selectedGoal: parsed?.selectedGoal || fallback.selectedGoal,
      onboardingStep: parsed?.onboardingStep || fallback.onboardingStep,
      lastVisitedView: parsed?.lastVisitedView || fallback.lastVisitedView
    };
  } catch {
    return fallback;
  }
}

function saveUserSettings() {
  try {
    localStorage.setItem(USER_SETTINGS_STORAGE_KEY, JSON.stringify(state.userSettings));
    localStorage.setItem(ONBOARDING_STORAGE_KEY, JSON.stringify({
      complete: Boolean(state.userSettings.onboardingComplete),
      updatedAt: new Date().toISOString()
    }));
  } catch {
    // UI preferences are best-effort.
  }
}

function initialViewFromSaved(settings, profileState, progressState) {
  const hasDiagnosis = Boolean(settings.diagnosisCompleted || profileState.profileAnalysis || profileState.appliedJourney);
  const hasLocalProgress = Boolean((progressState.totalXp || 0) > 0 || (progressState.completedQuestIds || []).length);
  if (hasDiagnosis || hasLocalProgress || settings.onboardingComplete) return "home";
  if (settings.awakeningAccepted) return "diagnosis";
  if (settings.guestMode) return "awakening";
  return "auth";
}

function setUserFlow(partial) {
  state.userSettings = { ...state.userSettings, ...partial };
  saveUserSettings();
  syncUserSettings().catch(() => {});
}

function loadTrainingProgress() {
  try {
    const parsed = JSON.parse(localStorage.getItem(TRAINING_PROGRESS_STORAGE_KEY) || "{}");
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function saveTrainingProgress() {
  try {
    localStorage.setItem(TRAINING_PROGRESS_STORAGE_KEY, JSON.stringify(state.trainingProgress || {}));
  } catch {
    // Training progress can still be held in memory for this session.
  }
}

function loadTrainingLogs() {
  try {
    const parsed = JSON.parse(localStorage.getItem(TRAINING_LOG_STORAGE_KEY) || "[]");
    return Array.isArray(parsed) ? parsed.slice(-240) : [];
  } catch {
    return [];
  }
}

function saveTrainingLogs() {
  try {
    localStorage.setItem(TRAINING_LOG_STORAGE_KEY, JSON.stringify((state.trainingLogs || []).slice(-240)));
  } catch {
    // Chart history is optional.
  }
}

function loadAssistantPosition() {
  try {
    const parsed = JSON.parse(localStorage.getItem(ASSISTANT_POSITION_STORAGE_KEY) || "null");
    if (!parsed || typeof parsed !== "object") return null;
    const x = Number(parsed.x);
    const y = Number(parsed.y);
    if (!Number.isFinite(x) || !Number.isFinite(y)) return null;
    return { x, y };
  } catch {
    return null;
  }
}

function saveAssistantPosition(position) {
  try {
    if (!position) {
      localStorage.removeItem(ASSISTANT_POSITION_STORAGE_KEY);
      return;
    }
    localStorage.setItem(ASSISTANT_POSITION_STORAGE_KEY, JSON.stringify(position));
  } catch {
    // The assistant still works if the drag position cannot persist.
  }
}

function addChatMessage(role, text, suggestions = [], contextSnapshot = null, cards = []) {
  const message = normalizeChatMessage({
    id: createChatId(),
    role,
    text,
    suggestions,
    cards,
    contextSnapshot,
    createdAt: new Date().toISOString()
  });
  if (!message) return null;
  state.chatMessages = [...state.chatMessages, message].slice(-80);
  saveChatMessages();
  queueChatCloudSync();
  return message;
}

function loadProgress() {
  const fallback = defaultSystemProgress();
  try {
    const raw = localStorage.getItem(SYSTEM_STORAGE_KEY);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    const merged = {
      ...fallback,
      ...parsed,
      stats: { ...fallback.stats, ...(parsed.stats || {}) },
      completedQuestIds: Array.isArray(parsed.completedQuestIds) ? parsed.completedQuestIds : []
    };
    merged.totalXp = Number(merged.totalXp) || 0;
    merged.level = levelFromXp(merged.totalXp);
    if (merged.lastActiveDate !== todayKey()) {
      const dailyIds = QUEST_CATALOG.filter((quest) => quest.type === "daily").map((quest) => quest.id);
      const completedDaily = merged.completedQuestIds.filter((id) => dailyIds.includes(id)).length;
      merged.penaltyDebt = completedDaily > 0 && completedDaily < dailyIds.length;
      merged.completedQuestIds = merged.completedQuestIds.filter((id) => !dailyIds.includes(id));
      merged.lastActiveDate = todayKey();
    }
    localStorage.setItem(SYSTEM_STORAGE_KEY, JSON.stringify(merged));
    return merged;
  } catch {
    return fallback;
  }
}

function saveProgress() {
  const payload = {
    totalXp: state.totalXp,
    level: state.level,
    completedQuestIds: state.completedQuestIds,
    streak: state.streak,
    selectedPath: state.selectedPath,
    stats: state.stats,
    penaltyDebt: state.penaltyDebt,
    lastActiveDate: state.lastActiveDate,
    streakAwardedDate: state.streakAwardedDate
  };
  try {
    localStorage.setItem(SYSTEM_STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // Local storage is optional; the app still runs as a static archive.
  }
}

function hasCloudUser() {
  return Boolean(state.cloudClient && state.cloudUser?.id);
}

function cloudUserEmail() {
  return state.cloudUser?.email || state.cloudEmail || "";
}

function cloudProgressPayload() {
  return {
    user_id: state.cloudUser.id,
    total_xp: Math.max(0, Number(state.totalXp) || 0),
    level: levelFromXp(state.totalXp),
    stats: state.stats || defaultSystemStats(),
    completed_quest_ids: state.completedQuestIds || [],
    streak: Math.max(0, Number(state.streak) || 0),
    selected_path: state.selectedPath || "",
    penalty_debt: Boolean(state.penaltyDebt),
    last_active_date: state.lastActiveDate || todayKey(),
    streak_awarded_date: state.streakAwardedDate || null
  };
}

function cloudProfilePayload() {
  return {
    user_id: state.cloudUser.id,
    email: cloudUserEmail(),
    profile_data: state.profile || defaultProfileValues(),
    latest_analysis: state.profileAnalysis || null,
    applied_journey: state.appliedJourney || null
  };
}

function cloudUserSettingsPayload() {
  return {
    user_id: state.cloudUser.id,
    settings: {
      ...state.userSettings,
      vaultFilter: state.vaultFilter
    },
    updated_at: new Date().toISOString()
  };
}

function trainingProgressRows() {
  if (!hasCloudUser()) return [];
  return Object.entries(state.trainingProgress || {}).map(([key, progress]) => {
    const [program_type, ...idParts] = key.split(":");
    return {
      user_id: state.cloudUser.id,
      program_key: key,
      program_type,
      program_id: idParts.join(":"),
      xp: Math.max(0, Number(progress.xp) || 0),
      completed_level_ids: Array.isArray(progress.completedLevelIds) ? progress.completedLevelIds : [],
      last_trained_at: progress.lastTrainedAt || null,
      notes: progress.notes || "",
      updated_at: new Date().toISOString()
    };
  });
}

async function initCloudSync() {
  try {
    if (isStaticLocalPreview()) {
      state.cloudReady = false;
      state.cloudStatus = "Static preview mode: local progress, diagnosis, and chat work here. Run on Vercel for Supabase cloud sync.";
      render();
      return;
    }
    const response = await fetch(CLOUD_CONFIG_ENDPOINT, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Cloud config returned HTTP ${response.status}`);
    }
    const config = await response.json();
    state.cloudConfig = config;
    if (!config.supabaseUrl || !config.supabaseAnonKey) {
      state.cloudReady = false;
      state.cloudStatus = config.supabaseUrl
        ? "Cloud sync waiting for SUPABASE_ANON_KEY in Vercel."
        : "Cloud sync waiting for SUPABASE_URL and SUPABASE_ANON_KEY in Vercel.";
      render();
      return;
    }
    if (!window.supabase?.createClient) {
      state.cloudReady = false;
      state.cloudStatus = "Supabase client did not load. Local progress still works.";
      render();
      return;
    }
    state.cloudClient = window.supabase.createClient(config.supabaseUrl, config.supabaseAnonKey);
    state.cloudReady = true;
    const sessionResult = await state.cloudClient.auth.getSession();
    state.cloudUser = sessionResult.data?.session?.user || null;
    state.cloudStatus = state.cloudUser ? "Cloud account found. Loading saved progress..." : "Cloud ready. Sign in to sync progress across devices.";
    state.cloudClient.auth.onAuthStateChange((_event, session) => {
      state.cloudUser = session?.user || null;
      state.cloudStatus = state.cloudUser ? "Signed in. Syncing cloud progress..." : "Signed out. Local device progress remains available.";
      render();
      if (state.cloudUser) loadCloudState().then(() => loadCloudChatHistory());
    });
    render();
    if (state.cloudUser) {
      await loadCloudState();
      await loadCloudChatHistory();
      if (!state.profileAnalysis && state.view === "auth") {
        setUserFlow({ guestMode: false, onboardingStep: "awakening" });
        state.view = "awakening";
      }
    }
  } catch (error) {
    state.cloudReady = false;
    state.cloudStatus = `Cloud sync unavailable: ${error.message}`;
    render();
  }
}

async function cloudAuth(action) {
  if (!state.cloudReady || !state.cloudClient) {
    state.cloudStatus = "Cloud is not configured yet. Add Supabase env vars in Vercel first.";
    render();
    return;
  }
  const email = state.cloudEmail.trim();
  const password = state.cloudPassword;
  if (!email || !password) {
    state.cloudStatus = "Enter email and password for cloud sync.";
    render();
    return;
  }
  state.cloudBusy = true;
  state.cloudStatus = action === "signup" ? "Creating cloud account..." : "Signing in...";
  render();
  try {
    const result = action === "signup"
      ? await state.cloudClient.auth.signUp({ email, password })
      : await state.cloudClient.auth.signInWithPassword({ email, password });
    if (result.error) throw result.error;
    state.cloudUser = result.data?.user || result.data?.session?.user || state.cloudUser;
    state.cloudPassword = "";
    state.cloudStatus = action === "signup"
      ? "Account created. If Supabase email confirmation is on, verify your email, then sign in."
      : "Signed in. Syncing local progress to cloud...";
    render();
    if (state.cloudUser) {
      await loadCloudState();
      await loadCloudChatHistory();
    }
  } catch (error) {
    state.cloudStatus = `Cloud auth failed: ${error.message}`;
  } finally {
    state.cloudBusy = false;
    render();
  }
}

async function cloudSignOut() {
  if (!state.cloudClient) return;
  state.cloudBusy = true;
  state.cloudStatus = "Signing out...";
  render();
  try {
    await state.cloudClient.auth.signOut();
    state.cloudUser = null;
    state.cloudStatus = "Signed out. Local device progress remains available.";
  } catch (error) {
    state.cloudStatus = `Sign out failed: ${error.message}`;
  } finally {
    state.cloudBusy = false;
    render();
  }
}

function applyRemoteProgress(progress) {
  if (!progress) return;
  state.totalXp = Math.max(0, Number(progress.total_xp) || 0);
  state.level = levelFromXp(state.totalXp);
  state.completedQuestIds = Array.isArray(progress.completed_quest_ids) ? progress.completed_quest_ids : [];
  state.streak = Math.max(0, Number(progress.streak) || 0);
  state.selectedPath = progress.selected_path || state.selectedPath;
  state.stats = { ...defaultSystemStats(), ...(progress.stats || {}) };
  state.penaltyDebt = Boolean(progress.penalty_debt);
  state.lastActiveDate = progress.last_active_date || todayKey();
  state.streakAwardedDate = progress.streak_awarded_date || "";
  saveProgress();
}

function applyRemoteProfile(profile) {
  if (!profile) return;
  state.profile = { ...defaultProfileValues(), ...(profile.profile_data || {}) };
  state.profileAnalysis = profile.latest_analysis || null;
  state.appliedJourney = profile.applied_journey || null;
  saveProfileState();
}

async function loadCloudState() {
  if (!hasCloudUser()) return;
  state.cloudBusy = true;
  state.cloudStatus = "Loading cloud save...";
  render();
  try {
    const [profileResult, progressResult, settingsResult, trainingResult] = await Promise.all([
      state.cloudClient.from("profiles").select("*").eq("user_id", state.cloudUser.id).maybeSingle(),
      state.cloudClient.from("progress").select("*").eq("user_id", state.cloudUser.id).maybeSingle(),
      state.cloudClient.from("user_settings").select("*").eq("user_id", state.cloudUser.id).maybeSingle(),
      state.cloudClient.from("training_progress").select("*").eq("user_id", state.cloudUser.id)
    ]);
    if (profileResult.error) throw profileResult.error;
    if (progressResult.error) throw progressResult.error;
    if (!settingsResult.error && settingsResult.data?.settings) {
      state.userSettings = { ...defaultUserSettings(), ...settingsResult.data.settings };
      state.vaultFilter = state.userSettings.vaultFilter || state.vaultFilter;
      saveUserSettings();
    }
    if (!trainingResult.error && Array.isArray(trainingResult.data)) {
      const remoteProgress = {};
      for (const row of trainingResult.data) {
        remoteProgress[row.program_key] = {
          xp: Math.max(0, Number(row.xp) || 0),
          completedLevelIds: Array.isArray(row.completed_level_ids) ? row.completed_level_ids : [],
          lastTrainedAt: row.last_trained_at || "",
          notes: row.notes || ""
        };
      }
      state.trainingProgress = { ...state.trainingProgress, ...remoteProgress };
      saveTrainingProgress();
    }
    const remoteXp = Number(progressResult.data?.total_xp) || 0;
    if (progressResult.data && remoteXp >= (Number(state.totalXp) || 0)) {
      applyRemoteProgress(progressResult.data);
      applyRemoteProfile(profileResult.data);
      state.cloudStatus = "Cloud save loaded on this device.";
    } else {
      state.cloudStatus = "Local progress is ahead. Uploading it to cloud...";
      await syncCloudState("initial-merge");
    }
    state.cloudLastSyncedAt = new Date().toLocaleTimeString();
  } catch (error) {
    state.cloudStatus = `Cloud load failed: ${error.message}. Run supabase/schema.sql if tables are missing.`;
  } finally {
    state.cloudBusy = false;
    render();
  }
}

function queueCloudSync() {
  if (!hasCloudUser()) return;
  clearTimeout(state.cloudSyncTimer);
  state.cloudSyncTimer = setTimeout(() => {
    syncCloudState("debounced").catch((error) => {
      state.cloudStatus = `Cloud sync failed: ${error.message}`;
      render();
    });
  }, 550);
}

async function syncCloudState(reason = "manual") {
  if (!hasCloudUser()) return;
  const [profileResult, progressResult] = await Promise.all([
    state.cloudClient.from("profiles").upsert(cloudProfilePayload(), { onConflict: "user_id" }),
    state.cloudClient.from("progress").upsert(cloudProgressPayload(), { onConflict: "user_id" })
  ]);
  if (profileResult.error) throw profileResult.error;
  if (progressResult.error) throw progressResult.error;
  await Promise.allSettled([syncUserSettings(), syncAllTrainingProgress()]);
  state.cloudLastSyncedAt = new Date().toLocaleTimeString();
  state.cloudStatus = reason === "manual" ? "Cloud save updated." : "Progress synced to cloud.";
  render();
}

async function syncUserSettings() {
  if (!hasCloudUser()) return;
  state.userSettings.lastSyncedAt = new Date().toLocaleTimeString();
  saveUserSettings();
  const result = await state.cloudClient
    .from("user_settings")
    .upsert(cloudUserSettingsPayload(), { onConflict: "user_id" });
  if (result.error) throw result.error;
}

async function syncTrainingProgress(key) {
  if (!hasCloudUser()) return;
  const rows = trainingProgressRows().filter((row) => !key || row.program_key === key);
  if (!rows.length) return;
  const result = await state.cloudClient
    .from("training_progress")
    .upsert(rows, { onConflict: "user_id,program_key" });
  if (result.error) throw result.error;
}

async function syncAllTrainingProgress() {
  return syncTrainingProgress("");
}

async function recordQuestCompletion(quest) {
  if (!hasCloudUser() || !quest) return;
  try {
    const result = await state.cloudClient.from("quest_completions").upsert({
      user_id: state.cloudUser.id,
      quest_id: quest.id,
      quest_type: quest.type,
      title: quest.title,
      xp_reward: quest.xp,
      stat_key: quest.stat,
      stat_gain: quest.statGain,
      completed_on: todayKey(),
      quest_payload: quest
    }, { onConflict: "user_id,quest_id,completed_on" });
    if (result.error) throw result.error;
  } catch (error) {
    state.cloudStatus = `Quest history sync failed: ${error.message}`;
    render();
  }
}

async function recordDiagnosisReport() {
  if (!hasCloudUser() || !state.profileAnalysis) return;
  try {
    const result = await state.cloudClient.from("diagnosis_reports").insert({
      user_id: state.cloudUser.id,
      input_profile: state.profile,
      analysis: state.profileAnalysis
    });
    if (result.error) throw result.error;
  } catch (error) {
    state.cloudStatus = `Diagnosis report sync failed: ${error.message}`;
    render();
  }
}

async function recordTrainingLog(logType, title, detail = {}) {
  const localLog = localTrainingLog(logType, title, detail);
  if (!hasCloudUser()) return;
  try {
    const result = await state.cloudClient.from("training_logs").insert({
      user_id: state.cloudUser.id,
      log_type: logType,
      title,
      detail: { ...detail, localLogId: localLog.id, totalXp: localLog.totalXp, stats: localLog.stats }
    });
    if (result.error) throw result.error;
  } catch (error) {
    state.cloudStatus = `Training log sync failed: ${error.message}`;
    render();
  }
}

function chatCloudPayload(message) {
  return {
    id: message.id,
    user_id: state.cloudUser.id,
    role: message.role,
    content: message.text,
    context_snapshot: { ...(message.contextSnapshot || {}), cards: message.cards || [] },
    suggestions: message.suggestions || [],
    created_at: message.createdAt
  };
}

function mergeChatMessages(localMessages, remoteRows) {
  const byId = new Map();
  [...localMessages, ...remoteRows.map((row) => normalizeChatMessage({
    id: row.id,
    role: row.role,
    text: row.content,
    suggestions: row.suggestions || [],
    contextSnapshot: row.context_snapshot || null,
    createdAt: row.created_at
  }))].filter(Boolean).forEach((message) => byId.set(message.id, message));
  return [...byId.values()]
    .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
    .slice(-80);
}

async function loadCloudChatHistory() {
  if (!hasCloudUser()) return;
  try {
    const result = await state.cloudClient
      .from("chat_messages")
      .select("*")
      .eq("user_id", state.cloudUser.id)
      .order("created_at", { ascending: true })
      .limit(80);
    if (result.error) throw result.error;
    state.chatMessages = mergeChatMessages(state.chatMessages, result.data || []);
    state.chatStatus = state.chatMessages.length
      ? `Chat cloud history loaded (${state.chatMessages.length} messages).`
      : "Chat cloud is ready. Start a System Assistant conversation.";
    state.chatLastSyncedAt = new Date().toLocaleTimeString();
    saveChatMessages();
    await syncChatMessages("load-merge");
  } catch (error) {
    state.chatStatus = `Chat cloud sync unavailable: ${error.message}. Run the updated Supabase schema for chat history.`;
  } finally {
    render();
  }
}

function queueChatCloudSync() {
  if (!hasCloudUser()) return;
  clearTimeout(state.chatSyncTimer);
  state.chatSyncTimer = setTimeout(() => {
    syncChatMessages("debounced").catch((error) => {
      state.chatStatus = `Chat cloud sync failed: ${error.message}`;
      render();
    });
  }, 700);
}

async function syncChatMessages(reason = "manual") {
  if (!hasCloudUser() || !state.chatMessages.length) return;
  const payload = state.chatMessages.slice(-80).map(chatCloudPayload);
  const result = await state.cloudClient
    .from("chat_messages")
    .upsert(payload, { onConflict: "id" });
  if (result.error) throw result.error;
  state.chatLastSyncedAt = new Date().toLocaleTimeString();
  if (reason === "manual") state.chatStatus = "Chat history synced to cloud.";
}

function nextRankInfo() {
  const progress = currentLevelProgress();
  const currentRank = rankFromLevel(progress.level);
  const rankIndex = LEVEL_RANKS.findIndex((rank) => rank.label === currentRank.label);
  const nextRank = LEVEL_RANKS[Math.min(rankIndex + 1, LEVEL_RANKS.length - 1)];
  const xpNeeded = nextRank && nextRank.label !== currentRank.label
    ? Math.max(0, xpForLevel(nextRank.min) - state.totalXp)
    : 0;
  return { progress, currentRank, nextRank, xpNeeded };
}

function buildPromotionReviewData() {
  const { progress, currentRank, nextRank, xpNeeded } = nextRankInfo();
  const weekly = questGroup("weekly");
  const boss = questGroup("boss");
  const weeklyDone = weekly.filter((quest) => isQuestComplete(quest.id)).length;
  const bossDone = boss.filter((quest) => isQuestComplete(quest.id)).length;
  const statAverage = Math.round(Object.values(state.stats || {}).reduce((sum, value) => sum + Number(value || 0), 0) / SYSTEM_STATS.length);
  const readyForNext = nextRank?.label === currentRank.label
    || (xpNeeded <= 0 && weeklyDone >= Math.min(1, weekly.length) && bossDone >= Math.min(1, boss.length));
  return {
    currentLevel: progress.level,
    currentRank: currentRank.label,
    nextRank: nextRank?.label || "Pinnacle Legend",
    xpNeeded,
    weeklyDone,
    weeklyTotal: weekly.length,
    bossDone,
    bossTotal: boss.length,
    statAverage,
    diagnosisScore: state.profileAnalysis?.overall || null,
    readyForNext
  };
}

function buildChatContextSnapshot() {
  const { progress, currentRank, nextRank, xpNeeded } = nextRankInfo();
  return {
    profile: state.profile,
    analysis: state.profileAnalysis,
    appliedJourney: state.appliedJourney,
    progress: {
      totalXp: state.totalXp,
      level: progress.level,
      currentRank: currentRank.label,
      nextRank: nextRank?.label || currentRank.label,
      xpToNextRank: xpNeeded,
      streak: state.streak,
      stats: state.stats,
      penaltyDebt: state.penaltyDebt
    },
    recentQuestState: activeQuestCatalog().map((quest) => ({
      id: quest.id,
      type: quest.type,
      title: quest.title,
      stat: quest.stat,
      xp: quest.xp,
      completed: isQuestComplete(quest.id)
    })),
    promotionReview: buildPromotionReviewData(),
    activeWeeklySchedule: activeWeeklySchedule(),
    trainingProgress: state.trainingProgress
  };
}

function buildConditionBrief() {
  const { progress, currentRank, nextRank, xpNeeded } = nextRankInfo();
  const analysis = state.profileAnalysis;
  if (!analysis) {
    return `You are Lv ${progress.level} - ${currentRank.label}. Run System Diagnosis in Profile so I can read your body stats, blockers, and best Lookism training route.`;
  }
  const blockers = (analysis.blockers || []).slice(0, 2).join("; ");
  return `Current condition: ${analysis.currentCategory} (${analysis.overall}/100) at Lv ${progress.level} - ${currentRank.label}. Your route is ${analysis.journey.recommendedFighterType}, ${analysis.journey.recommendedMastery}, and ${analysis.journey.recommendedArt}. Next rank: ${nextRank?.label || "Pinnacle Legend"}${xpNeeded ? `, ${xpNeeded.toLocaleString()} XP away` : ""}. Main blockers: ${blockers || "consistency and clean overload"}.`;
}

function buildConditionBriefCards() {
  const { progress, currentRank, nextRank, xpNeeded } = nextRankInfo();
  const analysis = state.profileAnalysis;
  if (!analysis) {
    return [
      {
        title: "Condition",
        body: `Lv ${progress.level} · ${currentRank.label}. Diagnosis has not run yet, so the coach only sees your XP and rank.`,
        action: "open-profile"
      },
      {
        title: "Today's Quest",
        body: "Open System Diagnosis, enter body stats and benchmarks, then run Analyze Offline before chasing cloud save.",
        action: "open-profile"
      },
      {
        title: "Recovery",
        body: "Keep the first day easy: mobility, walking, clean push-pull-leg basics, and no ego intensity."
      },
      {
        title: "Next Rank",
        body: `${nextRank?.label || "Pinnacle Legend"} is the next climb${xpNeeded ? `, ${xpNeeded.toLocaleString()} XP away` : ""}. The System needs logged quests, not hype.`,
        action: "promotion-review"
      }
    ];
  }

  const quest = activeQuestCatalog().find((item) => !isQuestComplete(item.id)) || activeQuestCatalog()[0];
  const blockers = (analysis.blockers || []).slice(0, 2).join("; ") || "consistency and clean overload";
  return [
    {
      title: "Condition",
      body: `${analysis.currentCategory} · Diagnosis Score ${analysis.overall}/100 at Lv ${progress.level}. Main blockers: ${blockers}.`
    },
    {
      title: "Today's Quest",
      body: quest ? `${quest.title}: ${quest.desc}` : "Clear one daily quest and one precision drill before adding intensity.",
      action: "quest-focus"
    },
    {
      title: "Recovery",
      body: "Sleep, hydration, and joint-friendly volume decide whether the next session upgrades you or buries you.",
      action: "recovery-plan"
    },
    {
      title: "Next Rank",
      body: `${nextRank?.label || "Pinnacle Legend"}${xpNeeded ? ` needs ${xpNeeded.toLocaleString()} more XP` : " is controlled by completed boss tests and consistency"}. Route: ${analysis.journey.recommendedFighterType}, ${analysis.journey.recommendedMastery}, ${analysis.journey.recommendedArt}.`,
      action: "promotion-review"
    }
  ];
}

function buildPromotionReviewMessage() {
  const review = buildPromotionReviewData();
  if (review.currentRank === "Pinnacle Legend") {
    return "Promotion review: you are already at Pinnacle Legend. Now the system goal is control: keep weekly boss tests clean, maintain recovery, and refine one signature path.";
  }
  const requirements = [];
  if (review.xpNeeded > 0) requirements.push(`${review.xpNeeded.toLocaleString()} more XP`);
  if (review.weeklyDone < Math.min(1, review.weeklyTotal)) requirements.push("one weekly quest clear");
  if (review.bossDone < Math.min(1, review.bossTotal)) requirements.push("one boss quest clear");
  if (review.diagnosisScore !== null && review.diagnosisScore < 45) requirements.push("raise diagnosis score toward 45+ with your applied journey");
  return review.readyForNext
    ? `Promotion review: rules are satisfied for the next climb from ${review.currentRank} toward ${review.nextRank}. The rank itself still follows XP level, so keep clearing quests and the dashboard will update automatically.`
    : `Promotion review: ${review.currentRank} to ${review.nextRank} is not unlocked yet. Need: ${requirements.join(", ") || "more verified quest progress"}. Average System stat: ${review.statAverage}/100. No AI shortcut; the System only respects logged work.`;
}

function buildPromotionReviewCards(message) {
  const review = buildPromotionReviewData();
  const missing = [];
  if (review.xpNeeded > 0) missing.push(`${review.xpNeeded.toLocaleString()} XP`);
  if (review.weeklyDone < Math.min(1, review.weeklyTotal)) missing.push("weekly quest");
  if (review.bossDone < Math.min(1, review.bossTotal)) missing.push("boss quest");
  if (review.diagnosisScore !== null && review.diagnosisScore < 45) missing.push("45+ diagnosis score");
  return [
    {
      title: "Condition",
      body: `${review.currentRank} · System stat average ${review.statAverage}/100 · Diagnosis ${review.diagnosisScore ?? "not run"}.`
    },
    {
      title: "Today's Quest",
      body: missing.length ? `Clear the blocker: ${missing[0]}. Then log one clean daily quest.` : "Promotion blockers are clear. Keep logging XP until the level threshold updates.",
      action: "quest-focus"
    },
    {
      title: "Recovery",
      body: "Do not test maxes daily. Use recovery work after boss attempts so the next review reads performance, not fatigue.",
      action: "recovery-plan"
    },
    {
      title: "Next Rank",
      body: message.replace(/^Promotion review:\s*/i, ""),
      action: "quest-focus"
    }
  ];
}

function fallbackAssistantReply(userText, error) {
  const condition = buildConditionBrief();
  if (/promot|rank|level|upgrade/i.test(userText)) return buildPromotionReviewMessage();
  if (/sleep|recover|injur|pain|rest/i.test(userText)) {
    return `${condition} Recovery focus: protect sleep, hydrate, keep 1-2 easy days, use mobility debt instead of punishment, and avoid hard sparring or max attempts around pain. If an injury is real or worsening, use a qualified professional.`;
  }
  if (/diet|food|nutrition|fat|weight/i.test(userText)) {
    return `${condition} Diet focus: keep meals boring and repeatable: protein each meal, vegetables or fruit daily, water, and a calorie direction that matches your goal. Do not crash diet; consistency gives more XP than extremes.`;
  }
  return `${condition} Gemini is unavailable right now${error ? ` (${error.message})` : ""}. For today: clear mobility, base strength, roadwork, and technique reps. Then run one weekly or boss quest when recovery is clean.`;
}

async function sendChatPrompt(promptText = state.chatDraft) {
  const text = String(promptText || "").trim();
  if (!text || state.chatBusy) return;
  if (!state.profileAnalysis && Object.values(state.profile || {}).some(Boolean)) analyzeProfile();
  const context = buildChatContextSnapshot();
  state.chatDraft = "";
  state.chatStatus = "System Assistant is reading your current save...";
  addChatMessage("user", text, [], context);
  state.chatBusy = true;
  state.chatOpen = true;
  render();
  try {
    const endpoint = state.aiConfig.proxyEndpoint || defaultAiProxyEndpoint();
    if (shouldUseOfflineAiFallback(endpoint)) {
      throw new Error("Local Gemini proxy is not running in static preview");
    }
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        mode: "chat",
        messages: state.chatMessages.slice(-10).map((message) => ({ role: message.role, content: message.text })),
        profile: state.profile,
        analysis: state.profileAnalysis,
        progress: context.progress,
        journey: state.appliedJourney,
        recentQuestState: context.recentQuestState,
        promotionReview: context.promotionReview
      })
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error || `Coach returned ${response.status}`);
    const suggestions = Array.isArray(data.suggestions) ? data.suggestions : [];
    const assistantText = data.text || data.output || "I read your System, but Gemini returned no coaching text.";
    const cards = normalizeCoachCards(data.cards).length ? normalizeCoachCards(data.cards) : coachCardsFromText(assistantText);
    addChatMessage("assistant", assistantText, suggestions, context, cards);
    state.chatStatus = data.source ? `Gemini online via ${data.source}.` : "Assistant response ready.";
  } catch (error) {
    const fallback = fallbackAssistantReply(text, error);
    addChatMessage("assistant", fallback, ["promotion_review", "recovery_plan"], context, coachCardsFromText(fallback));
    state.chatStatus = "Gemini unavailable. Local System fallback answered safely.";
  } finally {
    state.chatBusy = false;
    saveChatMessages();
    render();
  }
}

function runChatAction(action) {
  state.chatOpen = true;
  if (action === "promotion-review") {
    const message = buildPromotionReviewMessage();
    addChatMessage("assistant", message, ["quest_focus"], buildChatContextSnapshot(), buildPromotionReviewCards(message));
    render();
    return;
  }
  if (action === "brief-condition") {
    const message = buildConditionBrief();
    addChatMessage("assistant", message, ["promotion_review", "recovery_plan"], buildChatContextSnapshot(), buildConditionBriefCards());
    render();
    return;
  }
  if (action === "open-profile") {
    state.view = "profile";
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const prompts = {
    "recovery-plan": "Give me a safe recovery, sleep, and mobility plan for my current System status.",
    "quest-focus": "Tell me the best quests to complete next for rank progression.",
    "diet-basics": "Give me diet basics for my current profile and Lookism training path.",
    "motivation": "Motivate me like a Lookism System assistant, but keep it practical and safe."
  };
  sendChatPrompt(prompts[action] || "Briefly coach me based on my current System condition.");
}

function xpForLevel(level) {
  const normalized = clamp(level, 1, 100) - 1;
  return Math.round((normalized * normalized * 115) + (normalized * 85));
}

function levelFromXp(totalXp) {
  const xp = Math.max(0, Number(totalXp) || 0);
  let level = 1;
  while (level < 100 && xp >= xpForLevel(level + 1)) level += 1;
  return level;
}

function rankFromLevel(level) {
  return LEVEL_RANKS.find((rank) => level >= rank.min && level <= rank.max) || LEVEL_RANKS[0];
}

function currentLevelProgress() {
  const level = levelFromXp(state.totalXp);
  const current = xpForLevel(level);
  const next = xpForLevel(Math.min(level + 1, 100));
  const span = Math.max(1, next - current);
  return {
    level,
    current,
    next,
    percent: level >= 100 ? 100 : Math.round(((state.totalXp - current) / span) * 100)
  };
}

function activeQuestCatalog() {
  if (!state.appliedJourney) return QUEST_CATALOG;
  return buildPersonalizedQuests(state.appliedJourney);
}

function questGroup(type) {
  return activeQuestCatalog().filter((quest) => quest.type === type);
}

function isQuestComplete(id) {
  return state.completedQuestIds.includes(id);
}

function completedDailyCount() {
  return questGroup("daily").filter((quest) => isQuestComplete(quest.id)).length;
}

function removeLatestTrainingLog(match) {
  const logs = [...(state.trainingLogs || [])];
  for (let index = logs.length - 1; index >= 0; index -= 1) {
    if (match(logs[index])) {
      logs.splice(index, 1);
      state.trainingLogs = logs;
      saveTrainingLogs();
      return;
    }
  }
}

async function removeQuestCompletion(quest) {
  if (!hasCloudUser() || !quest) return;
  try {
    const result = await state.cloudClient
      .from("quest_completions")
      .delete()
      .eq("user_id", state.cloudUser.id)
      .eq("quest_id", quest.id);
    if (result.error) throw result.error;
  } catch (error) {
    state.cloudStatus = `Quest undo sync failed: ${error.message}`;
    render();
  }
}

function removeQuestTrainingLog(quest) {
  removeLatestTrainingLog((log) => (
    log.logType === "quest_completion"
    && log.date === todayKey()
    && log.detail?.quest?.id === quest.id
  ));
}

function completeQuest(id) {
  const quest = activeQuestCatalog().find((item) => item.id === id);
  if (!quest || isQuestComplete(id)) return;
  state.completedQuestIds = [...state.completedQuestIds, id];
  state.totalXp += quest.xp;
  state.level = levelFromXp(state.totalXp);
  state.stats[quest.stat] = clamp((Number(state.stats[quest.stat]) || 5) + quest.statGain, 1, 100);
  if (quest.type === "daily" && completedDailyCount() === questGroup("daily").length && state.streakAwardedDate !== todayKey()) {
    state.streak += 1;
    state.streakAwardedDate = todayKey();
    state.penaltyDebt = false;
  }
  if (quest.id === "daily-mobility-reset") state.penaltyDebt = false;
  state.lastActiveDate = todayKey();
  saveProgress();
  recordQuestCompletion(quest);
  recordTrainingLog("quest_completion", quest.title, { quest });
  queueCloudSync();
}

function undoQuest(id) {
  const quest = activeQuestCatalog().find((item) => item.id === id);
  if (!quest || !isQuestComplete(id)) return;
  const dailyWasComplete = quest.type === "daily" && completedDailyCount() === questGroup("daily").length;
  state.completedQuestIds = state.completedQuestIds.filter((questId) => questId !== id);
  state.totalXp = Math.max(0, (Number(state.totalXp) || 0) - quest.xp);
  state.level = levelFromXp(state.totalXp);
  state.stats[quest.stat] = clamp((Number(state.stats[quest.stat]) || 5) - quest.statGain, 1, 100);
  if (quest.type === "daily") {
    const dailyDone = completedDailyCount();
    const dailyTotal = questGroup("daily").length;
    if (dailyWasComplete && dailyDone < dailyTotal && state.streakAwardedDate === todayKey()) {
      state.streak = Math.max(0, (Number(state.streak) || 0) - 1);
      state.streakAwardedDate = "";
    }
    state.penaltyDebt = dailyDone > 0 && dailyDone < dailyTotal;
  }
  state.lastActiveDate = todayKey();
  removeQuestTrainingLog(quest);
  saveProgress();
  removeQuestCompletion(quest);
  queueCloudSync();
}

function toggleQuest(id) {
  if (isQuestComplete(id)) undoQuest(id);
  else completeQuest(id);
}

function resetDailyQuests() {
  const dailyIds = questGroup("daily").map((quest) => quest.id);
  const completed = completedDailyCount();
  state.completedQuestIds = state.completedQuestIds.filter((id) => !dailyIds.includes(id));
  state.penaltyDebt = completed > 0 && completed < dailyIds.length;
  state.lastActiveDate = todayKey();
  if (completed < dailyIds.length) state.streakAwardedDate = "";
  saveProgress();
  queueCloudSync();
}

function resetSystemProgress() {
  const fresh = defaultSystemProgress();
  state.totalXp = fresh.totalXp;
  state.level = fresh.level;
  state.completedQuestIds = fresh.completedQuestIds;
  state.streak = fresh.streak;
  state.selectedPath = fresh.selectedPath;
  state.stats = fresh.stats;
  state.penaltyDebt = fresh.penaltyDebt;
  state.lastActiveDate = fresh.lastActiveDate;
  state.streakAwardedDate = fresh.streakAwardedDate;
  saveProgress();
  queueCloudSync();
}

function resetLocalAppData() {
  const freshProgress = defaultSystemProgress();
  const freshProfile = defaultProfileState();
  state.totalXp = freshProgress.totalXp;
  state.level = freshProgress.level;
  state.completedQuestIds = freshProgress.completedQuestIds;
  state.streak = freshProgress.streak;
  state.selectedPath = freshProgress.selectedPath;
  state.stats = freshProgress.stats;
  state.penaltyDebt = freshProgress.penaltyDebt;
  state.lastActiveDate = freshProgress.lastActiveDate;
  state.streakAwardedDate = freshProgress.streakAwardedDate;
  state.profile = freshProfile.profile;
  state.profileAnalysis = null;
  state.appliedJourney = null;
  state.aiCoachResult = "";
  state.profileValidation = { errors: [], warnings: [] };
  state.trainingProgress = {};
  state.trainingLogs = [];
  state.chatMessages = [];
  saveProgress();
  saveProfileState();
  saveTrainingProgress();
  saveTrainingLogs();
  saveChatMessages();
}

function exportAppData() {
  const payload = {
    exportedAt: new Date().toISOString(),
    progress: cloudProgressPayloadSafe(),
    profile: {
      profile: state.profile,
      profileAnalysis: state.profileAnalysis,
      appliedJourney: state.appliedJourney
    },
    userSettings: { ...state.userSettings, vaultFilter: state.vaultFilter },
    trainingProgress: state.trainingProgress,
    trainingLogs: state.trainingLogs,
    chatMessages: state.chatMessages
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `lookism-system-export-${todayKey()}.json`;
  anchor.click();
  URL.revokeObjectURL(url);
}

function cloudProgressPayloadSafe() {
  return {
    totalXp: state.totalXp,
    level: levelFromXp(state.totalXp),
    stats: state.stats,
    completedQuestIds: state.completedQuestIds,
    streak: state.streak,
    selectedPath: state.selectedPath,
    penaltyDebt: state.penaltyDebt,
    lastActiveDate: state.lastActiveDate
  };
}

async function deleteCloudAppData() {
  if (!hasCloudUser()) {
    resetLocalAppData();
    state.cloudStatus = "Local device save cleared.";
    render();
    return;
  }
  state.cloudBusy = true;
  state.cloudStatus = "Deleting app data from Supabase...";
  render();
  try {
    const tables = ["chat_messages", "training_progress", "user_settings", "training_logs", "diagnosis_reports", "quest_completions", "progress", "profiles"];
    for (const table of tables) {
      const result = await state.cloudClient.from(table).delete().eq("user_id", state.cloudUser.id);
      if (result.error && !/does not exist|schema cache/i.test(result.error.message || "")) throw result.error;
    }
    resetLocalAppData();
    state.cloudStatus = "App data deleted. Auth account remains; sign out or keep using local mode.";
  } catch (error) {
    state.cloudStatus = `Delete app data failed: ${error.message}`;
  } finally {
    state.cloudBusy = false;
    render();
  }
}

function activeWeeklySchedule() {
  return state.appliedJourney?.weeklySchedule || WEEKLY_SCHEDULES;
}

function programStorageKey(type, id) {
  return `${type}:${id}`;
}

function programProgress(type, id) {
  const key = programStorageKey(type, id);
  const stored = state.trainingProgress[key] || {};
  const completed = Array.isArray(stored.completedLevelIds) ? stored.completedLevelIds : [];
  return {
    key,
    type,
    id,
    xp: Math.max(0, Number(stored.xp) || 0),
    completedLevelIds: completed,
    lastTrainedAt: stored.lastTrainedAt || "",
    notes: stored.notes || ""
  };
}

function programLevel(type, id) {
  const progress = programProgress(type, id);
  return clamp(progress.completedLevelIds.length, 0, TECHNIQUE_LEVELS.length);
}

function programPercent(type, id) {
  return Math.round((programLevel(type, id) / TECHNIQUE_LEVELS.length) * 100);
}

function renderProgramBadge(type, id, label = "Progress") {
  const progress = programProgress(type, id);
  const percent = programPercent(type, id);
  return `
    <span class="program-badge" title="${escapeHtml(label)} progress">
      <b>Lv ${programLevel(type, id)}</b>
      <span>${percent}% · ${progress.xp.toLocaleString()} XP</span>
    </span>
  `;
}

function completeProgramLevel(type, id, levelId, title, color, stat = "technique") {
  const level = TECHNIQUE_LEVELS.find((item) => item.id === levelId);
  if (!level) return;
  const key = programStorageKey(type, id);
  const current = programProgress(type, id);
  if (current.completedLevelIds.includes(levelId)) return;
  const completedLevelIds = [...current.completedLevelIds, levelId];
  const xp = level.xp;
  state.trainingProgress[key] = {
    ...current,
    xp: current.xp + xp,
    completedLevelIds,
    lastTrainedAt: new Date().toISOString()
  };
  state.totalXp += xp;
  state.level = levelFromXp(state.totalXp);
  state.stats[stat] = clamp((Number(state.stats[stat]) || 5) + Math.max(1, Math.round(xp / 180)), 1, 100);
  saveTrainingProgress();
  saveProgress();
  recordTrainingLog("program_level", `${title} · ${level.label}`, {
    programType: type,
    programId: id,
    levelId,
    xp,
    stat,
    color
  });
  syncTrainingProgress(key).catch((error) => {
    state.cloudStatus = `Training progress sync failed: ${error.message}`;
    render();
  });
  queueCloudSync();
}

function undoProgramLevel(type, id, levelId, title, color, stat = "technique") {
  const level = TECHNIQUE_LEVELS.find((item) => item.id === levelId);
  if (!level) return;
  const key = programStorageKey(type, id);
  const current = programProgress(type, id);
  if (!current.completedLevelIds.includes(levelId)) return;
  const xp = level.xp;
  const statGain = Math.max(1, Math.round(xp / 180));
  state.trainingProgress[key] = {
    ...current,
    xp: Math.max(0, (Number(current.xp) || 0) - xp),
    completedLevelIds: current.completedLevelIds.filter((idValue) => idValue !== levelId),
    lastTrainedAt: new Date().toISOString()
  };
  state.totalXp = Math.max(0, (Number(state.totalXp) || 0) - xp);
  state.level = levelFromXp(state.totalXp);
  state.stats[stat] = clamp((Number(state.stats[stat]) || 5) - statGain, 1, 100);
  removeLatestTrainingLog((log) => (
    log.logType === "program_level"
    && log.detail?.programType === type
    && log.detail?.programId === id
    && log.detail?.levelId === levelId
  ));
  saveTrainingProgress();
  saveProgress();
  syncTrainingProgress(key).catch((error) => {
    state.cloudStatus = `Training progress undo sync failed: ${error.message}`;
    render();
  });
  queueCloudSync();
}

function toggleProgramLevel(type, id, levelId, title, color, stat = "technique") {
  const current = programProgress(type, id);
  if (current.completedLevelIds.includes(levelId)) {
    undoProgramLevel(type, id, levelId, title, color, stat);
    return;
  }
  completeProgramLevel(type, id, levelId, title, color, stat);
}

function localTrainingLog(logType, title, detail = {}) {
  const log = {
    id: createChatId(),
    logType,
    title,
    detail,
    date: todayKey(),
    createdAt: new Date().toISOString(),
    totalXp: Math.max(0, Number(state.totalXp) || 0),
    stats: { ...(state.stats || {}) },
    streak: state.streak
  };
  state.trainingLogs = [...(state.trainingLogs || []), log].slice(-240);
  saveTrainingLogs();
  return log;
}

function buildPersonalizedQuests(journey) {
  const accent = journey?.color || MASTERY_META.ui.color;
  const masteryColor = MASTERY_META[journey?.priorityStats?.[0]]?.color || accent;
  const techniqueColor = MASTERY_META.technique.color;
  const enduranceColor = MASTERY_META.endurance.color;
  const category = journey?.currentCategory || "System";
  const fighterType = journey?.recommendedFighterType || "Fighter Type";
  const art = journey?.recommendedArt || "Chosen martial art";
  return [
    {
      id: "journey-daily-mobility",
      type: "daily",
      title: `${category} Mobility Reset`,
      ko: "맞춤 리셋",
      desc: "10-15 minutes joint prep, nasal breathing, and the recovery debt block assigned by your diagnosis.",
      xp: 70,
      stat: "endurance",
      statGain: 1,
      color: enduranceColor
    },
    {
      id: "journey-daily-base-strength",
      type: "daily",
      title: "Base Body Quest",
      ko: "기초 체력",
      desc: journey?.dailyBase || "Push, pull, legs, trunk, and loaded carry at a version you can repeat cleanly.",
      xp: 95,
      stat: journey?.priorityStats?.[0] || "power",
      statGain: 1,
      color: masteryColor
    },
    {
      id: "journey-daily-skill-reps",
      type: "daily",
      title: `${art} Precision Reps`,
      ko: "정밀 반복",
      desc: "Run 60 slow perfect reps from your selected martial-art level before speed or power.",
      xp: 115,
      stat: "technique",
      statGain: 1,
      color: techniqueColor
    },
    {
      id: "journey-daily-engine",
      type: "daily",
      title: "Engine / Roadwork",
      ko: "엔진 퀘스트",
      desc: journey?.engineQuest || "20-30 minutes easy cardio, rope cadence, or walk/run intervals.",
      xp: 90,
      stat: "speed",
      statGain: 1,
      color: MASTERY_META.speed.color
    },
    {
      id: "journey-weekly-fighter-type",
      type: "weekly",
      title: `${fighterType} Session`,
      ko: "타입 훈련",
      desc: "Open the fighter-type program and clear your current level schedule for the week.",
      xp: 290,
      stat: "sense",
      statGain: 2,
      color: accent
    },
    {
      id: "journey-weekly-mastery",
      type: "weekly",
      title: `${journey?.recommendedMastery || "Mastery"} Field Protocol`,
      ko: "경지 프로토콜",
      desc: "Complete one mastery field protocol with form caps, notes, and recovery.",
      xp: 300,
      stat: journey?.priorityStats?.[0] || "power",
      statGain: 2,
      color: masteryColor
    },
    {
      id: "journey-boss-benchmark",
      type: "boss",
      title: "Boss Quest: Category Unlock Test",
      ko: "승급 테스트",
      desc: journey?.bossQuest || "Record push-ups, pull-ups/rows, plank, and one cardio benchmark. No ego maxing.",
      xp: 620,
      stat: journey?.priorityStats?.[1] || "conviction",
      statGain: 4,
      color: MASTERY_META.conviction.color
    }
  ];
}

function artId(art) {
  return slug(art.art);
}

function selectedMartialArt() {
  return MARTIAL_ARTS.find((art) => artId(art) === state.selectedArtId);
}

function fighterTypeId(type) {
  return slug(type.type);
}

function selectedFighterType() {
  return FIGHTER_TYPE_TRAINING.find((type) => fighterTypeId(type) === state.selectedFighterTypeId);
}

function techniqueProgramFor(art) {
  const id = artId(art);
  const baseProgram = MARTIAL_ART_TECHNIQUE_PROGRAMS[id] || {
    core: [art.beginner, art.intermediate, art.advanced, art.mastery],
    precision: ["Move slowly before adding speed", "Keep balance after every rep", "Stop when form breaks"],
    mistakes: ["Skipping basics", "Training intensity before accuracy", "Ignoring recovery"],
    safety: "Progress gradually and use a qualified coach for contact or partner work."
  };
  const research = ART_RESEARCH_GUIDES[id] || {};
  return {
    ...baseProgram,
    ...research,
    core: research.core || baseProgram.core,
    precision: research.precision || baseProgram.precision,
    mistakes: research.mistakes || baseProgram.mistakes,
    safety: research.safety || baseProgram.safety,
    levels: research.levels || baseProgram.levels
  };
}

function levelIndex(level) {
  return Math.max(0, TECHNIQUE_LEVELS.findIndex((item) => item.id === level.id));
}

function levelBlueprint(level) {
  return LEVEL_DETAIL_BLUEPRINTS[level.id] || LEVEL_DETAIL_BLUEPRINTS.beginner;
}

function levelArrayValue(items, index, fallback = "") {
  if (!Array.isArray(items) || !items.length) return fallback;
  return items[index] || items[items.length - 1] || fallback;
}

function drillBlockFor(context, focus, program, level) {
  const blueprint = levelBlueprint(level);
  const core = Array.isArray(program.core) && program.core.length ? program.core.slice(0, 3).join(" · ") : focus;
  return `${blueprint.dose} Drill block: ${focus}. Anchor reps: ${core}. Finish by writing one technical correction.`;
}

function programLevelDetail(context, program, level, fallbacks = {}) {
  const index = levelIndex(level);
  const override = program.levels?.[level.id] || {};
  const blueprint = levelBlueprint(level);
  const focus = override.focus || levelArrayValue(program.core, index, fallbacks.focus || context);
  const precision = override.precision || levelArrayValue(program.precision, index, fallbacks.precision || "Move slowly before adding speed.");
  const mistake = override.mistake || levelArrayValue(program.mistakes, index, fallbacks.mistake || "Skipping the foundation.");
  return {
    focus,
    schedule: override.schedule || `${level.schedule}. ${blueprint.dose} ${blueprint.load}`,
    drill: override.drill || drillBlockFor(context, focus, program, level),
    precision,
    mistake,
    unlock: override.unlock || `${unlockTestFor(context, level)} ${blueprint.unlock}`,
    recovery: override.recovery || `${blueprint.recovery} ${program.safety || "Progress gradually and stay pain-free."}`
  };
}

function makeMasteryLevels(mastery) {
  return makeLevelMap([
    { focus: `${mastery.label} foundation: posture, breathing, and one base movement.`, drill: `Warm-up 8 min, practice ${mastery.label.toLowerCase()} mechanics 4x8, finish with easy conditioning.`, precision: "Stop while form is still clean.", mistake: "Trying to act like a top-tier fighter before building joints and breath.", recovery: "One rest day after any hard strength or impact work." },
    { focus: `${mastery.label} base mechanics: repeat the same clean pattern until it is measurable.`, drill: `Main drill 5x5 or 5x2 min, accessory weakness work, 10 min cooldown notes.`, precision: "Log load, speed, or round quality every time.", mistake: "Adding variety because basics feel boring.", recovery: "Increase weekly volume by small steps only." },
    { focus: `${mastery.label} under fatigue: keep the skill when lungs and grip get tired.`, drill: "Skill block, conditioning block, repeat the skill once more while tired, then film one set.", precision: "The tired rep must resemble the fresh rep.", mistake: "Letting fatigue become an excuse for ugly movement.", recovery: "Deload every fourth week." },
    { focus: `${mastery.label} under constraints: one rule, one weakness, one repeatable answer.`, drill: "Constraint rounds, benchmark set, film review, and one corrective drill.", precision: "Solve the exchange with fewer movements.", mistake: "Testing max intensity before owning the constraint.", recovery: "Hard constraint days need easier sessions around them." },
    { focus: `${mastery.label} expert block: combine benchmark, film, and pressure testing.`, drill: "One benchmark, one technique pressure round, one recovery block, one written correction.", precision: "A strong result counts only if it can be repeated.", mistake: "Chasing PRs while sleep, pain, or technique is failing.", recovery: "One low-intensity mobility day is mandatory." },
    { focus: `${mastery.label} mastery chain: turn your best attribute into an identity.`, drill: "Build one chain, test it fresh, test it tired, then retest after a deload.", precision: "The chain should fit your body and reason for training.", mistake: "Calling a copied chain your path before it survives pressure.", recovery: "Wave training: build, test, deload, refine." }
  ]);
}

function youtubeSearchUrl(query) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
}

function resourceLinksFor(context, levelLabel, sources = []) {
  const source = sources[0] || RESOURCE_LIBRARY.safety[0];
  const doc = Array.isArray(source) ? source : RESOURCE_LIBRARY.safety[0];
  return [
    { type: "Doc", label: doc[0], href: doc[1] },
    { type: "Video", label: `${levelLabel} tutorial search`, href: youtubeSearchUrl(`${context} ${levelLabel} tutorial beginner advanced training`) }
  ];
}

function renderResourceChips(context, levelLabel, sources = []) {
  return `
    <div class="resource-chip-list">
      ${resourceLinksFor(context, levelLabel, sources).map((link) => `
        <a href="${link.href}" target="_blank" rel="noreferrer">
          <span>${escapeHtml(link.type)}</span>${escapeHtml(link.label)}
        </a>
      `).join("")}
    </div>
  `;
}

function unlockTestFor(context, level) {
  const tests = {
    "very-beginner": `Record 3 clean sets of the foundation drill for ${context} without pain or form collapse.`,
    beginner: `Complete two weekly sessions for ${context} and keep every rep technically controlled.`,
    intermediate: `Film one round, identify one mistake, and correct it in the next ${context} session.`,
    advanced: `Clear a fatigue block for ${context} while keeping breath, posture, and exit discipline.`,
    expert: `Run a constraint round for ${context} and explain why every major movement exists.`,
    "technique-mastery": `Build one signature ${context} chain and test it under a safe constraint.`
  };
  return tests[level.id] || tests.beginner;
}

function makeStats(rank, masteries, archetypeKey) {
  const base = Math.max(58, 101 - Math.floor(rank * 0.43));
  const bonus = (tag) => (masteries.includes(tag) ? 8 : 0);
  return {
    power: clamp(base + bonus("strength") + (archetypeKey === "king-strength" ? 6 : 0), 45, 100),
    speed: clamp(base + bonus("speed") + (archetypeKey === "speed-legend" ? 7 : 0), 45, 100),
    technique: clamp(base + bonus("technique") + bonus("copy") + (archetypeKey === "weapon" ? 5 : 0), 45, 100),
    endurance: clamp(base + bonus("endurance") + (archetypeKey === "iron-boxing" ? 7 : 0), 45, 100),
    conviction: clamp(base + bonus("conviction") + (masteries.includes("path") ? 6 : 0), 45, 100)
  };
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function imageFor(item) {
  if (!item.imageKey || !IMAGES[item.imageKey]) return "";
  return LOCAL_IMAGES[item.imageKey] || IMAGES[item.imageKey].url;
}

function imageSourceFor(item) {
  if (!item.imageKey || !IMAGES[item.imageKey]) return WIKI_CHARACTERS_URL;
  return IMAGES[item.imageKey].source.replace("/Image_Gallery", "");
}

function labelize(value) {
  return String(value).replace(/[-_]/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function icon(name) {
  const paths = {
    home: '<path d="M4 10.5L12 4l8 6.5V20H5V11"/><path d="M9 20v-6h6v6"/>',
    fighters: '<path d="M5 19L19 5"/><path d="M5 5l14 14"/><path d="M8 3h8M8 21h8"/>',
    vault: '<rect x="4" y="5" width="16" height="14" rx="1"/><path d="M4 9h16"/><path d="M8 13h3M14 13h2"/>',
    train: '<circle cx="12" cy="12" r="2"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/><path d="M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3"/>',
    path: '<path d="M12 3c5 4 5 14 0 18C7 17 7 7 12 3z"/><path d="M12 7v10"/>',
    reports: '<path d="M5 20V6"/><path d="M5 20h15"/><path d="M9 16v-5"/><path d="M13 16V8"/><path d="M17 16v-3"/>',
    profile: '<path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    focus: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/><path d="M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1"/>',
    more: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    chat: '<path d="M21 12a8.5 8.5 0 0 1-8.5 8.5 9 9 0 0 1-3.6-.75L3 21l1.35-5.2A8.5 8.5 0 1 1 21 12z"/><path d="M8 11.5h8M8 15h5M9 8h6"/>'
  };
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.home}</svg>`;
}

function resolveRequestedView(view) {
  if (view !== "home") return view;
  const hasStarted = Boolean(state.userSettings.guestMode || state.userSettings.awakeningAccepted || state.profileAnalysis || state.appliedJourney || state.totalXp > 0);
  if (!hasStarted) return "auth";
  if (!state.userSettings.awakeningAccepted && !state.profileAnalysis) return "awakening";
  if (!state.profileAnalysis && !state.userSettings.diagnosisCompleted) return "diagnosis";
  return "home";
}

function render() {
  app.innerHTML = `
    ${renderMangaBackgroundWall()}
    <main class="app-shell ${state.userSettings.focusMode ? "focus-mode" : ""}">
      ${renderTopNav()}
      <div class="view-frame">
        ${renderActiveView()}
      </div>
      ${renderBottomNav()}
    </main>
    ${renderChatAssistant()}
  `;
  queueWikiLoad();
  scrollChatToBottom();
}

function renderMangaBackgroundWall() {
  const tiles = BACKGROUND_WALL_IMAGES.map((image, index) => {
    const src = `${image.base}.${BACKGROUND_WALL_EXTENSIONS[0]}`;
    const shape = index % 11 === 0 ? "hero" : index % 7 === 0 ? "wide" : index % 5 === 0 ? "tall" : index % 4 === 0 ? "large" : "square";
    return `
        <span class="manga-bg-tile manga-bg-tile--${shape}" style="--tile-index:${index}">
          <img src="${src}" alt="${escapeHtml(image.label)}" loading="eager" data-bg-base="${image.base}" data-bg-ext-index="0" onerror="swapBackgroundImage(this)" />
        </span>
      `;
  }).join("");

  return `
    <div class="manga-bg-wall ${state.userSettings.focusMode ? "focus-mode-bg" : ""}" aria-hidden="true">
      <div class="manga-bg-grid">
        ${tiles}
      </div>
    </div>
  `;
}

function swapBackgroundImage(image) {
  const current = Number(image.dataset.bgExtIndex) || 0;
  const next = current + 1;
  if (next >= BACKGROUND_WALL_EXTENSIONS.length) {
    image.closest(".manga-bg-tile")?.remove();
    return;
  }
  image.dataset.bgExtIndex = String(next);
  image.src = `${image.dataset.bgBase}.${BACKGROUND_WALL_EXTENSIONS[next]}`;
}

function renderActiveView() {
  if (state.view === "auth") return renderAuthGate();
  if (state.view === "awakening") return renderAwakening();
  if (state.view === "diagnosis") return renderDiagnosisWizard();
  if (state.view === "fighters") return renderFighters();
  if (state.view === "fighter") return renderFighterDetail(selectedFighter());
  if (state.view === "vault") return renderVault();
  if (state.view === "train") return renderTrain();
  if (state.view === "path") return renderPath();
  if (state.view === "reports") return renderReports();
  if (state.view === "profile") return renderProfile();
  return renderHome();
}

function navItems() {
  return [
    ["home", "System"],
    ["fighters", "Fighters"],
    ["vault", "Vault"],
    ["train", "Train"],
    ["path", "Path"],
    ["reports", "Reports"],
    ["profile", "Profile"]
  ];
}

function renderTopNav() {
  const active = state.view === "fighter" ? "fighters" : state.view;
  const entry = ["auth", "awakening"].includes(state.view);
  return `
    <header class="web-header ${entry ? "entry-header" : ""}">
      <button type="button" class="brand-lockup" data-view="home" aria-label="Open home">
        <span>PTJ UNIVERSE</span>
        <strong>LOOKISM</strong>
      </button>
      ${entry ? `
        <div class="entry-rail" aria-label="Entry flow">
          <span class="${state.view === "auth" ? "active" : ""}">Login</span>
          <span class="${state.view === "awakening" ? "active" : ""}">Awaken</span>
          <span>Diagnose</span>
          <span>System</span>
        </div>
      ` : `<nav class="top-nav" aria-label="Lookism Combat Archive navigation">
        ${navItems().map(([view, label]) => `
          <button type="button" class="${active === view ? "active" : ""}" data-view="${view}">
            ${icon(view)}
            <span>${label}</span>
          </button>
        `).join("")}
        <button type="button" class="${state.userSettings.focusMode ? "active" : ""}" data-toggle-focus title="Dim background images behind dense panels">
          ${icon("path")}
          <span>Focus</span>
        </button>
      </nav>`}
    </header>
  `;
}

function renderBottomNav() {
  if (["auth", "awakening"].includes(state.view)) return "";
  const active = state.view === "fighter" ? "fighters" : state.view;
  const primaryItems = [
    ["home", "System"],
    ["fighters", "Fighters"],
    ["train", "Train"],
    ["path", "Path"]
  ];
  const moreItems = [
    ["vault", "Vault"],
    ["reports", "Reports"],
    ["profile", "Profile"]
  ];
  const moreActive = state.mobileMenuOpen || moreItems.some(([view]) => active === view);
  return `
    <nav class="bottom-nav" aria-label="Lookism Fitness mobile navigation">
      ${primaryItems.map(([view, label]) => `
        <button type="button" class="${active === view ? "active" : ""}" data-view="${view}">
          ${icon(view)}
          <span>${label}</span>
        </button>
      `).join("")}
      <button type="button" class="${moreActive ? "active" : ""}" data-mobile-more aria-expanded="${state.mobileMenuOpen ? "true" : "false"}">
        ${icon("more")}
        <span>More</span>
      </button>
    </nav>
    ${state.mobileMenuOpen ? `
      <button type="button" class="mobile-more-scrim" data-mobile-close aria-label="Close mobile menu"></button>
      <aside class="mobile-more-sheet" aria-label="More mobile navigation">
        <div class="mobile-more-head">
          <div>
            <div class="section-label">More</div>
            <strong>System Menu</strong>
          </div>
          <button type="button" class="assistant-close" data-mobile-close aria-label="Close menu">×</button>
        </div>
        <div class="mobile-more-grid">
          ${moreItems.map(([view, label]) => `
            <button type="button" class="${active === view ? "active" : ""}" data-view="${view}">
              ${icon(view)}
              <span>${label}</span>
            </button>
          `).join("")}
          <button type="button" class="${state.userSettings.focusMode ? "active" : ""}" data-toggle-focus>
            ${icon("focus")}
            <span>${state.userSettings.focusMode ? "Focus On" : "Focus Mode"}</span>
          </button>
        </div>
      </aside>
    ` : ""}
  `;
}

function assistantFabStyle() {
  const position = state.assistantPosition;
  if (!position) return "";
  const width = window.innerWidth <= 720 ? 62 : 72;
  const height = window.innerWidth <= 720 ? 62 : 72;
  const margin = window.innerWidth <= 720 ? 16 : 12;
  const minY = window.innerWidth <= 720 ? 74 : 82;
  const bottomSafe = window.innerWidth <= 720 ? 104 : 18;
  const x = clamp(position.x, margin, Math.max(margin, window.innerWidth - width - margin));
  const y = clamp(position.y, minY, Math.max(minY, window.innerHeight - height - bottomSafe));
  state.assistantPosition = { x, y };
  return `left:${x}px;top:${y}px;right:auto;bottom:auto;transform:none;`;
}

function renderChatAssistant() {
  const contextLine = buildConditionBrief();
  const signedIn = hasCloudUser();
  return `
    <div class="system-assistant ${state.chatOpen ? "open" : ""} ${state.mobileMenuOpen ? "mobile-menu-open" : ""}">
      <button type="button" class="assistant-fab" data-chat-toggle data-assistant-drag aria-label="${state.chatOpen ? "Close" : "Open"} System Assistant" aria-expanded="${state.chatOpen ? "true" : "false"}" style="${assistantFabStyle()}">
        <span class="assistant-fab-core">
          ${icon("chat")}
          <span class="assistant-pulse"></span>
        </span>
        <span class="assistant-fab-copy">
          <strong>System AI</strong>
          <small>Ask coach</small>
        </span>
      </button>
      ${state.chatOpen ? `
        <button type="button" class="assistant-scrim" data-chat-close aria-label="Close System Assistant"></button>
        <aside class="assistant-drawer" aria-label="System Assistant chat">
          <header class="assistant-head">
            <div>
              <div class="section-label">System Assistant · AI 코치</div>
              <h2>Lookism Coach</h2>
              <p>${escapeHtml(contextLine)}</p>
            </div>
            <button type="button" class="assistant-close" data-chat-close aria-label="Close chat">×</button>
          </header>

          <div class="assistant-context">
            <button type="button" data-chat-action="brief-condition">Brief condition</button>
            <button type="button" data-chat-action="promotion-review">Promotion review</button>
            <button type="button" data-chat-action="quest-focus">Next quests</button>
            <button type="button" data-chat-action="recovery-plan">Recovery</button>
          </div>

          <div class="assistant-messages" data-chat-scroll>
            ${state.chatMessages.length ? state.chatMessages.map(renderChatMessage).join("") : renderChatStarter()}
            ${state.chatBusy ? `
              <div class="chat-message assistant typing">
                <span>Reading your System save</span>
                <i></i><i></i><i></i>
              </div>
            ` : ""}
          </div>

          <footer class="assistant-foot">
            <div class="assistant-status">
              <span>${signedIn ? "Cloud chat" : "Device chat"}</span>
              <small>${escapeHtml(state.chatStatus || (signedIn ? `Supabase sync ready${state.chatLastSyncedAt ? ` · ${state.chatLastSyncedAt}` : ""}` : "Sign in on System/Profile to cloud sync messages."))}</small>
            </div>
            <form class="assistant-form" data-chat-form>
              <textarea data-chat-input rows="2" placeholder="Ask about condition, training, diet, sleep, recovery, motivation, rank..." ${state.chatBusy ? "disabled" : ""}>${escapeHtml(state.chatDraft)}</textarea>
              <button type="submit" class="assistant-send" ${state.chatBusy ? "disabled" : ""}>Send</button>
            </form>
            <p class="assistant-safety">Fiction-inspired coaching only. Pain, injury, medical, or diet problems need a qualified professional.</p>
          </footer>
        </aside>
      ` : ""}
    </div>
  `;
}

function renderChatStarter() {
  return `
    <div class="assistant-starter">
      <div class="section-label">Awaken System</div>
      <h3>Your coach is ready.</h3>
      <p>Ask for a condition brief, rank review, Lookism-style training route, diet basics, sleep reset, or motivation based on your current save.</p>
      <div class="starter-actions">
        <button type="button" data-chat-action="brief-condition">Brief me</button>
        <button type="button" data-chat-action="diet-basics">Diet basics</button>
        <button type="button" data-chat-action="motivation">Motivate me</button>
        <button type="button" data-chat-action="open-profile">Open diagnosis</button>
      </div>
    </div>
  `;
}

function renderChatMessage(message) {
  const suggestions = (message.suggestions || []).map(renderChatSuggestion).join("");
  const cards = message.role === "assistant" ? renderCoachCards(message.text, message.cards) : "";
  return `
    <article class="chat-message ${message.role}">
      ${cards || `<div>${escapeHtml(message.text).replace(/\n/g, "<br>")}</div>`}
      ${suggestions ? `<div class="chat-suggestions">${suggestions}</div>` : ""}
      <time>${escapeHtml(new Date(message.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }))}</time>
    </article>
  `;
}

function renderChatSuggestion(action) {
  const actionMap = {
    promotion_review: ["promotion-review", "Promotion review"],
    recovery_plan: ["recovery-plan", "Recovery plan"],
    quest_focus: ["quest-focus", "Quest focus"],
    boss_test_ready: ["quest-focus", "Boss test"],
    diet_basics: ["diet-basics", "Diet basics"],
    motivation: ["motivation", "Motivation"]
  };
  const [normalized, label] = actionMap[action] || [String(action).replace(/_/g, "-"), labelize(action)];
  return `<button type="button" data-chat-action="${escapeHtml(normalized)}">${escapeHtml(label)}</button>`;
}

function scrollChatToBottom() {
  if (!state.chatOpen) return;
  requestAnimationFrame(() => {
    const scrollBox = app.querySelector("[data-chat-scroll]");
    if (scrollBox) scrollBox.scrollTop = scrollBox.scrollHeight;
    const input = app.querySelector("[data-chat-input]");
    if (input && document.activeElement?.dataset?.chatInput === undefined && !state.chatBusy) {
      input.focus({ preventScroll: true });
    }
  });
}

function selectedFighter() {
  return roster.find((fighter) => fighter.id === state.selectedId) || roster[0];
}

function renderHome() {
  return renderSystemDashboard();
}

const DIAGNOSIS_STEPS = [
  { id: "body", label: "Body", group: "body", title: "Body Details", desc: "Height, weight, body fat, and age define the current form baseline." },
  { id: "context", label: "Training", group: "context", title: "Training Context", desc: "Training age, equipment, days, session length, goal, martial experience, and injury limits shape the route." },
  { id: "prs", label: "Strength", group: "prs", title: "Strength PRs", desc: "Lift records help classify power base and identify the safest overload path." },
  { id: "tests", label: "Benchmarks", group: "tests", title: "Benchmark Tests", desc: "Pull-ups, push-ups, plank, mile, and 5K build the endurance and performance score." },
  { id: "result", label: "Result", group: "", title: "Diagnosis Result", desc: "Run the offline system, review blockers, then apply the journey to the dashboard." }
];

function currentDiagnosisStepIndex() {
  return Math.max(0, DIAGNOSIS_STEPS.findIndex((step) => step.id === state.userSettings.diagnosisStep));
}

function renderAuthGate() {
  const signedIn = Boolean(state.cloudUser);
  const status = state.cloudStatus || "Cloud sync is loading...";
  return `
    <section class="page entry-page auth-page" style="--accent:#2368ff">
      <div class="entry-hero">
        <div>
          <div class="eyebrow">ENTRY GATE · 클라우드 / 게스트</div>
          <h1 class="system-title entry-title">ENTER<br>THE SYSTEM</h1>
          <p class="entry-copy">Login is the main route. Guest mode stays available, but it saves only on this browser until you sign in and sync.</p>
          <div class="entry-flow-map" aria-label="System flow">
            ${["Login", "Awaken", "Diagnose", "System"].map((step, index) => `<span class="${index === 0 ? "active" : ""}">${escapeHtml(step)}</span>`).join("")}
          </div>
        </div>
        <div class="orb entry-orb" aria-hidden="true"></div>
      </div>

      <div class="entry-grid">
        <article class="system-panel auth-card" style="--accent:#2368ff">
          <div class="section-label">Supabase Cloud Save</div>
          <h2>${signedIn ? "Cloud Account Found" : "Sign In"}</h2>
          <p>${signedIn ? `Signed in as ${escapeHtml(cloudUserEmail())}. Continue to System Awakening or restore your cloud save.` : "Sync XP, diagnosis reports, style progress, chat history, quests, and training logs across devices."}</p>
          ${signedIn ? `
            <div class="cloud-actions">
              <button type="button" class="analysis-button compact" data-cloud-restore>Restore Cloud</button>
              <button type="button" class="analysis-button compact secondary" data-accept-system>Continue</button>
              <button type="button" class="inline-action danger" data-cloud-signout>Sign Out</button>
            </div>
          ` : `
            <div class="cloud-auth-grid single">
              <label class="field">
                <span>Email</span>
                <input data-cloud-auth="email" value="${escapeHtml(state.cloudEmail)}" placeholder="you@example.com" autocomplete="email" />
              </label>
              <label class="field">
                <span>Password</span>
                <input data-cloud-auth="password" value="${escapeHtml(state.cloudPassword)}" placeholder="minimum 6 characters" type="password" autocomplete="current-password" />
              </label>
              <div class="cloud-actions">
                <button type="button" class="analysis-button compact" data-cloud-signin ${state.cloudBusy || !state.cloudReady ? "disabled" : ""}>Sign In</button>
                <button type="button" class="analysis-button compact secondary" data-cloud-signup ${state.cloudBusy || !state.cloudReady ? "disabled" : ""}>Create Account</button>
              </div>
            </div>
          `}
          <div class="background-status-row cloud-status-row">
            <span>${state.cloudBusy ? "Syncing" : signedIn ? "Cloud Save" : state.cloudReady ? "Cloud Ready" : "Cloud Offline"}</span>
            <small>${escapeHtml(status)}</small>
          </div>
        </article>

        <article class="system-panel guest-card" style="--accent:#8d4dff">
          <div class="section-label">Guest Mode</div>
          <h2>Continue Local</h2>
          <p>Use the app immediately with browser storage. XP, diagnosis, quests, reports, and chat stay on this device until you export or sign in.</p>
          <button type="button" class="analysis-button compact secondary" data-continue-guest>Continue as Guest</button>
          <div class="tiny">Recommended if you want to test the System before creating an account.</div>
        </article>
      </div>
    </section>
  `;
}

function renderAwakening() {
  const goals = [
    ["general", "Balanced Rise"],
    ["fat-loss", "Body Reset"],
    ["strength", "King Strength"],
    ["speed", "Speed Path"],
    ["martial", "Technique Route"]
  ];
  return `
    <section class="page entry-page awakening-page" style="--accent:#ff333d">
      <div class="awakening-core">
        <div class="orb awakening-orb" aria-hidden="true"></div>
        <div class="eyebrow">SYSTEM MESSAGE · 각성 조건</div>
        <h1 class="system-title entry-title">THE SYSTEM<br>HAS SELECTED YOU</h1>
        <p class="entry-copy">Accept only if you agree to progressive training, honest logs, and recovery-first decisions. The System rewards consistency before intensity.</p>
        <article class="system-panel contract-panel" style="--accent:#ff333d">
          <div class="section-label">Contract Conditions</div>
          <div class="contract-grid">
            <span>Safe training over reckless copying</span>
            <span>Recovery debt replaces punishment</span>
            <span>Pain or injury means stop and adjust</span>
            <span>Fiction inspires discipline, not medical advice</span>
          </div>
          <div class="section-label">Choose Goal</div>
          <div class="chip-list goal-list">
            ${goals.map(([id, label]) => `<button type="button" class="chip ${state.userSettings.selectedGoal === id ? "active" : ""}" data-awakening-goal="${id}">${escapeHtml(label)}</button>`).join("")}
          </div>
          <div class="profile-actions">
            <button type="button" class="analysis-button compact" data-accept-system>Accept System</button>
            <button type="button" class="analysis-button compact ghost" data-view="auth">Back</button>
          </div>
        </article>
      </div>
    </section>
  `;
}

function renderDiagnosisWizard() {
  const currentIndex = currentDiagnosisStepIndex();
  const step = DIAGNOSIS_STEPS[currentIndex] || DIAGNOSIS_STEPS[0];
  const analysis = state.profileAnalysis;
  return `
    <section class="page diagnosis-wizard-page" style="--accent:${analysis?.color || "#f0a42f"}">
      <div class="page-head-row">
        <div>
          <div class="eyebrow">SYSTEM DIAGNOSIS · STEP ${currentIndex + 1} OF ${DIAGNOSIS_STEPS.length}</div>
          <h1 class="page-title">System Diagnosis</h1>
          <p class="page-subtitle">${escapeHtml(step.desc)}</p>
        </div>
        <div class="roster-count"><strong>${currentIndex + 1}/${DIAGNOSIS_STEPS.length}</strong><span>${escapeHtml(step.label)}</span></div>
      </div>

      <div class="diagnosis-wizard-layout">
        <aside class="system-panel wizard-rail" style="--accent:#f0a42f">
          <div class="section-label">Wizard Route</div>
          ${DIAGNOSIS_STEPS.map((item, index) => `
            <button type="button" class="${index === currentIndex ? "active" : ""} ${index < currentIndex ? "done" : ""}" data-diagnosis-step="${item.id}">
              <span>${String(index + 1).padStart(2, "0")}</span>
              <b>${escapeHtml(item.label)}</b>
            </button>
          `).join("")}
        </aside>

        <section class="system-panel diagnosis-form wizard-form" style="--accent:#2368ff">
          <div class="section-label">Input Window</div>
          <h2>${escapeHtml(step.title)}</h2>
          ${step.id === "result" ? renderDiagnosisWizardResult() : `
            ${renderProfileValidation()}
            ${renderProfileFieldGroup(step.title, step.group)}
          `}
          <div class="profile-actions">
            <button type="button" class="analysis-button compact ghost" data-diagnosis-prev ${currentIndex === 0 ? "disabled" : ""}>Back</button>
            ${step.id === "result" ? `
              <button type="button" class="analysis-button compact" data-analyze-offline>Analyze Offline</button>
              <button type="button" class="analysis-button compact secondary" data-apply-journey ${analysis ? "" : "disabled"}>Apply Journey</button>
            ` : `
              <button type="button" class="analysis-button compact" data-diagnosis-next>Next Step</button>
            `}
          </div>
        </section>

        <aside class="diagnosis-side wizard-preview">
          ${analysis ? renderDiagnosisResult(analysis) : renderDiagnosisEmpty()}
          ${analysis ? renderJourneyRoadmap(analysis) : ""}
        </aside>
      </div>
    </section>
  `;
}

function renderDiagnosisWizardResult() {
  const analysis = state.profileAnalysis;
  if (!analysis) {
    return `
      <div class="diagnosis-final-empty">
        <p>Run the offline diagnosis to classify your current category, blockers, and higher-rank journey.</p>
      </div>
    `;
  }
  return `
    <div class="diagnosis-final">
      <div class="section-label">Current Category</div>
      <h3>${escapeHtml(analysis.currentCategory)}</h3>
      <p>${escapeHtml(analysis.summary)}</p>
      <div class="chip-list">${analysis.blockers.map((blocker) => `<span class="chip">${escapeHtml(blocker)}</span>`).join("")}</div>
    </div>
  `;
}

function renderSystemDashboard() {
  const levelProgress = currentLevelProgress();
  const rank = rankFromLevel(levelProgress.level);
  const topThree = ["James Lee", "Tom Lee", "Gun Park"].map((name) => roster.find((fighter) => fighter.name === name)).filter(Boolean);
  const dailyTotal = questGroup("daily").length;
  const dailyDone = completedDailyCount();
  const journey = state.appliedJourney;
  return `
    <section class="page home-page system-page" style="--accent:${rank.color}">
      <header class="system-head">
        <div>
          <div class="eyebrow">SYSTEM WINDOW · 외모지상주의</div>
          <h1 class="system-title">LEVEL UP</h1>
          <div class="system-sub">LOOKISM SYSTEM · SOLO-STYLE QUEST TRAINING</div>
        </div>
        <div class="orb" aria-hidden="true"></div>
      </header>

      <div class="archive-metrics" aria-label="Archive metrics">
        ${metricCard("Level", levelProgress.level, rank.label)}
        ${metricCard("XP", state.totalXp.toLocaleString(), `${levelProgress.next.toLocaleString()} next`)}
        ${metricCard("Streak", state.streak, "daily clears")}
        ${metricCard("Save", hasCloudUser() ? "Cloud" : state.userSettings.guestMode ? "Guest" : "Local", hasCloudUser() ? "synced account" : "device save")}
      </div>

      <div class="system-layout">
        <article class="system-panel rank-panel level-panel" style="--accent:${rank.color}">
          <div class="level-kicker">Current Form</div>
          <h2 class="rank-title">${escapeHtml(rank.label)}</h2>
          <span class="ko-small">${escapeHtml(rank.ko)} · Lv ${levelProgress.level}</span>
          <p class="quote-line">${escapeHtml(rank.lore)}</p>
          <div class="xp-row"><span>${state.totalXp.toLocaleString()} XP</span><span>${levelProgress.level >= 100 ? "MAX LEVEL" : `${(levelProgress.next - state.totalXp).toLocaleString()} XP to Lv ${levelProgress.level + 1}`}</span></div>
          <div class="progress" style="--accent:${rank.color};--value:${levelProgress.percent}%"><span></span></div>
          <div class="level-ladder">
            ${LEVEL_RANKS.map((item) => `<span class="${levelProgress.level >= item.min ? "active" : ""}" style="--accent:${item.color}">${escapeHtml(item.label)}</span>`).join("")}
          </div>
        </article>

        ${renderDashboardBriefPanel(rank, journey)}
      </div>

      <article class="system-panel message">
        <div class="section-label">System Message</div>
        <p>"${escapeHtml(journey ? `Current diagnosis applied: ${journey.currentCategory}. Clear ${journey.recommendedFighterType}, ${journey.recommendedMastery}, and ${journey.recommendedArt} quests to climb toward ${journey.nextCategory}.` : "Start as Weak Daniel. Earn XP through clean reps, recovery, roadwork, and martial precision. The app rewards consistency before intensity.")}"</p>
        <div class="tiny">Fiction-inspired training · progressive overload · not medical advice</div>
      </article>

      ${journey ? renderAppliedJourney(journey) : renderNoJourneyPrompt()}

      ${state.penaltyDebt ? renderPenaltyZone() : ""}

      <div class="quest-board">
        ${renderQuestGroup("Daily Quests", "Complete all daily quests to extend your streak.", "daily", `${dailyDone}/${dailyTotal}`)}
        ${renderQuestGroup("Weekly Quests", "One harder block each week. Keep form and recovery clean.", "weekly", `${questGroup("weekly").filter((quest) => isQuestComplete(quest.id)).length}/${questGroup("weekly").length}`)}
        ${renderQuestGroup("Boss Quests", "Benchmarks for level spikes. Record results honestly.", "boss", `${questGroup("boss").filter((quest) => isQuestComplete(quest.id)).length}/${questGroup("boss").length}`)}
      </div>

      <div class="section-top">
        <div class="section-label">Weekly Schedule</div>
        <span class="action-row">
          <button type="button" class="inline-action" data-reset-daily>Reset Daily</button>
          <button type="button" class="inline-action danger" data-reset-system>Reset System</button>
        </span>
      </div>
      <div class="schedule-grid">
        ${activeWeeklySchedule().map(renderScheduleDay).join("")}
      </div>

      <div class="section-top">
        <div class="section-label">Pinnacle References</div>
        <span class="action-row">
          <button type="button" class="inline-action" data-view="reports">Open Reports</button>
          <button type="button" class="inline-action" data-view="fighters">Open Roster</button>
        </span>
      </div>
      <div class="top-tier-strip">
        ${topThree.map(renderMiniFighter).join("")}
      </div>
    </section>
  `;
}

function renderDashboardBriefPanel(rank, journey) {
  const analysis = state.profileAnalysis;
  return `
    <article class="system-panel stat-panel dashboard-brief-panel" style="--accent:${rank.color}">
      <div class="section-label">Status Window <span class="help-tip" title="Dashboard stats grow from completed quests and training levels. They are separate from Profile Diagnosis Score.">?</span></div>
      <div class="stat-grid compact-stats">
        ${SYSTEM_STATS.map(renderStatMeter).join("")}
      </div>
      <div class="dashboard-next-grid">
        <div>
          <div class="section-label">Next Rank</div>
          <p>${escapeHtml(nextRankChecklistText(rank, analysis))}</p>
        </div>
        <div>
          <div class="section-label">System AI Brief</div>
          <p>${escapeHtml(journey ? `Focus ${journey.recommendedMastery}, ${journey.recommendedArt}, and recovery consistency today.` : "Run diagnosis to unlock a personalized quest route.")}</p>
        </div>
      </div>
    </article>
  `;
}

function nextRankChecklistText(rank, analysis) {
  const progress = currentLevelProgress();
  const nextRank = LEVEL_RANKS.find((item) => item.min > progress.level);
  if (!nextRank) return "Pinnacle Legend reached. Maintain control, recovery, and clean boss tests.";
  const xpNeeded = Math.max(0, progress.next - state.totalXp);
  const diagnosisPart = analysis ? `Diagnosis ${analysis.overall}/100` : "diagnosis pending";
  return `${xpNeeded.toLocaleString()} XP to Lv ${progress.level + 1}; ${diagnosisPart}; clear daily quests and one boss test toward ${nextRank.label}.`;
}

function renderReports() {
  const analysis = state.profileAnalysis;
  return `
    <section class="page reports-page" style="--accent:#19c566">
      <div class="page-head-row">
        <div>
          <div class="eyebrow">REPORTS · 성장 기록</div>
          <h1 class="page-title">Progress Report</h1>
          <p class="page-subtitle">XP history · streak heat · stat growth · boss PRs · diagnosis snapshots</p>
        </div>
        <div class="roster-count"><strong>${state.trainingLogs.length}</strong><span>logs</span></div>
      </div>

      <div class="reports-summary-grid">
        ${metricCard("Total XP", state.totalXp.toLocaleString(), `Lv ${currentLevelProgress().level}`)}
        ${metricCard("Streak", state.streak, "daily clears")}
        ${metricCard("Diagnosis", analysis ? `${analysis.overall}/100` : "Pending", analysis?.currentCategory || "Run diagnosis")}
        ${metricCard("Save", hasCloudUser() ? "Cloud" : "Local", state.cloudLastSyncedAt || "device")}
      </div>

      ${renderProgressHistory()}

      <section class="system-panel report-diagnosis-panel" style="--accent:${analysis?.color || "#f0a42f"}">
        <div class="section-top compact">
          <div>
            <div class="section-label">Latest Diagnosis Report</div>
            <h2>${escapeHtml(analysis?.currentCategory || "Awaiting Diagnosis")}</h2>
            <p>${escapeHtml(analysis?.summary || "Run System Diagnosis to create the first saved category report.")}</p>
          </div>
          <button type="button" class="inline-action" data-view="diagnosis">${analysis ? "Run Again" : "Start Diagnosis"}</button>
        </div>
        ${analysis ? `<div class="chip-list">${analysis.blockers.map((blocker) => `<span class="chip">${escapeHtml(blocker)}</span>`).join("")}</div>` : ""}
      </section>
    </section>
  `;
}

function renderOnboardingPanel() {
  return `
    <article class="system-panel onboarding-panel" style="--accent:#2368ff">
      <div>
        <div class="section-label">First Run · System Awakening</div>
        <h2>Start with diagnosis before cloud save.</h2>
        <p>Enter your body details and benchmarks first. The System will classify your current form, assign blockers, and build a higher-category journey before you worry about syncing accounts.</p>
      </div>
      <div class="onboarding-actions">
        <button type="button" class="analysis-button compact" data-start-diagnosis>Start Diagnosis</button>
        <button type="button" class="inline-action" data-complete-onboarding>I know the System</button>
      </div>
    </article>
  `;
}

function renderCloudPanel() {
  const signedIn = Boolean(state.cloudUser);
  const status = state.cloudStatus || "Cloud sync is loading...";
  const lastSync = state.cloudLastSyncedAt ? `Last sync ${state.cloudLastSyncedAt}` : "No cloud sync yet";
  const initials = cloudUserEmail().slice(0, 2).toUpperCase() || "SY";
  return `
    <article class="system-panel cloud-panel" style="--accent:#19c566">
      <div class="section-top compact">
        <span class="cloud-avatar">${escapeHtml(initials)}</span>
        <div>
          <div class="section-label">Cloud Save</div>
          <p>${signedIn ? `Signed in as ${escapeHtml(cloudUserEmail())}. XP, profile diagnosis, style progress, chat, quests, and reports sync to Supabase.` : "Optional after diagnosis: sign in to sync XP, levels, style progress, profile diagnosis, quests, reports, and logs across devices."}</p>
        </div>
        <span class="cloud-badge ${signedIn ? "online" : ""}">${signedIn ? "Online" : state.cloudReady ? "Ready" : "Offline"}</span>
      </div>
      ${signedIn ? `
        <div class="cloud-actions">
          <button type="button" class="inline-action" data-cloud-sync ${state.cloudBusy ? "disabled" : ""}>Sync Now</button>
          <button type="button" class="inline-action" data-cloud-restore ${state.cloudBusy ? "disabled" : ""}>Restore Cloud</button>
          <button type="button" class="inline-action" data-export-data>Export Data</button>
          <button type="button" class="inline-action danger" data-delete-app-data ${state.cloudBusy ? "disabled" : ""}>Delete App Data</button>
          <button type="button" class="inline-action danger" data-cloud-signout ${state.cloudBusy ? "disabled" : ""}>Sign Out</button>
        </div>
      ` : `
        <div class="cloud-auth-grid">
          <label class="field">
            <span>Email</span>
            <input data-cloud-auth="email" value="${escapeHtml(state.cloudEmail)}" placeholder="you@example.com" autocomplete="email" />
          </label>
          <label class="field">
            <span>Password</span>
            <input data-cloud-auth="password" value="${escapeHtml(state.cloudPassword)}" placeholder="minimum 6 characters" type="password" autocomplete="current-password" />
          </label>
          <div class="cloud-actions">
            <button type="button" class="inline-action" data-cloud-signin ${state.cloudBusy || !state.cloudReady ? "disabled" : ""}>Sign In</button>
            <button type="button" class="inline-action" data-cloud-signup ${state.cloudBusy || !state.cloudReady ? "disabled" : ""}>Create Account</button>
          </div>
        </div>
        <div class="cloud-actions">
          <button type="button" class="inline-action" data-export-data>Export Local</button>
          <button type="button" class="inline-action danger" data-clear-local>Clear Local</button>
        </div>
      `}
      <div class="background-status-row cloud-status-row">
        <span>${state.cloudBusy ? "Syncing" : signedIn ? "Synced Save" : "Device Save"}</span>
        <small>${escapeHtml(status)} · ${escapeHtml(lastSync)} · ${escapeHtml(state.userSettings.lastSyncedAt ? `Settings ${state.userSettings.lastSyncedAt}` : "Settings local")}</small>
      </div>
    </article>
  `;
}

function renderStatMeter(stat) {
  const [key, label, ko, color] = stat;
  const value = clamp(Number(state.stats[key]) || 5, 0, 100);
  return `
    <div class="stat-meter" style="--accent:${color};--value:${value}%">
      <div><span>${escapeHtml(label)}</span><small>${escapeHtml(ko)}</small></div>
      <strong>${value}</strong>
      <div class="progress"><span></span></div>
    </div>
  `;
}

function renderQuestGroup(title, desc, type, count) {
  const quests = questGroup(type);
  return `
    <section class="quest-column">
      <div class="section-top compact">
        <div>
          <div class="section-label">${escapeHtml(title)}</div>
          <p>${escapeHtml(desc)}</p>
        </div>
        <span class="count">${escapeHtml(count)}</span>
      </div>
      <div class="quest-list">
        ${quests.map(renderQuestCard).join("")}
      </div>
    </section>
  `;
}

function renderQuestCard(quest) {
  const complete = isQuestComplete(quest.id);
  return `
    <button type="button" class="quest-row system-quest ${complete ? "completed" : ""}" data-toggle-quest="${quest.id}" style="--accent:${quest.color}" aria-pressed="${complete ? "true" : "false"}">
      <span class="square-mark">${complete ? "✓" : "○"}</span>
      <div>
        <span class="tiny">${escapeHtml(quest.ko)} · ${escapeHtml(labelize(quest.stat))}</span>
        <h3>${escapeHtml(quest.title)}</h3>
        <p>${escapeHtml(quest.desc)}</p>
      </div>
      <div class="xp">${complete ? `Undo<br><span class="tiny">-${quest.xp} XP</span>` : `+${quest.xp}<br><span class="tiny">XP</span>`}</div>
    </button>
  `;
}

function renderPenaltyZone() {
  return `
    <article class="system-panel penalty-card" style="--accent:#f0a42f">
      <div class="section-label">Penalty Zone · Recovery Debt</div>
      <p>You missed part of a daily chain. No harmful punishment here: clear debt with mobility reset, light walking, hydration, and sleep discipline.</p>
      <div class="chip-list">
        <span class="chip">10 min mobility</span>
        <span class="chip">20 min easy walk</span>
        <span class="chip">No ego maxing</span>
      </div>
    </article>
  `;
}

function renderNoJourneyPrompt() {
  return `
    <article class="system-panel diagnosis-prompt" style="--accent:#2368ff">
      <div class="section-label">No Personal Diagnosis Applied</div>
      <p>Open Profile, enter your stats, run the offline System Diagnosis, then apply the journey. Your daily quests, schedule, and XP focus will become personalized.</p>
      <button type="button" class="inline-action" data-view="profile">Open System Diagnosis</button>
    </article>
  `;
}

function renderAppliedJourney(journey) {
  return `
    <article class="system-panel applied-journey" style="--accent:${journey.color}">
      <div class="section-top compact">
        <div>
          <div class="section-label">Applied Journey</div>
          <h2>${escapeHtml(journey.currentCategory)}</h2>
          <p>${escapeHtml(journey.summary)}</p>
        </div>
        <span class="count">Next · ${escapeHtml(journey.nextCategory)}</span>
      </div>
      <div class="journey-grid">
        <div><span>Fighter Type</span><strong>${escapeHtml(journey.recommendedFighterType)}</strong></div>
        <div><span>Mastery Field</span><strong>${escapeHtml(journey.recommendedMastery)}</strong></div>
        <div><span>Martial Art</span><strong>${escapeHtml(journey.recommendedArt)}</strong></div>
        <div><span>XP Target</span><strong>${escapeHtml(journey.xpTarget)}</strong></div>
      </div>
      <div class="chip-list">${journey.blockers.map((blocker) => `<span class="chip">${escapeHtml(blocker)}</span>`).join("")}</div>
    </article>
  `;
}

function renderScheduleDay(day) {
  const [label, title, desc] = day;
  return `
    <article class="schedule-day">
      <span>${escapeHtml(label)}</span>
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(desc)}</p>
    </article>
  `;
}

function metricCard(label, value, note) {
  return `
    <div class="metric-card">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
      <small>${escapeHtml(note)}</small>
    </div>
  `;
}

function renderProgressHistory() {
  const logs = state.trainingLogs || [];
  const recent = logs.slice(-28);
  const bossLogs = logs.filter((log) => log.logType === "quest_completion" && /boss/i.test(log.title)).slice(-4);
  return `
    <section class="system-panel history-panel" style="--accent:#05a9c8">
      <div class="section-top compact">
        <div>
          <div class="section-label">Progress History</div>
          <p>XP over time, streak heat, stat snapshot, and boss-test PR notes from logged work.</p>
        </div>
        <span class="count">${logs.length} logs</span>
      </div>
      <div class="history-grid">
        ${renderXpSparkline(recent)}
        ${renderStreakHeatmap(logs)}
        ${renderStatSnapshotChart()}
        ${renderBossPrCards(bossLogs)}
      </div>
    </section>
  `;
}

function renderXpSparkline(logs) {
  const points = logs.length ? logs : [{ totalXp: state.totalXp || 0 }];
  const max = Math.max(1, ...points.map((log) => Number(log.totalXp) || 0), state.totalXp || 0);
  const bars = points.slice(-14).map((log) => {
    const value = Number(log.totalXp) || 0;
    const height = clamp(Math.round((value / max) * 100), 6, 100);
    return `<span style="--value:${height}%" title="${value.toLocaleString()} XP"></span>`;
  }).join("");
  return `
    <article class="chart-card">
      <div class="section-label">XP Over Time</div>
      <div class="bar-chart">${bars || "<em>No logs yet</em>"}</div>
      <p>${state.totalXp.toLocaleString()} total XP</p>
    </article>
  `;
}

function renderStreakHeatmap(logs) {
  const days = Array.from({ length: 21 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (20 - index));
    const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
    const count = logs.filter((log) => log.date === key).length;
    return `<span class="${count ? "active" : ""}" title="${key}: ${count} logs"></span>`;
  }).join("");
  return `
    <article class="chart-card">
      <div class="section-label">Streak Heat</div>
      <div class="heatmap">${days}</div>
      <p>${state.streak} daily clears</p>
    </article>
  `;
}

function renderStatSnapshotChart() {
  const rows = SYSTEM_STATS.map(([key, label, , color]) => {
    const value = clamp(Number(state.stats[key]) || 5, 0, 100);
    return `
      <div class="mini-stat-row" style="--accent:${color};--value:${value}%">
        <span>${escapeHtml(label)}</span>
        <div class="progress"><span></span></div>
        <b>${value}</b>
      </div>
    `;
  }).join("");
  return `<article class="chart-card"><div class="section-label">Stat Growth</div>${rows}</article>`;
}

function renderBossPrCards(logs) {
  return `
    <article class="chart-card">
      <div class="section-label">Boss-Test PRs</div>
      <div class="boss-pr-list">
        ${logs.length ? logs.map((log) => `<span><b>${escapeHtml(log.title)}</b><small>${escapeHtml(log.date || "")}</small></span>`).join("") : "<p>No boss tests logged yet.</p>"}
      </div>
    </article>
  `;
}

function renderQuest(title, desc, xp, color) {
  return `
    <article class="quest-row" style="--accent:${color}">
      <span class="square-mark">○</span>
      <div>
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(desc)}</p>
      </div>
      <div class="xp">${escapeHtml(xp)}<br><span class="tiny">XP</span></div>
    </article>
  `;
}

function renderMiniFighter(fighter) {
  return `
    <button type="button" class="mini-fighter" data-open-fighter="${fighter.id}" style="--accent:${fighter.accent}">
      ${renderCharacterImage(fighter, "mini")}
      <span class="mini-fighter-copy">
        <span class="tiny">#${String(fighter.rank).padStart(2, "0")} · ${escapeHtml(fighter.tier)}</span>
        <h3>${escapeHtml(fighter.name)}</h3>
        <small>${escapeHtml(fighter.alias)}</small>
      </span>
    </button>
  `;
}

function renderCharacterImage(fighter, variant = "card") {
  const src = imageFor(fighter);
  const fallback = fighter.name.split(" ").map((part) => part[0]).join("").slice(0, 3);
  return `
    <span class="character-image character-image--${variant}">
      ${src ? `<img src="${src}" alt="${escapeHtml(fighter.name)}" loading="${variant === "hero" ? "eager" : "lazy"}" onerror="this.closest('.character-image').classList.add('image-missing'); this.remove()" />` : ""}
      <span class="image-fallback">${escapeHtml(fallback)}</span>
    </span>
  `;
}

function renderFighters() {
  const visible = filteredRoster();
  return `
    <section class="page fighters-page">
      <div class="page-head-row">
        <div>
          <div class="eyebrow">PTJ UNIVERSE TIER LIST</div>
          <h1 class="page-title">Top Fighters</h1>
          <p class="page-subtitle">최강 파이터 · CANON-SOURCED · ${roster.length} ROSTER</p>
        </div>
        <div class="roster-count"><strong>${visible.length}</strong><span>shown</span></div>
      </div>
      <input class="search-box" data-search value="${escapeHtml(state.query)}" placeholder="Search Gun, James, UI, Big Deal..." aria-label="Search fighters" />
      <div class="fighter-list">
        ${visible.map(renderFighterRow).join("")}
      </div>
    </section>
  `;
}

function filteredRoster() {
  const query = state.query.trim().toLowerCase();
  if (!query) return roster;
  return roster
    .filter((fighter) => fighter.searchText.includes(query))
    .sort((a, b) => searchRank(a, query) - searchRank(b, query) || a.rank - b.rank);
}

function searchRank(fighter, query) {
  if (fighter.name.toLowerCase() === query) return 0;
  if (fighter.name.toLowerCase().includes(query)) return 1;
  if ((fighter.aliases || []).some((alias) => alias.toLowerCase() === query)) return 2;
  if ((fighter.aliases || []).some((alias) => alias.toLowerCase().includes(query))) return 3;
  if (fighter.primaryTechniques.toLowerCase().includes(query) || fighter.uniqueSkill.toLowerCase().includes(query)) return 4;
  return 5;
}

function renderFighterRow(fighter) {
  return `
    <button type="button" class="fighter-row" data-open-fighter="${fighter.id}" style="--accent:${fighter.accent}">
      ${renderCharacterImage(fighter, "card")}
      <span>
        <span class="tiny">#${String(fighter.rank).padStart(3, "0")} · ${escapeHtml(fighter.tier)}</span>
        <h2>${escapeHtml(fighter.name)}</h2>
        <span class="ko-small">${escapeHtml(fighterDeep(fighter).ko || fighter.alias)}</span>
        <span class="fighter-record-line">${escapeHtml(fighter.combatPath)}</span>
        <p>${escapeHtml(fighter.analysis)}</p>
        <span class="fighter-tech-line">${escapeHtml(fighter.primaryTechniques)} · ${escapeHtml(fighter.uniqueSkill)}</span>
        ${renderTags(fighter.masteries.slice(0, 4))}
      </span>
    </button>
  `;
}

function renderFighterDetail(fighter) {
  const deep = fighterDeep(fighter);
  const source = imageSourceFor(fighter);
  return `
    <section class="page fighter-detail-page" style="--accent:${fighter.accent}">
      <button type="button" class="back-btn" data-view="fighters">← Fighters</button>
      <header class="fighter-hero">
        <div class="fighter-hero-copy">
          <div class="eyebrow">${escapeHtml(fighter.tier)} · Rank #${fighter.rank}</div>
          <h1>${escapeHtml(fighter.name)}</h1>
          <span class="ko-small">${escapeHtml(deep.ko || fighter.alias)}</span>
          <p>${escapeHtml(fighter.analysis)}</p>
          ${renderTags(fighter.masteries.slice(0, 4))}
        </div>
        <div class="fighter-hero-media">
          ${renderCharacterImage(fighter, "hero")}
          <a class="image-source-link" href="${source}" target="_blank" rel="noreferrer">Image source · Fandom</a>
        </div>
      </header>

      <article class="system-panel quote-card">
        <div class="section-label">Signature Note</div>
        <p>${escapeHtml(deep.quote)}</p>
      </article>

      <div class="detail-stack">
        ${renderPdfCombatRecord(fighter)}
        ${renderEvolutionTimeline(fighter)}
        ${detailBlock("Fighter Profile", fighter.analysis)}
        ${detailBlock("Unique Skill", deep.uniqueSkill)}
        ${detailBlock("Fighting Style", deep.fightingStyle || fighter.style)}
        ${detailBlock("Physique", deep.physique)}
        ${detailBlock("Training Method", deep.trainingMethod)}
        ${renderRoutinePanel(fighter)}
        ${renderFighterTrainingLinks(fighter)}
        ${detailBlock("Career Achievement", deep.achievement)}
        ${renderWikiCard(fighter)}
        <article class="source-card" style="--accent:${fighter.accent}">
          <h3>Sources</h3>
          <p>Fighter facts are linked back to the Fandom page and official WEBTOON listing. Wiki text is summarized as factual fields instead of copied as raw paragraphs.</p>
          <div class="source-grid">
            <a class="source-card" href="${source}" target="_blank" rel="noreferrer" style="--accent:${fighter.accent}"><h3>Fandom page</h3><p>${escapeHtml(source)}</p></a>
            <a class="source-card" href="${WEBTOON_URL}" target="_blank" rel="noreferrer" style="--accent:${fighter.accent}"><h3>Official WEBTOON</h3><p>Lookism episode listing</p></a>
          </div>
        </article>
      </div>
    </section>
  `;
}

function renderPdfCombatRecord(fighter) {
  const facts = [
    ["Primary Techniques", fighter.primaryTechniques],
    ["Unique Skill", fighter.uniqueSkill],
    ["Masteries / Thresholds", fighter.masteriesAchieved],
    ["Combat Path", fighter.combatPath]
  ];
  return `
    <article class="combat-record-card" style="--accent:${fighter.accent}">
      <div class="section-label">PDF Combat Record</div>
      <div class="combat-record-grid">
        ${facts.map(([label, value]) => `
          <section>
            <span>${escapeHtml(label)}</span>
            <strong>${escapeHtml(value)}</strong>
          </section>
        `).join("")}
      </div>
    </article>
  `;
}

function renderEvolutionTimeline(fighter) {
  const stages = [
    ["Very Beginner", fighter.evolution.vb],
    ["Beginner", fighter.evolution.b],
    ["Intermediate", fighter.evolution.i],
    ["Advanced", fighter.evolution.a],
    ["Expert / Peak", fighter.evolution.e]
  ];
  return `
    <article class="evolution-card" style="--accent:${fighter.accent}">
      <div class="section-label">5-Stage Evolution Path</div>
      <div class="evolution-timeline">
        ${stages.map(([label, value], index) => `
          <section>
            <span>${String(index + 1).padStart(2, "0")}</span>
            <div>
              <em>${escapeHtml(label)}</em>
              <strong>${escapeHtml(value)}</strong>
            </div>
          </section>
        `).join("")}
      </div>
    </article>
  `;
}

function renderFighterTrainingLinks(fighter) {
  const links = fighterTrainingLinks(fighter);
  return `
    <article class="fighter-training-card" style="--accent:${fighter.accent}">
      <div class="section-label">Linked Training Routes</div>
      <p>Open the matching martial-art or fighter-type progression without leaving the current system flow.</p>
      <div class="fighter-training-links">
        ${links.map((link) => `
          <button type="button" ${link.type === "art" ? `data-open-art="${escapeHtml(link.id)}"` : `data-open-fighter-type="${escapeHtml(link.id)}"`}>
            <span>${escapeHtml(link.kind)}</span>
            <strong>${escapeHtml(link.label)}</strong>
          </button>
        `).join("")}
      </div>
    </article>
  `;
}

function fighterTrainingLinks(fighter) {
  const text = `${fighter.primaryTechniques} ${fighter.uniqueSkill} ${fighter.masteriesAchieved} ${fighter.combatPath} ${fighter.archetypeKey}`.toLowerCase();
  const links = [];
  const addArt = (label, patterns) => {
    if (patterns.some((pattern) => text.includes(pattern))) {
      links.push({ type: "art", kind: "Martial Art", id: slug(label), label });
    }
  };

  addArt("Boxing / Iron Boxing", ["boxing", "iron body", "iron fortress", "counter strike"]);
  addArt("Muay Thai / Runner's High", ["muay thai", "runner", "elbow"]);
  addArt("Yamazaki Kyokushin Karate", ["kyokushin", "yakuza", "yamazaki"]);
  addArt("Aikido / Joint Control", ["aikido", "joint"]);
  addArt("Systema / Security Combat", ["systema", "security"]);
  addArt("Kali / Weapon Handling", ["kali", "arnis", "weapon", "blade", "wire", "sword"]);
  addArt("Capoeira / Evasion Kicks", ["capoeira", "evasion"]);
  addArt("Taekwondo / Kick Precision", ["taekwondo", "kick", "agility"]);
  addArt("Judo / Kudo / Ssireum Grappling", ["judo", "kudo", "ssireum", "wrestling", "grappling", "sumo", "grip"]);
  addArt("CQC / Jeet Kune Do", ["cqc", "jeet kune do", "close"]);
  addArt("Copy-Adaptive Mixed Martial Arts", ["copy", "all martial", "mma", "adaptive"]);
  addArt("Street Fighting / Wildness", ["wildness", "brawling", "street", "feral"]);

  const typeId = archetypeTrainingTypeId(fighter.archetypeKey);
  const type = FIGHTER_TYPE_TRAINING.find((item) => fighterTypeId(item) === typeId);
  if (type) links.unshift({ type: "fighter", kind: "Fighter Type", id: typeId, label: type.type });

  if (links.length < 3) {
    links.push({ type: "art", kind: "Martial Art", id: slug("Copy-Adaptive Mixed Martial Arts"), label: "Copy-Adaptive Mixed Martial Arts" });
  }

  return dedupeTrainingLinks(links).slice(0, 6);
}

function dedupeTrainingLinks(links) {
  const seen = new Set();
  return links.filter((link) => {
    const key = `${link.type}:${link.id}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function archetypeTrainingTypeId(archetypeKey) {
  const map = {
    "ui-copy": "copy-ui-engine",
    "speed-legend": "speed-legend",
    "wild-wall": "wild-wall",
    weapon: "weapon-specialist",
    "king-strength": "king-strength",
    "iron-boxing": "iron-boxing",
    "conviction-brawler": "conviction-brawler",
    grappler: "grappler",
    striker: "technical-striker",
    crew: "crew-enforcer"
  };
  return map[archetypeKey] || "crew-enforcer";
}

function renderVault() {
  const visible = filteredVault();
  return `
    <section class="page vault-page">
      <div class="page-head-row">
        <div>
          <div class="eyebrow">MANHWA SOURCE WALL</div>
          <h1 class="page-title">Visual Vault</h1>
          <p class="page-subtitle">캐릭터 · 모드 · 경지 · PATH REFERENCES</p>
        </div>
        <div class="roster-count"><strong>${visible.length}</strong><span>refs</span></div>
      </div>
      <nav class="vault-filters" aria-label="Vault filters">
        ${VAULT_FILTERS.map(([id, label]) => `
          <button type="button" class="${state.vaultFilter === id ? "active" : ""}" data-vault-filter="${id}">${escapeHtml(label)}</button>
        `).join("")}
      </nav>
      <div class="vault-grid">
        ${visible.map(renderVaultCard).join("")}
      </div>
    </section>
  `;
}

function vaultCategory(item) {
  const [title, type] = item;
  const haystack = `${title} ${type}`.toLowerCase();
  if (haystack.includes("ui") || haystack.includes("unconscious") || haystack.includes("mode")) return "ui";
  if (haystack.includes("mastery")) return "mastery";
  if (haystack.includes("path")) return "path";
  if (haystack.includes("gun") || haystack.includes("eli")) return "brutal";
  if (haystack.includes("james") || haystack.includes("tom")) return "kings";
  if (haystack.includes("tom")) return "pre-gen";
  return "all";
}

function filteredVault() {
  if (state.vaultFilter === "all") return vault;
  return vault.filter((item) => vaultCategory(item) === state.vaultFilter || (state.vaultFilter === "pre-gen" && /tom/i.test(item[0])));
}

function renderVaultCard(item) {
  const [title, type, imageKey, note] = item;
  const src = imageFor({ imageKey });
  const source = imageSourceFor({ imageKey });
  return `
    <article class="vault-card" style="--accent:${vaultAccent(type)}">
      <a class="vault-image" href="${source}" target="_blank" rel="noreferrer">
        ${src ? `<img src="${src}" alt="${escapeHtml(title)}" loading="lazy" onerror="this.closest('.vault-image').classList.add('image-missing'); this.remove()" />` : ""}
        <span class="image-fallback">${escapeHtml(type.slice(0, 3).toUpperCase())}</span>
      </a>
      <div class="vault-copy">
        <span class="tiny">${escapeHtml(type)}</span>
        <h2>${escapeHtml(title)}</h2>
        <p>${escapeHtml(note)}</p>
        <a href="${source}" target="_blank" rel="noreferrer">Open source</a>
      </div>
    </article>
  `;
}

function vaultAccent(type) {
  if (type.toLowerCase().includes("mode")) return MASTERY_META.ui.color;
  if (type.toLowerCase().includes("path")) return MASTERY_META.path.color;
  if (type.toLowerCase().includes("mastery")) return MASTERY_META.conviction.color;
  return MASTERY_META.speed.color;
}

function fighterDeep(fighter) {
  const candidates = [
    fighter.name,
    fighter.name.replace(/\s*\(Prime\)/, ""),
    fighter.name.replace(/^UI /, ""),
    ...(fighter.aliases || [])
  ];
  const found = candidates.map((name) => FIGHTER_DEEP_DIVE[name]).find(Boolean);
  if (found) return found;
  return {
    ko: fighter.alias,
    quote: `${fighter.name} follows the ${fighter.combatPath} route: ${fighter.uniqueSkill}.`,
    uniqueSkill: `${fighter.uniqueSkill}: ${getModeFocus(fighter)} expressed through ${fighter.primaryTechniques}.`,
    fightingStyle: `${fighter.primaryTechniques}. App route: ${fighter.style}`,
    physique: physiqueFor(fighter),
    achievement: `${fighter.faction} representative in the PDF-ranked top-50 roster. Peak marker: ${fighter.evolution.e}.`,
    trainingMethod: `${fighter.combatPath} progression: ${Object.values(fighter.evolution).join(" -> ")}. ${trainingBullets(fighter).join(" ")}`
  };
}

function physiqueFor(fighter) {
  if (fighter.masteries.includes("strength")) return "Power build: prioritize legs, back, grip, and trunk strength before aesthetics.";
  if (fighter.masteries.includes("speed")) return "Speed build: lean, elastic, sprint-ready body with mobile hips and reactive feet.";
  if (fighter.masteries.includes("endurance")) return "Endurance build: strong lungs, durable joints, and repeat output after fatigue.";
  if (fighter.masteries.includes("weapon")) return "Weapon-specialist build: mobile shoulders, strong wrists, distance control, and calm footwork.";
  return "Balanced fighter build: strength, conditioning, mobility, and technical practice kept in the same week.";
}

function detailBlock(title, text) {
  return `
    <section class="detail-block">
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(text)}</p>
    </section>
  `;
}

function renderRoutinePanel(fighter) {
  const blocks = [
    ["Power", fighter.routine.power, MASTERY_META.strength.color],
    ["Speed", fighter.routine.speed, MASTERY_META.speed.color],
    ["Skill", fighter.routine.skill, MASTERY_META.technique.color]
  ];
  return `
    <article class="routine-card" style="--accent:${fighter.accent}">
      <div class="section-label">Real-World Training Split</div>
      <div class="routine-grid">
        ${blocks.map(([label, items, color]) => `
          <section style="--accent:${color}">
            <h3>${escapeHtml(label)}</h3>
            <ul>
              ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
            </ul>
          </section>
        `).join("")}
      </div>
    </article>
  `;
}

function renderWikiCard(fighter) {
  const cache = wikiCache[fighter.id];
  const fallback = fallbackWikiFacts(fighter);
  if (!cache || cache.status === "loading") {
    return `
      <article class="wiki-card" style="--accent:${fighter.accent}">
        <h3>Fandom Wiki Sync</h3>
        <p>Scraping source fields for ${escapeHtml(fighter.name)}. Cached source facts are shown immediately.</p>
        ${renderWikiFacts(fallback)}
      </article>
    `;
  }
  if (cache.status === "error") {
    return `
      <article class="wiki-card" style="--accent:${fighter.accent}">
        <h3>Fandom Wiki Sync</h3>
        <p>Live wiki parsing is unavailable right now. Cached source facts from the roster/source map are shown below.</p>
        ${renderWikiFacts(fallback)}
      </article>
    `;
  }
  const mergedFacts = { ...fallback, ...cache.facts };
  return `
    <article class="wiki-card" style="--accent:${fighter.accent}">
      <h3>Fandom Wiki Sync</h3>
      <p>Live source fields parsed from ${escapeHtml(cache.title)}.</p>
      ${renderWikiFacts(mergedFacts)}
    </article>
  `;
}

function fallbackWikiFacts(fighter) {
  const deep = fighterDeep(fighter);
  return {
    korean: deep.ko || fighter.alias,
    tier: fighter.tier,
    affiliation: fighter.faction,
    martial_art: deep.fightingStyle || fighter.style,
    archetype: fighter.archetype,
    mode_focus: getModeFocus(fighter),
    source_page: sourceTitle(fighter)
  };
}

function sourceTitle(fighter) {
  try {
    const source = new URL(imageSourceFor(fighter));
    return decodeURIComponent(source.pathname.split("/wiki/")[1] || "Characters").replace(/_/g, " ");
  } catch {
    return "Characters";
  }
}

function renderWikiFacts(factsObject) {
  const facts = Object.entries(factsObject).filter(([, value]) => value).slice(0, 8);
  return `
    <div class="wiki-grid">
      ${facts.map(([key, value]) => `
        <div class="wiki-fact">
          <span>${escapeHtml(labelize(key))}</span>
          <strong>${escapeHtml(value)}</strong>
        </div>
      `).join("")}
    </div>
  `;
}

function renderTrain() {
  const selectedArt = selectedMartialArt();
  if (selectedArt) return renderMartialArtDetail(selectedArt);
  const selectedType = selectedFighterType();
  if (selectedType) return renderFighterTypeDetail(selectedType);
  const selected = MASTERIES_V2.find((mastery) => mastery.id === state.selectedMastery);
  if (selected) return renderMasteryDetail(selected);
  return `
    <section class="page train-page">
      <div class="page-head-row">
        <div>
          <div class="eyebrow">5 Fields · 경지</div>
          <h1 class="page-title">Mastery Training</h1>
          <p class="page-subtitle">BASIC TO EXPERT · TECHNIQUE MASTERY LEVELS</p>
        </div>
        <div class="roster-count"><strong>${FIGHTER_TYPE_TRAINING.length}</strong><span>types</span></div>
      </div>
      ${renderTrainingTabs()}

      ${state.trainTab === "fighter-types" ? `
        <div class="section-top" id="fighter-type-training">
          <div class="section-label">Fighter Type Training</div>
          <span class="count">Very Beginner → Mastery · clickable programs</span>
        </div>
        <div class="fighter-type-grid">
          ${FIGHTER_TYPE_TRAINING.map(renderFighterTypeTraining).join("")}
        </div>
      ` : ""}

      ${state.trainTab === "martial-arts" ? `
        <div class="section-top" id="martial-arts-training">
          <div class="section-label">Martial Arts Progression</div>
          <span class="count">${MARTIAL_ARTS.length} arts · Very Beginner → Technique Mastery</span>
        </div>
        <div class="martial-grid">
          ${MARTIAL_ARTS.map(renderMartialArt).join("")}
        </div>
      ` : ""}

      ${state.trainTab === "mastery-fields" ? `
        <div class="section-top" id="mastery-fields">
          <div class="section-label">Mastery Fields</div>
          <span class="count">${MASTERIES_V2.length} fields · protocols + 6-level roadmap</span>
        </div>
        <div class="mastery-list">
          ${MASTERIES_V2.map((mastery) => `
            <button type="button" class="mastery-row" data-open-mastery="${mastery.id}" style="--accent:${mastery.color}">
              <span class="mastery-orb"></span>
              <span>
                <h2>${escapeHtml(mastery.label)}</h2>
                <span class="ko-small">${escapeHtml(mastery.ko)}</span>
                <p>${escapeHtml(mastery.desc)}</p>
                <span class="tiny">3 protocols · 6 levels · ${escapeHtml(mastery.users)}</span>
                ${renderProgramBadge("mastery", mastery.id, mastery.label)}
              </span>
            </button>
          `).join("")}
        </div>
      ` : ""}

      ${state.trainTab === "library" ? renderLearningLibrary() : ""}
    </section>
  `;
}

function renderTrainingTabs() {
  const tabs = [
    ["fighter-types", "Fighter Types"],
    ["martial-arts", "Martial Arts"],
    ["mastery-fields", "Mastery Fields"],
    ["library", "Learning Library"]
  ];
  return `
    <nav class="training-tabs" aria-label="Training family filters">
      ${tabs.map(([id, label]) => `
        <button type="button" class="${state.trainTab === id ? "active" : ""}" data-train-tab="${id}">
          ${escapeHtml(label)}
        </button>
      `).join("")}
    </nav>
  `;
}

function renderLearningLibrary() {
  const rows = [
    ["Lookism Sources", RESOURCE_LIBRARY.lookism],
    ["System / Safety Sources", RESOURCE_LIBRARY.system],
    ["PDF Research Translation Pack", [
      ["Copy/UI safe progression", youtubeSearchUrl("visual reaction drills martial arts copy technique beginner")],
      ["Iron Boxing progression", youtubeSearchUrl("boxing slip line counter punching beginner iron body conditioning safe")],
      ["Kyokushin conditioning safe", youtubeSearchUrl("kyokushin karate beginner conditioning makiwara pad safety")],
      ["CQC close range basics", youtubeSearchUrl("jeet kune do cqc close range entry drill beginner safe")]
    ]],
    ["YouTube Tutorial Searches", [
      ["Beginner boxing footwork", youtubeSearchUrl("beginner boxing footwork tutorial guard jab cross")],
      ["Kyokushin basics", youtubeSearchUrl("kyokushin karate beginner basics stance low kick")],
      ["Muay Thai beginner", youtubeSearchUrl("muay thai beginner teep low kick clinch basics")],
      ["Grappling breakfalls", youtubeSearchUrl("judo wrestling breakfall beginner tutorial")],
      ["Mobility warm-up", youtubeSearchUrl("full body mobility warm up beginner workout")]
    ]]
  ];
  return `
    <div class="section-top">
      <div class="section-label">Learning Library</div>
      <span class="count">Docs + tutorial searches</span>
    </div>
    <div class="learning-grid">
      ${rows.map(([title, links]) => `
        <article class="source-card" style="--accent:#2368ff">
          <h3>${escapeHtml(title)}</h3>
          <p>Curated references and search links used by the training programs.</p>
          <div class="source-links">${links.map(([label, href]) => `<a href="${href}" target="_blank" rel="noreferrer">${escapeHtml(label)}</a>`).join("")}</div>
        </article>
      `).join("")}
    </div>
  `;
}

function renderFighterTypeTraining(type) {
  const id = fighterTypeId(type);
  return `
    <article class="fighter-type-card" data-open-fighter-type="${id}" role="button" tabindex="0" style="--accent:${type.color}">
      <div class="fighter-type-head">
        <span>
          <span class="tiny">${escapeHtml(type.users)}</span>
          <h2>${escapeHtml(type.type)}</h2>
          <span class="ko-small">${escapeHtml(type.ko)}</span>
        </span>
        <span class="mastery-orb" aria-hidden="true"></span>
      </div>
      ${renderProgramBadge("fighter", id, type.type)}
      <p>${escapeHtml(type.base)}</p>
      <div class="progression-grid">
        ${["beginner", "intermediate", "advanced", "mastery"].map((level) => `
          <div>
            <span>${escapeHtml(labelize(level))}</span>
            <p>${escapeHtml(type[level])}</p>
          </div>
        `).join("")}
      </div>
      <div class="source-links"><span class="open-program">Open fighter-type program</span></div>
    </article>
  `;
}

function renderMartialArt(art) {
  const id = artId(art);
  return `
    <article class="martial-card" data-open-art="${id}" role="button" tabindex="0" style="--accent:${art.color}">
      <div class="martial-head">
        <span>
          <span class="tiny">${escapeHtml(art.path)}</span>
          <h2>${escapeHtml(art.art)}</h2>
          <span class="ko-small">${escapeHtml(art.ko)}</span>
        </span>
        <span class="mastery-orb" aria-hidden="true"></span>
      </div>
      ${renderProgramBadge("art", id, art.art)}
      <p>${escapeHtml(art.note)}</p>
      <div class="progression-grid">
        ${["beginner", "intermediate", "advanced", "mastery"].map((level) => `
          <div>
            <span>${escapeHtml(labelize(level))}</span>
            <p>${escapeHtml(art[level])}</p>
          </div>
        `).join("")}
      </div>
      <div class="source-links">
        <span class="open-program">Open technique program</span>
        ${art.sources.map(([label, href]) => `<a href="${href}" target="_blank" rel="noreferrer">${escapeHtml(label)}</a>`).join("")}
      </div>
    </article>
  `;
}

function renderMartialArtDetail(art) {
  const program = techniqueProgramFor(art);
  const id = artId(art);
  return `
    <section class="page martial-detail-page" style="--accent:${art.color}">
      <button type="button" class="back-btn" data-back-train>← Training</button>
      <header class="mastery-detail-hero technique-hero">
        <div>
          <div class="eyebrow">Technique Program · ${escapeHtml(art.path)}</div>
          <h1>${escapeHtml(art.art)}</h1>
          <span class="ko-small">${escapeHtml(art.ko)} · ${escapeHtml(art.users)}</span>
          <p>${escapeHtml(art.note)}</p>
          ${renderProgramBadge("art", id, art.art)}
        </div>
        <div class="technique-xp-card">
          <span>Technique XP</span>
          <strong>${TECHNIQUE_LEVELS.reduce((sum, level) => sum + level.xp, 0)}</strong>
          <small>full path clear</small>
        </div>
      </header>

      ${program.research ? `
        <article class="system-panel quote-card" style="--accent:${art.color}">
          <div class="section-label">PDF Research Translation</div>
          <p>${escapeHtml(program.research)}</p>
        </article>
      ` : ""}

      <div class="technique-layout">
        <article class="system-panel technique-core" style="--accent:${art.color}">
          <div class="section-label">Core Technique Tree</div>
          <div class="core-tech-list">
            ${program.core.map((technique, index) => `<span><b>${index + 1}</b>${escapeHtml(technique)}</span>`).join("")}
          </div>
        </article>
        <article class="system-panel technique-notes" style="--accent:${art.color}">
          <div class="section-label">Precision Rules</div>
          <ul>${program.precision.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
          <div class="section-label">Common Mistakes</div>
          <ul>${program.mistakes.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        </article>
      </div>

      <div class="section-top">
        <div class="section-label">Beginner → Technique Mastery</div>
        <span class="count">Click-safe schedule · progressive XP</span>
      </div>
      <div class="technique-timeline">
        ${TECHNIQUE_LEVELS.map((level) => renderTechniqueLevel(art, program, level)).join("")}
      </div>

      <article class="system-panel penalty-card" style="--accent:#f0a42f">
        <div class="section-label">Safety Note</div>
        <p>${escapeHtml(program.safety)}</p>
        ${renderResourceChips(art.art, "Safety", [...art.sources, ...RESOURCE_LIBRARY.safety])}
      </article>
    </section>
  `;
}

function renderTechniqueLevel(art, program, level) {
  const id = artId(art);
  const progress = programProgress("art", id);
  const complete = progress.completedLevelIds.includes(level.id);
  const levelText = {
    "very-beginner": art.beginner,
    beginner: art.beginner,
    intermediate: art.intermediate,
    advanced: art.advanced,
    expert: `${art.advanced} Add film review, partner timing, and pressure-tested exits.`,
    "technique-mastery": art.mastery
  }[level.id];
  const detail = programLevelDetail(art.art, program, level, { focus: levelText, precision: levelText });
  return `
    <article class="technique-stage" style="--accent:${art.color}">
      <div class="technique-stage-head">
        <span>${escapeHtml(level.weeks)}</span>
        <strong>${escapeHtml(level.label)}</strong>
        <em>${complete ? "Cleared" : `+${level.xp} XP`}</em>
      </div>
      <div class="technique-stage-body">
        <section>
          <h3>Focus Technique</h3>
          <p>${escapeHtml(detail.focus)}</p>
        </section>
        <section>
          <h3>Weekly Schedule</h3>
          <p>${escapeHtml(detail.schedule)}</p>
        </section>
        <section>
          <h3>Drill Block</h3>
          <p>${escapeHtml(detail.drill)}</p>
        </section>
        <section>
          <h3>Precision Cue</h3>
          <p>${escapeHtml(detail.precision)}</p>
        </section>
        <section>
          <h3>Common Mistake</h3>
          <p>${escapeHtml(detail.mistake)}</p>
        </section>
        <section>
          <h3>Unlock Test</h3>
          <p>${escapeHtml(detail.unlock)}</p>
        </section>
        <section>
          <h3>Recovery / Safety</h3>
          <p>${escapeHtml(detail.recovery)}</p>
        </section>
      </div>
      ${renderResourceChips(art.art, level.label, art.sources)}
      ${renderProgramCompleteAction("art", id, level, art.art, art.color, "technique", complete)}
    </article>
  `;
}

function renderMasteryDetail(mastery) {
  const program = MASTERY_PROGRAMS[mastery.id];
  const progress = programProgress("mastery", mastery.id);
  return `
    <section class="page" style="--accent:${mastery.color}">
      <button type="button" class="back-btn" data-back-train>← Training</button>
      <header class="mastery-detail-hero">
        <div class="eyebrow">Mastery Path</div>
        <h1>${escapeHtml(mastery.label)}</h1>
        <span class="ko-small">${escapeHtml(mastery.ko)}</span>
        <p class="page-subtitle">${escapeHtml(mastery.users)}</p>
        ${renderProgramBadge("mastery", mastery.id, mastery.label)}
      </header>
      <article class="system-panel quote-card">
        <div class="section-label">Master's Quote</div>
        <p>${escapeHtml(mastery.quote)}</p>
      </article>
      ${detailBlock("Mastery Philosophy", mastery.philosophy)}
      <article class="system-panel" style="--accent:${mastery.color}">
        <div class="section-label">How to achieve this mastery</div>
        <p>${escapeHtml(mastery.achieve)}</p>
      </article>
      <div class="technique-layout">
        <article class="system-panel technique-core" style="--accent:${mastery.color}">
          <div class="section-label">Mastery Skill Tree</div>
          <div class="core-tech-list">
            ${program.core.map((item, index) => `<span><b>${index + 1}</b>${escapeHtml(item)}</span>`).join("")}
          </div>
        </article>
        <article class="system-panel technique-notes" style="--accent:${mastery.color}">
          <div class="section-label">Precision Rules</div>
          <ul>${program.precision.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
          <div class="section-label">Common Mistakes</div>
          <ul>${program.mistakes.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        </article>
      </div>
      <div class="section-top"><div class="section-label">Very Beginner → Mastery Level</div><span class="count">XP + resources every level</span></div>
      <div class="technique-timeline">
        ${TECHNIQUE_LEVELS.map((level) => renderFamilyProgramLevel("mastery", mastery.id, mastery.label, mastery.color, program, level, program.sourceLinks, MASTERY_META[mastery.id] ? mastery.id === "strength" ? "power" : mastery.id : "technique", progress.completedLevelIds.includes(level.id))).join("")}
      </div>
      <div class="section-top"><div class="section-label">Training Protocols</div></div>
      <div class="protocol-list">
        ${mastery.protocols.map((protocol, index) => renderProtocol(protocol, index + 1, mastery.color)).join("")}
      </div>
      <article class="system-panel penalty-card" style="--accent:#f0a42f">
        <div class="section-label">Safety Note</div>
        <p>${escapeHtml(program.safety)}</p>
        ${renderResourceChips(`${mastery.label} mastery`, "Safety", program.sourceLinks)}
      </article>
    </section>
  `;
}

function renderFighterTypeDetail(type) {
  const program = FIGHTER_TYPE_PROGRAMS[fighterTypeId(type)];
  const id = fighterTypeId(type);
  const progress = programProgress("fighter", id);
  return `
    <section class="page fighter-type-detail-page" style="--accent:${type.color}">
      <button type="button" class="back-btn" data-back-train>← Training</button>
      <header class="mastery-detail-hero technique-hero">
        <div>
          <div class="eyebrow">Fighter Type Program · ${escapeHtml(type.users)}</div>
          <h1>${escapeHtml(type.type)}</h1>
          <span class="ko-small">${escapeHtml(type.ko)}</span>
          <p>${escapeHtml(type.base)}</p>
          ${renderProgramBadge("fighter", id, type.type)}
        </div>
        <div class="technique-xp-card">
          <span>Route XP</span>
          <strong>${TECHNIQUE_LEVELS.reduce((sum, level) => sum + level.xp, 0)}</strong>
          <small>full clear</small>
        </div>
      </header>
      ${program.research ? `
        <article class="system-panel quote-card" style="--accent:${type.color}">
          <div class="section-label">PDF Research Translation</div>
          <p>${escapeHtml(program.research)}</p>
        </article>
      ` : ""}
      <div class="technique-layout">
        <article class="system-panel technique-core" style="--accent:${type.color}">
          <div class="section-label">Archetype Skill Tree</div>
          <div class="core-tech-list">
            ${program.core.map((item, index) => `<span><b>${index + 1}</b>${escapeHtml(item)}</span>`).join("")}
          </div>
        </article>
        <article class="system-panel technique-notes" style="--accent:${type.color}">
          <div class="section-label">Physique Goal</div>
          <p>${escapeHtml(program.physique)}</p>
          <div class="section-label">Linked Martial Arts</div>
          <div class="chip-list">${program.linkedArts.map((art) => `<span class="chip">${escapeHtml(art)}</span>`).join("")}</div>
        </article>
      </div>
      <div class="section-top"><div class="section-label">Very Beginner → Mastery Level</div><span class="count">schedule · unlock tests · resources</span></div>
      <div class="technique-timeline">
        ${TECHNIQUE_LEVELS.map((level) => renderFamilyProgramLevel("fighter", id, type.type, type.color, program, level, program.sourceLinks, "sense", progress.completedLevelIds.includes(level.id))).join("")}
      </div>
      <article class="system-panel penalty-card" style="--accent:#f0a42f">
        <div class="section-label">Safety Note</div>
        <p>${escapeHtml(program.safety)}</p>
        ${renderResourceChips(type.type, "Safety", program.sourceLinks)}
      </article>
    </section>
  `;
}

function renderFamilyProgramLevel(type, id, context, color, program, level, sources, stat = "technique", complete = false) {
  const detail = programLevelDetail(context, program, level);
  return `
    <article class="technique-stage" style="--accent:${color}">
      <div class="technique-stage-head">
        <span>${escapeHtml(level.weeks)}</span>
        <strong>${escapeHtml(level.label)}</strong>
        <em>${complete ? "Cleared" : `+${level.xp} XP`}</em>
      </div>
      <div class="technique-stage-body">
        <section>
          <h3>Focus</h3>
          <p>${escapeHtml(detail.focus)}</p>
        </section>
        <section>
          <h3>Weekly Schedule</h3>
          <p>${escapeHtml(detail.schedule)}</p>
        </section>
        <section>
          <h3>Drill Block</h3>
          <p>${escapeHtml(detail.drill)}</p>
        </section>
        <section>
          <h3>Precision Cue</h3>
          <p>${escapeHtml(detail.precision)}</p>
        </section>
        <section>
          <h3>Unlock Test</h3>
          <p>${escapeHtml(detail.unlock)}</p>
        </section>
        <section>
          <h3>Common Mistake</h3>
          <p>${escapeHtml(detail.mistake)}</p>
        </section>
        <section>
          <h3>Recovery / Safety</h3>
          <p>${escapeHtml(detail.recovery)}</p>
        </section>
      </div>
      ${renderResourceChips(context, level.label, sources)}
      ${renderProgramCompleteAction(type, id, level, context, color, stat, complete)}
    </article>
  `;
}

function renderProgramCompleteAction(type, id, level, title, color, stat, complete) {
  return `
    <div class="program-action-row" style="--accent:${color}">
      <span>${complete ? "Level stored. Use undo if this was tapped by mistake." : "Clear this level after completing the weekly schedule and unlock test."}</span>
      <button type="button" class="inline-action ${complete ? "undo-action" : ""}" data-toggle-program-level="${escapeHtml(type)}" data-program-id="${escapeHtml(id)}" data-level-id="${escapeHtml(level.id)}" data-program-title="${escapeHtml(title)}" data-program-color="${escapeHtml(color)}" data-program-stat="${escapeHtml(stat)}">
        ${complete ? `Undo -${level.xp} XP` : `Complete +${level.xp} XP`}
      </button>
    </div>
  `;
}

function renderProtocol(protocol, index, color) {
  return `
    <article class="protocol-card" style="--accent:${color}">
      <div class="protocol-head">
        <div>
          <h3>${escapeHtml(protocol.name)}</h3>
          <span class="tiny">${escapeHtml(protocol.time)} · ${escapeHtml(protocol.intensity)}</span>
        </div>
        <span class="tiny">Protocol ${index}</span>
      </div>
      <ol>
        ${protocol.sets.map((set, setIndex) => `<li><b>${setIndex + 1}</b><span>${escapeHtml(set)}</span></li>`).join("")}
      </ol>
      <p class="note"><strong>Coach's note:</strong> ${escapeHtml(protocol.note)}</p>
    </article>
  `;
}

function renderPath() {
  return `
    <section class="page">
      <div class="eyebrow">Yamazaki Inheritance</div>
      <h1 class="page-title">UI · Path System</h1>
      <p class="page-subtitle">무의식 · 자신만의 길 · 경지</p>
      <article class="system-panel quote-card" style="--accent:#8d4dff">
        <div class="section-label">What is Ultra Instinct?</div>
        <p>In Lookism, UI is a fictional unconscious combat state. In real training, this app treats it as automatic response: calm breathing, drilled reactions, and technique that survives fatigue.</p>
      </article>
      <div class="section-top"><div class="section-label">5 stages — from civilian to pinnacle</div></div>
      <div class="stage-list">
        ${UI_STAGES.map(renderStage).join("")}
      </div>
      <div class="section-top"><div class="section-label">Find Your Path (자신만의 길)</div></div>
      <article class="source-card" style="--accent:#f4f4f4">
        <h3>What is a path?</h3>
        <p>Mastery perfects what already exists. Path training asks what only you can build from your body, history, best attribute, and reason to fight.</p>
      </article>
      <article class="source-card" style="--accent:#2368ff">
        <h3>Path Builder</h3>
        <p>Beginner: choose one base art. Intermediate: choose one signature attribute. Advanced: combine it into a repeatable chain. Mastery: test it under constraints until it becomes your own system.</p>
      </article>
    </section>
  `;
}

function renderStage(stage) {
  const open = state.expandedStage === stage.stage;
  return `
    <button type="button" class="stage-row ${open ? "open" : ""}" data-stage="${stage.stage}" style="--accent:${stage.color}">
      <span class="stage-head">
        <span class="stage-num">${stage.stage}</span>
        <span>
          <h3>${escapeHtml(stage.name)}</h3>
          <span class="ko-small">${escapeHtml(stage.ko)}</span>
        </span>
        <span>${open ? "▲" : "▼"}</span>
      </span>
      <span class="stage-body">
        <span>${escapeHtml(stage.desc)}</span>
        ${detailBlock("How to reach this state", stage.reach)}
        ${detailBlock("Training focus", stage.focus)}
        <span class="chip-list">${stage.characters.map((character) => `<span class="chip">${escapeHtml(character)}</span>`).join("")}</span>
      </span>
    </button>
  `;
}

function renderProfile() {
  const progress = currentLevelProgress();
  const rank = rankFromLevel(progress.level);
  const analysis = state.profileAnalysis;
  return `
    <section class="page profile-account-page" style="--accent:${analysis?.color || rank.color}">
      <div class="page-head-row">
        <div>
          <div class="eyebrow">PROFILE · 계정 / 저장 데이터</div>
          <h1 class="page-title">My System File</h1>
          <p class="page-subtitle">account status · cloud save · latest diagnosis · data tools</p>
        </div>
        <div class="roster-count"><strong>Lv ${progress.level}</strong><span>${escapeHtml(rank.label)}</span></div>
      </div>

      <div class="profile-account-layout">
        ${renderCloudPanel()}
        <article class="system-panel rank-panel account-rank-card" style="--accent:${rank.color}">
          <div class="meta-label">System Rank</div>
          <h2 class="rank-title">${escapeHtml(rank.label)}</h2>
          <span class="ko-small">Lv ${progress.level} · ${state.totalXp.toLocaleString()} XP total</span>
          <div class="progress" style="--accent:${rank.color};--value:${progress.percent}%"><span></span></div>
          <div class="profile-actions">
            <button type="button" class="inline-action" data-view="diagnosis">${analysis ? "Run New Diagnosis" : "Start Diagnosis"}</button>
            <button type="button" class="inline-action" data-view="reports">Open Reports</button>
          </div>
        </article>
        ${analysis ? renderDiagnosisResult(analysis) : renderDiagnosisEmpty()}
        ${renderAiConfigPanel()}
      </div>

      ${analysis ? renderJourneyRoadmap(analysis) : ""}
      ${state.aiCoachResult ? `
        <article class="system-panel ai-result" style="--accent:#8d4dff">
          <div class="section-top compact">
            <div>
              <div class="section-label">AI Coach Output</div>
              <p>Structured one-shot coach summary. Use the floating System AI beacon for a full conversation.</p>
            </div>
            <button type="button" class="inline-action" data-chat-toggle>Open System AI</button>
          </div>
          ${renderCoachCards(state.aiCoachResult)}
        </article>
      ` : ""}
    </section>
  `;
}

function renderProfileFieldGroup(title, group) {
  const fields = PROFILE_FIELDS.filter((field) => field.group === group);
  return `
    <div class="section-top compact"><div class="section-label">${escapeHtml(title)}</div></div>
    <div class="field-grid diagnosis-field-grid">
      ${fields.map(renderProfileField).join("")}
    </div>
  `;
}

function renderProfileField(field) {
  const value = state.profile[field.key] ?? "";
  const invalid = (state.profileValidation.errors || []).some((issue) => issue.startsWith(field.label));
  if (field.type === "select") {
    return `
      <label class="field">
        <span>${escapeHtml(field.label)}</span>
        <select data-profile="${field.key}">
          ${field.options.map(([optionValue, label]) => `<option value="${escapeHtml(optionValue)}" ${String(value) === String(optionValue) ? "selected" : ""}>${escapeHtml(label)}</option>`).join("")}
        </select>
      </label>
    `;
  }
  return `
    <label class="field ${invalid ? "invalid" : ""}">
      <span>${escapeHtml(field.label)}</span>
      <input data-profile="${field.key}" value="${escapeHtml(value)}" placeholder="${escapeHtml(field.placeholder || "—")}" inputmode="${field.type === "number" ? "decimal" : "text"}" ${field.type === "number" ? `data-numeric-field="${field.key}"` : ""} />
    </label>
  `;
}

function renderProfileValidation() {
  const { errors = [], warnings = [] } = state.profileValidation || {};
  if (!errors.length && !warnings.length) {
    return `<p class="input-hint">Numbers are validated before scoring, so impossible values will not silently distort your diagnosis.</p>`;
  }
  return `
    <div class="validation-panel ${errors.length ? "has-errors" : ""}">
      ${errors.map((issue) => `<p>${escapeHtml(issue)}</p>`).join("")}
      ${warnings.map((issue) => `<p class="warning">${escapeHtml(issue)}</p>`).join("")}
    </div>
  `;
}

function renderDiagnosisEmpty() {
  return `
    <article class="system-panel diagnosis-card" style="--accent:#2368ff">
      <div class="section-label">Offline AI-Style Analysis</div>
      <h2>Awaiting Stats</h2>
      <p>Enter your body details, training context, and benchmark records. The offline system will classify your current category, blockers, next rank, and best training family.</p>
    </article>
  `;
}

function renderDiagnosisResult(analysis) {
  return `
    <article class="system-panel diagnosis-card" style="--accent:${analysis.color}">
      <div class="section-label">Current Category · Diagnosis Score <span class="help-tip" title="Diagnosis Score is calculated from your profile inputs. It is not the same as dashboard System Stats, which grow from quests.">?</span></div>
      <h2>${escapeHtml(analysis.currentCategory)}</h2>
      <span class="ko-small">${escapeHtml(analysis.ko)} · Diagnosis Score ${analysis.overall}/100</span>
      <p>${escapeHtml(analysis.summary)}</p>
      <div class="score-grid">
        ${Object.entries(analysis.scores).map(([key, value]) => `
          <div class="stat-meter mini" style="--accent:${MASTERY_META[key]?.color || "#2368ff"};--value:${value}%">
            <div><span>${escapeHtml(labelize(key))}</span></div><strong>${value}</strong><div class="progress"><span></span></div>
          </div>
        `).join("")}
      </div>
    </article>
  `;
}

function renderJourneyRoadmap(analysis) {
  return `
    <section class="system-panel journey-roadmap" style="--accent:${analysis.color}">
      <div class="section-top compact">
        <div>
          <div class="section-label">Higher Category Journey</div>
          <h2>${escapeHtml(analysis.currentCategory)} → ${escapeHtml(analysis.nextCategory)}</h2>
          <p>${escapeHtml(analysis.journey.summary)}</p>
        </div>
        <span class="count">${escapeHtml(analysis.journey.xpTarget)}</span>
      </div>
      <div class="journey-grid">
        <div><span>Mastery</span><strong>${escapeHtml(analysis.journey.recommendedMastery)}</strong></div>
        <div><span>Fighter Type</span><strong>${escapeHtml(analysis.journey.recommendedFighterType)}</strong></div>
        <div><span>Martial Art</span><strong>${escapeHtml(analysis.journey.recommendedArt)}</strong></div>
        <div><span>Boss Quest</span><strong>${escapeHtml(analysis.journey.bossQuest)}</strong></div>
      </div>
      <div class="section-label">Blockers</div>
      <div class="chip-list">${analysis.blockers.map((blocker) => `<span class="chip">${escapeHtml(blocker)}</span>`).join("")}</div>
      <div class="section-top compact"><div class="section-label">Suggested Week</div></div>
      <div class="schedule-grid compact-schedule">
        ${analysis.journey.weeklySchedule.map(renderScheduleDay).join("")}
      </div>
    </section>
  `;
}

function renderAiConfigPanel() {
  return `
    <article class="system-panel ai-config" style="--accent:#8d4dff">
      <div class="section-label">Hybrid AI Coach</div>
      <p class="ai-warning">Optional. Browser API keys can be extracted; use a proxy endpoint for serious use. Local default: http://127.0.0.1:8787/coach. Deployed default: /api/coach. Offline diagnosis remains the default.</p>
      <label class="field">
        <span>Gemini API Key</span>
        <input data-ai-config="apiKey" value="${escapeHtml(state.aiConfig.apiKey)}" placeholder="optional · not hardcoded" type="password" />
      </label>
      <label class="field">
        <span>Proxy Endpoint</span>
        <input data-ai-config="proxyEndpoint" value="${escapeHtml(state.aiConfig.proxyEndpoint)}" placeholder="${escapeHtml(defaultAiProxyEndpoint())}" />
      </label>
      <div class="source-links">
        <a href="${GEMINI_TEXT_URL}" target="_blank" rel="noreferrer">Gemini docs</a>
        <a href="${GEMINI_API_KEY_URL}" target="_blank" rel="noreferrer">API key safety</a>
        <a href="./LOOKISM_AI_SETUP.md" target="_blank" rel="noreferrer">Local proxy setup</a>
      </div>
      <div class="profile-actions two">
        <button type="button" class="analysis-button compact secondary" data-ai-coach>Run AI Coach</button>
        <button type="button" class="analysis-button compact ghost" data-chat-toggle>Open Chat</button>
      </div>
      ${state.aiCoachStatus ? `<p class="tiny">${escapeHtml(state.aiCoachStatus)}</p>` : ""}
    </article>
  `;
}

function renderTags(tags) {
  return `<span class="tag-row">${tags.map((tag) => `<span class="tag" style="--tag-color:${tagColor(tag)}">${escapeHtml(labelize(tag))}</span>`).join("")}</span>`;
}

function tagColor(tag) {
  return MASTERY_META[tag]?.color || (tag === "copy" ? "#2368ff" : "#f4f4f4");
}

function getModeFocus(fighter) {
  if (fighter.masteries.includes("ui")) return "Ultra Instinct / automatic response";
  if (fighter.masteries.includes("path")) return "Personal path";
  if (fighter.masteries.includes("copy")) return "Copy technique";
  if (fighter.masteries.includes("weapon")) return "Weapon threat";
  if (fighter.masteries.includes("conviction")) return "Heat / conviction";
  return `${labelize(fighter.masteries[0] || "crew")} mastery`;
}

function trainingBullets(fighter) {
  const mastery = fighter.masteries.map((key) => MASTERY_META[key]?.label || labelize(key)).filter(Boolean).slice(0, 3).join(" + ");
  return [
    `${mastery || "Crew"} emphasis: keep the style identity visible in every conditioning block.`,
    `Power marker: ${fighter.routine.power[0].toLowerCase()}.`,
    `Speed marker: ${fighter.routine.speed[0].toLowerCase()}.`,
    `Skill marker: ${fighter.routine.skill[0].toLowerCase()}.`
  ];
}

function queueWikiLoad() {
  if (state.view !== "fighter") return;
  const fighter = selectedFighter();
  if (wikiCache[fighter.id]) return;
  wikiCache[fighter.id] = { status: "loading" };
  loadWikiFacts(fighter);
}

async function loadWikiFacts(fighter) {
  try {
    const source = imageSourceFor(fighter);
    const parsed = new URL(source);
    const title = decodeURIComponent(parsed.pathname.split("/wiki/")[1] || "").replace(/\/.*$/, "");
    if (!title) throw new Error("No wiki title");
    const api = `${parsed.origin}/api.php?action=query&prop=revisions&rvprop=content&rvslots=main&redirects=1&titles=${encodeURIComponent(title)}&format=json&origin=*`;
    const data = await fetch(api).then((response) => response.json());
    const page = Object.values(data.query.pages)[0];
    const text = page?.revisions?.[0]?.slots?.main?.["*"] || "";
    wikiCache[fighter.id] = {
      status: "loaded",
      title: page?.title || title.replace(/_/g, " "),
      facts: parseWikiFacts(text)
    };
  } catch (error) {
    wikiCache[fighter.id] = { status: "error", error: error.message };
  }
  if (state.view === "fighter" && selectedFighter().id === fighter.id) render();
}

function parseWikiFacts(wikitext) {
  const fields = {};
  const wanted = ["korean", "english", "nickname", "age", "height", "weight", "occupation", "affiliations", "martial_art", "debut"];
  for (const key of wanted) {
    const match = wikitext.match(new RegExp(`^\\\\|\\\\s*${key}\\\\s*=\\\\s*([^\\\\n]+)`, "im"));
    if (match) fields[key] = cleanWikiValue(match[1]);
  }
  return fields;
}

function cleanWikiValue(value) {
  return String(value)
    .replace(/<ref[\s\S]*?<\/ref>/gi, "")
    .replace(/<ref[^>]*\/>/gi, "")
    .replace(/<br\s*\/?>/gi, ", ")
    .replace(/<[^>]+>/g, "")
    .replace(/\[\[[^\]|]+\|([^\]]+)\]\]/g, "$1")
    .replace(/\[\[([^\]]+)\]\]/g, "$1")
    .replace(/\{\{[\s\S]*?\}\}/g, "")
    .replace(/\[[^\s\]]+\s+([^\]]+)\]/g, "$1")
    .replace(/&nbsp;/g, " ")
    .replace(/'''/g, "")
    .replace(/\*/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 150);
}

function formatAiText(value) {
  const text = String(value || "").trim();
  if (!text) return "";
  return text
    .split(/\n{2,}/)
    .map((paragraph) => `<p>${escapeHtml(paragraph).replace(/\n/g, "<br>")}</p>`)
    .join("");
}

function renderCoachCards(text, cards = []) {
  const normalized = normalizeCoachCards(cards).length ? normalizeCoachCards(cards) : coachCardsFromText(text);
  if (!normalized.length) return `<div class="ai-output-text">${formatAiText(text)}</div>`;
  return `
    <div class="coach-card-grid">
      ${normalized.map((card) => `
        <article class="coach-card">
          <span>${escapeHtml(card.title)}</span>
          <p>${escapeHtml(card.body)}</p>
          ${card.action ? `<button type="button" data-chat-action="${escapeHtml(card.action)}">${escapeHtml(labelize(card.action))}</button>` : ""}
        </article>
      `).join("")}
    </div>
  `;
}

function numericProfile(key) {
  return Number(state.profile[key]) || 0;
}

function validateProfileInput() {
  const errors = [];
  const warnings = [];
  for (const field of PROFILE_FIELDS) {
    if (field.type !== "number") continue;
    const raw = String(state.profile[field.key] ?? "").trim();
    if (!raw) {
      if (PROFILE_REQUIRED_FOR_DIAGNOSIS.includes(field.key)) warnings.push(`${field.label} is missing, so category accuracy drops.`);
      continue;
    }
    const value = Number(raw);
    const limits = PROFILE_NUMERIC_LIMITS[field.key];
    if (!Number.isFinite(value)) {
      errors.push(`${field.label} must be a number.`);
      continue;
    }
    if (limits && (value < limits[0] || value > limits[1])) {
      errors.push(`${field.label} must stay between ${limits[0]} and ${limits[1]}.`);
    }
  }
  const injuryText = String(state.profile.injuries || "");
  if (injuryText.length > 160) warnings.push("Injury / Limits is long. Keep it short so the coach reads it clearly.");
  return { errors, warnings };
}

function scoreFromRange(value, low, high) {
  if (!value) return 20;
  return clamp(Math.round(((value - low) / Math.max(1, high - low)) * 100), 5, 100);
}

function inverseScore(value, slow, fast) {
  if (!value) return 25;
  return clamp(Math.round(((slow - value) / Math.max(1, slow - fast)) * 100), 5, 100);
}

function analyzeProfile() {
  const validation = validateProfileInput();
  state.profileValidation = validation;
  if (validation.errors.length) {
    state.profileResult = "Fix highlighted profile values before diagnosis.";
    saveProfileState();
    return null;
  }
  const p = state.profile;
  const heightM = numericProfile("height") / 100;
  const weight = numericProfile("weight");
  const bmi = heightM && weight ? Number((weight / (heightM * heightM)).toFixed(1)) : 0;
  const bodyFat = numericProfile("bodyFat");
  const lifts = ["bench", "squat", "deadlift", "press"].map((key) => numericProfile(key));
  const strengthTotal = lifts.reduce((sum, value) => sum + value, 0);
  const strengthRatio = weight ? strengthTotal / weight : 0;
  const pullups = numericProfile("pullups");
  const pushups = numericProfile("pushups");
  const plank = numericProfile("plank");
  const mile = numericProfile("mile");
  const fiveK = numericProfile("fiveK");
  const days = clamp(numericProfile("daysPerWeek") || 3, 1, 7);
  const session = clamp(numericProfile("sessionLength") || 40, 15, 120);
  const trainingAgeScore = { none: 12, beginner: 32, intermediate: 62, advanced: 82 }[p.trainingAge] || 20;
  const martialScore = { none: 8, beginner: 30, intermediate: 60, advanced: 84 }[p.martialExperience] || 12;
  const cardioScore = Math.max(
    inverseScore(mile, ANALYSIS_RULES.cardio.mileLow, ANALYSIS_RULES.cardio.mileFast),
    inverseScore(fiveK, ANALYSIS_RULES.cardio.fiveKLow, ANALYSIS_RULES.cardio.fiveKFast)
  );
  const scores = {
    power: clamp(Math.round(scoreFromRange(strengthRatio, ANALYSIS_RULES.strengthRatio.low, ANALYSIS_RULES.strengthRatio.king) * 0.62 + scoreFromRange(pushups, 5, 60) * 0.24 + scoreFromRange(pullups, 0, 18) * 0.14), 5, 100),
    speed: clamp(Math.round(cardioScore * 0.7 + scoreFromRange(days, 1, 6) * 0.15 + scoreFromRange(session, 20, 75) * 0.15), 5, 100),
    endurance: clamp(Math.round(cardioScore * 0.45 + scoreFromRange(plank, 30, 210) * 0.3 + scoreFromRange(days, 1, 6) * 0.25), 5, 100),
    technique: clamp(Math.round(martialScore * 0.62 + trainingAgeScore * 0.28 + scoreFromRange(days, 1, 6) * 0.1), 5, 100),
    sense: clamp(Math.round(martialScore * 0.38 + cardioScore * 0.22 + scoreFromRange(pullups, 0, 15) * 0.2 + trainingAgeScore * 0.2), 5, 100),
    conviction: clamp(Math.round(scoreFromRange(days, 1, 6) * 0.35 + scoreFromRange(session, 20, 75) * 0.25 + trainingAgeScore * 0.2 + scoreFromRange(pushups, 5, 60) * 0.2), 5, 100)
  };
  const overall = Math.round(Object.values(scores).reduce((sum, value) => sum + value, 0) / Object.keys(scores).length);
  const blockers = buildBlockers({ bmi, bodyFat, strengthRatio, pullups, pushups, plank, mile, fiveK, days, session, scores });
  const category = chooseUserCategory({ bmi, bodyFat, strengthRatio, overall, scores, goal: p.goal, martialExperience: p.martialExperience });
  const journey = buildJourney(category, scores, blockers, { days, session, goal: p.goal, injuries: p.injuries, equipment: p.equipment });
  state.profileAnalysis = {
    ...category,
    currentCategory: category.label,
    bmi,
    strengthRatio: Number(strengthRatio.toFixed(2)),
    scores,
    overall,
    blockers,
    summary: `Offline diagnosis places you in ${category.label}. The next climb is ${category.next}, with ${journey.recommendedFighterType}, ${journey.recommendedMastery}, and ${journey.recommendedArt} as your main training route.`,
    nextCategory: category.next,
    journey
  };
  state.profileResult = state.profileAnalysis.summary;
  setUserFlow({ diagnosisCompleted: true, awakeningAccepted: true, onboardingComplete: true, onboardingStep: "system", diagnosisStep: "result", lastVisitedView: "diagnosis" });
  saveProfileState();
  recordDiagnosisReport();
  queueCloudSync();
  return state.profileAnalysis;
}

function buildBlockers(input) {
  const blockers = [];
  if (!input.bmi) blockers.push("Missing height/weight makes body-category accuracy lower");
  if (input.bmi >= ANALYSIS_RULES.bmi.reset) blockers.push("Bodyweight reset: use low-impact conditioning and joint-friendly strength");
  if (input.bmi && input.bmi < ANALYSIS_RULES.bmi.underweight) blockers.push("Mass reset: prioritize food routine and strength basics");
  if (input.bodyFat >= ANALYSIS_RULES.bodyFat.high) blockers.push("Body-fat reset: keep weekly cardio and nutrition consistency visible");
  if (input.strengthRatio && input.strengthRatio < ANALYSIS_RULES.strengthRatio.fighter) blockers.push("Power base below fighter target");
  if (input.pullups < ANALYSIS_RULES.bodyweight.pullupFighter) blockers.push("Pulling strength needs a progression block");
  if (input.pushups < ANALYSIS_RULES.bodyweight.pushupFighter) blockers.push("Upper-body repeat output needs work");
  if (input.plank && input.plank < ANALYSIS_RULES.bodyweight.plankFighter) blockers.push("Trunk endurance limits hard rounds");
  if ((input.mile && input.mile > ANALYSIS_RULES.cardio.mileFighter) || (input.fiveK && input.fiveK > ANALYSIS_RULES.cardio.fiveKFighter)) blockers.push("Cardio engine below fighter target");
  if (input.days < 3) blockers.push("Training frequency too low for fast rank climb");
  if (input.session < 30) blockers.push("Short sessions: use dense circuits and precision reps");
  return blockers.length ? blockers.slice(0, 6) : ["No major blocker flagged; progress now depends on consistency and clean overload"];
}

function chooseUserCategory(input) {
  const topStat = Object.entries(input.scores).sort((a, b) => b[1] - a[1])[0]?.[0] || "conviction";
  if (input.bmi >= ANALYSIS_RULES.bmi.reset || input.bodyFat >= 34 || input.goal === "fat-loss") return categoryById("weak-daniel-overweight");
  if (input.bmi && input.bmi < ANALYSIS_RULES.bmi.underweight) return categoryById("weak-daniel-skinny");
  if (input.overall < 26) return categoryById("weak-daniel-low-base");
  if (input.scores.endurance < 28) return categoryById("weak-daniel-cardio");
  if (input.overall < 42) return categoryById("civilian-reset");
  if (input.overall < 55) return categoryById("fighter-balanced");
  if (input.goal === "strength" || topStat === "power") return categoryById("power-build");
  if (input.goal === "speed" || topStat === "speed") return categoryById("speed-build");
  if (input.goal === "endurance" || topStat === "endurance") return categoryById("iron-endurance");
  if (input.goal === "skill" || topStat === "technique") return categoryById(input.martialExperience === "advanced" ? "copy-adaptive" : "technical-striker");
  if (input.goal === "combat" && topStat === "sense") return categoryById("copy-adaptive");
  if (topStat === "conviction") return categoryById("conviction-brawler");
  return categoryById("fighter-balanced");
}

function categoryById(id) {
  return USER_CATEGORIES.find((category) => category.id === id) || USER_CATEGORIES[0];
}

function buildJourney(category, scores, blockers, context) {
  const priorities = Object.entries(scores).sort((a, b) => a[1] - b[1]).slice(0, 2).map(([key]) => key);
  const route = routeForCategory(category.id, context.goal, scores);
  const dailyBase = context.equipment === "gym"
    ? "Squat or hinge, push, pull, carry, and trunk at RPE 6-8."
    : "Bodyweight squat/hinge, push-up progression, row/pull progression, carry, and core.";
  const engineQuest = scores.endurance < 45
    ? "20-30 minutes walk/run intervals or bike, keeping breathing controlled."
    : "Rope, sprint mechanics, or zone-2 cardio depending on recovery.";
  const bossQuest = scores.power < scores.endurance
    ? "Bodyweight benchmark: push-ups, pull-ups/rows, plank, and clean squat reps."
    : "Engine benchmark: 5K, mile, six 3-minute rounds, or 30-minute zone-2 hold.";
  return {
    currentCategory: category.label,
    nextCategory: category.next,
    color: category.color,
    summary: `Build ${category.focus}. Priority stats: ${priorities.map(labelize).join(" + ")}. Keep the Lookism theme intense, but let recovery decide volume.`,
    priorityStats: priorities,
    recommendedMastery: route.mastery,
    recommendedFighterType: route.fighterType,
    recommendedArt: route.art,
    dailyBase,
    engineQuest,
    bossQuest,
    blockers,
    xpTarget: `${Math.max(1400, 600 + category.level * 85).toLocaleString()} XP to next category`,
    weeklySchedule: buildJourneySchedule(route, context)
  };
}

function routeForCategory(categoryId, goal, scores) {
  const routes = {
    "weak-daniel-overweight": { mastery: "Endurance", fighterType: "Iron Boxing", art: "Boxing / Iron Boxing" },
    "weak-daniel-skinny": { mastery: "Strength", fighterType: "King Strength", art: "Yamazaki Kyokushin Karate" },
    "weak-daniel-cardio": { mastery: "Endurance", fighterType: "Speed Legend", art: "Boxing / Iron Boxing" },
    "weak-daniel-low-base": { mastery: "Conviction", fighterType: "Crew Enforcer", art: "Street Fighting / Wildness" },
    "civilian-reset": { mastery: "Technique", fighterType: "Technical Striker", art: "Boxing / Iron Boxing" },
    "fighter-balanced": { mastery: "Technique", fighterType: "Technical Striker", art: "Boxing / Iron Boxing" },
    "power-build": { mastery: "Strength", fighterType: "King Strength", art: "Yamazaki Kyokushin Karate" },
    "speed-build": { mastery: "Speed", fighterType: "Speed Legend", art: "Capoeira / Evasion Kicks" },
    "iron-endurance": { mastery: "Endurance", fighterType: "Iron Boxing", art: "Boxing / Iron Boxing" },
    "technical-striker": { mastery: "Technique", fighterType: "Technical Striker", art: "CQC / Jeet Kune Do" },
    "grappler-track": { mastery: "Strength", fighterType: "Grappler", art: "Judo / Kudo / Ssireum Grappling" },
    "conviction-brawler": { mastery: "Conviction", fighterType: "Conviction Brawler", art: "Muay Thai / Runner's High" },
    "copy-adaptive": { mastery: "Technique", fighterType: "Copy + UI Engine", art: "Copy-Adaptive Mixed Martial Arts" },
    "path-walker": { mastery: "Conviction", fighterType: "Copy + UI Engine", art: "Copy-Adaptive Mixed Martial Arts" }
  };
  if (goal === "strength") return routes["power-build"];
  if (goal === "speed") return routes["speed-build"];
  if (goal === "endurance") return routes["iron-endurance"];
  if (goal === "skill") return routes["technical-striker"];
  if (goal === "combat" && scores.sense > 60) return routes["copy-adaptive"];
  return routes[categoryId] || routes["fighter-balanced"];
}

function buildJourneySchedule(route, context) {
  const days = clamp(Number(context.days) || 4, 1, 7);
  const templates = [
    ["Mon", "System Base", `Mobility + ${route.mastery} base strength. ${context.session || 45} min cap.`],
    ["Tue", route.art, "Very Beginner/Beginner precision reps, slow first, then light speed."],
    ["Wed", "Engine", "Easy roadwork, rope cadence, or low-impact cardio. Finish breathing calm."],
    ["Thu", route.fighterType, "Open the fighter-type program and clear the weekly level block."],
    ["Fri", "Mastery Field", `${route.mastery} protocol with form cap and one written note.`],
    ["Sat", "Boss Quest", "Benchmark one thing only. Record honestly and stop before pain."],
    ["Sun", "Recovery Debt", "Mobility, walk, hydration, sleep reset, and no ego maxing."]
  ];
  return templates.map((day, index) => index < days || index === 6 ? day : [day[0], "Recovery", "Optional walk, mobility, or study. Do not force volume past your schedule."]);
}

function applyProfileJourney() {
  if (!state.profileAnalysis) analyzeProfile();
  if (!state.profileAnalysis) return;
  state.appliedJourney = state.profileAnalysis.journey;
  state.selectedPath = state.profileAnalysis.currentCategory;
  const scoreStats = state.profileAnalysis.scores || {};
  for (const [key, value] of Object.entries(scoreStats)) {
    if (state.stats[key] !== undefined) state.stats[key] = clamp(Math.max(Number(state.stats[key]) || 5, Math.round(value * 0.55)), 1, 100);
  }
  saveProfileState();
  saveProgress();
  setUserFlow({ diagnosisCompleted: true, awakeningAccepted: true, onboardingComplete: true, onboardingStep: "system", lastVisitedView: "home" });
  recordTrainingLog("journey_applied", state.profileAnalysis.currentCategory, { journey: state.appliedJourney });
  queueCloudSync();
}

function offlineCoachSummary() {
  const analysis = state.profileAnalysis || analyzeProfile();
  if (!analysis) {
    return [
      "Condition: Profile values need cleanup before diagnosis.",
      "Training focus: fix the highlighted inputs, then rerun Analyze Offline.",
      "Recovery and diet: keep today's work easy, repeatable, and pain-free.",
      "Next rank: the System will assign your route after valid profile data."
    ].join("\n\n");
  }
  const journey = analysis.journey || buildJourney(USER_CATEGORIES[0], analysis.scores || {}, analysis.blockers || [], {
    days: numericProfile("daysPerWeek") || 4,
    session: numericProfile("sessionLength") || 45,
    goal: state.profile.goal || "general",
    injuries: state.profile.injuries || "",
    equipment: state.profile.equipment || "bodyweight"
  });
  const schedule = journey.weeklySchedule || WEEKLY_SCHEDULES;
  const blockers = (analysis.blockers || []).slice(0, 3).join(", ") || "consistency, recovery, and clean reps";
  return [
    `Condition: ${analysis.currentCategory} at ${analysis.overall}/100. Main blockers: ${blockers}.`,
    `Training focus: run ${journey.recommendedFighterType}, ${journey.recommendedMastery}, and ${journey.recommendedArt} as your main route.`,
    `Weekly plan: ${schedule.map((day) => `${day[0]} ${day[1]}`).join("; ")}.`,
    "Recovery and diet: keep sleep consistent, use low-impact conditioning when joints feel heavy, eat repeatable protein-forward meals, and avoid crash intensity.",
    `Next rank: ${analysis.nextCategory}. Clear daily quests, one weekly quest, and one boss test before chasing harder work.`
  ].join("\n\n");
}

function normalizeAiCoachText(text) {
  const clean = String(text || "").trim();
  const fallback = offlineCoachSummary();
  if (!clean) return fallback;
  if (clean.length < 140 || clean.split(/\s+/).length < 30) return fallback;
  return clean;
}

async function runAiCoach() {
  if (!state.profileAnalysis) analyzeProfile();
  const prompt = `You are a safe fitness coach for a Lookism-inspired training app. Summarize a practical weekly plan from this diagnosis. Do not claim fictional powers are real. Return 4 clear labeled bullets: Condition, Today's Quest, Recovery, Next Rank. Do not return only a title. Keep it under 140 words.\n${JSON.stringify({ profile: state.profile, analysis: state.profileAnalysis })}`;
  state.aiCoachStatus = "Contacting optional AI coach...";
  state.aiCoachResult = "";
    render();
  try {
    let text = "";
    if (state.aiConfig.proxyEndpoint) {
      if (shouldUseOfflineAiFallback(state.aiConfig.proxyEndpoint)) {
        throw new Error("Local Gemini proxy is not running in static preview");
      }
      const response = await fetch(state.aiConfig.proxyEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, profile: state.profile, analysis: state.profileAnalysis })
      });
      if (!response.ok) throw new Error(`Proxy returned ${response.status}`);
      const data = await response.json();
      text = data.text || data.output || data.message || JSON.stringify(data).slice(0, 600);
    } else if (state.aiConfig.apiKey) {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${encodeURIComponent(state.aiConfig.apiKey)}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
      });
      if (!response.ok) throw new Error(`Gemini returned ${response.status}`);
      const data = await response.json();
      text = data.candidates?.[0]?.content?.parts?.map((part) => part.text || "").join(" ").trim();
    } else {
      throw new Error("No Gemini key or proxy endpoint configured");
    }
    state.aiCoachStatus = "AI coach completed.";
    state.aiCoachResult = normalizeAiCoachText(text);
  } catch (error) {
    state.aiCoachStatus = `AI coach unavailable: ${error.message}. Offline System summary shown.`;
    state.aiCoachResult = offlineCoachSummary();
  }
  saveProfileState();
  render();
}

const assistantDrag = {
  active: false,
  pointerId: null,
  startX: 0,
  startY: 0,
  offsetX: 0,
  offsetY: 0,
  moved: false
};

function clampAssistantPosition(x, y, rect) {
  const margin = window.innerWidth <= 720 ? 16 : 12;
  const minY = window.innerWidth <= 720 ? 74 : 82;
  const bottomSafe = window.innerWidth <= 720 ? 104 : 18;
  const width = rect?.width || (window.innerWidth <= 720 ? 62 : 72);
  const height = rect?.height || (window.innerWidth <= 720 ? 62 : 72);
  return {
    x: clamp(Math.round(x), margin, Math.max(margin, window.innerWidth - width - margin)),
    y: clamp(Math.round(y), minY, Math.max(minY, window.innerHeight - height - bottomSafe))
  };
}

function moveAssistantFab(fab, x, y) {
  fab.style.left = `${x}px`;
  fab.style.top = `${y}px`;
  fab.style.right = "auto";
  fab.style.bottom = "auto";
  fab.style.transform = "none";
}

app.addEventListener("pointerdown", (event) => {
  const fab = event.target.closest("[data-assistant-drag]");
  if (!fab || state.chatOpen) return;
  const rect = fab.getBoundingClientRect();
  assistantDrag.active = true;
  assistantDrag.pointerId = event.pointerId;
  assistantDrag.startX = event.clientX;
  assistantDrag.startY = event.clientY;
  assistantDrag.offsetX = event.clientX - rect.left;
  assistantDrag.offsetY = event.clientY - rect.top;
  assistantDrag.moved = false;
  fab.classList.add("dragging");
  fab.setPointerCapture?.(event.pointerId);
});

app.addEventListener("pointermove", (event) => {
  if (!assistantDrag.active || assistantDrag.pointerId !== event.pointerId) return;
  const fab = app.querySelector("[data-assistant-drag]");
  if (!fab) return;
  const distance = Math.hypot(event.clientX - assistantDrag.startX, event.clientY - assistantDrag.startY);
  if (distance > 4) assistantDrag.moved = true;
  if (!assistantDrag.moved) return;
  event.preventDefault();
  const next = clampAssistantPosition(event.clientX - assistantDrag.offsetX, event.clientY - assistantDrag.offsetY, fab.getBoundingClientRect());
  moveAssistantFab(fab, next.x, next.y);
});

app.addEventListener("pointerup", (event) => {
  if (!assistantDrag.active || assistantDrag.pointerId !== event.pointerId) return;
  const fab = app.querySelector("[data-assistant-drag]");
  if (fab) {
    fab.classList.remove("dragging");
    fab.releasePointerCapture?.(event.pointerId);
    if (assistantDrag.moved) {
      const rect = fab.getBoundingClientRect();
      state.assistantPosition = clampAssistantPosition(rect.left, rect.top, rect);
      saveAssistantPosition(state.assistantPosition);
      moveAssistantFab(fab, state.assistantPosition.x, state.assistantPosition.y);
      state.assistantDragSuppress = true;
      window.setTimeout(() => {
        state.assistantDragSuppress = false;
      }, 0);
    }
  }
  assistantDrag.active = false;
  assistantDrag.pointerId = null;
});

app.addEventListener("click", (event) => {
  if (event.target.closest("[data-chat-toggle]")) {
    if (state.assistantDragSuppress) {
      state.assistantDragSuppress = false;
      return;
    }
    state.chatOpen = !state.chatOpen;
    render();
    return;
  }

  if (event.target.closest("[data-chat-close]")) {
    state.chatOpen = false;
    render();
    return;
  }

  if (event.target.closest("[data-mobile-more]")) {
    state.mobileMenuOpen = !state.mobileMenuOpen;
    render();
    return;
  }

  if (event.target.closest("[data-mobile-close]")) {
    state.mobileMenuOpen = false;
    render();
    return;
  }

  const chatAction = event.target.closest("[data-chat-action]");
  if (chatAction) {
    runChatAction(chatAction.dataset.chatAction);
    return;
  }

  if (event.target.closest("[data-toggle-focus]")) {
    state.userSettings.focusMode = !state.userSettings.focusMode;
    state.mobileMenuOpen = false;
    saveUserSettings();
    syncUserSettings().catch(() => {});
    render();
    return;
  }

  if (event.target.closest("[data-continue-guest]")) {
    setUserFlow({ guestMode: true, onboardingStep: "awakening", lastVisitedView: "awakening" });
    state.view = "awakening";
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const goalButton = event.target.closest("[data-awakening-goal]");
  if (goalButton) {
    const goal = goalButton.dataset.awakeningGoal;
    setUserFlow({ selectedGoal: goal });
    state.profile.goal = goal;
    saveProfileState();
    render();
    return;
  }

  if (event.target.closest("[data-accept-system]")) {
    setUserFlow({ awakeningAccepted: true, onboardingComplete: true, onboardingStep: "diagnosis", lastVisitedView: "diagnosis" });
    if (state.userSettings.selectedGoal) {
      state.profile.goal = state.userSettings.selectedGoal;
      saveProfileState();
    }
    state.view = state.profileAnalysis ? "home" : "diagnosis";
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  if (event.target.closest("[data-start-diagnosis]")) {
    setUserFlow({ awakeningAccepted: true, onboardingComplete: true, onboardingStep: "diagnosis", lastVisitedView: "diagnosis" });
    state.view = "diagnosis";
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  if (event.target.closest("[data-complete-onboarding]")) {
    state.userSettings.onboardingComplete = true;
    saveUserSettings();
    syncUserSettings().catch(() => {});
    render();
    return;
  }

  if (event.target.closest("[data-cloud-signin]")) {
    cloudAuth("signin");
    return;
  }

  if (event.target.closest("[data-cloud-signup]")) {
    cloudAuth("signup");
    return;
  }

  if (event.target.closest("[data-cloud-signout]")) {
    cloudSignOut();
    return;
  }

  if (event.target.closest("[data-cloud-sync]")) {
    syncCloudState("manual").catch((error) => {
      state.cloudStatus = `Cloud sync failed: ${error.message}`;
      render();
    });
    return;
  }

  if (event.target.closest("[data-cloud-restore]")) {
    loadCloudState();
    return;
  }

  if (event.target.closest("[data-export-data]")) {
    exportAppData();
    return;
  }

  if (event.target.closest("[data-clear-local]")) {
    if (window.confirm("Clear local Lookism System progress on this browser?")) {
      resetLocalAppData();
      state.cloudStatus = "Local device save cleared.";
      render();
    }
    return;
  }

  if (event.target.closest("[data-delete-app-data]")) {
    if (window.confirm("Delete Lookism app data for this account and clear local progress?")) {
      deleteCloudAppData();
    }
    return;
  }

  const questButton = event.target.closest("[data-toggle-quest]");
  if (questButton) {
    toggleQuest(questButton.dataset.toggleQuest);
    render();
    return;
  }

  const programButton = event.target.closest("[data-toggle-program-level]");
  if (programButton) {
    toggleProgramLevel(
      programButton.dataset.toggleProgramLevel,
      programButton.dataset.programId,
      programButton.dataset.levelId,
      programButton.dataset.programTitle,
      programButton.dataset.programColor || "#2368ff",
      programButton.dataset.programStat || "technique"
    );
    render();
    return;
  }

  if (event.target.closest("[data-reset-daily]")) {
    resetDailyQuests();
    render();
    return;
  }

  if (event.target.closest("[data-reset-system]")) {
    resetSystemProgress();
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const viewButton = event.target.closest("[data-view]");
  if (viewButton) {
    state.view = resolveRequestedView(viewButton.dataset.view);
    state.mobileMenuOpen = false;
    state.userSettings.lastVisitedView = state.view;
    saveUserSettings();
    if (state.view === "train") {
      state.selectedMastery = "";
      state.selectedArtId = "";
      state.selectedFighterTypeId = "";
    }
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const diagnosisStep = event.target.closest("[data-diagnosis-step]");
  if (diagnosisStep) {
    state.userSettings.diagnosisStep = diagnosisStep.dataset.diagnosisStep;
    saveUserSettings();
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  if (event.target.closest("[data-diagnosis-next]")) {
    const index = currentDiagnosisStepIndex();
    state.userSettings.diagnosisStep = DIAGNOSIS_STEPS[Math.min(DIAGNOSIS_STEPS.length - 1, index + 1)].id;
    saveUserSettings();
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  if (event.target.closest("[data-diagnosis-prev]")) {
    const index = currentDiagnosisStepIndex();
    state.userSettings.diagnosisStep = DIAGNOSIS_STEPS[Math.max(0, index - 1)].id;
    saveUserSettings();
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const tabButton = event.target.closest("[data-train-tab]");
  if (tabButton) {
    state.trainTab = tabButton.dataset.trainTab;
    state.selectedMastery = "";
    state.selectedArtId = "";
    state.selectedFighterTypeId = "";
    render();
    return;
  }

  const vaultFilter = event.target.closest("[data-vault-filter]");
  if (vaultFilter) {
    state.vaultFilter = vaultFilter.dataset.vaultFilter;
    state.userSettings.vaultFilter = state.vaultFilter;
    saveUserSettings();
    syncUserSettings().catch(() => {});
    render();
    return;
  }

  const fighterButton = event.target.closest("[data-open-fighter]");
  if (fighterButton) {
    state.selectedId = fighterButton.dataset.openFighter;
    state.view = "fighter";
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const artCard = event.target.closest("[data-open-art]");
  if (artCard && !event.target.closest("a")) {
    state.selectedArtId = artCard.dataset.openArt;
    state.selectedMastery = "";
    state.selectedFighterTypeId = "";
    state.view = "train";
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const fighterTypeCard = event.target.closest("[data-open-fighter-type]");
  if (fighterTypeCard && !event.target.closest("a")) {
    state.selectedFighterTypeId = fighterTypeCard.dataset.openFighterType;
    state.selectedArtId = "";
    state.selectedMastery = "";
    state.view = "train";
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const masteryButton = event.target.closest("[data-open-mastery]");
  if (masteryButton) {
    state.selectedMastery = masteryButton.dataset.openMastery;
    state.selectedArtId = "";
    state.selectedFighterTypeId = "";
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  if (event.target.closest("[data-back-train]")) {
    state.selectedMastery = "";
    state.selectedArtId = "";
    state.selectedFighterTypeId = "";
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const stageButton = event.target.closest("[data-stage]");
  if (stageButton) {
    state.expandedStage = Number(stageButton.dataset.stage);
    render();
    return;
  }

  if (event.target.closest("[data-analyze], [data-analyze-offline]")) {
    analyzeProfile();
    render();
    return;
  }

  if (event.target.closest("[data-apply-journey]")) {
    applyProfileJourney();
    state.view = "home";
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  if (event.target.closest("[data-ai-coach]")) {
    runAiCoach();
  }
});

app.addEventListener("submit", (event) => {
  if (event.target.matches("[data-chat-form]")) {
    event.preventDefault();
    sendChatPrompt();
  }
});

app.addEventListener("input", (event) => {
  if (event.target.matches("[data-chat-input]")) {
    state.chatDraft = event.target.value;
  }
  if (event.target.matches("[data-search]")) {
    state.query = event.target.value;
    render();
    const search = app.querySelector("[data-search]");
    if (search) {
      search.focus();
      search.setSelectionRange(state.query.length, state.query.length);
    }
  }
  if (event.target.matches("[data-profile]")) {
    state.profile[event.target.dataset.profile] = event.target.value;
    saveProfileState();
    queueCloudSync();
  }
  if (event.target.matches("[data-ai-config]")) {
    state.aiConfig[event.target.dataset.aiConfig] = event.target.value;
    saveAiConfig();
  }
  if (event.target.matches("[data-cloud-auth]")) {
    const key = event.target.dataset.cloudAuth;
    if (key === "email") state.cloudEmail = event.target.value;
    if (key === "password") state.cloudPassword = event.target.value;
  }
});

app.addEventListener("change", (event) => {
  if (event.target.matches("[data-profile]")) {
    state.profile[event.target.dataset.profile] = event.target.value;
    saveProfileState();
    queueCloudSync();
  }
  if (event.target.matches("[data-ai-config]")) {
    state.aiConfig[event.target.dataset.aiConfig] = event.target.value;
    saveAiConfig();
  }
  if (event.target.matches("[data-cloud-auth]")) {
    const key = event.target.dataset.cloudAuth;
    if (key === "email") state.cloudEmail = event.target.value;
    if (key === "password") state.cloudPassword = event.target.value;
  }
});

app.addEventListener("keydown", (event) => {
  if ((event.key === "Enter" || event.key === " ") && event.target.matches("[data-open-art]")) {
    event.preventDefault();
    state.selectedArtId = event.target.dataset.openArt;
    state.selectedMastery = "";
    state.selectedFighterTypeId = "";
    state.view = "train";
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  if ((event.key === "Enter" || event.key === " ") && event.target.matches("[data-open-fighter-type]")) {
    event.preventDefault();
    state.selectedFighterTypeId = event.target.dataset.openFighterType;
    state.selectedArtId = "";
    state.selectedMastery = "";
    state.view = "train";
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

render();
initCloudSync();
