gsap.from("#page1 #box",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360
    
})

gsap.from("#page2 #box",{
    //we don't know when user scroll so we use smooth scrolling!!!!!
    scale:0,
    duration:2,
    delay:1,
    rotate:360,
    scrollTrigger:"#page2 #box"
    
})
