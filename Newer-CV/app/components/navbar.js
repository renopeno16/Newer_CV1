'use client'

import { useState } from 'react';

export default function NavBar() {
        const [isEnglish, setIsEnglish] = useState(true);
      
        const toggleLanguage = () => {
          setIsEnglish(!isEnglish);
          // Add localization logic if needed
        };
      
        return (
          <nav className="navbar">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#about" className="nav-link">About</a>
              </li>
              <li className="nav-item">
                <a href="#skills" className="nav-link">Skills</a>
              </li>
              <li className="nav-item">
                <a href="#experiences" className="nav-link">Experiences</a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">Contact</a>
              </li>
              <li className="nav-item">
                <button onClick={toggleLanguage} className="language-toggle">
                  {isEnglish ? 'Français' : 'English'}
                </button>
              </li>
            </ul>
          </nav>
        );
      }