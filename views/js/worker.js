importScripts('main.js');

this.onmessage = function(e) {
  var items = e.data.items;
  var prePhase = e.data.prePhase;

  try {
    for (var i = 0; i < items.length; i++) {
      var phase = Math.sin(prePhase + (i % 5));
      items[i].style.left = items[i].basicLeft + 100 * phase + 'px';
    }
    }
    postMessage(undefined);
  } catch (e) {
    function updateException(message) {
      this.name = "UpdateException";
      this.message = message;
    };
    throw new UpdateException('Update error');
    postMessage(undefined);
  }
}
