import React, { useState } from 'react';
import styles from './AddProduct.module.css';
import MyAccountNav from '../../../components/MyAccontNav/MyAccountNav';
import { useFormik } from 'formik';
import { addProductSchema } from '../../../schemas/addProductSchema';
import AddProductInput from '../../../components/UI/AddProductInput/AddProductInput';
import DropDown from '../../../components/UI/DropDown/DropDown';

const AddProduct = () => {
  const colors = [
    'Red',
    'Blue',
    'Green',
    'Yellow',
    'Orange',
    'Purple',
    'Pink',
    'Black',
    'White',
    'Gray',
  ];
  const categories = [
    'Candles',
    'Lightung Decor',
    'Gift Sets',
    'Get Warm',
    'Table Games',
    'Books & Journals',
  ];
  const [color, setColor] = useState('');
  const [category, setCategory] = useState('');
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: '',
        shortDesc: '',
        inStock: '',
        price: '',
        fullDesc: '',
      },
      validationSchema: addProductSchema,
      onSubmit: values => {
        console.log('Form values:', {
          ...values,
          color,
          category,
        });
      },
    });

  return (
    <div className={styles.addProductPageContainer}>
      <MyAccountNav />
      <div className={styles.container}>
        <h1 className={styles.text}>Add product</h1>
        <div className={styles.addProductContainer}>
          <form className={styles.addProductForm} onSubmit={handleSubmit}>
            <AddProductInput
              type="text"
              id="name"
              name="name"
              placeholder="Product name"
              labelFor="Product name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              errorField={errors.name}
              touched={touched.name}
            />
            <AddProductInput
              type="text"
              id="shortDesc"
              name="shortDesc"
              placeholder="Product description"
              labelFor="Short description of the product"
              value={values.shortDesc}
              onChange={handleChange}
              onBlur={handleBlur}
              errorField={errors.shortDesc}
              touched={touched.shortDesc}
            />
            <div className={styles.selectInputs}>
              <DropDown
                data={colors}
                labelFor="Product color"
                name="color"
                placeholder="Select"
                value={color}
                setF={setColor}
              />
              <DropDown
                data={categories}
                labelFor="Product category"
                name="category"
                placeholder="Select"
                value={category}
                setF={setCategory}
              />
            </div>

            <div className={styles.selectInputs}>
              <AddProductInput
                type="number"
                id="inStock"
                name="inStock"
                placeholder="Amount of products in stock"
                labelFor="Amount of products in stock"
                value={values.inStock}
                onChange={handleChange}
                onBlur={handleBlur}
                errorField={errors.inStock}
                touched={touched.inStock}
              />
              <AddProductInput
                type="number"
                id="price"
                name="price"
                placeholder="Product price"
                labelFor="Product price"
                value={`${values.price}`}
                onChange={handleChange}
                onBlur={handleBlur}
                errorField={errors.price}
                touched={touched.price}
              />
            </div>
            <AddProductInput
              type="text"
              id="fullDesc"
              name="fullDesc"
              placeholder="Text"
              labelFor="Full description of the product"
              value={values.fullDesc}
              onChange={handleChange}
              onBlur={handleBlur}
              errorField={errors.fullDesc}
              touched={touched.fullDesc}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
