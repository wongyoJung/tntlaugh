//Good reference:https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API

function autoPlayer(){
  var player = YT.get('video'); // get the YT object from html
  var fn = function(){player.playVideo();};

} // allow autoplay of youtube if the user allow microphone

navigator.mediaDevices.getUserMedia({ audio: true })
.then(function(stream) {
  audioContext = new AudioContext();
  analyser = audioContext.createAnalyser();
  //create analyser that enables to provide real-time frequency ad time-domain analysis
  microphone = audioContext.createMediaStreamSource(stream);
  //return MediaStreamAudioSourceNode; assign the source of audiocontext to microphone
  javascriptNode = audioContext.createScriptProcessor(2048, 1, 1);
  // creates ScriptProcessorNode interface
  autoPlayer();
  analyser.smoothingTimeConstant = 0.8;
  analyser.fftSize = 1024;

  microphone.connect(analyser);
  analyser.connect(javascriptNode);
  javascriptNode.connect(audioContext.destination);
  javascriptNode.onaudioprocess = function() {
      var array = new Uint8Array(analyser.frequencyBinCount);
      analyser.getByteFrequencyData(array);
      var values = 0;
      var length = array.length;
      for (var i = 0; i < length; i++) {
        values += (array[i]);
      }
      var average = values / length;
      //get volume information from microphone
     // console.log(Math.round(average));
    if(average>10){
      window.location.href= "failedPage.html";
    }

  };
  })
  .catch(function(err) {
    /* handle the error */
    console.log(err);
});
