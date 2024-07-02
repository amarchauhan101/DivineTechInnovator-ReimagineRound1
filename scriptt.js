function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#mainmain"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the "#mainmain" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#mainmain", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#mainmain").style.transform ? "transform" : "fixed"
    });
    
    
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    
  }
  locomotive();
  
  
  
  
  var tl = gsap.timeline();
  
  tl.to(
    "#left",
    {
      left: "2vw",
      
      duration: "0.5s",
      transition: "all ease 0.2s",
      scrollTrigger: {
        trigger: "#nav #left",
        scroller: "body",
        start: "top 10%",
        
        end: "bottom 0%",
        scrub: true,
      },
    },
    "a"
  ).to(
    "#right",
    {
      right: "2vw",
      duration: "0.5s",
      transition: "all ease 0.2s",
      scrollTrigger: {
        trigger: "#nav #right",
        scroller: "#mainmain",
        start: "top 10%",
        end: "bottom 0%",
        scrub: true,
      },
    },
    "a"
  );
  
  gsap.to("#contain #cont", {
    x: "-1000",
    transition: "all ease 0.3s",
    scrollTrigger: {
      trigger: "#cont",
      scroller: "#mainmain",
      start: "top 30",
      end: "bottom 30",
      scrub: true,
  
    },
  });
  
  gsap.to("#page3 #scroll #text,#scroll .vertical,#scroll .vertical2,#scroll .vertical3", {
    x: "-420%",

    duration: 3000,
    transition:"all ease 0.5s",
    stagger: 2,
    scrollTrigger: {
      trigger: "#page3",
      scroller: "#mainmain",
      start: "top -14%",
      // opacity: 0,
      end: "bottom -100%",
      scrub: true,
      pin: true,
    },
  });
  
  
  
  
  // function scroller() {
  //   gsap.to("#page3 #scroll", {
  //     x: "-250",
  //     opacity: 1,
  //     ease: Power4,
  //     duration: 2000,
  //     scrollTrigger: {
  //       trigger: "#page3",
  //       scroller: "body",
  //       stagger: 0.8,
  //       scrub: 0.5,
  //       pin: true,
  //       start: "top top",
  //       end: "bottom top",
  //     },
  //   });
  // }
  // scroller();
  
  
  // gsap.to(".vertical #box1", {
  //   y: "-1000",
  //   transition: "all ease 0.3s",
  //   scrollTrigger: {
  //     trigger: ".vertical #box1",
  //     scroller: "#mainmain",
  //     start: "top 30",
  //     end: "bottom -30",
  //     scrub: true,
  //   },
  // });
  
  gsap.to(".vertical2 #box1", {
    y: "100",
    transition: "all ease 0.3s",
    scrollTrigger: {
      trigger: ".vertical2 #box1",
      scroller: "#mainmain",
      start: "top 30",
      end: "bottom -40",
      scrub: true,
    
    },
  });
  
  gsap.to(".vertical3 #box1", {
    y: "-1000",
    transition: "all ease 0.3s",
    scrollTrigger: {
      trigger: ".vertical3 #box1",
      scroller: "#mainmain",
      start: "top 30",
      end: "bottom -40",
      // opacity: "0",
      scrub: true,
    },
  });
  gsap.to(".vertical3 #box1", {
  
scrollTrigger:{
  trigger: ".vertical3 #box1",
  scroller: "#mainmain",
  
  
  scrub: true,
}
  ,
   opacity: 0,

    
  });
  gsap.to(".vertical2 #box1", {
  
    scrollTrigger:{
      trigger: ".vertical2 #box1",
      scroller: "#mainmain",
    
      
      
      scrub: true,
    }
      ,
       opacity: 0,
    
        
      });

      gsap.to(".vertical #box1", {
  
        scrollTrigger:{
          trigger: ".vertical #box1",
          scroller: "#mainmain",
          
          
          
          scrub: true,
        }
          ,
           opacity: 0,
        
            
          });
          gsap.to(".imh", {
  
            scrollTrigger:{
              trigger: ".vertical #box1",
              scroller: "#mainmain",
              
              
              
              scrub: true,
            }
              ,
               opacity: 0,
            
                
              });

              gsap.to("#text button", {
  
                scrollTrigger:{
                  trigger: ".vertical #box1",
                  scroller: "#mainmain",
                  
                  
                  
                  scrub: true,
                }
                  ,
                   opacity: 0,
                
                    
                  });
gsap.to("header",{
  
  
  y:-1000,
  duration:3,
  scrollTrigger:{
    trigger: ".vertical #box1",
    scroller: "#mainmain",
    top:"-5%",
    end:"buttom -50",
    
    scrub: true,
  }
})


gsap.to(".hero-text h1",{
  
  
  x:-1000,
  duration:3,
  scrollTrigger:{
    trigger: ".vertical #box1",
    scroller: "#mainmain",
    top:"-5%",
    end:"buttom -50",
    
    scrub: true,
  }
})

gsap.to(".hero-text p",{
  
  
  x:-1000,
  duration:3,
  scrollTrigger:{
    trigger: ".vertical #box1",
    scroller: "#mainmain",
    top:"-5%",
    end:"buttom -50",
    
    scrub: true,
  }
})


gsap.to(".hero-video",{
  
  
  x:1000,
  duration:3,
  scrollTrigger:{
    trigger: ".vertical #box1",
    scroller: "#mainmain",
    top:"-20%",
    end:"buttom -50",
    
    scrub: true,
  }
})                


gsap.to(".loader",{
  
  
  y:-10000,
  duration:100,
  opacity:0,

})                
