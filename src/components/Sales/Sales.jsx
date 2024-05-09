import React, { useState } from 'react';
import { candidatesData } from '../../mockData.js';
import CandidateDetails from '../Candidate/CandidateDetails.jsx';

const Sales = () => {
  const [candidates] = useState(candidatesData);
  const [selectedCandidate, setSelectedCandidate] = useState(candidates[0]);

  const handleCandidateClick = (candidate) => {
    setSelectedCandidate(candidate);
  };

  const getScoreColor = (score) => {
    return score >= 50 ? 'green' : 'orange';
  };

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <div>
        <h4 style={{ marginTop: '10px', margin: "10px" }}>Pages/Assignment</h4>
        <div style={{
          border: '1px solid #CCCCCC',
          boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)',
          margin: '10px',
          padding: '20px',
          borderRadius: '8px',
          background: '#FFFFFF',
        }}>
          <div>
            <h4>Sales BDE</h4>
            <p>Assignment Link: {selectedCandidate.assignmentLink}</p>
            <p>Assignment Hour: {selectedCandidate.assignmentHour}</p>
            <p>Assignment Ends: {selectedCandidate.endHour}</p>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '30px', marginBottom: '10px' }}>
              <button style={{ color: "black" }}>To Review</button>
              <button style={{ color: "black" }}>SHORTLISTED</button>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: "10px" }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: "50px" }}>
              <h5 style={{ color: 'grey' }}>CANDIDATE</h5>
              <h5 style={{ color: 'grey' }}>SCORE</h5>
            </div>
            {candidates.map(candidate => (
              <div
                key={candidate.id}
                onClick={() => handleCandidateClick(candidate)}
                style={{
                  margin: '10px',
                  padding: '10px',
                  cursor: 'pointer',
                  backgroundColor: candidate.id === selectedCandidate.id ? '#f0f0f0' : '#ffffff'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>{candidate.name}</span>
                  <span style={{ color: getScoreColor(candidate.score) }}>{candidate.score}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Display CandidateDetails component beside Sales component */}
      <CandidateDetails candidate={selectedCandidate} />
    </div>
  );
};

export default Sales;