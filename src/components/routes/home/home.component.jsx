import CategoryMenu from '../../category-menu/category-menu.component';

const Home = () => {

    const categories = [
        {
            "title": "Men",
            "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
        },
        {
            "title": "Women",
            "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
        },
        {
            "title": "On Sale",
            "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
        }
    ]

    return (
        <>
            <h1>Shirts that talk</h1>
            <CategoryMenu categories={categories} />
        </>

    );
}

export default Home;
