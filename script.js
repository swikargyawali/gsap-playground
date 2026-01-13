// gsap.to("#box1",{
//     x:1290,
//     duration:1.5,
//     delay:1,
//     rotate:360,
//     backgroundColor:"blue",
//     borderRadius:"50%",
//     scale:0.5,
//     // repeat:-1,
//     // yoyo:"true"
//     //repeat -1 for infite running
// })


// gsap.to("#box2",{
//     x:1290,
//     rotate:360,
//     duration:1.5,
//     delay:2.5,
//     backgroundColor:"yellow",
//     borderRadius:"50%",
//     scale:0.5
// })

// gsap.to("#box3",{
//     x:1290,
//     duration:1.5,
//     delay:4,
//     rotate:360,
//     backgroundColor:"purple",
//     scale:0.5,
//     borderRadius:"50%"
// })

// gsap.from("h1",{
//     opacity:0,
//     // x:1200,
//     y:30,
//     duration:2,
//     delay:1,
//     stagger:0.3,
// })



var tl=gsap.timeline()

tl.to("#box1",{
    x:1500,
    duration:1.5,
    delay:1,
    rotate:360,
    scale:0.5,
    borderRadius:"50%",
    backgroundColor:"yellow"

})