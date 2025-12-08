(function () {
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.inset = "0";
  overlay.style.background = "rgba(0,0,0,0.7)";
  overlay.style.zIndex = "999999";
  overlay.style.display = "flex";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";
  overlay.style.fontFamily = "Arial, sans-serif";
  overlay.style.color = "#fff";

  const box = document.createElement("div");
  box.style.padding = "20px";
  box.style.background = "#1f2937";
  box.style.borderRadius = "10px";
  box.style.boxShadow = "0 0 10px rgba(0,0,0,0.4)";
  box.style.textAlign = "center";

  box.innerHTML = `
    <h2>External JS Injected!</h2>
    <p>Reflected XSS confirmed on this page.</p>
    <p>(This is a safe PoC — no data collected)</p>
  `;

  overlay.appendChild(box);
  document.body.appendChild(overlay);
})();
