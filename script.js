function saveFile() {
  let data = document.querySelector("textarea");
  let name = document.getElementById("fileName").value;
  let type = document.getElementById("saveAs").value;
  let blob;

  if (data.value.trim() === "" || name.trim() === "") {
    alert("Please enter content in both the text area and file name field.");
    return;
  }

  switch (type) {
    case "text/plain":
      blob = new Blob([data.value], { type: type });
      break;
    case "text/html":
      blob = new Blob([data.value], { type: type });
      break;
    case "text/css":
      blob = new Blob([data.value], { type: type });
      break;
    case "application/javascript":
      blob = new Blob([data.value], { type: type });
      break;
    case "application/pdf":
      blob = new Blob([data.value], { type: type });
      break;
    case "application/vnd.ms-powerpoint":
      blob = new Blob([data.value], { type: type });
      break;
    case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
      blob = new Blob([data.value], { type: type });
      break;
    case "text/csv":
      blob = new Blob([data.value], { type: type });
      break;
    default:
      console.log("Unsupported file format.");
      return;
  }

  let url = URL.createObjectURL(blob);
  let link = document.createElement("a");
  link.download = name;
  link.href = url;
  link.click();
}
