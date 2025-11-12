import React from "react";
import { FileText } from "lucide-react";

const CertificatesList = () => {
  const PdfFiles = [
    { name: "1- Liter Test Report", link: "https://nrichwater.com/wp-content/uploads/2025/08/NSR-1-lit-test-report.pdf" },
    { name: "2- Liter Test Report", link: "https://nrichwater.com/wp-content/uploads/2025/08/NSR-2-lit-test-report.pdf" },
    { name: "BIS Report", link: "https://nrichwater.com/wp-content/uploads/2025/08/NSR-3-lit-test-report.pdf" },
    { name: "Ground Water clearance", link: "https://nrichwater.com/wp-content/uploads/2025/08/NSR-4-lit-test-report.pdf" },
    { name: "500 ml Test Report", link: "https://nrichwater.com/wp-content/uploads/2025/08/NSR-5-lit-test-report.pdf" },
    { name: "250 ml Test Report", link: "https://nrichwater.com/wp-content/uploads/2025/08/NSR-6-lit-test-report.pdf" },
    { name: "BIS Report 2", link: "https://nrichwater.com/wp-content/uploads/2025/08/NSR-7-lit-test-report.pdf" },
    { name: "Report", link: "https://nrichwater.com/wp-content/uploads/2025/08/NSR-8-lit-test-report.pdf" },
  ];

  return (
    <div className="w-full flex justify-center py-10 bg-white">
      <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 gap-6">
        {PdfFiles.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 border-2 border-dashed border-[#145cab] rounded-3xl px-12 py-4 hover:bg-blue-50 transition-all duration-300"
          >
            <div className="bg-[#145cab] p-3 rounded-xl flex items-center justify-center">
              <FileText className="text-white w-6 h-6" />
            </div>
            <p className="font-bold text-[#145cab] text-lg">{item.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CertificatesList;
