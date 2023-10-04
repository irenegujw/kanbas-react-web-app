import KanbasNavigation from "../../KanbasNavigation/KanbasNavigation.js";
import CourseNavigation from "../CourseNavigation/CourseNavigation.js";

function Grades(){
  return`
  <div class="wd-flex-row-container" >
    
    <div class="wd-bg-color-black">
      ${KanbasNavigation()}
    </div>

    <div id="Course Navigation">
      ${CourseNavigation("grades")}
    </div>

    <div id="Main Part">
      <div>
        <select id="s1">
          <option value="na">N/A</option>
          <option selected value="Gradebook">Gradebook</option>
        </select>
        <button type="button">Import</button>
        <select id="s2">
          <option value="na">N/A</option>
          <option selected value="Export">Export</option>
        </select>
        <button type="button">Configure</button>
      </div>

      <h3>Student Names</h3>
      <input type="text"
        id="student-name-search"
        placeholder="Search Stuedents"/>
      <h3>Assignment Names</h3>
      <input type="text"
        id="assignment-name-search"
        placeholder="Search Assignments"/><br/>
      <button class="mt-20" type="button">Apply Filters</button>

      <div class="table-responsive">
        <table class="table" border="1" width="100%">
          <thead>
            <tr>
                <th>Student Name</th>
                <th>A1 SETUP</br>Out of 100</th>
                <th>A2 HTML</br>Out of 100</th>
                <th>A3 CSS</br>Out of 100</th>
                <th>A4 BOOTSTRAP</br>Out of 100</th>
                <th>A4 BOOTSTRAP</br>Out of 100</th>
                <th>A5 PHP</br>Out of 100</th>
                <th>A6 React</br>Out of 100</th>
                <th>A7 Node</br>Out of 100</th>
                <th>A8 Express</br>Out of 100</th>
                <th>A9 MongoDB</br>Out of 100</th>
                <th>A10 Express</br>Out of 100</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td class="grade">100</td>
              <td class="grade">99</td>
              <td class="grade">85</td>
              <td class="grade">120</td>
            </tr>

            <tr>
              <td>Adam Smith</td>
              <td class="grade">0</td>
              <td><input type="text"
                class="text-input"
                id="grade-input"
                placeholder="0"/><br/></td>
              <td class="grade">30</td>
              <td class="grade">0</td>
            </tr>

            <tr>
              <td>Margaret Edwards</td>
              <td class="grade">100</td>
              <td class="grade">95</td>
              <td class="grade">100</td>
              <td class="grade">100</td>
            </tr>

            <tr>
              <td>Mary Anne</td>
              <td class="grade">100</td>
              <td class="grade">0</td>
              <td><input type="text"
                class="text-input"
                id="grade-input"
                placeholder="0"/><br/></td>
              <td class="grade">0</td>
            </tr>

          </tbody>

        </table>
      </div>
    </div>

  </div>

`;}

export default Grades;