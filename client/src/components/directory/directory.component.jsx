import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import { DirectoryMenuContainer } from "./directory.styles";

const directoryVarients = {
  show: {
    transition: { staggerChildren: 0.15, duration: 1 },
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
  exit: {
    transition: { staggerChildren: 0.1, staggerDirection: -1 },
  },
};

const Directory = ({ sections }) => {
  return (
    <DirectoryMenuContainer
      variants={directoryVarients}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </DirectoryMenuContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
