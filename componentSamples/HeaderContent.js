import React from 'react';

const HeaderContent = (props) => {
  return (

    <header className="header">
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Hotel Silvanus</span>
          <span className="heading-primary--sub">Milas / Ören</span>
        </h1>
        <a href="#section-tours" className="btn btn--white btn--animated">Discover Our Tours</a>
      </div>
    </header>

  );
};

export default HeaderContent;
