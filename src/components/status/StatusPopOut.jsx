import { Carousel } from 'react-responsive-carousel';

const StatusPopOut = ({ onChange, onClickItem, onClickThumb, statusOwner }) => {
  return (
    <div>
      <Carousel
        showArrows={true}
        autoPlay
        interval="2000"
        transitionTime="1000"
        showThumbs={false}
        swipeable
        useKeyboardArrows
        onChange={onChange}
        onClickItem={onClickItem}
        onClickThumb={onClickThumb}
      >
        {Array.from({ length: 3 }).map((image) => (
          <div style={{ height: '70vh' }} key={image}>
            <img
              style={{ marginTop: 10 }}
              src={
                image || `https://ui-avatars.com/api/?name=${statusOwner?.name}`
              }
              alt="status"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default StatusPopOut;
