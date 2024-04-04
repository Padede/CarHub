import Link from "next/link";
function About() {
    return (
      
      <div className="about pt-12 text-gray-700">       
        <Link href="/info">
        <img src="./about-us.jpg" alt="about_us" className="rounded-full max-width"/>
        </Link>
        
      </div>
    );
  }
  
  export default About;