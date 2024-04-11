import "./developers.css";

const Developers = () => {
    return (
        <div className='dev-cont'>
            <div style={{ fontWeight: 700, color: '#fff', marginBottom: '10px', marginTop: '10px' }}>Made by</div>
            <div className="dev">
            <div className='developers'>
                <a href="https://github.com/Himanshukabra22">
                    <img className='developers-img' src="https://avatars.githubusercontent.com/u/69944810?v=4" alt="himanshu profile" />
                </a>
                <div className='developers-name'>Himanshu Kabra</div>
            </div>
            <div className='developers'>
                <a href="https://github.com/Antriksh1305">
                    <img className='developers-img' src="https://avatars.githubusercontent.com/u/100402656?v=4" alt="antriksh profile" />
                </a>
                <div className='developers-name'>Antriksh Gupta</div>
            </div>
            </div>
        </div>
    )
};

export default Developers;