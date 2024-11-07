import ModalProvider from './components/modals/ModalProvider';
import ProductCard from './components/product/ProductCard';
import { useState } from 'react';

import './main.scss';
import ShoesGuideSizeModal from './components/modals/ShoesGuideSizeModal';

const product = {
	title: "ASICS GEL-KAYANO 14",
	price: 155.00,
	colours: [
		{
			id: '123',
			title: "Metropolis/Jasper Green",
			image: "http://cdn.mcauto-images-production.sendgrid.net/76382aa1ad255297/409d3422-65aa-4b80-b7cc-5980ed16499f/77x46.png",
			available: false,
		},
		{
			id: '12we3',
			title: "Metropolis/Jasper Green",
			image: "http://cdn.mcauto-images-production.sendgrid.net/76382aa1ad255297/409d3422-65aa-4b80-b7cc-5980ed16499f/77x46.png",
			available: true,
		},
		{
			id: '123x3',
			title: "White/Tai Chi Yellow",
			image: "http://cdn.mcauto-images-production.sendgrid.net/76382aa1ad255297/409d3422-65aa-4b80-b7cc-5980ed16499f/77x46.png",
			available: false,
		},
		{
			id: '12ewe3',
			title: "White/Tai Chi Yellow",
			image: "http://cdn.mcauto-images-production.sendgrid.net/76382aa1ad255297/409d3422-65aa-4b80-b7cc-5980ed16499f/77x46.png",
			available: false,
		},
		{
			id: '12wwe3',
			title: "White/Tai Chi Yellow",
			image: "http://cdn.mcauto-images-production.sendgrid.net/76382aa1ad255297/409d3422-65aa-4b80-b7cc-5980ed16499f/77x46.png",
			available: true,
		},
	],
	sizes: [
		{
			id: "1",
			title: [
				{ "UK": "6" },
				{ "US": "7" },
				{ "EU": "39" },
				{ "cm": "24" }, // cm length
			],
			available: true,
		},
		{
			id: "2",
			title: [
				{ "UK": "6.5" },
				{ "US": "7.5" },
				{ "EU": "39.5" },
				{ "cm": "24.5" },
			],
			available: true,
		},
		{
			id: "3",
			title: [
				{ "UK": "7" },
				{ "US": "8" },
				{ "EU": "40" },
				{ "cm": "25" },
			],
			available: true,
		},
		{
			id: "4",
			title: [
				{ "UK": "7.5" },
				{ "US": "8.5" },
				{ "EU": "41" },
				{ "cm": "25.5" },
			],
			available: true,
		},
		{
			id: "5",
			title: [
				{ "UK": "8" },
				{ "US": "9" },
				{ "EU": "42" },
				{ "cm": "26" },
			],
			available: true,
		},
		{
			id: "6",
			title: [
				{ "UK": "8.5" },
				{ "US": "9.5" },
				{ "EU": "42.5" },
				{ "cm": "26.5" },
			],
			available: true,
		},
		{
			id: "7",
			title: [
				{ "UK": "9" },
				{ "US": "10" },
				{ "EU": "43" },
				{ "cm": "27" },
			],
			available: true,
		},
		{
			id: "8",
			title: [
				{ "UK": "9.5" },
				{ "US": "10.5" },
				{ "EU": "44" },
				{ "cm": "27.5" },
			],
			available: true,
		},
		{
			id: "9",
			title: [
				{ "UK": "10" },
				{ "US": "11" },
				{ "EU": "44.5" },
				{ "cm": "28" },
			],
			available: true,
		},
		{
			id: "10",
			title: [
				{ "UK": "10.5" },
				{ "US": "11.5" },
				{ "EU": "45" },
				{ "cm": "28.5" },
			],
			available: true,
		},
		{
			id: "11",
			title: [
				{ "UK": "11" },
				{ "US": "12" },
				{ "EU": "46" },
				{ "cm": "29" },
			],
			available: true,
		},
		{
			id: "12",
			title: [
				{ "UK": "11.5" },
				{ "US": "12.5" },
				{ "EU": "46.5" },
				{ "cm": "29.5" },
			],
			available: true,
		},
		{
			id: "13",
			title: [
				{ "UK": "12" },
				{ "US": "13" },
				{ "EU": "47" },
				{ "cm": "30" },
			],
			available: false,
		},
		{
			id: "14",
			title: [
				{ "UK": "12.5" },
				{ "US": "13.5" },
				{ "EU": "47.5" },
				{ "cm": "30.5" },
			],
			available: false,
		},
		{
			id: "15",
			title: [
				{ "UK": "13" },
				{ "US": "14" },
				{ "EU": "48" },
				{ "cm": "31" },
			],
			available: true,
		},
	],
	images: [
		{
			id: "1",
			alt: "atl text",
			url: "http://cdn.mcauto-images-production.sendgrid.net/76382aa1ad255297/9090694b-f55a-4f14-ab22-a86623e51154/644x326.png"
		},
		{
			id: "2",
			alt: "atl text",
			url: "http://cdn.mcauto-images-production.sendgrid.net/76382aa1ad255297/8655e95c-eee4-4a86-ab81-de05f26ebfc0/644x326.png"
		},
		{
			id: "3",
			alt: "atl text",
			url: "http://cdn.mcauto-images-production.sendgrid.net/76382aa1ad255297/8655e95c-eee4-4a86-ab81-de05f26ebfc0/644x326.png"
		},
		{
			id: "4",
			alt: "atl text",
			url: "http://cdn.mcauto-images-production.sendgrid.net/76382aa1ad255297/8655e95c-eee4-4a86-ab81-de05f26ebfc0/644x326.png"
		},
		{
			id: "5",
			alt: "atl text",
			url: "http://cdn.mcauto-images-production.sendgrid.net/76382aa1ad255297/8655e95c-eee4-4a86-ab81-de05f26ebfc0/644x326.png"
		},
		{
			id: "6",
			alt: "atl text",
			url: "http://cdn.mcauto-images-production.sendgrid.net/76382aa1ad255297/8655e95c-eee4-4a86-ab81-de05f26ebfc0/644x326.png"
		},

	],
	details: [

	]
}

function App() {
	const [isModalOpen, setModalOpen] = useState(false);
	const [modalType, setModalType] = useState("")

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

				<ProductCard
					product={product}
					openModal={() => openModal("PRODUCT_SIZE")}
				/>

				<ModalProvider isOpen={isModalOpen} onClose={closeModal}>
					{modalType === "PRODUCT_SIZE" && <ShoesGuideSizeModal />}
				</ModalProvider>
			</main>
    </div>
  );
}

export default App;
