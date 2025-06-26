import React from "react";

const Resources = () => {
  return (
    <div>
      <div className="resourcecontainer">
        <h1 className="playerheading">Resources</h1>

        <div className="resourcebuttons">
          <div>
            <button className="activebtn">Downloads</button>
          </div>
          <div>
            <button className="inactive">External Links</button>
          </div>
          <div>
            <button className="inactive">Templates and Worksheets</button>
          </div>
        </div>

        {/* file like table */}
        <div className="filesrepo">
          <table className="filestable">
            <thead>
              <tr>
                <th scope="col">File Name</th>
                <th scope="col">Size & Type</th>
                <th scope="col">Last Modified</th>
              </tr>
            </thead>
            <tbody className="tablebody">
              <tr>
                <td>Digital tools</td>
                <td>PDF|2.5MB</td>
                <td>Yesterday</td>
              </tr>
              <tr>
                <td>Digital tools</td>
                <td>PDF|2.5MB</td>
                <td>Yesterday</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Resources;
