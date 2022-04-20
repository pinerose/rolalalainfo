const character = ['warrior', 'knight', 'lancer', 'paladin', 'arcknight', 'reaper', 'berserker'];

let skill_tree = ['skill1', 'skill2', 'skill3', 'skill4', 'skill5', 'skill6', 'skill7', 'skill8', 'skill9', 'skill10', 'skill11', 'skill12'];
let present_char = '';
let skill_name = new Array(12);
let skill_description = new Array(12);

/*
choose_char > 어떤 캐릭터를 볼 것인지 설정
set_tree > choose_char 하부, 해당 캐릭터의 스킬 이미지 불러오기
skill_desc > 스킬 아이콘을 눌렀을 때 해당 스킬의 설명 나타내기/감추기
*/

function set_tree() {
    switch (present_char){
        case character[0]:
            for (let i = 0; i < 12; i++){
                document.querySelectorAll('#skill_icons img')[i].src = "icons/" + character[0] + skill_tree[i] + ".jpg";
                document.querySelectorAll('#skill_icons img')[i].id = character[0] + skill_tree[i];
            }
            skill_name = ["횡베기", '타오르는 투지', '약점 노리기', '가드 브레이크', '카운터 디펜스', '침착한 대응', '전력 방어', '데들리 스트라이크', '전투 회복', '악식', '생존 기술', '포식'];
            skill_description = [
                "<span>공격 타입: 광역</span> <span>행동력: 1</span> <br> 적 전체에게 6~10의 피해를 줍니다.", 
                "<span>공격 타입: 패시브</span> <span>행동력: 패시브</span> <br> 적을 처치하면 1의 행동력을 얻습니다.", 
                "<span>공격 타입: 단일</span> <span>행동력: 2</span> <br> 단일 적 유닛에게 10~15의 방어 무시 피해를 입히고 <br> 1의 출혈을 부여합니다. 사거리 2.", 
                "<span>공격 타입: 패시브</span> <span>행동력: 패시브</span> <br> 상대의 방어도와 철갑을 모두 파괴했을 때, <br> 해당 적 유닛에게 2의 무기력과 1의 무방비를 부여합니다.", 
                "<span>공격 타입: 자버프</span> <span>행동력: 2</span> <br> 스스로 18의 방어도와 10의 반격을 얻습니다.", 
                "<span>공격 타입: 패시브</span> <span>행동력: 패시브</span> <br> 자신의 방어도와 철갑이 완전히 파괴되었을 때, <br> 1의 방어력을 얻습니다.", 
                "<span>공격 타입: 자버프</span> <span>행동력: 3</span> <br> 스스로 50의 방어도와 1의 공격력을 얻고, <br> 1의 방어력을 잃습니다.", 
                "<span>공격 타입: 단일</span> <span>행동력: 3</span> <br> 단일 적 유닛에게 48~56의 피해를 입힙니다. <br> 이 스킬로 적을 처치하면 1의 행동력을 반환받습니다.<br> 맨 앞 적 유닛에게만 사용 가능합니다.", 
                "<span>공격 타입: 패시브</span> <span>행동력: 패시브</span> <br> 전투가 종료되면 모든 아군 유닛이 <br> 최대 생명력의 12%의 생명력을 회복합니다.", 
                "<span>공격 타입: 단일</span> <span>행동력: 2</span> <br> 단일 적 유닛에게 10~14의 피해를 입힙니다. <br> 이 스킬로 적을 처치하면 15의 생명력을 회복합니다. 사거리 3.", 
                "<span>공격 타입: 패시브</span> <span>행동력: 패시브</span> <br> 전투 시작 시 1의 면역을 얻으며, <br> 영구적으로 플레이어의 공격력이 1, 최대 생명력이 10 증가합니다.", 
                "<span>공격 타입: 단일</span> <span>행동력: 2</span> <br> 단일 적 유닛에게 12~16의 피해를 입힙니다. <br> 이 스킬로 적을 처치하면 1sp를 얻습니다. 사거리 3."];
            break;
        case character[1]:
            for (let i = 0; i < 12; i++){
                document.querySelectorAll('#skill_icons img')[i].src = "icons/" + character[1] + skill_tree[i] + ".png";
                document.querySelectorAll('#skill_icons img')[i].id = character[1] + skill_tree[i];
            }
            // skill_name = ["", "", "", "", "", "", "", "", "", "", "", ""];
            // skill_description = [];
            break;
        case character[2]:
            for (let i = 0; i < 12; i++){
                document.querySelectorAll('#skill_icons img')[i].src = "icons/" + character[2] + skill_tree[i] + ".png";
                document.querySelectorAll('#skill_icons img')[i].id = character[2] + skill_tree[i];
            }
            skill_name = ["트리플 스탭", "깊이 찌르기", "준비 만전", "사우전드 드롭스", "전진 찌르기", "정면돌파", "투창", "아크로바틱", "회전 방어", "발경", "약점 강타", "혼신의 일격"];
            // skill_description = [];
            break;
        case character[3]:
            for (let i = 0; i < 12; i++){
                document.querySelectorAll('#skill_icons img')[i].src = "icons/" + character[3] + skill_tree[i] + ".png";
                document.querySelectorAll('#skill_icons img')[i].id = character[3] + skill_tree[i];
            }
            // skill_name = ["", "", "", "", "", "", "", "", "", "", "", ""];
            // skill_description = [];
            break;
        case character[4]:
            for (let i = 0; i < 12; i++){
                document.querySelectorAll('#skill_icons img')[i].src = "icons/" + character[4] + skill_tree[i] + ".png";
                document.querySelectorAll('#skill_icons img')[i].id = character[4] + skill_tree[i];
            }
            // skill_name = ["", "", "", "", "", "", "", "", "", "", "", ""];
            // skill_description = [];
            break;
        case character[5]:
            for (let i = 0; i < 12; i++){
                document.querySelectorAll('#skill_icons img')[i].src = "icons/" + character[5] + skill_tree[i] + ".png";
                document.querySelectorAll('#skill_icons img')[i].id = character[5] + skill_tree[i];
            }
            // skill_name = ["", "", "", "", "", "", "", "", "", "", "", ""];
            // skill_description = [];
            break;
        case character[6]:
            for (let i = 0; i < 12; i++){
                document.querySelectorAll('#skill_icons img')[i].src = "icons/" + character[6] + skill_tree[i] + ".png";
                document.querySelectorAll('#skill_icons img')[i].id = character[6] + skill_tree[i];
            }
            // skill_name = ["", "", "", "", "", "", "", "", "", "", "", ""];
            // skill_description = [];
            break;
    }
}

function choose_char(input){
    switch (input){
        case character[0]:
            present_char = character[0];
            set_tree();
            break;
        case character[1]:
            present_char = character[1];
            set_tree();
            break;
        case character[2]:
            present_char = character[2];
            set_tree();
            break;
        case character[3]:
            present_char = character[3];
            set_tree();
            break;
        case character[4]:
            present_char = character[4];
            set_tree();
            break;
        case character[5]:
            present_char = character[5];
            set_tree();
            break;
        case character[6]:
            present_char = character[6];
            set_tree();
            break;
       
    }
    if (document.querySelector('.hide').style.visibility == ''){
        for (i = 0; i < document.querySelectorAll('.hide').length; i++) {
            document.querySelectorAll('.hide')[i].style.visibility = 'visible';
        }
    }
}

function skill_desc(input){
    document.querySelector("#"+present_char+skill_tree[input]).style.border = "1px solid yellow";
    for (let x of document.querySelectorAll("#skill_icons img:not(#"+present_char+skill_tree[input]+")")) {
        x.style.border = "none";
    }
    document.querySelector("#skill_description h2").innerHTML = skill_name[input];
    document.querySelector("#skill_description p").innerHTML = skill_description[input];
}
