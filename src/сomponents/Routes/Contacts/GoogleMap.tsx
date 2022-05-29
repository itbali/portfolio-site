import React from 'react';

const GoogleMap = () => {
  return (
    <>
      <iframe
        title={"myPlaceMapFrame"}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1990.7811537628095!2d30.397987843741358!3d60.06842733801194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4697cb508b2960e5%3A0xa826365b1104dcea!2z0JHRg9Cz0YDRiywg0JvQtdC90LjQvdCz0YDQsNC00YHQutCw0Y8g0L7QsdC7LiwgMTg4NjYw!5e0!3m2!1sru!2sru!4v1653414643724!5m2!1sru!2sru"
        width="100%"
        height="450"
        style={{border: "0"}}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"/>
    </>
  );
};

export default GoogleMap;
