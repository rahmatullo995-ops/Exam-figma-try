import './Jean.css';

const Testimonial = () => {
  return (
    <div className="testimonial-wrapper">
      <div className="testimonial-card">
        <div className="photo-placeholder"></div>
        <div className="content">
          <h3>
            <strong>Anna Jean</strong> <span>• Graphic Designer •</span>
            <span className="stars">★★★★★</span>
          </h3>
          <p>
            “Lorem ipsum dolor sit amet consectetur. Dis volutpat semper semper
            tortor id maecenas pharetra. Dignissim sed vitae tristique risus
            interdum viverra odio. Et mauris sollicitudin amet sed amet. Urna
            sed aliquam velit lectus sagittis a aliquam vel. Et mauris
            sollicitudin.”
          </p>
        </div>
      </div>

      <div className="testimonial-card">
        <div className="photo-placeholder"></div>
        <div className="content">
          <h3>
            <strong>Albert Flores</strong> <span>• Doctor •</span>
            <span className="stars">★★★★★</span>
          </h3>
          <p>
            “Lorem ipsum dolor sit amet consectetur. Dis volutpat semper semper
            tortor id maecenas pharetra. Dignissim sed vitae tristique risus
            interdum viverra odio. Et mauris sollicitudin amet sed amet. Urna
            sed aliquam velit lectus sagittis.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
