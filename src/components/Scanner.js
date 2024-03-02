import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";

function Scanner() {
  const [scanResult, setScanResult] = useState(null);

  useEffect(() => {
    let scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });

    function onScanSuccess(result) {
      // scanner.clear();
      setScanResult(result);
    }

    function onScanFailure(err) {
      console.warn(err);
    }

    scanner.render(onScanSuccess, onScanFailure);
  }, []);

  return (
    <div>
      { scanResult ? <div id="result"> Success: <a href={scanResult}>{scanResult}</a> </div> : <div id="reader" width="600px"></div> }
    </div>
  );
}

export default Scanner;
