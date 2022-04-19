const character = ['warrior', 'knight', 'lancer', 'paladin', 'arcknight', 'reaper', 'berserker'];

let skill_tree = ['/skill1', '/skill2', '/skill3', '/skill4', '/skill5', '/skill6', '/skill7', '/skill8', '/skill9', '/skill10', '/skill11', '/skill12'];
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
                document.querySelectorAll('#skill_icons img')[i].src = "icons/" + character[0] + skill_tree[i] + ".png";
                document.querySelectorAll('#skill_icons img')[i].id = character[0] + skill_tree[i];
            }
            skill_name = ["횡베기", '', '', '', '', '', '', '', '', '', '', ''];
            // skill_description = [];
            break;
        case character[1]:
            for (let i = 0; i < 12; i++){
                document.querySelectorAll('#skill_icons img')[i].src = "icons/" + character[1] + skill_tree[i] + ".png";
                document.querySelectorAll('#skill_icons img')[i].id = character[1] + skill_tree[i];
            }
            // skill_name = [];
            // skill_description = [];
            break;
        case character[2]:
            for (let i = 0; i < 12; i++){
                document.querySelectorAll('#skill_icons img')[i].src = "icons/" + character[2] + skill_tree[i] + ".png";
                document.querySelectorAll('#skill_icons img')[i].id = character[2] + skill_tree[i];
            }
            // skill_name = [];
            // skill_description = [];
            break;
        case character[3]:
            for (let i = 0; i < 12; i++){
                document.querySelectorAll('#skill_icons img')[i].src = "icons/" + character[3] + skill_tree[i] + ".png";
                document.querySelectorAll('#skill_icons img')[i].id = character[3] + skill_tree[i];
            }
            // skill_name = [];
            // skill_description = [];
            break;
        case character[4]:
            for (let i = 0; i < 12; i++){
                document.querySelectorAll('#skill_icons img')[i].src = "icons/" + character[4] + skill_tree[i] + ".png";
                document.querySelectorAll('#skill_icons img')[i].id = character[4] + skill_tree[i];
            }
            // skill_name = [];
            // skill_description = [];
            break;
        case character[5]:
            for (let i = 0; i < 12; i++){
                document.querySelectorAll('#skill_icons img')[i].src = "icons/" + character[5] + skill_tree[i] + ".png";
                document.querySelectorAll('#skill_icons img')[i].id = character[5] + skill_tree[i];
            }
            // skill_name = [];
            // skill_description = [];
            break;
        case character[6]:
            for (let i = 0; i < 12; i++){
                document.querySelectorAll('#skill_icons img')[i].src = "icons/" + character[6] + skill_tree[i] + ".png";
                document.querySelectorAll('#skill_icons img')[i].id = character[6] + skill_tree[i];
            }
            // skill_name = [];
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

function skill_desc(){
    for (let i = 0; i < 12; i++) {
        document.querySelector("#skill_description h2").innerHTML = skill_name[i];
        document.querySelector("#skill_description span").innerHTML = skill_description[i];
    }
}