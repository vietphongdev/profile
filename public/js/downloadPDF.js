window.onload = function () {
  document.getElementById("downloadPDF").addEventListener("click", () => {
    const content = this.document.getElementById("content");
    var config = {
      margin: 0.5,
      filename: "khuong_viet_phong_cv.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().from(content).set(config).save();
  });
};
