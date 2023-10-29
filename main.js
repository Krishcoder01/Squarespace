var a = gsap.timeline()


a.from(".nav img , .nav h3 , .nav h4 , .nav button",{
    y:-100,
    duration:1,
    delay:0.3,
    opacity:0,
    stagger:0.2,
})
a.from(".main h1",{
    y:100,
    opacity:0,
    stagger:0.3,
})
a.from(".main>img",{
    scale:0,
    opacity:0,
    stagger:0.2,

})
a.from("h5",{
    scale:0,
    opacity:0,

})
a.to("h5",{
    y:30,
    repeat:-1,
    duration:0.7,
    yoyo:true

})
