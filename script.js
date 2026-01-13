gsap.to("#box1",{
    x:1200,
    duration:2,
    delay:1,
    rotate:360,
    backgroundColor:"blue",
    borderRadius:"50%",
    scale:0.5,
    repeat:-1,
    yoyo:"true"
    //repeat -1 for infite running
})


// gsap.from("#box2",{
//     x:1200,
//     duration:2,
//     delay:1,
//     borderRadius:"50%",
//     scale:0.5
// })

gsap.from("h1",{
    opacity:0,
    // x:1200,
    y:30,
    duration:2,
    delay:1,
    stagger:0.3,
})