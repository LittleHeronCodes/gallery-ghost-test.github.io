// Character goals and scores for script

// Character object initialize
class Character {
  constructor(name) {
    this.name = name;
    this.susvandal = 0; // Suspect vandalism
    this.suskiller = 0; // Suspect kill
    this.goals = 0;
  }
}

// Character state update
Character.prototype.stateUpdate = function(inputs) {

  // Suspect
  this.susvandal = 1*(this.name == inputs.vandal);
  this.suskiller = 1*(this.name == inputs.killer);

  // Additional goals for each character
  if (this.name == "김경비") {
    this.goals = (inputs.original == "gallery")
  }
  if (this.name == "유관장") {
    this.goals = (inputs.subgoal_yoo == "yes")
  }
  if (this.name == "진작가") {
    this.goals = 1*(inputs.subgoal_jin == "yes")
  }
  if (this.name == "조수영") {
    this.goals = 1*(inputs.subgoal_cho == "yes")
  }
}

Character.prototype.getScore = function(inputs) {
  const find_killer = inputs.killer == "유관장" ? true : false;
  const find_vandal = inputs.vandal == "조수영" ? true : false;
  const find_original = inputs.original == "gallery" ? true : false;

  // Calculate score for each character
  if (this.name == "김경비") {
    this.score = find_killer * 6 + find_vandal * 3 + this.goals * 6;
  }
  if (this.name == "유관장") {
    this.score = !this.suskiller * 6 + find_original * 6 + this.goals * 3;
  }
  if (this.name == "진작가") {
    this.score = !this.suskiller * 6 + find_vandal * 6 + this.goals * 3;
  }
  if (this.name == "조수영") {
    this.score = !this.susvandal * 6 + find_killer * 6 + this.goals * 3;
  }

}


// ⭐️김경비
// (인물북) 1. 전시관에 있는 Realest thought이 위작인 것을 들키지 않기 (6점)
// (인물북) 2. 위작 훼손범 찾기 (3점)
// (이벤트 카드) 추가목표: 윤환 살인범 찾기 (6점)

// ⭐️유관장
// (인물북) 1. “윤환” 살인범이라는 사실을 들키지 않기 (6점)
// (인물북) 2. 작품 훼손범 찾기 (6점)
// (인물북) 3. 재단 비리 관련된 증거(카드) 획득 (3점)
// (이벤트 카드) <15년 전 원작 RT 훼손범 찾기 (6점)>로 2번 목표가 변경됩니다.
// 		당신을 위한 보기: 윤환, 진작가, 김경비, 조수영, 훼손되지 않음

// ⭐️진작가
// (인물북) 1. 윤환 살인범으로 지목당하지 않기 (6점)
// (인물북) 2. 본인 아이디어 노트 증거(카드) 획득 (3점)
// (인물북) 3. 훼손범 찾기 (6점)
// (이벤트 카드) 아무래도 둘 중의 하나가 당신이 그린 R.T. 인 것 같습니다. <당신이 그린 그림의 훼손범을 찾으세요. (6점)>로 3번 목표가 변경됩니다.

// ⭐️조수영
// (인물북) 1. 작품 훼손 범인 들키지 않기 (6점)
// (인물북) 2. 윤환의 진상을 폭로하기 위해 진작가 아이디어 노트 증거(카드) 획득 (3점)
// (이벤트 카드) 3. 추가목표: 윤환 살인범 찾기 (6점)



// Read inputs and turn it into json list
function getInputs() {
  // Get all selected radio buttons
  const inputs = document.querySelectorAll('input[type="radio"]:checked');

  // Initialize an object to store the inputs
  const inputValues = {};

  // Loop through each selected radio button and store its value in the object
  inputs.forEach(input => {
    inputValues[input.name] = input.value;
  });

  return inputValues;
}


function getEnding() {

  // Get inputs from the form
  const inputs = getInputs();

  // Initialize characters
  const kim = new Character("김경비");
  const yoo = new Character("유관장");
  const jin = new Character("진작가");
  const cho = new Character("조수영");

  // Update character states based on inputs
  kim.stateUpdate(inputs);
  yoo.stateUpdate(inputs);
  jin.stateUpdate(inputs);
  cho.stateUpdate(inputs);

  // Convert character objects to raw log data for debugging
  // const rawLogData = `
  //   inputs: ${JSON.stringify(inputs, null, 2)}
  //   김경비: ${JSON.stringify(kim, null, 2)}
  //   유관장: ${JSON.stringify(yoo, null, 2)}
  //   진작가: ${JSON.stringify(jin, null, 2)}
  //   조수영: ${JSON.stringify(cho, null, 2)}
  // `;
  const rawLogData = "endingScript";

  // Display the raw log data in the HTML element
  document.getElementById('endingScript').textContent = rawLogData;

  // Display the score
  // document.getElementById('endingScript').textContent = `준비중`;
  document.getElementById('scoreDisplay').textContent = `준비중`;
  

  kim.getScore(inputs);
  yoo.getScore(inputs);
  jin.getScore(inputs);
  cho.getScore(inputs);
  
  // 점수 탭
  document.getElementById("kim_score").innerHTML = kim.score;
  document.getElementById("yoo_score").innerHTML = yoo.score;
  document.getElementById("jin_score").innerHTML = jin.score;
  document.getElementById("cho_score").innerHTML = cho.score;
}


