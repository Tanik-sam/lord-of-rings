import React from 'react';

class AboutUs extends React.Component {
  render() {
    return (
      <div className="about">
        <div className="about__paragraph">
          <p className="about__title">
            Here must be a page &quot;About us&quot;. But there is no any.
          </p>
          <p className="about__title">
            <span className="title_yellow">Do not confuse with 404! </span>
            You can go to the 404 page using the link in the header!
          </p>
          <p className="about__title">
            The author simply had no inspiration
            <span className="title_yellow"> to create page &quot;About us&quot;!</span>
          </p>
        </div>
        <div className="about__image"></div>
      </div>
    );
  }
}

export default AboutUs;
