export default function Body() {
    const handleEnglishCV = () =>{
        window.open ('/cv_enlgish', '_blank');
};
    return (
        <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', margin: '50px auto', maxWidth: '800px', padding: '50px', backgroundColor: '#f5f5f5', borderRadius: '15px' }}>
        {/* Hero Section */}
        <div style={{ flex: '1', textAlign: 'center' }}>
            <img
                src="/renzo.jpg"
                alt="Profile"
                style={{ borderRadius: '50%', width: '250px', height: '250px', objectFit: 'cover', marginBottom: '10px' }}
                />
            <div>
                <a href="#" style={{margin: '0 5px'}}>
                    <img src="/linkedin.jpg" alt="LinkedIn" width= "20"/>
                </a>
            </div>
        </div>

        <div style={{ flex: '2', padding: '10px'}}>
            <h1 className="profile-card-name">
                Renzo Pellegrino </h1>

            <p style={{margin: '0px', padding: '0px', textAlign: 'left', fontSize: '15px'}}>
            Bringing your ideas to light.</p>

            <ul style={{ listStyle: 'none', padding: '10px', lineHeight: '1.8'}}>
                <li><strong>Address:</strong>   105 rue denault, Kirkland, PQ</li>
                <li><strong>Email:</strong>     renzopel@hotmail.com</li>
                <li><strong>Phone:</strong>     (514) 653-1619</li>
                </ul>  

            <div style={{marginTop: '20px'}}>
                <button
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#ffffff',
                        color: '#0073e6',
                        border: '2px solid #ffffff',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        marginRight: '10px',
                    }}>
                
                    Download CV (English)
                </button>
                <button
                    //onClick={handleFrenchCV}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#ffffff',
                        color: '#0073e6',
                        border: '2px solid #ffffff',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    Download CV (French)
                </button>
            </div>
        </div>
    </section>    
    );
}