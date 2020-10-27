function runAnimations() {
  gsap
    .timeline()
    .from(".hello2", { yPercent: 100, scale: 2, duration: 1 })
    .from(
      ".hello1",
      {
        rotationZ: 90,
        scale: 3,
        duration: 1,
        transformOrigin: "left bottom",
      },
      0
    )
    .to(".hello2", {
      rotation: -90,
    })
    .from(
      ".hello3",
      {
        scale: 1.2,
        rotationX: -100,
        duration: 2,
        ease: "power3.out",
        y: 250,
      },
      0
    )
    .from(
      ".broj1",
      {
        opacity: 0,
        duration: 2.5,
        y: 50,
        ease: "power3.out",
      },
      1
    )
    .from(
      ".broj2",
      {
        opacity: 0,
        duration: 2.5,
        y: -50,
        ease: "power3.out",
      },
      1
    );
  gsap
    .timeline()
    .from(".slika1", { yPercent: 100, duration: 1, scale: 1.3, opacity: 0 }, 0)
    .from(".slika2", { yPercent: 100, duration: 1, scale: 1.3, opacity: 0 }, 0)
    .from(".slika3", { yPercent: 100, duration: 1, scale: 1.3, opacity: 0 }, 0)
    .from(".slika4", { yPercent: 100, duration: 1, scale: 1.3, opacity: 0 }, 0);

  document.querySelector(".disappear").addEventListener("click", function () {
    disappear(".disappear");
  });
}

runAnimations();

function disappear(selector) {
  return gsap.timeline().to(selector, {
    duration: 0.5,
    scale: 1,
    rotationZ: 90,
    ease: "power1.out",
  });
}

function appear(selector) {
  return gsap.timeline().fromTo(
    selector,
    { scale: 0 },
    {
      duration: 0.5,
      scale: 1,
      rotationZ: 90,
      ease: "power1.out",
    }
  );
}
