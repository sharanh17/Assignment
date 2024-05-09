import React from 'react';

const CandidateDetails = ({ candidate }) => {
  const renderScoreBar = (score) => {
    const filledWidth = `${(score / 10) * 80}%`; // Decreased width
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '80px', // Decreased width
          height: '15px', // Decreased height
          borderRadius: '5px',
          overflow: 'hidden',
          background: '#E0E0E0',
          marginLeft:'100px',
          
        }}
      >
        <div
          style={{
            width: filledWidth,
            height: '100%',
            background: score > 5 ? 'green' : 'orange',
          }}
        />
      </div>
    );
  };

  return (
    <div style={{display:'flex', border: '1px solid #CCCCCC',
    boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)',
    margin: '10px',
    padding: '20px',
    borderRadius: '8px',
    background: '#FFFFFF',gap:'20px',marginTop:"38px"}}>
    <div>
      <div style={{display:'flex',margin:'10px',gap:'10px',marginTop:'40px',}}>
      <img
        src={candidate.image}
        alt={candidate.name}
        style={{ width: '70px', height: 'auto',borderRadius:'10px'}} 
      />
      <h4 style={{marginTop:"50px"}}>{candidate.name}</h4>
      <h2 style={{marginLeft:"50px",marginTop:"50px", color:'green'}}>{candidate.score}</h2>
      </div>
      {/* Display scores out of 10 for each aspect */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p style={{ marginRight: '10px' }}>Behavioural:</p>
          {renderScoreBar(candidate.behavioralScore)}
          <p style={{ marginLeft: '10px' }}>{candidate.behavioralScore}/10</p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p style={{ marginRight: '10px' }}>Communication:</p>
          {renderScoreBar(candidate.communicationScore)}
          <p style={{ marginLeft: '10px' }}>{candidate.communicationScore}/10</p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p style={{ marginRight: '10px' }}>Situation Handling:</p>
          {renderScoreBar(candidate.situationHandlingScore)}
          <p style={{ marginLeft: '10px' }}>{candidate.situationHandlingScore}/10</p>
        </div>
        <div>
            <h3>About</h3>
            <p>{candidate.about}</p>
            <h3>Experience</h3>
            <p>{candidate.experience}</p>
            <h3>Hobbies</h3>
            <p>{candidate.hobbies}</p>
            <h3>Introduction</h3>
            <p>{candidate.introduction}</p>
        </div>
      </div>
      
      
      {/* Add more details as needed */}
    </div>
    <img
        src={candidate.image}
        alt={candidate.name}
        style={{ width: '400px', height: 'auto',borderRadius:'10px'}} 
      />
    </div>
  );
};

export default CandidateDetails;
