/**
 * @typedef {import("@prismicio/client").Content.BaseSliceSlice} BaseSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BaseSliceSlice>} BaseSliceProps
 * @param {BaseSliceProps}
 */
const BaseSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for base_slice (variation: {slice.variation}) Slices
    </section>
  );
};

export default BaseSlice;
