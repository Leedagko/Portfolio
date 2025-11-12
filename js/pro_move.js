// 1-1.화살표 클릭 시, project_te 내용 이동
const mo_box_te= document.querySelector('.move_te');

// te 버튼 클릭 이동
const te_le=document.querySelector('.te_le');
const te_rig=document.querySelector('.te_rig');

// te 프로젝트 버튼 연계
const smi_tes=mo_box_te.children.length;
const ma_box_te=document.querySelector('.mask_te');
let full_ma_te=ma_box_te.getBoundingClientRect();
let full_ma_te_wid=full_ma_te.width;

let smi_te=document.querySelectorAll('.smi_te');

// 사이즈 변경될 때마다 크기값 받아오기
function smi_te_re(){
    full_ma_te=ma_box_te.getBoundingClientRect();
    full_ma_te_wid=full_ma_te.width;
    for(let i=0;i<smi_te.length;i++){
        let el=smi_te[i];
        el.style.width=full_ma_te_wid+"px";
    }
}
smi_te_re();

// te 버튼 클릭 시 증가 및 감소 (무한대 진행)
te_rig.addEventListener('click',function(){
    full_ma_te=ma_box_cr.getBoundingClientRect(); // 반응형 진행을 위한 리사이즈 진행 (전역함수)
    full_ma_te_wid=full_ma_te.width; // 반응형 진행을 위한 리사이즈 진행 (전역함수)
    mo_box_te.style.left=`-${full_ma_te_wid}px`;
    mo_box_te.style.transition='0.7s';
    mo_box_te.addEventListener("transitionend",function active(){ // active 삽입 이유 : 무브 박스의 움직임 진행
        mo_box_te.style.transition='none'; // 왼쪽의 당겨지는 값 0으로 초기화 진행
        mo_box_te.style.left=0;
        mo_box_te.appendChild(mo_box_te.firstElementChild); // 마지막 위치에 이동된 무브박스 추가 
        mo_box_te.removeEventListener("transitionend",active)
    })
})

te_le.addEventListener('click',function(){
    full_ma_te=ma_box_cr.getBoundingClientRect();
    full_ma_te_wid=full_ma_te.width;
    mo_box_te.insertBefore(mo_box_te.lastElementChild,mo_box_te.firstElementChild);
    mo_box_te.style.transition='none';
    mo_box_te.style.left=`-${full_ma_te_wid}px`;
    requestAnimationFrame(()=>{
        mo_box_te.style.transition="0.7s";
        mo_box_te.style.left="0px";
    }) // 함수 재호출 (재귀함수) 
})


// 1-2.화살표 클릭 시, project_cr 내용 이동
const mo_box_cr= document.querySelector('.move_cr');

// cr 버튼 클릭 이동
const cr_le=document.querySelector('.cr_le');
const cr_rig=document.querySelector('.cr_rig')

// cr 프로젝트 버튼 연계
const smi_crs=mo_box_cr.children.length;
const ma_box_cr=document.querySelector('.mask_cr');
let full_ma_cr=ma_box_cr.getBoundingClientRect();
let full_ma_cr_wid=full_ma_cr.width;

let smi_cr=document.querySelectorAll('.smi_cr');

// 사이즈 변경될 때마다 크기값 받아오기
function smi_cr_re(){
    full_ma_cr=ma_box_cr.getBoundingClientRect();
    full_ma_cr_wid=full_ma_cr.width;
    for(let i=0;i<smi_cr.length;i++){
        let el=smi_cr[i];
        el.style.width=full_ma_cr_wid+"px";
    }
}
smi_cr_re();

// cr 버튼 클릭 시 증가 및 감소 (무한대 진행)
cr_rig.addEventListener('click',function(){
    full_ma_cr=ma_box_cr.getBoundingClientRect();
    full_ma_cr_wid=full_ma_cr.width; 
    mo_box_cr.style.left=`-${full_ma_cr_wid}px`;
    mo_box_cr.style.transition='0.7s';
    mo_box_cr.addEventListener("transitionend",function active(){ 
        mo_box_cr.style.transition='none';
        mo_box_cr.style.left=0;
        mo_box_cr.appendChild(mo_box_cr.firstElementChild);
        mo_box_cr.removeEventListener("transitionend",active)
    })
})

cr_le.addEventListener('click',function(){
    full_ma_cr=ma_box_cr.getBoundingClientRect();
    full_ma_cr_wid=full_ma_cr.width;
    mo_box_cr.insertBefore(mo_box_cr.lastElementChild,mo_box_cr.firstElementChild);
    mo_box_cr.style.transition='none';
    mo_box_cr.style.left=`-${full_ma_cr_wid}px`;
    requestAnimationFrame(()=>{
        mo_box_cr.style.transition="0.7s";
        mo_box_cr.style.left="0px";
    }) 
})


// smi_te_re, smi_cr_re 리사이징
window.addEventListener('resize',function(){
    smi_te_re();
    smi_cr_re();
})


// 2. 각 버튼 링크 이동 (추후 링크 교체 예정)
// 아우디 웹사이트
function cli_web_aubi(){
    window.open('https://ssamsweb.com/250522/team2/audi/','_blank');
}

// 몽글 웹사이트
function cli_web_ex(){
    window.open('http://ssamsweb.com/250522/team3/monggle/index.html','_blank');
}

// 하이부산 웹사이트
function cli_web_hi(){
    window.open('https://ssamsweb.com/250522/pro/hi/','_blank');
}

// 창신대 리뉴얼
function cli_web_chan(){
    window.open('#','_blank');
}

// 웹툰소개 리뉴얼
function cli_web_web(){
    window.open('http://ssamsweb.com/250522/ldk/webtoonR/index.html','_blank');
}

// 사복과 리뉴얼
function cli_web_soci(){
    window.open('#','_blank');
}

// 유교과 리뉴얼
function cli_web_yoou(){
    window.open('#','_blank');
}

// 웹툰과 모바일 리뉴얼
function cli_web_mo_web(){
    window.open('#','_blank');
}

// 크리과 모바일 기존사이트
function cli_exi_mo_cre(){
    window.open('#','_blank');
}

// 크리과 모바일 리뉴얼
function cli_web_mo_cre(){
    window.open('#','_blank');
}

// 인스타그램 이동
function inst_qr(){
    window.open('https://www.instagram.com/cheon_h_k?igsh=ZjBsOHpmbHN0M2Rq','_blank');
}

// 카카오톡 이동
function kakao_qr(){
    window.open('http://qr.kakao.com/talk/CxPJ3m67hLinytPrwl7sVj2jHVs-','_blank');
}

// 버튼 준비중 안내창 (파일 전면 교체 후 삭제 예정)
const prepBut=document.querySelectorAll(".prepbut");

if(prepBut.length>0){
    prepBut.forEach(but=>{
        but.addEventListener("click",(e)=>{
            // onclick 속성 제거 → 안내창 띄우기 위한 영역
            but.removeAttribute("onclick")
            e.preventDefault();
            alert("현재 준비중입니다.")
        })
    })
}
else{
    console.error("prepbut 클래스를 찾을 수 없습니다.");
}