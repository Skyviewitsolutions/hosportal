import React , {createRef,
  useEffect,
  useCallback,
  useRef,
  useState,} from "react";
import jsPDF from "jspdf";
import * as htmlToImage from "html-to-image";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";
import ScreenLoader from "../../elements/screenLoader/ScreenLoader";

const PodPdf = (props) => {

  const {getList , totalData , pageCount , data , arrayData} = props ;

  const [loading , setLoading] = useState(false);

  const printPdf = () =>{
    var printContents = document.getElementById("GFG").innerHTML;
			var originalContents = document.body.innerHTML;
			document.body.innerHTML = printContents;
			window.print();
			document.body.innerHTML = originalContents;
  }

  const pdfImg = useRef();

  const exportPdf = async () =>{
    setLoading(true)
    const pdf = new jsPDF();
    var img1 = await toPng(pdfImg.current, { cacheBust: true }).then(
      (dataUrl) => {
         const link = document.createElement("a");
        var imgWidth = 200;
        var pageHeight = "100%";
        var imgHeight = "100%";
        link.download = "nupco.png";
        link.href = dataUrl;
        var imgs = link.href;   
        pdf.addImage(imgs, "PNG", 0, 15 , 200 , 100);
        // pdf.addImage(imgs, "JPEG" );
      }
      
    );
    pdf.save("AdvancedShipping.pdf");
    setLoading(false)
  }

  return (
    <div className="asnpdfCont" id='GFG' ref={pdfImg}>
    <div className="asnHeadBack"> </div>
    <div className="asnPdfTitle">
      <h4>Proof Of Delivery</h4>
      <h3>400034 - Salehiya Trading Co.</h3>
    </div>

    {data  && 
      <div className="asnpdfBox">
        <div className="asnPdfBox1">
          <div className="asnPdfBoxRow">
            <h6>ASN ID</h6>
            <span>: </span>
            <span>{data.asn_id}</span>
          </div>
          <div className="asnPdfBoxRow">
            <h6>Ship To</h6>
            <span>: </span>
            <span>{data.ship_to}</span>
          </div>
          <div className="asnPdfBoxRow">
            <h6>Pallet Count</h6>
            <span>: </span>
            <span>{data.pallet_count}</span>
          </div>
          <div className="asnPdfBoxRow">
            <h6>Supplier Contact Name</h6>
            <span>: </span>
            <span>{data.name}</span>
          </div>
          <div className="asnPdfBoxRow">
            <h6>Supplier Contact Email</h6>
            <span>: </span>
            <span>{data.email}</span>
          </div>
        </div>
        <div className="asnPdfBox1">
          <div className="asnPdfBoxRow">
            <h6>Delivery Date</h6>
            <span>: </span>
            <span>{data.delivery_date}</span>
          </div>
          <div className="asnPdfBoxRow">
            <h6>Delivery Time</h6>
            <span>: </span>
            <span>{data.delivery_time}</span>
          </div>
          <div className="asnPdfBoxRow">
            <h6>Header Text</h6>
            <span>: </span>
            <span>{data.header_text}</span>
          </div>
          <div className="asnPdfBoxRow">
            <h6>Status</h6>
            <span>: </span>
            <span>{data.status}</span>
          </div>
        </div>
      </div>
}

    {/* here we are adding table */}
    <table className="asnpdfTable" >
      <tr>
        <th>Delete</th>
        <th>Po Item No</th>
        <th>Nupco Code</th>
        <th>Nupco Trade Code</th>
        <th>Nupco Material Description</th>
        <th>Delivery Qty</th>
        <th>Storage Type</th>
        <th>Invoice No</th>
        <th>Pallet Count</th>
        <th>Batch Qty</th>
        <th>Batch Number</th>
        <th>Manufacture Date</th>
        <th>Expiry Date</th>
        <th>Item Text</th>
      </tr>
      {arrayData && 
        arrayData.map((item,index) =>{
          return(<>
        <tr>
          <td></td>
          <td>{item.nupco_po_no}</td>
          <td>{item.nupco_material}</td>
          <td>{item.trade_code}</td>
          <td>{item.nupco_material_description}</td>
          <td>{item.delivery_qty}</td>
          <td>{item.str_type}</td>
          <td>{item.invoice_no}</td>
          <td>{item.pallet_count}</td>
          <td>{item.delivery_qty}</td>
          <td>{item.batch_no}</td>
          <td>{item.mfg_date}</td>
          <td>{item.expiry_date}</td>
          <td>{item.item_text}</td>
        </tr>
        </>)
        })
       }
    </table>

    <div className="anspdfBtn" style={{height : "60px"}}>
        <button onClick={exportPdf}>Export Pdf</button>
        <button onClick={printPdf}>Print</button>
    </div>

    {loading && <ScreenLoader/>}
  </div>
  )
}

export default PodPdf