import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

import { useCart } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';
import { Search } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { products } from '@/data/products';

// Import images
import MainImg from '@/assets/product/service/kiborepairservice/KIBO-fix-it-600x450.jpg';

const KiboRepairService = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
  const [justAdded, setJustAdded] = useState(false);
  const [minusClicked, setMinusClicked] = useState(false);
  const [plusClicked, setPlusClicked] = useState(false);
  const { addToCart, cartItems, updateQuantity } = useCart();
  const { toast } = useToast();

  // Get the current quantity of this product in the cart
  const productInCart = cartItems.find(item => item.id === '701');
  const quantity = productInCart ? productInCart.quantity : 0;

  const images = [
    MainImg
  ];

  const handleAddToCart = () => {
    const product = products.find(p => p.id === '701');
    if (product) {
      addToCart(product);
      setJustAdded(true);
      setTimeout(() => setJustAdded(false), 1000);
    }
    
    toast({
      title: "Added to cart",
      description: "KIBO Repair Service added to your cart.",
    });
  };

  const getPrice = () => {
    const product = products.find(p => p.id === '701');
    return product ? `$${product.price.toFixed(2)}` : '$110.00';
  };

  return (
    <div className="min-h-screen bg-orange-50">
      <Header />
      
      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/shop" className="hover:text-kibo-purple transition-colors">Shop KIBO</Link>
          <span>/</span>
          <Link to="/shop/service" className="hover:text-kibo-purple transition-colors">Service</Link>
          <span>/</span>
          <span className="text-kibo-purple font-medium">KIBO Repair Service</span>
        </nav>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
             <div className="relative bg-white border rounded-lg overflow-hidden group">
               <button 
                 onClick={() => setIsModalOpen(true)}
                 className="absolute top-4 right-4 z-10 bg-gradient-to-r from-kibo-purple to-kibo-orange text-white rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
               >
                 <Search className="h-5 w-5" />
               </button>
               <img
                 src={images[selectedImage]}
                 alt="KIBO Repair Service"
                 className="w-full h-96 object-cover cursor-pointer transition-transform duration-300 hover:scale-150"
                 onClick={() => setIsModalOpen(true)}
                 onMouseMove={(e) => {
                   const rect = e.currentTarget.getBoundingClientRect();
                   const x = ((e.clientX - rect.left) / rect.width) * 100;
                   const y = ((e.clientY - rect.top) / rect.height) * 100;
                   e.currentTarget.style.transformOrigin = `${x}% ${y}%`;
                 }}
               />
             </div>
            
            {/* Thumbnail Images */}
            <div className="flex space-x-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 border-2 rounded-lg overflow-hidden ${
                    selectedImage === index ? 'border-purple-500' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`KIBO Repair Service view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-kibo-purple mb-4">KIBO Repair Service</h1>
              
              <div className="text-2xl font-bold text-gray-900 mb-4">{getPrice()}</div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden flex-shrink-0">
                <button
                  onClick={() => {
                    if (quantity > 0) {
                      updateQuantity('701', quantity - 1);
                      setMinusClicked(true);
                      setTimeout(() => setMinusClicked(false), 1000);
                    }
                  }}
                  className={`px-3 py-2 transition-colors duration-100 focus:outline-none focus:ring-0 hover:shadow-none ${
                    minusClicked
                      ? 'bg-kibo-purple text-kibo-orange'
                      : 'bg-kibo-orange text-white hover:bg-kibo-orange hover:text-kibo-purple'
                  }`}
                >-</button>
                <span className="px-3 py-2 min-w-[2.5rem] text-center">{quantity}</span>
                <button
                  onClick={() => {
                    if (quantity === 0) {
                      handleAddToCart();
                    } else {
                      updateQuantity('701', quantity + 1);
                    }
                    setPlusClicked(true);
                    setTimeout(() => setPlusClicked(false), 1000);
                  }}
                  className={`px-3 py-2 transition-colors duration-100 focus:outline-none focus:ring-0 hover:shadow-none ${
                    plusClicked
                      ? 'bg-kibo-purple text-kibo-orange'
                      : 'bg-kibo-orange text-white hover:bg-kibo-orange hover:text-kibo-purple'
                  }`}
                >+</button>
              </div>
              
              <Button
                onClick={handleAddToCart}
                className={`w-full transition-colors duration-100 focus:outline-none focus:ring-0 hover:shadow-none ${
                  justAdded
                    ? 'bg-kibo-purple text-kibo-orange'
                    : 'bg-kibo-orange text-white hover:bg-kibo-orange hover:text-kibo-purple'
                }`}
              >
                <FontAwesomeIcon icon={faCartPlus} className="mr-2" />
                {justAdded ? 'Added to Cart' : 'Add to Cart'}
              </Button>
            </div>

            {/* Product Meta */}
            <div className="text-sm text-gray-500 space-y-1">
              <div><span className="font-medium">SKU:</span> SV-REPAIR-SERVICE</div>
              <div><span className="font-medium">Category:</span> <Link to="/shop/service" className="text-purple-600 hover:underline">Service</Link></div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab('description')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'description'
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Description
              </button>
        
            </nav>
          </div>

          <div className="py-8 min-h-[400px]">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-kibo-purple mb-6">Description</h2>
                <p className="text-gray-700 mb-4">
                Does your KIBO need some repair? We are here to help! Add this service to your cart at the request of our support representatives. If you are having trouble with your KIBO, please reach out to us at support@kinderlabrobotics.com prior to your order.
                </p>
                
                <p className="text-gray-700 mb-4">
                 If the support representative asked you to return your KIBO for our paid repair service, then please follow this procedure:
                </p>
                
               
                
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li>Add this repair service item to your shopping cart and purchase it. Be sure to provide your shipping address during the checkout process.</li>
                  <li>Package up just your KIBO body and send it to us at KinderLab Robotics, 7 Sun St., Waltham MA 02453 (USA). (You don’t need to include the sensors, wheels, blocks, etc, just the body of the KIBO.)</li>
                  <li>In your package, please include a copy of the order confirmation for the repair service, or other note identifying yourself, so we’ll know who to send the KIBO back to.</li>
                  <li>We will repair your KIBO and return it to the shipping address you provided. We will cover the cost of the return shipping for domestic repairs. Overseas repairs may require a shipping surcharge and you will be responsible to pay customs duties or taxes in your country.</li>
                </ul>
                
                <p className="text-gray-700 mb-4">
                  Please note: This service does not include shipping costs to send your KIBO to our repair center. You will be responsible for shipping your KIBO to us. We recommend using a trackable shipping service and adequate packaging to prevent damage during transit.
                </p>

                 <p className="text-gray-700 mb-4">
                 Please contact support@kinderlabrobotics.com with any questions.
                </p>
              </div>
            )}

            {activeTab === 'additional' && (
              <div>
                <h2 className="text-2xl font-bold text-kibo-purple mb-6">Additional information</h2>
                <div className="bg-gray-50 rounded-lg overflow-hidden">
                  <table className="w-full">
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="px-6 py-4 font-medium text-gray-900 bg-gray-100 w-1/3">Service Type</td>
                        <td className="px-6 py-4 text-gray-700 w-2/3">Repair Service</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="px-6 py-4 font-medium text-gray-900 bg-gray-100 w-1/3">Turnaround Time</td>
                        <td className="px-6 py-4 text-gray-700 w-2/3">2-3 weeks</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-medium text-gray-900 bg-gray-100 w-1/3">Warranty</td>
                        <td className="px-6 py-4 text-gray-700 w-2/3">90 days on repairs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Image Modal */}
       {isModalOpen && (
         <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setIsModalOpen(false)}>
           <div className="relative max-w-4xl max-h-[90vh] p-4">
             <button 
               onClick={() => setIsModalOpen(false)}
               className="absolute -top-4 -right-4 bg-gradient-to-r from-kibo-purple to-kibo-orange text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 z-10"
             >
               <span className="font-bold text-lg">×</span>
             </button>
             <img
                src={images[selectedImage]}
                alt="KIBO Repair Service - Enlarged"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
           </div>
         </div>
       )}
      
      <Footer />
    </div>
  );
};

export default KiboRepairService;