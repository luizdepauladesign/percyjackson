gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText);

ScrollSmoother.create({
    smooth: 1.5,
    effects: true
})

gsap.from(".Hero", {
    opacity: 0,
    duration: 2
})

gsap.utils.toArray(".Hero .bg2").forEach((img, i) => {
  gsap.from(img, {
    y: 90 * (i + 1),
    duration: 1.5,
    ease: "power3.out"
  });
});

gsap.utils.toArray(".Hero .bg1").forEach((img, i) => {
  gsap.from(img, {
    y: -50 * (i + 1),
    duration: 1.5,
    ease: "power3.out"
  });
});

gsap.from(".cards", {
    opacity: 0,
    duration: 6,
    y: -70,
    filter: "blur(5px)",
    stagger: .3,
    scrollTrigger: {   // ✅ correto
        trigger: ".cards",
        start: "0% 70%",
        end: "100% 70%",
        scrub: true
    }
});

gsap.from("footer", {
    y: "-40%",
    immediateRender: false,
    scrollTrigger: {
        trigger: "footer",
        scrub: true,
        invalidateOnRefresh: true,
        end: "100% 100%"
    }

})

const split = SplitText.create(".texto1",{
  type: "lines, words, chars",
  mask: "lines"
});

gsap.from(split.chars,{
  y: 40,
  opacity: 0,
  duration: .3,
  stagger: .03,
})

const grupoTextoSplit = document.querySelectorAll(".titulosessao");

grupoTextoSplit.forEach((textoUnicoSplit) => {
  const split = SplitText.create(textoUnicoSplit, {
  type: "lines, words, chars",
  mask: "lines",
});

gsap.from(split.chars, {
  y: 40,
  opacity: 0,
  duration: .3,
  stagger: 0.03,
  scrollTrigger: {
    trigger: textoUnicoSplit,
    start: "0% 80%",
    end: "100% 70%",
  }
})

})