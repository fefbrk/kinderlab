import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus, faMinus, faTag } from '@fortawesome/free-solid-svg-icons';
import { useToast } from '@/components/ui/use-toast';

const Cart = () => {
  const { cartItems, addToCart, updateQuantity, removeFromCart, getCartTotal, clearCart, applyCoupon, appliedCoupon } = useCart();
  const [couponCode, setCouponCode] = useState('');
  const { toast } = useToast();

  const handleApplyCoupon = () => {
    const success = applyCoupon(couponCode);
    if (success) {
      toast({
        title: "Coupon Applied!",
        description: `The coupon "${couponCode}" has been successfully applied.`,
      });
    } else {
      toast({
        title: "Invalid Coupon",
        description: `The coupon code "${couponCode}" is not valid.`,
      });
    }
    setCouponCode('');
  };

  const { subtotal, discount, total } = getCartTotal();

  return (
    <div className="flex flex-col min-h-screen bg-orange-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 overflow-x-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Shopping Cart</h1>
          {cartItems.length > 0 && (
            <button
              onClick={clearCart}
              className="px-6 py-3 rounded-lg border border-kibo-purple text-kibo-purple hover:bg-kibo-orange hover:text-kibo-purple active:bg-kibo-orange active:text-kibo-purple transition-colors cursor-pointer"
            >
              <FontAwesomeIcon icon={faTrash} className="mr-2" />
              Clear Cart
            </button>
          )}
        </div>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-500 mb-4">Your cart is empty.</p>
            <Link to="/shop">
              <button 
                className="px-6 py-3 rounded-lg border border-kibo-purple text-kibo-purple hover:bg-kibo-orange hover:text-kibo-purple active:bg-kibo-orange active:text-kibo-purple transition-colors cursor-pointer"
              >
                Start Shopping
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Products Grid */}
            <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cartItems.map(item => {
                // Determine the correct URL for each product
                const getProductUrl = (productId: string | number, productName: string) => {
                  // Convert productId to string if it's a number
                  const id = typeof productId === 'number' ? productId.toString() : productId;
                  // Special case for KIBO 10 Kit which has its own dedicated page
                  if (id === "1" && productName === "KIBO 10 Kit") {
                    return "/products/kibo-10-kit";
                  }
                  // Special case for KIBO 15 Kit which has its own dedicated page
                  if (id === "2" && productName === "KIBO 15 Kit") {
                    return "/products/kibo-15-kit";
                  }
                  // Special case for KIBO 18 Kit which has its own dedicated page
                  if (id === "3" && productName === "KIBO 18 Kit") {
                    return "/products/kibo-18-kit";
                  }
                  // Special case for KIBO 21 Kit which has its own dedicated page
                  if (id === "4" && productName === "KIBO 21 Kit") {
                    return "/products/kibo-21-kit";
                  }
                  // Special case for KIBO 10 Home Edition which has its own dedicated page
                  if (id === "801" && productName === "KIBO 10 Home Edition") {
                    return "/products/kibo-10-home-edition";
                  }
                  // Special case for KIBO 15 Home Edition which has its own dedicated page
                  if (id === "802" && productName === "KIBO 15 Home Edition") {
                    return "/products/kibo-15-home-edition";
                  }
                  // Special cases for Classroom Packages
                  if (id === "101" && productName === "Activity Center KIBO 21 STEAM Explorer Package") {
                    return "/products/activity-center-kibo-21-steam-explorer";
                  }
                  if (id === "102" && productName === "Small Classroom KIBO 21 STEAM Explorer Package") {
                    return "/products/small-classroom-kibo-21-steam-explorer";
                  }
                  if (id === "103" && productName === "Full Classroom KIBO 21 STEAM Explorer Package") {
                    return "/products/full-classroom-kibo-21-steam-explorer";
                  }
                  if (id === "104" && productName === "Activity Center KIBO 21 Package") {
                    return "/products/activity-center-kibo-21";
                  }
                  if (id === "105" && productName === "Small Classroom KIBO 21 Package") {
                    return "/products/small-classroom-kibo-21";
                  }
                  if (id === "106" && productName === "Full Classroom KIBO 21 Package") {
                    return "/products/full-classroom-kibo-21";
                  }
                  if (id === "107" && productName === "Activity Center KIBO 18 Package") {
                    return "/products/activity-center-kibo-18";
                  }
                  if (id === "108" && productName === "Small Classroom KIBO 18 Package") {
                    return "/products/small-classroom-kibo-18";
                  }
                  if (id === "109" && productName === "Full Classroom KIBO 18 Package") {
                    return "/products/full-classroom-kibo-18";
                  }
                  // Special cases for Fun Extension Sets
                  if (id === "201" && productName === "Advanced Coding Extension Set") {
                    return "/products/advanced-coding-extension-set";
                  }
                  if (id === "202" && productName === "Building Brick Extension Set (Basic)") {
                    return "/products/building-brick-extension-set-basic";
                  }
                  if (id === "203" && productName === "Building Brick Extension Set (Deluxe)") {
                    return "/products/building-brick-extension-set-deluxe";
                  }
                  if (id === "204" && productName === "Bundle Of Fun Extension Package") {
                    return "/products/bundle-of-fun-extension-package";
                  }
                  if (id === "205" && productName === "Expression Module") {
                    return "/products/expression-module";
                  }
                  if (id === "206" && productName === "Free Throw Extension Set") {
                    return "/products/free-throw-extension-set";
                  }
                  if (id === "207" && productName === "KIBO 18 To KIBO 21 Upgrade Package") {
                    return "/products/kibo-18-to-kibo-21-upgrade-package";
                  }
                  if (id === "208" && productName === "KIBO Costumes") {
                    return "/products/kibo-costumes";
                  }
                  if (id === "209" && productName === "Marker Extension Set") {
                    return "/products/marker-extension-set";
                  }
                  if (id === "210" && productName === "Marker Extension Set - Extras") {
                    return "/products/marker-extension-set-extras";
                  }
                  if (id === "211" && productName === "Sound Record/Playback Module") {
                    return "/products/sound-record-playback-module";
                  }
                  // Parts & Replacements products
                  if (id === "301" && productName === "BEEP Block") {
                    return "/products/beep-block";
                  }
                  if (id === "302" && productName === "BEGIN And END Blocks") {
                    return "/products/begin-and-end-blocks";
                  }
                  if (id === "303" && productName === "Block Sticker Upgrade") {
                    return "/products/block-sticker-upgrade";
                  }
                  if (id === "304" && productName === "Block Sticker Upgrade For KIBO 18") {
                    return "/products/block-sticker-upgrade-for-kibo-18";
                  }
                  if (id === "305" && productName === "Block Sticker Upgrade For KIBO 21") {
                    return "/products/block-sticker-upgrade-for-kibo-21";
                  }
                  if (id === "306" && productName === "Clap/Sound Sensor: Ear") {
                    return "/products/clap-sound-sensor-ear";
                  }
                  if (id === "307" && productName === "Conditional Blocks") {
                    return "/products/conditional-blocks";
                  }
                  if (id === "308" && productName === "Distance Sensor: Telescope") {
                    return "/products/distance-sensor-telescope";
                  }
                  if (id === "309" && productName === "Firmware Update Cable") {
                    return "/products/firmware-update-cable";
                  }
                  if (id === "310" && productName === "FORWARD Block") {
                    return "/products/forward-block";
                  }
                  if (id === "311" && productName === "IF And END-IF Blocks") {
                    return "/products/if-and-end-if-blocks";
                  }
                  if (id === "312" && productName === "LIGHT ON Blocks") {
                    return "/products/light-on-blocks";
                  }
                  if (id === "313" && productName === "Light Output Sensor: Lightbulb") {
                    return "/products/light-output-sensor-lightbulb";
                  }
                  if (id === "314" && productName === "Light Sensor: Eye") {
                    return "/products/light-sensor-eye";
                  }
                  if (id === "315" && productName === "Motion Blocks") {
                    return "/products/motion-blocks";
                  }
                  if (id === "316" && productName === "Motor Module") {
                    return "/products/motor-module";
                  }
                  if (id === "317" && productName === "Parameters For IF/THEN Blocks") {
                    return "/products/parameters-for-if-then-blocks";
                  }
                  if (id === "318" && productName === "Parameters For REPEAT Blocks") {
                    return "/products/parameters-for-repeat-blocks";
                  }
                  if (id === "319" && productName === "Parameters For REPEAT Blocks (Numbers Only)") {
                    return "/products/parameters-for-repeat-blocks-numbers-only";
                  }
                  if (id === "320" && productName === "SING Block") {
                    return "/products/sing-block";
                  }
                  if (id === "321" && productName === "SPIN Block") {
                    return "/products/spin-block";
                  }
                  if (id === "322" && productName === "Stage Art Platform") {
                    return "/products/stage-art-platform";
                  }
                  if (id === "323" && productName === "Stage Pedestal") {
                    return "/products/stage-pedestal";
                  }
                  if (id === "324" && productName === "Stage Support") {
                    return "/products/stage-support";
                  }
                  if (id === "325" && productName === "Turntable Art Platform") {
                    return "/products/turntable-art-platform";
                  }
                  if (id === "326" && productName === "WAIT FOR CLAP Block") {
                    return "/products/wait-for-clap-block";
                  }
                  if (id === "327" && productName === "Wheel") {
                    return "/products/wheel";
                  }
                  // Teaching Materials products
                  if (id === "401" && productName === "Growing With KIBO - A Robotics Curriculum For Pre-K To 2nd Grade") {
                    return "/products/growing-with-kibo";
                  }
                  if (id === "402" && productName === "Exploring With KIBO - A Robotics Curriculum For Grades 3 - 5") {
                    return "/products/exploring-with-kibo";
                  }
                  if (id === "403" && productName === "KIBO Coding Cards") {
                    return "/products/kibo-coding-cards";
                  }
                  if (id === "404" && productName === "Activity Center Guidebook") {
                    return "/products/activity-center-guidebook";
                  }
                  if (id === "405" && productName === "Creating With KIBO Curriculum Guide") {
                    return "/products/creating-with-kibo-guide";
                  }
                  if (id === "406" && productName === "KIBO Activity Cards") {
                    return "/products/kibo-activity-cards";
                  }
                  if (id === "407" && productName === "KIBO Says - Class Programming Game") {
                    return "/products/kibo-says-game";
                  }
                  if (id === "408" && productName === "Ask And Imagine (Advanced Coding Curriculum Guide)") {
                    return "/products/ask-and-imagine-guide";
                  }
                  if (id === "409" && productName === "Assessment Workbook") {
                    return "/products/assessment-workbook";
                  }
                  if (id === "410" && productName === "Blended Learning Curriculum Bundle") {
                    return "/products/blended-learning-bundle";
                  }
                  if (id === "411" && productName === "Build It Better! (Building Block Curriculum Guide)") {
                    return "/products/build-it-better-guide";
                  }
                  if (id === "412" && productName === "Engineering Design Journals") {
                    return "/products/engineering-design-journals";
                  }
                  if (id === "413" && productName === "Express Yourself! (Expression Module Curriculum Guide)") {
                    return "/products/express-yourself-guide";
                  }
                  if (id === "414" && productName === "Make Learning Visible! (Marker Curriculum Guide)") {
                    return "/products/make-learning-visible-guide";
                  }
                  if (id === "415" && productName === "Module Curriculum Guides Bundle") {
                    return "/products/module-curriculum-guides-bundle";
                  }
                  if (id === "416" && productName === "Showtime With KIBO! (Sound Module Curriculum Guide)") {
                    return "/products/showtime-with-kibo-guide";
                  }
                  if (id === "417" && productName === "Teaching Materials Package") {
                    return "/products/teaching-materials-package";
                  }
                  if (id === "418" && productName === "Two Posters - KIBO And Engineering Design Process") {
                    return "/products/two-posters";
                  }
                  if (id === "419" && productName === "KIBO Home Robotics Guide") {
                    return "/products/kibo-home-robotics-guide";
                  }
                  // Special case for Training - One-Hour Web Conference
                  if (id === "501" && productName === "Training - One-Hour Web Conference") {
                    return "/products/training-one-hour-web-conference";
                  }
                  // Special cases for Clearance products
                  if (id === "601" && productName === "Activity Cards - 1st Edition (Clearance)") {
                    return "/products/activity-cards-1st-edition-clearance";
                  }
                  if (id === "602" && productName === "Assessment Workbook 1st Edition (Clearance)") {
                    return "/products/assessment-workbook-1st-edition-clearance";
                  }
                  if (id === "603" && productName === "Build It Better! (Building Block Curriculum Guide) (Clearance)") {
                    return "/products/build-it-better-clearance";
                  }
                  if (id === "604" && productName === "Express Yourself! (Expression Module Guide) (Clearance)") {
                    return "/products/express-yourself-clearance";
                  }
                  if (id === "605" && productName === "Make Learning Visible! (Marker Curriculum Guide) (Clearance)") {
                    return "/products/make-learning-visible-clearance";
                  }
                  if (id === "606" && productName === "Showtime With KIBO! (Sound Module Curriculum Guide) (Clearance)") {
                    return "/products/showtime-with-kibo-clearance";
                  }
                  // Special case for KIBO Repair Service
                  if (id === "701" && productName === "KIBO Repair Service") {
                    return "/products/kibo-repair-service";
                  }
                  // Handle cart items with custom IDs (from dedicated product pages)
                  if (id === "kibo-18-kit" && productName === "KIBO 18 Kit") {
                    return "/products/kibo-18-kit";
                  }
                  if (id === "kibo-21-kit" && productName === "KIBO 21 Kit") {
                    return "/products/kibo-21-kit";
                  }
                  if (id === "kibo-10-home-edition" && productName === "KIBO 10 Home Edition") {
                    return "/products/kibo-10-home-edition";
                  }
                  if (id === "kibo-15-home-edition" && productName === "KIBO 15 Home Edition") {
                    return "/products/kibo-15-home-edition";
                  }
                  // Default to generic product detail page for other products
                  return `/shop/product/${id}`;
                };
                
                return (
                <Link to={getProductUrl(item.id, item.name)} key={item.id} className="block border-2 border-kibo-purple/30 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:border-kibo-purple hover:shadow-xl">
                  <div className="flex flex-col h-full">
                    <div className="h-48 bg-white">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="text-lg font-semibold mb-2 flex-grow">{item.name}</h3>
                      <p className="text-xl font-bold text-kibo-purple mb-4">
                        ${item.price.toFixed(2)}
                      </p>
                      
                      <div className="flex items-center justify-between gap-2 my-2">
                        <button 
                          className="w-1/4 px-6 py-3 rounded-lg border border-kibo-purple text-kibo-purple hover:bg-kibo-orange hover:text-kibo-purple active:bg-kibo-orange active:text-kibo-purple transition-colors cursor-pointer" 
                          onClick={(e) => {
                            e.preventDefault();
                            updateQuantity(item.id, item.quantity - 1);
                          }}
                        >
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <span className="text-lg font-bold text-center">{item.quantity}</span>
                        <button 
                          className="w-1/4 px-6 py-3 rounded-lg border border-kibo-purple text-kibo-purple hover:bg-kibo-orange hover:text-kibo-purple active:bg-kibo-orange active:text-kibo-purple transition-colors cursor-pointer" 
                          onClick={(e) => {
                            e.preventDefault();
                            addToCart(item);
                          }}
                        >
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </div>

                      <button 
                        className="w-full mt-2 px-6 py-3 rounded-lg border border-kibo-purple text-kibo-purple hover:bg-kibo-orange hover:text-kibo-purple active:bg-kibo-orange active:text-kibo-purple transition-colors cursor-pointer"
                        onClick={(e) => {
                          e.preventDefault();
                          removeFromCart(item.id);
                        }}
                      >
                        <FontAwesomeIcon icon={faTrash} className="mr-2" />
                        Remove
                      </button>
                    </div>
                  </div>
                </Link>
                );
              })}
            </div>

            {/* Cart Summary */}
            <aside className="w-full lg:w-1/4 sticky top-24">
              <div className="border-2 border-kibo-purple/30 rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6">Cart Summary</h2>
                
                {/* Coupon Section */}
                <div className="mb-6">
                  <label htmlFor="coupon" className="block text-sm font-medium text-gray-700 mb-2">Coupon Code</label>
                  <div className="flex gap-2">
                    <Input 
                      type="text" 
                      id="coupon"
                      placeholder="Enter coupon"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-grow"
                    />
                    <button
                      onClick={handleApplyCoupon}
                      className="h-10 px-4 text-sm rounded-lg border border-kibo-purple text-kibo-purple hover:bg-kibo-orange hover:text-kibo-purple active:bg-kibo-orange active:text-kibo-purple transition-colors cursor-pointer"
                    >
                      Apply
                    </button>
                  </div>
                </div>

                {/* Totals Section */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">${subtotal.toFixed(2)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>
                        Discount 
                        <span className="text-xs ml-1 p-1 bg-green-100 rounded">
                          <FontAwesomeIcon icon={faTag} className="mr-1" />
                          {appliedCoupon}
                        </span>
                      </span>
                      <span className="font-semibold">-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-semibold">FREE</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-semibold">FREE</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold mt-4 pt-4 border-t">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                <Link to="/checkout">
                  <button
                    className="w-full mt-6 px-6 py-3 rounded-lg border border-kibo-purple text-kibo-purple hover:bg-kibo-orange hover:text-kibo-purple active:bg-kibo-orange active:text-kibo-purple transition-colors cursor-pointer"
                  >
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            </aside>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
