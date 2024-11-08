import React, { useEffect, useState } from 'react';
import styles from './ChangeProduct.module.css';
import MyAccountNav from '../../../components/MyAccontNav/MyAccountNav';
import { useFormik } from 'formik';
import { addProductSchema } from '../../../schemas/addProductSchema';
import AddProductInput from '../../../components/UI/AddProductInput/AddProductInput';
import FileInput from '../../../components/FileInput/FileInput';
import Button from '../../../components/UI/Button/Button';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import ChangeDropDown from '../../../components/UI/ChangeDropDown/ChangeDropDown';

const ChangeProduct = () => {
  const { state } = useLocation();
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
    'Lighting Decor',
    'Gift Sets',
    'Get Warm',
    'Table Games',
    'Books & Journals',
  ];

  const [color, setColor] = useState('');
  const [category, setCategory] = useState('');
  const [hoverImages, setHoverImages] = useState([]);
  const [galleryImages, setGalleryImages] = useState([]);
  const [currentHoverImages, setCurrentHoverImages] = useState([state.picture]);
  const [currentGalleryImages, setCurrentGalleryImages] = useState([
    ...state.image,
  ]);
  const onSubmit = values => {
    if (
      [...currentHoverImages, ...hoverImages].length === 0 ||
      [...currentGalleryImages, ...galleryImages].length === 0
    ) {
      return toast.error('Please add images');
    }

    if (!category) {
      return toast.error('Please select category');
    }

    if (!color) {
      return toast.error('Please select color');
    }

    console.log({
      ...values,
      color,
      category,
      hoverImages: [...currentHoverImages, ...hoverImages],
      galleryImages: [...currentGalleryImages, ...galleryImages],
    });
  };

  const formik = useFormik({
    initialValues: {
      name: state ? state.name : '',
      shortDesc: state ? state.description : '',
      inStock: state ? state.quantity : '',
      price: state ? state.price : '',
      fullDesc: state ? state.aboutProduct : '',
    },
    validationSchema: addProductSchema,
    onSubmit,
  });
  useEffect(() => {
    if (state) {
      setColor(`${state.color}`);
      setCategory(state.category);
    }
  }, [state]);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    formik;

  return (
    <div className={styles.addProductPageContainer}>
      <MyAccountNav />
      <div className={styles.container}>
        <h1 className={styles.text}>
          Change product: <span style={{ color: '#fcb654' }}>{state.name}</span>
        </h1>
        <div className={styles.addProductContainer}>
          <form onSubmit={handleSubmit}>
            <div className={styles.addProductForm}>
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
                <ChangeDropDown
                  data={colors}
                  currentOption={state.color}
                  labelFor="Product color"
                  name="color"
                  placeholder="Select"
                  value={color}
                  setF={setColor}
                />
                <ChangeDropDown
                  data={categories}
                  currentOption={state.category}
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
                  value={values.price}
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
                placeholder="Full description"
                labelFor="Full description of the product"
                value={values.fullDesc}
                onChange={handleChange}
                onBlur={handleBlur}
                errorField={errors.fullDesc}
                touched={touched.fullDesc}
              />
              <FileInput
                max={1}
                images={hoverImages}
                setImages={setHoverImages}
                setCurrentImages={setCurrentHoverImages}
                currentItems={currentHoverImages}
              />
              <FileInput
                max={5}
                images={galleryImages}
                setImages={setGalleryImages}
                setCurrentImages={setCurrentGalleryImages}
                currentItems={currentGalleryImages}
              />
            </div>
            <Button text="Add a product" type={'submit'} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangeProduct;
