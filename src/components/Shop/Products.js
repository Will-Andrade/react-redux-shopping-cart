import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    title: 'Running shoe',
    price: 24,
    description: 'This is a shoe tailor-made for running long distances'
  },
  {
    id: 'p2',
    title: 'Social shoe',
    price: 30,
    description: 'This shoe is made for people who like going out at night!'
  },
  {
    id: 'p3',
    title: 'All rounder shoe',
    price: 10,
    description: 'This is a regular shoe, good for running & using at night. Whatever it is, it just works!'
  }
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          DUMMY_PRODUCTS.map(({ id, title, price, description }) => (
            <ProductItem
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
            />
          ))
        }
      </ul>
    </section>
  );
};

export default Products;
