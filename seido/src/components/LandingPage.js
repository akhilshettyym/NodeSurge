import { useNavigate } from "react-router-dom";  

export default function LandingPage({ mode }) {  
  const navigate = useNavigate();  

  return (  
    <div className={`d-flex flex-column align-items-center justify-content-center min-vh-100 text-center p-4 ${mode === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'}`}>  
      <h1 className="display-3 fw-bold">Welcome to Seido</h1>  
      <p className="lead text-muted mb-4 my-3">  
        Maximize productivity with Seido—your comprehensive app for advanced text tools, intricate to-do lists, real-time weather insights, and more. Seamlessly organize your tasks and enhance precision in every aspect of your day!
      </p>  
      <button  
        onClick={() => navigate("/signup")}  
        className={`btn ${mode === 'dark' ? 'btn-light' : 'btn-dark'} btn-lg`}  
      >  
        Get Started  
      </button>  
    </div>  
  );  
}