// Content list
const logContents = {
  meetingRoom: `
  전시관
  
  [14:00] 조수영
  [15:20] 유관장
  [16:30] 김경비
  `,
  securityRoom: `
  경비실
  [보안 해제 상태] (당일 기록 없음)
  `,
  storageRoom: `
  창고
  [] (창고는 기록이 남지 않습니다.)
  `,
  directorRoom: `
  관장실
  [22:10] 유관장
  `,
  monitoringRoom: `
  보안실
  [22:12] 김경비
  `,
  commonWorkRoom: `
  공동 작업실
  [18:15] 조수영
  [18:15] 윤환
  [22:10] 윤환
  `,
  gallery: `
  전시관
  [14:00] 조수영
  [15:20] 유관장
  [16:30] 김경비
  [18:05] 윤환
  [18:05] 자동 잠금 및 기록 해제
  `,
  privateWorkRoom: `
  개인작업실
  [11:05] 윤환
  [22:13] 마스터키
  [22:32] 조수영
  [22:50] 윤환
  `
}

function generateStylizedLog(input) {
  // Split the input into lines
  const lines = input.split("\n").filter(line => line.trim() !== "");

  // Extract the room name (first line)
  const roomName = lines.shift();

  // Build the HTML structure
  let stylizedHTML = `<span class="room">조회중: ${roomName}</span><br><br>`;

  // Process the remaining lines as log details
  lines.forEach(line => {
    const timeMatch = line.match(/\[(.*?)\]/); // Extract time between [ and ]
    const detailsMatch = line.split("] ")[1]; // Extract everything after "] "

    if (timeMatch && detailsMatch) {
      const time = timeMatch[1]; // Time inside brackets
      const details = detailsMatch; // Details after "] "
      stylizedHTML += `<span class="log-time">${time}</span><span class="log-name"> ${details}</span><br>`;
    } else {
      // General log info (if no time or details match)
      stylizedHTML += `<span class="log-info">${line}</span><br>`;
    }
  });

  return stylizedHTML;
}

function checkCode() {
  const input = document.getElementById('codeInput').value;
  const log = document.getElementById('log');

  // Extract first 4 numeric
  const code = input.match(/^\d{4}/)?.[0] || "";
  
  const codeMap = new Map([
    // 미팅룸
    ["5568", generateStylizedLog(logContents.meetingRoom)],
    // 경비실
    ["4392", generateStylizedLog(logContents.securityRoom)],
    // 창고
    ["1102", generateStylizedLog(logContents.storageRoom)],
    // 관장실
    ["6670", generateStylizedLog(logContents.directorRoom)],
    // 보안실
    ["2309", generateStylizedLog(logContents.monitoringRoom)],
    // 공동 작업실
    ["2210", generateStylizedLog(logContents.commonWorkRoom)],
    // 전시관
    ["8702", generateStylizedLog(logContents.gallery)],
    // 개인작업실
    ["1101", generateStylizedLog(logContents.privateWorkRoom)],
  ]);

  log.innerHTML = codeMap.get(code) || "⚠️ 잘못된 번호입니다.";

}




// 관장실
// 22:10 유관장

// 보안실
// 22:10 김경비


// 공동 작업실
// 15:25 조수영
// 18:15 윤환 (조수영)
// 22:10 윤환 (조수영)

// 개인 작업실
// (15:30 조수영) 열려 있어서 기록 없음
// (15:45 윤환 (조수영 카드..?) / 유관장은 윤환 카드로 들어가서) 열려 있어서 기록 없음 (이 때 카드 바뀜)
// 22:13 마스터키
// 22:32 조수영 (윤환)
// 22:50 윤환 (조수영)

// 전시관
// 14:00 조수영
// 15:20 유관장
// 16:30 김경비
// 18:00 윤환 (조수영)
// 18:00 잠금 해제
// (22:25 조수영)
// (22:55 김경비)

