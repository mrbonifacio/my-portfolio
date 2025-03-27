export const DownloadButton = () => {
    const handleDownload = () => {
        const pdfPath = "/curriculum-vitae.pdf"; // Certifique-se de que o arquivo está na pasta "public"
        const link = document.createElement("a");
        link.href = pdfPath;
        link.download = "curriculum-vitae.pdf"; // Nome do arquivo ao baixar
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button onClick={handleDownload} className="px-4 py-2 bg-gradient-to-r from-cyan-300 via-slate-500 to-blue-500 text-white rounded">
            Download Curriculum Vitae
        </button>
    );
};
