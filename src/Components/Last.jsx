import React from "react";
import phoneIcon from "../assets/013-telescope-1.svg";
import emailIcon from "../assets/email.svg";
import contactIcon from "../assets/contact.svg";

function Last() {
  return (
    <div className="bg-white">
      <footer className="w-full bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-12">
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            
            <div>
              <h3 className="font-bold text-gray-800 mb-4 text-sm">Company Info</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm transition-colors">Carrier</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm transition-colors">We are hiring</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm transition-colors">Blog</a></li>
              </ul>
            </div>

            
            <div>
              <h3 className="font-bold text-gray-800 mb-4 text-sm">Legal</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm transition-colors">Carrier</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm transition-colors">We are hiring</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm transition-colors">Blog</a></li>
              </ul>
            </div>

            
            <div>
              <h3 className="font-bold text-gray-800 mb-4 text-sm">Features</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm transition-colors">Business Marketing</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm transition-colors">User Analytic</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm transition-colors">Live Chat</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm transition-colors">Unlimited Support</a></li>
              </ul>
            </div>

            
            <div>
              <h3 className="font-bold text-gray-800 mb-4 text-sm">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm transition-colors">iOS & Android</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm transition-colors">Watch a Demo</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm transition-colors">Customers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm transition-colors">API</a></li>
              </ul>
            </div>

            
            <div>
              <h3 className="font-bold text-gray-800 mb-4 text-sm">Get In Touch</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <img src={phoneIcon} alt="Phone" className="w-4 h-4 mt-1"/>
                  <a href="tel:4805550103" className="text-gray-600 hover:text-gray-800 text-sm transition-colors">(480) 555-0103</a>
                </li>
                <li className="flex items-start gap-2">
                  <img src={contactIcon} alt="Location" className="w-4 h-4 mt-1"/>
                  <span className="text-gray-600 text-sm">4517 Washington Ave. Manchester, Kentucky 39495</span>
                </li>
                <li className="flex items-start gap-2">
                  <img src={emailIcon} alt="Email" className="w-4 h-4 mt-1"/>
                  <a href="mailto:debra.holt@example.com" className="text-gray-600 hover:text-gray-800 text-sm transition-colors">debra.holt@example.com</a>
                </li>
              </ul>
            </div>
          </div>

          
          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">Made With Love By Figmaland All Right Reserved</p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors" aria-label="Facebook">
                <i className="fab fa-facebook text-blue-600 text-lg"></i>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors" aria-label="Instagram">
                <i className="fab fa-instagram text-blue-600 text-lg"></i>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors" aria-label="Twitter">
                <i className="fab fa-twitter text-blue-600 text-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Last;

