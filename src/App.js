import { useEffect } from "react"
import "./App.scss"
import $ from 'jquery'

function App() {
  useEffect(() => {
    //select all checkboxes
    $("#select_all").change(function () {
      //"select all" change
      $(".checkbox").prop("checked", $(this).prop("checked")) //change all ".checkbox" checked status
    })

    $(".checkbox").change(function () {
      //".checkbox" change
      //uncheck "select all", if one of the listed checkbox item is unchecked
      if (false === $(this).prop("checked")) {
        //if this item is unchecked
        $("#select_all").prop("checked", $(this).prop("checked")) //change "select all" checked status to false
      }
      //check "select all" if all checkbox item are checked
      if ($(".checkbox:checked").length === $(".checkbox").length) {
        $("#select_all").prop("checked", true)
      }
    })
  }, [])
  return (
    <div className='App'>
      <ul>
        {/* <!-- First topic here --> */}
        <li>
          <input type='checkbox' id='select_all' /> Main Point is here
        </li>
        <li>
          <input class='checkbox' type='checkbox' name='check[]' />
          Subpoint 1
        </li>
        <li>
          <input class='checkbox' type='checkbox' name='check[]' />
          Subpoint 2
        </li>
        <li>
          <input class='checkbox' type='checkbox' name='check[]' />
          Subpoint 3
        </li>
      </ul>

      <ul>
        {/* <!-- Second topic here --> */}
        {/* <li>
          <input type='checkbox' id='select_all' /> 2nd Main Point is here
        </li> */}
        <li>
          <input class='checkbox' type='checkbox' name='check[]' />
          Subpoint 1
        </li>
        <li>
          <input class='checkbox' type='checkbox' name='check[]' />
          Subpoint 2
        </li>
        <li>
          <input class='checkbox' type='checkbox' name='check[]' />
          Subpoint 3
        </li>
      </ul>
    </div>
  )
}

export default App
