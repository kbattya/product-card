import ModalProvider from './components/modals/ModalProvider';
import ProductCard from './components/product/ProductCard';
import { useState, useEffect } from 'react';

import './main.scss';
import ShoesGuideSizeModal from './components/modals/ShoesGuideSizeModal';
import productData from "./data.json"

function App() {
	const [isModalOpen, setModalOpen] = useState(false);
	const [modalType, setModalType] = useState("");
	const [product, setProduct] = useState(null);

	const fetchData = async () => {		
		try {
			setProduct(productData)
			
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	useEffect(() => {
		fetchData()
	}, []);

	const openModal = (type) => {
    setModalType(type);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalType("");
  };

  return (
    <div className="App">
      <header className="App-header">
      </header>

			<main className="product-page">
				<nav className='breadcrumps'>
					<a href="/" className="link">Home</a> 
					<span className="separator">/</span>
					<a href="/" className="link">Unisex Shoes</a>
					<span className="separator">/</span>
					<a href="/" className="link link--active">Unisex SportStyle Shoes</a>
				</nav>

				{product?.title &&
					<ProductCard
						product={product}
						openModal={() => openModal("PRODUCT_SIZE")}
					/>}
				

				<ModalProvider isOpen={isModalOpen} onClose={closeModal}>
					{modalType === "PRODUCT_SIZE" && <ShoesGuideSizeModal />}
				</ModalProvider>
			</main>
    </div>
  );
}

export default App;
