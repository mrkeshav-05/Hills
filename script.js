let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll',() => {
  let value = window.scrollY;

  text.style.marginTop = value * 2.5 + 'px';
  leaf.style.top = value * -1.5 + 'px';
  leaf.style.left = value * 1.5 + 'px';
  hill5.style.left = value * 1.5 + 'px';
  hill4.style.left = value * -1.5 + 'px';
  hill1.style.top = value * 1 + 'px';

})

document.addEventListener('DOMContentLoaded', function () {
  const sparks = [];
  const numSparks = 30;
  const sparkSize = 3;

  for (let i = 0; i < numSparks; i++) {
    const spark = createSpark();
    sparks.push(spark);
    document.body.appendChild(spark);
  }

  function createSpark() {
    const spark = document.createElement('div');
    spark.classList.add('spark');
    return spark;
  }

  document.addEventListener('mousemove', function (e) {
    const mouseX = e.pageX;
    const mouseY = e.pageY;

    for (let i = 0; i < numSparks; i++) {
      const spark = sparks[i];
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 10 + 3;
      const burstX = mouseX + Math.cos(angle) * speed;
      const burstY = mouseY + Math.sin(angle) * speed;

      spark.style.left = burstX + 'px';
      spark.style.top = burstY + 'px';

      const fadeOutTime = Math.random() * 500 + 500; // Random fade out time between 500ms and 1000ms
      spark.style.opacity = 1;
      setTimeout(() => {
        spark.style.opacity = 0;
      }, fadeOutTime);
    }
  });
});
