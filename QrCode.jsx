import {useState} from "react"
export const QrCode = () => {
  const [img,setImg] = useState("");
  const [loading,setloading] = useState(false);
  const [qrData,setqrData] = useState("https://www.instagram.com/im_shyam_44/");
  const [qrSize,setqrSize] = useState("150");
  async function generateQR(){
    setloading(true);
    try{
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
      setImg(url);
    }
    catch(error){
      console.error("Error Generating QR Code",error);
    }
    finally{ 
      setloading(false);
    }
  }
  function downloadQR(){
    fetch(img)
    .then((response)=>response.blob())
    .then((blob)=>{
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "qrcode.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    })
    .catch((error) =>{
      console.error("Error Generating QR Code",error);
    });
    }
  return (
    <div className="app-container">
      <h1>QR CODE GENERATOR</h1>
     {loading && <p>Please Wait....</p>}                       
      {img && <img src={img} className="Qr-code-image"/>}

      <div>
        <label htmlFor="dataInput" className="input-label">
           Data for QR code:
        </label>
        <input type="text" value={qrData} id="dataInput" placeholder="Enter data for QR code" onChange={(e)=>setqrData(e.target.value)}/>
        <label htmlFor="sizeInput" className="input-label">
           Image size (e.g.,150):
        </label>
        <input type="text" value={qrSize} id="sizeInput" placeholder="Enter image size" onChange={(e)=>setqrSize(e.target.value)}/>
        <button className="generate-button" disabled={loading} onClick={generateQR}>Generate QR Code</button>
        <button className="download-button" onClick={downloadQR}>Download QR Code</button>

      </div>
      <p className="footer">
        Designed by<a href="https://www.instagram.com/im_shyam_44/"> Shyam
        </a></p>
    </div>
  )
}
  