import { Wrench } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl">Miami Moto Fix</span>
            </div>
            <p className="text-gray-400">
              Professional mobile motorcycle repair service in Miami, FL.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Engine Repair</li>
              <li>Brake Service</li>
              <li>Electrical Systems</li>
              <li>Emergency Service</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>(786) 470-6864</li>
              <li>info@miamimotofix.com</li>
              <li>Miami, FL 33182</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Hours</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Emergency: 24/7</li>
              <li>Regular: 8AM - 6PM</li>
              <li>Weekends: Available</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Miami Moto Fix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}