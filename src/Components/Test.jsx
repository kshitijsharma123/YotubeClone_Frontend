import { useRef, useState } from "react";
import ReactCrop, {
  centerCrop,
  convertToPixelCrop,
  makeAspectCrop,
} from "react-image-crop";
import setCanvasPreview from "../utils/setCanvasPreview";
function Test() {
  const [imgSrc, setImgSrc] = useState("");
  const [crop, setCrop] = useState();
  const [error, setError] = useState();
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);

  const ASPECT_RATIO = 1;
  const MIN_DIMENSION = 150;

  const onSelectFile = (e) => {
    const file = e.target.files?.[0];
    
    if (!file) return;

    const reader = new FileReader();

    reader.addEventListener("load", () => {
      const imageElement = new Image();
      const imageURL = reader.result?.toString() || "";
      imageElement.src = imageURL;

      imageElement.addEventListener("load", (e) => {
        const { naturalWidth, naturalHeight } = e.currentTarget;
        if (naturalWidth < MIN_DIMENSION || naturalHeight < MIN_DIMENSION) {
          setError("Image must be aleast 150 x 150 pixels. ");
          return setImgSrc("");
        } else {
          setError(null);
        }
      });
      setImgSrc(imageURL);
    });
    reader.readAsDataURL(file);
  };

  const onImageLoad = (e) => {
    const { height, width } = e.currentTarget;
    const cropWidthInPercent = (MIN_DIMENSION / width) * 100;

    const crop = makeAspectCrop(
      {
        unit: "%",
        width: cropWidthInPercent,
      },
      ASPECT_RATIO,
      width,
      height
    );
    const centeredCrop = centerCrop(crop, width, height);
    setCrop(centeredCrop);
  };

  return (
    <>
      <div className="m-10 h-screen flex justify-center  text-white ">
        <label className="block mb-3 w-fit">
          <span className="m-3"> Choose</span>
          <input
            type="file"
            onChange={onSelectFile}
            accept="image/*"
            className="block w-full text-sm text-slate-500 file:mr-4 file::py-2
          file:rounded-full file:border-0 file:text-xs file:bg-gray-700 file:text-sky-300 hover:file:bg-gray-600"
          />
        </label>
        {error && <p className=" text-red-600">{error}</p>}
        {imgSrc && (
          <div className="flex flex-col items-center">
            <ReactCrop
              crop={crop}
              onChange={(percentCrop) => {
                setCrop(percentCrop);
              }}
              circularCrop
              keepSelection
              aspect={ASPECT_RATIO}
              minWidth={MIN_DIMENSION}
            >
              <img
                ref={imgRef}
                src={imgSrc}
                alt="Image"
                style={{ maxHeight: "70vh" }}
                onLoad={onImageLoad}
              />
            </ReactCrop>
            <button
              className="text-white font-mono h-10 w-40 text-xs py-2 px-4 rounded-2xl mt-4 bg-sky-500 hover:bg-sky-600"
              onClick={() => {
                setCanvasPreview(
                  imgRef.current, // HTMLImageElement
                  previewCanvasRef.current, // HTMLCanvasElement
                  convertToPixelCrop(
                    crop,
                    imgRef.current.width,
                    imgRef.current.height
                  )
                );
              }}
            >
              Crop Image
            </button>
          </div>
        )}
        {crop && (
          <canvas
            ref={previewCanvasRef}
            className="mt-4"
            style={{
              display: "block",
              border: "1px solid black",
              objectFit: "contain",
              width: 150,
              height: 150,
            }}
          ></canvas>
        )}
      </div>
    </>
  );
}

export default Test;
