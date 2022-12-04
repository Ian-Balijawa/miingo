/* eslint-disable import/no-anonymous-default-export */

import React, { useState } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';

import Gallery from 'react-photo-gallery';
import Photo from './Photo';
import { photos } from './photos';

/* popout the browser and maximize to see more rows! -> */
const SortablePhoto = SortableElement((item) => <Photo {...item} />);
const SortableGallery = SortableContainer(({ items }) => (
  <Gallery
    photos={items}
    renderImage={(props) => <SortablePhoto {...props} />}
  />
));

export default () => {
  const [items, setItems] = useState(photos);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(() => {
      const array = items.slice();
      array.splice(
        newIndex < 0 ? array.length + newIndex : newIndex,
        0,
        array.splice(oldIndex, 1)[0]
      );
      return array;
    });
  };

  return (
    <div>
      <SortableGallery items={items} onSortEnd={onSortEnd} axis={'xy'} />
    </div>
  );
};

export const ImageBox = (photos) => {
  return <SortableGallery items={photos} axis={'xy'} />;
};
