// Loader from http://tobiasahlin.com/spinkit/

const Loader = () => (
  <div>
    <div className="spinner">
      <div className="rect1"></div>
      <div className="rect2"></div>
      <div className="rect3"></div>
      <div className="rect4"></div>
      <div className="rect5"></div>
    </div>
    <style jsx global>
      {`
      .spinner {
        height: 40px;
        text-align: center;
        font-size: 10px;
        width: 100%;
      }
      
      .spinner > div {
        background-color: #f53a11;
        height: 80%;
        width: 6px;
        margin: 0 3px 0 0;
        display: inline-block;
        animation: stretchdelay 1.2s infinite ease-in-out;
      }
      
      .spinner .rect2 {
        animation-delay: -1.1s;
      }
      
      .spinner .rect3 {
        animation-delay: -1.0s;
      }
      
      .spinner .rect4 {
        animation-delay: -0.9s;
      }
      
      .spinner .rect5 {
        animation-delay: -0.8s;
      }

      @keyframes stretchdelay {
        0%, 40%, 100% { 
          transform: scaleY(0.4);
          -webkit-transform: scaleY(0.4);
        }  20% { 
          transform: scaleY(1.0);
          -webkit-transform: scaleY(1.0);
        }
      }
            
    `}
    </style>
  </div>
)

export default Loader;