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
    url: "https://static.wikia.nocookie.net/lookism/images/e/e9/Jay_icon.png/revision/latest/scale-to-width-down/320?cb=20200601175149",
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
  jiho: "./lookism-assets/characters/jiho.webp"
};

const BACKGROUND_WALL_EXTENSIONS = ["webp", "jpg", "jpeg", "png"];
const BACKGROUND_WALL_LIMIT = 17;
const BACKGROUND_DB_NAME = "lookismBackgroundWall:v1";
const BACKGROUND_DB_STORE = "images";
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

const rosterSeed = [
  ["Gapryong Kim", "Legendary Leader of Fist Gang", "Gapryong Fist", "Top 20", "conviction-brawler", "gapryong", "strength endurance conviction path"],
  ["UI Daniel Park", "Perfect Body", "J-High Allied", "Top 20", "ui-copy", "uiDaniel", "copy technique speed ui path"],
  ["Shingen Yamazaki", "Head of Yamazaki Clan", "Yamazaki Clan", "Top 20", "ui-copy", "shingen", "strength technique endurance ui"],
  ["Mujin Jin", "Equal to Gapryong", "Cheonliang", "Top 20", "grappler", "mujin", "strength technique path"],
  ["James Lee", "The Legend of 1st Gen", "Ten Geniuses", "Top 20", "speed-legend", "james", "speed technique path"],
  ["Kitae Kim", "King of Seoul", "Mexico / Kim bloodline", "Top 20", "king-strength", "kitae", "strength technique endurance"],
  ["Gun Park", "Master of all martial arts", "Yamazaki / Ten Geniuses", "Top 20", "ui-copy", "gun", "technique strength endurance ui"],
  ["Goo Kim", "Secret Friend", "Ten Geniuses", "Top 20", "weapon", "goo", "weapon speed technique"],
  ["Tom Lee", "Fighting Genius", "White Tiger Job Centre", "Top 20", "wild-wall", "tom", "strength speed technique endurance"],
  ["Seongji Yuk", "King of Cheonliang", "First Generation", "Top 20", "king-strength", "seongji", "strength speed technique"],
  ["Jinyoung Park", "Fist Gang copycat", "Gapryong Fist", "Top 20", "ui-copy", "jinyoung", "copy technique speed"],
  ["Charles Choi", "Elite / head of HNH Group", "HNH Group", "Top 20", "speed-legend", "charles", "speed technique"],
  ["Jichang Kwak", "King of Chungcheongnam-do", "First Generation", "Top 20", "striker", "jichang", "technique strength speed"],
  ["Sophia", "Bodyguard", "Russian security", "Top 20", "grappler", "sophia", "strength technique endurance"],
  ["Manager Kim", "Elite Agent", "White Tiger Job Centre", "Top 20", "weapon", "managerKim", "weapon technique endurance"],
  ["Taesoo Ma", "King of Ansan", "First Generation", "Top 20", "king-strength", "taesoo", "strength conviction"],
  ["Yujae Seon", "King of 1st Gen", "First Generation", "Top 20", "king-strength", "yujae", "strength speed endurance"],
  ["Bang Mandeok", "Workers powerhouse", "Workers", "Top 20", "king-strength", "mandeok", "strength endurance"],
  ["Xiaolong", "Vivi's guard", "Workers 3A", "Top 20", "weapon", "xiaolong", "weapon speed technique"],
  ["Samuel Seo", "Heat and inferiority", "Workers / Big Deal", "Top 20", "king-strength", "samuel", "strength endurance conviction"],
  ["Jerry Kwon", "Sword of Jake", "Big Deal", "21-50 Powerhouse", "king-strength", "jerry", "strength endurance"],
  ["Warren Chae", "CQC student", "Hostel", "21-50 Powerhouse", "striker", "warren", "technique speed endurance"],
  ["Olly Wang", "Pain-null Hostel head", "Hostel", "21-50 Powerhouse", "crew", "olly", "endurance conviction"],
  ["Vin Jin", "Cheonliang Arc", "J-High", "21-50 Powerhouse", "grappler", "vin", "strength technique endurance"],
  ["Zack Lee", "Blue Eyes", "J-High Allied", "21-50 Powerhouse", "iron-boxing", "zack", "endurance technique strength"],
  ["Vasco", "Runner's High", "Burn Knuckles", "21-50 Powerhouse", "conviction-brawler", "vasco", "strength endurance conviction"],
  ["Eli Jang", "Wildness", "Hostel", "21-50 Powerhouse", "wild-wall", "eli", "technique speed path"],
  ["Johan Seong", "Copycat", "God Dog", "21-50 Powerhouse", "ui-copy", "johan", "copy technique path"],
  ["Jake Kim", "Awakened", "Big Deal", "21-50 Powerhouse", "conviction-brawler", "jake", "conviction strength endurance"],
  ["Ryuhei Kuroda", "Magician", "Workers 2A", "21-50 Powerhouse", "weapon", "ryuhei", "weapon speed conviction"],
  ["Kenta Magami", "Yamazaki grudge", "Workers 2A", "21-50 Powerhouse", "striker", "kenta", "technique conviction"],
  ["Hudson Ahn", "Sun of Ansan", "Allied", "21-50 Powerhouse", "king-strength", "hudson", "strength conviction"],
  ["Ryuhei", "Nomen pressure slot", "Workers 2A", "21-50 Powerhouse", "weapon", "ryuhei", "weapon speed conviction"],
  ["Logan Lee", "J-High bully tank", "Workers / J-High", "21-50 Powerhouse", "crew", "logan", "strength endurance"],
  ["Baekho Kwon", "Gapryong's Shield", "Gapryong Fist", "21-50 Powerhouse", "wild-wall", "baekho", "strength endurance"],
  ["Hansu Seong", "Taekwondo master", "PTJ connected", "21-50 Powerhouse", "striker", "hansu", "speed technique"],
  ["Brekdak", "Muay Thai teacher", "Burn Knuckles mentor", "21-50 Powerhouse", "striker", "brekdak", "technique strength endurance"],
  ["Baekho Kwon", "Prime guard slot", "Gapryong Fist", "21-50 Powerhouse", "wild-wall", "baekho", "strength endurance"],
  ["Chungcheongnam-do King", "Jichang Kwak title slot", "First Generation", "21-50 Powerhouse", "striker", "jichang", "technique strength speed"],
  ["Shintaro", "Yamazaki clan blade", "Yamazaki Clan", "21-50 Powerhouse", "weapon", "shintaro", "weapon technique speed"],
  ["Sinu Han", "Invisible Attacks", "Big Deal", "21-50 Powerhouse", "speed-legend", "sinu", "speed technique"],
  ["Jaeha Kim", "Jaeha Han / PTJ crossover", "Questism", "21-50 Powerhouse", "striker", "jaeha", "speed technique conviction"],
  ["Seokdu Wang", "King of Suwon", "First Generation", "21-50 Powerhouse", "king-strength", "seokdu", "strength endurance"],
  ["Gongseob Ji", "King of Daegu", "First Generation", "21-50 Powerhouse", "iron-boxing", "gongseob", "endurance strength technique"],
  ["Taejin Cheon", "Cheonliang powerhouse", "Cheonliang", "21-50 Powerhouse", "grappler", "taejin", "strength technique conviction"],
  ["Hangyeol Baek", "First affiliate doctor", "Workers 1A", "21-50 Powerhouse", "crew", "hangyeol", "technique conviction"],
  ["Kwak Jibeom", "Kwak family power", "Kwak family", "21-50 Powerhouse", "king-strength", "jibeom", "strength technique"],
  ["Kwak Jichang's Brother", "Jihan Kwak", "Kwak family", "21-50 Powerhouse", "striker", "jihan", "technique speed"],
  ["Taejin", "Taejin Cheon duplicate slot", "Cheonliang", "21-50 Powerhouse", "grappler", "taejin", "strength technique conviction"],
  ["Jiho Park", "Late Series", "Juvie", "21-50 Powerhouse", "conviction-brawler", "jiho", "conviction speed"]
];

const roster = rosterSeed.map((entry, index) => {
  const [name, alias, faction, tier, archetypeKey, imageKey, masteryText] = entry;
  const archetype = ARCHETYPES[archetypeKey] || ARCHETYPES.crew;
  const rank = index + 1;
  const masteries = masteryText.split(" ");
  const accent = masteries.includes("speed")
    ? MASTERY_META.speed.color
    : masteries.includes("strength")
      ? MASTERY_META.strength.color
      : masteries.includes("weapon")
        ? MASTERY_META.weapon.color
        : masteries.includes("endurance")
          ? MASTERY_META.endurance.color
          : MASTERY_META.conviction.color;

  return {
    id: `${rank}-${slug(name)}-${slug(alias)}`,
    rank,
    name,
    alias,
    faction,
    tier,
    archetypeKey,
    archetype: archetype.label,
    style: archetype.style,
    analysis: archetype.analysis,
    masteries,
    imageKey,
    accent,
    stats: makeStats(rank, masteries, archetypeKey),
    routine: archetype.routine
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
    users: "James Lee · Sinu Han · Charles Choi",
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
    users: "Tom Lee · Eli Jang · Baekho Kwon",
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
    users: "Goo Kim · Xiaolong · Manager Kim · Sophia",
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
    users: "Jerry Kwon · Logan Lee · Hangyeol Baek · Jiho Park",
    base: "Street pressure, conditioning, wall awareness, dirty-range survival.",
    beginner: "Basic strength circuit, shuttle runs, guard recovery, wall awareness, and de-escalation habits.",
    intermediate: "Two-on-one escape patterns, close-range footwork, wall pin defense, and grip finishers.",
    advanced: "Scenario rounds, controlled chaos sparring, repeat-output circuits, and recovery after bad exchanges.",
    mastery: "You are not elegant, but you are conditioned, hard to move, and hard to panic."
  }
];

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
  return [id, {
    core: [type.base, type.beginner, type.intermediate, type.advanced, `${type.advanced} Add film review and controlled pressure.`, type.mastery],
    precision: ["Pick one measurable specialty", "Keep a recovery cap after hard days", "Film one round per week", "Progress skill before intensity"],
    mistakes: ["Copying a fighter's recklessness", "Skipping base conditioning", "Changing archetypes every week", "Training pain instead of adaptation"],
    safety: "Fighter-type training is fictional archetype translation. Use coaching, pads, mats, and controlled contact.",
    physique: `${type.type} build: develop the body qualities that support ${type.base.toLowerCase()}`,
    linkedArts: linkedArts[id] || ["Boxing / Iron Boxing", "Street Fighting / Wildness"],
    sourceLinks: [["Lookism Characters", WIKI_CHARACTERS_URL], ["Lookism Mastery", WIKI_MASTERY_URL]]
  }];
}));

const SYSTEM_STORAGE_KEY = "lookismSystemProgress:v1";
const PROFILE_STORAGE_KEY = "lookismProfileDiagnosis:v1";
const AI_CONFIG_STORAGE_KEY = "lookismHybridAiConfig:v1";

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

const state = {
  view: "home",
  query: "",
  selectedId: roster.find((fighter) => fighter.name === "James Lee")?.id || roster[0].id,
  selectedMastery: "",
  selectedArtId: "",
  selectedFighterTypeId: "",
  trainTab: "fighter-types",
  selectedTechniqueLevel: "very-beginner",
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
  profileResult: "",
  customBackgrounds: [],
  backgroundStatus: "Upload the exact Lookism images you want in the wall. No random archive art is used.",
  backgroundLoading: false
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

function saveAiConfig() {
  try {
    localStorage.setItem(AI_CONFIG_STORAGE_KEY, JSON.stringify(state.aiConfig));
  } catch {
    // Optional AI config is allowed to fail silently.
  }
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

function openBackgroundDb() {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === "undefined") {
      reject(new Error("IndexedDB is not available"));
      return;
    }
    const request = indexedDB.open(BACKGROUND_DB_NAME, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(BACKGROUND_DB_STORE)) {
        db.createObjectStore(BACKGROUND_DB_STORE, { keyPath: "id" });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error("Background storage failed"));
  });
}

function revokeBackgroundUrls() {
  if (typeof URL === "undefined") return;
  (state.customBackgrounds || []).forEach((image) => {
    if (image.url && image.url.startsWith("blob:")) URL.revokeObjectURL(image.url);
  });
}

function readBackgroundRecords(db) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(BACKGROUND_DB_STORE, "readonly");
    const request = transaction.objectStore(BACKGROUND_DB_STORE).getAll();
    request.onsuccess = () => resolve(request.result || []);
    request.onerror = () => reject(request.error || new Error("Could not read backgrounds"));
  });
}

function writeBackgroundRecords(db, files) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(BACKGROUND_DB_STORE, "readwrite");
    const store = transaction.objectStore(BACKGROUND_DB_STORE);
    store.clear();
    files.forEach((file, index) => {
      store.put({
        id: `lookism-bg-${String(index + 1).padStart(2, "0")}`,
        order: index,
        name: file.name || `Lookism background ${index + 1}`,
        type: file.type || "image/*",
        blob: file
      });
    });
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error || new Error("Could not save backgrounds"));
    transaction.onabort = () => reject(transaction.error || new Error("Background save aborted"));
  });
}

function clearBackgroundRecords(db) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(BACKGROUND_DB_STORE, "readwrite");
    transaction.objectStore(BACKGROUND_DB_STORE).clear();
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error || new Error("Could not clear backgrounds"));
    transaction.onabort = () => reject(transaction.error || new Error("Background clear aborted"));
  });
}

async function loadCustomBackgrounds() {
  try {
    const db = await openBackgroundDb();
    const records = (await readBackgroundRecords(db)).sort((a, b) => (a.order || 0) - (b.order || 0));
    db.close();
    revokeBackgroundUrls();
    state.customBackgrounds = records
      .filter((record) => record.blob)
      .slice(0, BACKGROUND_WALL_LIMIT)
      .map((record) => ({
        id: record.id,
        name: record.name || "Lookism background",
        url: URL.createObjectURL(record.blob)
      }));
    state.backgroundStatus = state.customBackgrounds.length
      ? "Showing only your uploaded Lookism background images at 60% opacity."
      : "Upload the exact Lookism images you want in the wall. No random archive art is used.";
  } catch (error) {
    state.customBackgrounds = [];
    state.backgroundStatus = `Background storage unavailable: ${error.message}`;
  }
  render();
}

async function saveBackgroundFiles(fileList) {
  const files = Array.from(fileList || [])
    .filter((file) => file.type.startsWith("image/"))
    .slice(0, BACKGROUND_WALL_LIMIT);
  if (!files.length) {
    state.backgroundStatus = "Choose image files to build the wall.";
    render();
    return;
  }
  state.backgroundStatus = `Saving ${files.length} background image${files.length === 1 ? "" : "s"}...`;
  render();
  try {
    const db = await openBackgroundDb();
    await writeBackgroundRecords(db, files);
    db.close();
    state.backgroundStatus = `${files.length} exact background image${files.length === 1 ? "" : "s"} saved.`;
    await loadCustomBackgrounds();
  } catch (error) {
    state.backgroundStatus = `Could not save backgrounds: ${error.message}`;
    render();
  }
}

async function clearCustomBackgrounds() {
  state.backgroundStatus = "Clearing uploaded background wall...";
  render();
  try {
    const db = await openBackgroundDb();
    await clearBackgroundRecords(db);
    db.close();
    revokeBackgroundUrls();
    state.customBackgrounds = [];
    state.backgroundStatus = "Background wall cleared. Upload only the images you want to use.";
  } catch (error) {
    state.backgroundStatus = `Could not clear backgrounds: ${error.message}`;
  }
  render();
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
}

function resetDailyQuests() {
  const dailyIds = questGroup("daily").map((quest) => quest.id);
  const completed = completedDailyCount();
  state.completedQuestIds = state.completedQuestIds.filter((id) => !dailyIds.includes(id));
  state.penaltyDebt = completed > 0 && completed < dailyIds.length;
  state.lastActiveDate = todayKey();
  if (completed < dailyIds.length) state.streakAwardedDate = "";
  saveProgress();
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
}

function activeWeeklySchedule() {
  return state.appliedJourney?.weeklySchedule || WEEKLY_SCHEDULES;
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
  return MARTIAL_ART_TECHNIQUE_PROGRAMS[artId(art)] || {
    core: [art.beginner, art.intermediate, art.advanced, art.mastery],
    precision: ["Move slowly before adding speed", "Keep balance after every rep", "Stop when form breaks"],
    mistakes: ["Skipping basics", "Training intensity before accuracy", "Ignoring recovery"],
    safety: "Progress gradually and use a qualified coach for contact or partner work."
  };
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
    profile: '<path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/><path d="M4 21a8 8 0 0 1 16 0"/>'
  };
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.home}</svg>`;
}

function render() {
  app.innerHTML = `
    ${renderMangaBackgroundWall()}
    <main class="app-shell">
      ${renderTopNav()}
      <div class="view-frame">
        ${renderActiveView()}
      </div>
      ${renderBottomNav()}
    </main>
  `;
  queueWikiLoad();
}

function renderMangaBackgroundWall() {
  const customBackgrounds = state.customBackgrounds || [];
  const tiles = customBackgrounds.length
    ? customBackgrounds.map((image, index) => {
      const shape = index % 7 === 0 ? "wide" : index % 5 === 0 ? "tall" : index % 4 === 0 ? "large" : "square";
      return `
        <span class="manga-bg-tile manga-bg-tile--${shape}" style="--tile-index:${index}">
          <img src="${escapeHtml(image.url)}" alt="${escapeHtml(image.name)}" loading="eager" />
        </span>
      `;
    }).join("")
    : "";

  return `
    <div class="manga-bg-wall" aria-hidden="true">
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
  if (state.view === "fighters") return renderFighters();
  if (state.view === "fighter") return renderFighterDetail(selectedFighter());
  if (state.view === "vault") return renderVault();
  if (state.view === "train") return renderTrain();
  if (state.view === "path") return renderPath();
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
    ["profile", "Profile"]
  ];
}

function renderTopNav() {
  const active = state.view === "fighter" ? "fighters" : state.view;
  return `
    <header class="web-header">
      <button type="button" class="brand-lockup" data-view="home" aria-label="Open home">
        <span>PTJ UNIVERSE</span>
        <strong>LOOKISM</strong>
      </button>
      <nav class="top-nav" aria-label="Lookism Combat Archive navigation">
        ${navItems().map(([view, label]) => `
          <button type="button" class="${active === view ? "active" : ""}" data-view="${view}">
            ${icon(view)}
            <span>${label}</span>
          </button>
        `).join("")}
      </nav>
    </header>
  `;
}

function renderBottomNav() {
  const items = navItems();
  const active = state.view === "fighter" ? "fighters" : state.view;
  return `
    <nav class="bottom-nav" aria-label="Lookism Fitness navigation">
      ${items.map(([view, label]) => `
        <button type="button" class="${active === view ? "active" : ""}" data-view="${view}">
          ${icon(view)}
          <span>${label}</span>
        </button>
      `).join("")}
    </nav>
  `;
}

function selectedFighter() {
  return roster.find((fighter) => fighter.id === state.selectedId) || roster[0];
}

function renderHome() {
  return renderSystemDashboard();
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

      ${renderBackgroundManager()}

      <div class="archive-metrics" aria-label="Archive metrics">
        ${metricCard("Level", levelProgress.level, rank.label)}
        ${metricCard("XP", state.totalXp.toLocaleString(), `${levelProgress.next.toLocaleString()} next`)}
        ${metricCard("Streak", state.streak, "daily clears")}
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

        <article class="system-panel stat-panel" style="--accent:${rank.color}">
          <div class="section-label">Status Window</div>
          <div class="stat-grid">
            ${SYSTEM_STATS.map(renderStatMeter).join("")}
          </div>
        </article>
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
        <button type="button" class="inline-action" data-view="fighters">Open Roster</button>
      </div>
      <div class="top-tier-strip">
        ${topThree.map(renderMiniFighter).join("")}
      </div>
    </section>
  `;
}

function renderBackgroundManager() {
  const backgrounds = state.customBackgrounds || [];
  const preview = backgrounds.slice(0, 8).map((image) => `<span><img src="${escapeHtml(image.url)}" alt="${escapeHtml(image.name)}" /></span>`).join("");
  return `
    <article class="system-panel background-manager" style="--accent:#ff333d">
      <div class="section-top compact">
        <div>
          <div class="section-label">Background Wall</div>
          <p>Only images you upload here are used. Select the exact ${BACKGROUND_WALL_LIMIT} Lookism images from your device, and the wall will save in this browser.</p>
        </div>
        <div class="action-row">
          <label class="inline-action bg-upload-label">
            Upload Images
            <input type="file" accept="image/*" multiple data-bg-upload />
          </label>
          <button type="button" class="inline-action danger" data-bg-clear ${backgrounds.length ? "" : "disabled"}>Clear</button>
        </div>
      </div>
      <div class="background-status-row">
        <span>${backgrounds.length}/${BACKGROUND_WALL_LIMIT} loaded</span>
        <small>${escapeHtml(state.backgroundStatus)}</small>
      </div>
      ${preview ? `<div class="background-preview-strip">${preview}</div>` : ""}
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
    <button type="button" class="quest-row system-quest ${complete ? "completed" : ""}" data-complete-quest="${quest.id}" style="--accent:${quest.color}" ${complete ? "disabled" : ""}>
      <span class="square-mark">${complete ? "✓" : "○"}</span>
      <div>
        <span class="tiny">${escapeHtml(quest.ko)} · ${escapeHtml(labelize(quest.stat))}</span>
        <h3>${escapeHtml(quest.title)}</h3>
        <p>${escapeHtml(quest.desc)}</p>
      </div>
      <div class="xp">+${quest.xp}<br><span class="tiny">XP</span></div>
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
  return roster.filter((fighter) => [fighter.name, fighter.alias, fighter.faction, fighter.tier, fighter.archetype, fighter.masteries.join(" ")]
    .join(" ")
    .toLowerCase()
    .includes(query));
}

function renderFighterRow(fighter) {
  return `
    <button type="button" class="fighter-row" data-open-fighter="${fighter.id}" style="--accent:${fighter.accent}">
      ${renderCharacterImage(fighter, "card")}
      <span>
        <span class="tiny">#${String(fighter.rank).padStart(3, "0")} · ${escapeHtml(fighter.tier)}</span>
        <h2>${escapeHtml(fighter.name)}</h2>
        <span class="ko-small">${escapeHtml(fighterDeep(fighter).ko || fighter.alias)}</span>
        <p>${escapeHtml(fighter.analysis)}</p>
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
        ${detailBlock("Fighter Profile", fighter.analysis)}
        ${detailBlock("Unique Skill", deep.uniqueSkill)}
        ${detailBlock("Fighting Style", deep.fightingStyle || fighter.style)}
        ${detailBlock("Physique", deep.physique)}
        ${detailBlock("Training Method", deep.trainingMethod)}
        ${renderRoutinePanel(fighter)}
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

function renderVault() {
  return `
    <section class="page vault-page">
      <div class="page-head-row">
        <div>
          <div class="eyebrow">MANHWA SOURCE WALL</div>
          <h1 class="page-title">Visual Vault</h1>
          <p class="page-subtitle">캐릭터 · 모드 · 경지 · PATH REFERENCES</p>
        </div>
        <div class="roster-count"><strong>${vault.length}</strong><span>refs</span></div>
      </div>
      <div class="vault-grid">
        ${vault.map(renderVaultCard).join("")}
      </div>
    </section>
  `;
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
  const found = FIGHTER_DEEP_DIVE[fighter.name] || FIGHTER_DEEP_DIVE[fighter.name.replace(/^UI /, "")];
  if (found) return found;
  return {
    ko: fighter.alias,
    quote: `${fighter.name} is trained here as a ${fighter.archetype.toLowerCase()} archetype.`,
    uniqueSkill: getModeFocus(fighter),
    fightingStyle: fighter.style,
    physique: physiqueFor(fighter),
    achievement: `${fighter.faction} representative in your top-50 roster.`,
    trainingMethod: trainingBullets(fighter).join(" ")
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
  return `
    <article class="fighter-type-card" data-open-fighter-type="${fighterTypeId(type)}" role="button" tabindex="0" style="--accent:${type.color}">
      <div class="fighter-type-head">
        <span>
          <span class="tiny">${escapeHtml(type.users)}</span>
          <h2>${escapeHtml(type.type)}</h2>
          <span class="ko-small">${escapeHtml(type.ko)}</span>
        </span>
        <span class="mastery-orb" aria-hidden="true"></span>
      </div>
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
  return `
    <article class="martial-card" data-open-art="${artId(art)}" role="button" tabindex="0" style="--accent:${art.color}">
      <div class="martial-head">
        <span>
          <span class="tiny">${escapeHtml(art.path)}</span>
          <h2>${escapeHtml(art.art)}</h2>
          <span class="ko-small">${escapeHtml(art.ko)}</span>
        </span>
        <span class="mastery-orb" aria-hidden="true"></span>
      </div>
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
  return `
    <section class="page martial-detail-page" style="--accent:${art.color}">
      <button type="button" class="back-btn" data-back-train>← Training</button>
      <header class="mastery-detail-hero technique-hero">
        <div>
          <div class="eyebrow">Technique Program · ${escapeHtml(art.path)}</div>
          <h1>${escapeHtml(art.art)}</h1>
          <span class="ko-small">${escapeHtml(art.ko)} · ${escapeHtml(art.users)}</span>
          <p>${escapeHtml(art.note)}</p>
        </div>
        <div class="technique-xp-card">
          <span>Technique XP</span>
          <strong>${TECHNIQUE_LEVELS.reduce((sum, level) => sum + level.xp, 0)}</strong>
          <small>full path clear</small>
        </div>
      </header>

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
  const levelText = {
    "very-beginner": art.beginner,
    beginner: art.beginner,
    intermediate: art.intermediate,
    advanced: art.advanced,
    expert: `${art.advanced} Add film review, partner timing, and pressure-tested exits.`,
    "technique-mastery": art.mastery
  }[level.id];
  const coreIndex = TECHNIQUE_LEVELS.findIndex((item) => item.id === level.id);
  const technique = program.core[coreIndex] || program.core[program.core.length - 1];
  return `
    <article class="technique-stage" style="--accent:${art.color}">
      <div class="technique-stage-head">
        <span>${escapeHtml(level.weeks)}</span>
        <strong>${escapeHtml(level.label)}</strong>
        <em>+${level.xp} XP</em>
      </div>
      <div class="technique-stage-body">
        <section>
          <h3>Focus Technique</h3>
          <p>${escapeHtml(technique)}</p>
        </section>
        <section>
          <h3>Weekly Schedule</h3>
          <p>${escapeHtml(level.schedule)}</p>
        </section>
        <section>
          <h3>Precision Assignment</h3>
          <p>${escapeHtml(levelText)}</p>
        </section>
        <section>
          <h3>Unlock Test</h3>
          <p>${escapeHtml(unlockTestFor(art.art, level))}</p>
        </section>
      </div>
      ${renderResourceChips(art.art, level.label, art.sources)}
    </article>
  `;
}

function renderMasteryDetail(mastery) {
  const program = MASTERY_PROGRAMS[mastery.id];
  return `
    <section class="page" style="--accent:${mastery.color}">
      <button type="button" class="back-btn" data-back-train>← Training</button>
      <header class="mastery-detail-hero">
        <div class="eyebrow">Mastery Path</div>
        <h1>${escapeHtml(mastery.label)}</h1>
        <span class="ko-small">${escapeHtml(mastery.ko)}</span>
        <p class="page-subtitle">${escapeHtml(mastery.users)}</p>
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
        ${TECHNIQUE_LEVELS.map((level) => renderFamilyProgramLevel(mastery.label, mastery.color, program, level, program.sourceLinks)).join("")}
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
  return `
    <section class="page fighter-type-detail-page" style="--accent:${type.color}">
      <button type="button" class="back-btn" data-back-train>← Training</button>
      <header class="mastery-detail-hero technique-hero">
        <div>
          <div class="eyebrow">Fighter Type Program · ${escapeHtml(type.users)}</div>
          <h1>${escapeHtml(type.type)}</h1>
          <span class="ko-small">${escapeHtml(type.ko)}</span>
          <p>${escapeHtml(type.base)}</p>
        </div>
        <div class="technique-xp-card">
          <span>Route XP</span>
          <strong>${TECHNIQUE_LEVELS.reduce((sum, level) => sum + level.xp, 0)}</strong>
          <small>full clear</small>
        </div>
      </header>
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
        ${TECHNIQUE_LEVELS.map((level) => renderFamilyProgramLevel(type.type, type.color, program, level, program.sourceLinks)).join("")}
      </div>
      <article class="system-panel penalty-card" style="--accent:#f0a42f">
        <div class="section-label">Safety Note</div>
        <p>${escapeHtml(program.safety)}</p>
        ${renderResourceChips(type.type, "Safety", program.sourceLinks)}
      </article>
    </section>
  `;
}

function renderFamilyProgramLevel(context, color, program, level, sources) {
  const index = TECHNIQUE_LEVELS.findIndex((item) => item.id === level.id);
  const focus = program.core[index] || program.core[program.core.length - 1];
  const precision = program.precision[index % program.precision.length];
  const mistake = program.mistakes[index % program.mistakes.length];
  return `
    <article class="technique-stage" style="--accent:${color}">
      <div class="technique-stage-head">
        <span>${escapeHtml(level.weeks)}</span>
        <strong>${escapeHtml(level.label)}</strong>
        <em>+${level.xp} XP</em>
      </div>
      <div class="technique-stage-body">
        <section>
          <h3>Focus</h3>
          <p>${escapeHtml(focus)}</p>
        </section>
        <section>
          <h3>Weekly Schedule</h3>
          <p>${escapeHtml(level.schedule)}</p>
        </section>
        <section>
          <h3>Precision Cue</h3>
          <p>${escapeHtml(precision)}</p>
        </section>
        <section>
          <h3>Unlock Test</h3>
          <p>${escapeHtml(unlockTestFor(context, level))}</p>
        </section>
        <section>
          <h3>Common Mistake</h3>
          <p>${escapeHtml(mistake)}</p>
        </section>
      </div>
      ${renderResourceChips(context, level.label, sources)}
    </article>
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
    <section class="page profile-diagnosis-page" style="--accent:${analysis?.color || rank.color}">
      <div class="page-head-row">
        <div>
          <div class="eyebrow">SYSTEM DIAGNOSIS · 파이터 프로필</div>
          <h1 class="page-title">System Diagnosis</h1>
          <p class="page-subtitle">physical details · PR records · AI-style category analysis</p>
        </div>
        <div class="roster-count"><strong>Lv ${progress.level}</strong><span>${escapeHtml(rank.label)}</span></div>
      </div>

      <div class="diagnosis-layout">
        <section class="system-panel diagnosis-form" style="--accent:${analysis?.color || rank.color}">
          <div class="section-label">Input Window</div>
          ${renderProfileFieldGroup("Body Details", "body")}
          ${renderProfileFieldGroup("Training Context", "context")}
          ${renderProfileFieldGroup("Strength PRs", "prs")}
          ${renderProfileFieldGroup("Benchmark Tests", "tests")}
          <div class="profile-actions">
            <button type="button" class="analysis-button compact" data-analyze-offline>Analyze Offline</button>
            <button type="button" class="analysis-button compact secondary" data-ai-coach>AI Coach</button>
            <button type="button" class="analysis-button compact ghost" data-apply-journey ${analysis ? "" : "disabled"}>Apply Journey</button>
          </div>
        </section>

        <aside class="diagnosis-side">
          <article class="system-panel rank-panel" style="--accent:${rank.color}">
            <div class="meta-label">System Rank</div>
            <h2 class="rank-title">${escapeHtml(rank.label)}</h2>
            <span class="ko-small">Lv ${progress.level} · ${state.totalXp.toLocaleString()} XP total</span>
            <div class="progress" style="--accent:${rank.color};--value:${progress.percent}%"><span></span></div>
          </article>
          ${analysis ? renderDiagnosisResult(analysis) : renderDiagnosisEmpty()}
          ${renderAiConfigPanel()}
        </aside>
      </div>

      ${analysis ? renderJourneyRoadmap(analysis) : ""}
      ${state.aiCoachResult ? `<article class="system-panel ai-result" style="--accent:#8d4dff"><div class="section-label">AI Coach Output</div><p>${escapeHtml(state.aiCoachResult)}</p></article>` : ""}
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
    <label class="field">
      <span>${escapeHtml(field.label)}</span>
      <input data-profile="${field.key}" value="${escapeHtml(value)}" placeholder="${escapeHtml(field.placeholder || "—")}" inputmode="${field.type === "number" ? "decimal" : "text"}" />
    </label>
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
      <div class="section-label">Current Category</div>
      <h2>${escapeHtml(analysis.currentCategory)}</h2>
      <span class="ko-small">${escapeHtml(analysis.ko)} · Score ${analysis.overall}/100</span>
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

function numericProfile(key) {
  return Number(state.profile[key]) || 0;
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
  saveProfileState();
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
}

async function runAiCoach() {
  if (!state.profileAnalysis) analyzeProfile();
  const prompt = `You are a safe fitness coach for a Lookism-inspired training app. Summarize a practical weekly plan from this diagnosis. Do not claim fictional powers are real. Keep it under 120 words.\n${JSON.stringify({ profile: state.profile, analysis: state.profileAnalysis })}`;
  state.aiCoachStatus = "Contacting optional AI coach...";
  state.aiCoachResult = "";
  render();
  try {
    let text = "";
    if (state.aiConfig.proxyEndpoint) {
      const response = await fetch(state.aiConfig.proxyEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, profile: state.profile, analysis: state.profileAnalysis })
      });
      if (!response.ok) throw new Error(`Proxy returned ${response.status}`);
      const data = await response.json();
      text = data.text || data.output || data.message || JSON.stringify(data).slice(0, 600);
    } else if (state.aiConfig.apiKey) {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${encodeURIComponent(state.aiConfig.apiKey)}`, {
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
    state.aiCoachResult = text || "AI coach returned no text. Offline diagnosis is still applied.";
  } catch (error) {
    state.aiCoachStatus = "AI coach unavailable. Offline diagnosis is active.";
    state.aiCoachResult = `AI fallback: ${error.message}. Use the offline journey, then configure a proxy endpoint or Gemini key later.`;
  }
  saveProfileState();
  render();
}

app.addEventListener("click", (event) => {
  if (event.target.closest("[data-bg-clear]")) {
    clearCustomBackgrounds();
    return;
  }

  const questButton = event.target.closest("[data-complete-quest]");
  if (questButton) {
    completeQuest(questButton.dataset.completeQuest);
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
    state.view = viewButton.dataset.view;
    if (state.view === "train") {
      state.selectedMastery = "";
      state.selectedArtId = "";
      state.selectedFighterTypeId = "";
    }
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

app.addEventListener("input", (event) => {
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
  }
  if (event.target.matches("[data-ai-config]")) {
    state.aiConfig[event.target.dataset.aiConfig] = event.target.value;
    saveAiConfig();
  }
});

app.addEventListener("change", (event) => {
  if (event.target.matches("[data-bg-upload]")) {
    saveBackgroundFiles(event.target.files);
    event.target.value = "";
    return;
  }
  if (event.target.matches("[data-profile]")) {
    state.profile[event.target.dataset.profile] = event.target.value;
    saveProfileState();
  }
  if (event.target.matches("[data-ai-config]")) {
    state.aiConfig[event.target.dataset.aiConfig] = event.target.value;
    saveAiConfig();
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
loadCustomBackgrounds();
