/* Pouls — pulse de latence, barres uptime, bascule tarifs */
(function () {
  "use strict";
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- reveals ---------- */
  var reveals = document.querySelectorAll("[data-reveal]");
  if (reduce || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ---------- barres uptime ---------- */
  // index → petites anomalies (indice 2 = base de données, "Lent")
  var faults = { "0": {}, "1": { "26": "warn" }, "2": { "22": "warn", "24": "warn", "27": "down", "28": "warn" }, "3": {} };
  document.querySelectorAll(".bars").forEach(function (host) {
    var idx = host.getAttribute("data-bars");
    var f = faults[idx] || {};
    for (var i = 0; i < 30; i++) {
      var seg = document.createElement("i");
      if (f[i]) seg.className = f[i];
      host.appendChild(seg);
    }
  });

  /* ---------- pulse de latence (live) ---------- */
  var line = document.getElementById("pulseLine");
  var dot = document.getElementById("pulseDot");
  var latVal = document.getElementById("latVal");
  if (line) {
    var W = 320, H = 70, N = 46, step = W / (N - 1);
    var vals = [];
    // amorce : bruit bas + quelques pics
    var tick = 0;
    function nextVal() {
      tick++;
      var base = 0.18 + Math.sin(tick * 0.7) * 0.05 + (Math.abs(Math.sin(tick * 2.3)) * 0.08);
      // pic périodique ~ toutes les 7-9 mesures
      if (tick % 8 === 0) base = 0.72 + (tick % 3) * 0.06;
      else if (tick % 8 === 1) base = 0.34;
      return Math.max(0.08, Math.min(0.92, base));
    }
    for (var i = 0; i < N; i++) vals.push(nextVal());

    function y(v) { return (H - 8 - v * (H - 20)).toFixed(1); }
    function draw() {
      var pts = "";
      for (var i = 0; i < N; i++) pts += (i * step).toFixed(1) + "," + y(vals[i]) + " ";
      line.setAttribute("points", pts.trim());
      dot.setAttribute("cx", (W).toFixed(1));
      dot.setAttribute("cy", y(vals[N - 1]));
      if (latVal) latVal.textContent = Math.round(90 + vals[N - 1] * 180);
    }
    draw();

    if (!reduce) {
      setInterval(function () {
        vals.shift(); vals.push(nextVal());
        draw();
      }, 460);
    }
  }

  /* ---------- bascule tarifs mensuel / annuel ---------- */
  var bm = document.getElementById("billMonthly");
  var by = document.getElementById("billYearly");
  var amounts = document.querySelectorAll(".amount");
  function setBilling(mode) {
    var yearly = mode === "y";
    amounts.forEach(function (a) {
      a.textContent = a.getAttribute(yearly ? "data-y" : "data-m");
    });
    bm.classList.toggle("is-active", !yearly);
    by.classList.toggle("is-active", yearly);
    bm.setAttribute("aria-pressed", String(!yearly));
    by.setAttribute("aria-pressed", String(yearly));
  }
  if (bm && by) {
    bm.addEventListener("click", function () { setBilling("m"); });
    by.addEventListener("click", function () { setBilling("y"); });
  }
})();
