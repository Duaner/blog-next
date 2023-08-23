/**
 * @typedef {import("@prismicio/client").Content.TestSliceSlice} TestSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TestSliceSlice>} TestSliceProps
 * @param {TestSliceProps}
 */
const TestSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.richtext} />
      Placeholder component for test_slice (variation: {slice.variation}) Slices
    </section>
  );
};

export default TestSlice;
