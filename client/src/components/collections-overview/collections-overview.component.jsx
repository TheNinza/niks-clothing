import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";

import CollectionPreview from "../collection-preview/collection-preview.component";
import { CollectionsOverviewContainer } from "./collections-overview.styles";

const collectionOverviewVariants = {
  hidden: {
    x: "100vw",
    opacity: 0,
    scaleY: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    scaleY: 1,
    transformOrigin: "top",
    transition: {
      type: "spring",
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const CollectionsOverview = ({ collections }) => {
  return (
    <CollectionsOverviewContainer
      variants={collectionOverviewVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionsOverviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
