const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-sm mt-8">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* ALX Description */}
        <div>
          <div className="text-2xl font-bold mb-4">alx</div>
          <p className="text-gray-400">
            ALX is a platform where travelers can discover and book unique, comfortable, and affordable lodging options worldwide. From cozy city apartments and tranquil countryside retreats to exotic beachside villas, ALX connects you with the perfect place to stay for any trip.
          </p>
        </div>

        {/* Explore Links */}
        <div>
          <h4 className="font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">Apartments in Dubai</a></li>
            <li><a href="#">Hotels in New York</a></li>
            <li><a href="#">Villa in Spain</a></li>
            <li><a href="#">Mansion in Indonesia</a></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">About us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Customers</a></li>
            <li><a href="#">Brand</a></li>
          </ul>
        </div>

        {/* Help Links */}
        <div>
          <h4 className="font-semibold mb-3">Help</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">Support</a></li>
            <li><a href="#">Cancel booking</a></li>
            <li><a href="#">Refunds Process</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-gray-400 text-xs flex flex-col md:flex-row justify-between items-center px-6 py-4">
        <p className="mb-2 md:mb-0">Some hotels require you to cancel more than 24 hours before check-in. Details <a href="#" className="text-green-500 underline">here</a></p>
        <div className="flex space-x-4">
          <a href="#">Terms of Service</a>
          <a href="#">Policy service</a>
          <a href="#">Cookies Policy</a>
          <a href="#">Partners</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
