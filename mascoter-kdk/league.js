function generateMatchups(players) {
    var numPlayers = players.length;

    // 참가자 수가 6명 미만이거나 12명 초과일 경우 null 반환
    if (numPlayers < 6 || numPlayers > 12) {
        return null;
    }

    // 참가자를 섞음
    players.sort(function () {
        return 0.5 - Math.random();
    });

    // 두 번 이상 경기를 진행할 수 없는 파트너 관계를 저장하는 객체
    var partners = {};

    // 대진표 생성
    var matchups = [];

    // 각 라운드에서의 경기 수 계산
    var numRounds = Math.floor(numPlayers / 4);

    for (var round = 0; round < numRounds; round++) {
        // 해당 라운드의 경기들을 저장하는 배열
        var roundMatchups = [];

        // 남은 참가자들을 매칭
        while (players.length > 0) {
            // 각 게임마다 두 명의 선수 선택
            var player1 = players.pop();
            var player2 = null;

            // 남은 참가자들 중에서 유효한 파트너 선택
            for (var i = 0; i < players.length; i++) {
                var opponent = players[i];
                if (!partners[player1] || !partners[player1].includes(opponent)) {
                    player2 = opponent;
                    break;
                }
            }

            // 유효한 파트너가 없을 경우에는 대진표 생성 실패로 null 반환
            if (player2 === null) {
                return null;
            }

            // 경기 결과를 대진표에 추가
            roundMatchups.push([player1, player2]);

            // 파트너 관계 갱신
            partners[player1] = partners[player1] || [];
            partners[player2] = partners[player2] || [];
            partners[player1].push(player2);
            partners[player2].push(player1);

            // 모든 참가자가 같은 경기 수 만큼 경기를 했을 경우 종료
            if (partners[player1].length === numRounds) {
                break;
            }
        }

        // 해당 라운드의 경기들을 대진표에 추가
        matchups.push(roundMatchups);
    }

    return matchups;
}

// 테스트를 위해 6명에서 12명 사이의 랜덤한 참가자 수 생성
var numPlayers = Math.floor(Math.random() * (12 - 6 + 1)) + 6;
var players = [];
for (var i = 1; i <= numPlayers; i++) {
    players.push('Player ' + i);
}

// 대진표 생성
var matchups = generateMatchups(players);

// 대진표 출력
if (matchups !== null) {
    for (var round = 0; round < matchups.length; round++) {
        console.log('Round ' + (round + 1) + ':');
        for (var i = 0; i < matchups[round].length; i++) {
            var matchup = matchups[round][i];
            console.log(matchup[0] + ' vs ' + matchup[1]);
        }
        console.log();
    }
} else {
    console.log('대진표 생성 실패');
}
