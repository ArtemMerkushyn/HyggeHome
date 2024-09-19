import * as yup from "yup";

export const addProductSchema = yup.object().shape({
    name: yup.string().required("Please Enter product name"),
    shortDesc:yup.string().required("Please enter a short description of product"),
    inStock:yup.number().required("Please enter amount in stock"),
    price:yup.string().required("Please enter the price of product"),
    fullDesc: yup.string().required("Please enter a full description of product"),
    hoverImage: yup.array()
        .min(1, 'At least one image is required')
        .max(1, 'Only one image required for hover')
        .of(
        yup.mixed().test("fileType", "Unsupported file format", (value) => ['image/jpeg', 'image/png', 'image/svg'].includes(value?.type))
    )
    .test('File is required', 'File ', (value) => value)
        .test('Size', 'File size must be less than 10mb', (value) => value && value?.size <= 10000000),
    galleryImages: yup.array()
  .min(1, 'At least one image is required')
  .max(5, 'You can upload up to 5 images')
  .of(
    yup.mixed().test("fileType", "Unsupported file format", (value) => ['image/jpeg', 'image/png', 'image/svg'].includes(value?.type))
  )
  .test('File is required', 'At least one image is required', (value) => value && value.length > 0)
  .test('Size', 'Each file must be less than 10mb', (value) => value && value.every(file => file.size <= 10000000))
})