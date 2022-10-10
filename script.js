

gsap.from("#experience>.line",{
    width:"0%",
    duration:1.5,
    delay:.5
})
gsap.from("#digital>h1,#experience>h1,#experience>.line",{
    onStart:function(){
        $('#digital>h1,#experience>h1').textillate({ in: { effect: 'fadeIn' } });
    }
})

gsap.from("#page2>h3",{
    scrollTrigger:{
        trigger:"#page2",
        start:"top 70%",
        // markers:true,
        // scrub:.5,
        end:"bottom 50%"
    },
    opacity:0,
    y:50,
    skewY:2
})
gsap.from("#page3>h3,#page3>h1",{
    scrollTrigger:{
        trigger:"#page3",
        start:"top 70%",
        // markers:true,
        // scrub:.5,
        end:"bottom 50%"
    },
    opacity:0,
    y:50,
    skewY:2,
    stagger:{
        amount:1
    }
})
gsap.from("#cent>.card",{
    scrollTrigger:{
        trigger:"#page5",
        start:"top 5%",
        // markers:true,
        // scrub:.5,
        // end:"bottom 50%"
    },
   width:"0%",
   stagger:{
    amount:1
   }
})

gsap.from("#page7>h1",{
    scrollTrigger:{
        trigger:"#page7",
        start:"top top"
    },
    opacity:0,
    onStart:function(){
        $('#page7>h1').textillate({ in: { effect: 'fadeInUp' } });
    }
})
gsap.to("#digital",{
    scrollTrigger:{
        trigger:"#video",
        
       
        start:"top 70%",
        end:"bottom 50%",
        scrub:.5
    },
    opacity:0
    })
document.querySelector("#video")
.addEventListener("mousemove",function(dets){
    var dem = document.querySelector("#video").getBoundingClientRect()
    document.querySelector("#v").style.top = `${dets.clientY - dem.top}px`
    document.querySelector("#v").style.left = `${dets.clientX - dem.left}px`
    document.querySelector("#v").style.display = `flex`

    document.querySelector("#video")
.addEventListener("mouseleave",function(dets){
    var dem = document.querySelector("#video").getBoundingClientRect()
    document.querySelector("#v").style.top = `${dets.clientY - dem.top}px`
    document.querySelector("#v").style.left = `${dets.clientX - dem.left}px`
    document.querySelector("#v").style.display = `none`
})
})



document.querySelector("#o1")
.addEventListener("mouseover",function(){
    document.querySelector("#v1").style.display = `block`
})
document.querySelector("#o1")
.addEventListener("mouseleave",function(){
    document.querySelector("#v1").style.display = `none`
})
document.querySelector("#o2")
.addEventListener("mouseover",function(){
    document.querySelector("#v2").style.display = `block`
})
document.querySelector("#o2")
.addEventListener("mouseleave",function(){
    document.querySelector("#v2").style.display = `none`
})
document.querySelector("#o3")
.addEventListener("mouseover",function(){
    document.querySelector("#v3").style.display = `block`
})
document.querySelector("#o3")
.addEventListener("mouseleave",function(){
    document.querySelector("#v3").style.display = `none`
})
function swipe(){
 
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,

        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
          clickable: true,

        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
  
}
swipe()

document.querySelector("#swipe")
.addEventListener("mousemove",function(dets){
    var dem = document.querySelector("#swipe").getBoundingClientRect()
    document.querySelector("#drag").style.top = `${dets.clientY - dem.top}px`
    document.querySelector("#drag").style.left = `${dets.clientX - dem.left}px`
    document.querySelector("#drag").style.height = `130px`
    document.querySelector("#drag").style.width = `130px`
    document.querySelector("#drag").style.display = `flex`


    document.querySelector("#swipe")
.addEventListener("mouseleave",function(dets){
    var dem = document.querySelector("#swipe").getBoundingClientRect()
    document.querySelector("#drag").style.top = `${dets.clientY - dem.top}px`
    document.querySelector("#drag").style.left = `${dets.clientX - dem.left}px`
    document.querySelector("#drag").style.height = `0px`
    document.querySelector("#drag").style.width = `0px`
    document.querySelector("#drag").style.display = `none`

})
})






gsap.to("#image",{
    scrollTrigger:{
     
        trigger:"#page7",
        start:"top top",
        scrub:15,
        pin:true,

        // markers:true
    },
    top:"-300%",
    duration:5,
    ease:"SlowMo.ease"
})

document.querySelectorAll(".img").forEach(function(elem){

    elem.addEventListener("mousemove",function(dets){
        document.querySelector("#page7>h1").style.filter = `blur(8px)`
        document.querySelectorAll(".view").forEach(function(m){
            var d = elem.getBoundingClientRect()
            m.style.top = `${dets.clientY - d.top}px`
            m.style.left = `${dets.clientX - d.left}px`
          m.style.display = "flex"

        })
    
    
    elem.addEventListener("mouseleave",function(){
        document.querySelector("#page7>h1").style.filter = `blur(0px)`
        document.querySelectorAll(".view").forEach(function(m){
          m.style.display = "none"
        })
    })
    })
})

var tl = gsap.timeline()
tl.to("#all",{
    scrollTrigger:{
      
        trigger:"#page8",
        start:"top top",
        pin:true,
        scrub:1,
        // scroller:"#main"
       
    },
    top:"50%",
 
  

})

tl.to("#page8",{
    scrollTrigger:{

        trigger:"#all",
        start:"top 10%",
        scrub:.5,
       
        end:"bottom 40%",
        // scroller:"#main"

    },
    backgroundColor :`black`,
    color:"white"
})

tl.to("#at>.line",{
    scrollTrigger:{
       
        trigger:"#all",
        start:"top 10%",
        scrub:.5,
        
        end:"bottom 50%",
        // scroller:"#main"

    },
    backgroundColor :`white`,
    
})
tl.to("#all",{
    scrollTrigger:{
     
        trigger:"#all",
        start:"top 10%",
        scrub:.5,
        
        end:"bottom 50%",
        // scroller:"#main"

    },
    backgroundColor :`#dbff00`,
    color:"black"
    
})


