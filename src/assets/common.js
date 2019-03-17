export default function() {
  console.log(...arguments);
}

// 节流函数，用于rem window.onresize
export const throttle = (fn, delay, immediately) => {
  // console.log('函数节流：' + fn.name)
  let [context, timer] = [this];
  return () => {
    if (!timer && immediately) fn();
    if (!timer && !immediately) {
      timer = setTimeout(() => {
        fn.call(context);
        timer = null;
      }, delay);
    }
    if (timer) return false;
  };
};

((win, doc) => {
  let [defalutFontSize, remH, size] = [100, 500];
  let remFontSize = () => {
    let { clientWidth, clientHeight } = doc.documentElement;

    size = Math.round((clientHeight / remH) * 100);
    size = size > 100 ? defalutFontSize : size;

    doc.documentElement.style.fontSize = size + 'px';
    doc.body.style.height = clientHeight + 'px';
  };
  win.addEventListener('resize', throttle(remFontSize, 100, false), false);
  doc.addEventListener('DOMContentLoaded', remFontSize, false);
})(window, document);

// creates a global "addWheelListener" method
// example: addWheelListener( elem, function( e ) { console.log( e.deltaY ); e.preventDefault(); } );
(function(window, document) {
  var prefix = '',
    _addEventListener,
    onwheel,
    support;

  // detect event model
  if (window.addEventListener) {
    _addEventListener = 'addEventListener';
  } else {
    _addEventListener = 'attachEvent';
    prefix = 'on';
  }

  // detect available wheel event
  support =
    'onwheel' in document.createElement('div')
      ? 'wheel' // 各个厂商的高版本浏览器都支持"wheel"
      : document.onmousewheel !== undefined
      ? 'mousewheel' // Webkit 和 IE一定支持"mousewheel"
      : 'DOMMouseScroll'; // 低版本firefox

  window.addWheelListener = function(elem, callback, useCapture) {
    _addWheelListener(elem, support, callback, useCapture);

    // handle MozMousePixelScroll in older Firefox
    if (support == 'DOMMouseScroll') {
      _addWheelListener(elem, 'MozMousePixelScroll', callback, useCapture);
    }
  };

  function _addWheelListener(elem, eventName, callback, useCapture) {
    elem[_addEventListener](
      prefix + eventName,
      support == 'wheel'
        ? callback
        : function(originalEvent) {
            !originalEvent && (originalEvent = window.event);

            // create a normalized event object
            var event = {
              // keep a ref to the original event object
              originalEvent: originalEvent,
              target: originalEvent.target || originalEvent.srcElement,
              type: 'wheel',
              deltaMode: originalEvent.type == 'MozMousePixelScroll' ? 0 : 1,
              deltaX: 0,
              deltaZ: 0,
              preventDefault: function() {
                originalEvent.preventDefault
                  ? originalEvent.preventDefault()
                  : (originalEvent.returnValue = false);
              },
            };

            // calculate deltaY (and deltaX) according to the event
            if (support == 'mousewheel') {
              event.deltaY = (-1 / 40) * originalEvent.wheelDelta;
              // Webkit also support wheelDeltaX
              originalEvent.wheelDeltaX &&
                (event.deltaX = (-1 / 40) * originalEvent.wheelDeltaX);
            } else {
              event.deltaY = originalEvent.detail;
            }

            // it's time to fire the callback
            return callback(event);
          },
      useCapture || false,
    );
  }
})(window, document);
