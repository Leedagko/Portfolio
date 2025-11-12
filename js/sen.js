$(document).ready(function(){
  let ww=$(window).width();
  let wh=$(window).height();
  
  // 1. 스크롤 이벤트 영역 시작
  scr();
  function scr(){
    $('.page').css({
      height:wh
    })
    if(ww<=1097){
      $('.pro_smi_box').each(function(i){
        a=$('.pro_smi_box').eq(i).find('.pro_right_box');
        b=$('.pro_smi_box').eq(i).find('.pro_certer_box');
        a.insertBefore(b);
      })
    } // 모바일 버전 객체 순서 변경
    else if(ww>1097 && ww<=1920){
      $('.pro_smi_box').each(function(i){
        a=$('.pro_smi_box').eq(i).find('.pro_certer_box');
        b=$('.pro_smi_box').eq(i).find('.pro_right_box');
        a.insertBefore(b);
      })
    } // pc 버전 객체 순서 원래대로 변경
  }

  $(window).on('resize',function(){
    ww=$(window).width();
    wh=$(window).height();
    scr();
    changImg();
  }) // 사이즈 변경될 때마다 크기값 받아오면서 진행 시작

  // 스크롤 이벤트 (통합)
  $(window).on("scroll", function(){
      let sct=$(this).scrollTop();
      let sk_top=$('.ski_top_box');
      let ski_tool_box=$('.ski_down_box');
      $(".page").each(function(i){
        if(i === 0){
          $(this).css("top", 0);
        }
        else{
          let page_start=(i - 1) * wh; 
          let page_end=i * wh;
          let page_top=0;
          if(sct >= page_start && sct < page_end){
            let page_trans=(sct - page_start) / wh;
            page_top=(1 - page_trans) * 100;
              if(page_start===wh*2){
                  sk_top.find('.le_to_cen, .rig_to_cen').addClass('move_to');
                  ski_tool_box.find('.bown_top').addClass('ski_tool_move');
              }
          }else if(sct >= page_end){
            page_top=0; 
          }else{
            page_top=100;
          }
          $(this).css("top",`${page_top}vh`);
        }
      })
    })

  // 모바일 ↔ pc 이미지 교체
  function changImg(){
    if(ww<=1097){
      $('#mo_audi_img').attr('src','./img/mo_audi.PNG' );
    }else{
      $('#mo_audi_img').attr('src','./img/audi.png' );
    }
  }changImg();


  // 2. pc_메뉴바 영역
    // 메뉴바 CLOSE 버튼 숨기고 MENU 버튼만 나오게 진행
    $('.toggle_open').show();
    $('.close_but').hide();

    // MENU 클릭 시 CLOSE 버튼 변환 및 menu_in_box 전체 나오게 하기
    $('.toggle_open').click(function(){
        $('.menu_in_box').addClass('tab')
        $(this).hide()                
        $('.close_but').show()
        $('.close_but').css({
            border:'0.116vw solid #333',
            borderRadius:35
        })
        $('.menu_bg').css({
            display:'block',
            opacity: 0.6,
            backgroundColor: '#000000'
        })
    })

    // CLOSE 클릭 시 MENU 버튼 변환 및 menu_in_box 전체 숨기기
    $('.close_but').click(function(){
        $('.menu_in_box').removeClass('tab');
        $(this).hide()
        $('.toggle_open').show() 
    })


  // 2-1. 각 메뉴 클릭 시, 해당 영역 이동
  $('.sub_menu').on('click',function(e){
      e.preventDefault();
      i=$(this).index();
      $('html, body').animate({
          scrollTop: wh*i
      },500);
  })


}) // end


    