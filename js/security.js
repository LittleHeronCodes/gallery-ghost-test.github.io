function checkCode() {
  const input = document.getElementById('codeInput').value;
  const log = document.getElementById('log');
  
  const codeMap = new Map([
    ["5568", "해당 장소는 정보가 남지 않습니다."],
    ["4392", "해당 장소는 정보가 남지 않습니다."],
    ["6670", "22:10 유관장"],
    ["1102", "해당 장소는 정보가 남지 않습니다."],
    ["2309", "22:12 김경비"],
    ["2210", "22:10 윤환"],
    ["8702", "22:22 윤환\n22:55 김경비"],
    ["1101", "22:13 마스터키\n22:32 조수영\n22:50 윤환"]
  ]);

  log.innerText = codeMap.get(input) || "⚠️ 잘못된 번호입니다.";

}


