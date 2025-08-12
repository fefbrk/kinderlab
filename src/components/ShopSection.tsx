import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Import Link
import KitsImg from '@/assets/shop/kibo-kits.png';
import PackagesImg from '@/assets/shop/kibo-classroom-packages.png';
import HomeEditionImg from '@/assets/shop/KIBO-15-Home-Edition-Image-600x493.png';
import ExtensionsImg from '@/assets/shop/extensions.png';
import PartsImg from '@/assets/shop/KIBO-fix-it-600x450.png';
import MaterialsImg from '@/assets/shop/learning-materials.png';
import TrainingImg from '@/assets/shop/Jason-e1658103357831-600x418.png';
import ClearanceImg from '@/assets/shop/Clearance-Image.png';
import ServiceImg from '@/assets/shop/KIBO-120519_9293-1024x684.png';

const products = [
  { title: "KIBO Kits", image: KitsImg, slug: "kibo-kits" },
  { title: "Classroom Packages", image: PackagesImg, slug: "kibo-classroom-packages" },
  { title: "KIBO Home Edition", image: HomeEditionImg, slug: "kibo-kits" }, // This correctly maps to the kibo-kits category page
  { title: "Fun Extension Sets", image: ExtensionsImg, slug: "extensions" },
  { title: "Parts & Replacements", image: PartsImg, slug: "parts-replacements" },
  { title: "Teaching Materials", image: MaterialsImg, slug: "learning-materials" },
  { title: "Training", image: TrainingImg, slug: "training" },
  { title: "Clearance", image: ClearanceImg, slug: "clearance" },
  { title: "Service", image: ServiceImg, slug: "service" },
];

const ShopSection = () => {
  return (
    <section className="py-20 bg-orange-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 flex items-center justify-center gap-4">
          <FontAwesomeIcon icon={faCartShopping} className="text-kibo-orange text-4xl" />
          <h2 className="text-4xl font-bold text-kibo-orange">
            Shop KIBO Robotics for Kids
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Link to={product.slug === 'shop' ? '/shop' : `/shop/${product.slug}`} key={index} className="block group">
              <div className="rounded-2xl h-50 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 relative flex items-end justify-center">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover absolute inset-0 transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="relative w-full p-4 text-center bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-kibo-orange">
                    {product.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;