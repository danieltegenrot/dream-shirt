import './category-item.styles.scss';

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category
  return (
    <div className='category-container'>
      <div className='category-content'>
        <div className='background-image' style={{
          backgroundImage: `url(${imageUrl})`
        }} />
      </div>
      <h2>{title}</h2>
    </div>

  )
}

export default CategoryItem