import React from 'react';

const HireMe = () => (
    <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Hire Me</h1>
        <p>You can download my resume and cover letter below:</p>
        <div style={{ marginBottom: '20px' }}>
            <a href="Portfolio_Website\myportfolio\public\Simrat Kaur_ServiceDeskIntern_Resume 3.pdf" download="Simrat Kaur_ServiceDeskIntern_Resume 3.pdf">
                <button style={{ padding: '10px 20px', margin: '10px', cursor: 'pointer', backgroundColor: '#fff', color: '#000', border: '2px solid #000' }}>
                    Download Resume
                </button>
            </a>
        </div>
        <div>
            <a href="/cover_letter.pdf" download="Simrat_Kaur_Cover_Letter.pdf">
                <button style={{ padding: '10px 20px', margin: '10px', cursor: 'pointer', backgroundColor: '#fff', color: '#000', border: '2px solid #000' }}>
                    Download Cover Letter
                </button>
            </a>
        </div>
    </div>
);

export default HireMe;
