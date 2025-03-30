
function checkLog() {
const input = document.getElementById('dateInput').value.trim();
	const log = document.getElementById('log');
	let entry = "";
	
	const logs = {
		"0305": { guard: "XXX", monitoring: true },
		"0306": { guard: "김경비", monitoring: false },
		"0307": { guard: "김경비", monitoring: false },
		"0308": { guard: "김경비", monitoring: false }
	};
	
	if (!/^[0-9]{4}$/.test(input)) {
		entry = "⚠️ 날짜를 입력하세요 (예시: 오늘인 경우, 0308)";
	} else if (/^(01|02)[0-9]{2}|030[0-4]$/.test(input)) {
		entry = `
			<div class='log-entry'>
				<strong>&lt;${input}&gt;</strong><br>
				- 야간 근무 담당자 : XXX<br>
				- CCTV 기록 : <span class='monitoring-status monitoring-yes'>정보 있음</span>
			</div>
		`;
	} else if (logs[input]) {
		entry = `
			<div class='log-entry'>
				<strong>&lt;${input}&gt;</strong><br>
				- 야간 근무 담당자 : ${logs[input].guard}<br>
				- CCTV 기록 : <span class='monitoring-status ${logs[input].monitoring ? "monitoring-yes" : "monitoring-no"}'>
					${logs[input].monitoring ? "정보 있음" : "정보 없음"}
				</span>
			</div>
		`;
	} else if (/^(03[1-9]|0[4-9]|1[0-2])[0-9]{2}$/.test(input)) {
		entry = "⚠️ 미래 날짜의 정보는 조회할 수 없습니다.";
	} else {
		entry = "⚠️ 해당 날짜의 정보가 없습니다.";
	}
	
	log.innerHTML = entry;
}
