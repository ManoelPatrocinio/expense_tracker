import { useState } from 'react';
import QrReader from 'react-qr-reader'
export function QRcode() {

    const [qrData, setQrData] = useState('');
    const [totalValue, setTotalValue] = useState<number>(0);
  
    const handleScan = (data:any) => {
      if (data) {
        setQrData(data);
  
        // Aqui você pode fazer o parsing do QR code para extrair o valor total
        const total = extrairValorTotal(data); // Função fictícia para extrair o valor total
        total && setTotalValue(total);
      }
    }
  
    const handleError = (err:Error) => {
      console.error(err);
    }
  
    // Função fictícia para extrair o valor total da NFC-e
    const extrairValorTotal = (qrData:any) => {
      // Lógica para extrair o valor total do QR code da NFC-e
      // Implemente de acordo com o formato de dados do QR code da NFC-e
      // Aqui, vou supor que o valor total está contido em algum lugar do QR code
      const valorTotal = qrData.match(/valorTotal:\s*(\d+(\.\d+)?)/i);
      return valorTotal ? parseFloat(valorTotal[1]) : null;
    }
  

    return (
        <div >
            <h1>Leitor de QR Code NFC-e</h1>
            <QrReader
                delay={300}
                onError={handleError}
                onScan={handleScan}
                style={{ width: '100%' }}
            />
            <p>Último QR code lido: {qrData}</p>
            {totalValue && <p>Valor Total da NFC-e: R$ {totalValue.toFixed(2)}</p>}
        </div>
    )
}