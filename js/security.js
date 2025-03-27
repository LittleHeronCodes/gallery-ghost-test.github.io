function checkCode() {
  const input = document.getElementById('codeInput').value;
  const log = document.getElementById('log');

  // Extract first 4 numeric
  const code = input.match(/^\d{4}/)?.[0] || "";
  
  const codeMap = new Map([
    // 미팅룸
    ["5568", "미팅룸\n\n[보안 해제 상태] (당일 기록 없음)"],
    // 경비실
    ["4392", "경비실\n\n[보안 해제 상태] (당일 기록 없음)"],
    // 창고
    ["1102", "창고\n\n[보안 해제 상태] (당일 기록 없음)"],
    // 관장실
    ["6670", "관장실\n\n[22:10] 유관장"],
    // 보안실
    ["2309", "보안실\n\n[22:12] 김경비"],
    // 공동 작업실
    ["2210", "공동 작업실\n\n[22:10] 윤환"],
    // 전시관
    ["8702", "전시관\n\n[14:00] 조수영\n[18:05] 윤환\n[18:05] 자동 잠금 및 기록 해제"],
    // 개인작업실
    ["1101", "개인작업실\n\n[11:05] 윤환\n[22:13] 마스터키\n[22:32] 조수영\n[22:50] 윤환"]
  ]);

  log.innerText = codeMap.get(code) || "⚠️ 잘못된 번호입니다.";

}

