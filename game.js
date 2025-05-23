const key = {
  keyDown: {},

  keyValue: {
    37: "left",
    39: "right",
    40: "slide",
    32: "jump",
    80: "pause",
  },
};

const allJellyComProp = {
  arr: [],
};

const allObstacleComProp = {
  arr: [],
};

const allItemComProp = {
  arr: [],
};

const stageInfo = {
  stage: [
    stage1,
    stage2,
    stage3,
    stage4,
    stage5,
    stage6,
    stage7,
    stage8,
    stage9,
    stage10,
    stage11,
    stage12,
    stage13,
    stage14,
    stage15,
    stage16,
    stage17,
    stage18,
    stage19,
    stage20,
  ] /**/,
  currentStage: {},
  currentStageIndex: localStorage.getItem("currentStageIndex"),
  totalScore: localStorage.getItem("score") * 1,
  gameOver: false,
};

const gameBackground = {
  gameBox: document.querySelector(".game"),
  groundBox: document.querySelector(".ground"), //gameBox에 포함됨
};

const gameProp = {
  screenWidth: window.innerWidth,
  screenHeight: window.innerHeight,
  gameOver: false,
  gameClear: false,
  paused: false,
};

const pause = () => {
  if (gameProp.paused) {
    gameProp.paused = false;
    document.querySelector(".paused_box").remove();
    document.querySelector(".cookie").classList.remove("paused");
  } else {
    gameProp.paused = true;
    document.querySelector(".cookie").classList.add("paused");
    stageInfo.currentStage.stageGuide("PAUSED");
  }
};

const nextStage = () => {
  cookie.movex = 0;
  gameBackground.gameBox.style.transform = `translateX(${0}px)`;

  allJellyComProp.arr.forEach((j) => {
    j.el.remove();
  });
  allJellyComProp.arr.splice(0); //배열 요소 전부 삭제

  allObstacleComProp.arr.forEach((o) => {
    o.el.remove();
  });
  allObstacleComProp.arr.splice(0);

  allItemComProp.arr.forEach((i) => {
    i.el.remove();
  });
  allItemComProp.arr.splice(0);

  newStage = new Stage(stageInfo.stage[stageInfo.currentStageIndex]);
  stageInfo.currentStage = newStage;

  gameProp.gameClear = false;
  document.querySelector(".stage_guide").style.display = "none";
};

const backLobby = () => {
  cookie.movex = 0;
  gameBackground.gameBox.style.transform = `translateX(${0}px)`;

  allJellyComProp.arr.forEach((j) => {
    j.el.remove();
  });
  allJellyComProp.arr.splice(0);

  allObstacleComProp.arr.forEach((o) => {
    o.el.remove();
  });
  allObstacleComProp.arr.splice(0);

  allItemComProp.arr.forEach((i) => {
    i.el.remove();
  });
  allItemComProp.arr.splice(0);

  location.href = "index.html";
  document.querySelector(".stage_guide").style.display = "none";
};

const renderGame = () => {
  cookie.keyMotion();
  if (!gameProp.paused && !gameProp.gameOver && !gameProp.gameClear) {
    cookie.minusHp(-0.2);
    cookie.movex = cookie.movex + cookie.speed;
    document.querySelector(
      ".cookie_box"
    ).style.transform = `translate(${cookie.movex}px, ${cookie.movey}px)`;
    setGameBackground();
    allJellyComProp.arr.forEach((arr) => {
      // arr.el.style.transform = `translate(${arr.x}px, ${arr.y}px)`;
      if (arr.magnet === true) {
        //젤리가 쿠키의 왼쪽에 있는 경우
        if (arr.position().right < cookie.position().left + 105.5) {
          arr.x += 30;
          //젤리가 쿠키의 왼쪽 위에 있는 경우
          if (arr.position().bottom > cookie.position().top - 113.1) {
            arr.y += 20;
          } else {
            //젤리가 쿠키의 왼쪽 아래에 있는 경우
            arr.y -= 20;
          }
        } else {
          //젤리가 쿠키의 오른쪽에 있는 경우
          arr.x -= 30;
          //젤리가 쿠키의 오른쪽 위에 있는 경우
          if (arr.position().bottom > cookie.position().top - 113.1) {
            arr.y += 20;
          } else {
            //젤리가 쿠키의 오른쪽 아래에 있는 경우
            arr.y -= 20;
          }
        }
        arr.el.style.transform = `translate(${arr.x}px, ${arr.y}px)`;
        if (
          arr.position().right > cookie.position().left &&
          arr.position().left < cookie.position().right &&
          arr.position().top > cookie.position().bottom &&
          arr.position().bottom < cookie.position().top
        )
          arr.magnet = false;
      }

      arr.crashJelly();
    });
    allObstacleComProp.arr.forEach((arr) => {
      if (!arr.isCrashed && !cookie.crashed) {
        arr.crashObstacle();
      }
    });
    allItemComProp.arr.forEach((arr) => {
      arr.crashItemJelly();
    });
  } else if (gameProp.gameOver || gameProp.gameClear) {
    document.querySelector(
      ".cookie_box"
    ).style.transform = `translate(${cookie.movex}px, 0px)`;
  }
  if (cookie.movex >= stageInfo.currentStage.length && !gameProp.gameClear) {
    if (stageInfo.currentStageIndex == stageInfo.stage.length - 1) {
      gameProp.gameClear = true;
      stageInfo.currentStage.allClear();
    } else {
      gameProp.gameClear = true;
      stageInfo.currentStage.stageClear();
    }
  }
  window.requestAnimationFrame(renderGame);
};

const setGameBackground = () => {
  let parallaxValue = Math.min(
    0,
    (cookie.movex - gameProp.screenWidth / 5) * -1
  );
  gameBackground.gameBox.style.transform = `translateX(${parallaxValue}px)`;
};

const windowEvent = () => {
  window.addEventListener("keydown", (e) => {
    const action = key.keyValue[e.which];

    if (!key.keyDown[action]) {
      // 중복입력 방지
      if (action === "jump") {
        if (cookie.jumpState < 2) {
          cookie.jumpState++;
          cookie.jumpTimer = 0; // 즉시 반응
        }
      }
    }

    key.keyDown[action] = true;
  });

  window.addEventListener("keyup", (e) => {
    const action = key.keyValue[e.which];
    key.keyDown[action] = false;
  });
};

// const loadImg = () => {
//   //이미지 미리 로드
//   const preLoadImgSrc = [
//     "../lib/images/gingerMK_run.png",
//     "../lib/images/gingerMK_slide.png",
//     "../lib/images/gingerMK_jump_one.png",
//     "../lib/images/gingerMK_jump_double.png",
//     "../lib/images/gingerMK_jump_down.png",
//     "../lib/images/gingerMK_crashed3.png",
//     "../lib/images/gingerMK_dead.png",
//     "../lib/jelly/blue_jelly_bean.png",
//     "../lib/jelly/yellow_bear_jelly.png",
//     "../lib/jelly/pink_bear_jelly.png",
//     "../lib/jelly/blue_bear_jelly.png",
//     "../lib/jelly/big_bear_jelly.png",
//     "../lib/obstacles/clock.png",
//     "../lib/obstacles/pink_crystal.png",
//     "../lib/obstacles/snacks.png",
//     "../lib/obstacles/cake1.png",
//     "../lib/obstacles/table.png",
//     "../lib/obstacles/green_crystal.png",
//     "../lib/obstacles/mini_snack.png",
//     "../lib/obstacles/lamp.png",
//     "../lib/obstacles/long_crystal.png",
//     "../lib/obstacles/knife.png",
//   ];
//   preLoadImgSrc.forEach((arr) => {
//     const img = new Image();
//     img.src = arr;
//   });
// };

let cookie;

const init = () => {
  // localStorage.setItem("score", 0);
  cookie = new Cookie(".cookie");
  document.querySelector(".score_box").innerText = localStorage.getItem("score")
    ? localStorage.getItem("score")
    : 0;
  newStage = new Stage(stageInfo.stage[stageInfo.currentStageIndex]);
  stageInfo.currentStage = newStage;

  // loadImg();
  windowEvent();
  renderGame();
};

window.onload = () => {
  window.resizeTo(1280, 800);
  init();
};

// 스페이스바 키가 눌렸을 때 음악 재생
document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    // 스페이스바 눌렸을 때
    const audio = document.getElementById("bgm");
    // 음악이 이미 재생 중이 아니면만 재생
    if (audio.paused) {
      audio.play(); // 음악 시작
    }
  }
});

// 쿠키런 스타일 4단계 스토리 데이터
const storyList = [
  {
    name: "대표님쿠키",
    img: "탄쿠키.png",
    text: "치킨매출이 너무 줄어들고 있잖어어",

    side: "left",
  },
  {
    name: "배달원쿠키",
    img: "배달원.png",
    text: "나도 너무 슬퍼 1달전만해도 세계최고의 치킨배달원이었는데",

    side: "right",
  },
  {
    name: "타버린쿠키",
    img: "탄쿠키.png",
    text: "우리 얼른 기운차려서 매출을 올려보자!",

    side: "left",
  },
  {
    name: "배달원쿠키",
    img: "배달원.png",
    text: "좋아, 한번 배달해볼까나!",

    side: "right",
  },
];
let storyIndex = 0;

function showStory() {
  document.querySelector(".story_overlay").style.display = "flex";
  // 배경 이미지 적용
  document.querySelector(".story_bg").style.backgroundImage = `url('${
    storyList[storyIndex].bg || ""
  }')`;
  // 좌우 캐릭터 이미지 및 말풍선 위치
  document.querySelector(".story_img.left").src =
    storyList[storyIndex].side === "left" ? storyList[storyIndex].img : "";
  document.querySelector(".story_img.right").src =
    storyList[storyIndex].side === "right" ? storyList[storyIndex].img : "";
  document
    .querySelector(".story_img.left")
    .classList.toggle("active", storyList[storyIndex].side === "left");
  document
    .querySelector(".story_img.right")
    .classList.toggle("active", storyList[storyIndex].side === "right");
  document.querySelector(".story_bubble_box").className =
    "story_bubble_box " + (storyList[storyIndex].side || "left");
  document.querySelector(".story_name").innerText = storyList[storyIndex].name;
  document.querySelector(".story_text").innerText = storyList[storyIndex].text;
  document.querySelector(".story_next_btn").style.display =
    storyIndex < storyList.length - 1 ? "inline-block" : "none";
  document.querySelector(".story_start_btn").style.display =
    storyIndex === storyList.length - 1 ? "inline-block" : "none";
}
function nextStory() {
  if (storyIndex < storyList.length - 1) {
    storyIndex++;
    showStory();
  }
}
function startGame() {
  document.querySelector(".story_overlay").style.display = "none";
  if (typeof init === "function") init();
}
window.onload = () => {
  showStory();
};
