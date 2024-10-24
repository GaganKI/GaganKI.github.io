document.getElementById('view-resume').addEventListener('click', function() {
    // Download the resume file with correct path
    window.open("My Resume5.pdf", '_blank'); 
});

// You can place the 'download button' functionality here when showing the resume.
// After user clicks the download button in the resume viewer, the file can be downloaded.
document.getElementById('download-resume').addEventListener('click', function() {
    const link = document.createElement('a');
        // Replace this with the correct path to your resume
    link.href = 'My Resume5.pdf';  // Update with the actual path to your resume PDF
    link.download = 'Gagan_KI_Resume.pdf'; // Name of the downloaded file
    link.click();
    });
    