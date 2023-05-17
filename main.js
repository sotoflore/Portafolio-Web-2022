const downloadLink = document.getElementById('download-link');
  downloadLink.addEventListener('click', () => {
    const url = "./archivo/HV_Francisco-Soto.pdf";
    const filename = 'HV_Francisco-Soto-Flores.pdf';
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const blobUrl = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(blobUrl);
      })
      .catch(error => console.error(error));
  });
