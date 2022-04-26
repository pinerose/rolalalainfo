const character = ['warrior', 'knight', 'lancer', 'paladin', 'arcknight', 'reaper', 'berserker'];

let skill_tree = ['skill1', 'skill2', 'skill3', 'skill4', 'skill5', 'skill6', 'skill7', 'skill8', 'skill9', 'skill10', 'skill11', 'skill12', 'skill13', 'skill14', 'skill15', 'skill16', 'skill17'];

let present_char = '';

let skill_name = new Array(17);

let skill_description = new Array(17);
// 최소딜, 최대딜
let skill_fig1 = new Array (17);
let skill_fig2 = new Array (17);
// 방어도
let skill_fig3 = new Array (17);
// 반격
let skill_fig4 = new Array (17);

// 스킬 데미지에 영향 미치는 효과들
let attack_power = 0;
let added_damageY = 0;
let added_damageN = 0;
let added_damage_once = 0;
let added_damageE = 0;
let upgrade = 0;
let ad_upgrade = 0;
let critical = 0;
let relic_crit = 0;
let drill = 0;
let defenseless = 0;
let reduce_damage = 0;

function set_figure(){
        if (attack_power < -5) {
            alert("공격력은 5보다 작을 수 없습니다.");
            document.getElementById("attack_power").value = -5;
            attack_power = -5;
        } else {
            attack_power = document.getElementById("attack_power").value.replace(/\<|\>|\"|\'|\%|\;|\(|\)|\&|\+/g,"");
            attack_power = parseInt(attack_power.replace(/\:javascript|&#x3A;|&#x6A;|&#x61;|&#x76;|&#x61;|&#x73;|&#x63;|&#x72;|&#x69;|&#x70;|&#x74;/gi, ""));
        }
        if (added_damageY < 0) {
            alert("연참은 0보다 작을 수 없습니다.");
            document.getElementById("added_damageY").value = 0;
            added_damageY = 0;
        } else {
            added_damageY = document.getElementById("added_damageY").value.replace(/\<|\>|\"|\'|\%|\;|\(|\)|\&|\+/g,"");
            added_damageY = parseInt(added_damageY.replace(/\:javascript|&#x3A;|&#x6A;|&#x61;|&#x76;|&#x61;|&#x73;|&#x63;|&#x72;|&#x69;|&#x70;|&#x74;/gi, ""));
        }
        if (added_damageN < 0) {
            alert("날카로움은 0보다 작을 수 없습니다.");
            document.getElementById("added_damageN").value = 0;
            added_damageN = 0;
        } else {
            added_damageN = document.getElementById("added_damageN").value.replace(/\<|\>|\"|\'|\%|\;|\(|\)|\&|\+/g,"");
            added_damageN = parseInt(added_damageN.replace(/\:javascript|&#x3A;|&#x6A;|&#x61;|&#x76;|&#x61;|&#x73;|&#x63;|&#x72;|&#x69;|&#x70;|&#x74;/gi, ""));
        }
        if (added_damage_once < 0) {
            alert("집중은 0보다 작을 수 없습니다.");
            document.getElementById("added_damage_once").value = 0;
            added_damage_once = 0;
        } else {
            added_damage_once = document.getElementById("added_damage_once").value.replace(/\<|\>|\"|\'|\%|\;|\(|\)|\&|\+/g,"");
            added_damage_once = parseInt(added_damage_once.replace(/\:javascript|&#x3A;|&#x6A;|&#x61;|&#x76;|&#x61;|&#x73;|&#x63;|&#x72;|&#x69;|&#x70;|&#x74;/gi, ""));
        }
        if (added_damageE < 0) {
            alert("상처는 0보다 작을 수 없습니다.");
            document.getElementById("added_damageE").value = 0;
            added_damageE = 0;
        } else {
            added_damageE = document.getElementById("added_damageE").value.replace(/\<|\>|\"|\'|\%|\;|\(|\)|\&|\+/g,"");
            added_damageE = parseInt(added_damageE.replace(/\:javascript|&#x3A;|&#x6A;|&#x61;|&#x76;|&#x61;|&#x73;|&#x63;|&#x72;|&#x69;|&#x70;|&#x74;/gi, ""));
        }

        for (let i = 0; i < 17; i++){
            if (skill_fig1[i] != ''){
                skill_fig1[i] = (skill_fig1[i]+ added_damageY + added_damageN + added_damage_once + added_damageE ) * ( 1 + attack_power * 0.1 + upgrade *0.25 + ad_upgrade * 0.5 + critical * 0.5 + relic_crit * 0.5 + drill * 0.2 + defenseless * 0.33 - reduce_damage * 0.34 )
                skill_fig1[i] = Math.floor(skill_fig1[i]);
            }
            if (skill_fig2[i] != ''){
                skill_fig2[i] = (skill_fig2[i]+added_damageY+added_damageN+added_damage_once+added_damageE) * (1+attack_power*0.1+upgrade*0.25+ad_upgrade*0.5+critical*0.5+relic_crit*0.5+drill*0.2+defenseless*0.33-reduce_damage*0.34)
                skill_fig2[i] = Math.floor(skill_fig2[i]);
            }
        }
}
/*

choose_char > 어떤 캐릭터를 볼 것인지 설정

set_tree > choose_char 하부, 해당 캐릭터의 스킬 이미지 불러오기

skill_desc > 스킬 아이콘을 눌렀을 때 해당 스킬의 설명 나타내기/감추기

*/



function set_tree() {

    switch (present_char){

        case character[0]:

            for (let i = 0; i < 17; i++){
                if (i < 15){
                    document.querySelectorAll('#skill_icons img')[i].src = `icons/${character[0]}/${skill_tree[i]}.jpg`;
                    document.querySelectorAll('#skill_icons img')[i].id = character[0] + skill_tree[i];
                } else {
                    document.querySelectorAll('#skill_icons img')[i].style.display = "none";
                }
            }
            
            skill_fig1 = [6, '', 10, '', '', '', '', 48, '', 10, '', 12, 11, '', 10, '', '']  // 최소데미지
            skill_fig2 = [10, '', 15, '', '', '', '', 56, '', 14, '', 16, 13, '', 16, '', ''] // 최대데미지
            skill_fig3 = ['', '', '', '', 18, '', 50, '', '', '', '', '', '', 8, '', '', ''] // 방어도
            skill_fig4 = ['', '' ,'', '', 10, '', '', '', '', '', '', '', '', '', '', '', ''] // 반격뎀

            set_figure();

            skill_name = ["횡베기", '타오르는 투지', '약점 노리기', '가드 브레이크', '카운터 디펜스', '침착한 대응', '전력 방어', '데들리 스트라이크', '전투 회복', '악식', '생존 기술', '포식', '공격', '방어', '더블 슬래시', '', ''];

            skill_description = [

                `<span>공격 타입: 광역</span> <span>행동력: 1</span> <br> 적 전체에게  ${skill_fig1[0]} ~ ${skill_fig2[0]} 의 피해를 줍니다.`, 

                "<span>공격 타입: 패시브</span> <span>행동력: 패시브</span> <br> 적을 처치하면 1의 행동력을 얻습니다.", 

                `<span>공격 타입: 단일</span> <span>행동력: 2</span> <br> 단일 적 유닛에게 ${skill_fig1[2]} ~ ${skill_fig2[2]}의 방어 무시 피해를 입히고 <br> 1의 출혈을 부여합니다. 사거리 2.`, 

                "<span>공격 타입: 패시브</span> <span>행동력: 패시브</span> <br> 상대의 방어도와 철갑을 모두 파괴했을 때, <br> 해당 적 유닛에게 2의 무기력과 1의 무방비를 부여합니다.", 

                `<span>공격 타입: 자버프</span> <span>행동력: 2</span> <br> 스스로 ${skill_fig3[4]}의 방어도와 ${skill_fig4[4]}의 반격을 얻습니다.`, 

                "<span>공격 타입: 패시브</span> <span>행동력: 패시브</span> <br> 자신의 방어도와 철갑이 완전히 파괴되었을 때, <br> 1의 방어력을 얻습니다.", 

                `<span>공격 타입: 자버프</span> <span>행동력: 3</span> <br> 스스로 ${skill_fig3[6]}의 방어도와 1의 공격력을 얻고, <br> 1의 방어력을 잃습니다.`, 

                `<span>공격 타입: 단일</span> <span>행동력: 3</span> <br> 단일 적 유닛에게 ${skill_fig1[7]} ~ ${skill_fig2[7]}의 피해를 입힙니다. <br> 이 스킬로 적을 처치하면 1의 행동력을 반환받습니다.<br> 맨 앞 적 유닛에게만 사용 가능합니다.`, 

                "<span>공격 타입: 패시브</span> <span>행동력: 패시브</span> <br> 전투가 종료되면 모든 아군 유닛이 <br> 최대 생명력의 12%의 생명력을 회복합니다.", 

                `<span>공격 타입: 단일</span> <span>행동력: 2</span> <br> 단일 적 유닛에게 ${skill_fig1[9]} ~ ${skill_fig2[9]}의 피해를 입힙니다. <br> 이 스킬로 적을 처치하면 15의 생명력을 회복합니다. 사거리 3.`, 

                "<span>공격 타입: 패시브</span> <span>행동력: 패시브</span> <br> 전투 시작 시 1의 면역을 얻으며, <br> 영구적으로 플레이어의 공격력이 1, 최대 생명력이 10 증가합니다.", 

                `<span>공격 타입: 단일</span> <span>행동력: 2</span> <br> 단일 적 유닛에게 ${skill_fig1[11]} ~ ${skill_fig2[11]}의 피해를 입힙니다. <br> 이 스킬로 적을 처치하면 1sp를 얻습니다. 사거리 3.`,
                
                `<span>공격 타입: 단일</span> <span>행동력: 1</span> <br> 단일 적 유닛에게 ${skill_fig1[12]} ~ ${skill_fig2[12]}의 피해를 입힙니다. 사거리 3.`,

                `<span>공격 타입: 자버프</span> <span>행동력: 1</span> <br> 스스로 ${skill_fig3[13]}의 방어도를 얻습니다.`,

                `<span>공격 타입: 단일</span> <span>행동력: 2</span> <br> 단일 적 유닛에게 ${skill_fig1[14]} ~ ${skill_fig2[14]}의 피해를 두 번 입힙니다. 사거리 2.`,
                '', ''
            ];

            break;

        case character[1]:

            for (let i = 0; i < 12; i++){

                document.querySelectorAll('#skill_icons img')[i].src = "icons/" + character[1] + "/" + skill_tree[i] + ".png";

                document.querySelectorAll('#skill_icons img')[i].id = character[1] + skill_tree[i];

            }

            // skill_name = ["", "", "", "", "", "", "", "", "", "", "", ""];

            // skill_description = [];

            break;

        case character[2]:

            for (let i = 0; i < 12; i++){

                document.querySelectorAll('#skill_icons img')[i].src = "icons/" + character[2] + "/" + skill_tree[i] + ".png";

                document.querySelectorAll('#skill_icons img')[i].id = character[2] + skill_tree[i];

            }

            skill_name = ["트리플 스탭", "깊이 찌르기", "준비 만전", "사우전드 드롭스", "전진 찌르기", "정면돌파", "투창", "아크로바틱", "회전 방어", "발경", "약점 강타", "혼신의 일격"];

            // skill_description = ["단일 적 대상에게 "+skill_fig1[0]+"~"+skill_fig2[0]+"의 데미지를 3번 입힙니다.",""];

            break;

        case character[3]:

            for (let i = 0; i < 12; i++){

                document.querySelectorAll('#skill_icons img')[i].src = "icons/" + character[3] + "/" + skill_tree[i] + ".png";

                document.querySelectorAll('#skill_icons img')[i].id = character[3] + skill_tree[i];

            }

            // skill_name = ["", "", "", "", "", "", "", "", "", "", "", ""];

            // skill_description = [];

            break;

        case character[4]:

            for (let i = 0; i < 12; i++){

                document.querySelectorAll('#skill_icons img')[i].src = "icons/" + character[4] + "/" + skill_tree[i] + ".png";

                document.querySelectorAll('#skill_icons img')[i].id = character[4] + skill_tree[i];

            }

            // skill_name = ["", "", "", "", "", "", "", "", "", "", "", ""];

            // skill_description = [];

            break;

        case character[5]:

            for (let i = 0; i < 12; i++){

                document.querySelectorAll('#skill_icons img')[i].src = "icons/" + character[5] + "/" + skill_tree[i] + ".png";

                document.querySelectorAll('#skill_icons img')[i].id = character[5] + skill_tree[i];

            }

            // skill_name = ["", "", "", "", "", "", "", "", "", "", "", ""];

            // skill_description = [];

            break;

        case character[6]:

            for (let i = 0; i < 12; i++){

                document.querySelectorAll('#skill_icons img')[i].src = "icons/" + character[6] + "/" + skill_tree[i] + ".png";

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
    document.querySelector("#"+present_char+skill_tree[input]).style.border = "4px solid yellow";
    for (let x of document.querySelectorAll("#skill_icons img:not(#"+present_char+skill_tree[input]+")")) {
        x.style.border = "none";
    }
    document.querySelector("#skill_description h2").innerHTML = skill_name[input];
    document.querySelector("#skill_description p").innerHTML = skill_description[input];
}

function on_off(input){
    switch (input){
        case "upgrade":
            if (document.getElementById("upgrade").style.backgroundColor == "lightblue") {
                upgrade = 0;
                document.getElementById("upgrade").style.backgroundColor = "lightgrey";
                document.getElementById("upgrade").value = "off";
            } else if (document.getElementById("upgrade").style.backgroundColor != "lightblue"){
                upgrade = 1;
                document.getElementById("upgrade").style.backgroundColor = "lightblue";
                document.getElementById("upgrade").value = "on";
            }
            break;
        case "ad_upgrade":
            if (document.getElementById("ad_upgrade").style.backgroundColor == "lightblue") {
                ad_upgrade = 0;
                document.getElementById("ad_upgrade").style.backgroundColor = "lightgrey";
                document.getElementById("ad_upgrade").value = "off";
            } else if (document.getElementById("ad_upgrade").style.backgroundColor != "lightblue"){
                ad_upgrade = 1;
                document.getElementById("ad_upgrade").style.backgroundColor = "lightblue";
                document.getElementById("ad_upgrade").value = "on";
            }
            break;
        case 'critical':
            if (document.getElementById("critical").style.backgroundColor == "lightblue") {
                critical = 0;
                document.getElementById("critical").style.backgroundColor = "lightgrey";
                document.getElementById("critical").value = "off";
            } else if (document.getElementById("critical").style.backgroundColor != "lightblue"){
                critical = 1;
                document.getElementById("critical").style.backgroundColor = "lightblue";
                document.getElementById("critical").value = "on";
            }
            break;
        case 'relic_crit':
            if (document.getElementById("relic_crit").style.backgroundColor == "lightblue") {
                relic_crit = 0;
                document.getElementById("relic_crit").style.backgroundColor = "lightgrey";
                document.getElementById("relic_crit").value = "off";
            } else if (document.getElementById("relic_crit").style.backgroundColor != "lightblue"){
                relic_crit = 1;
                document.getElementById("relic_crit").style.backgroundColor = "lightblue";
                document.getElementById("relic_crit").value = "on";
            }
            break;
        case 'drill':
            if (document.getElementById("drill").style.backgroundColor == "lightblue") {
                drill = 0;
                document.getElementById("drill").style.backgroundColor = "lightgrey";
                document.getElementById("drill").value = "off";
            } else if (document.getElementById("drill").style.backgroundColor != "lightblue"){
                drill = 1;
                document.getElementById("drill").style.backgroundColor = "lightblue";
                document.getElementById("drill").value = "on";
            }
            break;
        case 'defenseless':
            if (document.getElementById("defenseless").style.backgroundColor == "lightblue") {
                defenseless = 0;
                document.getElementById("defenseless").style.backgroundColor = "lightgrey";
                document.getElementById("defenseless").value = "off";
            } else if (document.getElementById("defenseless").style.backgroundColor != "lightblue"){
                defenseless = 1;
                document.getElementById("defenseless").style.backgroundColor = "lightblue";
                document.getElementById("defenseless").value = "on";
            }
            break;
        case 'reduce_damage':
            if (document.getElementById("reduce_damage").style.backgroundColor == "lightblue") {
                reduce_damage = 0;
                document.getElementById("reduce_damage").style.backgroundColor = "lightgrey";
                document.getElementById("reduce_damage").value = "off";
            } else if (document.getElementById("reduce_damage").style.backgroundColor != "lightblue"){
                reduce_damage = 1;
                document.getElementById("reduce_damage").style.backgroundColor = "lightblue";
                document.getElementById("reduce_damage").value = "on";
            }
            break;
    }
    
}

