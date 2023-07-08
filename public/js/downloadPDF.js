window.onload = function () {
  document.getElementById("downloadPDF").addEventListener("click", () => {
    const content = this.document.getElementById("content");
    var config = {
      margin: 0.5,
      filename: "vietphongdev.pdf",
      image: { type: "jpeg", quality: 0.98 },
      pagebreak: { avoid: ["tr", "pre", "li"] },
      html2canvas: { scale: 2, dpi: 192, letterRendering: true },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().from(content).set(config).save();
  });
};
