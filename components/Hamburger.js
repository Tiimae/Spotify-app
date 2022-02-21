function Hamburger({isOpen}) {
    return (
        <>
            <div className={`hamburger`}>
                <div className="burger burger1"/>
                <div className="burger burger2"/>
                <div className="burger burger3"/>
            </div>

            <style jsx>{`
              .burger1 {
                transform: ${isOpen ? 'rotate(45deg)' : 'rotate(0)'};
              }
              
              .burger2 {
                transform: ${isOpen ? 'translateX(100%)' : 'translateX(0)'};
                opacity: ${isOpen ? 0 : 1};
              }
              
              .burger3 {
                transform: ${isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
              }

              .hamburger {
                background-color: ${isOpen ? 'black' : 'transparent'};
                position: absolute;
                width: ${isOpen ? '100%' : '3.3rem'};
                height: 2rem;
                display: flex;
                justify-content: space-around;
                flex-flow: column nowrap;
                z-index: 20;
                padding-left: 20px;
                margin-top: ${isOpen ? '' : '1.25rem'};
              }

              .burger {
                width: 2rem;
                height: 0.25rem;
                border-radius: 10px;
                background-color: white;
                transform-origin: 1px;
                transition: all 0.3s linear;

              }
            `}</style>
        </>
    );
}

export default Hamburger
