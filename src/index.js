import pdfjsLib from "@bundled-es-modules/pdfjs-dist";
pdfjsLib.GlobalWorkerOptions.workerSrc =
  "//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.2.228/pdf.worker.js";

/**
 * @param  {Object} page
 * @param  {Number} size
 * @return {String}
 */
const makeThumbnail = (page, size) => {
  // draw page to fit into input size canvas
  const desiredWidth = size;
  const viewPort = page.getViewport({ scale: 1 });

  const scale = desiredWidth / viewPort.width;
  const scaledViewport = page.getViewport({ scale: scale });

  const canvas = document.createElement("canvas");
  canvas.height = scaledViewport.height;
  canvas.width = scaledViewport.width;

  return page
    .render({
      canvasContext: canvas.getContext("2d"),
      viewport: scaledViewport,
    })
    .promise.then(function () {
      return canvas.toDataURL();
    });
};

/**
 * @param  {String} source
 * @param  {Number} size
 * @return {Array}
 */
export const generatePdfThumbnails = async (source, size) => {
  const pdfDocument = await pdfjsLib.getDocument({
    url: source,
  });

  const pages = [];
  while (pages.length < pdfDocument.numPages) pages.push(pages.length + 1);

  return Promise.all(
    pages.map((num) =>
      pdfDocument
        .getPage(num)
        .then((page) => makeThumbnail(page, size))
        .then((thumbnail) => ({
          page: num,
          thumbnail,
        }))
    )
  );
};

export default generatePdfThumbnails;
