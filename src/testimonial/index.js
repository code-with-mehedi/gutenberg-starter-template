import { registerBlockType } from "@wordpress/blocks";

import { ReactComponent as Logo } from "../logo.svg";

registerBlockType("mtgtab/testimonial", {
  title: "Testimonial",
  category: "common",
  icon: { src: Logo },
  edit: () => {
    return <h3>Testimonial</h3>;
  },
  save: () => {},
});
