import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import MenuItem from "../menu-item/menu-item.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import { DirectoryMenuContainer } from "./directory.styles";

const Directory = ({ sections }) => {
  let directoryMenuRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      directoryMenuRef,
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, []);

  return (
    <DirectoryMenuContainer ref={(e) => (directoryMenuRef = e)}>
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
