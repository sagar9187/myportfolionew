import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

      <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> 
                <title>Folder</title> 
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> 
              </svg>
              <div className="project-links">
                {/* <a href="https://github.com/jadhavsagar750/Intrinsic-Value" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub Repository" />
                </a> */}
                <a href="https://intrinsicvalue.ai" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit Site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Intrinsic Value</h3>
              <p>
                Developed an AI-powered investment analysis platform using Python, Django, and PostgreSQL. 
                IntrinsicValue.ai provides value investors with data-driven insights through sophisticated mathematical models 
                and integrates FTSM Algo Trader for algorithmic trading. Users can schedule Buy/Sell orders or execute trades 
                manually via Zerodha brokerage.
              </p>
            </div>
            <footer> 
              <ul className="tech-list"> 
                <li>Python</li> 
                <li>Django REST Framework</li> 
                <li>PostgreSQL</li> 
              </ul> 
            </footer>
          </div>
        </ScrollAnimation>


        <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <header>
          <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> 
                <title>Folder</title> 
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> 
              </svg>
            <div className="project-links">
              {/* <a href="https://github.com/jadhavsagar750/Sales-Prospector" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub Repository" />
              </a> */}
              <a href="https://salesprospector.co" target="_blank" rel="noreferrer">
                <img src={externalLink} alt="Visit Site" />
              </a>
            </div>
          </header>
          <div className="body">
            <h3>Sales Prospector</h3>
            <p>
              An AI-driven intelligent prospecting engine that works around the clock to grow businesses. 
              Sales Prospector leverages automation and multi-channel engagement to identify, qualify, and track high-potential leads.
            </p>
            <h4>How It Works:</h4>
            <ul>
              <li><strong>Smart Prospect Discovery:</strong> AI scans and identifies ideal prospects matching customer profiles.</li>
              <li><strong>Multi-Channel Engagement:</strong> Automates personalized emails & WhatsApp messages for authentic outreach.</li>
              <li><strong>Qualification & Tracking:</strong> Uses BANT (Budget, Authority, Need, Timeline) criteria to deliver high-quality leads.</li>
            </ul>
          </div>
          <footer> 
            <ul className="tech-list"> 
              <li>Python</li> 
              <li>Django</li> 
              <li>PostgreSQL</li>
            </ul> 
          </footer>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <header>
          <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> 
                <title>Folder</title> 
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> 
              </svg>
          </header>
          <div className="body">
          <h3>Reversible Vending Machine (RVM)</h3>
          <p>
            Developed a secure and efficient vending machine system that allows users to deposit plastic bottles by scanning barcodes. The system tracks each transaction and generates a token for all deposited bottles.
          </p>
          <ul>
            <li>Secure admin logins with unique IDs and passwords.</li>
            <li>Admins can manage vending machines, employees, and product data.</li>
            <li>Users deposit bottles by scanning their barcodes, generating a single redemption token.</li>
          </ul>
        </div>
          <footer>
            <ul className="tech-list">
              <li>Python</li>
              <li>Django Rest Framework</li>
            </ul>
          </footer>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <header>
          <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> 
                <title>Folder</title> 
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> 
              </svg>
          </header>
          <div className="body">
            <h3>Madrid</h3>
            <p>
              Built an automation system using Selenium to navigate and extract data from the WIPO Madrid Monitor website. The system scrapes key details about trademarks and automatically notifies users via email.
            </p>
            <ul>
              <li>Automates the process of extracting company trademark data.</li>
              <li>Reduces manual effort by fetching real-time data through Selenium.</li>
              <li>Users input email IDs to receive automated notifications about trademark status.</li>
            </ul>
          </div>
          <footer>
            <ul className="tech-list">
              <li>Python</li>
              <li>Django Rest Framework</li>
              <li>Selenium</li>
            </ul>
          </footer>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <header>
          <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> 
                <title>Folder</title> 
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> 
              </svg>
          </header>
          <div className="body">
            <h3>Scholarly</h3>
            <p>
              An AI-powered knowledge base platform that allows users to upload PDFs and Excel files to train an AI chatbot for intelligent responses.
            </p>
            <ul>
              <li>Users upload documents to build a knowledge base.</li>
              <li>Chatbot provides accurate answers by referencing trained data.</li>
              <li>Integration with AI models like GPT-3 for intelligent interactions.</li>
              <li>Newsletter subscription feature for daily updates on selected topics.</li>
            </ul>
          </div>
          <footer>
            <ul className="tech-list">
              <li>Python</li>
              <li>Django Rest Framework</li>
              <li>GPT-3</li>
            </ul>
          </footer>
        </div>
      </ScrollAnimation>


      </div>
    </Container>
  );
}
