import { jsPDF } from "jspdf"
import 'jspdf-autotable'
import './NotoSansCJKtc-Regular-normal'

function App() {
  const download = () => {
    const doc = new jsPDF()
    doc.setFont("NotoSansCJKtc-Regular");
    doc.text("Hello world! 中文付款清单", 30, 10)
    doc.save("a4.pdf")
    // doc.autoPrint();
  }

  return (
    <>
      <div id='demo'>
        <h1>hello</h1>
      </div>
      <button onClick={download}>下载</button>
    </>
  )
}

export default App
