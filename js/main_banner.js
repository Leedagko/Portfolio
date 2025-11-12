const canvas=document.querySelector('canvas');
const ctx=canvas.getContext('2d');
const width_align=document.querySelector('.width_align');

// 크기값 변경 시, 원형 별무리 크기값 받아오기
function canvesRes(){
    width_align_w=width_align.getBoundingClientRect();

    canvas.width=width_align_w.width;
    canvas.height=window.innerHeight;

    cenX=canvas.width / 2;
    cenY=canvas.height / 2;
}
canvesRes();
window.addEventListener('resize',function(){
    canvesRes();
})

let collapse=false; // 마우스를 올렸을 때 별들이 중심으로 모이는 상태
let expanse=false;  // 클릭 시 별들이 퍼지는 상태

// 별 클래스
class Star{
    constructor(){
        this.baseRadius=Math.random() * 250 + 250; // 기본 거리
        this.radius=this.baseRadius;
        this.hoverRadius=Math.random() * 125 + 125; // 호버 시 더 가까운 거리
        this.expanseRadius=Math.random() * (canvas.width / 2); // 클릭 시 250 원형 사라지고, 중앙부터 퍼질 거리
        this.angle=Math.random() * Math.PI * 2; // 각도
        this.speed=(Math.random() * 0.012) + 0.0025; // 별 움직임 속도
        this.size=(Math.random() * 0.8) + 0.3; // 별 크기
        this.color=`rgba(255,255,255,${Math.random() * 0.8 + 0.1})`;

        this.x=cenX + Math.cos(this.angle) * this.radius;
        this.y=cenY + Math.sin(this.angle) * this.radius;
    }

    update(){
        this.angle+=this.speed;

        if(collapse && !expanse){
            // 마우스 호버 시 속도 및 크기 결정
            this.radius+=(this.hoverRadius - this.radius) * 0.1;
        }else if(expanse){
            // 클릭 시 퍼짐
            this.radius+=(this.expanseRadius - this.radius) * 0.03;
        }else{
            // 기본 회전 상태
            this.radius+=(this.baseRadius - this.radius) * 0.02;
        }

        this.x=cenX + Math.cos(this.angle) * this.radius;
        this.y=cenY + Math.sin(this.angle) * this.radius;
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle=this.color;
        ctx.fill();
    }
}

// 별 생성
const stars=[];
for (let i=0;i<3500;i++){
    stars.push(new Star());
}

// 호버 & 클릭 이벤트
const can_ce_hover=document.querySelector('.can_center');
can_ce_hover.addEventListener('mouseenter',()=>{
    if(!expanse) collapse = true;
});
can_ce_hover.addEventListener('mouseleave',()=>{
    if(!expanse) collapse = false;
});
can_ce_hover.addEventListener('click',function(){
    collapse=false;
    expanse=true;
    this.classList.add('cilck');

    stars.forEach(star => {
        star.radius=0
    })   
});


$(document).ready(function(){
    // neme_feda 글자 사라지고 neme_feda_click 글자 나타나게 진행_pc, tab 버전
    ww=$(window).width();
    if(ww<=1920 && ww>1097){
        $('.neme_feda').on('click',function(){
            $(this).fadeOut(800,function(){
                $('.neme_feda_click').fadeIn(800); 
            })
        })
    }
    // neme_feda_mo 글자 사라지고 neme_feda_click 글자 나타나게 진행_mobile 버전
    else if(ww<=1097){
        $('.neme_feda_mo').on('click',function(){
            $(this).fadeOut(800,function(){
                $('.neme_feda_click').fadeIn(800); 
            })
        })
    }
})


// 호버 시, 애니메이션 링 그리기
function drawHoverRing(){
    if (collapse && !expanse){
        ctx.save();
        ctx.strokeStyle='rgba(255,255,255,0.8)';
        ctx.lineWidth=0.5;

        // 회전 애니메이션 주기 위해 시간 기반 각도
        const time=Date.now() * 0.002;
        const radius=125; // 링 반지름
        const segments=125; // 링 조각 개수

        ctx.beginPath();
        for (let i=0;i<segments;i++){
            const angle=(i / segments) * Math.PI * 2 + time;
            const x=cenX + Math.cos(angle) * radius;
            const y=cenY + Math.sin(angle) * radius;
            ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
    }
}

// 애니메이션
function animation(){
    ctx.fillStyle="rgba(25,25,25, 0.4)";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    for(let star of stars){
        star.update();
        star.draw();
    }
    drawHoverRing();
    requestAnimationFrame(animation);
}
animation();