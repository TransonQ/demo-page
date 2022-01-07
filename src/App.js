import { jsPDF } from "jspdf"
// import "jspdf-autotable"
import "./NotoSansCJKtc-Regular-normal"

function App() {
  const download = () => {
    const doc = new jsPDF()
    doc.setFont("NotoSansCJKtc-Regular") // 设置中文字体
    doc.text("Hello world! 中文付款清单", 30, 10)
    // doc.autoPrint();
    

    doc.save("a4.pdf")
    //  head: [["表头一", "表头二"]],
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
