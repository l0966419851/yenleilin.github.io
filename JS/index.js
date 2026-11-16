document.addEventListener("mousemove", (e) => {
  const layers = document.querySelectorAll(".parallax-layer");
  const x = e.clientX / window.innerWidth - 0.5;
  const y = e.clientY / window.innerHeight - 0.5;

  layers.forEach((layer) => {
    const speed = layer.getAttribute("data-speed");

    // 【修改這裡】將原本的 -x 乘上更大的倍數（例如從 1 改成 2.5 或 3）
    const moveX = -x * speed * 3;

    // 上下移動幅度也可以同步放大
    const moveY = -y * (speed * 0.5) * 2.5;

    layer.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
  });
});
