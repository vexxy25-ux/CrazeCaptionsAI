/* ================= STORAGE ================= */

function getStorage(){
  return JSON.parse(localStorage.getItem("viralGen")) || {
    uses:0,
    resetTime:0,
    pro:false
  };
}

function setStorage(data){
  localStorage.setItem("viralGen", JSON.stringify(data));
}

/* ================= CATEGORY DATA ================= */

const dataMap = {
  auto: {
    subjects: [
      "dark romance",
      "AI side hustles",
      "creator growth hacks",
      "psychological horror",
      "glow up routines",
      "faceless TikTok"
    ]
  },

  booktok: {
    subjects: [
      "dark romance",
      "enemies to lovers",
      "morally grey men",
      "booktok drama",
      "spicy booktok reads"
    ]
  },

  horror: {
    subjects: [
      "psychological horror",
      "disturbing stories",
      "analog horror",
      "creepy storytime",
      "unsettling fiction"
    ]
  },

  ai: {
    subjects: [
      "AI side hustles",
      "passive income with AI",
      "faceless TikTok automation",
      "AI money methods",
      "digital product sales"
    ]
  },

  glowup: {
    subjects: [
      "glow up routines",
      "that girl productivity",
      "self improvement arc",
      "morning routine reset",
      "confidence glow up"
    ]
  },

  creator: {
    subjects: [
      "TikTok growth secrets",
      "content creator tips",
      "algorithm hacks",
      "viral posting strategy",
      "creator monetization"
    ]
  }
};

/* ================= DAILY TREND TAGS ================= */

const dailyTrends = {
  booktok: ["#booktok","#bookrecommendations","#bookworm","#spicybooktok","#romancebooks","#bookish","#readingcommunity","#enemiestolovers","#currentlyreading","#bookaddict"],
  horror: ["#horrortok","#scarytok","#creepystory","#psychologicalhorror","#analoghorror","#disturbingstories","#thrillerbooks","#spooky","#storytime","#fyp"],
  ai: ["#aitools","#aicontent","#passiveincome","#sidehustle","#makemoneyonline","#digitalproducts","#facelesstiktok","#aiautomation","#workfromhome","#fyp"],
  glowup: ["#glowup","#selfimprovement","#thatgirl","#productivitytips","#confidenceboost","#morningroutine","#levelup","#motivation","#transformation","#foryou"],
  creator: ["#creator","#contentcreator","#tiktokgrowth","#growontiktok","#viralstrategy","#algorithmhack","#tiktoktips","#socialmediamarketing","#creatorlife","#fyp"],
  auto: ["#viral","#fyp","#foryou","#contentcreator","#tiktoktips","#growontiktok","#viralvideo","#trending","#digitalproducts","#creatorlife"]
};

/* ================= HELPERS ================= */

function shuffleArray(array){
  return array.sort(()=>Math.random()-0.5);
}

function getTrendingTags(category){
  const tags = dailyTrends[category] || dailyTrends.auto;
  return shuffleArray([...tags]).slice(0,8).join(" ");
}

/* ================= MAIN ================= */

function generateBio(){
  const data = getStorage();
  const now = Date.now();

  if(!data.pro){
    if(now > data.resetTime){
      data.uses = 0;
      data.resetTime = now + (24*60*60*1000);
    }

    if(data.uses >= 5){
      document.getElementById("output").innerText =
        "⏳ Free limit reached.\n\n🔥 Upgrade to Pro for unlimited viral captions.";
      return;
    }

    data.uses++;
    setStorage(data);
  }

  const category = document.getElementById("category").value;
  const pool = dataMap[category] || dataMap.auto;

  const titles = [
    "POV: the algorithm found you 👀",
    "this is quietly going viral",
    "creators are gatekeeping this",
    "you weren’t supposed to see this",
    "this changed my content forever",
    "TikTok creators NEED this"
  ];

  const title = titles[Math.floor(Math.random()*titles.length)];
  const subject = pool.subjects[Math.floor(Math.random()*pool.subjects.length)];
  const bio = `POV: you discovered ${subject} and now your content hits different`;
  const tagSample = getTrendingTags(category);

  document.getElementById("output").innerText =
    `${title}\n\n${bio}\n\n${tagSample}`;
}

/* ================= BUTTONS ================= */

function copyBio(){
  const text = document.getElementById("output").innerText;
  navigator.clipboard.writeText(text);
  alert("Copied!");
}
<button class="pro-btn" onclick="unlockPro()">⭐ Upgrade to Pro — $5/mo</button>
function unlockPro(){
  window.location.href = "https://buy.stripe.com/eVqbJ37WiauIgrS45L4Ni00";
}