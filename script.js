async function saveFile() {
  const data = document.querySelector("textarea").value;
  const name = document.getElementById("fileName").value.trim();
  const type = document.getElementById("saveAs").value;
  
  if (data.trim() === "" || name === "") {
    alert("Please enter content in both the text area and file name field.");
    return;
  }

  let blob;

  switch (type) {
    case "text/plain":
    case "text/html":
    case "text/css":
    case "application/javascript":
    case "text/csv":
      blob = new Blob([data], { type: type });
      break;
      
    case "application/pdf":
      const { jsPDF } = window.jspdf;
      const pdfDoc = new jsPDF();
      pdfDoc.text(data, 10, 10);
      blob = pdfDoc.output("blob");
      break;
      
    case "application/vnd.ms-powerpoint":
      // Simple placeholder for unsupported PPT generation
      blob = new Blob([data], { type: "application/vnd.ms-powerpoint" });
      break;

    default:
      alert("Unsupported file format.");
      return;
  }

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = name;
  link.href = url;
  link.click();
}
