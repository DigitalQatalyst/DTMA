

function Resources() {
  const resourcesData = [
    { fileName: "The digital tools expert's manual", sizeType: "PDF | 2.5 MB", lastModified: "Yesterday" },
    { fileName: "The digital tools expert's manual", sizeType: "PDF | 2.5 MB", lastModified: "2 days ago" },
    { fileName: "The digital tools expert's manual", sizeType: "PDF | 2.5 MB", lastModified: "1 week ago" },
    // Add more resource items
  ];

  return (
    <div>
      {/* Other page content */}
      <Resources resource={resourcesData} />
    </div>
  );
}

export default Resources;