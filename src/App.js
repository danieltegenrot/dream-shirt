import './categories.styles.scss';
import './components/category-menu/category-menu.component';
import CategoryMenu from './components/category-menu/category-menu.component';

const App = () => {

  const categories = [
      {
        "id": 1,
        "title": "Women",
        "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
      },
      {
        "id": 2,
        "title": "Men",
        "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
      },
      {
        "id": 3,
        "title": "On Sale",
        "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
      }
    ]

  return (
    <CategoryMenu categories={categories} />
  );
}

export default App;
