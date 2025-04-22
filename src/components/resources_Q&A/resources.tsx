import React from 'react';

function Resources() {
  const resourcesData = [
    { fileName: "The digital tools expert's manual", sizeType: "PDF | 2.5 MB", lastModified: "Yesterday" },
    { fileName: "The digital tools expert's manual", sizeType: "PDF | 2.5 MB", lastModified: "2 days ago" },
    { fileName: "The digital tools expert's manual", sizeType: "PDF | 2.5 MB", lastModified: "1 week ago" },
  ];

  return (
    <div className="resources-container">
      <div className="resources-button-container">
        <button className="resources-button active">Downloads</button>
        <button className="resources-button">External Links</button>
        <button className="resources-button">Templates & Worksheets</button>
      </div>

      <table className="resources-table">
        <thead>
          <tr>
            <th className="resources-table-header">File Name</th>
            <th className="resources-table-header">Size & Type</th>
            <th className="resources-table-header">Last Modified</th>
          </tr>
        </thead>
        <tbody>
          {resourcesData.map((item, index) => (
            <tr className="resources-table-row" key={index}>
              <td className="resources-table-data">{item.fileName}</td>
              <td className="resources-table-data">{item.sizeType}</td>
              <td className="resources-table-data">{item.lastModified}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Resources;