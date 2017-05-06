import React from 'react';
import './Calendar.css';

function adjustHeight(message) {
  var origin = message.origin;
  var event = message.data.event;
  var height = message.data.height;
  if (origin === 'https://entire.life' && event === 'ENTIRELIFE_ROUTE_CHANGE') {
    var iframe = document.querySelector('#entire-life-calendar');
    iframe.height = '' + (height + 5) + 'px';
  }
}

window.addEventListener('message', adjustHeight, false);

export default () => (
  <div className="Calendar">
    <iframe
      id="entire-life-calendar"
      src="https://entire.life/chadoh?embed"
      width="100%"
      height="1000px"
      frameBorder="0"
      style={{
        border: 0,
        backgroundImage: 'url(https://cl.ly/kLqc/download/loading.svg)',
        backgroundPosition: '50% 2em',
        backgroundSize: '150px',
        backgroundRepeat: 'no-repeat',
      }}
    >
    </iframe>
  </div>
);
