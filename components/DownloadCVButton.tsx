"use client";

export default function DownloadCVButton() {
  function donwloadCV() {
    // This is a dummy function to simulate a download action
    console.log("Downloading CV...");
  }

  return (
    <a download href="/static/james-graham-cv.pdf">
      <button className="gradient-lime text-black uppercase font-bold text-sm w-full py-1 mt-4">
        Download service record (PDF)
      </button>
    </a>
  );
}
